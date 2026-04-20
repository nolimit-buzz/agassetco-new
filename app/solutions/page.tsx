'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import SolutionsPage from '@/components/SolutionsPage';

type PageType = 'home' | 'about' | 'team' | 'solutions' | 'portfolio' | 'news' | 'contact' | 'terms' | 'privacy' | 'cookie-policy' | 'news-detail' | 'project-detail';

export default function SolutionsPageRoute() {
  const router = useRouter();
  const handleNavigate = (page: PageType, id?: number | string) => {
    if (page === 'news-detail') router.push(`/news/${id}`);
    else if (page === 'project-detail') router.push(`/portfolio/${id}`);
    else router.push(page === 'home' ? '/' : `/${page}`);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
      <SolutionsPage onNavigate={handleNavigate} />
    </motion.div>
  );
}
