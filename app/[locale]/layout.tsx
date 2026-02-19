import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { locales, type Locale } from '@/i18n';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import '@/app/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://colhybri.com'),
  icons: {
    icon: '/favicon.ico',
  },
};

interface LocaleLayoutProps {
  children: ReactNode;
  params: { locale: string };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params: { locale } }: LocaleLayoutProps) {
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();

  const fontClass = locale === 'zh'
    ? 'font-zh'
    : locale === 'ja'
      ? 'font-ja'
      : '';

  return (
    <html lang={locale} className={fontClass}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        {(locale === 'zh' || locale === 'ja') && (
          <link
            href={`https://fonts.googleapis.com/css2?family=${
              locale === 'zh' ? 'Noto+Sans+SC:wght@400;500;700' : 'Noto+Sans+JP:wght@400;500;700'
            }&display=swap`}
            rel="stylesheet"
          />
        )}
      </head>
      <body className="font-sans bg-colhybri-light text-colhybri-dark min-h-screen flex flex-col">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer locale={locale as Locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
