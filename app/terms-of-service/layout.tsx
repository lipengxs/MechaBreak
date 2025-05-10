import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mecha Break - Terms of Service',
  description: 'Read Mecha Break\'s Terms of Service to understand the rules, guidelines, and legal terms that govern your use of our game and services.',
  keywords: 'Mecha Break terms of service, user agreement, terms and conditions, game rules, legal terms, service agreement, user guidelines',
  openGraph: {
    title: 'Mecha Break - Terms of Service',
    description: 'Read Mecha Break\'s Terms of Service to understand the rules, guidelines, and legal terms that govern your use of our game and services.',
    url: 'https://mechabreak.org/terms-of-service',
    siteName: 'Mecha Break',
    images: [
      {
        url: '/images/bg-b3150812.jpg.webp',
        width: 1200,
        height: 630,
        alt: 'Mecha Break Terms of Service',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mecha Break - Terms of Service',
    description: 'Read Mecha Break\'s Terms of Service to understand the rules, guidelines, and legal terms that govern your use of our game and services.',
    images: ['/images/bg-b3150812.jpg.webp'],
  },
  other: {
    'msvalidate.01': 'B362957FC36C5EDDD6079B6D78330424',
    'yandex-verification': '7c53f06929310092'
  }
};

export default function TermsOfServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 