'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PageLayout from '../../../components/layout/PageLayout';
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

// Sample strikers data
const strikers = [
  {
    id: "falcon",
    name: "Falcon",
    type: "Assault",
    description: "A versatile assault mecha with balanced stats and adaptable combat capabilities. Perfect for beginners and veterans alike.",
    image: "/images/striker-falcon.jpg",
    stats: {
      power: 80,
      speed: 75,
      defense: 70,
      control: 85
    },
    abilities: [
      {
        name: "Rapid Strike",
        description: "Unleash a flurry of attacks that deal moderate damage to a single target."
      },
      {
        name: "Tactical Dash",
        description: "Quickly dash in any direction, avoiding incoming attacks and repositioning."
      },
      {
        name: "Suppression Fire",
        description: "Fire a barrage of projectiles that cover a wide area, dealing damage to multiple enemies."
      }
    ],
    background: "Falcon was the first mecha developed by the Sentinel Corporation, designed as a versatile combat unit capable of adapting to various battlefield conditions. Its balanced performance makes it an ideal choice for pilots of all skill levels."
  },
  {
    id: "titan",
    name: "Titan",
    type: "Heavy",
    description: "A heavily armored mecha specializing in defense and area control. Slow but incredibly durable.",
    image: "/images/striker-titan.jpg",
    stats: {
      power: 90,
      speed: 40,
      defense: 95,
      control: 60
    },
    abilities: [
      {
        name: "Seismic Slam",
        description: "Slam the ground, creating a shockwave that damages and knocks back nearby enemies."
      },
      {
        name: "Barrier Shield",
        description: "Deploy a large energy shield that blocks incoming damage for you and nearby allies."
      },
      {
        name: "Heavy Artillery",
        description: "Fire a devastating artillery shell that deals massive damage in a targeted area."
      }
    ],
    background: "Titan was developed by the Iron Brigade as a response to the increasing threat of high-mobility mechas. Its imposing presence on the battlefield makes it a formidable opponent that can withstand tremendous punishment."
  },
  {
    id: "phantom",
    name: "Phantom",
    type: "Stealth",
    description: "A stealth-focused mecha with high mobility and ambush capabilities. Excels at hit-and-run tactics.",
    image: "/images/striker-phantom.jpg",
    stats: {
      power: 70,
      speed: 90,
      defense: 50,
      control: 85
    },
    abilities: [
      {
        name: "Cloaking Field",
        description: "Temporarily become invisible to enemies, allowing for strategic repositioning or escape."
      },
      {
        name: "Ambush Strike",
        description: "Deal increased damage when attacking from behind or while cloaked."
      },
      {
        name: "EMP Pulse",
        description: "Emit an electromagnetic pulse that temporarily disables enemy mechas in the vicinity."
      }
    ],
    background: "Phantom was created by the Shadow Directive, a secretive organization specializing in covert operations. Its advanced stealth technology makes it the perfect choice for pilots who prefer subterfuge over direct confrontation."
  },
  {
    id: "valkyrie",
    name: "Valkyrie",
    type: "Support",
    description: "A support mecha focused on healing allies and providing tactical advantages on the battlefield.",
    image: "/images/striker-valkyrie.jpg",
    stats: {
      power: 60,
      speed: 75,
      defense: 65,
      control: 95
    },
    abilities: [
      {
        name: "Repair Drone",
        description: "Deploy a drone that repairs damage to allied mechas over time."
      },
      {
        name: "Tactical Scan",
        description: "Scan the area to reveal hidden enemies and provide tactical information to your team."
      },
      {
        name: "Energy Transfer",
        description: "Channel energy to an ally, boosting their performance and recharging their abilities."
      }
    ],
    background: "Valkyrie was developed by the Aegis Foundation with the goal of creating a mecha that could support and enhance team performance. Its advanced AI systems make it an invaluable asset in team-based combat scenarios."
  },
  {
    id: "thunderbolt",
    name: "Thunderbolt",
    type: "Speed",
    description: "An extremely fast mecha specializing in hit-and-run tactics with unparalleled mobility.",
    image: "/images/striker-thunderbolt.jpg",
    stats: {
      power: 75,
      speed: 95,
      defense: 45,
      control: 80
    },
    abilities: [
      {
        name: "Lightning Dash",
        description: "Move at incredible speed, leaving a trail of electricity that damages enemies."
      },
      {
        name: "Shock Strike",
        description: "Deliver a powerful electric attack that can chain between multiple targets."
      },
      {
        name: "Overcharge",
        description: "Temporarily boost all systems, increasing speed and attack power significantly."
      }
    ],
    background: "Thunderbolt is the latest creation from Velocity Dynamics, pushing the boundaries of mecha speed and agility. Its revolutionary propulsion system allows it to outmaneuver virtually any opponent on the battlefield."
  },
  {
    id: "behemoth",
    name: "Behemoth",
    type: "Heavy",
    description: "A massive mecha with unmatched firepower and durability, capable of devastating entire areas.",
    image: "/images/striker-behemoth.jpg",
    stats: {
      power: 95,
      speed: 30,
      defense: 90,
      control: 50
    },
    abilities: [
      {
        name: "Devastation Cannon",
        description: "Fire a massive energy beam that deals extreme damage in a straight line."
      },
      {
        name: "Fortify",
        description: "Anchor to the ground, becoming immobile but gaining significant damage reduction."
      },
      {
        name: "Missile Barrage",
        description: "Launch a volley of guided missiles that track and damage multiple enemies."
      }
    ],
    background: "Behemoth was created by Colossus Industries as the ultimate expression of raw power on the battlefield. What it lacks in mobility, it more than makes up for in sheer destructive capability."
  }
];

