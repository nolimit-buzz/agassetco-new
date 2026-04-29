'use client';

import { usePathname, useRouter } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import SustainabilityAssistant from '@/components/SustainabilityAssistant';

type PageType =
  | 'home'
  | 'about'
  | 'team'
  | 'solutions'
  | 'portfolio'
  | 'news'
  | 'contact'
  | 'terms'
  | 'privacy'
  | 'cookie-policy'
  | 'news-detail'
  | 'project-detail';

function pageToUrl(page: PageType, id?: number | string): string {
  switch (page) {
    case 'home': return '/';
    case 'news-detail': return `/news/${id}`;
    case 'project-detail': return `/portfolio/${id}`;
    default: return `/${page}`;
  }
}

function urlToPageType(pathname: string): PageType {
  if (pathname === '/') return 'home';
  if (pathname.startsWith('/news/')) return 'news-detail';
  if (pathname.startsWith('/portfolio/')) return 'project-detail';
  const segment = pathname.slice(1) as PageType;
  return segment || 'home';
}

export default function AppShell({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  const currentPage = urlToPageType(pathname);

  const handleNavigate = (page: PageType, id?: number | string) => {
    router.push(pageToUrl(page, id));
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="min-h-screen bg-white overflow-x-clip selection:bg-ag-lime selection:text-white font-sans">
      <Navigation onNavigate={handleNavigate as any} currentPage={currentPage as any} />
      <main>{children}</main>
      <Footer onNavigate={handleNavigate as any} />
      <CookieConsent onNavigate={handleNavigate as any} />
      <SustainabilityAssistant />
    </div>
  );
}
