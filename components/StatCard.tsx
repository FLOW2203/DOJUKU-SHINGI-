import { TRUST_DATA, type RegionLocaleData } from '@/data/trust-data';

interface StatCardProps {
  region: string;
  locale: string;
  statIndex: 1 | 2 | 3;
}

export function StatCard({ region, locale, statIndex }: StatCardProps) {
  const regionData = TRUST_DATA[region];
  if (!regionData) return null;

  const localeData: RegionLocaleData | undefined =
    regionData.locales[locale] || regionData.locales['en'];
  if (!localeData) return null;

  const stat = {
    1: { value: localeData.stat1Value, label: localeData.stat1Label, source: localeData.stat1Source },
    2: { value: localeData.stat2Value, label: localeData.stat2Label, source: localeData.stat2Source },
    3: { value: localeData.stat3Value, label: localeData.stat3Label, source: localeData.stat3Source },
  }[statIndex];

  return (
    <div className="card bg-gradient-to-br from-colhybri-primary/5 to-colhybri-secondary/5 border border-colhybri-primary/10 text-center">
      <div className="text-4xl sm:text-5xl font-bold text-colhybri-primary mb-3" data-fact="true">
        {stat.value}
      </div>
      <p className="text-colhybri-dark/80 font-medium mb-2">{stat.label}</p>
      <p className="text-colhybri-dark/40 text-xs">{stat.source}</p>
    </div>
  );
}
