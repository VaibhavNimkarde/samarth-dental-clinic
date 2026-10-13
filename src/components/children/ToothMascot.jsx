import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function ToothMascot({ expression = 'happy', size = 'md', className = '' }) {
  const shouldReduceMotion = useReducedMotion();

  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
    xl: 'w-32 h-32'
  }[size] || 'w-16 h-16';

  const floatAnimation = shouldReduceMotion
    ? {}
    : {
        y: [0, -6, 0],
        rotate: [0, 2, -2, 0],
        transition: {
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut'
        }
      };

  return (
    <motion.div animate={floatAnimation} className={`inline-block select-none ${className}`}>
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${sizeClasses} drop-shadow-md`}
      >
        {/* Soft back shadow */}
        <ellipse cx="60" cy="110" rx="35" ry="6" fill="#000000" fillOpacity="0.06" />

        {/* Tooth Body Outline & Fill */}
        <path
          d="M32 25C22 36 20 54 23 72C25 84 31 104 43 104C51 104 53 88 60 88C67 88 69 104 77 104C89 104 95 84 97 72C100 54 98 36 88 25C76 12 66 18 60 21C54 18 44 12 32 25Z"
          fill="#FFFFFF"
          stroke="#E2E8F0"
          strokeWidth="3"
        />

        {/* Rosy Cheeks */}
        <circle cx="38" cy="58" r="6" fill="#F472B6" fillOpacity="0.4" />
        <circle cx="82" cy="58" r="6" fill="#F472B6" fillOpacity="0.4" />

        {/* Friendly Eyes */}
        <circle cx="44" cy="50" r="4.5" fill="#1E293B" />
        <circle cx="46" cy="48" r="1.5" fill="#FFFFFF" />

        <circle cx="76" cy="50" r="4.5" fill="#1E293B" />
        <circle cx="78" cy="48" r="1.5" fill="#FFFFFF" />

        {/* Happy Smile */}
        <path
          d="M50 60C50 60 55 67 60 67C65 67 70 60 70 60"
          stroke="#1E293B"
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {/* Sparkle Star on Head */}
        <g transform="translate(68, 14) scale(0.7)">
          <path
            d="M12 0L14.5 8.5L24 12L14.5 15.5L12 24L9.5 15.5L0 12L9.5 8.5L12 0Z"
            fill="#FBBF24"
          />
        </g>
      </svg>
    </motion.div>
  );
}
