import { strapiGet } from '../client';
import type {
  HomePageData,
  StrapiSingleResponse,
  HeroSection,
  TrustBarSection,
  IntroductionSection,
  Section,
} from '../types';

export async function getHomePage(): Promise<HomePageData> {
  const response = await strapiGet<StrapiSingleResponse<HomePageData>>(
    '/home-page',
    {
      params: { 'populate[sections][populate]': '*' },
      revalidate: 60,
      tags: ['home-page'],
    }
  );
  return response.data;
}

function findSection<T extends Section>(
  sections: Section[],
  component: T['__component']
): T | undefined {
  return sections.find(s => s.__component === component) as T | undefined;
}

export function getHeroSection(sections: Section[]): HeroSection | undefined {
  return findSection<HeroSection>(sections, 'sections.hero');
}

export function getTrustBarSection(sections: Section[]): TrustBarSection | undefined {
  return findSection<TrustBarSection>(sections, 'sections.trust-bar');
}

export function getIntroductionSection(sections: Section[]): IntroductionSection | undefined {
  return findSection<IntroductionSection>(sections, 'sections.introduction');
}

export function getAllIntroductionSections(sections: Section[]): IntroductionSection[] {
  return sections.filter(s => s.__component === 'sections.introduction') as IntroductionSection[];
}
