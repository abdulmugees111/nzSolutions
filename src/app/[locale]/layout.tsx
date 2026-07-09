import type {Metadata} from 'next';
import {NextIntlClientProvider} from 'next-intl';
import {hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import '../globals.css';
import {AppProviders} from '@/components/providers/AppProviders';
import {Footer} from '@/components/common/Footer';
import {Header} from '@/components/common/Header';
import {routing} from '@/i18n/routing';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.nzsolutions.co.uk'),
  title: {
    default: 'NZ Solutions | Telecom & Digital Engineering',
    template: '%s | NZ Solutions'
  },
  description:
    'NZ Solutions delivers telecom infrastructure, web development, mobile app development, custom software, and system integration services.',
  icons: {
    icon: '/logos/logo.png',
    shortcut: '/logos/logo.png',
    apple: '/logos/logo.png'
  },
  openGraph: {
    title: 'NZ Solutions | Telecom & Digital Engineering',
    description:
      'Telecom infrastructure, web platforms, mobile applications, and custom software solutions.',
    url: 'https://www.nzsolutions.co.uk',
    siteName: 'NZ Solutions',
    type: 'website',
    images: [
      {
        url: '/logos/logo.png',
        width: 1200,
        height: 630,
        alt: 'NZ Solutions'
      }
    ]
  }
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}>) {
  const {locale} = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider>
          <AppProviders>
            <Header />
            <main>{children}</main>
            <Footer />
          </AppProviders>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