export default function Strikers() {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter strikers based on type and search query
  const filteredStrikers = strikers.filter(striker => {
    const matchesType = selectedType ? striker.type === selectedType : true;
    const matchesSearch = striker.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          striker.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  // Get unique striker types
  const strikerTypes = Array.from(new Set(strikers.map(striker => striker.type)));

  return (
    <PageLayout title="Mecha Break - Strikers Guide" description="Explore the various Strikers in Mecha Break, each with unique abilities, stats, and playstyles. Find the perfect mecha for your combat strategy.">
      <section className="container-section bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h1 className="section-title">Strikers Guide</h1>
          
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <p className="text-lg mb-6">
              Strikers are the powerful mechas that players pilot in Mecha Break. Each Striker has unique abilities, strengths, and weaknesses, allowing for diverse playstyles and strategies.
            </p>
            <p>
              Explore our comprehensive guide to find the perfect Striker that matches your combat preferences and team composition.
            </p>
          </div>
          
          {/* Filters */}
          <div className="mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-2">
              <button 
                className={`px-4 py-2 rounded-md transition-colors ${selectedType === null ? 'bg-blue-500 text-white' : 'bg-slate-800 hover:bg-slate-700'}`}
                onClick={() => setSelectedType(null)}
              >
                All Types
              </button>
              {strikerTypes.map(type => (
                <button 
                  key={type}
                  className={`px-4 py-2 rounded-md transition-colors ${selectedType === type ? 'bg-blue-500 text-white' : 'bg-slate-800 hover:bg-slate-700'}`}
                  onClick={() => setSelectedType(type)}
                >
                  {type}
                </button>
              ))}
            </div>
            <div className="w-full md:w-auto">
              <input
                type="text"
                placeholder="Search Strikers..."
                className="w-full px-4 py-2 bg-slate-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          {/* Strikers Grid */}
          <div className="striker-grid">
            {filteredStrikers.map((striker) => (
              <Link href={`/guides/strikers/${striker.id}`} key={striker.id}>
                <div className="striker-card group">
                  <div className="relative striker-image">
                    <Image
                      src={striker.image}
                      alt={striker.name}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                    <div className="absolute bottom-0 left-0 p-4">
                      <div className="striker-type">{striker.type}</div>
                      <h3 className="striker-name group-hover:text-blue-400">{striker.name}</h3>
                    </div>
                  </div>
                  <div className="striker-content">
                    <p className="text-gray-300 mb-4">{striker.description}</p>
                    <div className="striker-stats">
                      <div className="stat-item">
                        <div className="stat-value">{striker.stats.power}</div>
                        <div className="stat-label">Power</div>
                      </div>
                      <div className="stat-item">
                        <div className="stat-value">{striker.stats.speed}</div>
                        <div className="stat-label">Speed</div>
                      </div>
                      <div className="stat-item">
                        <div className="stat-value">{striker.stats.defense}</div>
                        <div className="stat-label">Defense</div>
                      </div>
                      <div className="stat-item">
                        <div className="stat-value">{striker.stats.control}</div>
                        <div className="stat-label">Control</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          {filteredStrikers.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-bold mb-2">No Strikers Found</h3>
              <p>Try adjusting your filters or search query.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Strategy Tips Section */}
      <section className="container-section bg-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">Striker Strategy Tips</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Team Composition</h3>
              <p className="mb-4">
                A balanced team typically includes a mix of different Striker types. Consider having at least one Heavy for defense, one Support for team utility, and one Assault or Speed for offensive capabilities.
              </p>
              <p>
                Communication is key when coordinating your team's Striker selection. Discuss your playstyles and preferences to create a synergistic team composition.
              </p>
            </div>
            
            <div className="bg-slate-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Ability Combos</h3>
              <p className="mb-4">
                Many Striker abilities can be combined for devastating effects. For example, Titan's Seismic Slam can be followed by Phantom's Ambush Strike for a powerful crowd control and damage combo.
              </p>
              <p>
                Experiment with different ability combinations in training mode to discover powerful synergies between Strikers.
              </p>
            </div>
            
            <div className="bg-slate-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Map Awareness</h3>
              <p className="mb-4">
                Different Strikers excel in different environments. Speed-type Strikers like Thunderbolt perform well in open areas, while Stealth-type Strikers like Phantom are effective in maps with plenty of cover.
              </p>
              <p>
                Adapt your Striker choice based on the map and anticipated combat scenarios to maximize your effectiveness.
              </p>
            </div>
            
            <div className="bg-slate-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Customization</h3>
              <p className="mb-4">
                Each Striker can be customized with different weapons, modules, and cosmetic items. Experiment with various loadouts to find the configuration that best suits your playstyle.
              </p>
              <p>
                Remember that customization affects not only appearance but also performance characteristics, so choose wisely based on your strategic needs.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Striker */}
      <section className="container-section bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title">Featured Striker: Falcon</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative h-96">
              <Image
                src="/images/striker-falcon-featured.jpg"
                alt="Falcon Striker"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-2">Falcon</h3>
              <div className="text-blue-400 mb-4">Assault Type</div>
              
              <p className="mb-6">
                Falcon is the flagship Striker of Mecha Break, offering a perfect balance of power, speed, and defense. Its versatile combat capabilities make it an excellent choice for both newcomers and experienced pilots.
              </p>
              
              <h4 className="text-xl font-bold mb-2">Key Features:</h4>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Balanced stats across all performance metrics</li>
                <li>Versatile ability set suitable for various combat scenarios</li>
                <li>Highly customizable with a wide range of compatible weapons and modules</li>
                <li>Excellent team support capabilities while maintaining strong solo performance</li>
              </ul>
              
              
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
} 