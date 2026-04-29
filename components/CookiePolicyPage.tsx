'use client';


import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Cookie, Settings, ShieldCheck, List, Info } from 'lucide-react';
import Breadcrumb from './Breadcrumb';

interface CookiePolicyPageProps {
  onNavigate?: (page: 'home' | 'about' | 'solutions' | 'portfolio' | 'contact' | 'terms' | 'privacy' | 'news-detail' | 'cookie-policy') => void;
}

const COOKIE_SECTIONS = [
  { id: 'intro', num: '01', title: 'Introduction & Definitions', icon: Info },
  { id: 'usage', num: '02', title: 'Use of Cookies', icon: Cookie },
  { id: 'types', num: '03', title: 'Cookie Categories', icon: List },
  { id: 'management', num: '04', title: 'Your Choices', icon: Settings }
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
            <Breadcrumb items={[
              { label: 'Home', onClick: () => onNavigate?.('home') },
              { label: 'Legal' },
              { label: 'Cookie Policy' },
            ]} />
            
            <div className="text-sm font-bold uppercase tracking-[0.3em] text-ag-green-950">
              Tracking & Transparency — 2026
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
                  This Cookies Policy explains what Cookies are and how We use them. You should read this policy so You can understand what type of cookies We use, the information We collect, and how that information is used.
                </motion.p>
                <motion.div variants={fadeInUp as any} className="flex gap-8">
                  <div className="flex flex-col gap-1">
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest leading-none">Last Updated</p>
                    <p className="text-lg font-bold text-ag-green-950">March 2, 2026</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest leading-none">Website</p>
                    <p className="text-lg font-bold text-ag-green-950">agassetco.com</p>
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
              <p className="text-sm font-bold text-ag-green-950 uppercase tracking-[0.2em] mb-4">Contact Us</p>
              <p className="text-base text-gray-500 font-light leading-relaxed mb-10">
                If you have any questions about this Cookies Policy, you can contact us.
              </p>
              <a
                href="mailto:info@agassetco.com"
                className="text-[12px] font-bold text-ag-lime uppercase tracking-[0.05em] hover:text-ag-green-950 transition-colors break-all"
              >
                info@agassetco.com
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
                      <span>INTRODUCTION</span>
                    </div>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-bold text-ag-green-950 tracking-tight leading-[1.05] mb-10 max-w-2xl">
                    What are <span className="text-ag-lime italic font-serif">Cookies?</span>
                  </h2>
                </div>
                <div className="prose prose-xl max-w-none text-gray-500 font-light leading-relaxed space-y-8">
                  <p className="text-3xl text-ag-green-950/80 font-normal leading-snug">
                    Cookies are small files placed on your device by a website, containing details of your browsing history among their many uses.
                  </p>
                  <p>
                    Cookies do not typically contain any information that personally identifies a user, but personal information that We store about You may be linked to the information stored in and obtained from Cookies. We do not store sensitive personal information, such as mailing addresses or account passwords, in the Cookies We use.
                  </p>
                  <p>
                    You should read this policy so You can understand what type of cookies We use, the information We collect using Cookies, and how that information is used.
                  </p>

                  <div className="border-t border-gray-100 pt-10 mt-10">
                    <h3 className="text-2xl font-bold text-ag-green-950 mb-6">Interpretation &amp; Definitions</h3>
                    <p className="mb-6">The words whose initial letters are capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
                    <ul className="space-y-6 list-none p-0">
                      <li className="flex gap-6">
                        <div className="w-1.5 h-1.5 rounded-full bg-ag-lime mt-4 shrink-0" />
                        <p><strong className="text-ag-green-950">Company</strong> (referred to as "the Company", "We", "Us" or "Our") refers to Agassetco, Victoria Island, Lagos.</p>
                      </li>
                      <li className="flex gap-6">
                        <div className="w-1.5 h-1.5 rounded-full bg-ag-lime mt-4 shrink-0" />
                        <p><strong className="text-ag-green-950">Cookies</strong> means small files placed on Your computer, mobile device, or any other device by a website, containing details of your browsing history on that website among its many uses.</p>
                      </li>
                      <li className="flex gap-6">
                        <div className="w-1.5 h-1.5 rounded-full bg-ag-lime mt-4 shrink-0" />
                        <p><strong className="text-ag-green-950">Website</strong> refers to Agassetco, accessible from <a href="https://agassetco.com/" className="text-ag-lime hover:text-ag-green-950 transition-colors">https://agassetco.com/</a>.</p>
                      </li>
                      <li className="flex gap-6">
                        <div className="w-1.5 h-1.5 rounded-full bg-ag-lime mt-4 shrink-0" />
                        <p><strong className="text-ag-green-950">You</strong> means the individual accessing or using the Website, or a company, or any legal entity on behalf of which such individual is accessing or using the Website, as applicable.</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </article>

              {/* SECTION 02: USAGE */}
              <article id="usage" className="scroll-mt-32">
                <div className="border-t border-ag-green-950 pt-8 mb-12">
                  <div className="flex justify-between items-center text-sm font-bold uppercase tracking-widest text-gray-400 mb-12">
                    <div className="flex items-center gap-4">
                      <span className="text-ag-green-950">02</span>
                      <span className="w-8 h-px bg-gray-100"></span>
                      <span>THE USE OF COOKIES</span>
                    </div>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-bold text-ag-green-950 tracking-tight leading-[1.05] mb-10 max-w-2xl">
                    Session &amp; <span className="text-ag-lime">Persistent</span> Cookies.
                  </h2>
                </div>
                <div className="prose prose-xl max-w-none text-gray-500 font-light leading-relaxed space-y-8">
                  <p>
                    Cookies can be <strong className="text-ag-green-950">"Persistent"</strong> or <strong className="text-ag-green-950">"Session"</strong> Cookies. Persistent Cookies remain on your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close your web browser.
                  </p>
                  <p>
                    Where required by law, We will request your consent before using Cookies that are not strictly necessary. Strictly necessary Cookies are used to provide the Website and cannot be switched off in our systems.
                  </p>
                  <p>We use both session and persistent Cookies for the purposes set out below:</p>
                  <ul className="space-y-6 list-none p-0">
                    <li className="flex gap-6">
                      <div className="w-1.5 h-1.5 rounded-full bg-ag-lime mt-4 shrink-0" />
                      <p><strong className="text-ag-green-950">Session Cookies:</strong> Essential, temporary cookies that expire when you close your browser. Used to authenticate users and prevent fraudulent use of user accounts.</p>
                    </li>
                    <li className="flex gap-6">
                      <div className="w-1.5 h-1.5 rounded-full bg-ag-lime mt-4 shrink-0" />
                      <p><strong className="text-ag-green-950">Persistent Cookies:</strong> Remain on your device between sessions to remember choices You make — such as your login details or language preference — providing a more personal experience.</p>
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
                      <span>COOKIE CATEGORIES</span>
                    </div>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-bold text-ag-green-950 tracking-tight leading-[1.05] mb-10 max-w-2xl">
                    Types of Cookies <span className="text-ag-lime">We use.</span>
                  </h2>
                </div>
                <div className="prose prose-xl max-w-none text-gray-500 font-light leading-relaxed space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div className="p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 flex flex-col">
                      <h4 className="text-2xl font-bold text-ag-green-950 mb-4 flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-ag-lime" /> Necessary / Essential</h4>
                      <p className="text-lg text-gray-500 font-light leading-relaxed flex-1">Essential to provide You with services available through the Website and to enable You to use some of its features. They help authenticate users and prevent fraudulent use. Without these Cookies, the services You have asked for cannot be provided.</p>
                      <div className="flex items-center gap-6 mt-8 pt-6 border-t border-gray-200">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Type</span>
                          <span className="text-xs font-bold text-ag-green-950 uppercase tracking-widest">Session Cookies</span>
                        </div>
                        <div className="w-px h-3 bg-gray-200" />
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold uppercase tracking-widest text-gray-400">By</span>
                          <span className="text-xs font-bold text-ag-green-950 uppercase tracking-widest">Us</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 flex flex-col">
                      <h4 className="text-2xl font-bold text-ag-green-950 mb-4 flex items-center gap-2"><Settings className="w-4 h-4 text-ag-lime" /> Functionality</h4>
                      <p className="text-lg text-gray-500 font-light leading-relaxed flex-1">Allow Us to remember choices You make when You use the Website, such as your login details or language preference, providing You with a more personal experience and avoiding the need to re-enter your preferences every time.</p>
                      <div className="flex items-center gap-6 mt-8 pt-6 border-t border-gray-200">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Type</span>
                          <span className="text-xs font-bold text-ag-green-950 uppercase tracking-widest">Persistent Cookies</span>
                        </div>
                        <div className="w-px h-3 bg-gray-200" />
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold uppercase tracking-widest text-gray-400">By</span>
                          <span className="text-xs font-bold text-ag-green-950 uppercase tracking-widest">Us</span>
                        </div>
                      </div>
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
                      <span>YOUR CHOICES</span>
                    </div>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-bold text-ag-green-950 tracking-tight leading-[1.05] mb-10 max-w-2xl">
                    Your choices <span className="text-ag-lime">regarding</span> Cookies.
                  </h2>
                </div>
                <div className="prose prose-xl max-w-none text-gray-500 font-light leading-relaxed space-y-8">
                  <p>
                    If You prefer to avoid the use of Cookies on the Website, first You must disable the use of Cookies in your browser and then delete the Cookies saved in your browser associated with this Website. You may use this option for preventing the use of Cookies at any time.
                  </p>
                  <p>
                    If You do not accept Our Cookies, You may experience some inconvenience in your use of the Website and some features may not function properly.
                  </p>
                  <p>If You&apos;d like to delete Cookies or instruct your web browser to delete or refuse Cookies, please visit the help pages of your web browser:</p>
                  <ul className="space-y-4 list-none p-0">
                    <li className="flex gap-6">
                      <div className="w-1.5 h-1.5 rounded-full bg-ag-lime mt-4 shrink-0" />
                      <p><strong className="text-ag-green-950">Chrome:</strong> <a href="https://support.google.com/accounts/answer/32050" className="text-ag-lime hover:text-ag-green-950 transition-colors break-all">https://support.google.com/accounts/answer/32050</a></p>
                    </li>
                    <li className="flex gap-6">
                      <div className="w-1.5 h-1.5 rounded-full bg-ag-lime mt-4 shrink-0" />
                      <p><strong className="text-ag-green-950">Microsoft Edge:</strong> <a href="https://support.microsoft.com/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" className="text-ag-lime hover:text-ag-green-950 transition-colors break-all">support.microsoft.com/microsoft-edge/delete-cookies</a></p>
                    </li>
                    <li className="flex gap-6">
                      <div className="w-1.5 h-1.5 rounded-full bg-ag-lime mt-4 shrink-0" />
                      <p><strong className="text-ag-green-950">Firefox:</strong> <a href="https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored" className="text-ag-lime hover:text-ag-green-950 transition-colors break-all">support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored</a></p>
                    </li>
                    <li className="flex gap-6">
                      <div className="w-1.5 h-1.5 rounded-full bg-ag-lime mt-4 shrink-0" />
                      <p><strong className="text-ag-green-950">Safari:</strong> <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" className="text-ag-lime hover:text-ag-green-950 transition-colors break-all">support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac</a></p>
                    </li>
                    <li className="flex gap-6">
                      <div className="w-1.5 h-1.5 rounded-full bg-ag-lime mt-4 shrink-0" />
                      <p>For any other web browser, please visit your web browser&apos;s official web pages.</p>
                    </li>
                  </ul>

                  <div className="border-t border-gray-100 pt-10 mt-10 space-y-8">
                    <div>
                      <h3 className="text-2xl font-bold text-ag-green-950 mb-4">Changes to this Cookies Policy</h3>
                      <p>We may update this Cookies Policy from time to time. The &quot;Last updated&quot; date at the top of this page indicates when it was last revised.</p>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-ag-green-950 mb-4">Contact Us</h3>
                      <p>
                        If you have any questions about this Cookies Policy, You can contact us by email:{' '}
                        <a href="mailto:info@agassetco.com" className="text-ag-lime hover:text-ag-green-950 transition-colors">info@agassetco.com</a>
                      </p>
                    </div>
                  </div>
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
