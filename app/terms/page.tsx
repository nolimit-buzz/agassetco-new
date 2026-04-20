'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import TermsPage from '@/components/TermsPage';

type PageType = 'home' | 'about' | 'team' | 'solutions' | 'portfolio' | 'news' | 'contact' | 'terms' | 'privacy' | 'cookie-policy' | 'news-detail' | 'project-detail';

export default function TermsPageRoute() {
  const router = useRouter();
  const handleNavigate = (page: PageType, id?: number | string) => {
    if (page === 'news-detail') router.push(`/news/${id}`);
    else if (page === 'project-detail') router.push(`/portfolio/${id}`);
    else router.push(page === 'home' ? '/' : `/${page}`);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <TermsPage type="Terms & Conditions" onNavigate={handleNavigate as any} />
    </motion.div>
  );
}
