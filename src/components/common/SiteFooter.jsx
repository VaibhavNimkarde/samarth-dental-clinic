import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Phone, MapPin, Clock, Heart } from 'lucide-react';
import ClinicLogo from './ClinicLogo';
import { clinicData } from '../../data/clinicData';

export default function SiteFooter({ mode = 'children' }) {
  const isChildren = mode === 'children';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = isChildren
    ? [
        { label: 'Home', href: '#home' },
        { label: 'Services', href: '#services' },
        { label: 'Pediatrician Profile', href: '#doctor' },
        { label: 'Parent Guide', href: '#parent-guide' },
        { label: 'FAQs', href: '#faqs' },
      ]
    : [
        { label: 'Home', href: '#home' },
        { label: 'Treatments', href: '#treatments' },
        { label: 'Endodontist Profile', href: '#doctor' },
        { label: 'Why Choose Us', href: '#why-us' },
        { label: 'FAQs', href: '#faqs' },
      ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="mt-20 border-t border-black/[0.06] bg-white/70 backdrop-blur-sm pt-14 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12">
          {/* Brand Col */}
          <div className="md:col-span-5 lg:col-span-5 flex flex-col gap-4">
            <ClinicLogo
              size="md"
              subtitleText={isChildren ? clinicData.pediatricStudioTitle : clinicData.adultStudioTitle}
              asLink={true}
              to="/choose"
            />
            
            <p className="text-sm text-clinic-charcoal/70 leading-relaxed max-w-sm mt-1">
              {isChildren
                ? "Dedicated pediatric and multispecialty dentistry. Delivering gentle, high-precision oral care for infants, children, and young adults."
                : "Specialized endodontics, root canal therapies, and comprehensive restorative dentistry. Preserving natural teeth with clinical precision and gentle hospitality."}
            </p>

            <div className="flex items-center gap-2 text-xs text-clinic-charcoal/60 mt-2">
              <span>Looking for {isChildren ? 'Adult Dentistry?' : 'Kids Dentistry?'}</span>
              <Link
                to={isChildren ? '/adults' : '/children'}
                className="font-semibold text-clinic-teal hover:underline"
              >
                {isChildren ? 'Visit Adult Practice →' : 'Visit Pediatric Studio →'}
              </Link>
            </div>
          </div>

          {/* Quick Nav Col */}
          <div className="md:col-span-3 lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-clinic-charcoal mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-clinic-charcoal/75">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="hover:text-clinic-teal transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <Link to="/choose" className="hover:text-clinic-teal transition-colors">
                  Switch Dentist
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Hours Col */}
          <div className="md:col-span-4 lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-clinic-charcoal mb-4">
              Contact & Hours
            </h4>
            <div className="space-y-3 text-sm text-clinic-charcoal/75">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-clinic-teal shrink-0 mt-0.5" />
                <a href={`tel:${clinicData.phone}`} className="hover:text-clinic-teal transition-colors">
                  Phone: {clinicData.phone}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-clinic-teal shrink-0 mt-0.5" />
                <span>{clinicData.fullAddress}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-clinic-teal shrink-0 mt-0.5" />
                <span>Monday – Sunday: {clinicData.timings}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-black/[0.05] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-clinic-charcoal/60">
          <div>{clinicData.copyright}</div>
          
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 font-semibold text-clinic-charcoal/80 hover:text-clinic-teal transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
