'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PageLayout from '../../components/layout/PageLayout';

// Sample news data
const newsItems = [
  {
    id: 1,
    title: "Mecha Break Announces Global Release Date",
    excerpt: "The highly anticipated battle royale game Mecha Break has officially announced its global release date. Players worldwide will be able to join the mechanized combat on all major platforms.",
    date: "May 15, 2024",
    image: "/images/news-1.jpg",
    url: "/news/mecha-break-announces-global-release-date"
  },
  {
    id: 2,
    title: "New Striker Mecha 'Thunderbolt' Revealed",
    excerpt: "Seasun Games has unveiled the latest addition to the Mecha Break roster: Thunderbolt. This lightning-fast striker specializes in hit-and-run tactics with unprecedented mobility.",
    date: "May 10, 2024",
    image: "/images/news-2.jpg",
    url: "/news/new-striker-mecha-thunderbolt-revealed"
  },
  {
    id: 3,
    title: "Mecha Break Closed Beta Test Results",
    excerpt: "The closed beta test for Mecha Break has concluded with overwhelmingly positive feedback. The development team shares insights on player statistics and upcoming improvements.",
    date: "May 5, 2024",
    image: "/images/news-3.jpg",
    url: "/news/mecha-break-closed-beta-test-results"
  },
  {
    id: 4,
    title: "Exclusive Interview with Mecha Break Lead Designer",
    excerpt: "We sat down with the lead designer of Mecha Break to discuss the game's development process, inspiration, and future plans. Get an inside look at the creative vision behind the game.",
    date: "April 28, 2024",
    image: "/images/news-4.jpg",
    url: "/news/exclusive-interview-with-mecha-break-lead-designer"
  },
  {
    id: 5,
    title: "Mecha Break Reveals New 'Wasteland' Map",
    excerpt: "A new battleground has been revealed for Mecha Break: the Wasteland. This post-apocalyptic desert features unique environmental hazards and strategic points of interest.",
    date: "April 20, 2024",
    image: "/images/news-5.jpg",
    url: "/news/mecha-break-reveals-new-wasteland-map"
  },
  {
    id: 6,
    title: "Mecha Break Pre-Registration Rewards Announced",
    excerpt: "Seasun Games has revealed the tiered rewards for Mecha Break pre-registration. Players who sign up early will receive exclusive in-game items, currency, and a limited-edition mecha skin.",
    date: "April 15, 2024",
    image: "/images/news-6.jpg",
    url: "/news/mecha-break-pre-registration-rewards-announced"
  },
  {
    id: 7,
    title: "Mecha Break Soundtrack Now Available on Streaming Platforms",
    excerpt: "The official Mecha Break soundtrack, composed by renowned video game composer Hiroyuki Sawano, is now available on all major music streaming platforms.",
    date: "April 10, 2024",
    image: "/images/news-7.jpg",
    url: "/news/mecha-break-soundtrack-now-available"
  },
  {
    id: 8,
    title: "Mecha Break Announces Partnership with Major Esports Organization",
    excerpt: "Seasun Games has partnered with a leading esports organization to establish Mecha Break as a competitive esports title, with tournaments and leagues planned for launch.",
    date: "April 5, 2024",
    image: "/images/news-8.jpg",
    url: "/news/mecha-break-announces-esports-partnership"
  },
  {
    id: 9,
    title: "Mecha Break Developer Diary: Creating the Perfect Mecha Combat",
    excerpt: "The development team shares insights into the process of balancing and fine-tuning the mecha combat mechanics to ensure a fair and engaging gameplay experience.",
    date: "March 30, 2024",
    image: "/images/news-9.jpg",
    url: "/news/mecha-break-developer-diary-combat"
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
                    src="/images/featured-news.jpg"
                    alt="Mecha Break Global Launch"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6 md:p-8">
                  <div className="text-sm text-blue-400 mb-2">June 1, 2024</div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Mecha Break Global Launch Countdown Begins</h2>
                  <p className="text-gray-300 mb-6">
                    The countdown to the global launch of Mecha Break has officially begun! After years of development and months of beta testing, the revolutionary mecha battle royale game is set to launch worldwide. Pre-load will be available 48 hours before the official launch.
                  </p>
                  <a 
                    href="/news/mecha-break-global-launch-countdown"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Read Full Article
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* News Grid */}
          <div className="news-grid">
            {newsItems.map((item) => (
              <div key={item.id} className="news-card">
                <div className="relative h-48">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="news-content">
                  <div className="news-date">{item.date}</div>
                  <a 
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <h3 className="news-title">{item.title}</h3>
                  </a>
                  <p className="news-excerpt">{item.excerpt}</p>
                  <div className="mt-4">
                    <a 
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      Read More →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex space-x-2">
              <button className="px-4 py-2 bg-slate-800 rounded-md hover:bg-slate-700 transition-colors">
                1
              </button>
              <button className="px-4 py-2 bg-slate-700 rounded-md hover:bg-slate-700 transition-colors">
                2
              </button>
              <button className="px-4 py-2 bg-slate-800 rounded-md hover:bg-slate-700 transition-colors">
                3
              </button>
              <button className="px-4 py-2 bg-slate-800 rounded-md hover:bg-slate-700 transition-colors">
                Next →
              </button>
            </div>
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