'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import PageLayout from '../../../components/layout/PageLayout';

// Mecha Break official maps data
const maps = [
  {
    id: "cape-blanc-observatory",
    name: "Cape Blanc Observatory",
    subtitle: "Cape Blanc Observatory",
    description1: "Cape Blanc, known for its pure air, high visibility, and minimal light pollution, is an ideal site for astronomical observations. Before the Catastrophe, it hosted multiple large observatories, notably a large variable parabolic dish radio telescope in its northern mid-altitude area.",
    description2: "Saint Enos plans to use their Stratum Shatterer to trigger EIC expansion and destroy the nearby Corite research facility. If successful, the resulting EIC dust would spread catastrophic pollution across hundreds of kilometers. Moonbow is dispatched to dismantle the device and avert the disaster.",
    thumb: "/images/maps/cape-blanc-thumb.png",
    image1: "/images/maps/cape-blanc-pc-1.jpg",
    image2: "/images/maps/cape-blanc-pc-2.jpg",
    mobileImage1: "/images/maps/cape-blanc-mobile-1.jpg",
    mobileImage2: "/images/maps/cape-blanc-mobile-2.jpg",
    pointsOfInterest: [
      {
        name: "Radio Telescope",
        description: "A massive parabolic dish radio telescope used for deep space observations. The structure provides both high ground and cover opportunities."
      },
      {
        name: "Research Complex",
        description: "The main facility where scientists conduct their studies. Contains valuable equipment and offers complex indoor combat scenarios."
      },
      {
        name: "Corite Research Facility",
        description: "A specialized facility studying EIC properties and Corite behavior. Strategic location for resource control."
      },
      {
        name: "Observation Platforms",
        description: "Elevated positions providing excellent visibility across the map. Ideal for long-range engagements."
      }
    ],
    features: [
      "High elevation differences offering tactical advantages",
      "Clear visibility across most of the map due to minimal light pollution",
      "Scientific equipment that can provide cover or be used tactically",
      "EIC-contaminated areas that pose environmental hazards"
    ],
    tips: [
      "Use the elevation to your advantage for better firing positions",
      "Secure the research complex early for access to high-tier resources",
      "Watch for EIC contamination spreading from damaged equipment",
      "The radio telescope dish provides unique movement opportunities for mobile mechas"
    ]
  },
  {
    id: "palmbay-harbor",
    name: "Palmbay Harbor",
    subtitle: "Palmbay Harbor",
    description1: "Positioned on the southwestern coast of the Vortex Peninsula, Palmbay Harbor operates as a free-trade port belonging to the Vulturia Alliance. Within the harbor, the renowned UVC Mercury has established a large factory capable of manufacturing not only regular vessels but also colossal airships.",
    description2: "Saint Enos attempts to insert counterfeit cores filled with Corite warheads into the reactor, exploiting Palmbay's automated Corite reactor core replacement procedures. S.H.A.D.O.W. is tasked with thwarting enemy movement to ensure the delivery of genuine cores.",
    thumb: "/images/maps/palmbay-thumb.png",
    image1: "/images/maps/palmbay-pc-1.jpg",
    image2: "/images/maps/palmbay-pc-2.jpg",
    mobileImage1: "/images/maps/palmbay-mobile-1.jpg",
    mobileImage2: "/images/maps/palmbay-mobile-2.jpg",
    pointsOfInterest: [
      {
        name: "UVC Mercury Factory",
        description: "A massive industrial complex where airships are manufactured. Provides multi-level combat opportunities and resource-rich areas."
      },
      {
        name: "Docking Bays",
        description: "Where vessels are loaded and unloaded. Contains shipping containers and equipment that provide excellent cover."
      },
      {
        name: "Corite Reactor Core",
        description: "The central power source for the harbor. A heavily contested area with strategic importance."
      },
      {
        name: "Trading District",
        description: "A bustling area with various buildings and market stalls. Ideal for close-quarters combat and flanking maneuvers."
      }
    ],
    features: [
      "Coastal layout with both water and land-based combat areas",
      "Industrial facilities with multiple levels and pathways",
      "Shipping containers and cargo that provide dynamic cover",
      "Corite reactor zones with unique environmental effects"
    ],
    tips: [
      "Use the various elevation levels in the factory for tactical advantages",
      "The water areas can provide alternative routes for flanking enemies",
      "Shipping containers can be destroyed, so don't rely on them for permanent cover",
      "Control the reactor core area to deny enemies access to crucial resources"
    ]
  },
  {
    id: "kraub-sinkhole",
    name: "Kraub Sinkhole",
    subtitle: "Kraub Sinkhole",
    description1: "The Kraub Sinkhole, a crater in the ring-shaped Strelya Mountains, was revealed by geological uplift and drainage during the Catastrophe, exposing complex terrains once submerged by underground rivers.",
    description2: "The Thalassic Federation's illegal mining in the Kraub Sinkhole has triggered rampant Corite growth, threatening nearby areas. Moonbow is tasked with expelling the entrenched mercenaries and shutting down the operation.",
    thumb: "/images/maps/kraub-thumb.png",
    image1: "/images/maps/kraub-pc-1.jpg",
    image2: "/images/maps/kraub-pc-2.jpg",
    mobileImage1: "/images/maps/kraub-mobile-1.jpg",
    mobileImage2: "/images/maps/kraub-mobile-2.jpg",
    pointsOfInterest: [
      {
        name: "Sinkhole Center",
        description: "The deepest part of the crater where illegal mining operations are concentrated. Rich in resources but highly contested."
      },
      {
        name: "Underground River Networks",
        description: "Exposed ancient river systems providing alternative routes through the map. Offers stealth opportunities and flanking positions."
      },
      {
        name: "Mining Outposts",
        description: "Thalassic Federation facilities established for EIC extraction. Contains valuable equipment and defensive positions."
      },
      {
        name: "Corite Growth Zones",
        description: "Areas where illegal mining has triggered rampant Corite expansion. Presents environmental hazards but also unique tactical opportunities."
      }
    ],
    features: [
      "Complex vertical terrain with multiple levels from the crater rim to the bottom",
      "Underground passages and cave systems for alternative movement",
      "Mining equipment that can provide cover or be used tactically",
      "Corite-contaminated zones that create dangerous but resource-rich areas"
    ],
    tips: [
      "Use the height advantage from the crater rim for long-range engagements",
      "The underground river networks provide safer movement paths away from snipers",
      "Mining equipment can be destroyed to create new tactical options",
      "Avoid Corite growth zones unless properly equipped to handle the environmental effects"
    ]
  },
  {
    id: "eye-of-misra",
    name: "Eye of Misra",
    subtitle: "Eye of Misra",
    description1: "The Eye of Misra, a large EIC mine in the remote outskirts of Fustat, the capital of the Misra Republic, is named for the eye-like shape of its Marcens Zone when viewed from low orbit.",
    description2: "Windrose has seized the Eye of Misra mine and is holding scientists hostage. Moonbow urgently deploys to help the researchers escape by rocket, clashing with enemy forces while retrieving launch keys.",
    thumb: "/images/maps/eye-of-misra-thumb.png",
    image1: "/images/maps/eye-of-misra-pc-1.jpg",
    image2: "/images/maps/eye-of-misra-pc-2.jpg",
    mobileImage1: "/images/maps/eye-of-misra-mobile-1.jpg",
    mobileImage2: "/images/maps/eye-of-misra-mobile-2.jpg",
    pointsOfInterest: [
      {
        name: "Marcens Zone",
        description: "The central EIC mining area shaped like an eye when viewed from above. Highly dangerous but rich in resources."
      },
      {
        name: "Research Compound",
        description: "Where scientists conduct studies on the EIC. Currently held by Windrose forces."
      },
      {
        name: "Rocket Launch Facility",
        description: "The escape route for the hostage scientists. A crucial strategic location that must be secured."
      },
      {
        name: "Mining Operations Center",
        description: "The control hub for the entire mining facility. Contains valuable technological equipment and strategic advantage."
      }
    ],
    features: [
      "Eye-shaped layout with the dangerous Marcens Zone at its center",
      "Mining equipment and structures providing tactical cover",
      "Variable terrain from deep mining pits to elevated control facilities",
      "EIC-contaminated areas that pose environmental hazards"
    ],
    tips: [
      "Avoid prolonged exposure to the Marcens Zone unless properly equipped",
      "Secure the launch keys early to gain advantage in the mission objective",
      "Use the mining structures for cover when moving between objectives",
      "The elevated areas around the eye provide good vantage points for defense"
    ]
  },
  {
    id: "gracelynn-skycity",
    name: "Gracelynn Skycity",
    subtitle: "Gracelynn Skycity",
    description1: "To evade the expanding Marcens Zones from EIC pulse storms after the Catastrophe, the Thalassic Federation launched Project Enterprise, constructing aerial cities. Gracelynn Skycity, an engineering marvel, exemplifies this initiative's success.",
    description2: "To build aerial cities, the Thalassic Federation mines EIC extensively, sparking conflicts with the Apostles, an EIC-worshipping cult. In retaliation, the Apostles plot to detonate a Skycity's power reactor to force its collapse. Moonbow is urgently dispatched to neutralize the threat.",
    thumb: "/images/maps/gracelynn-thumb.png",
    image1: "/images/maps/gracelynn-pc-1.jpg",
    image2: "/images/maps/gracelynn-pc-2.jpg",
    mobileImage1: "/images/maps/gracelynn-mobile-1.jpg",
    mobileImage2: "/images/maps/gracelynn-mobile-2.jpg",
    pointsOfInterest: [
      {
        name: "Aerial City Center",
        description: "The bustling heart of Gracelynn with multi-level structures and suspended walkways. Offers complex vertical gameplay."
      },
      {
        name: "Power Reactor",
        description: "The central power source targeted by the Apostles. A critical strategic location that must be defended."
      },
      {
        name: "Residential Districts",
        description: "Densely packed living quarters with numerous buildings and alleyways. Perfect for close-quarters combat."
      },
      {
        name: "Sky Platforms",
        description: "Exterior platforms offering spectacular views and dangerous open-air combat scenarios with significant fall hazards."
      }
    ],
    features: [
      "Extreme vertical gameplay across multiple city levels",
      "Fall hazards from the edges of the floating city",
      "Dense urban environment with numerous buildings and cover options",
      "Suspended walkways and bridges connecting different sections"
    ],
    tips: [
      "Mind your positioning near edges to avoid falling off the city",
      "Use the vertical architecture to gain height advantage over enemies",
      "The power reactor area is heavily contested but offers strategic control",
      "Mobility-focused mechas excel in navigating the complex vertical structures"
    ]
  }
];

