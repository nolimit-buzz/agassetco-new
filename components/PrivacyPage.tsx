'use client';


import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Home, ChevronRight, Shield, ShieldAlert, Fingerprint, Share2, Scale } from 'lucide-react';

interface PrivacyPageProps {
  /* Updated union to include news and news-detail to match handleNavigate in App.tsx and other legal components */
  onNavigate?: (page: 'home' | 'about' | 'solutions' | 'portfolio' | 'contact' | 'terms' | 'privacy' | 'news-detail') => void;
}

const PRIVACY_SECTIONS = [
  { id: 'collection', num: '01', title: 'Data Collection', icon: Fingerprint },
  { id: 'processing', num: '02', title: 'Data Processing', icon: Shield },
  { id: 'iot', num: '03', title: 'IoT & Telemetry', icon: ShieldAlert },
  { id: 'sharing', num: '04', title: 'Information Sharing', icon: Share2 },
  { id: 'rights', num: '05', title: 'User Rights', icon: Scale }
];

const PrivacyPage: React.FC<PrivacyPageProps> = ({ onNavigate }) => {
  const [activeSection, setActiveSection] = useState('collection');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    PRIVACY_SECTIONS.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const offset = 120;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Fix: Casting ease array to any to resolve framer-motion Variants type mismatch
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }
    }
  };

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-ag-lime selection:text-white pb-32">
      
      {/* 1. EDITORIAL HERO SECTION */}
      <section className="pt-32 pb-20 bg-white overflow-hidden px-6">
        <motion.div 
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto"
        >
          {/* META HEADER: Matching News/Portfolio Style */}
          <motion.div variants={fadeInUp as any} className="flex flex-row items-center justify-between mb-12 border-b border-gray-100 pb-8">
            <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-ag-green-950 bg-gray-50 px-4 py-2 rounded-full w-fit border border-gray-100">
              <Home className="w-2.5 h-2.5" />
              <span className="cursor-pointer hover:text-ag-lime transition-colors" onClick={() => onNavigate?.('home')}>Home</span>
              <ChevronRight className="w-2.5 h-2.5 opacity-50" />
              <span className="opacity-50">Legal</span>
              <ChevronRight className="w-2.5 h-2.5 opacity-50" />
              <span className="text-ag-green-950">Privacy Policy</span>
            </div>
            
            <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-ag-green-950">
              Data Privacy & Security Standard — v2.1
            </div>
          </motion.div>

          <div className="relative w-full">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-48 flex items-center justify-center z-0 pointer-events-none overflow-visible opacity-[0.03]">
              <div className="rotate-90 whitespace-nowrap text-ag-green-950 text-8xl md:text-9xl font-bold tracking-tighter select-none origin-center">
                PRIVACY
              </div>
            </div>

            {/* ASYMMETRIC CONTENT: Info Left, Title Right */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
              <div className="lg:col-span-5 pb-4">
                <motion.p variants={fadeInUp as any} className="text-lg text-gray-500 font-light leading-relaxed mb-10 max-w-sm">
                  We are committed to safeguarding your information through industrial-grade encryption and transparent data processing protocols.
                </motion.p>
                <motion.div variants={fadeInUp as any} className="flex gap-8">
                  <div className="flex flex-col gap-1">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">Last Updated</p>
                    <p className="text-sm font-bold text-ag-green-950">February 15, 2025</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">Regulatory</p>
                    <p className="text-sm font-bold text-ag-green-950">NDPR / GDPR Compliant</p>
                  </div>
                </motion.div>
              </div>
              
              <div className="lg:col-span-7 lg:text-right">
                <motion.h1 
                  variants={fadeInUp as any}
                  className="text-6xl md:text-8xl lg:text-[7.5rem] font-bold text-ag-green-950 leading-[0.9] tracking-tighter"
                >
                  PRIVACY <br/>
                  <span className="text-ag-lime">POLICY.</span>
                </motion.h1>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2. MAIN CONTENT AREA (Split Layout) */}
      <section className="max-w-7xl mx-auto px-6 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* STICKY SIDEBAR */}
          <aside className="lg:col-span-3 hidden lg:block sticky top-32 pb-20 self-start">
            <div className="text-[11px] font-bold uppercase tracking-[0.25em] text-gray-400 border-b border-gray-100 pb-8 mb-10">
              Table of Contents
            </div>
            
            <nav className="flex flex-col gap-0 relative">
              <div className="absolute left-[3px] top-0 bottom-0 w-px bg-gray-100" />
              {PRIVACY_SECTIONS.map((section) => {
                const isActive = activeSection === section.id;
                return (
                  <a 
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={(e) => scrollToSection(e, section.id)}
                    className={`text-xs font-bold uppercase tracking-widest transition-all duration-500 flex items-center gap-8 pl-1.5 py-6 relative group ${
                      isActive ? 'text-ag-green-950' : 'text-gray-300 hover:text-ag-green-950/70'
                    }`}
                  >
                    <div className={`absolute left-0 w-[7px] h-[7px] rounded-full z-10 transition-all duration-500 ${
                      isActive ? 'bg-ag-lime scale-100' : 'bg-transparent scale-0'
                    }`} />
                    
                    <span className={`text-[11px] transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-40'}`}>
                      {section.num}
                    </span>
                    <span className="relative pb-1">
                      {section.title}
                      {isActive && (
                        <motion.div 
                          layoutId="sidebarUnderlinePrivacy"
                          className="absolute -bottom-0.5 left-0 w-full h-[1.5px] bg-ag-green-950"
                          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        />
                      )}
                    </span>
                  </a>
                );
              })}
            </nav>

            <div className="mt-20 p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100">
              <p className="text-[10px] font-bold text-ag-green-950 uppercase tracking-[0.2em] mb-4">Privacy Officer</p>
              <p className="text-xs text-gray-500 font-light leading-relaxed mb-10">
                Questions about your data? Our dedicated privacy team is available for clarification.
              </p>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); onNavigate?.('contact'); }} 
                className="text-[10px] font-bold text-ag-lime uppercase tracking-[0.25em] hover:text-ag-green-950 transition-colors"
              >
                Data Inquiry
              </a>
            </div>
          </aside>

          {/* SCROLLABLE CONTENT */}
          <div className="lg:col-span-9">
            <div className="space-y-40">
              
              {/* SECTION 01: COLLECTION */}
              <article id="collection" className="scroll-mt-32">
                <div className="border-t border-ag-green-950 pt-8 mb-12">
                  <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-12">
                    <div className="flex items-center gap-4">
                      <span className="text-ag-green-950">01</span>
                      <span className="w-8 h-px bg-gray-100"></span>
                      <span>PII / COLLECTION</span>
                    </div>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-bold text-ag-green-950 tracking-tight leading-[1.05] mb-10 max-w-2xl">
                    Transparency in <span className="text-ag-lime italic font-serif">information</span> gathering.
                  </h2>
                </div>
                <div className="prose prose-xl max-w-none text-gray-500 font-light leading-relaxed space-y-8">
                  <p className="text-2xl text-ag-green-950/80 font-normal leading-snug">
                    We collect only the information necessary to provide efficient, bankable asset financing for rural SMEs.
                  </p>
                  <p>
                    When you engage with AgAsset Co, we collect Personal Identifiable Information (PII) such as your name, contact details, business location, and identification documents. This is used strictly for KYC (Know Your Customer) compliance and to establish legal partnership agreements.
                  </p>
                  <p>
                    We also collect metadata through our digital interfaces, including IP addresses and interaction logs, which help us optimize the performance of our partner portal and developer tools.
                  </p>
                </div>
              </article>

              {/* SECTION 02: PROCESSING */}
              <article id="processing" className="scroll-mt-32">
                <div className="border-t border-ag-green-950 pt-8 mb-12">
                  <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-12">
                    <div className="flex items-center gap-4">
                      <span className="text-ag-green-950">02</span>
                      <span className="w-8 h-px bg-gray-100"></span>
                      <span>PURPOSE / USE</span>
                    </div>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-bold text-ag-green-950 tracking-tight leading-[1.05] mb-10 max-w-2xl">
                    How we process <span className="text-ag-lime">partner</span> data.
                  </h2>
                </div>
                <div className="prose prose-xl max-w-none text-gray-500 font-light leading-relaxed space-y-8">
                  <p>
                    Data processing is primarily focused on risk mitigation and operational efficiency. We utilize your data for:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                    <div className="p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100">
                      <h4 className="text-lg font-bold text-ag-green-950 mb-4">Credit Analysis</h4>
                      <p className="text-sm text-gray-500 font-light leading-relaxed">Processing agricultural yield history and payment capacity to tailor lease-to-own terms for end-users.</p>
                    </div>
                    <div className="p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100">
                      <h4 className="text-lg font-bold text-ag-green-950 mb-4">Impact Reporting</h4>
                      <p className="text-sm text-gray-500 font-light leading-relaxed">Aggregating anonymized demographic data to provide ESG reporting for our institutional investors.</p>
                    </div>
                  </div>
                  <p>
                    We never sell individual user data to third-party marketing firms. Our data processing is strictly functional, aimed at maintaining the integrity of our productive energy ecosystem.
                  </p>
                </div>
              </article>

              {/* SECTION 03: IOT & TELEMETRY */}
              <article id="iot" className="scroll-mt-32">
                <div className="border-t border-ag-green-950 pt-8 mb-12">
                  <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-12">
                    <div className="flex items-center gap-4">
                      <span className="text-ag-green-950">03</span>
                      <span className="w-8 h-px bg-gray-100"></span>
                      <span>IOT / METRICS</span>
                    </div>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-bold text-ag-green-950 tracking-tight leading-[1.05] mb-10 max-w-2xl">
                    Telemetry and <span className="text-ag-lime">asset</span> monitoring.
                  </h2>
                </div>
                <div className="prose prose-xl max-w-none text-gray-500 font-light leading-relaxed space-y-8">
                  <p>
                    As an asset management vehicle, we monitor physical machinery through IoT (Internet of Things) devices. This telemetry includes:
                  </p>
                  <ul className="space-y-6 list-none p-0">
                    <li className="flex gap-6">
                      <div className="w-1.5 h-1.5 rounded-full bg-ag-lime mt-4 shrink-0" />
                      <p><strong className="text-ag-green-950">Operational Metrics:</strong> Machine uptime, energy consumption, and wear indicators to facilitate predictive maintenance.</p>
                    </li>
                    <li className="flex gap-6">
                      <div className="w-1.5 h-1.5 rounded-full bg-ag-lime mt-4 shrink-0" />
                      <p><strong className="text-ag-green-950">Geographic Data:</strong> Verification that assets remain at the designated site authorized by the financing agreement.</p>
                    </li>
                    <li className="flex gap-6">
                      <div className="w-1.5 h-1.5 rounded-full bg-ag-lime mt-4 shrink-0" />
                      <p><strong className="text-ag-green-950">Remote Control:</strong> The ability to remotely lock or unlock machinery based on payment status or safety violations.</p>
                    </li>
                  </ul>
                </div>
              </article>

              {/* SECTION 04: SHARING */}
              <article id="sharing" className="scroll-mt-32">
                <div className="border-t border-ag-green-950 pt-8 mb-12">
                  <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-12">
                    <div className="flex items-center gap-4">
                      <span className="text-ag-green-950">04</span>
                      <span className="w-8 h-px bg-gray-100"></span>
                      <span>PARTNERS / SHARING</span>
                    </div>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-bold text-ag-green-950 tracking-tight leading-[1.05] mb-10 max-w-2xl">
                    Safeguarding <span className="text-ag-lime">shared</span> information.
                  </h2>
                </div>
                <div className="prose prose-xl max-w-none text-gray-500 font-light leading-relaxed space-y-8">
                  <p>
                    We share information only with trusted entities essential to the energy value chain:
                  </p>
                  <p>
                    <strong>Utility Providers:</strong> Sharing load data with mini-grid developers to ensure the stability of the local power network.
                    <br />
                    <strong>Agronomie (Parent Group):</strong> Operational data is shared within our corporate group to streamline financial accounting and risk management.
                    <br />
                    <strong>Financial Auditors:</strong> Anonymized portfolio data is shared with regulatory and financial bodies to verify our impact and repayment metrics.
                  </p>
                </div>
              </article>

              {/* SECTION 05: RIGHTS */}
              <article id="rights" className="scroll-mt-32">
                <div className="border-t border-ag-green-950 pt-8 mb-12">
                  <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-12">
                    <div className="flex items-center gap-4">
                      <span className="text-ag-green-950">05</span>
                      <span className="w-8 h-px bg-gray-100"></span>
                      <span>RIGHTS / ACCESS</span>
                    </div>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-bold text-ag-green-950 tracking-tight leading-[1.05] mb-10 max-w-2xl">
                    Your rights to <span className="text-ag-lime">data</span> control.
                  </h2>
                </div>
                <div className="prose prose-xl max-w-none text-gray-500 font-light leading-relaxed space-y-8">
                  <p>
                    In accordance with global data protection standards (including NDPR in Nigeria), you have the right to request access to your personal data, rectify inaccuracies, or request the deletion of your data once our financing term has concluded.
                  </p>
                  <p>
                    Please note that certain operational telemetry must be retained during the term of an active financing lease to ensure the security of the collateralized asset.
                  </p>
                </div>
              </article>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default PrivacyPage;
