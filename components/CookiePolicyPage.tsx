'use client';


import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Home, ChevronRight, Cookie, Settings, ShieldCheck, List, Info } from 'lucide-react';

interface CookiePolicyPageProps {
  onNavigate?: (page: 'home' | 'about' | 'solutions' | 'portfolio' | 'contact' | 'terms' | 'privacy' | 'news-detail' | 'cookie-policy') => void;
}

const COOKIE_SECTIONS = [
  { id: 'intro', num: '01', title: 'What Are Cookies?', icon: Info },
  { id: 'usage', num: '02', title: 'How We Use Them', icon: Cookie },
  { id: 'types', num: '03', title: 'Types of Cookies', icon: List },
  { id: 'management', num: '04', title: 'Manage Preferences', icon: Settings }
];

const CookiePolicyPage: React.FC<CookiePolicyPageProps> = ({ onNavigate }) => {
  const [activeSection, setActiveSection] = useState('intro');

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
    COOKIE_SECTIONS.forEach((section) => {
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
      
      {/* 1. HERO SECTION */}
      <section className="pt-32 pb-20 bg-white overflow-hidden px-6">
        <motion.div 
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto"
        >
          {/* Meta Header */}
          <motion.div variants={fadeInUp as any} className="flex flex-row items-center justify-between mb-12 border-b border-gray-100 pb-8">
            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-ag-green-950 bg-gray-50 px-4 py-2 rounded-full w-fit border border-gray-100">
              <Home className="w-2.5 h-2.5" />
              <span className="cursor-pointer hover:text-ag-lime transition-colors" onClick={() => onNavigate?.('home')}>Home</span>
              <ChevronRight className="w-2.5 h-2.5 opacity-50" />
              <span className="opacity-50">Legal</span>
              <ChevronRight className="w-2.5 h-2.5 opacity-50" />
              <span className="text-ag-green-950">Cookie Policy</span>
            </div>
            
            <div className="text-sm font-bold uppercase tracking-[0.3em] text-ag-green-950">
              Tracking & Transparency — 2025
            </div>
          </motion.div>

          <div className="relative w-full">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-48 flex items-center justify-center z-0 pointer-events-none overflow-visible opacity-[0.03]">
              <div className="rotate-90 whitespace-nowrap text-ag-green-950 text-8xl md:text-9xl font-bold tracking-tighter select-none origin-center">
                COOKIES
              </div>
            </div>

            {/* Asymmetric Content */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
              <div className="lg:col-span-5 pb-4">
                <motion.p variants={fadeInUp as any} className="text-2xl text-gray-500 font-light leading-relaxed mb-10 max-w-sm">
                  We believe in clear, transparent usage of data technologies. This policy explains how AgAsset Co uses cookies to improve your experience.
                </motion.p>
                <motion.div variants={fadeInUp as any} className="flex gap-8">
                  <div className="flex flex-col gap-1">
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest leading-none">Last Updated</p>
                    <p className="text-lg font-bold text-ag-green-950">Feb 15, 2025</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest leading-none">Scope</p>
                    <p className="text-lg font-bold text-ag-green-950">Global Site & Portal</p>
                  </div>
                </motion.div>
              </div>
              
              <div className="lg:col-span-7 lg:text-right">
                <motion.h1 
                  variants={fadeInUp as any}
                  className="text-6xl md:text-8xl lg:text-[7.5rem] font-bold text-ag-green-950 leading-[0.9] tracking-tighter"
                >
                  COOKIE <br/>
                  <span className="text-ag-lime">POLICY.</span>
                </motion.h1>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2. MAIN CONTENT */}
      <section className="max-w-7xl mx-auto px-6 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* Sticky Sidebar */}
          <aside className="lg:col-span-3 hidden lg:block sticky top-32 pb-20 self-start">
            <div className="text-sm font-bold uppercase tracking-[0.25em] text-gray-400 border-b border-gray-100 pb-8 mb-10">
              Table of Contents
            </div>
            
            <nav className="flex flex-col gap-0 relative">
              <div className="absolute left-[3px] top-0 bottom-0 w-px bg-gray-100" />
              {COOKIE_SECTIONS.map((section) => {
                const isActive = activeSection === section.id;
                return (
                  <a 
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={(e) => scrollToSection(e, section.id)}
                    className={`text-base font-bold uppercase tracking-widest transition-all duration-500 flex items-center gap-8 pl-1.5 py-6 relative group ${
                      isActive ? 'text-ag-green-950' : 'text-gray-300 hover:text-ag-green-950/70'
                    }`}
                  >
                    <div className={`absolute left-0 w-[7px] h-[7px] rounded-full z-10 transition-all duration-500 ${
                      isActive ? 'bg-ag-lime scale-100' : 'bg-transparent scale-0'
                    }`} />
                    
                    <span className={`text-sm transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-40'}`}>
                      {section.num}
                    </span>
                    <span className="relative pb-1">
                      {section.title}
                      {isActive && (
                        <motion.div 
                          layoutId="sidebarUnderlineCookie"
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
              <p className="text-sm font-bold text-ag-green-950 uppercase tracking-[0.2em] mb-4">Privacy Officer</p>
              <p className="text-base text-gray-500 font-light leading-relaxed mb-10">
                Need to clear your data or manage consent settings?
              </p>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); onNavigate?.('contact'); }} 
                className="text-sm font-bold text-ag-lime uppercase tracking-[0.25em] hover:text-ag-green-950 transition-colors"
              >
                Contact Privacy Team
              </a>
            </div>
          </aside>

          {/* Scrollable Content */}
          <div className="lg:col-span-9">
            <div className="space-y-40">
              
              {/* SECTION 01: INTRO */}
              <article id="intro" className="scroll-mt-32">
                <div className="border-t border-ag-green-950 pt-8 mb-12">
                  <div className="flex justify-between items-center text-sm font-bold uppercase tracking-widest text-gray-400 mb-12">
                    <div className="flex items-center gap-4">
                      <span className="text-ag-green-950">01</span>
                      <span className="w-8 h-px bg-gray-100"></span>
                      <span>DEFINITION / INTRO</span>
                    </div>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-bold text-ag-green-950 tracking-tight leading-[1.05] mb-10 max-w-2xl">
                    Small files, <span className="text-ag-lime italic font-serif">better</span> experience.
                  </h2>
                </div>
                <div className="prose prose-xl max-w-none text-gray-500 font-light leading-relaxed space-y-8">
                  <p className="text-3xl text-ag-green-950/80 font-normal leading-snug">
                    Cookies are small text files placed on your device when you visit our website.
                  </p>
                  <p>
                    They allow us to recognize your device, secure your access to our partner portal, and remember your preferences over time. At AgAsset Co, we treat cookies as a tool for efficiency, not surveillance.
                  </p>
                </div>
              </article>

              {/* SECTION 02: USAGE */}
              <article id="usage" className="scroll-mt-32">
                <div className="border-t border-ag-green-950 pt-8 mb-12">
                  <div className="flex justify-between items-center text-sm font-bold uppercase tracking-widest text-gray-400 mb-12">
                    <div className="flex items-center gap-4">
                      <span className="text-ag-green-950">02</span>
                      <span className="w-8 h-px bg-gray-100"></span>
                      <span>USAGE / PURPOSE</span>
                    </div>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-bold text-ag-green-950 tracking-tight leading-[1.05] mb-10 max-w-2xl">
                    Enhancing <span className="text-ag-lime">operational</span> functionality.
                  </h2>
                </div>
                <div className="prose prose-xl max-w-none text-gray-500 font-light leading-relaxed space-y-8">
                  <p>We use cookies primarily for:</p>
                  <ul className="space-y-6 list-none p-0">
                    <li className="flex gap-6">
                      <div className="w-1.5 h-1.5 rounded-full bg-ag-lime mt-4 shrink-0" />
                      <p><strong className="text-ag-green-950">Security Authentication:</strong> Verifying your identity when you log into the AgAsset Client Portal.</p>
                    </li>
                    <li className="flex gap-6">
                      <div className="w-1.5 h-1.5 rounded-full bg-ag-lime mt-4 shrink-0" />
                      <p><strong className="text-ag-green-950">Performance Monitoring:</strong> Understanding how users navigate our site to improve load times and structure.</p>
                    </li>
                    <li className="flex gap-6">
                      <div className="w-1.5 h-1.5 rounded-full bg-ag-lime mt-4 shrink-0" />
                      <p><strong className="text-ag-green-950">Preference Retention:</strong> Remembering your language settings or region selection (e.g., Nigeria vs. Kenya view).</p>
                    </li>
                  </ul>
                </div>
              </article>

              {/* SECTION 03: TYPES */}
              <article id="types" className="scroll-mt-32">
                <div className="border-t border-ag-green-950 pt-8 mb-12">
                  <div className="flex justify-between items-center text-sm font-bold uppercase tracking-widest text-gray-400 mb-12">
                    <div className="flex items-center gap-4">
                      <span className="text-ag-green-950">03</span>
                      <span className="w-8 h-px bg-gray-100"></span>
                      <span>CATEGORIES / TYPES</span>
                    </div>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-bold text-ag-green-950 tracking-tight leading-[1.05] mb-10 max-w-2xl">
                    Categorizing our <span className="text-ag-lime">digital</span> footprint.
                  </h2>
                </div>
                <div className="prose prose-xl max-w-none text-gray-500 font-light leading-relaxed space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div className="p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100">
                      <h4 className="text-2xl font-bold text-ag-green-950 mb-4 flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-ag-lime" /> Essential</h4>
                      <p className="text-lg text-gray-500 font-light leading-relaxed">Mandatory for the website to function. You cannot opt-out of these.</p>
                    </div>
                    <div className="p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100">
                      <h4 className="text-2xl font-bold text-ag-green-950 mb-4 flex items-center gap-2"><Settings className="w-4 h-4 text-ag-lime" /> Functional</h4>
                      <p className="text-lg text-gray-500 font-light leading-relaxed">Enable enhanced functionality like video playback and localized maps.</p>
                    </div>
                    <div className="p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100">
                      <h4 className="text-2xl font-bold text-ag-green-950 mb-4 flex items-center gap-2"><List className="w-4 h-4 text-ag-lime" /> Analytics</h4>
                      <p className="text-lg text-gray-500 font-light leading-relaxed">Help us understand visitor counts and traffic sources (Google Analytics).</p>
                    </div>
                  </div>
                </div>
              </article>

              {/* SECTION 04: MANAGEMENT */}
              <article id="management" className="scroll-mt-32">
                <div className="border-t border-ag-green-950 pt-8 mb-12">
                  <div className="flex justify-between items-center text-sm font-bold uppercase tracking-widest text-gray-400 mb-12">
                    <div className="flex items-center gap-4">
                      <span className="text-ag-green-950">04</span>
                      <span className="w-8 h-px bg-gray-100"></span>
                      <span>CONTROL / SETTINGS</span>
                    </div>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-bold text-ag-green-950 tracking-tight leading-[1.05] mb-10 max-w-2xl">
                    Your right to <span className="text-ag-lime">choose</span>.
                  </h2>
                </div>
                <div className="prose prose-xl max-w-none text-gray-500 font-light leading-relaxed space-y-8">
                  <p>
                    You can control and manage cookies in various ways. Please note that removing or blocking cookies can negatively impact your user experience.
                  </p>
                  <p>
                    Most browsers allow you to view, manage, delete, and block cookies for a website. Be aware that if you delete all cookies then any preferences you have set will be lost, including the ability to opt-out from cookies as this function itself requires placement of an opt-out cookie on your device.
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

export default CookiePolicyPage;
