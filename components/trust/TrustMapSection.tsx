'use client';

import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { WorldTrustMap } from './WorldTrustMap';

interface TrustMapSectionProps {
  locale: string;
}

export function TrustMapSection({ locale }: TrustMapSectionProps) {
  const router = useRouter();

  const handleRegionClick = useCallback(
    (regionId: string) => {
      router.push(`/${locale}/impact/${regionId}`);
    },
    [locale, router]
  );

  return (
    <section className="bg-white">
      <div className="section-container">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-colhybri-dark mb-4">
            {locale === 'fr'
              ? 'Carte mondiale de la confiance & solitude'
              : 'World Trust & Loneliness Map'}
          </h2>
          <p className="text-colhybri-dark/60 max-w-2xl mx-auto">
            {locale === 'fr'
              ? 'Explorez les données régionales pour comprendre où COLHYBRI peut avoir le plus grand impact.'
              : 'Explore regional data to understand where COLHYBRI can have the greatest impact.'}
          </p>
        </div>
        <WorldTrustMap locale={locale} onRegionClick={handleRegionClick} />
      </div>
    </section>
  );
}
