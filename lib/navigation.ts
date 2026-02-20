import type { Locale } from '@/i18n';

export const BASE_URL = 'https://colhybri.com';

// Mapping of route keys to locale-specific slugs
export const routeMap: Record<string, Record<string, string>> = {
  home: {
    en: '', 'en-gb': '', fr: '', es: '', pt: '', de: '', it: '', zh: '', ja: '', hi: '', pl: '',
  },
  mission: {
    en: 'mission', 'en-gb': 'mission', fr: 'mission', es: 'mision', pt: 'missao',
    de: 'mission', it: 'missione', zh: '使命', ja: 'ミッション', hi: 'mission', pl: 'misja',
  },
  'how-it-works': {
    en: 'how-it-works', 'en-gb': 'how-it-works', fr: 'comment-ca-marche', es: 'como-funciona',
    pt: 'como-funciona', de: 'so-funktioniert-es', it: 'come-funziona', zh: '工作原理', ja: '仕組み',
    hi: 'kaise-kaam-karta-hai', pl: 'jak-to-dziala',
  },
  pricing: {
    en: 'pricing', 'en-gb': 'pricing', fr: 'tarifs', es: 'precios', pt: 'precos',
    de: 'preise', it: 'prezzi', zh: '定价', ja: '料金', hi: 'mulya', pl: 'cennik',
  },
  impact: {
    en: 'impact', 'en-gb': 'impact', fr: 'impact', es: 'impacto', pt: 'impacto',
    de: 'wirkung', it: 'impatto', zh: '影响', ja: 'インパクト', hi: 'prabhav', pl: 'wplyw',
  },
  'for-individuals': {
    en: 'for-individuals', 'en-gb': 'for-individuals', fr: 'pour-les-particuliers', es: 'para-individuos',
    pt: 'para-individuos', de: 'fuer-einzelpersonen', it: 'per-i-cittadini', zh: '个人用户', ja: '個人向け',
    hi: 'vyaktiyon-ke-liye', pl: 'dla-osob-prywatnych',
  },
  'for-shops': {
    en: 'for-shops', 'en-gb': 'for-shops', fr: 'pour-les-commerces', es: 'para-comercios',
    pt: 'para-comercios', de: 'fuer-geschaefte', it: 'per-le-botteghe', zh: '商家', ja: '店舗向け',
    hi: 'dukano-ke-liye', pl: 'dla-sklepow',
  },
  'for-cities': {
    en: 'for-cities', 'en-gb': 'for-cities', fr: 'pour-les-villes', es: 'para-ciudades',
    pt: 'para-cidades', de: 'fuer-staedte', it: 'per-i-comuni', zh: '城市', ja: '都市向け',
    hi: 'shaharon-ke-liye', pl: 'dla-miast',
  },
  miami: {
    en: 'miami', 'en-gb': 'miami', fr: 'miami', es: 'miami', pt: 'miami',
    de: 'miami', it: 'miami', zh: 'miami', ja: 'miami', hi: 'miami', pl: 'miami',
  },
  ecosystem: {
    en: 'ecosystem', 'en-gb': 'ecosystem', fr: 'ecosysteme', es: 'ecosistema', pt: 'ecossistema',
    de: 'oekosystem', it: 'ecosistema', zh: '生态系统', ja: 'エコシステム', hi: 'paristhitiki-tantra', pl: 'ekosystem',
  },
  investors: {
    en: 'investors', 'en-gb': 'investors', fr: 'investisseurs', es: 'inversores', pt: 'investidores',
    de: 'investoren', it: 'investitori', zh: '投资者', ja: '投資家向け', hi: 'niveshak', pl: 'inwestorzy',
  },
  blog: {
    en: 'blog', 'en-gb': 'blog', fr: 'blog', es: 'blog', pt: 'blog',
    de: 'blog', it: 'blog', zh: '博客', ja: 'ブログ', hi: 'blog', pl: 'blog',
  },
  faq: {
    en: 'faq', 'en-gb': 'faq', fr: 'faq', es: 'faq', pt: 'faq',
    de: 'faq', it: 'faq', zh: '常见问题', ja: 'よくある質問', hi: 'faq', pl: 'faq',
  },
  contact: {
    en: 'contact', 'en-gb': 'contact', fr: 'contact', es: 'contacto', pt: 'contato',
    de: 'kontakt', it: 'contatti', zh: '联系我们', ja: 'お問い合わせ', hi: 'sampark', pl: 'kontakt',
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
  const allLocales: Locale[] = ['en', 'en-gb', 'fr', 'es', 'pt', 'de', 'it', 'zh', 'ja', 'hi', 'pl'];
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
  en: { flag: '\uD83C\uDDFA\uD83C\uDDF8', name: 'EN' },
  'en-gb': { flag: '\uD83C\uDDEC\uD83C\uDDE7', name: 'GB' },
  fr: { flag: '\uD83C\uDDEB\uD83C\uDDF7', name: 'FR' },
  es: { flag: '\uD83C\uDDEA\uD83C\uDDF8', name: 'ES' },
  pt: { flag: '\uD83C\uDDE7\uD83C\uDDF7', name: 'PT' },
  de: { flag: '\uD83C\uDDE9\uD83C\uDDEA', name: 'DE' },
  it: { flag: '\uD83C\uDDEE\uD83C\uDDF9', name: 'IT' },
  zh: { flag: '\uD83C\uDDE8\uD83C\uDDF3', name: 'ZH' },
  ja: { flag: '\uD83C\uDDEF\uD83C\uDDF5', name: 'JA' },
  hi: { flag: '\uD83C\uDDEE\uD83C\uDDF3', name: 'HI' },
  pl: { flag: '\uD83C\uDDF5\uD83C\uDDF1', name: 'PL' },
};
