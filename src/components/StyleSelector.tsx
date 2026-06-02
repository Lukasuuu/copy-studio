import { motion } from 'framer-motion';
import { STYLES, type WritingStyle } from '../lib/humanizer';
import { cn } from '../lib/utils';

interface StyleSelectorProps {
  value: WritingStyle;
  onChange: (style: WritingStyle) => void;
}

export function StyleSelector({ value, onChange }: StyleSelectorProps) {
  return (
    <div className="space-y-3">
      <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Estilo de Escrita</p>
      <div className="flex flex-wrap gap-2">
        {STYLES.map((style, i) => {
          const isActive = value === style.value;
          return (
            <motion.button
              key={style.value}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onChange(style.value)}
              className={cn(
                'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                isActive
                  ? 'bg-blue-500/15 text-blue-300 border border-blue-500/40'
                  : 'bg-white/5 text-slate-400 border border-transparent hover:bg-white/10'
              )}
            >
              {style.label}
            </motion.button>
          );
        })}
      </div>
      <p className="text-xs text-slate-500">
        {STYLES.find(s => s.value === value)?.desc}
      </p>
    </div>
  );
}
