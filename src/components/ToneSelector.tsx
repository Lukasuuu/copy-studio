import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { TONES, type Tone } from '../lib/humanizer';
import { cn } from '../lib/utils';

interface ToneSelectorProps {
  value: Tone;
  onChange: (tone: Tone) => void;
}

export function ToneSelector({ value, onChange }: ToneSelectorProps) {
  return (
    <div className="space-y-3">
      <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Tom de Voz</p>
      <div className="grid grid-cols-2 gap-2">
        {TONES.map((tone, i) => {
          const Icon = (Icons as Record<string, React.ComponentType<{ className?: string }>>)[tone.icon] || Icons.Circle;
          const isActive = value === tone.value;
          return (
            <motion.button
              key={tone.value}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.03 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onChange(tone.value)}
              className={cn(
                'relative flex items-center gap-3 rounded-xl p-3 text-left transition-all duration-200',
                isActive
                  ? 'bg-cyan-500/10 border border-cyan-500/40 shadow-neon'
                  : 'bg-white/5 border border-transparent hover:bg-white/10'
              )}
            >
              <div
                className={cn(
                  'flex h-9 w-9 items-center justify-center rounded-lg shrink-0',
                  isActive ? 'bg-cyan-500/20 text-cyan-400' : 'bg-white/5 text-slate-400'
                )}
              >
                <Icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className={cn('font-medium text-sm', isActive ? 'text-cyan-300' : 'text-slate-300')}>
                  {tone.label}
                </p>
                <p className="text-xs text-slate-500 truncate">{tone.desc}</p>
              </div>
              {isActive && (
                <motion.div
                  layoutId="toneActive"
                  className="absolute inset-0 rounded-xl border border-cyan-500/40 pointer-events-none"
                  transition={{ type: 'spring', bounce: 0.15, duration: 0.5 }}
                />
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
