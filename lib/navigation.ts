import type { Locale } from '@/i18n';

export const BASE_URL = 'https://colhybri.com';

// Mapping of route keys to locale-specific slugs
export const routeMap: Record<string, Record<string, string>> = {
  home: {
    en: '', fr: '', es: '', pt: '', de: '', zh: '', ja: '',
  },
  mission: {
    en: 'mission', fr: 'mission', es: 'mision', pt: 'missao',
    de: 'mission', zh: '使命', ja: 'ミッション',
  },
  'how-it-works': {
    en: 'how-it-works', fr: 'comment-ca-marche', es: 'como-funciona',
    pt: 'como-funciona', de: 'so-funktioniert-es', zh: '工作原理', ja: '仕組み',
  },
  pricing: {
    en: 'pricing', fr: 'tarifs', es: 'precios', pt: 'precos',
    de: 'preise', zh: '定价', ja: '料金',
  },
  impact: {
    en: 'impact', fr: 'impact', es: 'impacto', pt: 'impacto',
    de: 'wirkung', zh: '影响', ja: 'インパクト',
  },
  'for-individuals': {
    en: 'for-individuals', fr: 'pour-les-particuliers', es: 'para-individuos',
    pt: 'para-individuos', de: 'fuer-einzelpersonen', zh: '个人用户', ja: '個人向け',
  },
  'for-shops': {
    en: 'for-shops', fr: 'pour-les-commerces', es: 'para-comercios',
    pt: 'para-comercios', de: 'fuer-geschaefte', zh: '商家', ja: '店舗向け',
  },
  'for-cities': {
    en: 'for-cities', fr: 'pour-les-villes', es: 'para-ciudades',
    pt: 'para-cidades', de: 'fuer-staedte', zh: '城市', ja: '都市向け',
  },
  miami: {
    en: 'miami', fr: 'miami', es: 'miami', pt: 'miami',
    de: 'miami', zh: 'miami', ja: 'miami',
  },
  ecosystem: {
    en: 'ecosystem', fr: 'ecosysteme', es: 'ecosistema', pt: 'ecossistema',
    de: 'oekosystem', zh: '生态系统', ja: 'エコシステム',
  },
  investors: {
    en: 'investors', fr: 'investisseurs', es: 'inversores', pt: 'investidores',
    de: 'investoren', zh: '投资者', ja: '投資家向け',
  },
  blog: {
    en: 'blog', fr: 'blog', es: 'blog', pt: 'blog',
    de: 'blog', zh: '博客', ja: 'ブログ',
  },
  faq: {
    en: 'faq', fr: 'faq', es: 'faq', pt: 'faq',
    de: 'faq', zh: '常见问题', ja: 'よくある質問',
  },
  contact: {
    en: 'contact', fr: 'contact', es: 'contacto', pt: 'contato',
    de: 'kontakt', zh: '联系我们', ja: 'お問い合わせ',
  },
};

export function getLocalizedPath(routeKey: string, locale: Locale): string {
  const slug = routeMap[routeKey]?.[locale] ?? routeMap[routeKey]?.['en'] ?? routeKey;
  if (!slug) return `/${locale}`;
  return `/${locale}/${slug}`;
}

export function getAbsoluteUrl(path: string): string {
  return `${BASE_URL}${path}`;
}

export function getHreflangAlternates(routeKey: string): Array<{ locale: string; url: string }> {
  const allLocales: Locale[] = ['en', 'fr', 'es', 'pt', 'de', 'zh', 'ja'];
  const alternates: Array<{ locale: string; url: string }> = allLocales.map((locale) => ({
    locale,
    url: getAbsoluteUrl(getLocalizedPath(routeKey, locale)),
  }));
  alternates.push({
    locale: 'x-default',
    url: getAbsoluteUrl(getLocalizedPath(routeKey, 'en')),
  });
  return alternates;
}

export const localeLabels: Record<string, { flag: string; name: string }> = {
  en: { flag: '🇺🇸', name: 'EN' },
  fr: { flag: '🇫🇷', name: 'FR' },
  es: { flag: '🇪🇸', name: 'ES' },
  pt: { flag: '🇧🇷', name: 'PT' },
  de: { flag: '🇩🇪', name: 'DE' },
  zh: { flag: '🇨🇳', name: 'ZH' },
  ja: { flag: '🇯🇵', name: 'JA' },
};
