import { motion } from 'framer-motion';
import { INTENSITIES, type Intensity } from '../lib/humanizer';
import { cn } from '../lib/utils';

interface IntensitySliderProps {
  value: Intensity;
  onChange: (intensity: Intensity) => void;
}

export function IntensitySlider({ value, onChange }: IntensitySliderProps) {
  const currentIndex = INTENSITIES.findIndex(i => i.value === value);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Intensidade</p>
        <motion.span
          key={value}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="px-3 py-1 rounded-full text-xs font-bold"
          style={{
            backgroundColor: `${INTENSITIES[currentIndex].color}20`,
            color: INTENSITIES[currentIndex].color,
            border: `1px solid ${INTENSITIES[currentIndex].color}40`,
          }}
        >
          {INTENSITIES[currentIndex].label}
        </motion.span>
      </div>

      <div className="relative">
        <div className="h-2 rounded-full bg-white/5">
          <motion.div
            className="h-full rounded-full"
            initial={false}
            animate={{
              width: `${((currentIndex + 1) / INTENSITIES.length) * 100}%`,
              backgroundColor: INTENSITIES[currentIndex].color,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          />
        </div>
        <div className="flex justify-between mt-3">
          {INTENSITIES.map((intensity, i) => {
            const isActive = i === currentIndex;
            return (
              <motion.button
                key={intensity.value}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => onChange(intensity.value)}
                className={cn(
                  'w-4 h-4 rounded-full border-2 transition-colors',
                  isActive
                    ? 'border-white shadow-lg'
                    : 'border-white/20 hover:border-white/50'
                )}
                style={{
                  backgroundColor: isActive ? intensity.color : 'transparent',
                  boxShadow: isActive ? `0 0 12px ${intensity.color}` : 'none',
                }}
              />
            );
          })}
        </div>
      </div>

      <p className="text-xs text-slate-500">{INTENSITIES[currentIndex].desc}</p>
    </div>
  );
}
