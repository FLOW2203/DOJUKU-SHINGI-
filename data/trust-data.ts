// data/trust-data.ts
// Donnees barometre confiance & solitude — Sources : IFOP 2026, Pew Research 2025,
// OMS 2025, OCDE 2025, World Bank Findex 2025, Ipsos/Statista 2025

export interface RegionLocaleData {
  regionName: string;
  headline: string;
  stat1Label: string;
  stat1Value: string;
  stat1Source: string;
  stat2Label: string;
  stat2Value: string;
  stat2Source: string;
  stat3Label: string;
  stat3Value: string;
  stat3Source: string;
  insight: string;
  colhybriAnswer: string;
  seoKeywords: string[];
  metaDescription: string;
}

export interface RegionData {
  id: string;
  lonelinessRate: number;
  trustRate: number;
  unbankledRate: number;
  adultPopulation: string;
  colhybriPotential: number;
  sources: string[];
  locales: Record<string, RegionLocaleData>;
}

export const TRUST_DATA: Record<string, RegionData> = {

  // ═══════════════════════════════════════════════════
  // FRANCE — Marche principal
  // ═══════════════════════════════════════════════════
  france: {
    id: 'france',
    lonelinessRate: 55,
    trustRate: 22,
    unbankledRate: 5,
    adultPopulation: '48M',
    colhybriPotential: 5,
    sources: ['IFOP / Labo de la Fraternite, 8eme Barometre, Fevrier 2026'],
    locales: {
      fr: {
        regionName: 'France',
        headline: '79% des Francais aspirent a la fraternite. 78% ne font pas confiance aux autres.',
        stat1Label: 'aspirent a plus de fraternite',
        stat1Value: '79%',
        stat1Source: 'IFOP / Labo de la Fraternite 2026',
        stat2Label: 'eprouvent un sentiment de solitude',
        stat2Value: '55%',
        stat2Source: 'IFOP / Labo de la Fraternite 2026',
        stat3Label: "n'ont aucun lieu de rencontre dans leur commune",
        stat3Value: '31%',
        stat3Source: 'IFOP / Labo de la Fraternite 2026',
        insight: "La France vit un paradoxe documente par l'IFOP : les citoyens veulent la fraternite mais la defiance generalisee l'empeche. Un tiers de la population n'a acces a aucun espace de rencontre physique. Le lien social s'effondre pendant que les aspirations a la cohesion restent fortes.",
        colhybriAnswer: "COLHYBRI est le tiers-lieu numerique qui comble ce vide — un espace d'appartenance financiere et sociale, accessible a 3EUR/mois, sans contrainte geographique.",
        seoKeywords: ['tiers-lieu numerique France', 'inclusion financiere fraternite', 'lien social digital', 'exclusion financiere France', 'plateforme inclusion sociale'],
        metaDescription: 'COLHYBRI : le premier tiers-lieu financier numerique de France. 79% des Francais veulent plus de fraternite — nous la rendons accessible a 3EUR/mois.',
      },
      en: {
        regionName: 'France',
        headline: "79% of French people aspire to fraternity. 78% don't trust each other.",
        stat1Label: 'aspire to more fraternity',
        stat1Value: '79%',
        stat1Source: 'IFOP / Labo de la Fraternite 2026',
        stat2Label: 'experience loneliness',
        stat2Value: '55%',
        stat2Source: 'IFOP / Labo de la Fraternite 2026',
        stat3Label: 'have no meeting place in their community',
        stat3Value: '31%',
        stat3Source: 'IFOP / Labo de la Fraternite 2026',
        insight: 'France is experiencing a documented paradox: citizens want fraternity but generalized mistrust prevents it. A third of the population has no physical meeting space. Social bonds are collapsing while aspirations for social cohesion remain strong.',
        colhybriAnswer: "COLHYBRI is the digital third place that fills this void — a space of financial and social belonging, accessible at EUR3/month, without geographic constraints.",
        seoKeywords: ['digital third place France', 'financial inclusion social bond', 'fintech social impact', 'community finance platform'],
        metaDescription: "COLHYBRI: France's first digital financial third place. Building trust through financial inclusion at EUR3/month.",
      },
    },
  },

  // ═══════════════════════════════════════════════════
  // ETATS-UNIS
  // ═══════════════════════════════════════════════════
  usa: {
    id: 'usa',
    lonelinessRate: 30,
    trustRate: 55,
    unbankledRate: 5,
    adultPopulation: '260M',
    colhybriPotential: 4,
    sources: ['Pew Research Center, December 2025', 'KFF/The Economist Loneliness Survey'],
    locales: {
      en: {
        regionName: 'United States',
        headline: "44% of Americans don't trust each other. Gen Z is the loneliest generation in history.",
        stat1Label: "say most people can't be trusted",
        stat1Value: '44%',
        stat1Source: 'Pew Research Center 2025',
        stat2Label: 'of adults feel lonely weekly',
        stat2Value: '30%',
        stat2Source: 'KFF / The Economist 2025',
        stat3Label: 'of 18-34 year-olds experience loneliness several times a week',
        stat3Value: '30%',
        stat3Source: 'Loneliness Statistics 2025',
        insight: "America faces a trust crisis unlike any in its history. Political polarization, economic inequality, and digital disconnection have created a generation that is hyper-connected online but deeply isolated socially. The Rust Belt communities — once built around company towns and labor unions — have lost their physical third places without digital alternatives.",
        colhybriAnswer: "COLHYBRI brings the European mutualist model to underbanked American communities — financial inclusion as a bridge to social trust, at $3/month.",
        seoKeywords: ['digital third place USA', 'financial inclusion underbanked', 'social trust fintech', 'community finance app', 'loneliness solution fintech'],
        metaDescription: "COLHYBRI: addressing America's trust crisis through financial inclusion. 44% of Americans don't trust each other — we're changing that, $3/month at a time.",
      },
      fr: {
        regionName: 'Etats-Unis',
        headline: '44% des Americains ne font pas confiance aux autres. La Gen Z est la generation la plus solitaire de l\'histoire.',
        stat1Label: 'estiment que la plupart des gens ne sont pas fiables',
        stat1Value: '44%',
        stat1Source: 'Pew Research Center 2025',
        stat2Label: 'des adultes se sentent seuls chaque semaine',
        stat2Value: '30%',
        stat2Source: 'KFF / The Economist 2025',
        stat3Label: 'des 18-34 ans ressentent la solitude plusieurs fois par semaine',
        stat3Value: '30%',
        stat3Source: 'Loneliness Statistics 2025',
        insight: "L'Amerique fait face a une crise de confiance sans precedent. La polarisation politique et la deconnexion sociale ont cree une generation hyper-connectee numeriquement mais profondement isolee. Les communautes du Rust Belt ont perdu leurs tiers-lieux physiques sans alternative numerique.",
        colhybriAnswer: "COLHYBRI apporte le modele mutualistique europeen aux communautes americaines sous-bancarisees — l'inclusion financiere comme pont vers la confiance sociale.",
        seoKeywords: ['tiers-lieu numerique USA', 'inclusion financiere Amerique', 'fintech confiance sociale'],
        metaDescription: "COLHYBRI aux Etats-Unis : l'inclusion financiere comme reponse a la crise de confiance americaine. 44% des Americains ne font pas confiance aux autres.",
      },
    },
  },

  // ═══════════════════════════════════════════════════
  // BRESIL
  // ═══════════════════════════════════════════════════
  brazil: {
    id: 'brazil',
    lonelinessRate: 50,
    trustRate: 25,
    unbankledRate: 30,
    adultPopulation: '160M',
    colhybriPotential: 5,
    sources: ['Ipsos / Statista 2025', 'Pew Research Center 2025'],
    locales: {
      pt: {
        regionName: 'Brasil',
        headline: '50% dos brasileiros se sentem solitarios — o maior indice do mundo.',
        stat1Label: 'se sentem solitarios com frequencia',
        stat1Value: '50%',
        stat1Source: 'Ipsos / Statista 2025',
        stat2Label: 'nao confiam na maioria das pessoas',
        stat2Value: '75%',
        stat2Source: 'Pew Research Center 2025',
        stat3Label: 'adultos sem acesso ao sistema financeiro formal',
        stat3Value: '30%',
        stat3Source: 'World Bank Findex 2025',
        insight: 'O Brasil e, paradoxalmente, o pais mais solitario do mundo — apesar de sua cultura reconhecida pela calorosa sociabilidade. A fragmentacao social e a exclusao financeira criam um ciclo vicioso: sem acesso a servicos financeiros, e impossivel participar plenamente da vida economica e social.',
        colhybriAnswer: 'A COLHYBRI traz o modelo mutualista europeu ao Brasil: um espaco digital de pertencimento financeiro e social, acessivel por R$16/mes, sem exigencias excludentes.',
        seoKeywords: ['terceiro lugar digital Brasil', 'inclusao financeira solidariedade', 'fintech comunitaria Brasil', 'solidao exclusao financeira'],
        metaDescription: 'COLHYBRI Brasil: combatendo a solidao e exclusao financeira com inclusao mutua. 50% dos brasileiros se sentem solitarios — vamos mudar isso juntos.',
      },
      en: {
        regionName: 'Brazil',
        headline: "Brazil has the world's highest loneliness rate: 50% of adults feel lonely.",
        stat1Label: 'of adults report feeling lonely',
        stat1Value: '50%',
        stat1Source: 'Ipsos / Statista 2025',
        stat2Label: "don't trust most people",
        stat2Value: '75%',
        stat2Source: 'Pew Research Center 2025',
        stat3Label: 'adults excluded from formal financial system',
        stat3Value: '30%',
        stat3Source: 'World Bank Findex 2025',
        insight: "Brazil is paradoxically the world's loneliest country despite its culture known for warmth. Social fragmentation and financial exclusion create a vicious cycle.",
        colhybriAnswer: "COLHYBRI brings the European mutualist model to Brazil: financial and social belonging at EUR3/month.",
        seoKeywords: ['digital third place Brazil', 'financial inclusion Brazil', 'community fintech Latin America'],
        metaDescription: "COLHYBRI Brazil: fighting loneliness and financial exclusion. The world's highest loneliness rate (50%) meets our mutualist solution.",
      },
      fr: {
        regionName: 'Bresil',
        headline: '50% des Bresiliens se sentent seuls — le taux le plus eleve au monde.',
        stat1Label: 'se sentent souvent solitaires',
        stat1Value: '50%',
        stat1Source: 'Ipsos / Statista 2025',
        stat2Label: 'ne font pas confiance a la plupart des gens',
        stat2Value: '75%',
        stat2Source: 'Pew Research Center 2025',
        stat3Label: 'adultes exclus du systeme financier formel',
        stat3Value: '30%',
        stat3Source: 'World Bank Findex 2025',
        insight: "Le Bresil est paradoxalement le pays le plus solitaire au monde malgre une culture reputee chaleureuse. L'exclusion financiere et la fragmentation sociale s'alimentent mutuellement.",
        colhybriAnswer: "COLHYBRI apporte le modele mutualistique europeen au Bresil : appartenance financiere et sociale a 3EUR/mois.",
        seoKeywords: ['tiers-lieu numerique Bresil', 'inclusion financiere Amerique Latine'],
        metaDescription: 'COLHYBRI Bresil : 50% des Bresiliens se sentent seuls. Notre reponse mutualistique a la crise de confiance et d\'inclusion.',
      },
    },
  },

  // ═══════════════════════════════════════════════════
  // JAPON
  // ═══════════════════════════════════════════════════
  japan: {
    id: 'japan',
    lonelinessRate: 40,
    trustRate: 50,
    unbankledRate: 2,
    adultPopulation: '105M',
    colhybriPotential: 4,
    sources: ['KFF / The Economist Survey', 'Japan Ministry of Loneliness 2024'],
    locales: {
      ja: {
        regionName: '\u65E5\u672C',
        headline: '\u65E5\u672C\u306F\u4E16\u754C\u521D\u306E\u300C\u5B64\u72EC\u62C5\u5F53\u5927\u81E3\u300D\u3092\u8A2D\u7F6E\u3002150\u4E07\u4EBA\u304C\u3072\u304D\u3053\u3082\u308A\u72B6\u614B\u306B\u3042\u308A\u307E\u3059\u3002',
        stat1Label: '\u5B64\u72EC\u30FB\u5B64\u7ACB\u3092\u611F\u3058\u308B\u6210\u4EBA',
        stat1Value: '40%',
        stat1Source: 'KFF / \u30A8\u30B3\u30CE\u30DF\u30B9\u30C8\u8ABF\u67FB 2025',
        stat2Label: '\u6DF1\u523B\u306A\u793E\u4F1A\u7684\u5B64\u7ACB\uFF08\u3072\u304D\u3053\u3082\u308A\uFF09',
        stat2Value: '150\u4E07\u4EBA',
        stat2Source: '\u5185\u95A3\u5E9C 2024\u5E74',
        stat3Label: '\u653F\u5E9C\u304C\u5B64\u72EC\u3092\u516C\u8846\u885B\u751F\u554F\u984C\u3068\u8A8D\u5B9A',
        stat3Value: '2021\u5E74',
        stat3Source: '\u5B64\u72EC\u30FB\u5B64\u7ACB\u5BFE\u7B56\u63A8\u9032\u6CD5',
        insight: '\u65E5\u672C\u306F2021\u5E74\u306B\u4E16\u754C\u521D\u306E\u300C\u5B64\u72EC\u62C5\u5F53\u5927\u81E3\u300D\u3092\u8A2D\u7F6E\u3057\u307E\u3057\u305F\u3002\u3053\u308C\u306F\u5B64\u72EC\u304C\u500B\u4EBA\u306E\u554F\u984C\u3067\u306F\u306A\u304F\u3001\u793E\u4F1A\u5168\u4F53\u306E\u8AB2\u984C\u3067\u3042\u308B\u3053\u3068\u3092\u653F\u5E9C\u304C\u8A8D\u3081\u305F\u8A3C\u3067\u3059\u3002\u30C7\u30B8\u30BF\u30EB\u5316\u3068\u90FD\u5E02\u5316\u304C\u9032\u3080\u4E2D\u3001\u4F1D\u7D71\u7684\u306A\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u306E\u3064\u306A\u304C\u308A\u304C\u5931\u308F\u308C\u3066\u3044\u307E\u3059\u3002',
        colhybriAnswer: 'COLHYBRI\u306F\u6708\u03003\u30E6\u30FC\u30ED\u3067\u3001\u8AB0\u3082\u304C\u53C2\u52A0\u3067\u304D\u308B\u30C7\u30B8\u30BF\u30EB\u306A\u300C\u7B2C\u4E09\u306E\u5834\u6240\u300D\u3092\u63D0\u4F9B\u3057\u307E\u3059\u3002\u91D1\u878D\u5305\u6442\u3092\u901A\u3058\u3066\u793E\u4F1A\u7684\u306A\u3064\u306A\u304C\u308A\u3092\u518D\u69CB\u7BC9\u3057\u307E\u3059\u3002',
        seoKeywords: ['\u30C7\u30B8\u30BF\u30EB\u30B5\u30FC\u30C9\u30D7\u30EC\u30A4\u30B9 \u65E5\u672C', '\u91D1\u878D\u5305\u6442 \u5B64\u72EC\u5BFE\u7B56', '\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3 \u30D5\u30A3\u30F3\u30C6\u30C3\u30AF', '\u5B64\u7ACB\u89E3\u6D88 \u30C7\u30B8\u30BF\u30EB'],
        metaDescription: 'COLHYBRI\uFF1A\u6708\u03003\u30E6\u30FC\u30ED\u3067\u5229\u7528\u3067\u304D\u308B\u3001\u65E5\u672C\u521D\u306E\u30C7\u30B8\u30BF\u30EB\u91D1\u878D\u30B5\u30FC\u30C9\u30D7\u30EC\u30A4\u30B9\u3002\u5B64\u72EC\u30FB\u5B64\u7ACB\u554F\u984C\u306B\u91D1\u878D\u5305\u6442\u3067\u5FDC\u3048\u307E\u3059\u3002',
      },
      en: {
        regionName: 'Japan',
        headline: "Japan created the world's first Ministry of Loneliness. 1.5 million people are in complete social withdrawal.",
        stat1Label: 'of adults experience loneliness',
        stat1Value: '40%',
        stat1Source: 'KFF / The Economist Survey 2025',
        stat2Label: 'people in hikikomori (total social withdrawal)',
        stat2Value: '1.5M',
        stat2Source: 'Japan Cabinet Office 2024',
        stat3Label: 'Government officially recognized loneliness as a public health crisis',
        stat3Value: '2021',
        stat3Source: 'Japan Ministry of Loneliness Act',
        insight: 'Japan leads the world in institutional recognition of the loneliness epidemic. The government actively seeks private sector solutions to rebuild social trust and connection.',
        colhybriAnswer: "COLHYBRI offers Japan a digital financial third place — rebuilding community bonds through shared economic belonging at EUR3/month.",
        seoKeywords: ['digital third place Japan', 'hikikomori solution', 'social connection fintech Japan', 'lonely Japan solution'],
        metaDescription: "COLHYBRI Japan: addressing the loneliness epidemic through financial inclusion. Japan's Ministry of Loneliness meets our mutualist solution.",
      },
    },
  },

  // ═══════════════════════════════════════════════════
  // INDE
  // ═══════════════════════════════════════════════════
  india: {
    id: 'india',
    lonelinessRate: 43,
    trustRate: 40,
    unbankledRate: 11,
    adultPopulation: '900M',
    colhybriPotential: 5,
    sources: ['Ipsos / Statista 2025', 'World Bank Findex 2025'],
    locales: {
      hi: {
        regionName: '\u092D\u093E\u0930\u0924',
        headline: '43% \u092D\u093E\u0930\u0924\u0940\u092F \u0905\u0915\u0947\u0932\u093E\u092A\u0928 \u092E\u0939\u0938\u0942\u0938 \u0915\u0930\u0924\u0947 \u0939\u0948\u0902\u0964 \u0935\u093F\u0924\u094D\u0924\u0940\u092F \u0938\u092E\u093E\u0935\u0947\u0936\u0928 \u0938\u0947 \u0938\u093E\u092E\u093E\u091C\u093F\u0915 \u091C\u0941\u0921\u093C\u093E\u0935 \u0938\u0902\u092D\u0935 \u0939\u0948\u0964',
        stat1Label: '\u0905\u0915\u0947\u0932\u093E\u092A\u0928 \u092E\u0939\u0938\u0942\u0938 \u0915\u0930\u0924\u0947 \u0939\u0948\u0902',
        stat1Value: '43%',
        stat1Source: 'Ipsos / Statista 2025',
        stat2Label: '\u0935\u092F\u0938\u094D\u0915\u094B\u0902 \u0915\u0947 \u092A\u093E\u0938 \u0935\u093F\u0924\u094D\u0924\u0940\u092F \u0916\u093E\u0924\u093E \u0939\u0948',
        stat2Value: '89%',
        stat2Source: 'World Bank Findex 2025',
        stat3Label: '\u092F\u0941\u0935\u093E \u0935\u092F\u0938\u094D\u0915 \u091C\u0928\u0938\u0902\u0916\u094D\u092F\u093E (18-35 \u0935\u0930\u094D\u0937)',
        stat3Value: '50 \u0915\u0930\u094B\u0921\u093C',
        stat3Source: 'UN Population Data 2025',
        insight: '\u092D\u093E\u0930\u0924 \u092E\u0947\u0902 \u0935\u093F\u0924\u094D\u0924\u0940\u092F \u0938\u092E\u093E\u0935\u0947\u0936\u0928 \u0914\u0930 \u0938\u093E\u092E\u093E\u091C\u093F\u0915 \u0938\u092E\u093E\u0935\u0947\u0936\u0928 \u0915\u0947 \u092C\u0940\u091A \u0917\u0939\u0930\u093E \u0938\u0902\u092C\u0902\u0927 \u0939\u0948\u0964 89% \u092C\u0948\u0902\u0915\u093F\u0902\u0917 \u0915\u0947 \u092C\u093E\u0935\u091C\u0942\u0926\u002C \u0917\u0941\u0923\u0935\u0924\u094D\u0924\u093E\u092A\u0942\u0930\u094D\u0923 \u0935\u093F\u0924\u094D\u0924\u0940\u092F \u0938\u0947\u0935\u093E\u0913\u0902 \u0924\u0915 \u092A\u0939\u0941\u0902\u091A \u0914\u0930 \u0938\u093E\u092E\u0941\u0926\u093E\u092F\u093F\u0915 \u0938\u0902\u092C\u0902\u0927 \u0915\u092E\u091C\u094B\u0930 \u0939\u0948\u0902\u0964',
        colhybriAnswer: 'COLHYBRI \u092D\u093E\u0930\u0924 \u092E\u0947\u0902 \u0921\u093F\u091C\u093F\u091F\u0932 \u0938\u093E\u092E\u0941\u0926\u093E\u092F\u093F\u0915 \u0935\u093F\u0924\u094D\u0924 \u0915\u093E \u092A\u0939\u0932\u093E \u092E\u0902\u091A \u0939\u0948 — \u20B9270/\u092E\u093E\u0939 \u092E\u0947\u0902 \u0935\u093F\u0924\u094D\u0924\u0940\u092F \u0914\u0930 \u0938\u093E\u092E\u093E\u091C\u093F\u0915 \u091C\u0941\u0921\u093C\u093E\u0935\u0964',
        seoKeywords: ['\u0921\u093F\u091C\u093F\u091F\u0932 \u0925\u0930\u094D\u0921 \u092A\u094D\u0932\u0947\u0938 \u092D\u093E\u0930\u0924', '\u0935\u093F\u0924\u094D\u0924\u0940\u092F \u0938\u092E\u093E\u0935\u0947\u0936\u0928', '\u0938\u093E\u092E\u0941\u0926\u093E\u092F\u093F\u0915 \u092B\u093F\u0928\u091F\u0947\u0915', '\u0905\u0915\u0947\u0932\u093E\u092A\u0928 \u0938\u092E\u093E\u0927\u093E\u0928'],
        metaDescription: 'COLHYBRI \u092D\u093E\u0930\u0924: \u20B9270/\u092E\u093E\u0939 \u092E\u0947\u0902 \u0921\u093F\u091C\u093F\u091F\u0932 \u0935\u093F\u0924\u094D\u0924\u0940\u092F \u0938\u093E\u092E\u0941\u0926\u093E\u092F\u093F\u0915 \u092E\u0902\u091A\u0964 \u0935\u093F\u0924\u094D\u0924\u0940\u092F \u0938\u092E\u093E\u0935\u0947\u0936\u0928 \u0938\u0947 \u0938\u093E\u092E\u093E\u091C\u093F\u0915 \u091C\u0941\u0921\u093C\u093E\u0935\u0964',
      },
      en: {
        regionName: 'India',
        headline: "43% of Indians feel lonely despite 89% banking penetration. Financial inclusion isn't enough — community matters.",
        stat1Label: 'of adults experience loneliness',
        stat1Value: '43%',
        stat1Source: 'Ipsos / Statista 2025',
        stat2Label: 'banking penetration (but quality of use is low)',
        stat2Value: '89%',
        stat2Source: 'World Bank Findex 2025',
        stat3Label: 'young adults (the loneliest demographic)',
        stat3Value: '500M',
        stat3Source: 'UN Population Data 2025',
        insight: "India demonstrates that banking access alone doesn't create social belonging. 89% of adults have accounts but 43% still feel lonely — the missing ingredient is community, not just transactions.",
        colhybriAnswer: "COLHYBRI brings the mutualist dimension missing from Indian fintech — a digital third place where financial inclusion creates genuine community bonds.",
        seoKeywords: ['digital third place India', 'community fintech India', 'financial inclusion social impact', 'loneliness solution India'],
        metaDescription: 'COLHYBRI India: beyond banking to belonging. 43% of Indians feel lonely despite high banking penetration — community finance changes that.',
      },
    },
  },

  // ═══════════════════════════════════════════════════
  // EUROPE DE L'EST (Pologne, Hongrie, Roumanie)
  // ═══════════════════════════════════════════════════
  'eastern-europe': {
    id: 'eastern-europe',
    lonelinessRate: 35,
    trustRate: 38,
    unbankledRate: 22,
    adultPopulation: '120M',
    colhybriPotential: 3,
    sources: ['Pew Research Center 2025', 'World Bank Findex 2025'],
    locales: {
      pl: {
        regionName: 'Europa Wschodnia / Polska',
        headline: '38% Polakow ufa innym. Dziedzictwo nieufnosci instytucjonalnej tworzy nowe mozliwosci.',
        stat1Label: 'ufa wiekszosci ludzi',
        stat1Value: '38%',
        stat1Source: 'Pew Research Center 2025',
        stat2Label: 'doroslych bez dostepu do uslug bankowych',
        stat2Value: '22%',
        stat2Source: 'World Bank Findex 2025',
        stat3Label: 'wzrost stopy wykluczenia finansowego po 2019 r.',
        stat3Value: '+13%',
        stat3Source: 'JAMA Network Open 2025',
        insight: 'Polska i Europa Wschodnia dziedzicza glebia nieufnosc wobec instytucji finansowych po 40 latach komunizmu. Ta nieufnosc tworzy przestrzen dla modelu spoldzielczego — bliskiego tradycji polskich spoldzielni.',
        colhybriAnswer: 'COLHYBRI nawiazuje do tradycji polskich spoldzielni kredytowych — nowoczesna, cyfrowa kooperatywa finansowa za 3EUR/miesiac.',
        seoKeywords: ['cyfrowe trzecie miejsce Polska', 'spoldzielnia finansowa digital', 'wlaczenie finansowe Polska', 'fintech spolecznosc'],
        metaDescription: 'COLHYBRI Polska: nowoczesna spoldzielnia finansowa online. Budujemy zaufanie przez wlaczenie finansowe — 3EUR/miesiac.',
      },
      en: {
        regionName: 'Eastern Europe',
        headline: "Eastern Europe's institutional distrust creates the perfect ground for mutualist finance.",
        stat1Label: 'trust interpersonal (well below EU average)',
        stat1Value: '38%',
        stat1Source: 'Pew Research Center 2025',
        stat2Label: 'adults without formal financial access',
        stat2Value: '22%',
        stat2Source: 'World Bank Findex 2025',
        stat3Label: 'stagnation in financial inclusion since 2021',
        stat3Value: '78%',
        stat3Source: 'World Bank Findex 2025',
        insight: 'Eastern Europe carries deep institutional distrust inherited from 40 years of communism. This creates a unique resonance with cooperative models like COLHYBRI — which echo the historic credit cooperatives of the region.',
        colhybriAnswer: "COLHYBRI revives the cooperative tradition of Eastern Europe in digital form — the spoldzielnia for the 21st century.",
        seoKeywords: ['digital cooperative Eastern Europe', 'financial inclusion Poland Hungary', 'mutualist fintech', 'community banking alternative'],
        metaDescription: "COLHYBRI Eastern Europe: rebuilding financial trust through digital mutualism. 38% interpersonal trust — we're changing that.",
      },
      fr: {
        regionName: 'Europe de l\'Est',
        headline: 'La mefiance institutionnelle d\'Europe de l\'Est cree le terrain ideal pour la finance mutualiste.',
        stat1Label: 'de confiance interpersonnelle (bien en dessous de la moyenne UE)',
        stat1Value: '38%',
        stat1Source: 'Pew Research Center 2025',
        stat2Label: 'des adultes sans acces aux services financiers formels',
        stat2Value: '22%',
        stat2Source: 'World Bank Findex 2025',
        stat3Label: 'de stagnation de l\'inclusion financiere depuis 2021',
        stat3Value: '78%',
        stat3Source: 'World Bank Findex 2025',
        insight: 'L\'Europe de l\'Est porte une defiance institutionnelle profonde heritee de 40 ans de communisme. Cela cree une resonance unique avec les modeles cooperatifs comme COLHYBRI.',
        colhybriAnswer: 'COLHYBRI fait revivre la tradition cooperative d\'Europe de l\'Est sous forme numerique — la spoldzielnia du 21e siecle.',
        seoKeywords: ['cooperative numerique Europe de l\'Est', 'inclusion financiere Pologne', 'fintech mutualiste'],
        metaDescription: 'COLHYBRI Europe de l\'Est : reconstruire la confiance financiere par le mutualisme numerique.',
      },
    },
  },

  // ═══════════════════════════════════════════════════
  // AFRIQUE SUBSAHARIENNE
  // ═══════════════════════════════════════════════════
  africa: {
    id: 'africa',
    lonelinessRate: 45,
    trustRate: 35,
    unbankledRate: 42,
    adultPopulation: '600M',
    colhybriPotential: 5,
    sources: ['World Bank Findex 2025', 'Njanike & Mpofu, Sage Journals 2024'],
    locales: {
      fr: {
        regionName: 'Afrique francophone',
        headline: '42% des adultes africains n\'ont pas acces au systeme financier formel. La finance communautaire change tout.',
        stat1Label: 'd\'adultes exclus du systeme financier formel',
        stat1Value: '42%',
        stat1Source: 'World Bank Findex 2025',
        stat2Label: 'de bancarisation via mobile en Afrique Sub-saharienne',
        stat2Value: '58%',
        stat2Source: 'World Bank Findex 2025',
        stat3Label: 'de correlation prouvee entre inclusion financiere et inclusion sociale',
        stat3Value: 'Forte',
        stat3Source: 'Njanike & Mpofu, Sage 2024',
        insight: 'L\'Afrique demontre une correlation extraordinairement forte entre inclusion financiere et inclusion sociale. Le modele M-Pesa au Kenya prouve que le mobile peut transformer l\'acces financier. Ce qu\'il manque encore : la dimension communautaire et solidaire.',
        colhybriAnswer: 'COLHYBRI apporte la dimension mutualistique manquante — le \'ubuntu financier numerique\' : je suis parce que nous sommes, a 3EUR/mois.',
        seoKeywords: ['inclusion financiere Afrique francophone', 'fintech communautaire Afrique', 'tiers-lieu numerique Afrique', 'ubuntu finance digital'],
        metaDescription: 'COLHYBRI Afrique : l\'ubuntu financier numerique. 42% des adultes exclus du systeme financier — notre modele mutualistique change la donne.',
      },
      en: {
        regionName: 'Sub-Saharan Africa',
        headline: '42% of African adults are excluded from formal finance. Community-based models are the answer.',
        stat1Label: 'of adults without formal financial access',
        stat1Value: '42%',
        stat1Source: 'World Bank Findex 2025',
        stat2Label: "banked via mobile (led by Kenya's M-Pesa at 90%)",
        stat2Value: '58%',
        stat2Source: 'World Bank Findex 2025',
        stat3Label: 'proven correlation: financial inclusion = social inclusion',
        stat3Value: 'Strong',
        stat3Source: 'Njanike & Mpofu, Sage Journals 2024',
        insight: "Africa demonstrates the strongest proven correlation between financial and social inclusion. M-Pesa proved mobile can transform financial access. What's missing is the community dimension — the ubuntu layer.",
        colhybriAnswer: "COLHYBRI adds the missing mutualist dimension — digital ubuntu finance: 'I am because we are,' at EUR3/month.",
        seoKeywords: ['financial inclusion Africa', 'community fintech Sub-Saharan', 'mobile money community', 'ubuntu digital finance'],
        metaDescription: 'COLHYBRI Africa: digital ubuntu finance. 42% of adults excluded from formal finance — community mutualism changes everything.',
      },
    },
  },
};

