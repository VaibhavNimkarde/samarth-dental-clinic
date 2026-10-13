import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import PastelBackground from '../components/common/PastelBackground';
import ClinicLogo from '../components/common/ClinicLogo';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <PastelBackground />
      <div className="card-surface rounded-3xl p-10 max-w-md w-full border border-black/5 bg-white/90 shadow-xl space-y-6">
        <ClinicLogo size="md" />
        <div>
          <h1 className="text-3xl font-black text-clinic-charcoal mb-2">404</h1>
          <p className="text-sm text-clinic-charcoal/70">
            The page you are looking for does not exist.
          </p>
        </div>
        <Link
          to="/choose"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-clinic-teal text-white font-semibold text-sm shadow-sm hover:bg-clinic-teal-dark transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Choose Dentist</span>
        </Link>
      </div>
    </div>
  );
}
