'use client';


import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, ShieldAlert, Fingerprint, Share2, Scale } from 'lucide-react';
import Breadcrumb from './Breadcrumb';

interface PrivacyPageProps {
  onNavigate?: (page: 'home' | 'about' | 'solutions' | 'portfolio' | 'contact' | 'terms' | 'privacy' | 'news-detail') => void;
}

const PRIVACY_SECTIONS = [
  { id: 'intro', num: '01', title: 'Introduction & Definitions', icon: Fingerprint },
  { id: 'collection', num: '02', title: 'Data Collection', icon: Shield },
  { id: 'use', num: '03', title: 'Use of Personal Data', icon: Share2 },
  { id: 'retention', num: '04', title: 'Retention & Transfer', icon: ShieldAlert },
  { id: 'disclosure', num: '05', title: 'Disclosure & Rights', icon: Scale }
];

const PrivacyPage: React.FC<PrivacyPageProps> = ({ onNavigate }) => {
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
          <motion.div variants={fadeInUp as any} className="flex flex-row items-center justify-between mb-12 border-b border-gray-100 pb-8">
            <Breadcrumb items={[
              { label: 'Home', onClick: () => onNavigate?.('home') },
              { label: 'Legal' },
              { label: 'Privacy Policy' },
            ]} />

            <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-ag-green-950">
              Data Privacy &amp; Transparency — 2026
            </div>
          </motion.div>

          <div className="relative w-full">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-48 flex items-center justify-center z-0 pointer-events-none overflow-visible opacity-[0.03]">
              <div className="rotate-90 whitespace-nowrap text-ag-green-950 text-8xl md:text-9xl font-bold tracking-tighter select-none origin-center">
                PRIVACY
              </div>
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
              <div className="lg:col-span-5 pb-4">
                <motion.p variants={fadeInUp as any} className="text-lg text-gray-500 font-light leading-relaxed mb-10 max-w-sm">
                  This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
                </motion.p>
                <motion.div variants={fadeInUp as any} className="flex gap-8">
                  <div className="flex flex-col gap-1">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">Last Updated</p>
                    <p className="text-sm font-bold text-ag-green-950">March 2, 2026</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">Website</p>
                    <p className="text-sm font-bold text-ag-green-950">agassetco.com</p>
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

      {/* 2. MAIN CONTENT */}
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
              <p className="text-[10px] font-bold text-ag-green-950 uppercase tracking-[0.2em] mb-4">Contact Us</p>
              <p className="text-xs text-gray-500 font-light leading-relaxed mb-10">
                If you have any questions about this Privacy Policy, you can contact us.
              </p>
              <a
                href="mailto:info@agassetco.com"
                className="text-[12px] font-bold text-ag-lime uppercase tracking-[0.05em] hover:text-ag-green-950 transition-colors break-all"
              >
                info@agassetco.com
              </a>
            </div>
          </aside>

          {/* SCROLLABLE CONTENT */}
          <div className="lg:col-span-9">
            <div className="space-y-40">

              {/* SECTION 01: INTRODUCTION & DEFINITIONS */}
              <article id="intro" className="scroll-mt-32">
                <div className="border-t border-ag-green-950 pt-8 mb-12">
                  <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-12">
                    <div className="flex items-center gap-4">
                      <span className="text-ag-green-950">01</span>
                      <span className="w-8 h-px bg-gray-100"></span>
                      <span>INTRODUCTION</span>
                    </div>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-bold text-ag-green-950 tracking-tight leading-[1.05] mb-10 max-w-2xl">
                    Your privacy, <span className="text-ag-lime italic font-serif">clearly</span> defined.
                  </h2>
                </div>
                <div className="prose prose-xl max-w-none text-gray-500 font-light leading-relaxed space-y-8">
                  <p className="text-2xl text-ag-green-950/80 font-normal leading-snug">
                    This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
                  </p>
                  <p>
                    We use Your Personal Data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
                  </p>

                  <div className="border-t border-gray-100 pt-10 mt-10">
                    <h3 className="text-2xl font-bold text-ag-green-950 mb-4">Interpretation</h3>
                    <p className="mb-8">
                      The words whose initial letters are capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                    </p>

                    <h3 className="text-2xl font-bold text-ag-green-950 mb-6">Definitions</h3>
                    <p className="mb-6">For the purposes of this Privacy Policy:</p>
                    <ul className="space-y-6 list-none p-0">
                      <li className="flex gap-6">
                        <div className="w-1.5 h-1.5 rounded-full bg-ag-lime mt-4 shrink-0" />
                        <p><strong className="text-ag-green-950">Account</strong> means a unique account created for You to access our Service or parts of our Service.</p>
                      </li>
                      <li className="flex gap-6">
                        <div className="w-1.5 h-1.5 rounded-full bg-ag-lime mt-4 shrink-0" />
                        <p><strong className="text-ag-green-950">Affiliate</strong> means an entity that controls, is controlled by, or is under common control with a party, where &quot;control&quot; means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</p>
                      </li>
                      <li className="flex gap-6">
                        <div className="w-1.5 h-1.5 rounded-full bg-ag-lime mt-4 shrink-0" />
                        <p><strong className="text-ag-green-950">Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Privacy Policy) refers to Agassetco, Victoria Island.</p>
                      </li>
                      <li className="flex gap-6">
                        <div className="w-1.5 h-1.5 rounded-full bg-ag-lime mt-4 shrink-0" />
                        <p><strong className="text-ag-green-950">Cookies</strong> are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.</p>
                      </li>
                      <li className="flex gap-6">
                        <div className="w-1.5 h-1.5 rounded-full bg-ag-lime mt-4 shrink-0" />
                        <p><strong className="text-ag-green-950">Country</strong> refers to: Nigeria</p>
                      </li>
                      <li className="flex gap-6">
                        <div className="w-1.5 h-1.5 rounded-full bg-ag-lime mt-4 shrink-0" />
                        <p><strong className="text-ag-green-950">Device</strong> means any device that can access the Service such as a computer, a cell phone or a digital tablet.</p>
                      </li>
                      <li className="flex gap-6">
                        <div className="w-1.5 h-1.5 rounded-full bg-ag-lime mt-4 shrink-0" />
                        <p><strong className="text-ag-green-950">Personal Data</strong> (or &quot;Personal Information&quot;) is any information that relates to an identified or identifiable individual. We use &quot;Personal Data&quot; and &quot;Personal Information&quot; interchangeably unless a law uses a specific term.</p>
                      </li>
                      <li className="flex gap-6">
                        <div className="w-1.5 h-1.5 rounded-full bg-ag-lime mt-4 shrink-0" />
                        <p><strong className="text-ag-green-950">Service</strong> refers to the Website.</p>
                      </li>
                      <li className="flex gap-6">
                        <div className="w-1.5 h-1.5 rounded-full bg-ag-lime mt-4 shrink-0" />
                        <p><strong className="text-ag-green-950">Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.</p>
                      </li>
                      <li className="flex gap-6">
                        <div className="w-1.5 h-1.5 rounded-full bg-ag-lime mt-4 shrink-0" />
                        <p><strong className="text-ag-green-950">Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</p>
                      </li>
                      <li className="flex gap-6">
                        <div className="w-1.5 h-1.5 rounded-full bg-ag-lime mt-4 shrink-0" />
                        <p><strong className="text-ag-green-950">Website</strong> refers to Agassetco, accessible from <a href="https://agassetco.com/" className="text-ag-lime hover:text-ag-green-950 transition-colors">https://agassetco.com/</a>.</p>
                      </li>
                      <li className="flex gap-6">
                        <div className="w-1.5 h-1.5 rounded-full bg-ag-lime mt-4 shrink-0" />
                        <p><strong className="text-ag-green-950">You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </article>

              {/* SECTION 02: DATA COLLECTION */}
              <article id="collection" className="scroll-mt-32">
                <div className="border-t border-ag-green-950 pt-8 mb-12">
                  <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-12">
                    <div className="flex items-center gap-4">
                      <span className="text-ag-green-950">02</span>
                      <span className="w-8 h-px bg-gray-100"></span>
                      <span>DATA COLLECTION</span>
                    </div>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-bold text-ag-green-950 tracking-tight leading-[1.05] mb-10 max-w-2xl">
                    Collecting and using <span className="text-ag-lime">Your Personal Data.</span>
                  </h2>
                </div>
                <div className="prose prose-xl max-w-none text-gray-500 font-light leading-relaxed space-y-8">

                  <h3 className="text-2xl font-bold text-ag-green-950 mb-2">Types of Data Collected</h3>

                  <h4 className="text-xl font-bold text-ag-green-950 mb-4">Personal Data</h4>
                  <p>
                    While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
                  </p>
                  <ul className="space-y-4 list-none p-0">
                    {[
                      'Email address',
                      'First name and last name',
                      'Phone number',
                      'Address, State, Province, ZIP/Postal code, City',
                      'Usage Data',
                    ].map((item) => (
                      <li key={item} className="flex gap-6">
                        <div className="w-1.5 h-1.5 rounded-full bg-ag-lime mt-4 shrink-0" />
                        <p>{item}</p>
                      </li>
                    ))}
                  </ul>

                  <div className="border-t border-gray-100 pt-10">
                    <h4 className="text-xl font-bold text-ag-green-950 mb-4">Usage Data</h4>
                    <p>Usage Data is collected automatically when using the Service.</p>
                    <p>
                      Usage Data may include information such as Your Device&apos;s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
                    </p>
                    <p>
                      When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device&apos;s unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.
                    </p>
                    <p>
                      We may also collect information that Your browser sends whenever You visit Our Service or when You access the Service by or through a mobile device.
                    </p>
                  </div>

                  <div className="border-t border-gray-100 pt-10">
                    <h4 className="text-xl font-bold text-ag-green-950 mb-4">Tracking Technologies and Cookies</h4>
                    <p>
                      We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies We use include beacons, tags, and scripts to collect and track information and to improve and analyze Our Service. The technologies We use may include:
                    </p>
                    <ul className="space-y-6 list-none p-0">
                      <li className="flex gap-6">
                        <div className="w-1.5 h-1.5 rounded-full bg-ag-lime mt-4 shrink-0" />
                        <p><strong className="text-ag-green-950">Cookies or Browser Cookies.</strong> A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service.</p>
                      </li>
                      <li className="flex gap-6">
                        <div className="w-1.5 h-1.5 rounded-full bg-ag-lime mt-4 shrink-0" />
                        <p><strong className="text-ag-green-950">Web Beacons.</strong> Certain sections of our Service and our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of a certain section and verifying system and server integrity).</p>
                      </li>
                    </ul>
                    <p className="mt-6">
                      Cookies can be <strong className="text-ag-green-950">&quot;Persistent&quot;</strong> or <strong className="text-ag-green-950">&quot;Session&quot;</strong> Cookies. Persistent Cookies remain on Your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close Your web browser.
                    </p>
                    <p>
                      Where required by law, we use non-essential cookies (such as analytics, advertising, and remarketing cookies) only with Your consent. You can withdraw or change Your consent at any time using Our cookie preferences tool (if available) or through Your browser/device settings. Withdrawing consent does not affect the lawfulness of processing based on consent before its withdrawal.
                    </p>
                    <p>We use both Session and Persistent Cookies for the purposes set out below:</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                      <div className="p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 flex flex-col">
                        <h4 className="text-lg font-bold text-ag-green-950 mb-4">Necessary / Essential Cookies</h4>
                        <p className="text-sm text-gray-500 font-light leading-relaxed flex-1">These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.</p>
                        <div className="flex items-center gap-6 mt-6 pt-4 border-t border-gray-200">
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
                        <h4 className="text-lg font-bold text-ag-green-950 mb-4">Cookies Policy / Notice Acceptance Cookies</h4>
                        <p className="text-sm text-gray-500 font-light leading-relaxed flex-1">These Cookies identify if users have accepted the use of cookies on the Website.</p>
                        <div className="flex items-center gap-6 mt-6 pt-4 border-t border-gray-200">
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
                      <div className="p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 flex flex-col">
                        <h4 className="text-lg font-bold text-ag-green-950 mb-4">Functionality Cookies</h4>
                        <p className="text-sm text-gray-500 font-light leading-relaxed flex-1">These Cookies allow Us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.</p>
                        <div className="flex items-center gap-6 mt-6 pt-4 border-t border-gray-200">
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

                    <p className="mt-8">
                      For more information about the cookies we use and your choices regarding cookies, please visit our <a href="/cookie-policy" className="text-ag-lime hover:text-ag-green-950 transition-colors">Cookies Policy</a> or the Cookies section of Our Privacy Policy.
                    </p>
                  </div>
                </div>
              </article>

              {/* SECTION 03: USE OF PERSONAL DATA */}
              <article id="use" className="scroll-mt-32">
                <div className="border-t border-ag-green-950 pt-8 mb-12">
                  <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-12">
                    <div className="flex items-center gap-4">
                      <span className="text-ag-green-950">03</span>
                      <span className="w-8 h-px bg-gray-100"></span>
                      <span>USE & SHARING</span>
                    </div>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-bold text-ag-green-950 tracking-tight leading-[1.05] mb-10 max-w-2xl">
                    How We use Your <span className="text-ag-lime">Personal Data.</span>
                  </h2>
                </div>
                <div className="prose prose-xl max-w-none text-gray-500 font-light leading-relaxed space-y-8">
                  <p>The Company may use Personal Data for the following purposes:</p>
                  <ul className="space-y-6 list-none p-0">
                    <li className="flex gap-6">
                      <div className="w-1.5 h-1.5 rounded-full bg-ag-lime mt-4 shrink-0" />
                      <p><strong className="text-ag-green-950">To provide and maintain our Service,</strong> including to monitor the usage of our Service.</p>
                    </li>
                    <li className="flex gap-6">
                      <div className="w-1.5 h-1.5 rounded-full bg-ag-lime mt-4 shrink-0" />
                      <p><strong className="text-ag-green-950">To manage Your Account:</strong> to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.</p>
                    </li>
                    <li className="flex gap-6">
                      <div className="w-1.5 h-1.5 rounded-full bg-ag-lime mt-4 shrink-0" />
                      <p><strong className="text-ag-green-950">For the performance of a contract:</strong> the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.</p>
                    </li>
                    <li className="flex gap-6">
                      <div className="w-1.5 h-1.5 rounded-full bg-ag-lime mt-4 shrink-0" />
                      <p><strong className="text-ag-green-950">To contact You:</strong> To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application&apos;s push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.</p>
                    </li>
                    <li className="flex gap-6">
                      <div className="w-1.5 h-1.5 rounded-full bg-ag-lime mt-4 shrink-0" />
                      <p><strong className="text-ag-green-950">To provide You with news, special offers, and general information</strong> about other goods, services and events which We offer that are similar to those that you have already purchased or inquired about unless You have opted not to receive such information.</p>
                    </li>
                    <li className="flex gap-6">
                      <div className="w-1.5 h-1.5 rounded-full bg-ag-lime mt-4 shrink-0" />
                      <p><strong className="text-ag-green-950">To manage Your requests:</strong> To attend and manage Your requests to Us.</p>
                    </li>
                    <li className="flex gap-6">
                      <div className="w-1.5 h-1.5 rounded-full bg-ag-lime mt-4 shrink-0" />
                      <p><strong className="text-ag-green-950">For business transfers:</strong> We may use Your Personal Data to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.</p>
                    </li>
                    <li className="flex gap-6">
                      <div className="w-1.5 h-1.5 rounded-full bg-ag-lime mt-4 shrink-0" />
                      <p><strong className="text-ag-green-950">For other purposes:</strong> We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.</p>
                    </li>
                  </ul>

                  <div className="border-t border-gray-100 pt-10">
                    <p>We may share Your Personal Data in the following situations:</p>
                    <ul className="space-y-6 list-none p-0 mt-6">
                      <li className="flex gap-6">
                        <div className="w-1.5 h-1.5 rounded-full bg-ag-lime mt-4 shrink-0" />
                        <p><strong className="text-ag-green-950">With Service Providers:</strong> We may share Your Personal Data with Service Providers to monitor and analyze the use of our Service, to contact You.</p>
                      </li>
                      <li className="flex gap-6">
                        <div className="w-1.5 h-1.5 rounded-full bg-ag-lime mt-4 shrink-0" />
                        <p><strong className="text-ag-green-950">For business transfers:</strong> We may share or transfer Your Personal Data in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.</p>
                      </li>
                      <li className="flex gap-6">
                        <div className="w-1.5 h-1.5 rounded-full bg-ag-lime mt-4 shrink-0" />
                        <p><strong className="text-ag-green-950">With Affiliates:</strong> We may share Your Personal Data with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.</p>
                      </li>
                      <li className="flex gap-6">
                        <div className="w-1.5 h-1.5 rounded-full bg-ag-lime mt-4 shrink-0" />
                        <p><strong className="text-ag-green-950">With business partners:</strong> We may share Your Personal Data with Our business partners to offer You certain products, services or promotions.</p>
                      </li>
                      <li className="flex gap-6">
                        <div className="w-1.5 h-1.5 rounded-full bg-ag-lime mt-4 shrink-0" />
                        <p><strong className="text-ag-green-950">With other users:</strong> If Our Service offers public areas, when You share Personal Data or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside.</p>
                      </li>
                      <li className="flex gap-6">
                        <div className="w-1.5 h-1.5 rounded-full bg-ag-lime mt-4 shrink-0" />
                        <p><strong className="text-ag-green-950">With Your consent:</strong> We may disclose Your Personal Data for any other purpose with Your consent.</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </article>

              {/* SECTION 04: RETENTION & TRANSFER */}
              <article id="retention" className="scroll-mt-32">
                <div className="border-t border-ag-green-950 pt-8 mb-12">
                  <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-12">
                    <div className="flex items-center gap-4">
                      <span className="text-ag-green-950">04</span>
                      <span className="w-8 h-px bg-gray-100"></span>
                      <span>RETENTION & TRANSFER</span>
                    </div>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-bold text-ag-green-950 tracking-tight leading-[1.05] mb-10 max-w-2xl">
                    How long We <span className="text-ag-lime">keep</span> Your data.
                  </h2>
                </div>
                <div className="prose prose-xl max-w-none text-gray-500 font-light leading-relaxed space-y-8">
                  <h3 className="text-2xl font-bold text-ag-green-950 mb-4">Retention of Your Personal Data</h3>
                  <p>
                    The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if We are required to retain Your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.
                  </p>
                  <p>
                    Where possible, We apply shorter retention periods and/or reduce identifiability by deleting, aggregating, or anonymizing data. Unless otherwise stated, the retention periods below are maximum periods (&quot;up to&quot;) and We may delete or anonymize data sooner when it is no longer needed for the relevant purpose. We apply different retention periods to different categories of Personal Data based on the purpose of processing and legal obligations:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100">
                      <h4 className="text-lg font-bold text-ag-green-950 mb-3">Account Information</h4>
                      <p className="text-sm text-gray-500 font-light leading-relaxed"><strong className="text-ag-green-950">User Accounts:</strong> retained for the duration of your account relationship plus up to 24 months after account closure to handle any post-termination issues or resolve disputes.</p>
                    </div>
                    <div className="p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100">
                      <h4 className="text-lg font-bold text-ag-green-950 mb-3">Customer Support Data</h4>
                      <p className="text-sm text-gray-500 font-light leading-relaxed"><strong className="text-ag-green-950">Support tickets and correspondence:</strong> up to 24 months from the date of ticket closure to resolve follow-up inquiries, track service quality, and defend against potential legal claims. <strong className="text-ag-green-950">Chat transcripts:</strong> up to 24 months for quality assurance and staff training purposes.</p>
                    </div>
                    <div className="p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 md:col-span-2">
                      <h4 className="text-lg font-bold text-ag-green-950 mb-3">Usage Data</h4>
                      <p className="text-sm text-gray-500 font-light leading-relaxed"><strong className="text-ag-green-950">Website analytics data</strong> (cookies, IP addresses, device identifiers): up to 24 months from the date of collection, which allows us to analyze trends while respecting privacy principles. <strong className="text-ag-green-950">Server logs</strong> (IP addresses, access times): up to 24 months for security monitoring and troubleshooting purposes.</p>
                    </div>
                  </div>

                  <p>
                    Usage Data is retained in accordance with the retention periods described above, and may be retained longer only where necessary for security, fraud prevention, or legal compliance.
                  </p>
                  <p>We may retain Personal Data beyond the periods stated above for different reasons:</p>
                  <ul className="space-y-4 list-none p-0">
                    <li className="flex gap-6">
                      <div className="w-1.5 h-1.5 rounded-full bg-ag-lime mt-4 shrink-0" />
                      <p><strong className="text-ag-green-950">Legal obligation:</strong> We are required by law to retain specific data (e.g., financial records for tax authorities).</p>
                    </li>
                    <li className="flex gap-6">
                      <div className="w-1.5 h-1.5 rounded-full bg-ag-lime mt-4 shrink-0" />
                      <p><strong className="text-ag-green-950">Legal claims:</strong> Data is necessary to establish, exercise, or defend legal claims.</p>
                    </li>
                    <li className="flex gap-6">
                      <div className="w-1.5 h-1.5 rounded-full bg-ag-lime mt-4 shrink-0" />
                      <p><strong className="text-ag-green-950">Your explicit request:</strong> You ask Us to retain specific information.</p>
                    </li>
                    <li className="flex gap-6">
                      <div className="w-1.5 h-1.5 rounded-full bg-ag-lime mt-4 shrink-0" />
                      <p><strong className="text-ag-green-950">Technical limitations:</strong> Data exists in backup systems that are scheduled for routine deletion.</p>
                    </li>
                  </ul>
                  <p>You may request information about how long We will retain Your Personal Data by contacting Us.</p>
                  <p>When retention periods expire, We securely delete or anonymize Personal Data according to the following procedures:</p>
                  <ul className="space-y-4 list-none p-0">
                    <li className="flex gap-6">
                      <div className="w-1.5 h-1.5 rounded-full bg-ag-lime mt-4 shrink-0" />
                      <p><strong className="text-ag-green-950">Deletion:</strong> Personal Data is removed from Our systems and no longer actively processed.</p>
                    </li>
                    <li className="flex gap-6">
                      <div className="w-1.5 h-1.5 rounded-full bg-ag-lime mt-4 shrink-0" />
                      <p><strong className="text-ag-green-950">Backup retention:</strong> Residual copies may remain in encrypted backups for a limited period consistent with our backup retention schedule and are not restored except where necessary for security, disaster recovery, or legal compliance.</p>
                    </li>
                    <li className="flex gap-6">
                      <div className="w-1.5 h-1.5 rounded-full bg-ag-lime mt-4 shrink-0" />
                      <p><strong className="text-ag-green-950">Anonymization:</strong> In some cases, We convert Personal Data into anonymous statistical data that cannot be linked back to You. This anonymized data may be retained indefinitely for research and analytics.</p>
                    </li>
                  </ul>

                  <div className="border-t border-gray-100 pt-10">
                    <h3 className="text-2xl font-bold text-ag-green-950 mb-4">Transfer of Your Personal Data</h3>
                    <p>
                      Your information, including Personal Data, is processed at the Company&apos;s operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ from those from Your jurisdiction.
                    </p>
                    <p>
                      Where required by applicable law, We will ensure that international transfers of Your Personal Data are subject to appropriate safeguards and supplementary measures where appropriate. The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.
                    </p>
                  </div>

                  <div className="border-t border-gray-100 pt-10">
                    <h3 className="text-2xl font-bold text-ag-green-950 mb-4">Delete Your Personal Data</h3>
                    <p>You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You.</p>
                    <p>Our Service may give You the ability to delete certain information about You from within the Service.</p>
                    <p>
                      You may update, amend, or delete Your information at any time by signing in to Your Account, if you have one, and visiting the account settings section that allows you to manage Your personal information. You may also contact Us to request access to, correct, or delete any Personal Data that You have provided to Us.
                    </p>
                    <p>Please note, however, that We may need to retain certain information when we have a legal obligation or lawful basis to do so.</p>
                  </div>
                </div>
              </article>

              {/* SECTION 05: DISCLOSURE & RIGHTS */}
              <article id="disclosure" className="scroll-mt-32">
                <div className="border-t border-ag-green-950 pt-8 mb-12">
                  <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-12">
                    <div className="flex items-center gap-4">
                      <span className="text-ag-green-950">05</span>
                      <span className="w-8 h-px bg-gray-100"></span>
                      <span>DISCLOSURE & RIGHTS</span>
                    </div>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-bold text-ag-green-950 tracking-tight leading-[1.05] mb-10 max-w-2xl">
                    Disclosure, security <span className="text-ag-lime">&amp; your rights.</span>
                  </h2>
                </div>
                <div className="prose prose-xl max-w-none text-gray-500 font-light leading-relaxed space-y-8">

                  <h3 className="text-2xl font-bold text-ag-green-950 mb-4">Disclosure of Your Personal Data</h3>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-bold text-ag-green-950 mb-2">Business Transactions</h4>
                      <p>If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-ag-green-950 mb-2">Law enforcement</h4>
                      <p>Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-ag-green-950 mb-2">Other legal requirements</h4>
                      <p>The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:</p>
                      <ul className="space-y-4 list-none p-0 mt-4">
                        {[
                          'Comply with a legal obligation',
                          'Protect and defend the rights or property of the Company',
                          'Prevent or investigate possible wrongdoing in connection with the Service',
                          'Protect the personal safety of Users of the Service or the public',
                          'Protect against legal liability',
                        ].map((item) => (
                          <li key={item} className="flex gap-6">
                            <div className="w-1.5 h-1.5 rounded-full bg-ag-lime mt-4 shrink-0" />
                            <p>{item}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="border-t border-gray-100 pt-10">
                    <h3 className="text-2xl font-bold text-ag-green-950 mb-4">Security of Your Personal Data</h3>
                    <p>
                      The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially reasonable means to protect Your Personal Data, We cannot guarantee its absolute security.
                    </p>
                  </div>

                  <div className="border-t border-gray-100 pt-10">
                    <h3 className="text-2xl font-bold text-ag-green-950 mb-4">Children&apos;s Privacy</h3>
                    <p>
                      Our Service does not address anyone under the age of 16. We do not knowingly collect personally identifiable information from anyone under the age of 16. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 16 without verification of parental consent, We take steps to remove that information from Our servers.
                    </p>
                    <p>
                      If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent&apos;s consent before We collect and use that information.
                    </p>
                  </div>

                  <div className="border-t border-gray-100 pt-10">
                    <h3 className="text-2xl font-bold text-ag-green-950 mb-4">Links to Other Websites</h3>
                    <p>
                      Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party&apos;s site. We strongly advise You to review the Privacy Policy of every site You visit.
                    </p>
                    <p>We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>
                  </div>

                  <div className="border-t border-gray-100 pt-10 space-y-8">
                    <div>
                      <h3 className="text-2xl font-bold text-ag-green-950 mb-4">Changes to this Privacy Policy</h3>
                      <p>We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.</p>
                      <p>We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the &quot;Last updated&quot; date at the top of this Privacy Policy.</p>
                      <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-ag-green-950 mb-4">Contact Us</h3>
                      <p>
                        If you have any questions about this Privacy Policy, You can contact us:<br />
                        By email: <a href="mailto:info@agassetco.com" className="text-ag-lime hover:text-ag-green-950 transition-colors">info@agassetco.com</a>
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

export default PrivacyPage;
