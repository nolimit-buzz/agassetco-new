'use client';

import { useRouter, useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import SingleProject from '@/components/SingleProject';

type PageType = 'home' | 'about' | 'team' | 'solutions' | 'portfolio' | 'news' | 'contact' | 'terms' | 'privacy' | 'cookie-policy' | 'news-detail' | 'project-detail';

export default function ProjectDetailPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;

  const handleNavigate = (page: PageType, navId?: number | string) => {
    if (page === 'news-detail') router.push(`/news/${navId}`);
    else if (page === 'project-detail') router.push(`/portfolio/${navId}`);
    else router.push(page === 'home' ? '/' : `/${page}`);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }}>
      <SingleProject projectId={id} onNavigate={handleNavigate} />
    </motion.div>
  );
}
