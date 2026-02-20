import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import type { Locale } from '@/i18n';
import { generatePageMetadata } from '@/lib/metadata';
import { getLocalizedPath } from '@/lib/navigation';
import { JsonLd } from '@/components/JsonLd';

interface PageProps {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: PageProps) {
  const t = await getTranslations({ locale, namespace: 'contact' });
  return generatePageMetadata({
    locale: locale as Locale,
    routeKey: 'contact',
    title: t('title'),
    description: t('description'),
    semanticPrimary: 'COLHYBRI contact financial inclusion local commerce',
    semanticSecondary: 'get in touch, partnership, local shops, city officials',
    chunkType: 'page',
    audience: 'general, shops, cities, investors',
  });
}

export default function ContactPage({ params: { locale } }: PageProps) {
  const t = useTranslations('contact');
  const common = useTranslations('common');
  const l = locale as Locale;

  const contactJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: t('title'),
    description: t('description'),
    isPartOf: {
      '@type': 'WebSite',
      name: 'COLHYBRI',
      url: 'https://colhybri.com',
    },
  };

  return (
    <>
      <JsonLd data={contactJsonLd} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-colhybri-light via-white to-colhybri-primary/5">
        <div className="section-container text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-colhybri-dark mb-6 max-w-4xl mx-auto leading-tight">
            {t('headline')}
          </h1>
          <p className="text-lg sm:text-xl text-colhybri-dark/70 max-w-3xl mx-auto leading-relaxed">
            {t('description')}
          </p>
        </div>
      </section>

      {/* Contact Card */}
      <section className="bg-white">
        <div className="section-container max-w-2xl mx-auto">
          <div className="card bg-gradient-to-br from-colhybri-primary/5 to-colhybri-secondary/5 border border-colhybri-primary/10 text-center">
            <div className="w-16 h-16 rounded-full bg-colhybri-primary/10 flex items-center justify-center mx-auto mb-6">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00A878" strokeWidth="2" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <p className="text-colhybri-dark/60 mb-6">{t('description')}</p>
            <a
              href={`mailto:${t('email')}`}
              className="text-2xl sm:text-3xl font-bold text-colhybri-primary hover:text-colhybri-primary/80 transition-colors break-all"
            >
              {t('email')}
            </a>
            <div className="mt-8">
              <a
                href={`mailto:${t('email')}`}
                className="btn-primary inline-flex items-center gap-2"
              >
                {t('cta')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="bg-colhybri-light">
        <div className="section-container text-center">
          <h2 className="section-heading mb-10">
            {common('learnMore')}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={getLocalizedPath('mission', l)} className="btn-primary">
              {common('learnMore')}
            </Link>
            <Link href={getLocalizedPath('faq', l)} className="btn-secondary">
              {common('learnMore')}
            </Link>
            <Link href={getLocalizedPath('for-individuals', l)} className="btn-accent">
              {common('getStarted')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
