import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import type { Locale } from '@/i18n';
import { generatePageMetadata, generateFAQJsonLd } from '@/lib/metadata';
import { getLocalizedPath } from '@/lib/navigation';
import { JsonLd } from '@/components/JsonLd';

interface PageProps {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: PageProps) {
  const t = await getTranslations({ locale, namespace: 'faq' });
  return generatePageMetadata({
    locale: locale as Locale,
    routeKey: 'faq',
    title: t('title'),
    description: 'Frequently asked questions about COLHYBRI financial inclusion platform',
    semanticPrimary: 'COLHYBRI FAQ financial inclusion local commerce',
    semanticSecondary: 'questions, pricing, how it works, underbanked, Keynesian multiplier',
    chunkType: 'page',
    audience: 'general',
  });
}

export default function FAQPage({ params: { locale } }: PageProps) {
  const t = useTranslations('faq');
  const common = useTranslations('common');
  const l = locale as Locale;

  const questions = t.raw('questions') as Array<{ q: string; a: string }>;
  const faqJsonLd = generateFAQJsonLd(questions, l);

  return (
    <>
      <JsonLd data={faqJsonLd} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-colhybri-light via-white to-colhybri-primary/5">
        <div className="section-container text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-colhybri-dark mb-6 max-w-4xl mx-auto leading-tight">
            {t('title')}
          </h1>
        </div>
      </section>

      {/* Questions */}
      <section className="bg-white">
        <div className="section-container max-w-3xl mx-auto">
          <div className="space-y-6">
            {questions.map((item, index) => (
              <div
                key={index}
                className="card border border-colhybri-primary/10"
              >
                <h2 className="text-lg sm:text-xl font-bold text-colhybri-dark mb-3">
                  {item.q}
                </h2>
                <p className="text-colhybri-dark/70 leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
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
            <Link href={getLocalizedPath('pricing', l)} className="btn-primary">
              {common('learnMore')}
            </Link>
            <Link href={getLocalizedPath('how-it-works', l)} className="btn-secondary">
              {common('learnMore')}
            </Link>
            <Link href={getLocalizedPath('contact', l)} className="btn-accent">
              {common('contactUs')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
