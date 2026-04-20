'use client';


import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';

interface CookieConsentProps {
  onNavigate?: (page: 'cookie-policy') => void;
}

const CookieConsent: React.FC<CookieConsentProps> = ({ onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if consent has already been given
    const consent = localStorage.getItem('agasset_cookie_consent');
    if (!consent) {
      // Delay slightly for better UX on load
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('agasset_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('agasset_cookie_consent', 'declined');
    setIsVisible(false);
  };

  const handlePolicyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) onNavigate('cookie-policy');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 left-0 w-full z-[1000] p-4 md:p-6 no-print"
        >
          <div className="max-w-7xl mx-auto">
            <div className="bg-ag-green-950 rounded-[1.5rem] p-6 md:p-8 shadow-2xl border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-12 relative overflow-hidden">
              
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-ag-lime/5 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3" />

              <div className="flex-1 relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-ag-lime">
                    <Cookie size={16} />
                  </div>
                  <span className="text-sm font-bold uppercase tracking-[0.2em] text-ag-lime">
                    Cookie Preferences
                  </span>
                </div>
                <p className="text-white/80 text-lg font-light leading-relaxed max-w-2xl">
                  We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. Read our{' '}
                  <a href="#" onClick={handlePolicyClick} className="text-white font-medium underline underline-offset-4 hover:text-ag-lime transition-colors">
                    Cookie Policy
                  </a>.
                </p>
              </div>

              <div className="flex flex-row items-center gap-4 shrink-0 relative z-10 w-full md:w-auto">
                <button
                  onClick={handleDecline}
                  className="flex-1 md:flex-none px-6 py-3 rounded-full border border-white/20 text-white text-base font-bold uppercase tracking-widest hover:bg-white/5 transition-colors"
                >
                  Decline
                </button>
                <button
                  onClick={handleAccept}
                  className="flex-1 md:flex-none px-8 py-3 rounded-full bg-ag-lime text-ag-green-950 text-base font-bold uppercase tracking-widest hover:bg-white transition-colors shadow-lg shadow-ag-lime/20"
                >
                  Accept All
                </button>
              </div>

              {/* Close X for manual dismissal without choice (optional, but good UX) */}
              <button 
                onClick={() => setIsVisible(false)}
                className="absolute top-4 right-4 text-white/20 hover:text-white transition-colors md:hidden"
              >
                <X size={20} />
              </button>

            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
