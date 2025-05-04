'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PageLayout from '../components/layout/PageLayout';
import CountdownTimer from '../components/ui/CountdownTimer';
import FAQ from '../components/ui/FAQ';

export default function Home() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set release date to 3 months from now
    const releaseDate = new Date();
    releaseDate.setMonth(releaseDate.getMonth() + 3);
    
    const interval = setInterval(() => {
      const now = new Date();
      const difference = releaseDate.getTime() - now.getTime();
      
      if (difference <= 0) {
        clearInterval(interval);
        return;
      }
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setCountdown({ days, hours, minutes, seconds });
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  // FAQ items
  const faqItems = [
    {
      question: "What is Mecha Break?",
      answer: "Mecha Break is an exhilarating battle royale game where players pilot customizable mechas in intense combat scenarios. The game combines strategic gameplay, fast-paced action, and deep customization options to create a unique gaming experience."
    },
    {
      question: "When will Mecha Break be released?",
      answer: "Mecha Break is scheduled for release in the coming months. Stay tuned to our official channels for the exact release date and pre-registration opportunities."
    },
    {
      question: "What platforms will Mecha Break be available on?",
      answer: "Mecha Break will be available on PC, PlayStation 5, Xbox Series X/S, and mobile devices. Cross-platform play will be supported, allowing players on different platforms to play together."
    },
    {
      question: "Is Mecha Break free-to-play?",
      answer: "Yes, Mecha Break will be free-to-play with optional in-game purchases for cosmetic items and battle passes. All gameplay elements will be accessible to all players without requiring purchases."
    },
    {
      question: "How many players can participate in a match?",
      answer: "A standard Mecha Break match supports up to 60 players, divided into 20 teams of 3 players each. Solo and duo modes are also available for players who prefer smaller team sizes."
    },
    {
      question: "Can I customize my mecha?",
      answer: "Absolutely! Mecha Break features an extensive customization system allowing players to modify their mechas' appearance, weapons, abilities, and performance characteristics. You can create a mecha that perfectly matches your playstyle."
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/bg-b3150812.jpg.webp"
            alt="Mecha Break Background"
            fill
            priority
            style={{ objectFit: 'cover' }}
            className="brightness-100"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 to-slate-900/50"></div>
        </div>
        
        <div className="relative z-10 h-full container mx-auto px-4 flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">MECHA BREAK</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl animate-slide-up">
            The ultimate mecha combat experience. Customize your Striker, form your squad, and dominate the battlefield.
          </p>
          
          {/* Countdown Timer */}
          <div className="mb-12 animate-slide-up">
            <p className="text-xl mb-4">Game Release Countdown</p>
            <div className="flex justify-center space-x-4 md:space-x-8">
              <div className="text-center">
                <div className="text-3xl md:text-5xl font-bold bg-slate-800 rounded-lg px-4 py-2 w-16 md:w-24">{countdown.days}</div>
                <div className="text-sm mt-2">Days</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-5xl font-bold bg-slate-800 rounded-lg px-4 py-2 w-16 md:w-24">{countdown.hours}</div>
                <div className="text-sm mt-2">Hours</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-5xl font-bold bg-slate-800 rounded-lg px-4 py-2 w-16 md:w-24">{countdown.minutes}</div>
                <div className="text-sm mt-2">Minutes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-5xl font-bold bg-slate-800 rounded-lg px-4 py-2 w-16 md:w-24">{countdown.seconds}</div>
                <div className="text-sm mt-2">Seconds</div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
            <Link href="#learn-more" className="btn-primary">
              Learn More
            </Link>
            <Link href="#trailer" className="btn-secondary">
              Watch Trailer
            </Link>
          </div>
        </div>
      </section>
      
      {/* Introduction Section */}
      <section id="learn-more" className="container-section bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title">Welcome to the Battlefield</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-6">
                Mecha Break is a revolutionary combat game that combines strategic team-based gameplay with intense mecha action. Pilot your customized Striker and join forces with other players to dominate the battlefield.
              </p>
              <p className="text-lg mb-6">
                Set in a future where conflicts are resolved through mechanized combat, Mecha Break features a variety of unique environments, from futuristic cities to orbital stations, each with their own strategic opportunities and challenges.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Deep customization system for your mecha</li>
                <li>Team-based combat with various objectives</li>
                <li>Dynamic weather system affecting gameplay</li>
                <li>Destructible environments that change as the battle progresses</li>
                <li>Regular content updates with new maps, Strikers, and equipment</li>
              </ul>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/images/screenshot-team.jpg"
                alt="Mecha Break Gameplay"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Trailer Section */}
      <section id="trailer" className="container-section bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title">Official Trailer</h2>
          
          <div className="mb-12">
            <div className="aspect-w-16 aspect-h-9 bg-slate-900 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.youtube.com/embed/0WTR4p7U040" 
                title="Mecha Break - Official Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-slate-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Epic Storyline</h3>
              <p>Immerse yourself in a rich narrative where corporations, rebels, and mercenaries battle for power and resources across a war-torn world.</p>
            </div>
            <div className="bg-slate-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Multiple Languages</h3>
              <p>Enjoy Mecha Break in your preferred language with full support for English, Japanese, Korean, Chinese, Spanish, Portuguese, German, and French.</p>
            </div>
            <div className="bg-slate-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Cross-Platform</h3>
              <p>Play with friends regardless of platform, with full cross-play support for PC, PlayStation 5, Xbox Series X|S, and Nintendo Switch.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* How to Play Section */}
      <section className="container-section bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title">How to Play</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-6 rounded-lg text-center">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold mb-4">Choose Your Striker</h3>
              <p>Select from a diverse roster of mechas, each with unique abilities and playstyles. Customize your Striker with weapons, modules, and cosmetics to suit your preference.</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg text-center">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold mb-4">Form Your Squad</h3>
              <p>Team up with friends or other players to create a balanced squad. Coordinate your Striker selections to maximize team synergy and strategic options.</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg text-center">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold mb-4">Dominate the Battlefield</h3>
              <p>Deploy into various maps and game modes. Use your Striker's abilities, the environment, and team coordination to outmaneuver and defeat your opponents.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Game Features Section */}
      <section className="container-section bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title">Game Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="text-blue-400 text-4xl font-bold">01</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Deep Customization</h3>
                <p>Personalize your Striker with hundreds of weapons, modules, and cosmetic options to create a mecha that matches your playstyle and aesthetic preferences.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-blue-400 text-4xl font-bold">02</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Ranked Matches</h3>
                <p>Test your skills and climb the competitive ladder in ranked matches. Earn exclusive rewards and recognition as you reach higher tiers.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-blue-400 text-4xl font-bold">03</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Dynamic Maps</h3>
                <p>Experience battlefields that evolve during matches, with destructible environments, weather changes, and time-based events that alter your tactical options.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-blue-400 text-4xl font-bold">04</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Team-Based Gameplay</h3>
                <p>Coordinate with your teammates to execute complex strategies. Different Striker types complement each other, encouraging diverse team compositions.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-blue-400 text-4xl font-bold">05</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Global Events</h3>
                <p>Participate in limited-time events that offer unique challenges, game modes, and exclusive rewards. Join the community in global competitions.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-blue-400 text-4xl font-bold">06</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Rich Lore</h3>
                <p>Discover the expansive universe of Mecha Break through in-game storytelling, cinematics, and external media. Learn the histories of characters, factions, and the world.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Screenshots Section */}
      <section className="container-section bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title">Screenshots</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="/images/screenshot-neo-tokyo.jpg"
                alt="Neo Tokyo Map"
                fill
                style={{ objectFit: 'cover' }}
                className="transition-transform hover:scale-110"
              />
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="/images/screenshot-falcon.jpg"
                alt="Falcon Striker"
                fill
                style={{ objectFit: 'cover' }}
                className="transition-transform hover:scale-110"
              />
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="/images/screenshot-arctic.jpg"
                alt="Arctic Outpost Map"
                fill
                style={{ objectFit: 'cover' }}
                className="transition-transform hover:scale-110"
              />
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="/images/screenshot-customization.jpg"
                alt="Mecha Customization"
                fill
                style={{ objectFit: 'cover' }}
                className="transition-transform hover:scale-110"
              />
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="/images/screenshot-orbital.jpg"
                alt="Orbital Station Map"
                fill
                style={{ objectFit: 'cover' }}
                className="transition-transform hover:scale-110"
              />
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="/images/screenshot-airdrop.jpg"
                alt="Airdrop Gameplay"
                fill
                style={{ objectFit: 'cover' }}
                className="transition-transform hover:scale-110"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="container-section bg-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-slate-900 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">When will Mecha Break be released?</h3>
              <p>Mecha Break is scheduled for release in three months. The exact date will be announced soon. Stay tuned to our news section for updates!</p>
            </div>
            <div className="bg-slate-900 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">What platforms will Mecha Break be available on?</h3>
              <p>Mecha Break will be available on PC, PlayStation 5, Xbox Series X|S, and Nintendo Switch, with full cross-play support across all platforms.</p>
            </div>
            <div className="bg-slate-900 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Is Mecha Break free-to-play?</h3>
              <p>Yes, Mecha Break is a free-to-play game with optional in-game purchases for cosmetic items and battle passes. All gameplay content is accessible without spending money.</p>
            </div>
            <div className="bg-slate-900 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">How many players can participate in a match?</h3>
              <p>Standard matches feature 4v4 team battles, but we offer various game modes with different team sizes, including 3v3, 6v6, and special event modes.</p>
            </div>
            <div className="bg-slate-900 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Will there be a ranked competitive mode?</h3>
              <p>Yes, Mecha Break features a comprehensive ranked system with multiple tiers and divisions. Compete with players of similar skill levels and earn exclusive rewards.</p>
            </div>
            <div className="bg-slate-900 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">How often will the game be updated?</h3>
              <p>We plan to release major updates every three months, introducing new Strikers, maps, game modes, and balance changes. Smaller updates and hotfixes will be released as needed.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pre-Register Section */}
      <section className="container-section bg-slate-900 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join the Battle?</h2>
          <p className="text-xl mb-8">Pre-register now to receive exclusive in-game items and early access to the upcoming beta test.</p>
          <Link href="https://mechabreak.seasungames.com/en/#/" target="_blank" className="btn-primary inline-block px-8 py-4 text-lg">
            Pre-Register Now
          </Link>
        </div>
      </section>
    </PageLayout>
  );
} 