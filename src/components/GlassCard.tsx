import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export function GlassCard({ children, className, hover = true, glow = false }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      whileHover={hover ? { y: -4, boxShadow: '0 20px 40px rgba(0, 240, 255, 0.15)' } : undefined}
      className={cn(
        'glass rounded-2xl p-6',
        glow && 'neon-border',
        className
      )}
    >
      {children}
    </motion.div>
  );
}
