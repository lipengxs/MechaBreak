'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PageLayout from '../../components/layout/PageLayout';

// Sample news data
const newsItems = [
  {
    id: 1,
    title: "Teams Assembled! Mecha BREAK Pre-Launch Global Invitational Kicks Off March 13!",
    date: "25/03/13",
    url: "https://mechabreak.seasungames.com/index/en/#/news-article/1025/504",
    tag: "【News】"
  },
  {
    id: 2,
    title: "Pilots, Well Protected: Mecha BREAK has Obtained TRUSTe Certification",
    date: "25/03/10",
    url: "https://mechabreak.seasungames.com/index/en/#/news-article/1025/454",
    tag: "【News】"
  },
  {
    id: 3,
    title: "Incoming! Mecha BREAK Global Storm Open Beta",
    date: "25/02/13",
    url: "https://mechabreak.seasungames.com/index/en/#/news-article/1025/304",
    tag: "【News】"
  },
  {
    id: 4,
    title: "Mecha BREAK - Mecha Design Concept Trailer",
    date: "24/06/08",
    url: "https://mechabreak.seasungames.com/index/en/#/news-article/1025/190",
    tag: "【News】"
  },
  {
    id: 5,
    title: "Mecha BREAK | Closed Beta Trailer",
    date: "24/03/21",
    url: "https://mechabreak.seasungames.com/index/en/#/news-article/1025/172",
    tag: "【News】"
  },
  {
    id: 6,
    title: "Mecha BREAK Closed Alpha Test | Gameplay Preview",
    date: "23/12/21",
    url: "https://mechabreak.seasungames.com/index/en/#/news-article/1025/142",
    tag: "【News】"
  },
  {
    id: 7,
    title: "Mecha BREAK | Official Gameplay Trailer—Take Part in Closed Alpha Test!",
    date: "23/12/12",
    url: "https://mechabreak.seasungames.com/index/en/#/news-article/1025/137",
    tag: "【News】"
  }
];

export default function News() {
  return (
    <PageLayout title="Mecha Break - Latest News" description="Stay up to date with the latest news, updates, and announcements for Mecha Break, the ultimate mecha battle royale game.">
      <section className="container-section bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h1 className="section-title">Latest News</h1>
          
          {/* Featured News */}
          <div className="mb-12">
            <div className="bg-slate-800 rounded-lg overflow-hidden shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-64 md:h-auto">
                  <Image
                    src="/images/media/featured-news.jpg"
                    alt="Mecha Break Global Launch"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
               
              </div>
            </div>
          </div>
          
          {/* News Grid */}
          <div className="news-grid">
            {newsItems.map((item) => (
              <a 
                key={item.id} 
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="news-card block bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:bg-slate-700 transition-colors"
              >
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="text-blue-400">{item.tag}</div>
                    <div className="text-gray-400">{item.date}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                </div>
              </a>
            ))}
          </div>
          
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="container-section bg-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl mb-8">
            Subscribe to our newsletter to receive the latest news and updates about Mecha Break directly to your inbox.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-2 bg-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
} 