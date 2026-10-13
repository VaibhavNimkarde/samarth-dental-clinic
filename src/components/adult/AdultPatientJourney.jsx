import React from 'react';
import { motion } from 'framer-motion';
import { adultSteps } from '../../data/adultServices';

export default function AdultPatientJourney() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card-surface rounded-3xl md:rounded-4xl p-8 sm:p-12 lg:p-16 border border-black/[0.04] bg-white/90">
          <div className="mb-14">
            <div className="text-xs font-bold text-clinic-teal uppercase tracking-widest mb-2">
              SEAMLESS EXPERIENCE
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-clinic-charcoal tracking-tight">
              Your Care Journey in 3 Reassuring Steps
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {adultSteps.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-full bg-[#1A1D1F] text-white font-bold flex items-center justify-center text-lg mb-6 shadow-sm">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-clinic-charcoal mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-clinic-charcoal/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
