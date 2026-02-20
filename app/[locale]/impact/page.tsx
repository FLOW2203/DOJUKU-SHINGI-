import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import type { Locale } from '@/i18n';
import { generatePageMetadata } from '@/lib/metadata';
import { getLocalizedPath } from '@/lib/navigation';
import { JsonLd } from '@/components/JsonLd';
import { GlobalImpactCounter } from '@/components/trust/GlobalImpactCounter';
import { TrustMapSection } from '@/components/trust/TrustMapSection';

interface PageProps {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: PageProps) {
  const t = await getTranslations({ locale, namespace: 'impact' });
  return generatePageMetadata({
    locale: locale as Locale,
    routeKey: 'impact',
    title: t('title'),
    description: t('description'),
    semanticPrimary: 'COLHYBRI impact Keynesian multiplier local economy',
    semanticSecondary: 'economic multiplier effect, local spending, community jobs, financial inclusion metrics',
    chunkType: 'page',
    audience: 'investors, city officials, general',
  });
}

export default function ImpactPage({ params: { locale } }: PageProps) {
  const t = useTranslations('impact');
  const common = useTranslations('common');
  const l = locale as Locale;

  const impactJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: t('title'),
    description: t('description'),
    about: {
      '@type': 'Thing',
      name: 'Keynesian Multiplier Effect',
      description: 'Every dollar spent locally generates 2.5x its value in economic activity.',
    },
    isPartOf: {
      '@type': 'WebSite',
      name: 'COLHYBRI',
      url: 'https://colhybri.com',
    },
  };

  return (
    <>
      <JsonLd data={impactJsonLd} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-colhybri-dark text-white">
        <div className="section-container text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 max-w-4xl mx-auto leading-tight">
            {t('headline')}
          </h1>
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            {t('description')}
          </p>
        </div>
      </section>

      {/* Keynesian Multiplier Metrics */}
      <section className="bg-gradient-to-br from-colhybri-dark to-colhybri-dark/95 text-white">
        <div className="section-container">
          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Local Value */}
            <div className="card bg-white/5 border border-white/10 text-center">
              <div className="text-4xl sm:text-5xl font-bold text-colhybri-primary mb-3">
                <span data-fact="true" data-value="7.50" data-unit="USD">
                  {t('metrics.localValue.value')}
                </span>
              </div>
              <p className="text-white/60">{t('metrics.localValue.label')}</p>
            </div>

            {/* Jobs Created */}
            <div className="card bg-white/5 border border-white/10 text-center">
              <div className="text-4xl sm:text-5xl font-bold text-colhybri-secondary mb-3">
                {t('metrics.jobsCreated.value')}
              </div>
              <p className="text-white/60">{t('metrics.jobsCreated.label')}</p>
            </div>

            {/* Money Stays Local */}
            <div className="card bg-white/5 border border-white/10 text-center">
              <div className="text-4xl sm:text-5xl font-bold text-colhybri-primary mb-3">
                <span data-fact="true" data-value="68" data-unit="percent">
                  {t('metrics.moneyLocal.value')}
                </span>
              </div>
              <p className="text-white/60">{t('metrics.moneyLocal.label')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Multiplier Explanation */}
      <section className="bg-white">
        <div className="section-container max-w-4xl mx-auto">
          <div className="card bg-gradient-to-br from-colhybri-primary/5 to-colhybri-secondary/5 border border-colhybri-primary/10">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-colhybri-dark mb-4">
                The Keynesian Multiplier
              </h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-colhybri-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-colhybri-primary">$3</span>
                </div>
                <p className="text-colhybri-dark/70 text-sm">Subscription</p>
              </div>
              <div className="text-center flex flex-col items-center justify-center">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#00A878" strokeWidth="2" aria-hidden="true" className="mb-2">
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
                <span className="text-colhybri-primary font-bold text-lg">2.5x</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-colhybri-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-colhybri-secondary">$7.50</span>
                </div>
                <p className="text-colhybri-dark/70 text-sm">Local Economic Value</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Loneliness Counter */}
      <GlobalImpactCounter locale={locale} />

      {/* World Trust Map */}
      <TrustMapSection locale={locale} />

      {/* Internal Links (Cocon Semantique) */}
      <section className="bg-colhybri-light">
        <div className="section-container text-center">
          <h2 className="section-heading mb-10">
            {common('learnMore')}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={getLocalizedPath('for-cities', l)} className="btn-primary">
              {common('learnMore')}
            </Link>
            <Link href={getLocalizedPath('investors', l)} className="btn-secondary">
              {common('learnMore')}
            </Link>
            <Link href={getLocalizedPath('pricing', l)} className="btn-accent">
              {common('learnMore')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
