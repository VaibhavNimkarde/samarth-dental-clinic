import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, MapPin, Sparkles } from 'lucide-react';
import PastelBackground from '../components/common/PastelBackground';
import { clinicData } from '../data/clinicData';

export default function SplashPage() {
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();

  // Auto-advance after 3.2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/choose');
    }, 3400);

    return () => clearTimeout(timer);
  }, [navigate]);

  const handleEnter = () => {
    navigate('/choose');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.18,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.88 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-between items-center p-6 sm:p-10 select-none overflow-hidden">
      <PastelBackground variant="splash" />

      {/* Top Header Corner Labels matching PDF Page 1 */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full max-w-7xl flex items-center justify-between text-[11px] sm:text-xs font-semibold text-clinic-charcoal/50 tracking-widest uppercase"
      >
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-clinic-teal" />
          <span>STATE-OF-THE-ART PRECISION</span>
        </div>
        <div className="hidden sm:flex items-center gap-1.5">
          <span>HOSPITAL-GRADE PROTOCOLS</span>
        </div>
      </motion.div>

      {/* Center Hero Identity Composition */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="my-auto flex flex-col items-center text-center max-w-3xl px-4"
      >
        {/* Glowing Dental Emblem */}
        <motion.div
          variants={logoVariants}
          className="relative mb-8 flex items-center justify-center"
        >
          {/* Luminous layered ambient halo */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-200/50 via-rose-200/40 to-teal-200/50 blur-2xl transform scale-150 animate-pulse" />
          
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full p-2 bg-white/80 shadow-2xl backdrop-blur-md border border-white/60 flex items-center justify-center">
            <img
              src="/images/clinic-emblem.png"
              alt="Dr. Banarase's Samarth Dental Clinic Emblem"
              className="w-full h-full object-contain drop-shadow-md select-none"
            />
          </div>
        </motion.div>

        {/* Location Pill */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-black/[0.04] text-[11px] font-bold text-clinic-charcoal/80 tracking-widest uppercase mb-6 shadow-sm"
        >
          <MapPin className="w-3.5 h-3.5 text-clinic-teal" />
          <span>{clinicData.location}</span>
        </motion.div>

        {/* Clinic Name Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl font-black text-clinic-charcoal tracking-tight mb-3 leading-tight"
        >
          <span>Dr. Banarase's </span>
          <span className="text-clinic-teal">{clinicData.highlightName}</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          variants={itemVariants}
          className="text-xs sm:text-sm md:text-base font-bold text-clinic-muted tracking-[0.22em] uppercase mb-4"
        >
          {clinicData.subtitle}
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-sm sm:text-base text-clinic-charcoal/70 italic font-medium max-w-lg mb-10"
        >
          • {clinicData.tagline} •
        </motion.p>

        {/* Main Enter CTA Button */}
        <motion.div variants={itemVariants} className="pt-2">
          <button
            onClick={handleEnter}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white hover:bg-[#FAF9F6] text-clinic-charcoal font-semibold text-sm sm:text-base border border-black/10 shadow-card hover:shadow-card-hover transition-all duration-300 active:scale-95"
          >
            <span>Enter Clinic Experience</span>
            <ArrowRight className="w-4 h-4 text-clinic-teal transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </motion.div>
      </motion.div>

      {/* Bottom Supporting Label */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="w-full text-center text-[11px] font-semibold text-clinic-charcoal/50 tracking-widest uppercase flex items-center justify-center gap-2"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-clinic-teal" />
        <span>CONSULTATIONS AVAILABLE DAILY</span>
      </motion.div>
    </div>
  );
}
