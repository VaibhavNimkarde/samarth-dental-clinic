import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function PastelBackground({ variant = 'default' }) {
  const shouldReduceMotion = useReducedMotion();

  // Subtle slow floating animations
  const blob1Animation = shouldReduceMotion
    ? {}
    : {
        x: [0, 25, -20, 0],
        y: [0, -30, 20, 0],
        scale: [1, 1.05, 0.98, 1],
        transition: { duration: 18, repeat: Infinity, ease: 'easeInOut' }
      };

  const blob2Animation = shouldReduceMotion
    ? {}
    : {
        x: [0, -30, 25, 0],
        y: [0, 25, -20, 0],
        scale: [1, 0.95, 1.06, 1],
        transition: { duration: 22, repeat: Infinity, ease: 'easeInOut' }
      };

  const blob3Animation = shouldReduceMotion
    ? {}
    : {
        x: [0, 20, -15, 0],
        y: [0, -20, 15, 0],
        scale: [1, 1.04, 0.96, 1],
        transition: { duration: 20, repeat: Infinity, ease: 'easeInOut' }
      };

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-[#FAF9F6]">
      {/* Diffuse Ambient Pastel Glow 1: Butter Yellow (Top/Center-Left) */}
      <motion.div
        animate={blob1Animation}
        className="absolute -top-[10%] left-[10%] w-[55vw] max-w-[700px] h-[55vw] max-h-[700px] rounded-full blur-[110px] md:blur-[140px] opacity-75"
        style={{
          background: 'radial-gradient(circle, rgba(254, 240, 138, 0.45) 0%, rgba(254, 240, 138, 0.05) 60%, transparent 75%)'
        }}
      />

      {/* Diffuse Ambient Pastel Glow 2: Blush Pink / Peach (Center/Right) */}
      <motion.div
        animate={blob2Animation}
        className="absolute top-[20%] right-[-5%] w-[50vw] max-w-[650px] h-[50vw] max-h-[650px] rounded-full blur-[120px] md:blur-[150px] opacity-70"
        style={{
          background: 'radial-gradient(circle, rgba(251, 207, 232, 0.42) 0%, rgba(254, 215, 170, 0.2) 50%, transparent 75%)'
        }}
      />

      {/* Diffuse Ambient Pastel Glow 3: Soft Lavender (Middle/Bottom-Left) */}
      <motion.div
        animate={blob3Animation}
        className="absolute top-[50%] -left-[10%] w-[50vw] max-w-[650px] h-[50vw] max-h-[650px] rounded-full blur-[120px] md:blur-[150px] opacity-65"
        style={{
          background: 'radial-gradient(circle, rgba(233, 213, 255, 0.4) 0%, rgba(224, 231, 255, 0.15) 55%, transparent 75%)'
        }}
      />

      {/* Diffuse Ambient Pastel Glow 4: Gentle Mint / Aqua (Bottom/Center-Right) */}
      <motion.div
        animate={blob1Animation}
        className="absolute -bottom-[10%] right-[15%] w-[45vw] max-w-[600px] h-[45vw] max-h-[600px] rounded-full blur-[110px] md:blur-[140px] opacity-65"
        style={{
          background: 'radial-gradient(circle, rgba(167, 243, 208, 0.38) 0%, rgba(204, 251, 241, 0.15) 50%, transparent 70%)'
        }}
      />

      {/* Delicate warm ivory overlay to keep the center very readable and clean */}
      <div className="absolute inset-0 bg-[#FAF9F6]/40 backdrop-blur-[1px]" />
    </div>
  );
}
