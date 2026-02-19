import { useTranslations } from 'next-intl';
import type { Locale } from '@/i18n';
import countriesData from '@/data/countries.json';

interface CountryData {
  country: string;
  flag: string;
  locale: string;
  population: string;
  populationRaw: number;
  unbanked: string;
  unbankedRaw: number;
  unbankedLabel: string;
  price: string;
  priceRaw: number;
  period: string;
  currency: string;
  currencySymbol: string;
  headline: string;
  focus: string[];
  multiplier: number;
  impactLabel: string;
  reconnectLabel: string;
  potentialLabel: string;
}

const countries = countriesData as Record<string, CountryData>;

function formatNumber(num: number, locale: string): string {
  const localeMap: Record<string, string> = {
    en: 'en-US',
    'en-gb': 'en-GB',
    fr: 'fr-FR',
    de: 'de-DE',
    es: 'es-ES',
    it: 'it-IT',
    pt: 'pt-BR',
    ja: 'ja-JP',
    zh: 'zh-CN',
  };
  return new Intl.NumberFormat(localeMap[locale] || 'en-US', {
    maximumFractionDigits: 0,
  }).format(num);
}

function calculateImpact(country: CountryData): string {
  const impact = country.unbankedRaw * country.priceRaw * country.multiplier;
  if (impact >= 1_000_000_000) {
    const billions = impact / 1_000_000_000;
    return `${country.currencySymbol}${billions.toFixed(1)}B`;
  }
  if (impact >= 1_000_000) {
    const millions = impact / 1_000_000;
    return `${country.currencySymbol}${millions.toFixed(0)}M`;
  }
  return `${country.currencySymbol}${formatNumber(impact, country.locale)}`;
}

interface LocalStatsProps {
  locale: Locale;
}

export function LocalStats({ locale }: LocalStatsProps) {
  const t = useTranslations('localStats');
  const country = countries[locale] || countries['en'];

  const impact = calculateImpact(country);
  const reconnectText = country.reconnectLabel
    .replace('{price}', country.price)
    .replace('{period}', country.period);

  return (
    <section className="bg-gradient-to-br from-colhybri-primary/5 via-white to-colhybri-secondary/5" id="local-impact">
      <div className="section-container">
        <div className="text-center mb-12">
          <p className="text-colhybri-primary font-semibold text-sm tracking-wide uppercase mb-4">
            {country.flag} {country.country}
          </p>
          <h2 className="section-heading">{t('title')}</h2>
          <p className="section-subheading mx-auto">{t('subtitle')}</p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          <div className="card text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-colhybri-primary mb-2">
              {country.population}
            </div>
            <p className="text-colhybri-dark/60 text-sm">{t('inhabitants')}</p>
          </div>

          <div className="card text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-colhybri-secondary mb-2">
              {country.unbanked}
            </div>
            <p className="text-colhybri-dark/60 text-sm">{country.unbankedLabel}</p>
          </div>

          <div className="card text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-colhybri-primary mb-2">
              {country.price}<span className="text-lg font-normal text-colhybri-dark/50">/{country.period}</span>
            </div>
            <p className="text-colhybri-dark/60 text-sm">{t('subscription')}</p>
          </div>
        </div>

        {/* Impact Calculator */}
        <div className="max-w-3xl mx-auto">
          <div className="card bg-colhybri-dark text-white border-none">
            <div className="text-center">
              <h3 className="text-lg font-bold mb-4 text-white/80">{country.potentialLabel}</h3>
              <div className="flex flex-wrap items-center justify-center gap-2 text-sm sm:text-base text-white/70 mb-6">
                <span className="bg-white/10 px-3 py-1 rounded-full">{country.unbanked}</span>
                <span>&times;</span>
                <span className="bg-white/10 px-3 py-1 rounded-full">{country.price}</span>
                <span>&times;</span>
                <span className="bg-colhybri-primary/30 px-3 py-1 rounded-full">2.5x</span>
                <span>=</span>
                <span className="bg-colhybri-primary text-white font-bold px-4 py-1 rounded-full text-lg">
                  {impact}
                </span>
              </div>
              <p className="text-white/60 text-sm">
                {impact} / {country.period} {country.impactLabel}
              </p>
            </div>
          </div>

          <p className="text-center text-colhybri-dark/60 mt-6 max-w-xl mx-auto">
            {reconnectText}
          </p>

          {/* Focus Tags */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {country.focus.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1.5 rounded-full bg-colhybri-primary/10 text-colhybri-primary font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
