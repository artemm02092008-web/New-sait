import clinicJson from "@/content/clinic.json";

// Типы контента. Слой данных специально отделён от разметки:
// при переезде на Headless CMS (Strapi / Sanity / Contentful) меняется
// только источник объекта внизу файла — компоненты остаются прежними.

export interface NavLink {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface AboutItem {
  number: string;
  title: string;
  description: string;
}

export interface ReviewItem {
  rating: number;
  text: string;
  author: string;
  date: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ClinicContent {
  clinic: {
    name: string;
    tagline: string;
    city: string;
    rating: number;
    phone: string;
    phoneHref: string;
    hours: string;
    hoursShort: string;
    address: {
      full: string;
      region: string;
      cityName: string;
      street: string;
    };
    nav: NavLink[];
  };
  hero: {
    eyebrow: string;
    titleLines: string[];
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    imageSrc: string;
    imageAlt: string;
    imageNote: string;
  };
  stats: StatItem[];
  about: {
    badge: string;
    headingLine1: string;
    headingLine2: string;
    leadText: string;
    imageSrc: string;
    imageAlt: string;
    items: AboutItem[];
    paragraphs: string[];
  };
  reviews: {
    badge: string;
    heading: string;
    rating: { value: string; label: string };
    items: ReviewItem[];
    footer: string;
  };
  faq: {
    badge: string;
    headingLine1: string;
    headingLine2: string;
    lead: string;
    phone: string;
    phoneHref: string;
    mainItems: FaqItem[];
    moreItems: FaqItem[];
    moreLabel: string;
    lessLabel: string;
  };
}

/**
 * Единая точка получения контента.
 * Данные «вшиваются» в билд на этапе SSG — страница отдаётся готовым HTML.
 * @see app/page.tsx (ensureStatic = 'navigation')
 */
export function getClinicContent(): ClinicContent {
  return clinicJson as ClinicContent;
}
