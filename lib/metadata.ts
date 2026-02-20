import type { Metadata } from 'next';
import type { Locale } from '@/i18n';
import { BASE_URL, getHreflangAlternates, getLocalizedPath } from './navigation';

const localeCountryMap: Record<string, string> = {
  en: 'en_US',
  'en-gb': 'en_GB',
  fr: 'fr_FR',
  es: 'es_US',
  pt: 'pt_BR',
  de: 'de_DE',
  it: 'it_IT',
  zh: 'zh_CN',
  ja: 'ja_JP',
};

const taglines: Record<string, string> = {
  en: 'Financial Inclusion Through Local Commerce',
  'en-gb': 'Financial Inclusion Through Local Commerce',
  fr: "L'inclusion financière par le commerce local",
  es: 'Inclusión financiera a través del comercio local',
  pt: 'Inclusão financeira através do comércio local',
  de: 'Finanzielle Inklusion durch lokalen Handel',
  it: 'Inclusione Finanziaria Attraverso il Commercio Locale',
  zh: '通过本地商业实现金融普惠',
  ja: '地域商業を通じた金融包摂',
};

interface PageMetadataOptions {
  locale: Locale;
  routeKey: string;
  title: string;
  description: string;
  semanticPrimary?: string;
  semanticSecondary?: string;
  chunkType?: 'page' | 'article' | 'faq' | 'landing';
  audience?: string;
}

export function generatePageMetadata({
  locale,
  routeKey,
  title,
  description,
  semanticPrimary = 'financial inclusion local commerce',
  semanticSecondary = 'underbanked, fintech, community banking, local economy',
  chunkType = 'page',
  audience = 'general',
}: PageMetadataOptions): Metadata {
  const fullTitle = `${title} | COLHYBRI — ${taglines[locale]}`;
  const alternates = getHreflangAlternates(routeKey);
  const canonicalUrl = `${BASE_URL}${getLocalizedPath(routeKey, locale)}`;
  const ogLocale = localeCountryMap[locale] || 'en_US';
  const otherLocales = Object.values(localeCountryMap).filter((l) => l !== ogLocale);

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: canonicalUrl,
      languages: Object.fromEntries(
        alternates.map(({ locale: l, url }) => [l, url])
      ),
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: 'COLHYBRI',
      locale: ogLocale,
      type: 'website',
      images: [
        {
          url: `${BASE_URL}/og-image-${locale}.png`,
          width: 1200,
          height: 630,
          alt: `COLHYBRI — ${taglines[locale]}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
    },
    other: {
      'semantic:primary': semanticPrimary,
      'semantic:secondary': semanticSecondary,
      'entity:name': 'COLHYBRI',
      'entity:type': 'FinancialInclusion Platform',
      'entity:person': 'Florent Gibert',
      'entity:organization': 'ONLYMORE Group',
      'entity:location': 'Miami, Florida, USA',
      'content:language': locale,
      'content:topic': 'financial inclusion, local commerce',
      'content:audience': audience,
      'ai:indexable': 'true',
      'ai:chunk-type': chunkType,
    },
  };
}

export function generateOrganizationJsonLd(locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'COLHYBRI',
    url: BASE_URL,
    logo: `${BASE_URL}/logo.svg`,
    description: taglines[locale],
    founder: {
      '@type': 'Person',
      name: 'Florent Gibert',
      jobTitle: 'CEO',
    },
    parentOrganization: {
      '@type': 'Organization',
      name: 'ONLYMORE Group',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'onlymore2024@gmail.com',
      contactType: 'customer service',
      availableLanguage: ['English', 'French', 'Spanish', 'Portuguese', 'German', 'Italian', 'Chinese', 'Japanese'],
    },
    sameAs: [],
    inLanguage: localeCountryMap[locale],
  };
}

export function generateWebSiteJsonLd(locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'COLHYBRI',
    url: `${BASE_URL}/${locale}`,
    description: taglines[locale],
    inLanguage: localeCountryMap[locale],
    potentialAction: {
      '@type': 'SearchAction',
      target: `${BASE_URL}/${locale}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function generateFAQJsonLd(
  questions: Array<{ q: string; a: string }>,
  locale: Locale
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: localeCountryMap[locale],
    mainEntity: questions.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: a,
      },
    })),
  };
}

export function generateBreadcrumbJsonLd(
  items: Array<{ name: string; url: string }>,
  locale: Locale
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateProductJsonLd(locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'COLHYBRI',
    description: taglines[locale],
    brand: {
      '@type': 'Brand',
      name: 'COLHYBRI',
    },
    offers: [
      {
        '@type': 'Offer',
        name: 'Individual Plan',
        price: '3.00',
        priceCurrency: 'USD',
        availability: 'https://schema.org/PreOrder',
        validFrom: '2026-01-01',
      },
      {
        '@type': 'Offer',
        name: 'Shop Plan',
        price: '10.00',
        priceCurrency: 'USD',
        availability: 'https://schema.org/PreOrder',
        validFrom: '2026-01-01',
      },
    ],
  };
}

export function generateLocalBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'COLHYBRI Miami',
    description: 'Financial inclusion platform launching in Miami-Dade County, connecting underbanked residents with local shops.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Miami',
      addressRegion: 'FL',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 25.7617,
      longitude: -80.1918,
    },
    url: `${BASE_URL}/en/miami`,
    telephone: '',
    email: 'onlymore2024@gmail.com',
    priceRange: '$3-$10/month',
  };
}
