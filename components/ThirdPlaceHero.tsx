'use client';

import { GLOBAL_STATS, TRUST_DATA } from '@/data/trust-data';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useState } from 'react';

interface ThirdPlaceHeroProps {
  locale: string;
}

const regionFlags: Record<string, string> = {
  france: '\uD83C\uDDEB\uD83C\uDDF7',
  usa: '\uD83C\uDDFA\uD83C\uDDF8',
  brazil: '\uD83C\uDDE7\uD83C\uDDF7',
  japan: '\uD83C\uDDEF\uD83C\uDDF5',
  india: '\uD83C\uDDEE\uD83C\uDDF3',
  'eastern-europe': '\uD83C\uDDF5\uD83C\uDDF1',
  africa: '\uD83C\uDF0D',
};

export function ThirdPlaceHero({ locale }: ThirdPlaceHeroProps) {
  const t = useTranslations('thirdPlace');
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const regionIds = Object.keys(TRUST_DATA);

  const activeRegionId = selectedRegion || regionIds[0];
  const activeRegion = TRUST_DATA[activeRegionId];
  const localeData = activeRegion?.locales[locale] || activeRegion?.locales['en'];

  if (!localeData) return null;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-colhybri-dark via-colhybri-dark/95 to-colhybri-dark" id="third-place">
      <div className="section-container">
        {/* Global Stats Header */}
        <div className="text-center mb-16">
          <p className="text-colhybri-primary font-semibold text-sm tracking-wide uppercase mb-4">
            {t('label')}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 max-w-4xl mx-auto leading-tight">
            {t('headline')}
          </h2>
          <p className="text-white/60 text-lg max-w-3xl mx-auto">
            {t('subheadline')}
          </p>
        </div>

        {/* Global Counters */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-colhybri-primary mb-1" data-fact="true">
              {GLOBAL_STATS.lonelyAdultsWorldwide}
            </div>
            <p className="text-white/50 text-sm">{t('stats.lonely')}</p>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-colhybri-secondary mb-1" data-fact="true">
              {GLOBAL_STATS.frenchParadox.distrust}
            </div>
            <p className="text-white/50 text-sm">{t('stats.distrust')}</p>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-colhybri-primary mb-1" data-fact="true">
              {GLOBAL_STATS.isolationIncreasePost2019}
            </div>
            <p className="text-white/50 text-sm">{t('stats.increase')}</p>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-colhybri-secondary mb-1" data-fact="true">
              {GLOBAL_STATS.countriesWithLonelinessMinister}
            </div>
            <p className="text-white/50 text-sm">{t('stats.ministers')}</p>
          </div>
        </div>

        {/* Region Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {regionIds.map((regionId) => {
            const region = TRUST_DATA[regionId];
            const regionLocale = region.locales[locale] || region.locales['en'];
            if (!regionLocale) return null;
            const isActive = regionId === activeRegionId;
            return (
              <button
                key={regionId}
                onClick={() => setSelectedRegion(regionId)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-colhybri-primary text-white'
                    : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                }`}
              >
                {regionFlags[regionId]} {regionLocale.regionName}
              </button>
            );
          })}
        </div>

        {/* Selected Region Card */}
        <div className="max-w-4xl mx-auto">
          <div className="card bg-white/5 border border-white/10 backdrop-blur-sm">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 leading-tight">
              {localeData.headline}
            </h3>

            {/* 3 Stats Grid */}
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              {[
                { value: localeData.stat1Value, label: localeData.stat1Label, source: localeData.stat1Source },
                { value: localeData.stat2Value, label: localeData.stat2Label, source: localeData.stat2Source },
                { value: localeData.stat3Value, label: localeData.stat3Label, source: localeData.stat3Source },
              ].map((stat, i) => (
                <div key={i} className="text-center p-4 rounded-xl bg-white/5">
                  <div
                    className={`text-3xl font-bold mb-2 ${i % 2 === 0 ? 'text-colhybri-primary' : 'text-colhybri-secondary'}`}
                    data-fact="true"
                  >
                    {stat.value}
                  </div>
                  <p className="text-white/70 text-sm mb-1">{stat.label}</p>
                  <p className="text-white/40 text-xs">{stat.source}</p>
                </div>
              ))}
            </div>

            {/* Insight */}
            <p className="text-white/60 leading-relaxed mb-6">
              {localeData.insight}
            </p>

            {/* COLHYBRI Answer */}
            <div className="border-l-4 border-colhybri-primary pl-4 mb-6">
              <p className="text-colhybri-primary/90 font-medium leading-relaxed">
                {localeData.colhybriAnswer}
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={`/${locale}/impact/${activeRegionId}`}
                className="btn-primary text-center"
              >
                {t('cta')}
              </Link>
            </div>
          </div>

          {/* Sources */}
          <div className="mt-6 text-center">
            <p className="text-white/30 text-xs">
              {t('sources')}: {activeRegion.sources.join(' | ')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