// --- DONNEES GLOBALES AGREGEES ---
export const GLOBAL_STATS = {
  lonelyAdultsWorldwide: '1.4B',
  isolationIncreasePost2019: '13.4%',
  countriesWithLonelinessMinister: 5,
  globalLonelinessRate: '1 in 6',
  frenchParadox: {
    aspiration: '79%',
    distrust: '78%',
    noMeetingPlace: '31%',
  },
  sources: {
    ifop: '8eme Barometre IFOP/Labo de la Fraternite, Fevrier 2026',
    pew: 'Pew Research Center, Decembre 2025 (37,000 adults, 25 countries)',
    who: 'WHO Commission on Social Connection Report, Juin 2025',
    oecd: 'OCDE — Social Connections and Loneliness, Octobre 2025',
    worldbank: 'World Bank Global Findex Database 2025',
    jama: 'JAMA Network Open — Global Trends in Social Isolation, Septembre 2025',
  },
};

// Helper: get region data for a specific locale with fallback to English
export function getRegionForLocale(regionId: string, locale: string): RegionLocaleData | null {
  const region = TRUST_DATA[regionId];
  if (!region) return null;
  return region.locales[locale] || region.locales['en'] || null;
}

// All region IDs for static generation
export const ALL_REGIONS = Object.keys(TRUST_DATA);

// Map locale to default region
export const LOCALE_DEFAULT_REGION: Record<string, string> = {
  fr: 'france',
  en: 'usa',
  'en-gb': 'usa',
  es: 'usa',
  pt: 'brazil',
  de: 'eastern-europe',
  it: 'france',
  zh: 'usa',
  ja: 'japan',
};
