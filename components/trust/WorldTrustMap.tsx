'use client';

import { useState, useCallback } from 'react';
import { TRUST_DATA, getRegionForLocale } from '@/data/trust-data';

interface WorldTrustMapProps {
  locale: string;
  onRegionClick: (regionId: string) => void;
}

interface TooltipData {
  regionName: string;
  lonelinessRate: number;
  x: number;
  y: number;
}

// Color mapping based on colhybriPotential
function getPotentialColor(potential: number): string {
  switch (potential) {
    case 5:
      return '#00A878'; // green - highest potential
    case 4:
      return '#2dd4bf'; // teal - high potential
    case 3:
      return '#FF6B35'; // orange - moderate potential
    default:
      return '#94a3b8'; // slate fallback
  }
}

// Simplified SVG paths for each region (approximate world map outlines)
const REGION_PATHS: Record<string, { d: string; labelX: number; labelY: number }> = {
  france: {
    d: 'M470,155 L480,148 L492,150 L498,158 L496,172 L488,180 L478,178 L470,170 Z',
    labelX: 484,
    labelY: 164,
  },
  usa: {
    d: 'M120,140 L200,130 L240,135 L250,150 L245,175 L220,185 L180,190 L140,185 L115,175 L110,160 Z',
    labelX: 180,
    labelY: 162,
  },
  brazil: {
    d: 'M260,260 L300,240 L330,250 L340,280 L335,320 L310,340 L280,335 L260,310 L250,285 Z',
    labelX: 295,
    labelY: 290,
  },
  japan: {
    d: 'M780,155 L788,145 L795,148 L798,160 L794,175 L786,178 L780,170 Z',
    labelX: 789,
    labelY: 162,
  },
  india: {
    d: 'M660,200 L690,185 L710,195 L720,220 L715,255 L695,270 L670,260 L655,235 L650,215 Z',
    labelX: 685,
    labelY: 230,
  },
  'eastern-europe': {
    d: 'M510,120 L540,110 L560,118 L565,140 L558,158 L540,165 L520,160 L508,145 Z',
    labelX: 536,
    labelY: 140,
  },
  africa: {
    d: 'M470,220 L510,205 L550,215 L560,250 L555,310 L530,350 L500,355 L475,340 L460,300 L455,260 Z',
    labelX: 510,
    labelY: 280,
  },
};

