import { motion } from 'framer-motion';
import { Copy, Check, Sparkles, BarChart3 } from 'lucide-react';
import { useState } from 'react';
import { GlassCard } from './GlassCard';

interface PreviewPanelProps {
  originalText: string;
  humanizedText: string;
  score: number;
}

export function PreviewPanel({ originalText, humanizedText, score }: PreviewPanelProps) {
  const [copied, setCopied] = useState(false);
  const [showDiff, setShowDiff] = useState(true);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(humanizedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scoreColor = score >= 80 ? '#22c55e' : score >= 60 ? '#3b82f6' : score >= 40 ? '#f59e0b' : '#ef4444';

  const wordCount = humanizedText.trim().split(/\s+/).filter(Boolean).length;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="space-y-4"
    >
      {/* Score Card */}
      <GlassCard className="flex items-center justify-between py-4" hover={false}>
        <div className="flex items-center gap-3">
          <div
            className="h-12 w-12 rounded-full flex items-center justify-center text-lg font-bold"
            style={{
              backgroundColor: `${scoreColor}20`,
              color: scoreColor,
              border: `2px solid ${scoreColor}40`,
            }}
          >
            {score}
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-300">Human Score</p>
            <p className="text-xs text-slate-500">{score >= 80 ? 'Muito natural' : score >= 60 ? 'Bom' : score >= 40 ? 'Neutro' : 'Robótico'}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <BarChart3 className="h-4 w-4" />
          <span>{wordCount} palavras</span>
        </div>
      </GlassCard>

      {/* Result Card */}
      <GlassCard className="flex flex-col min-h-[300px]" glow={!!humanizedText}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-cyan-400" />
            <span className="text-sm font-semibold text-slate-300">Texto Humanizado</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowDiff(!showDiff)}
              className="text-xs px-2 py-1 rounded-md bg-white/5 text-slate-400 hover:text-white transition-colors"
            >
              {showDiff ? 'Esconder original' : 'Mostrar original'}
            </button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleCopy}
              className="p-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 transition-colors"
            >
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </motion.button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {humanizedText ? (
            <div className="text-slate-200 leading-relaxed whitespace-pre-wrap">
              {showDiff && originalText ? (
                <DiffView original={originalText} modified={humanizedText} />
              ) : (
                humanizedText
              )}
            </div>
          ) : (
            <div className="h-full flex items-center justify-center text-slate-600 text-sm">
              O texto humanizado aparecerá aqui...
            </div>
          )}
        </div>

        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-3 text-xs text-center text-cyan-400"
          >
            Copiado para a área de transferência!
          </motion.div>
        )}
      </GlassCard>
    </motion.div>
  );
}

// Simple diff visualization
function DiffView({ modified }: { original: string; modified: string }) {
  // This is a simplified diff - just show modified text highlighted
  // In a real app you'd use a proper diff library
  return <span>{modified}</span>;
}
