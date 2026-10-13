import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, Phone, Calendar } from 'lucide-react';
import { clinicData } from '../../data/clinicData';

export default function AppointmentModal({ isOpen, onClose, mode = 'children' }) {
  const isChildren = mode === 'children';
  const doc = isChildren ? clinicData.doctors.pediatric : clinicData.doctors.adult;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    reason: isChildren ? 'Pediatric Checkup' : 'Root Canal / Consultation',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.phone.trim() || !/^[0-9]{10}$/.test(formData.phone.replace(/[\s-]/g, ''))) {
      errs.phone = 'Valid 10-digit phone number is required';
    }
    if (!formData.date) errs.date = 'Date is required';

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative w-full max-w-lg card-surface rounded-3xl p-6 sm:p-8 bg-white shadow-2xl border border-black/5 z-10 max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-5 right-5 p-2 rounded-full text-clinic-charcoal/60 hover:text-clinic-charcoal hover:bg-black/5 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <span className="text-[11px] font-bold text-clinic-teal uppercase tracking-widest block mb-1">
                {isChildren ? 'PEDIATRIC APPOINTMENT' : 'CLINICAL APPOINTMENT'}
              </span>
              <h3 className="text-2xl font-extrabold text-clinic-charcoal">
                Consult with {doc.shortName}
              </h3>
              <p className="text-xs text-clinic-charcoal/60 mt-1">
                {clinicData.name} • {clinicData.location}
              </p>
            </div>

            {submitted ? (
              <div className="py-6 text-center space-y-4">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-clinic-charcoal">
                  Request Submitted Successfully
                </h4>
                <p className="text-xs sm:text-sm text-clinic-charcoal/70 max-w-sm mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold">{formData.name}</span>. Our reception desk will contact you at <span className="font-semibold">{formData.phone}</span> to finalize your appointment time.
                </p>
                <div className="pt-2">
                  <button
                    onClick={handleClose}
                    className="px-6 py-2.5 rounded-full bg-clinic-teal text-white text-xs font-semibold shadow-sm"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-clinic-charcoal uppercase tracking-wider mb-1.5">
                    {isChildren ? 'Parent / Guardian Name *' : 'Patient Name *'}
                  </label>
                  <input
                    type="text"
                    placeholder="Enter full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FAF9F6] border border-black/5 text-sm text-clinic-charcoal focus:bg-white focus:outline-none focus:ring-2 focus:ring-clinic-teal/30"
                  />
                  {errors.name && <p className="text-xs text-rose-500 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-clinic-charcoal uppercase tracking-wider mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    placeholder="10-digit mobile number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FAF9F6] border border-black/5 text-sm text-clinic-charcoal focus:bg-white focus:outline-none focus:ring-2 focus:ring-clinic-teal/30"
                  />
                  {errors.phone && <p className="text-xs text-rose-500 mt-1">{errors.phone}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-clinic-charcoal uppercase tracking-wider mb-1.5">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#FAF9F6] border border-black/5 text-sm text-clinic-charcoal focus:bg-white focus:outline-none focus:ring-2 focus:ring-clinic-teal/30"
                    />
                    {errors.date && <p className="text-xs text-rose-500 mt-1">{errors.date}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-clinic-charcoal uppercase tracking-wider mb-1.5">
                      Reason for Visit
                    </label>
                    <select
                      value={formData.reason}
                      onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#FAF9F6] border border-black/5 text-sm text-clinic-charcoal focus:bg-white focus:outline-none focus:ring-2 focus:ring-clinic-teal/30"
                    >
                      {isChildren ? (
                        <>
                          <option value="Pediatric Checkup">Pediatric Checkup</option>
                          <option value="Toothache / Cavity">Toothache / Cavity</option>
                          <option value="Fluoride Treatment">Fluoride Treatment</option>
                          <option value="Growth & Bite Check">Growth & Bite Check</option>
                        </>
                      ) : (
                        <>
                          <option value="Root Canal Treatment">Root Canal Treatment</option>
                          <option value="Dental Implants">Dental Implants</option>
                          <option value="Endodontic Consultation">Endodontic Consultation</option>
                          <option value="Routine Checkup">Routine Checkup</option>
                        </>
                      )}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-clinic-charcoal uppercase tracking-wider mb-1.5">
                    Optional Note
                  </label>
                  <textarea
                    rows="2"
                    placeholder="Any specific symptoms or timing preferences..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FAF9F6] border border-black/5 text-sm text-clinic-charcoal focus:bg-white focus:outline-none focus:ring-2 focus:ring-clinic-teal/30 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className={`w-full py-3.5 px-6 rounded-full text-white font-semibold text-sm shadow-sm flex items-center justify-center gap-2 ${
                    isChildren ? 'bg-clinic-teal hover:bg-clinic-teal-dark' : 'bg-[#1A1D1F] hover:bg-black'
                  }`}
                >
                  <span>Submit Appointment Request</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
