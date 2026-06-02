import { motion } from 'framer-motion';
import { Sparkles, Globe } from 'lucide-react';

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full py-6 px-6 md:px-10"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-neon">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <div className="absolute -top-1 -right-1 h-3 w-3 bg-cyan-400 rounded-full animate-pulse" />
          </div>
          <div>
            <h1 className="text-xl font-bold gradient-text">Copy Studio</h1>
            <p className="text-xs text-slate-500 -mt-0.5">Humanizador Profissional</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-white transition-colors"
          >
            <Globe className="h-5 w-5" />
          </motion.a>
        </div>
      </div>
    </motion.header>
  );
}
