import React from 'react';
import { motion } from 'framer-motion';
import { whyChooseUsPillars } from '../../data/adultServices';

export default function AdultWhyChooseUs() {
  return (
    <section id="why-us" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold text-clinic-teal uppercase tracking-widest mb-3">
            THE SAMARTH STANDARD
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-clinic-charcoal tracking-tight mb-4">
            Professional Care, Clear Guidance
          </h2>
          <p className="text-base text-clinic-charcoal/70">
            We respect your comfort and time. Every treatment recommendation is underpinned by medical rationale and your informed consent.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUsPillars.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="card-surface card-hover-effect rounded-3xl p-7 flex flex-col justify-between"
            >
              <div>
                <div className="text-2xl font-black text-clinic-teal mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-clinic-charcoal mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-clinic-charcoal/70 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Accent dash */}
              <div className="w-10 h-1 bg-clinic-teal/30 rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
