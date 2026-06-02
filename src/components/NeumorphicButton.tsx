import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

interface NeumorphicButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  active?: boolean;
  variant?: 'default' | 'primary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
}

export function NeumorphicButton({
  children,
  onClick,
  className,
  active = false,
  variant = 'default',
  size = 'md',
}: NeumorphicButtonProps) {
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-8 py-3 text-lg',
  };

  const variantClasses = {
    default: 'text-slate-300 hover:text-white',
    primary: 'text-cyan-400 hover:text-cyan-300',
    danger: 'text-rose-400 hover:text-rose-300',
  };

  return (
    <motion.button
      whileTap={{ scale: 0.96 }}
      whileHover={{ scale: 1.02 }}
      onClick={onClick}
      className={cn(
        'rounded-xl font-medium transition-colors duration-200',
        active ? 'neumorphic-pressed' : 'neumorphic',
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      {children}
    </motion.button>
  );
}
