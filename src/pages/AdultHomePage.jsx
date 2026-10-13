import React, { useState } from 'react';
import PastelBackground from '../components/common/PastelBackground';
import SiteHeader from '../components/common/SiteHeader';
import SiteFooter from '../components/common/SiteFooter';
import FAQAccordion from '../components/common/FAQAccordion';
import AppointmentModal from '../components/common/AppointmentModal';
import AdultHero from '../components/adult/AdultHero';
import AdultTreatments from '../components/adult/AdultTreatments';
import AdultDoctorProfile from '../components/adult/AdultDoctorProfile';
import AdultWhyChooseUs from '../components/adult/AdultWhyChooseUs';
import AdultPatientJourney from '../components/adult/AdultPatientJourney';
import AdultAppointmentSection from '../components/adult/AdultAppointmentSection';
import { adultFaqs } from '../data/adultServices';

export default function AdultHomePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen text-clinic-charcoal overflow-x-hidden">
      <PastelBackground variant="adult" />

      {/* Responsive Header */}
      <SiteHeader mode="adult" onBookClick={() => setModalOpen(true)} />

      {/* Main Content Flow */}
      <main>
        {/* Hero Section */}
        <AdultHero onBookClick={() => setModalOpen(true)} />

        {/* Specialized Treatments Grid & Highlights */}
        <AdultTreatments />

        {/* Meet Dr. Tejas Doctor Profile */}
        <AdultDoctorProfile onBookClick={() => setModalOpen(true)} />

        {/* The Samarth Standard / Why Choose Us */}
        <AdultWhyChooseUs />

        {/* 3 Care Journey Steps */}
        <AdultPatientJourney />

        {/* FAQs Accordion */}
        <section id="faqs" className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold text-clinic-teal uppercase tracking-widest block mb-2">
                CLEAR ANSWERS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-clinic-charcoal tracking-tight mb-3">
                Frequently Asked Questions
              </h2>
              <p className="text-sm sm:text-base text-clinic-charcoal/70">
                Transparent clinical information regarding root canal procedures and treatments.
              </p>
            </div>

            <FAQAccordion items={adultFaqs} />
          </div>
        </section>

        {/* Priority Appointment Form & Location Map */}
        <AdultAppointmentSection />
      </main>

      {/* Responsive Footer */}
      <SiteFooter mode="adult" />

      {/* Fast Booking Modal */}
      <AppointmentModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        mode="adult"
      />
    </div>
  );
}
