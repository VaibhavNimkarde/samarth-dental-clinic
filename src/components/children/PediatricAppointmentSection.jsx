import React, { useState } from 'react';
import { Send, Phone, MapPin, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import ClinicLogo from '../common/ClinicLogo';
import { clinicData } from '../../data/clinicData';

export default function PediatricAppointmentSection() {
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    childAge: '',
    date: '',
    reason: 'Routine Checkup & Habit Assessment',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.parentName.trim()) errs.parentName = 'Parent/Guardian name is required';
    if (!formData.phone.trim()) {
      errs.phone = 'Contact phone number is required';
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/[\s-]/g, ''))) {
      errs.phone = 'Please enter a valid 10-digit mobile number';
    }
    if (!formData.childAge) errs.childAge = "Please select child's age";
    if (!formData.date) errs.date = 'Please select a preferred date';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Form Card */}
          <div className="lg:col-span-7 card-surface rounded-3xl md:rounded-4xl p-7 sm:p-10 border border-black/[0.04] bg-white">
            <div className="mb-8">
              <span className="text-xs font-bold text-clinic-teal uppercase tracking-widest block mb-2">
                PEDIATRIC CONSULTATION
              </span>
              <h2 className="text-3xl font-extrabold text-clinic-charcoal tracking-tight mb-2">
                Request a Child's Visit
              </h2>
              <p className="text-sm text-clinic-charcoal/70">
                Fill in the details below. Our care team will confirm via call or message within 2 working hours.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 sm:p-8 rounded-3xl bg-emerald-50/70 border border-emerald-200 text-center space-y-4">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-emerald-950">
                  Appointment Request Received
                </h3>
                <p className="text-sm text-emerald-800 leading-relaxed max-w-md mx-auto">
                  Thank you, <span className="font-semibold">{formData.parentName}</span>! Dr. Samiksha's reception desk has noted your request for {formData.date}. We will call you at <span className="font-semibold">{formData.phone}</span> shortly to finalize your appointment time.
                </p>
                <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={`tel:${clinicData.phone}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 text-white text-xs font-bold shadow-sm"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Clinic Directly ({clinicData.phone})</span>
                  </a>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        parentName: '',
                        phone: '',
                        childAge: '',
                        date: '',
                        reason: 'Routine Checkup & Habit Assessment',
                        message: ''
                      });
                    }}
                    className="px-4 py-2 text-xs font-semibold text-emerald-800 hover:underline"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-clinic-charcoal uppercase tracking-wider mb-2">
                      Parent / Guardian Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Anjali Sharma"
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      className={`w-full px-4 py-3 rounded-2xl bg-[#FAF9F6] border text-sm text-clinic-charcoal focus:bg-white focus:outline-none focus:ring-2 focus:ring-clinic-teal/30 transition-all ${
                        errors.parentName ? 'border-rose-300 ring-1 ring-rose-300' : 'border-black/5'
                      }`}
                    />
                    {errors.parentName && (
                      <p className="mt-1 text-xs text-rose-500">{errors.parentName}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-clinic-charcoal uppercase tracking-wider mb-2">
                      Contact Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="10-digit mobile number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full px-4 py-3 rounded-2xl bg-[#FAF9F6] border text-sm text-clinic-charcoal focus:bg-white focus:outline-none focus:ring-2 focus:ring-clinic-teal/30 transition-all ${
                        errors.phone ? 'border-rose-300 ring-1 ring-rose-300' : 'border-black/5'
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-rose-500">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-clinic-charcoal uppercase tracking-wider mb-2">
                      Child's Age *
                    </label>
                    <select
                      value={formData.childAge}
                      onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                      className={`w-full px-4 py-3 rounded-2xl bg-[#FAF9F6] border text-sm text-clinic-charcoal focus:bg-white focus:outline-none focus:ring-2 focus:ring-clinic-teal/30 transition-all ${
                        errors.childAge ? 'border-rose-300 ring-1 ring-rose-300' : 'border-black/5'
                      }`}
                    >
                      <option value="">Select Child's Age</option>
                      <option value="Under 2 yrs">Under 2 yrs (Toddler)</option>
                      <option value="2–5 yrs">2–5 yrs (Preschooler)</option>
                      <option value="6–10 yrs">6–10 yrs (Primary)</option>
                      <option value="11–14 yrs">11–14 yrs (Junior)</option>
                      <option value="15–18 yrs">15–18 yrs (Teenager)</option>
                    </select>
                    {errors.childAge && (
                      <p className="mt-1 text-xs text-rose-500">{errors.childAge}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-clinic-charcoal uppercase tracking-wider mb-2">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className={`w-full px-4 py-3 rounded-2xl bg-[#FAF9F6] border text-sm text-clinic-charcoal focus:bg-white focus:outline-none focus:ring-2 focus:ring-clinic-teal/30 transition-all ${
                        errors.date ? 'border-rose-300 ring-1 ring-rose-300' : 'border-black/5'
                      }`}
                    />
                    {errors.date && (
                      <p className="mt-1 text-xs text-rose-500">{errors.date}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-clinic-charcoal uppercase tracking-wider mb-2">
                    Reason for Visit
                  </label>
                  <select
                    value={formData.reason}
                    onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-[#FAF9F6] border border-black/5 text-sm text-clinic-charcoal focus:bg-white focus:outline-none focus:ring-2 focus:ring-clinic-teal/30 transition-all"
                  >
                    <option value="Routine Checkup & Habit Assessment">Routine Checkup & Habit Assessment</option>
                    <option value="First Dental Visit">First Dental Visit</option>
                    <option value="Toothache / Cavity Issue">Toothache / Cavity Issue</option>
                    <option value="Fluoride & Sealants">Fluoride & Sealants</option>
                    <option value="Teeth Alignment / Space Maintainer">Teeth Alignment / Space Maintainer</option>
                    <option value="Parent Consultation">Parent Consultation</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-full bg-[#0B6A62] hover:bg-[#074D47] text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2 shadow-sm transition-all active:scale-95"
                >
                  <span>Request Appointment</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          {/* Right Clinic Contact & Location Card */}
          <div className="lg:col-span-5 card-surface rounded-3xl md:rounded-4xl p-7 sm:p-10 border border-black/[0.04] bg-white flex flex-col justify-between h-full">
            <div className="space-y-6">
              <ClinicLogo
                size="md"
                subtitleText={clinicData.subtitle}
                showLocation={false}
              />

              <div className="space-y-5 pt-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-clinic-teal/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-clinic-teal" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-clinic-charcoal/50 uppercase tracking-wider">
                      DIRECT APPOINTMENT HELPLINE
                    </div>
                    <a
                      href={`tel:${clinicData.phone}`}
                      className="text-lg font-bold text-clinic-charcoal hover:text-clinic-teal transition-colors"
                    >
                      {clinicData.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-clinic-teal/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-clinic-teal" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-clinic-charcoal/50 uppercase tracking-wider">
                      CLINIC ADDRESS
                    </div>
                    <p className="text-sm font-semibold text-clinic-charcoal leading-relaxed">
                      {clinicData.fullAddress}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-clinic-teal/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-clinic-teal" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-clinic-charcoal/50 uppercase tracking-wider">
                      CLINIC TIMINGS
                    </div>
                    <p className="text-sm font-semibold text-clinic-charcoal">
                      {clinicData.timingDays}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Preview Widget */}
            <div className="mt-8 rounded-2xl overflow-hidden border border-black/5 relative shadow-inner">
              <img
                src="/images/clinic-map.png"
                alt="Clinic Map Location in Arjun Nagar, Amravati"
                className="w-full h-44 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
