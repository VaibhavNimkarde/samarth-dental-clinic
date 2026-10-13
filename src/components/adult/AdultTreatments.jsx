import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Microscope,
  Layers,
  Stethoscope,
  ShieldCheck,
  Gem,
  Sparkles,
  MapPin,
  PlusSquare,
  Wrench,
  Activity
} from 'lucide-react';
import { adultHighlights, primaryTreatments, secondaryTreatments } from '../../data/adultServices';

export default function AdultTreatments() {
  const getHighlightIcon = (icon) => {
    switch (icon) {
      case 'tooth': return <Activity className="w-5 h-5 text-clinic-teal" />;
      case 'wrench': return <Wrench className="w-5 h-5 text-clinic-teal" />;
      case 'plus-square': return <PlusSquare className="w-5 h-5 text-clinic-teal" />;
      case 'map-pin': return <MapPin className="w-5 h-5 text-clinic-teal" />;
      default: return <Activity className="w-5 h-5 text-clinic-teal" />;
    }
  };

  const getPrimaryIcon = (icon) => {
    switch (icon) {
      case 'microscope': return <Microscope className="w-6 h-6 text-clinic-teal" />;
      case 'layers': return <Layers className="w-6 h-6 text-amber-600" />;
      case 'stethoscope': return <Stethoscope className="w-6 h-6 text-sky-600" />;
      default: return <Microscope className="w-6 h-6 text-clinic-teal" />;
    }
  };

  const getSecondaryIcon = (icon) => {
    switch (icon) {
      case 'shield-check': return <ShieldCheck className="w-5 h-5 text-clinic-teal" />;
      case 'gem': return <Gem className="w-5 h-5 text-cyan-600" />;
      case 'sparkles': return <Sparkles className="w-5 h-5 text-emerald-600" />;
      default: return <ShieldCheck className="w-5 h-5 text-clinic-teal" />;
    }
  };

  return (
    <section id="treatments" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Row of 4 Clinical Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {adultHighlights.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="card-surface card-hover-effect rounded-3xl p-6 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-black/[0.03] flex items-center justify-center mb-5">
                  {getHighlightIcon(item.icon)}
                </div>
                <h3 className="text-lg font-bold text-clinic-charcoal mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-clinic-charcoal/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Specialized Disciplines Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-bold text-clinic-teal uppercase tracking-widest mb-3">
              SPECIALIZED DISCIPLINES
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-clinic-charcoal tracking-tight">
              Dental Care Designed Around Your Needs
            </h2>
          </div>
          <p className="text-sm sm:text-base text-clinic-charcoal/70 max-w-md">
            Prioritizing natural tooth preservation, minimally invasive endodontics, and structural restorations using hospital-grade hygiene controls.
          </p>
        </div>

        {/* 3 Featured Treatment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {primaryTreatments.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="card-surface card-hover-effect rounded-3xl p-7 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-black/[0.03] flex items-center justify-center mb-6">
                  {getPrimaryIcon(t.icon)}
                </div>
                <div className="text-[10px] font-bold text-clinic-teal uppercase tracking-widest mb-1.5">
                  {t.category}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-clinic-charcoal mb-3">
                  {t.title}
                </h3>
                <p className="text-sm text-clinic-charcoal/70 leading-relaxed mb-6">
                  {t.description}
                </p>
              </div>

              {/* Card Footer Strip with Arrow */}
              <div className="pt-5 border-t border-black/[0.05] flex items-center justify-between">
                <span className="text-xs font-semibold text-clinic-charcoal/80">
                  {t.tag}
                </span>
                <div className="w-8 h-8 rounded-full bg-black/[0.04] flex items-center justify-center text-clinic-charcoal">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 3 Secondary Treatments Compact Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {secondaryTreatments.map((sec, idx) => (
            <motion.div
              key={sec.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="card-surface rounded-2xl p-5 flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-black/[0.03] flex items-center justify-center shrink-0">
                {getSecondaryIcon(sec.icon)}
              </div>
              <div>
                <h4 className="text-sm font-bold text-clinic-charcoal mb-1">
                  {sec.title}
                </h4>
                <p className="text-xs text-clinic-charcoal/65 leading-relaxed">
                  {sec.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
