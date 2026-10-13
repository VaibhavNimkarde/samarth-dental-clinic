import React, { useState } from 'react';
import PastelBackground from '../components/common/PastelBackground';
import SiteHeader from '../components/common/SiteHeader';
import SiteFooter from '../components/common/SiteFooter';
import FAQAccordion from '../components/common/FAQAccordion';
import AppointmentModal from '../components/common/AppointmentModal';
import PediatricHero from '../components/children/PediatricHero';
import PediatricServices from '../components/children/PediatricServices';
import PediatricDoctorProfile from '../components/children/PediatricDoctorProfile';
import ParentGuideSection from '../components/children/ParentGuideSection';
import PediatricAppointmentSection from '../components/children/PediatricAppointmentSection';
import { childrenFaqs } from '../data/childrenServices';

export default function ChildrenHomePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen text-clinic-charcoal overflow-x-hidden">
      <PastelBackground variant="children" />

      {/* Responsive Header */}
      <SiteHeader mode="children" onBookClick={() => setModalOpen(true)} />

      {/* Main Content Flow */}
      <main>
        {/* Hero Section */}
        <PediatricHero onBookClick={() => setModalOpen(true)} />

        {/* Benefits & 6 Services */}
        <PediatricServices />

        {/* Meet Dr. Samiksha Doctor Profile */}
        <PediatricDoctorProfile onBookClick={() => setModalOpen(true)} />

        {/* Parent Guide & What to Expect Steps */}
        <ParentGuideSection />

        {/* FAQs Accordion */}
        <section id="faqs" className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold text-clinic-teal uppercase tracking-widest block mb-2">
                PARENT QUERIES
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-clinic-charcoal tracking-tight mb-3">
                Frequently Asked Questions
              </h2>
              <p className="text-sm sm:text-base text-clinic-charcoal/70">
                Clear, professional answers to help you make informed decisions.
              </p>
            </div>

            <FAQAccordion items={childrenFaqs} />
          </div>
        </section>

        {/* Appointment Form & Clinic Map Section */}
        <PediatricAppointmentSection />
      </main>

      {/* Responsive Footer */}
      <SiteFooter mode="children" />

      {/* Fast Booking Modal */}
      <AppointmentModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        mode="children"
      />
    </div>
  );
}
