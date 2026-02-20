import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import type { Locale } from '@/i18n';
import { locales } from '@/i18n';
import { TRUST_DATA, ALL_REGIONS, getRegionForLocale } from '@/data/trust-data';
import { generatePageMetadata } from '@/lib/metadata';
import { getLocalizedPath, BASE_URL } from '@/lib/navigation';
import { JsonLd } from '@/components/JsonLd';
import { StatCard } from '@/components/StatCard';

interface PageProps {
  params: { locale: string; region: string };
}

export function generateStaticParams() {
  const params: Array<{ locale: string; region: string }> = [];
  for (const locale of locales) {
    for (const region of ALL_REGIONS) {
      params.push({ locale, region });
    }
  }
  return params;
}

export async function generateMetadata({ params: { locale, region } }: PageProps) {
  const localeData = getRegionForLocale(region, locale);
  if (!localeData) {
    return generatePageMetadata({
      locale: locale as Locale,
      routeKey: 'impact',
      title: 'Impact',
      description: 'Regional impact data',
    });
  }

  return generatePageMetadata({
    locale: locale as Locale,
    routeKey: 'impact',
    title: `${localeData.regionName} — COLHYBRI Impact`,
    description: localeData.metaDescription,
    semanticPrimary: localeData.seoKeywords.slice(0, 3).join(', '),
    semanticSecondary: localeData.seoKeywords.slice(3).join(', '),
    chunkType: 'page',
    audience: 'general, investors, city officials',
  });
}

export default function RegionImpactPage({ params: { locale, region } }: PageProps) {
  const t = useTranslations('regionImpact');
  const common = useTranslations('common');
  const l = locale as Locale;

  const regionData = TRUST_DATA[region];
  const localeData = getRegionForLocale(region, locale);

  if (!regionData || !localeData) {
    return (
      <section className="section-container text-center">
        <h1 className="section-heading">Region not found</h1>
        <Link href={getLocalizedPath('impact', l)} className="btn-primary">
          {common('backToHome')}
        </Link>
      </section>
    );
  }

  // Schema.org for this regional page
  const regionSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `COLHYBRI Impact — ${localeData.regionName}`,
    description: localeData.metaDescription,
    about: {
      '@type': 'Thing',
      name: 'Financial Inclusion & Social Trust',
      description: localeData.insight,
    },
    mentions: regionData.sources.map((s) => ({
      '@type': 'CreativeWork',
      name: s,
    })),
    isPartOf: {
      '@type': 'WebSite',
      name: 'COLHYBRI',
      url: BASE_URL,
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: t('faq.q1'),
        acceptedAnswer: { '@type': 'Answer', text: localeData.colhybriAnswer },
      },
      {
        '@type': 'Question',
        name: t('faq.q2'),
        acceptedAnswer: { '@type': 'Answer', text: localeData.insight },
      },
    ],
  };

  const potentialStars = Array.from({ length: 5 }, (_, i) => i < regionData.colhybriPotential);

  return (
    <>
      <JsonLd data={regionSchema} />
      <JsonLd data={faqSchema} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-colhybri-dark text-white">
        <div className="section-container text-center">
          <p className="text-colhybri-primary font-semibold text-sm tracking-wide uppercase mb-4">
            {t('label')} — {localeData.regionName}
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 max-w-4xl mx-auto leading-tight">
            {localeData.headline}
          </h1>
          <p className="text-white/60 text-lg max-w-3xl mx-auto">
            {t('population')}: {regionData.adultPopulation} | {t('potential')}:{' '}
            {potentialStars.map((filled, i) => (
              <span key={i} className={filled ? 'text-colhybri-primary' : 'text-white/20'}>
                {'\u2605'}
              </span>
            ))}
          </p>
        </div>
      </section>

      {/* Stats Cards */}
      <section className="bg-white">
        <div className="section-container">
          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <StatCard region={region} locale={locale} statIndex={1} />
            <StatCard region={region} locale={locale} statIndex={2} />
            <StatCard region={region} locale={locale} statIndex={3} />
          </div>
        </div>
      </section>

      {/* Insight */}
      <section className="bg-colhybri-light">
        <div className="section-container max-w-4xl mx-auto">
          <h2 className="section-heading text-center mb-8">{t('insightTitle')}</h2>
          <div className="card">
            <p className="text-colhybri-dark/80 text-lg leading-relaxed">
              {localeData.insight}
            </p>
          </div>
        </div>
      </section>

      {/* COLHYBRI Answer */}
      <section className="bg-white">
        <div className="section-container max-w-4xl mx-auto">
          <h2 className="section-heading text-center mb-8">{t('answerTitle')}</h2>
          <div className="card border-l-4 border-colhybri-primary bg-colhybri-primary/5">
            <p className="text-colhybri-dark/90 text-lg leading-relaxed font-medium">
              {localeData.colhybriAnswer}
            </p>
          </div>
        </div>
      </section>

      {/* Key Numbers */}
      <section className="bg-colhybri-dark text-white">
        <div className="section-container max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">{t('keyNumbers')}</h2>
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-colhybri-primary mb-2">{regionData.lonelinessRate}%</div>
              <p className="text-white/60 text-sm">{t('loneliness')}</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-colhybri-secondary mb-2">{regionData.trustRate}%</div>
              <p className="text-white/60 text-sm">{t('trust')}</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-colhybri-primary mb-2">{regionData.unbankledRate}%</div>
              <p className="text-white/60 text-sm">{t('unbanked')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sources */}
      <section className="bg-colhybri-light">
        <div className="section-container max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-colhybri-dark mb-6">{t('sourcesTitle')}</h2>
          <ul className="space-y-2">
            {regionData.sources.map((source, i) => (
              <li key={i} className="text-colhybri-dark/60 text-sm flex items-start gap-2">
                <span className="text-colhybri-primary mt-1">{'\u2022'}</span>
                {source}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Other Regions */}
      <section className="bg-white">
        <div className="section-container text-center">
          <h2 className="section-heading mb-10">{t('otherRegions')}</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {ALL_REGIONS.filter((r) => r !== region).map((r) => {
              const rData = getRegionForLocale(r, locale);
              if (!rData) return null;
              return (
                <Link
                  key={r}
                  href={`/${locale}/impact/${r}`}
                  className="px-5 py-3 rounded-full bg-colhybri-light text-colhybri-dark font-medium text-sm hover:bg-colhybri-primary hover:text-white transition-colors"
                >
                  {rData.regionName}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-colhybri-primary">
        <div className="section-container text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">{t('ctaHeadline')}</h2>
          <a
            href="https://colhybri.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-colhybri-primary font-bold text-lg hover:bg-white/90 transition-colors"
          >
            {t('ctaButton')}
          </a>
        </div>
      </section>
    </>
  );
}
