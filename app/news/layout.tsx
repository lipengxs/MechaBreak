import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mecha Break - Latest News and Updates',
  description: 'Stay up to date with the latest news, updates, and announcements for Mecha Break. Get the newest information about game features, events, and community updates.',
  keywords: 'Mecha Break news, game updates, announcements, community news, game events, latest updates',
  openGraph: {
    title: 'Mecha Break - Latest News and Updates',
    description: 'Stay up to date with the latest news, updates, and announcements for Mecha Break. Get the newest information about game features, events, and community updates.',
    url: 'https://mechabreak.org/news',
    siteName: 'Mecha Break',
    images: [
      {
        url: '/images/bg-b3150812.jpg.webp',
        width: 1200,
        height: 630,
        alt: 'Mecha Break News',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mecha Break - Latest News and Updates',
    description: 'Stay up to date with the latest news, updates, and announcements for Mecha Break. Get the newest information about game features, events, and community updates.',
    images: ['/images/bg-b3150812.jpg.webp'],
  },
  other: {
    'msvalidate.01': 'B362957FC36C5EDDD6079B6D78330424',
    'yandex-verification': '7c53f06929310092'
  }
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 