export default function Maps() {
  const [selectedMap, setSelectedMap] = useState(maps[0]);
  const [showImage, setShowImage] = useState(1); // 1 for first image, 2 for second image
  const [isMobile, setIsMobile] = useState(false);

  // Add responsive detection
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  const toggleImage = () => {
    setShowImage(showImage === 1 ? 2 : 1);
  };

  // Get the correct image based on device and toggle state
  const getMapImage = () => {
    if (isMobile) {
      return showImage === 1 ? selectedMap.mobileImage1 : selectedMap.mobileImage2;
    } else {
      return showImage === 1 ? selectedMap.image1 : selectedMap.image2;
    }
  };

  return (
    <PageLayout title="Mecha Break - Maps Guide" description="Explore the official battlefields of Mecha Break, from Cape Blanc Observatory to Gracelynn Skycity. Learn map features, strategic points, and tactical tips.">
      <section className="container-section bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h1 className="section-title">Maps Guide</h1>
          
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <p className="text-lg mb-6">
              The battlefields of Mecha Break span diverse environments, each with unique features, hazards, and strategic opportunities. Mastering these maps is essential for competitive play.
            </p>
            <p>
              Explore our comprehensive guide to learn about each map's layout, points of interest, and tactical advantages.
            </p>
          </div>
          
          {/* Map Thumbnail Selection */}
          <div className="mb-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {maps.map((map) => (
              <div 
                key={map.id}
                className={`cursor-pointer transition-all duration-300 ${selectedMap.id === map.id ? 'ring-4 ring-blue-500 scale-105' : 'hover:scale-105'}`}
                onClick={() => setSelectedMap(map)}
              >
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <Image
                    src={map.thumb}
                    alt={map.name}
                    width={300}
                    height={169}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-70"></div>
                  <div className="absolute bottom-0 left-0 p-3">
                    <h3 className="text-sm font-bold">{map.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Selected Map Details */}
          <div className="map-details">
            <div className="relative h-72 md:h-96 mb-8 rounded-lg overflow-hidden group">
              <Image
                src={getMapImage()}
                alt={selectedMap.name}
                fill
                priority
                quality={90}
                style={{ objectFit: 'cover' }}
                className="transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 p-4 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">{selectedMap.name}</h2>
                <p className="text-gray-300 text-sm md:text-base">{selectedMap.subtitle}</p>
              </div>
              
              {/* Image toggle button */}
              <button 
                onClick={toggleImage} 
                className="absolute right-4 bottom-4 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full opacity-80 hover:opacity-100 transition-opacity"
                aria-label="Toggle map view"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14" />
                </svg>
              </button>
            </div>
            
            <div className="mb-8 space-y-4">
              <p className="text-lg">{selectedMap.description1}</p>
              <p className="text-lg">{selectedMap.description2}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-slate-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Key Features</h3>
                <ul className="list-disc pl-5 space-y-2">
                  {selectedMap.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-slate-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Strategic Tips</h3>
                <ul className="list-disc pl-5 space-y-2">
                  {selectedMap.tips.map((tip, index) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">Points of Interest</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {selectedMap.pointsOfInterest.map((poi, index) => (
                  <div key={index} className="bg-slate-800 p-6 rounded-lg transition-transform hover:transform hover:scale-[1.02]">
                    <h4 className="text-xl font-bold mb-2">{poi.name}</h4>
                    <p>{poi.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Strategy Section */}
      <section className="container-section bg-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">General Map Strategies</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-900 p-6 rounded-lg hover:bg-slate-800 transition-colors">
              <h3 className="text-xl font-bold mb-4">Map Control</h3>
              <p className="mb-4">
                Controlling key areas of the map is essential for victory. Identify high-value locations that provide resource advantages or tactical superiority, and work with your team to secure these areas.
              </p>
              <p>
                Remember that map control is dynamic - be prepared to adapt your strategy as the battle evolves and new opportunities arise.
              </p>
            </div>
            
            <div className="bg-slate-900 p-6 rounded-lg hover:bg-slate-800 transition-colors">
              <h3 className="text-xl font-bold mb-4">Environmental Awareness</h3>
              <p className="mb-4">
                Each map features unique environmental elements that can be used to your advantage or pose hazards. Learn how these elements work and incorporate them into your strategy.
              </p>
              <p>
                From EIC-contaminated zones to destructible terrain, mastering the environment is as important as mastering your mecha.
              </p>
            </div>
            
            <div className="bg-slate-900 p-6 rounded-lg hover:bg-slate-800 transition-colors">
              <h3 className="text-xl font-bold mb-4">Rotation Paths</h3>
              <p className="mb-4">
                Develop efficient rotation paths between key locations to maximize your team's map presence. Consider factors like cover, elevation, and potential enemy positions when planning rotations.
              </p>
              <p>
                Quick and safe rotations can give your team a significant advantage in responding to threats and opportunities across the map.
              </p>
            </div>
            
            <div className="bg-slate-900 p-6 rounded-lg hover:bg-slate-800 transition-colors">
              <h3 className="text-xl font-bold mb-4">Mecha Selection</h3>
              <p className="mb-4">
                Different maps favor different mecha types. Consider the map's layout and features when selecting your mecha and loadout for a match.
              </p>
              <p>
                For example, mobility-focused mechas excel in maps with vertical elements like Gracelynn Skycity, while heavy mechas may perform better in maps with open areas and direct engagement opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
} 