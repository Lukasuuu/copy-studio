import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, RotateCcw, Download } from 'lucide-react';
import { Header } from './components/Header';
import { GlassCard } from './components/GlassCard';
import { NeumorphicButton } from './components/NeumorphicButton';
import { ToneSelector } from './components/ToneSelector';
import { StyleSelector } from './components/StyleSelector';
import { IntensitySlider } from './components/IntensitySlider';
import { TextEditor } from './components/TextEditor';
import { PreviewPanel } from './components/PreviewPanel';
import { humanize, type Tone, type WritingStyle, type Intensity } from './lib/humanizer';

const DEFAULT_TEXT = `Utilize nossa solução premium para maximizar seus resultados e otimizar seus processos de forma eficiente. Nossa plataforma inovadora oferece recursos avançados que irão revolucionar a maneira como você trabalha.

Compre agora e obtenha resultados extraordinários!`;

export default function App() {
  const [inputText, setInputText] = useState(DEFAULT_TEXT);
  const [tone, setTone] = useState<Tone>('conversational');
  const [style, setStyle] = useState<WritingStyle>('casual');
  const [intensity, setIntensity] = useState<Intensity>('medium');
  const [output, setOutput] = useState({ text: '', score: 0 });
  const [isProcessing, setIsProcessing] = useState(false);

  const processText = useCallback(() => {
    if (!inputText.trim()) {
      setOutput({ text: '', score: 0 });
      return;
    }
    setIsProcessing(true);
    setTimeout(() => {
      const result = humanize(inputText, { tone, style, intensity });
      setOutput(result);
      setIsProcessing(false);
    }, 300);
  }, [inputText, tone, style, intensity]);

  useEffect(() => {
    processText();
  }, [processText]);

  const handleExport = () => {
    const blob = new Blob(
      [JSON.stringify({ original: inputText, humanized: output.text, tone, style, intensity, score: output.score }, null, 2)],
      { type: 'application/json' }
    );
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'humanized-text.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleReset = () => {
    setInputText('');
    setTone('conversational');
    setStyle('casual');
    setIntensity('medium');
  };

  return (
    <div className="min-h-screen animated-bg text-slate-200">
      <Header />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-7xl mx-auto px-6 md:px-10 pb-12"
      >
        {/* Hero Section */}
        <div className="text-center py-8 md:py-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            <span className="gradient-text">Transforme textos</span>
            <br />
            em copy que converte
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg"
          >
            Humanize qualquer texto com 13 tons de voz, 5 estilos de escrita e 4 níveis de intensidade.
            Ideal para landing pages, apps, descrições de loja e copy de marketing.
          </motion.p>
        </div>

        {/* Main Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Sidebar Controls */}
          <div className="lg:col-span-3 space-y-5">
            <GlassCard hover={false} className="space-y-6">
              <ToneSelector value={tone} onChange={setTone} />
              <div className="h-px bg-white/5" />
              <StyleSelector value={style} onChange={setStyle} />
              <div className="h-px bg-white/5" />
              <IntensitySlider value={intensity} onChange={setIntensity} />
            </GlassCard>

            <div className="flex gap-2">
              <NeumorphicButton onClick={handleReset} variant="danger" size="sm" className="flex-1">
                <RotateCcw className="h-4 w-4 inline mr-1" /> Reset
              </NeumorphicButton>
              <NeumorphicButton onClick={handleExport} variant="primary" size="sm" className="flex-1">
                <Download className="h-4 w-4 inline mr-1" /> Export
              </NeumorphicButton>
            </div>
          </div>

          {/* Editor Area */}
          <div className="lg:col-span-4">
            <TextEditor
              value={inputText}
              onChange={setInputText}
              placeholder="Cole o texto do seu gerador de IA aqui..."
            />
          </div>

          {/* Preview Area */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              {isProcessing ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full flex flex-col items-center justify-center glass rounded-2xl min-h-[400px]"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                  >
                    <Zap className="h-8 w-8 text-cyan-400" />
                  </motion.div>
                  <p className="mt-4 text-sm text-slate-500">Humanizando texto...</p>
                </motion.div>
              ) : (
                <PreviewPanel
                  key="result"
                  originalText={inputText}
                  humanizedText={output.text}
                  score={output.score}
                />
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Features Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: '13 Tons de Voz', value: 'Conversational, Persuasive, Humorous...', color: '#00f0ff' },
            { label: '5 Estilos', value: 'Casual, Formal, Técnico, Criativo...', color: '#8b5cf6' },
            { label: '4 Intensidades', value: 'Light, Medium, Aggressive, Ninja', color: '#ec4899' },
            { label: 'Offline', value: 'Processamento 100% local, zero API', color: '#22c55e' },
          ].map((feat, i) => (
            <motion.div
              key={feat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 + i * 0.1 }}
              className="glass rounded-xl p-4 text-center"
            >
              <p className="text-sm font-semibold" style={{ color: feat.color }}>{feat.label}</p>
              <p className="text-xs text-slate-500 mt-1">{feat.value}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer */}
        <footer className="mt-16 text-center text-xs text-slate-600">
          <p>Copy Studio — Humanizador de Texto Profissional</p>
          <p className="mt-1">Processamento 100% local. Nenhum texto é enviado para servidores.</p>
        </footer>
      </motion.main>
    </div>
  );
}
