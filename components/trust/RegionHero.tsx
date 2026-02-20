import { TRUST_DATA, getRegionForLocale } from '@/data/trust-data';
import { StatCard } from '@/components/StatCard';

interface RegionHeroProps {
  regionId: string;
  locale: string;
}

export function RegionHero({ regionId, locale }: RegionHeroProps) {
  const regionData = TRUST_DATA[regionId];
  if (!regionData) return null;

  const localeData = getRegionForLocale(regionId, locale);
  if (!localeData) return null;

  return (
    <section className="bg-colhybri-dark py-20 sm:py-28">
      <div className="section-container">
        {/* Headline */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 max-w-4xl mx-auto leading-tight">
            {localeData.headline}
          </h1>
        </div>

        {/* 3 StatCards side by side */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          <StatCard region={regionId} locale={locale} statIndex={1} />
          <StatCard region={regionId} locale={locale} statIndex={2} />
          <StatCard region={regionId} locale={locale} statIndex={3} />
        </div>

        {/* Insight paragraph */}
        <div className="max-w-3xl mx-auto mb-8">
          <p className="text-white/60 text-lg leading-relaxed text-center">
            {localeData.insight}
          </p>
        </div>

        {/* COLHYBRI Answer (at the END) */}
        <div className="max-w-3xl mx-auto">
          <div className="border-l-4 border-colhybri-primary pl-6 py-2">
            <p className="text-colhybri-primary/90 font-medium text-lg leading-relaxed">
              {localeData.colhybriAnswer}
            </p>
          </div>
        </div>

        {/* Sources */}
        <div className="mt-10 text-center" data-sources="true">
          <p className="text-white/30 text-xs">
            Sources: {regionData.sources.join(' | ')}
          </p>
        </div>
      </div>
    </section>
  );
}
