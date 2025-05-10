import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/images/',
        'https://www.youtube.com/',
        'https://twitter.com/',
        'https://discord.gg/',
        'https://mechabreak.seasungames.com/',
      ],
    },
    sitemap: 'https://mechabreak.org/sitemap.xml',
  };
} 