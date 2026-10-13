import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { clinicData } from '../../data/clinicData';

export default function ClinicLogo({
  size = 'md',
  showText = true,
  showSubtitle = true,
  subtitleText,
  showLocation = false,
  asLink = false,
  to = '/choose',
  className = ''
}) {
  const sizeMap = {
    sm: {
      emblem: 'w-9 h-9',
      title: 'text-base font-bold',
      subtitle: 'text-[9px] tracking-widest',
      gap: 'gap-2.5'
    },
    md: {
      emblem: 'w-12 h-12',
      title: 'text-lg md:text-xl font-bold',
      subtitle: 'text-[10px] md:text-[11px] tracking-wider',
      gap: 'gap-3'
    },
    lg: {
      emblem: 'w-20 h-20 md:w-24 md:h-24',
      title: 'text-2xl md:text-3xl font-extrabold',
      subtitle: 'text-xs md:text-sm tracking-widest',
      gap: 'gap-4'
    },
    splash: {
      emblem: 'w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44',
      title: 'text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight',
      subtitle: 'text-xs sm:text-sm md:text-base font-semibold tracking-[0.25em]',
      gap: 'gap-5'
    }
  };

  const currentSize = sizeMap[size] || sizeMap.md;
  const resolvedSubtitle = subtitleText || clinicData.subtitle;

  const content = (
    <div className={`inline-flex items-center ${currentSize.gap} ${className}`}>
      {/* Emblem with soft layered halo */}
      <div className="relative flex-shrink-0 flex items-center justify-center">
        {/* Soft subtle glow behind emblem */}
        <div className="absolute inset-0 rounded-full bg-clinic-teal/20 blur-md transform scale-110" />
        
        {/* The high-definition emblem disc */}
        <img
          src="/images/clinic-emblem.png"
          alt="Dr. Banarase's Samarth Dental Clinic Emblem"
          className={`${currentSize.emblem} relative object-contain drop-shadow-md select-none`}
        />
      </div>

      {showText && (
        <div className="flex flex-col justify-center leading-none">
          <div className={`${currentSize.title} text-clinic-charcoal tracking-tight`}>
            <span>Dr. Banarase's </span>
            <span className="text-clinic-teal">{clinicData.highlightName}</span>
          </div>

          {showSubtitle && (
            <div className={`mt-1 font-medium text-clinic-muted uppercase ${currentSize.subtitle}`}>
              {resolvedSubtitle}
            </div>
          )}

          {showLocation && (
            <div className="mt-1 flex items-center gap-1 text-[11px] font-semibold text-clinic-teal uppercase tracking-wider">
              <MapPin className="w-3 h-3 text-clinic-teal" />
              <span>{clinicData.location}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );

  if (asLink) {
    return (
      <Link
        to={to}
        className="group transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-clinic-teal/30 rounded-2xl"
        title="Go to Dentist Selection"
      >
        {content}
      </Link>
    );
  }

  return content;
}
