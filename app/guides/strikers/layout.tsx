import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mecha Break - Strikers Guide',
  description: 'Explore the various Strikers in Mecha Break, each with unique abilities, stats, and playstyles. Find the perfect mecha for your combat strategy.',
  keywords: 'Mecha Break strikers, mecha guide, robot combat, mecha abilities, mecha stats, combat strategy, mecha customization',
  openGraph: {
    title: 'Mecha Break - Strikers Guide',
    description: 'Explore the various Strikers in Mecha Break, each with unique abilities, stats, and playstyles. Find the perfect mecha for your combat strategy.',
    url: 'https://mechabreak.org/guides/strikers',
    siteName: 'Mecha Break',
    images: [
      {
        url: '/images/bg-b3150812.jpg.webp',
        width: 1200,
        height: 630,
        alt: 'Mecha Break Strikers',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mecha Break - Strikers Guide',
    description: 'Explore the various Strikers in Mecha Break, each with unique abilities, stats, and playstyles. Find the perfect mecha for your combat strategy.',
    images: ['/images/bg-b3150812.jpg.webp'],
  },
  other: {
    'msvalidate.01': 'B362957FC36C5EDDD6079B6D78330424',
    'yandex-verification': '7c53f06929310092'
  }
};

export default function StrikersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 