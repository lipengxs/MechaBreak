import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mecha Break - The Ultimate Mecha Combat Game',
  description: 'Mecha Break is an intense combat game featuring customizable mechas, strategic gameplay, and thrilling battles. Join the fight today!',
  keywords: 'Mecha Break, mecha game, robot combat, online multiplayer, PvP, mecha customization',
  other: {
    'msvalidate.01': 'B362957FC36C5EDDD6079B6D78330424',
    'yandex-verification': '7c53f06929310092',
  },
  alternates: {
    canonical: 'https://mechabreak.org',
  },
  openGraph: {
    title: 'Mecha Break - The Ultimate Mecha Combat Game',
    description: 'Mecha Break is an intense combat game featuring customizable mechas, strategic gameplay, and thrilling battles. Join the fight today!',
    url: 'https://mechabreak.org',
    siteName: 'Mecha Break',
    images: [
      {
        url: '/images/bg-b3150812.jpg.webp',
        width: 1200,
        height: 630,
        alt: 'Mecha Break Game',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mecha Break - The Ultimate Mecha Combat Game',
    description: 'Mecha Break is an intense combat game featuring customizable mechas, strategic gameplay, and thrilling battles. Join the fight today!',
    images: ['/images/bg-b3150812.jpg.webp'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
} 