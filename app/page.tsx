import { getHomePage, getHeroSection, getTrustBarSection, getAllIntroductionSections } from '@/lib/strapi';
import HomePageClient from '@/components/HomePageClient';

export default async function HomePage() {
  let heroData = null;
  let trustBarData = null;
  let introSections: Awaited<ReturnType<typeof getAllIntroductionSections>> = [];

  try {
    const pageData = await getHomePage();
    heroData = getHeroSection(pageData.sections) ?? null;
    trustBarData = getTrustBarSection(pageData.sections) ?? null;
    introSections = getAllIntroductionSections(pageData.sections);
  } catch (err) {
    console.error('[HomePage] Failed to fetch Strapi data:', err);
  }

  return (
    <HomePageClient
      heroData={heroData}
      trustBarData={trustBarData}
      introSections={introSections}
    />
  );
}
