import React from 'react';
import { motion } from 'framer-motion';
import {
  Smile,
  Heart,
  BookOpen,
  Sparkles,
  Search,
  ShieldCheck,
  Bandage,
  Sparkle,
  Columns,
  Users,
  Check
} from 'lucide-react';
import { childrenHighlights, childrenServices } from '../../data/childrenServices';

export default function PediatricServices() {
  const getHighlightIcon = (name) => {
    switch (name) {
      case 'smile': return <Smile className="w-5 h-5 text-teal-600" />;
      case 'heart': return <Heart className="w-5 h-5 text-rose-500" />;
      case 'book-open': return <BookOpen className="w-5 h-5 text-amber-600" />;
      case 'sparkles': return <Sparkles className="w-5 h-5 text-purple-600" />;
      default: return <Smile className="w-5 h-5 text-teal-600" />;
    }
  };

  const getServiceIcon = (icon) => {
    switch (icon) {
      case 'search': return <Search className="w-5 h-5 text-teal-600" />;
      case 'shield-check': return <ShieldCheck className="w-5 h-5 text-emerald-600" />;
      case 'band-aid': return <Bandage className="w-5 h-5 text-rose-500" />;
      case 'brush': return <Sparkle className="w-5 h-5 text-amber-600" />;
      case 'columns': return <Columns className="w-5 h-5 text-purple-600" />;
      case 'users': return <Users className="w-5 h-5 text-sky-600" />;
      default: return <Sparkles className="w-5 h-5 text-teal-600" />;
    }
  };

  return (
    <section id="services" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Row of 4 Reassurance Benefit Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {childrenHighlights.map((item, idx) => (
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
                <h3 className="text-lg font-bold text-clinic-charcoal mb-2.5">
                  {item.title}
                </h3>
                <p className="text-sm text-clinic-charcoal/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Specialized Pedodontics Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-bold text-clinic-teal uppercase tracking-widest mb-3">
              SPECIALIZED PEDODONTICS
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-clinic-charcoal tracking-tight">
              Care for Every Stage of Growing Smiles
            </h2>
          </div>
          <p className="text-sm sm:text-base text-clinic-charcoal/70 max-w-md">
            Medically grounded, painless pediatric dental treatments delivered in an encouraging, cheerful setting.
          </p>
        </div>

        {/* 6 Specialized Pedodontics Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {childrenServices.map((srv, idx) => (
            <motion.div
              key={srv.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="card-surface card-hover-effect rounded-3xl p-7 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-black/[0.03] flex items-center justify-center mb-6">
                  {getServiceIcon(srv.icon)}
                </div>
                <h3 className="text-xl font-bold text-clinic-charcoal mb-3">
                  {srv.title}
                </h3>
                <p className="text-sm text-clinic-charcoal/70 leading-relaxed mb-6">
                  {srv.description}
                </p>
              </div>

              {/* Tag Pill */}
              <div>
                <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-clinic-teal/10 text-clinic-teal">
                  {srv.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
