import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Calendar, Smile, Users, Sparkles, BookOpen, Apple, PenLine } from 'lucide-react';
import { parentGuides, childrenSteps } from '../../data/childrenServices';

export default function ParentGuideSection() {
  const getGuideIcon = (icon) => {
    switch (icon) {
      case 'pencil': return <PenLine className="w-5 h-5 text-amber-600" />;
      case 'apple': return <Apple className="w-5 h-5 text-emerald-600" />;
      case 'smile': return <Smile className="w-5 h-5 text-rose-500" />;
      default: return <BookOpen className="w-5 h-5 text-clinic-teal" />;
    }
  };

  const getStepIcon = (icon) => {
    switch (icon) {
      case 'calendar': return <Calendar className="w-5 h-5 text-clinic-teal" />;
      case 'smile': return <Smile className="w-5 h-5 text-clinic-teal" />;
      case 'users': return <Users className="w-5 h-5 text-clinic-teal" />;
      default: return <Sparkles className="w-5 h-5 text-clinic-teal" />;
    }
  };

  return (
    <div id="parent-guide" className="py-16 md:py-24 space-y-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section 1: At-Home Knowledge Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-bold text-clinic-teal uppercase tracking-widest mb-3">
            AT-HOME PREVENTIVE KNOWLEDGE
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-clinic-charcoal tracking-tight mb-4">
            Building Healthy Dental Habits Starts Early
          </h2>
          <p className="text-base text-clinic-charcoal/70">
            Simple daily practices recommended by our pedodontic team to maintain bright, decay-resistant young teeth.
          </p>
        </div>

        {/* 3 Parent Knowledge Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {parentGuides.map((guide, idx) => (
            <motion.div
              key={guide.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="card-surface card-hover-effect rounded-3xl p-7 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-black/[0.03] flex items-center justify-center mb-6">
                  {getGuideIcon(guide.icon)}
                </div>
                <h3 className="text-xl font-bold text-clinic-charcoal mb-3">
                  {guide.title}
                </h3>
                <p className="text-sm text-clinic-charcoal/70 leading-relaxed mb-6">
                  {guide.description}
                </p>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-black/[0.04]">
                {guide.bulletPoints.map((pt, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-clinic-charcoal/90">
                    <CheckCircle2 className="w-4 h-4 text-clinic-teal shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section 2: What to Expect Steps */}
        <div className="card-surface rounded-3xl md:rounded-4xl p-8 sm:p-12 lg:p-16 border border-black/[0.04] bg-white/90">
          <div className="mb-12">
            <div className="text-xs font-bold text-clinic-teal uppercase tracking-widest mb-2">
              STRESS-FREE PROTOCOL
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-clinic-charcoal tracking-tight">
              What to Expect During Your Visit
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {childrenSteps.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#FAF9F6] rounded-3xl p-6 sm:p-7 flex flex-col justify-between border border-black/[0.03]"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl font-black text-clinic-teal">
                      {step.step}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-clinic-teal/10 flex items-center justify-center">
                      {getStepIcon(step.icon)}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-clinic-charcoal mb-2.5">
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
    </div>
  );
}
