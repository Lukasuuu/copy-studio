import { motion } from 'framer-motion';
import { FileText, Trash2 } from 'lucide-react';

interface TextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function TextEditor({ value, onChange, placeholder }: TextEditorProps) {
  const wordCount = value.trim().split(/\s+/).filter(Boolean).length;
  const charCount = value.length;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="glass rounded-2xl p-5 flex flex-col h-full min-h-[400px]"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <FileText className="h-5 w-5 text-cyan-400" />
          <span className="text-sm font-semibold text-slate-300">Texto Original</span>
        </div>
        {value && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => onChange('')}
            className="p-1.5 rounded-lg hover:bg-rose-500/20 text-slate-500 hover:text-rose-400 transition-colors"
          >
            <Trash2 className="h-4 w-4" />
          </motion.button>
        )}
      </div>

      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder || 'Cole ou digite o texto que deseja humanizar...'}
        className="flex-1 w-full bg-transparent text-slate-200 placeholder-slate-600 resize-none outline-none text-base leading-relaxed"
        spellCheck={false}
      />

      <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/5">
        <div className="flex gap-4 text-xs text-slate-500">
          <span>{wordCount} palavras</span>
          <span>{charCount} caracteres</span>
        </div>
      </div>
    </motion.div>
  );
}
