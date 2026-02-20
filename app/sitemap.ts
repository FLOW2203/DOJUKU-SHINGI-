import type { MetadataRoute } from 'next';
import { locales } from '@/i18n';
import { routeMap, BASE_URL, getLocalizedPath } from '@/lib/navigation';
import { ALL_REGIONS } from '@/data/trust-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  const now = new Date().toISOString();

  // All route keys
  const routeKeys = Object.keys(routeMap);

  for (const locale of locales) {
    for (const routeKey of routeKeys) {
      const path = getLocalizedPath(routeKey, locale);
      const isHome = routeKey === 'home';

      // Build alternates for hreflang
      const languages: Record<string, string> = {};
      for (const altLocale of locales) {
        languages[altLocale] = `${BASE_URL}${getLocalizedPath(routeKey, altLocale)}`;
      }
      languages['x-default'] = `${BASE_URL}${getLocalizedPath(routeKey, 'en')}`;

      entries.push({
        url: `${BASE_URL}${path}`,
        lastModified: now,
        changeFrequency: isHome ? 'daily' : 'weekly',
        priority: isHome ? 1.0 : routeKey === 'miami' ? 0.9 : 0.8,
        alternates: { languages },
      });
    }
  }

  // Regional impact pages
  for (const region of ALL_REGIONS) {
    for (const locale of locales) {
      const impactSlug = routeMap.impact[locale] || 'impact';
      const languages: Record<string, string> = {};
      for (const altLocale of locales) {
        const altImpactSlug = routeMap.impact[altLocale] || 'impact';
        languages[altLocale] = `${BASE_URL}/${altLocale}/${altImpactSlug}/${region}`;
      }
      languages['x-default'] = `${BASE_URL}/en/impact/${region}`;

      entries.push({
        url: `${BASE_URL}/${locale}/${impactSlug}/${region}`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: 0.85,
        alternates: { languages },
      });
    }
  }

  // Blog articles
  const blogArticles = [
    'financial-inclusion-why-it-matters',
    'miami-capital-financial-inclusion',
    'keynesian-multiplier-local-value',
    'hummingbird-economy',
    'local-shops-financial-hubs',
  ];

  const blogSlugs: Record<string, Record<string, string>> = {
    'financial-inclusion-why-it-matters': {
      en: 'financial-inclusion-why-it-matters',
      fr: 'inclusion-financiere-pourquoi-cest-essentiel',
      es: 'inclusion-financiera-por-que-importa',
      pt: 'inclusao-financeira-por-que-importa',
      de: 'finanzielle-inklusion-warum-wichtig',
      zh: 'financial-inclusion-why-it-matters',
      ja: 'financial-inclusion-why-it-matters',
    },
    'miami-capital-financial-inclusion': {
      en: 'miami-capital-financial-inclusion',
      fr: 'miami-epicentre-inclusion-financiere',
      es: 'miami-capital-inclusion-financiera',
      pt: 'miami-coracao-inclusao-financeira',
      de: 'miami-zentrum-finanzielle-inklusion',
      zh: 'miami-capital-financial-inclusion',
      ja: 'miami-capital-financial-inclusion',
    },
    'keynesian-multiplier-local-value': {
      en: 'keynesian-multiplier-local-value',
      fr: 'multiplicateur-keynesien-valeur-locale',
      es: 'multiplicador-keynesiano-valor-local',
      pt: 'multiplicador-keynesiano-valor-local',
      de: 'keynesianischer-multiplikator-lokaler-wert',
      zh: 'keynesian-multiplier-local-value',
      ja: 'keynesian-multiplier-local-value',
    },
    'hummingbird-economy': {
      en: 'hummingbird-economy',
      fr: 'economie-du-colibri',
      es: 'economia-del-colibri',
      pt: 'economia-do-beija-flor',
      de: 'kolibri-wirtschaft',
      zh: 'hummingbird-economy',
      ja: 'hummingbird-economy',
    },
    'local-shops-financial-hubs': {
      en: 'local-shops-financial-hubs',
      fr: 'commerces-hubs-financiers',
      es: 'tiendas-locales-centros-financieros',
      pt: 'comercios-locais-hubs-financeiros',
      de: 'lokale-laeden-finanzzentren',
      zh: 'local-shops-financial-hubs',
      ja: 'local-shops-financial-hubs',
    },
  };

  for (const article of blogArticles) {
    for (const locale of locales) {
      const slug = blogSlugs[article]?.[locale] || article;
      const blogRouteKey = routeMap.blog[locale] || 'blog';

      const languages: Record<string, string> = {};
      for (const altLocale of locales) {
        const altSlug = blogSlugs[article]?.[altLocale] || article;
        const altBlogKey = routeMap.blog[altLocale] || 'blog';
        languages[altLocale] = `${BASE_URL}/${altLocale}/${altBlogKey}/${altSlug}`;
      }

      entries.push({
        url: `${BASE_URL}/${locale}/${blogRouteKey}/${slug}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.7,
        alternates: { languages },
      });
    }
  }

  return entries;
}
