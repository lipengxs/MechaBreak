'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import PageLayout from '../../components/layout/PageLayout';

// Define types for our mecha data
interface Mecha {
  id: string;
  catid: string;
  title: string;
  style?: string;
  thumb?: string;
  keywords?: string;
  description?: string;
  url?: string;
  listorder?: string;
  islink?: string;
  inputtime?: string;
  updatetime?: string;
  driver_born?: string;
  driver_name?: string;
  driver_cn_name?: string;
  driver_introduction?: string;
  key?: string;
  features?: string[];
  abilities?: string[];
  pilot?: string;
  pilotBorn?: string;
  pilotIntroduction?: string;
  image?: string;
}

// Mecha data from JSON - English names only version
const mechaData: Mecha[] = [
  {
    id: "122",
    catid: "1039",
    title: "PINAKA",
    key: "PINAKA",
    image: "/images/mechas/pinaka.jpg",
    thumb: "/images/mechas/thumbs/pinaka-thumb.jpg",
    description: "Pinaka is a formidable mecha known for its powerful artillery capabilities and long-range attacks."
  },
  {
    id: "97",
    catid: "1039",
    title: "AQUINA",
    key: "AQUINA",
    image: "/images/mechas/aquina.jpg",
    thumb: "/images/mechas/thumbs/aquina-thumb.jpg",
    description: "Aquina is a versatile mecha designed for underwater operations and amphibious combat."
  },
  {
    id: "96",
    catid: "1039",
    title: "STEGOSAUR",
    key: "STEGOSAUR",
    image: "/images/mechas/stegosaur.jpg",
    thumb: "/images/mechas/thumbs/stegosaur-thumb.jpg",
    description: "Stegosaur is a heavily armored mecha with distinctive back plates that function as both defense and offensive capabilities."
  },
  {
    id: "95",
    catid: "1039",
    title: "HELLFIRE",
    key: "HELLFIRE",
    image: "/images/mechas/hellfire.jpg",
    thumb: "/images/mechas/thumbs/hellfire-thumb.jpg",
    description: "Hellfire is a pyrotechnic mecha specialized in creating and controlling fire-based attacks."
  },
  {
    id: "75",
    catid: "1039",
    title: "SKYRAIDER",
    key: "SKYRAIDER",
    image: "/images/mechas/skyraider.jpg",
    thumb: "/images/mechas/thumbs/skyraider-thumb.jpg",
    description: "Skyraider is an aerial combat specialist with superior mobility and air-to-ground capabilities."
  },
  {
    id: "74",
    catid: "1039",
    title: "HURRICANE",
    key: "HURRICANE",
    image: "/images/mechas/hurricane.jpg",
    thumb: "/images/mechas/thumbs/hurricane-thumb.jpg",
    description: "Hurricane is built for creating devastating wind-based attacks that can disrupt enemy formations."
  },
  {
    id: "11",
    catid: "1039",
    title: "WELKIN",
    key: "WELKIN",
    image: "/images/mechas/welkin.jpg",
    thumb: "/images/mechas/thumbs/welkin-thumb.jpg",
    description: "Welkin is a high-altitude specialist with advanced aerial maneuverability and ranged attacks.",
    pilot: "Rui"
  },
  {
    id: "10",
    catid: "1039",
    title: "LUMINAE",
    key: "LUMINAE",
    image: "/images/mechas/luminae.jpg",
    thumb: "/images/mechas/thumbs/luminae-thumb.jpg",
    description: "Luminae is a light-based mecha that uses photon technology to create blinding attacks and light barriers.",
    pilot: "Shally Lee"
  },
  {
    id: "9",
    catid: "1039",
    title: "NARUKAMI",
    key: "NARUKAMI",
    image: "/images/mechas/narukami.jpg",
    thumb: "/images/mechas/thumbs/narukami-thumb.jpg",
    description: "Narukami is an electricity-based mecha capable of generating devastating lightning attacks.",
    pilot: "Kanon"
  },
  {
    id: "8",
    catid: "1039",
    title: "TRICERA",
    key: "TRICERA",
    image: "/images/mechas/tricera.jpg",
    thumb: "/images/mechas/thumbs/tricera-thumb.jpg",
    description: "Tricera is modeled after the prehistoric triceratops, featuring powerful charging attacks and strong defensive capabilities.",
    pilot: "Charles Bell"
  },
  {
    id: "7",
    catid: "1039",
    title: "ALYSNES",
    key: "ALYSNES",
    image: "/images/mechas/alysnes.jpg",
    thumb: "/images/mechas/thumbs/alysnes-thumb.jpg",
    description: "Alysnes is a versatile mecha designed for balanced combat with a focus on adaptability.",
    pilot: "Protagonist"
  },
  {
    id: "6",
    catid: "1039",
    title: "PANTHER",
    key: "PANTHER",
    image: "/images/mechas/panther.jpg",
    thumb: "/images/mechas/thumbs/panther-thumb.jpg",
    description: "Panther is a stealth-focused mecha with high mobility and deadly close-range attacks.",
    pilot: "Werner Ernst"
  },
  {
    id: "5",
    catid: "1039",
    title: "FALCON",
    key: "FALCON",
    image: "/images/mechas/falcon.jpg",
    thumb: "/images/mechas/thumbs/falcon-thumb.jpg",
    description: "Falcon is a high-speed mecha designed for rapid strikes and hit-and-run tactics.",
    pilot: "Leonie Fevre"
  }
];

