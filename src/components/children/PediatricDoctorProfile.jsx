import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import ToothMascot from './ToothMascot';
import { clinicData } from '../../data/clinicData';

export default function PediatricDoctorProfile({ onBookClick }) {
  const doc = clinicData.doctors.pediatric;

  return (
    <section id="doctor" className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card-surface rounded-3xl md:rounded-4xl p-8 sm:p-12 lg:p-16 border border-black/[0.05] relative overflow-hidden bg-white/95">
          {/* Ambient Glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-amber-100/40 blur-3xl -z-10 pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-teal-100/40 blur-3xl -z-10 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Doctor Portrait */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 relative flex justify-center"
            >
              <div className="relative w-full max-w-sm rounded-3xl overflow-hidden shadow-lg border border-black/5 aspect-[4/5] bg-slate-100">
                <img
                  src={doc.photo}
                  alt={doc.name}
                  className="w-full h-full object-cover object-top"
                />

                {/* Floating Dentist Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-sm border border-black/5 flex items-center gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-clinic-teal shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-clinic-charcoal">
                    {doc.roleBadge}
                  </span>
                </div>
              </div>

              {/* Little Tooth Mascot Decor */}
              <div className="absolute -top-6 -left-4 hidden sm:block">
                <ToothMascot size="sm" />
              </div>
            </motion.div>

            {/* Right Doctor Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 flex flex-col items-start"
            >
              {/* Age Focus Badge */}
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 tracking-wide mb-4">
                Age Focus: 0–18 Years
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-clinic-charcoal tracking-tight mb-2">
                {doc.name}
              </h2>

              <p className="text-sm sm:text-base font-semibold text-clinic-teal mb-6">
                {doc.title} | {doc.degrees}
              </p>

              {/* Quote callout box */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#FAF9F6] border-l-4 border-clinic-teal mb-6 text-clinic-charcoal/90 italic text-sm sm:text-base leading-relaxed">
                "{doc.quote}"
              </div>

              <p className="text-sm sm:text-base text-clinic-charcoal/75 leading-relaxed mb-8">
                {doc.bio}
              </p>

              {/* Highlights Checkmarks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8 w-full">
                {doc.highlights.map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-sm font-semibold text-clinic-charcoal">
                    <CheckCircle2 className="w-4 h-4 text-clinic-teal shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Book Button */}
              <button
                onClick={onBookClick}
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-[#0B6A62] hover:bg-[#074D47] text-white font-semibold text-sm sm:text-base shadow-sm hover:shadow-md transition-all active:scale-95"
              >
                <span>Book an Appointment with Dr. Samiksha</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
