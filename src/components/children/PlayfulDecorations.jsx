import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Sparkles, Star } from 'lucide-react';

export function FloatingSparkle({ className = '', delay = 0, size = 16, color = '#F59E0B' }) {
  const shouldReduceMotion = useReducedMotion();

  const animation = shouldReduceMotion
    ? {}
    : {
        y: [0, -8, 0],
        opacity: [0.6, 1, 0.6],
        scale: [1, 1.15, 1],
        transition: {
          duration: 3.5,
          delay,
          repeat: Infinity,
          ease: 'easeInOut'
        }
      };

  return (
    <motion.div
      animate={animation}
      className={`absolute pointer-events-none select-none ${className}`}
    >
      <Sparkles style={{ width: size, height: size, color }} />
    </motion.div>
  );
}

export function FloatingStar({ className = '', delay = 0.5, size = 14, color = '#EC4899' }) {
  const shouldReduceMotion = useReducedMotion();

  const animation = shouldReduceMotion
    ? {}
    : {
        y: [0, -6, 0],
        rotate: [0, 15, -15, 0],
        transition: {
          duration: 4,
          delay,
          repeat: Infinity,
          ease: 'easeInOut'
        }
      };

  return (
    <motion.div
      animate={animation}
      className={`absolute pointer-events-none select-none ${className}`}
    >
      <Star style={{ width: size, height: size, fill: color, color }} />
    </motion.div>
  );
}
