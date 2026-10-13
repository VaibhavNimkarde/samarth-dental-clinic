import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ShieldCheck,
  Smile,
  Phone,
  MapPin,
  Clock,
  Sparkles,
  Microscope,
  Baby,
  Activity,
  CheckCircle2,
  HeartPulse,
  Radio
} from 'lucide-react';
import PastelBackground from '../components/common/PastelBackground';
import ClinicLogo from '../components/common/ClinicLogo';
import { clinicData } from '../data/clinicData';

export default function ChooseDentistPage() {
  const navigate = useNavigate();
  const pediatric = clinicData.doctors.pediatric;
  const adult = clinicData.doctors.adult;

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.15 + i * 0.12,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  return (
    <div className="relative min-h-screen py-8 px-4 sm:px-6 lg:px-8 flex flex-col justify-between overflow-x-hidden">
      <PastelBackground variant="choose" />

      {/* Floating Header Pill matching PDF Page 2 */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-xl mx-auto w-full mb-10"
      >
        <div className="card-surface rounded-full px-5 py-2.5 shadow-pill flex items-center justify-between gap-4 border border-black/[0.04] bg-white/95">
          <ClinicLogo
            size="sm"
            showSubtitle={true}
            subtitleText={clinicData.subtitle}
            asLink={false}
          />
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/[0.03] text-[10px] font-bold text-clinic-charcoal/70 uppercase tracking-wider shrink-0">
            <MapPin className="w-3 h-3 text-clinic-teal" />
            <span>{clinicData.location}</span>
          </div>
        </div>
      </motion.div>

      {/* Main Title & Subtitle */}
      <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-black text-clinic-charcoal tracking-tight mb-4"
        >
          Choose Your Dentist
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-base sm:text-lg text-clinic-charcoal/75 max-w-2xl mx-auto leading-relaxed"
        >
          Personalized dental care tailored with clinical precision and gentle hospitality for every smile.
        </motion.p>
      </div>

      {/* The Two Main Dentist Choice Cards */}
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-16">
        {/* Card 1: Pediatric Dentist */}
        <motion.div
          custom={0}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          onClick={() => navigate('/children')}
          className="card-surface card-hover-effect rounded-3xl md:rounded-4xl p-6 sm:p-8 flex flex-col justify-between border border-black/[0.04] bg-white cursor-pointer group relative overflow-hidden"
        >
          {/* Subtle warm pastel glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-100/30 rounded-full blur-3xl pointer-events-none -z-10 group-hover:bg-amber-200/40 transition-colors" />

          <div>
            {/* Top Badges */}
            <div className="flex items-center justify-between gap-2 mb-6 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-100">
                <Baby className="w-3.5 h-3.5 text-amber-600" />
                <span>{pediatric.title}</span>
              </span>
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-100">
                <span>{pediatric.ageRange}</span>
              </span>
            </div>

            {/* Split layout: Photo + Info */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center mb-6">
              {/* Doctor Photo */}
              <div className="sm:col-span-5 relative">
                <div className="rounded-2xl overflow-hidden aspect-square border border-black/5 shadow-md bg-slate-100">
                  <img
                    src={pediatric.photo}
                    alt={pediatric.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Smile indicator badge */}
                <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-md">
                  <Smile className="w-4 h-4" />
                </div>
              </div>

              {/* Doctor Name & Details */}
              <div className="sm:col-span-7">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-clinic-charcoal tracking-tight mb-1.5 group-hover:text-clinic-teal transition-colors">
                  {pediatric.name}
                </h2>
                <div className="text-xs sm:text-sm font-semibold text-clinic-charcoal/80 mb-3">
                  <span className="text-clinic-teal font-bold">{pediatric.degrees}</span>
                  <span className="mx-1.5">•</span>
                  <span>{pediatric.roleBadge}</span>
                </div>
                <p className="text-xs sm:text-sm text-clinic-charcoal/70 leading-relaxed">
                  Gentle & Painless Kid Dental Care crafted to eliminate clinic anxiety and nurture lifelong radiant habits.
                </p>
              </div>
            </div>

            {/* Feature Tags */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-[#FAF9F6] border border-black/5 text-clinic-charcoal">
                <Sparkles className="w-3.5 h-3.5 text-clinic-teal" />
                <span>Preventive & Interceptive</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-[#FAF9F6] border border-black/5 text-clinic-charcoal">
                <Smile className="w-3.5 h-3.5 text-emerald-600" />
                <span>Sedation & Gentle Touch</span>
              </span>
            </div>
          </div>

          {/* Action Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate('/children');
            }}
            className="w-full py-4 px-6 rounded-2xl bg-[#0B6A62] hover:bg-[#074D47] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-sm transition-all group-hover:shadow-md"
          >
            <span>Children's Dentistry</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>

        {/* Card 2: Adult Dentist */}
        <motion.div
          custom={1}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          onClick={() => navigate('/adults')}
          className="card-surface card-hover-effect rounded-3xl md:rounded-4xl p-6 sm:p-8 flex flex-col justify-between border border-black/[0.04] bg-white cursor-pointer group relative overflow-hidden"
        >
          {/* Subtle soft lavender/cyan glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-100/30 rounded-full blur-3xl pointer-events-none -z-10 group-hover:bg-cyan-200/40 transition-colors" />

          <div>
            {/* Top Badges */}
            <div className="flex items-center justify-between gap-2 mb-6 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-purple-50 text-purple-700 border border-purple-100">
                <Activity className="w-3.5 h-3.5 text-purple-600" />
                <span>{adult.title}</span>
              </span>
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-bold bg-cyan-50 text-cyan-800 border border-cyan-100">
                <span>{adult.experience}</span>
              </span>
            </div>

            {/* Split layout: Photo + Info */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center mb-6">
              {/* Doctor Photo */}
              <div className="sm:col-span-5 relative">
                <div className="rounded-2xl overflow-hidden aspect-square border border-black/5 shadow-md bg-slate-100">
                  <img
                    src={adult.photo}
                    alt={adult.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Verified checkmark badge */}
                <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-clinic-teal text-white flex items-center justify-center shadow-md">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              </div>

              {/* Doctor Name & Details */}
              <div className="sm:col-span-7">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-clinic-charcoal tracking-tight mb-1.5 group-hover:text-clinic-teal transition-colors">
                  {adult.name}
                </h2>
                <div className="text-xs sm:text-sm font-semibold text-clinic-charcoal/80 mb-3">
                  <span className="text-clinic-teal font-bold">{adult.degrees}</span>
                  <span className="mx-1.5">•</span>
                  <span>{adult.roleBadge}</span>
                </div>
                <p className="text-xs sm:text-sm text-clinic-charcoal/70 leading-relaxed">
                  Expertise • Precision • Long Lasting Smiles delivered through advanced microscopes and pain-free mastery.
                </p>
              </div>
            </div>

            {/* Feature Tags */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-[#FAF9F6] border border-black/5 text-clinic-charcoal">
                <Microscope className="w-3.5 h-3.5 text-clinic-teal" />
                <span>Microscopic RCT</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-[#FAF9F6] border border-black/5 text-clinic-charcoal">
                <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
                <span>Single-Visit Treatment</span>
              </span>
            </div>
          </div>

          {/* Action Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate('/adults');
            }}
            className="w-full py-4 px-6 rounded-2xl bg-[#1A1D1F] hover:bg-black text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-sm transition-all group-hover:shadow-md"
          >
            <span>Adult Dentistry</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>

      {/* Bottom Trust & Contact Strips */}
      <div className="max-w-6xl mx-auto w-full space-y-4">
        {/* Trust Strip */}
        <div className="card-surface rounded-full px-6 py-3.5 shadow-sm border border-black/[0.04] bg-white/80 flex flex-wrap items-center justify-around gap-4 text-xs font-semibold text-clinic-charcoal/80">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-clinic-teal" />
            <span>Class-B Autoclave Sterilization</span>
          </div>
          <span className="hidden md:inline text-black/20">•</span>
          <div className="flex items-center gap-2">
            <Radio className="w-4 h-4 text-clinic-teal" />
            <span>Ultra-Low Radiation Digital X-Rays</span>
          </div>
          <span className="hidden md:inline text-black/20">•</span>
          <div className="flex items-center gap-2">
            <HeartPulse className="w-4 h-4 text-clinic-teal" />
            <span>100% Pain-Managed Protocols</span>
          </div>
        </div>

        {/* Contact Strip */}
        <div className="card-surface rounded-full px-6 py-3 shadow-sm border border-black/[0.04] bg-white/70 flex flex-wrap items-center justify-between gap-4 text-xs text-clinic-charcoal/70">
          <div className="flex items-center gap-6 flex-wrap">
            <a
              href={`tel:${clinicData.phone}`}
              className="flex items-center gap-1.5 font-bold text-clinic-charcoal hover:text-clinic-teal transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-clinic-teal" />
              <span>{clinicData.phone}</span>
            </a>
            <span className="hidden sm:inline text-black/20">•</span>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-clinic-teal" />
              <span>{clinicData.fullAddress}</span>
            </div>
            <span className="hidden sm:inline text-black/20">•</span>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-clinic-teal" />
              <span>{clinicData.timings}</span>
            </div>
          </div>

          <div>{clinicData.copyright}</div>
        </div>
      </div>
    </div>
  );
}