export function WorldTrustMap({ locale, onRegionClick }: WorldTrustMapProps) {
  const [tooltip, setTooltip] = useState<TooltipData | null>(null);
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);

  const handleMouseEnter = useCallback(
    (regionId: string, event: React.MouseEvent<SVGPathElement>) => {
      const regionData = TRUST_DATA[regionId];
      const localeData = getRegionForLocale(regionId, locale);
      if (!regionData || !localeData) return;

      const svg = event.currentTarget.closest('svg');
      if (!svg) return;

      const rect = svg.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      setTooltip({
        regionName: localeData.regionName,
        lonelinessRate: regionData.lonelinessRate,
        x,
        y,
      });
      setHoveredRegion(regionId);
    },
    [locale]
  );

  const handleMouseMove = useCallback(
    (event: React.MouseEvent<SVGPathElement>) => {
      if (!tooltip) return;

      const svg = event.currentTarget.closest('svg');
      if (!svg) return;

      const rect = svg.getBoundingClientRect();
      setTooltip((prev) =>
        prev
          ? {
              ...prev,
              x: event.clientX - rect.left,
              y: event.clientY - rect.top,
            }
          : null
      );
    },
    [tooltip]
  );

  const handleMouseLeave = useCallback(() => {
    setTooltip(null);
    setHoveredRegion(null);
  }, []);

  const handleClick = useCallback(
    (regionId: string) => {
      onRegionClick(regionId);
    },
    [onRegionClick]
  );

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#00A878' }} />
          <span className="text-colhybri-dark/60 text-xs">
            {locale === 'fr' ? 'Potentiel maximum (5)' : 'Highest potential (5)'}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#2dd4bf' }} />
          <span className="text-colhybri-dark/60 text-xs">
            {locale === 'fr' ? 'Potentiel eleve (4)' : 'High potential (4)'}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#FF6B35' }} />
          <span className="text-colhybri-dark/60 text-xs">
            {locale === 'fr' ? 'Potentiel modere (3)' : 'Moderate potential (3)'}
          </span>
        </div>
      </div>

      {/* SVG Map */}
      <div className="relative">
        <svg
          viewBox="0 0 900 420"
          className="w-full h-auto"
          role="img"
          aria-label={locale === 'fr' ? 'Carte mondiale de confiance COLHYBRI' : 'COLHYBRI world trust map'}
        >
          {/* Background ocean */}
          <rect x="0" y="0" width="900" height="420" fill="#f0fdf4" rx="12" />

          {/* Subtle grid lines */}
          {[100, 200, 300].map((y) => (
            <line
              key={`h-${y}`}
              x1="0"
              y1={y}
              x2="900"
              y2={y}
              stroke="#e2e8f0"
              strokeWidth="0.5"
              strokeDasharray="4 4"
            />
          ))}
          {[200, 400, 600, 800].map((x) => (
            <line
              key={`v-${x}`}
              x1={x}
              y1="0"
              x2={x}
              y2="420"
              stroke="#e2e8f0"
              strokeWidth="0.5"
              strokeDasharray="4 4"
            />
          ))}

          {/* Simplified continent outlines (non-interactive background) */}
          {/* North America outline */}
          <path
            d="M80,80 L100,60 L180,50 L250,55 L270,80 L265,120 L255,140 L250,175 L230,195 L195,200 L150,195 L120,185 L100,170 L85,140 L75,110 Z"
            fill="#e2e8f0"
            stroke="#cbd5e1"
            strokeWidth="0.5"
          />
          {/* South America outline */}
          <path
            d="M230,230 L260,220 L300,225 L340,240 L350,275 L345,320 L330,355 L305,370 L275,360 L255,335 L240,300 L235,265 Z"
            fill="#e2e8f0"
            stroke="#cbd5e1"
            strokeWidth="0.5"
          />
          {/* Europe outline */}
          <path
            d="M440,80 L480,70 L530,75 L570,85 L580,110 L575,145 L565,170 L540,180 L500,185 L470,178 L450,160 L440,130 Z"
            fill="#e2e8f0"
            stroke="#cbd5e1"
            strokeWidth="0.5"
          />
          {/* Africa outline */}
          <path
            d="M440,195 L480,188 L530,192 L570,205 L580,245 L575,310 L555,365 L520,385 L485,380 L460,360 L445,315 L435,260 Z"
            fill="#e2e8f0"
            stroke="#cbd5e1"
            strokeWidth="0.5"
          />
          {/* Asia outline */}
          <path
            d="M580,60 L650,50 L730,55 L800,70 L820,100 L815,150 L800,190 L760,210 L720,225 L680,235 L640,225 L610,200 L590,170 L580,130 Z"
            fill="#e2e8f0"
            stroke="#cbd5e1"
            strokeWidth="0.5"
          />

          {/* Interactive region paths */}
          {Object.entries(REGION_PATHS).map(([regionId, pathData]) => {
            const regionData = TRUST_DATA[regionId];
            if (!regionData) return null;

            const fillColor = getPotentialColor(regionData.colhybriPotential);
            const isHovered = hoveredRegion === regionId;

            return (
              <path
                key={regionId}
                d={pathData.d}
                fill={fillColor}
                fillOpacity={isHovered ? 0.95 : 0.75}
                stroke={isHovered ? '#ffffff' : fillColor}
                strokeWidth={isHovered ? 2.5 : 1.5}
                className="cursor-pointer transition-all duration-200"
                onMouseEnter={(e) => handleMouseEnter(regionId, e)}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick(regionId)}
                role="button"
                tabIndex={0}
                aria-label={getRegionForLocale(regionId, locale)?.regionName || regionId}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleClick(regionId);
                  }
                }}
              />
            );
          })}

          {/* Region labels */}
          {Object.entries(REGION_PATHS).map(([regionId, pathData]) => {
            const localeData = getRegionForLocale(regionId, locale);
            if (!localeData) return null;

            return (
              <text
                key={`label-${regionId}`}
                x={pathData.labelX}
                y={pathData.labelY}
                textAnchor="middle"
                className="pointer-events-none select-none"
                fill="#1e293b"
                fontSize="8"
                fontWeight="600"
              >
                {localeData.regionName.length > 10
                  ? localeData.regionName.substring(0, 9) + '...'
                  : localeData.regionName}
              </text>
            );
          })}
        </svg>

        {/* Tooltip */}
        {tooltip && (
          <div
            className="absolute z-10 pointer-events-none bg-colhybri-dark text-white rounded-lg px-4 py-3 shadow-xl border border-white/10"
            style={{
              left: `${tooltip.x}px`,
              top: `${tooltip.y - 70}px`,
              transform: 'translateX(-50%)',
            }}
          >
            <p className="font-semibold text-sm">{tooltip.regionName}</p>
            <p className="text-colhybri-primary text-xs mt-1">
              {locale === 'fr' ? 'Taux de solitude' : 'Loneliness rate'}:{' '}
              <span className="font-bold">{tooltip.lonelinessRate}%</span>
            </p>
            {/* Tooltip arrow */}
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-1.5 w-3 h-3 bg-colhybri-dark rotate-45 border-r border-b border-white/10" />
          </div>
        )}
      </div>

      {/* Instruction text */}
      <p className="text-center text-colhybri-dark/40 text-xs mt-4">
        {locale === 'fr'
          ? 'Cliquez sur une region pour explorer les donnees locales'
          : 'Click a region to explore local data'}
      </p>
    </div>
  );
}
