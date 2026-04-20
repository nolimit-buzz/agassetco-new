'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import Introduction from '@/components/Introduction';
import ProblemSolution from '@/components/ProblemSolution';
import HubAndSolutions from '@/components/HubAndSolutions';
import Portfolio from '@/components/Portfolio';
import NewsSection from '@/components/NewsSection';
import ImpactCTA from '@/components/ImpactCTA';

type PageType = 'home' | 'about' | 'team' | 'solutions' | 'portfolio' | 'news' | 'contact' | 'terms' | 'privacy' | 'cookie-policy' | 'news-detail' | 'project-detail';

export default function HomePage() {
  const router = useRouter();

  const handleNavigate = (page: PageType, id?: number | string) => {
    if (page === 'news-detail') router.push(`/news/${id}`);
    else if (page === 'project-detail') router.push(`/portfolio/${id}`);
    else router.push(page === 'home' ? '/' : `/${page}`);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <TrustBar />
      <Introduction />
      <ProblemSolution />
      <HubAndSolutions />
      <Portfolio onNavigate={handleNavigate} />
      <NewsSection onNavigate={handleNavigate} />
      <ImpactCTA />
    </motion.div>
  );
}
