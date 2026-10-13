import React from 'react';
import { motion } from 'framer-motion';
import { Smile, ArrowRight, ShieldCheck, Heart, Sparkles, Star } from 'lucide-react';
import ToothMascot from './ToothMascot';
import { FloatingSparkle, FloatingStar } from './PlayfulDecorations';
import { clinicData } from '../../data/clinicData';

export default function PediatricHero({ onBookClick }) {
  const doc = clinicData.doctors.pediatric;

  return (
    <section id="home" className="relative pt-6 pb-16 md:pt-10 md:pb-24 overflow-hidden">
      {/* Decorative Playful Floating Elements */}
      <FloatingSparkle className="top-8 left-[8%] hidden md:block" size={20} color="#F59E0B" delay={0.2} />
      <FloatingStar className="top-24 right-[12%] hidden md:block" size={16} color="#EC4899" delay={0.7} />
      <FloatingSparkle className="bottom-10 left-[15%] hidden lg:block" size={18} color="#10B981" delay={1.1} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Small Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-clinic-teal/10 text-clinic-teal text-xs font-bold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-clinic-teal animate-pulse" />
              <span>PEDIATRIC DENTISTRY • AGES 0–18</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-clinic-charcoal tracking-tight leading-[1.15] mb-6">
              Gentle Dental Care for{' '}
              <span className="text-clinic-teal italic font-serif">Little Smiles.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-clinic-charcoal/75 leading-relaxed max-w-xl mb-8">
              Thoughtful dental care for growing smiles, with a dedicated focus on children's natural comfort, healthy daily habits, and anxiety-free visits.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <button
                onClick={onBookClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-[#0B6A62] hover:bg-[#074D47] text-white font-semibold text-sm sm:text-base shadow-sm hover:shadow-md transition-all active:scale-95"
              >
                <Smile className="w-5 h-5" />
                <span>Book a Child's Appointment</span>
              </button>

              <a
                href="#doctor"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white hover:bg-black/[0.03] text-clinic-charcoal font-semibold text-sm sm:text-base border border-black/10 shadow-sm transition-all"
              >
                <span>Meet Dr. Samiksha</span>
                <ArrowRight className="w-4 h-4 text-clinic-teal" />
              </a>
            </div>

            {/* Trust Mini Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg">
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/80 border border-black/[0.04] shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-clinic-charcoal/50 font-medium uppercase tracking-wider">100%</div>
                  <div className="text-sm font-bold text-clinic-charcoal">Child-Centered Space</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/80 border border-black/[0.04] shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-clinic-charcoal/50 font-medium uppercase tracking-wider">{doc.degrees}</div>
                  <div className="text-sm font-bold text-clinic-charcoal">{doc.roleBadge}</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Doctor Visual Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative flex justify-center"
          >
            {/* Soft Ambient Pastel Halo behind portrait */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-amber-200/40 via-pink-200/30 to-teal-200/40 blur-2xl -z-10" />

            {/* Cute Tooth Mascot peeking from top right */}
            <div className="absolute -top-10 -right-4 z-20 hidden sm:block">
              <ToothMascot size="md" />
            </div>

            {/* Doctor Card Frame */}
            <div className="card-surface rounded-3xl sm:rounded-4xl p-3.5 sm:p-4 shadow-xl border border-black/[0.05] w-full max-w-md bg-white">
              {/* Doctor Photo */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/5] bg-slate-100">
                <img
                  src={doc.photo}
                  alt={doc.name}
                  className="w-full h-full object-cover object-top"
                />

                {/* Overlay Doctor Title Badge */}
                <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 bg-gradient-to-t from-black/85 via-black/40 to-transparent text-white">
                  <div className="text-[11px] sm:text-xs font-bold text-emerald-300 tracking-wider uppercase mb-0.5">
                    LEAD PEDIATRIC DENTIST
                  </div>
                  <div className="text-base sm:text-lg font-bold leading-tight">
                    {doc.name}
                  </div>
                </div>
              </div>

              {/* Bottom Feature Badges */}
              <div className="grid grid-cols-2 gap-2.5 mt-3.5">
                <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-emerald-50/70 border border-emerald-100/60">
                  <Heart className="w-4 h-4 text-emerald-600 shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-emerald-950">Comfort-First</div>
                    <div className="text-[11px] text-emerald-700">Gentle pacing</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-teal-50/70 border border-teal-100/60">
                  <Smile className="w-4 h-4 text-teal-600 shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-teal-950">Stress-Free</div>
                    <div className="text-[11px] text-teal-700">Fun, warm visits</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
