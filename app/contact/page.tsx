'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import ContactPage from '@/components/ContactPage';

type PageType = 'home' | 'about' | 'team' | 'solutions' | 'portfolio' | 'news' | 'contact' | 'terms' | 'privacy' | 'cookie-policy' | 'news-detail' | 'project-detail';

export default function ContactPageRoute() {
  const router = useRouter();
  const handleNavigate = (page: PageType, id?: number | string) => {
    if (page === 'news-detail') router.push(`/news/${id}`);
    else if (page === 'project-detail') router.push(`/portfolio/${id}`);
    else router.push(page === 'home' ? '/' : `/${page}`);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
      <ContactPage onNavigate={handleNavigate} />
    </motion.div>
  );
}
