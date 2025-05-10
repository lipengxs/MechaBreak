import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mecha Break - Media Gallery',
  description: "Explore the visual world of Mecha Break through our collection of videos, screenshots, and artwork. Get a glimpse of the game's stunning visuals, intense combat, and unique mecha designs.",
  keywords: 'Mecha Break media, game videos, screenshots, artwork, game trailers, gameplay footage, concept art',
  openGraph: {
    title: 'Mecha Break - Media Gallery',
    description: "Explore the visual world of Mecha Break through our collection of videos, screenshots, and artwork. Get a glimpse of the game's stunning visuals, intense combat, and unique mecha designs.",
    url: 'https://mechabreak.org/media',
    siteName: 'Mecha Break',
    images: [
      {
        url: '/images/bg-b3150812.jpg.webp',
        width: 1200,
        height: 630,
        alt: 'Mecha Break Media',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mecha Break - Media Gallery',
    description: "Explore the visual world of Mecha Break through our collection of videos, screenshots, and artwork. Get a glimpse of the game's stunning visuals, intense combat, and unique mecha designs.",
    images: ['/images/bg-b3150812.jpg.webp'],
  },
  other: {
    'msvalidate.01': 'B362957FC36C5EDDD6079B6D78330424',
    'yandex-verification': '7c53f06929310092'
  }
};

export default function MediaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 