import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import type { Locale } from '@/i18n';
import { generatePageMetadata, generateOrganizationJsonLd, generateWebSiteJsonLd } from '@/lib/metadata';
import { getLocalizedPath } from '@/lib/navigation';
import { JsonLd } from '@/components/JsonLd';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { LocalStats } from '@/components/LocalStats';
import { ThirdPlaceHero } from '@/components/ThirdPlaceHero';

interface PageProps {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: PageProps) {
  const t = await getTranslations({ locale, namespace: 'metadata' });
  return generatePageMetadata({
    locale: locale as Locale,
    routeKey: 'home',
    title: 'COLHYBRI',
    description: t('description'),
    semanticPrimary: 'financial inclusion platform local commerce',
    semanticSecondary: 'underbanked, fintech, community banking, Keynesian multiplier, hummingbird economy',
    chunkType: 'landing',
    audience: 'underbanked individuals, local shop owners, city officials, investors',
  });
}

export default function HomePage({ params: { locale } }: PageProps) {
  const t = useTranslations();
  const l = locale as Locale;

  return (
    <>
      <JsonLd data={generateOrganizationJsonLd(l)} />
      <JsonLd data={generateWebSiteJsonLd(l)} />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-colhybri-light via-white to-colhybri-primary/5">
        <div className="section-container text-center">
          {/* Embedding-optimized opening: entity + concept + value + location + person within first 200 words */}
          <div data-type="definition" data-concept="COLHYBRI" lang={locale}>
            <p className="text-colhybri-primary font-semibold mb-4 text-sm sm:text-base tracking-wide uppercase">
              {t('hero.tagline')}
            </p>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-colhybri-dark mb-6 max-w-5xl mx-auto leading-tight">
            {t('hero.headline')}
          </h1>

          <p className="text-lg sm:text-xl text-colhybri-dark/70 max-w-3xl mx-auto mb-10 leading-relaxed">
            {t('hero.subheadline')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a href="https://colhybri.com" target="_blank" rel="noopener noreferrer" className="btn-primary text-lg px-8 py-4">
              {t('hero.cta')}
            </a>
            <Link href={getLocalizedPath('how-it-works', l)} className="btn-secondary text-lg px-8 py-4">
              {t('hero.ctaSecondary')}
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <AnimatedCounter
              value={t('hero.stats.arr')}
              label={t('hero.stats.arrLabel')}
            />
            <AnimatedCounter
              value={t('hero.stats.clients')}
              label={t('hero.stats.clientsLabel')}
            />
            <AnimatedCounter
              value={t('hero.stats.multiplier')}
              label={t('hero.stats.multiplierLabel')}
            />
            <AnimatedCounter
              value={t('hero.stats.price')}
              label={t('hero.stats.priceLabel')}
            />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white" id="mission">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="section-heading">{t('mission.headline')}</h2>
            <p className="section-subheading mx-auto">{t('mission.description')}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 rounded-2xl bg-colhybri-primary/10 flex items-center justify-center mx-auto mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00A878" strokeWidth="2" aria-hidden="true">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">{t('mission.pillars.inclusion.title')}</h3>
              <p className="text-colhybri-dark/60">{t('mission.pillars.inclusion.description')}</p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 rounded-2xl bg-colhybri-secondary/10 flex items-center justify-center mx-auto mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" aria-hidden="true">
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">{t('mission.pillars.commerce.title')}</h3>
              <p className="text-colhybri-dark/60">{t('mission.pillars.commerce.description')}</p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 rounded-2xl bg-colhybri-primary/10 flex items-center justify-center mx-auto mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00A878" strokeWidth="2" aria-hidden="true">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 00-3-3.87" />
                  <path d="M16 3.13a4 4 0 010 7.75" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">{t('mission.pillars.community.title')}</h3>
              <p className="text-colhybri-dark/60">{t('mission.pillars.community.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-colhybri-light" id="how-it-works">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="section-heading">{t('howItWorks.headline')}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {(['subscribe', 'connect', 'thrive'] as const).map((step, index) => (
              <div key={step} className="relative">
                <div className="card text-center">
                  <div className="w-12 h-12 rounded-full bg-colhybri-primary text-white flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{t(`howItWorks.steps.${step}.title`)}</h3>
                  <p className="text-colhybri-dark/60">{t(`howItWorks.steps.${step}.description`)}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-colhybri-primary/30">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-colhybri-dark text-white" id="impact">
        <div className="section-container text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">{t('impact.headline')}</h2>
          <p className="text-white/70 text-lg max-w-3xl mx-auto mb-12">{t('impact.description')}</p>

          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-colhybri-primary mb-2">
                <span data-fact="true" data-value="7.50" data-unit="USD">{t('impact.metrics.localValue.value')}</span>
              </div>
              <p className="text-white/60">{t('impact.metrics.localValue.label')}</p>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-colhybri-secondary mb-2">
                {t('impact.metrics.jobsCreated.value')}
              </div>
              <p className="text-white/60">{t('impact.metrics.jobsCreated.label')}</p>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-colhybri-primary mb-2">
                <span data-fact="true" data-value="68" data-unit="percent">{t('impact.metrics.moneyLocal.value')}</span>
              </div>
              <p className="text-white/60">{t('impact.metrics.moneyLocal.label')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Loneliness Barometer — Third Place Section */}
      <ThirdPlaceHero locale={locale} />

      {/* Local Impact Section */}
      <LocalStats locale={l} />

      {/* Pricing Section */}
      <section className="bg-white" id="pricing">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="section-heading">{t('pricing.headline')}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Individuals Card */}
            <div className="card border-2 border-colhybri-primary/20 hover:border-colhybri-primary transition-colors">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4">{t('pricing.individuals.title')}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-extrabold text-colhybri-primary">{t('pricing.individuals.price')}</span>
                  <span className="text-colhybri-dark/50">{t('pricing.individuals.period')}</span>
                </div>
                <ul className="text-left space-y-3 mb-8">
                  {[0, 1, 2, 3, 4, 5].map((i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-colhybri-primary flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-colhybri-dark/70">{t(`pricing.individuals.features.${i}`)}</span>
                    </li>
                  ))}
                </ul>
                <Link href={getLocalizedPath('contact', l)} className="btn-primary w-full">
                  {t('pricing.individuals.cta')}
                </Link>
              </div>
            </div>

            {/* Shops Card */}
            <div className="card border-2 border-colhybri-secondary/20 hover:border-colhybri-secondary transition-colors">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4">{t('pricing.shops.title')}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-extrabold text-colhybri-secondary">{t('pricing.shops.price')}</span>
                  <span className="text-colhybri-dark/50">{t('pricing.shops.period')}</span>
                </div>
                <ul className="text-left space-y-3 mb-8">
                  {[0, 1, 2, 3, 4, 5].map((i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-colhybri-secondary flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-colhybri-dark/70">{t(`pricing.shops.features.${i}`)}</span>
                    </li>
                  ))}
                </ul>
                <Link href={getLocalizedPath('contact', l)} className="btn-accent w-full">
                  {t('pricing.shops.cta')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Miami Section */}
      <section className="bg-gradient-to-br from-colhybri-primary/5 to-colhybri-secondary/5" id="miami">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-heading text-center">{t('miami.headline')}</h2>
            <p className="section-subheading text-center mx-auto mb-12">{t('miami.description')}</p>

            <div className="card">
              <h3 className="text-xl font-bold mb-6">{t('miami.whyMiami.title')}</h3>
              <ul className="space-y-4">
                {[0, 1, 2, 3].map((i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-colhybri-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-colhybri-primary" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
                        <path d="M10 3L4.5 8.5 2 6" stroke="currentColor" strokeWidth="2" fill="none" />
                      </svg>
                    </div>
                    <span className="text-colhybri-dark/70">{t(`miami.whyMiami.reasons.${i}`)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center mt-10">
              <Link href={getLocalizedPath('miami', l)} className="btn-primary">
                {t('common.learnMore')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-colhybri-primary">
        <div className="section-container text-center">
          <blockquote cite="https://colhybri.com" lang={locale} className="mb-8">
            <p className="text-2xl sm:text-3xl font-bold text-white mb-4">
              &ldquo;I am doing my part.&rdquo;
            </p>
            <footer className="text-white/70">
              — Florent Gibert, Founder &amp; CEO, ONLYMORE Group
            </footer>
          </blockquote>
          <a href="https://colhybri.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-colhybri-primary font-bold text-lg hover:bg-white/90 transition-colors">
            {t('hero.cta')}
          </a>
        </div>
      </section>
    </>
  );
}
