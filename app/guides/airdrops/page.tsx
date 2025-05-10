'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PageLayout from '../../../components/layout/PageLayout';

// Sample airdrops data
const airdrops = [
  {
    id: "quantum-core",
    name: "Quantum Core",
    type: "Power-Up",
    rarity: "Legendary",
    description: "A highly advanced power source that significantly boosts all mecha systems for a limited time.",
    image: "/images/airdrops/quantum-core.jpg",
    effects: [
      "Increases all stats by 30% for 60 seconds",
      "Reduces ability cooldowns by 50%",
      "Generates a protective shield that absorbs damage"
    ],
    locations: [
      "Central Command (rare spawn)",
      "Research Facility",
      "Power Plant"
    ]
  },
  {
    id: "repair-kit",
    name: "Repair Kit",
    type: "Utility",
    rarity: "Common",
    description: "A standard-issue repair kit that restores a moderate amount of health to your mecha.",
    image: "/images/airdrops/repair-kit.jpg",
    effects: [
      "Restores 50% of maximum health",
      "Repairs critical systems",
      "Removes status effects"
    ],
    locations: [
      "Throughout all maps",
      "Higher concentration in Residential Areas",
      "Medical Facilities"
    ]
  },
  {
    id: "emp-bomb",
    name: "EMP Bomb",
    type: "Offensive",
    rarity: "Rare",
    description: "A powerful electromagnetic pulse device that temporarily disables enemy mechas in its blast radius.",
    image: "/images/airdrops/emp-bomb.jpg",
    effects: [
      "Disables enemy mechas for 5 seconds",
      "Disrupts radar and targeting systems for 15 seconds",
      "Deals minor damage to electrical systems"
    ],
    locations: [
      "Military Outposts",
      "Research Labs",
      "Communication Towers"
    ]
  },
  {
    id: "stealth-module",
    name: "Stealth Module",
    type: "Utility",
    rarity: "Epic",
    description: "An advanced cloaking device that renders your mecha temporarily invisible to enemies.",
    image: "/images/airdrops/stealth-module.jpg",
    effects: [
      "Grants invisibility for 20 seconds",
      "Silences movement and weapon sounds",
      "Masks heat signature from thermal scanners"
    ],
    locations: [
      "Special Operations Base",
      "Research Facility",
      "Underground Bunkers"
    ]
  },
  {
    id: "heavy-artillery",
    name: "Heavy Artillery",
    type: "Offensive",
    rarity: "Rare",
    description: "A powerful weapon upgrade that significantly increases your mecha's firepower for a limited time.",
    image: "/images/airdrops/heavy-artillery.jpg",
    effects: [
      "Increases weapon damage by 75%",
      "Adds explosive damage to all projectiles",
      "Reduces weapon accuracy by 15%"
    ],
    locations: [
      "Military Bases",
      "Weapons Depots",
      "Battlefield Wreckage"
    ]
  },
  {
    id: "shield-generator",
    name: "Shield Generator",
    type: "Defensive",
    rarity: "Epic",
    description: "A powerful defensive system that creates an energy shield around your mecha, absorbing incoming damage.",
    image: "/images/airdrops/shield-generator.jpg",
    effects: [
      "Creates a shield that absorbs up to 500 damage",
      "Regenerates shield at 10 points per second",
      "Reflects 15% of absorbed damage back to attackers"
    ],
    locations: [
      "Defense Installations",
      "Power Plants",
      "Research Facilities"
    ]
  },
  {
    id: "speed-booster",
    name: "Speed Booster",
    type: "Mobility",
    rarity: "Uncommon",
    description: "A temporary engine enhancement that significantly increases your mecha's movement speed and agility.",
    image: "/images/airdrops/speed-booster.jpg",
    effects: [
      "Increases movement speed by 50% for 30 seconds",
      "Reduces dash cooldown by 75%",
      "Improves turning rate and handling"
    ],
    locations: [
      "Racing Circuits",
      "Transportation Hubs",
      "Open Areas"
    ]
  },
  {
    id: "data-core",
    name: "Data Core",
    type: "Strategic",
    rarity: "Legendary",
    description: "A highly valuable intelligence package that reveals enemy positions and provides tactical advantages.",
    image: "/images/airdrops/data-core.jpg",
    effects: [
      "Reveals all enemies on the map for 45 seconds",
      "Highlights critical weak points on enemy mechas",
      "Provides real-time movement predictions"
    ],
    locations: [
      "Command Centers",
      "Intelligence Headquarters",
      "Satellite Uplink Stations"
    ]
  }
];

