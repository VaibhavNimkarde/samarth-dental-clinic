import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Calendar, Menu, X, ArrowLeftRight, Phone } from 'lucide-react';
import ClinicLogo from './ClinicLogo';
import { clinicData } from '../../data/clinicData';

export default function SiteHeader({ mode = 'children', onBookClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isChildren = mode === 'children';

  const navLinks = isChildren
    ? [
        { label: 'Home', href: '#home' },
        { label: "Children's Services", href: '#services' },
        { label: 'Meet Dr. Samiksha', href: '#doctor' },
        { label: 'Parent Guide', href: '#parent-guide' },
        { label: 'FAQs', href: '#faqs' },
        { label: 'Contact', href: '#contact' },
      ]
    : [
        { label: 'Home', href: '#home' },
        { label: 'Treatments', href: '#treatments' },
        { label: 'Meet Dr. Tejas', href: '#doctor' },
        { label: 'Why Choose Us', href: '#why-us' },
        { label: 'FAQs', href: '#faqs' },
        { label: 'Contact', href: '#contact' },
      ];

  const switchTarget = isChildren ? '/adults' : '/children';
  const switchLabel = isChildren ? 'Switch to Adult Dentistry' : 'Switch to Pediatric Care';

  const subtitle = isChildren
    ? clinicData.pediatricStudioTitle
    : clinicData.adultStudioTitle;

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-4 z-40 px-4 sm:px-6 max-w-7xl mx-auto mb-6">
      <nav className="card-surface rounded-full px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between shadow-pill backdrop-blur-md bg-white/95 border border-black/[0.04]">
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <ClinicLogo
            size="sm"
            showSubtitle={true}
            subtitleText={subtitle}
            asLink={true}
            to="/choose"
          />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-clinic-charcoal/85">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="transition-colors hover:text-clinic-teal focus:outline-none focus:text-clinic-teal"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Switcher button */}
          <Link
            to={switchTarget}
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-clinic-charcoal/70 bg-black/[0.03] hover:bg-black/[0.06] rounded-full transition-colors"
            title={switchLabel}
          >
            <ArrowLeftRight className="w-3.5 h-3.5 text-clinic-teal" />
            <span>{isChildren ? 'Adult Care' : 'Kids Care'}</span>
          </Link>

          {/* Book Appointment CTA */}
          <button
            onClick={onBookClick}
            className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white transition-all shadow-sm active:scale-95 ${
              isChildren
                ? 'bg-[#0B6A62] hover:bg-[#08524B]'
                : 'bg-[#1A1D1F] hover:bg-black'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>Book Appointment</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onBookClick}
            className={`p-2 rounded-full text-white ${
              isChildren ? 'bg-[#0B6A62]' : 'bg-[#1A1D1F]'
            }`}
            aria-label="Book appointment"
          >
            <Calendar className="w-4 h-4" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-clinic-charcoal rounded-full hover:bg-black/5"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden mt-2 card-surface rounded-3xl p-5 shadow-xl border border-black/5 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="py-2 px-3 rounded-xl text-sm font-medium text-clinic-charcoal hover:bg-clinic-teal/10 hover:text-clinic-teal transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 mt-1 border-t border-black/5 flex flex-col gap-2.5">
              <Link
                to={switchTarget}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-clinic-charcoal bg-black/[0.04]"
              >
                <ArrowLeftRight className="w-4 h-4 text-clinic-teal" />
                <span>{switchLabel}</span>
              </Link>

              <a
                href={`tel:${clinicData.phone}`}
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-clinic-charcoal/80 bg-clinic-teal/5"
              >
                <Phone className="w-4 h-4 text-clinic-teal" />
                <span>Call {clinicData.phone}</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookClick();
                }}
                className={`w-full py-3 rounded-xl text-sm font-semibold text-white ${
                  isChildren ? 'bg-clinic-teal' : 'bg-clinic-charcoal'
                }`}
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
