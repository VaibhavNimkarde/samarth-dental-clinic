import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Microscope, Calendar } from 'lucide-react';
import { clinicData } from '../../data/clinicData';
import { adultStats } from '../../data/adultServices';

export default function AdultHero({ onBookClick }) {
  const doc = clinicData.doctors.adult;

  return (
    <section id="home" className="relative pt-6 pb-16 md:pt-10 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Top Tag Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-clinic-teal/10 text-clinic-teal text-xs font-bold uppercase tracking-wider mb-6">
              <ShieldCheck className="w-4 h-4" />
              <span>ROOT CANAL SPECIALIST • DENTAL IMPLANT SERVICES</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-clinic-charcoal tracking-tight leading-[1.15] mb-6">
              Expert Dental Care for{' '}
              <span className="text-clinic-teal italic font-serif">Healthier Smiles.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-clinic-charcoal/75 leading-relaxed max-w-xl mb-8">
              From advanced root canal treatment to comprehensive dental implant services, discover professional dental care tailored to your unique needs.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <button
                onClick={onBookClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-[#1A1D1F] hover:bg-black text-white font-semibold text-sm sm:text-base shadow-sm hover:shadow-md transition-all active:scale-95"
              >
                <span>Book an Appointment</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#treatments"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white hover:bg-black/[0.03] text-clinic-charcoal font-semibold text-sm sm:text-base border border-black/10 shadow-sm transition-all"
              >
                <span>Explore Dental Services</span>
                <ArrowRight className="w-4 h-4 text-clinic-teal" />
              </a>
            </div>

            {/* Clinical Stats Row */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 w-full max-w-lg pt-4 border-t border-black/[0.06]">
              {adultStats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl sm:text-3xl font-black text-clinic-charcoal tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs text-clinic-charcoal/60 font-medium mt-1 leading-snug">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Doctor Visual Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative flex justify-center"
          >
            {/* Soft Ambient Halo behind portrait */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-cyan-100/30 via-slate-100/40 to-teal-100/30 blur-2xl -z-10" />

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
                  <div className="text-base sm:text-lg font-bold leading-tight">
                    {doc.name}
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-300 font-medium tracking-wide mt-0.5">
                    {doc.title} • Senior Practitioner
                  </div>
                </div>
              </div>

              {/* Bottom Feature Pill Badge */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#FAF9F6] border border-black/[0.04] mt-3.5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-clinic-teal/10 text-clinic-teal flex items-center justify-center">
                    <Microscope className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-clinic-charcoal">Microscopic Precision</div>
                    <div className="text-[11px] text-clinic-charcoal/60">Conservative preservation</div>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-clinic-teal/10 text-clinic-teal uppercase tracking-wider">
                  Single-Visit
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