// Rarity colors for styling
const rarityColors = {
  "Common": "text-gray-400",
  "Uncommon": "text-green-400",
  "Rare": "text-blue-400",
  "Epic": "text-purple-400",
  "Legendary": "text-yellow-400"
};

export default function Airdrops() {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedRarity, setSelectedRarity] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter airdrops based on type, rarity, and search query
  const filteredAirdrops = airdrops.filter(airdrop => {
    const matchesType = selectedType ? airdrop.type === selectedType : true;
    const matchesRarity = selectedRarity ? airdrop.rarity === selectedRarity : true;
    const matchesSearch = airdrop.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          airdrop.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesRarity && matchesSearch;
  });

  // Get unique airdrop types and rarities
  const airdropTypes = Array.from(new Set(airdrops.map(airdrop => airdrop.type)));
  const airdropRarities = Array.from(new Set(airdrops.map(airdrop => airdrop.rarity)));

  return (
    <PageLayout title="Mecha Break - Airdrops Guide" description="Explore the various airdrops in Mecha Break, from powerful weapons to strategic utilities. Learn about their effects, rarities, and spawn locations.">
      <section className="container-section bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h1 className="section-title">Airdrops Guide</h1>
          
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <p className="text-lg mb-6">
              Airdrops are special items that spawn randomly throughout the battlefield in Mecha Break. These powerful resources can turn the tide of battle when used strategically.
            </p>
            <p>
              From offensive weapons to defensive utilities, understanding the different types of airdrops and their effects is crucial for dominating the battlefield.
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
              {airdropTypes.map(type => (
                <button 
                  key={type}
                  className={`px-4 py-2 rounded-md transition-colors ${selectedType === type ? 'bg-blue-500 text-white' : 'bg-slate-800 hover:bg-slate-700'}`}
                  onClick={() => setSelectedType(type)}
                >
                  {type}
                </button>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-2">
              <button 
                className={`px-4 py-2 rounded-md transition-colors ${selectedRarity === null ? 'bg-blue-500 text-white' : 'bg-slate-800 hover:bg-slate-700'}`}
                onClick={() => setSelectedRarity(null)}
              >
                All Rarities
              </button>
              {airdropRarities.map(rarity => (
                <button 
                  key={rarity}
                  className={`px-4 py-2 rounded-md transition-colors ${selectedRarity === rarity ? 'bg-blue-500 text-white' : 'bg-slate-800 hover:bg-slate-700'}`}
                  onClick={() => setSelectedRarity(rarity)}
                >
                  {rarity}
                </button>
              ))}
            </div>
            
            <div className="w-full md:w-auto">
              <input
                type="text"
                placeholder="Search Airdrops..."
                className="w-full px-4 py-2 bg-slate-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          {/* Airdrops Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAirdrops.map((airdrop) => (
                <div className="airdrop-card group bg-slate-800 rounded-lg overflow-hidden transition-transform hover:transform hover:scale-105">
                  <div className="relative h-48">
                    <Image
                      src={airdrop.image}
                      alt={airdrop.name}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                    <div className="absolute top-0 right-0 m-2">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold
                        ${airdrop.rarity === 'Common' ? 'bg-gray-500' : 
                          airdrop.rarity === 'Uncommon' ? 'bg-green-500' : 
                          airdrop.rarity === 'Rare' ? 'bg-blue-500' : 
                          airdrop.rarity === 'Epic' ? 'bg-purple-500' : 
                          'bg-yellow-500'}`}>
                        {airdrop.rarity}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-xl font-bold group-hover:text-blue-400">{airdrop.name}</h3>
                      <span className="text-sm text-gray-400">{airdrop.type}</span>
                    </div>
                    
                    <p className="text-gray-300 mb-4">{airdrop.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Effects:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        {airdrop.effects.map((effect, index) => (
                          <li key={index}>{effect}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Common Locations:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-gray-400">
                        {airdrop.locations.map((location, index) => (
                          <li key={index}>{location}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
            ))}
          </div>
          
          {filteredAirdrops.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-bold mb-2">No Airdrops Found</h3>
              <p>Try adjusting your filters or search query.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Airdrop Strategy Tips Section */}
      <section className="container-section bg-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">Airdrop Strategy Tips</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Timing is Everything</h3>
              <p className="mb-4">
                Airdrops are announced 30 seconds before they land. Use this time to position yourself strategically or set up an ambush for enemies who might be rushing to claim it.
              </p>
              <p>
                Consider the risk vs. reward when going for airdrops. Sometimes it's better to let enemies claim an airdrop and then engage them afterward when they might be vulnerable.
              </p>
            </div>
            
            <div className="bg-slate-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Prioritization</h3>
              <p className="mb-4">
                Not all airdrops are created equal. Legendary airdrops like the Quantum Core or Data Core can dramatically change the course of a match and should be prioritized over common items.
              </p>
              <p>
                Consider your team's current needs when deciding which airdrops to pursue. If your team is low on health, a Repair Kit might be more valuable than an offensive upgrade.
              </p>
            </div>
            
            <div className="bg-slate-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Team Coordination</h3>
              <p className="mb-4">
                Coordinate with your team when going for airdrops. Have one player secure the airdrop while others provide cover or watch for approaching enemies.
              </p>
              <p>
                Distribute airdrops based on mecha types and roles. For example, Heavy Artillery is often more effective on assault-type mechas, while Shield Generators benefit tank-type mechas.
              </p>
            </div>
            
            <div className="bg-slate-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Baiting Strategies</h3>
              <p className="mb-4">
                Airdrops can be used as bait to lure enemies into ambushes. Position your team around an airdrop and wait for enemies to approach before engaging.
              </p>
              <p>
                If you're at a disadvantage, consider using a Stealth Module to sneak in and steal an airdrop that enemies are guarding or fighting over.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Airdrop */}
      <section className="container-section bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title">Featured Airdrop: Quantum Core</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative h-96">
              <Image
                src="/images/airdrops/quantum-core-featured.jpg"
                alt="Quantum Core Airdrop"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>
            
            <div>
              <div className="flex items-center gap-4 mb-4">
                <h3 className="text-2xl font-bold">Quantum Core</h3>
                <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold bg-yellow-500">Legendary</span>
              </div>
              
              <p className="mb-6">
                The Quantum Core is the most sought-after airdrop in Mecha Break. This legendary power source temporarily transforms your mecha into an unstoppable force on the battlefield, boosting all systems and providing a protective shield.
              </p>
              
              <h4 className="text-xl font-bold mb-2">Effects:</h4>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Increases all stats by 30% for 60 seconds</li>
                <li>Reduces ability cooldowns by 50%</li>
                <li>Generates a protective shield that absorbs damage</li>
              </ul>
              
              <h4 className="text-xl font-bold mb-2">Strategic Value:</h4>
              <p className="mb-6">
                The Quantum Core is a game-changer in team fights and can turn the tide of battle instantly. It's particularly effective when used by a skilled pilot during critical objectives or when facing multiple enemies. Teams often prioritize securing this airdrop above all others.
              </p>
              
              <h4 className="text-xl font-bold mb-2">Spawn Locations:</h4>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Central Command:</strong> Rare spawn, typically appears in high-risk central areas</li>
                <li><strong>Research Facility:</strong> Can spawn in the secure labs section</li>
                <li><strong>Power Plant:</strong> Sometimes appears near the reactor core</li>
              </ul>
              
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
} 