export default function Strikers() {
  const [selectedMecha, setSelectedMecha] = useState<Mecha | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [mechaDetails, setMechaDetails] = useState<any>(null);
  
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

  // Function to fetch mecha details from API
  const fetchMechaDetails = async (mecha: Mecha) => {
    try {
      setIsLoading(true);
      
      // API URL format exactly as provided in the requirement
      const apiUrl = `https://www.mechabreak.com/api.php?op=search_api&action=get_article_detail&catid=${mecha.catid}&id=${mecha.id}&callback=_xfe26`;
      
      // Fetch data from API
      const response = await fetch(apiUrl, {
        headers: {
          'Accept': 'application/json, text/javascript, */*; q=0.01',
          'Referer': 'https://www.mechabreak.com/',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
      });
      
      // Get the response text
      const text = await response.text();
      
      // Debug the raw response
      console.log('Raw API response:', text);
      
      // Parse JSONP response (format: _xfe26({...}))
      const jsonStart = text.indexOf('(') + 1;
      const jsonEnd = text.lastIndexOf(')');
      
      if (jsonStart > 0 && jsonEnd > jsonStart) {
        const jsonString = text.substring(jsonStart, jsonEnd);
        
        try {
          // Parse the extracted JSON
          const data = JSON.parse(jsonString);
          console.log('Parsed mecha details:', data);
          
          if (data && data.data) {
            // Successfully parsed the data
            setMechaDetails(data);
            setSelectedMecha({
              ...mecha,
              // Update the mecha with API data
              title: data.data.title || mecha.title,
              description: data.data.description || mecha.description,
              driver_name: data.data.driver_name,
              driver_born: data.data.driver_born,
              driver_introduction: data.data.driver_introduction,
              // Keep any existing data as fallback
              ...data.data
            });
            setModalOpen(true);
          } else {
            console.error('API returned invalid data structure:', data);
            // Fallback to local data
            setSelectedMecha(mecha);
            setModalOpen(true);
          }
        } catch (parseError) {
          console.error('Error parsing JSON from API response:', parseError);
          // Fallback to local data
          setSelectedMecha(mecha);
          setModalOpen(true);
        }
      } else {
        console.error('Invalid JSONP format in API response');
        // Fallback to local data
        setSelectedMecha(mecha);
        setModalOpen(true);
      }
      
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching mecha details:', error);
      // Fallback to local data if API fails
      setSelectedMecha(mecha);
      setModalOpen(true);
      setIsLoading(false);
    }
  };

  // Function to handle mecha selection with loading effect and open modal
  const handleMechaSelect = async (mecha: Mecha) => {
    await fetchMechaDetails(mecha);
  };

  // Close modal function
  const closeModal = () => {
    setModalOpen(false);
    // Give time for close animation
    setTimeout(() => {
      setSelectedMecha(null);
      setMechaDetails(null);
    }, 300);
  };

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && modalOpen) {
        closeModal();
      }
    };
    
    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [modalOpen]);

  return (
    <PageLayout title="Mecha Break - Strikers Guide" description="Explore the powerful mechas of Mecha Break, from Panther to Pinaka. Learn about their abilities, features, and the pilots who control these formidable machines.">
      <section className="container-section bg-slate-900 animate-fade-in">
        <div className="max-w-6xl mx-auto">
          <h1 className="section-title">Strikers Guide</h1>
          
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <p className="text-lg mb-6">
              The mechas of Mecha Break are advanced combat machines, each with unique capabilities, strengths, and specialized roles on the battlefield.
            </p>
            <p>
              Explore our comprehensive guide to learn about each mecha's abilities, features, and the skilled pilots who control these formidable machines.
            </p>
          </div>
          
          {/* Mecha Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {mechaData.map((mecha) => (
              <div 
                key={mecha.id}
                className="striker-card cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
                onClick={() => handleMechaSelect(mecha)}
              >
                <div className="relative overflow-hidden rounded-t-lg bg-slate-800" style={{ height: '400px', width: '180px', margin: '0 auto' }}>
                  <Image
                    src={mecha.image || ''}
                    alt={mecha.title}
                    width={180}
                    height={400}
                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                    onError={(e) => {
                      // Fallback if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = '/images/mecha_bg.jpeg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-70"></div>
                </div>
                <div className="p-4 bg-slate-800 rounded-b-lg" style={{ width: '180px', margin: '0 auto' }}>
                  <h3 className="striker-name">{mecha.title}</h3>
                  <p className="text-sm text-gray-300 mt-1">{mecha.key}</p>
                  
                  <div className="mt-3 flex justify-between items-center">
                    <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded">
                      {mecha.pilot !== "Unknown" && mecha.pilot ? mecha.pilot : "No Pilot Data"}
                    </span>
                    <button 
                      className="text-blue-400 hover:text-blue-300 text-sm flex items-center"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleMechaSelect(mecha);
                      }}
                    >
                      Details
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Loading overlay */}
          {isLoading && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
            </div>
          )}
          
          {/* Mecha Details Modal */}
          {modalOpen && selectedMecha && (
            <div 
              className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 overflow-y-auto animate-fade-in"
              onClick={closeModal}
            >
              <div 
                className="bg-slate-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto relative animate-slide-up"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <button 
                    onClick={closeModal}
                    className="absolute right-4 top-4 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full z-10 transition-colors"
                    aria-label="Close details"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  
                  <div className="relative h-64 md:h-80">
                    <Image
                      src={selectedMecha.image || ''}
                      alt={selectedMecha.title}
                      fill
                      priority
                      quality={90}
                      style={{ objectFit: 'cover' }}
                      className="rounded-t-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-70"></div>
                    <div className="absolute bottom-0 left-0 p-4 md:p-8">
                      <h2 className="text-2xl md:text-3xl font-bold mb-2">{selectedMecha.title}</h2>
                      <p className="text-gray-300 text-sm md:text-base">{selectedMecha.key}</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    {/* Display API data if available, otherwise fallback to local data */}
                    <div className="mb-6 space-y-4">
                      <p className="text-lg">{mechaDetails?.data?.description || selectedMecha.description}</p>
                      {(mechaDetails?.data?.driver_name || selectedMecha.pilot) && (
                        <p className="text-lg">
                          <span className="font-bold">Pilot:</span> {mechaDetails?.data?.driver_name || selectedMecha.pilot}
                          {(mechaDetails?.data?.driver_born || selectedMecha.pilotBorn) && 
                            ` | Born: ${mechaDetails?.data?.driver_born || selectedMecha.pilotBorn}`
                          }
                        </p>
                      )}
                      {(mechaDetails?.data?.driver_introduction || selectedMecha.pilotIntroduction) && (
                        <p className="text-lg italic">"{mechaDetails?.data?.driver_introduction || selectedMecha.pilotIntroduction}"</p>
                      )}
                    </div>
                    
                    {/* Show features and abilities if available (from local data or processed API data) */}
                    {(selectedMecha.features || selectedMecha.abilities) && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        {selectedMecha.features && (
                          <div className="bg-slate-700 p-6 rounded-lg transition-transform hover:scale-[1.02]">
                            <h3 className="text-xl font-bold mb-4">Key Features</h3>
                            <ul className="list-disc pl-5 space-y-2">
                              {selectedMecha.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        {selectedMecha.abilities && (
                          <div className="bg-slate-700 p-6 rounded-lg transition-transform hover:scale-[1.02]">
                            <h3 className="text-xl font-bold mb-4">Combat Abilities</h3>
                            <ul className="list-disc pl-5 space-y-2">
                              {selectedMecha.abilities.map((ability, index) => (
                                <li key={index}>{ability}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}
                    
                    {/* Display additional information from the API if available */}
                    {mechaDetails?.data && (
                      <div className="bg-slate-700 p-6 rounded-lg mb-6 transition-transform hover:scale-[1.02]">
                        <h3 className="text-xl font-bold mb-4">Additional Data</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {mechaDetails.data.updatetime && (
                            <p><span className="font-semibold">Last Updated:</span> {new Date(parseInt(mechaDetails.data.updatetime) * 1000).toLocaleDateString()}</p>
                          )}
                          {mechaDetails.data.url && (
                            <p><span className="font-semibold">More Info:</span> <a href={mechaDetails.data.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">View Page</a></p>
                          )}
                        </div>
                      </div>
                    )}
                    
                    <div className="bg-slate-700 p-6 rounded-lg mb-6 transition-transform hover:scale-[1.02]">
                      <h3 className="text-xl font-bold mb-4">Combat Strategy</h3>
                      <p>
                        {selectedMecha.title.includes("PANTHER") ? 
                          "Panther excels at flanking maneuvers and ambush tactics. Use its stealth capabilities to sneak behind enemy lines and target vulnerable opponents. Avoid direct confrontations with heavily armored mechas." :
                          `${selectedMecha.title} is most effective when played to its strengths. Focus on utilizing its unique abilities to support your team's strategy and counter enemy mechas.`
                        }
                      </p>
                    </div>
                    
                    <div className="flex justify-end space-x-4">
                      <button 
                        onClick={closeModal}
                        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg transition-colors"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      
      {/* Mecha Combat Roles Section */}
      <section className="container-section bg-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">Mecha Combat Roles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-900 p-6 rounded-lg hover:bg-slate-800 transition-colors">
              <h3 className="text-xl font-bold mb-4">Assault</h3>
              <p className="mb-4">
                Assault mechas are frontline fighters designed for direct engagement with enemy forces. They typically feature balanced offensive and defensive capabilities.
              </p>
              <p>
                Mechas like Panther and Hellfire excel at closing in on enemies and dealing devastating damage in close to medium range.
              </p>
            </div>
            
            <div className="bg-slate-900 p-6 rounded-lg hover:bg-slate-800 transition-colors">
              <h3 className="text-xl font-bold mb-4">Support</h3>
              <p className="mb-4">
                Support mechas provide tactical advantages through area control, ally buffs, or enemy debuffs. They can turn the tide of battle with their utility abilities.
              </p>
              <p>
                Mechas like Luminae and Narukami can control the battlefield with their specialized abilities.
              </p>
            </div>
            
            <div className="bg-slate-900 p-6 rounded-lg hover:bg-slate-800 transition-colors">
              <h3 className="text-xl font-bold mb-4">Artillery</h3>
              <p className="mb-4">
                Artillery mechas specialize in long-range combat, bombarding enemies from a safe distance with devastating firepower.
              </p>
              <p>
                Mechas like Pinaka can deliver powerful attacks while staying safely behind the frontlines.
              </p>
            </div>
            
            <div className="bg-slate-900 p-6 rounded-lg hover:bg-slate-800 transition-colors">
              <h3 className="text-xl font-bold mb-4">Scout</h3>
              <p className="mb-4">
                Scout mechas focus on mobility and reconnaissance, using speed and stealth to gather information and strike vulnerable targets.
              </p>
              <p>
                Mechas like Falcon and Skyraider can quickly traverse the battlefield and perform hit-and-run tactics.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
} 