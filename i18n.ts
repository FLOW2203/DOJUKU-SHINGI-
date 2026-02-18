import { createIntl, createIntlCache } from 'next-intl';

const cache = createIntlCache();

const intl = createIntl({
  locale: 'en',
  messages: {
    en: { welcome: 'Welcome' },
    fr: { welcome: 'Bienvenue' },
    es: { welcome: 'Bienvenido' },
    pt: { welcome: 'Bem-vindo' },
    de: { welcome: 'Willkommen' },
    zh: { welcome: '欢迎' },
    ja: { welcome: 'ようこそ' },
  },
}, cache);

export default intl;