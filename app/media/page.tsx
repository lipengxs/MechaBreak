'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PageLayout from '../../components/layout/PageLayout';

// Sample media data
const mediaData = {
  videos: [
    {
      id: "trailer-2023",
      title: "Mecha Break - Official Cinematic Trailer 2023",
      date: "October 15, 2023",
      thumbnail: "/images/video-thumbnail-trailer.jpg",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Experience the epic world of Mecha Break in this cinematic trailer showcasing the game's stunning visuals, intense combat, and rich storyline."
    },
    {
      id: "gameplay-reveal",
      title: "Gameplay Reveal - Mecha Break Alpha",
      date: "November 5, 2023",
      thumbnail: "/images/video-thumbnail-gameplay.jpg",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Get your first look at Mecha Break's gameplay mechanics, including mecha customization, combat systems, and multiplayer features."
    },
    {
      id: "dev-diary-1",
      title: "Developer Diary #1 - The Vision",
      date: "December 10, 2023",
      thumbnail: "/images/video-thumbnail-dev-diary.jpg",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "The development team discusses their vision for Mecha Break, the inspiration behind the game, and their goals for creating a unique mecha combat experience."
    },
    {
      id: "striker-showcase",
      title: "Striker Showcase - Meet the Mechas",
      date: "January 20, 2024",
      thumbnail: "/images/video-thumbnail-strikers.jpg",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "An in-depth look at the various Strikers (mechas) available in Mecha Break, detailing their unique abilities, strengths, and playstyles."
    },
    {
      id: "map-overview",
      title: "Map Overview - Battlefields of Mecha Break",
      date: "February 15, 2024",
      thumbnail: "/images/video-thumbnail-maps.jpg",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Explore the diverse maps of Mecha Break, from futuristic cities to orbital stations, each with unique features and strategic opportunities."
    },
    {
      id: "beta-announcement",
      title: "Closed Beta Announcement",
      date: "March 1, 2024",
      thumbnail: "/images/video-thumbnail-beta.jpg",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Exciting news about the upcoming closed beta test for Mecha Break, including details on how to participate and what to expect."
    }
  ],
  screenshots: [
    {
      id: "screenshot-1",
      title: "Neo Tokyo Battle",
      description: "An intense battle in the heart of Neo Tokyo, showcasing the urban environment and destructible buildings.",
      image: "/images/screenshot-neo-tokyo.jpg"
    },
    {
      id: "screenshot-2",
      title: "Falcon Striker in Action",
      description: "The versatile Falcon Striker unleashing its Rapid Strike ability against multiple enemies.",
      image: "/images/screenshot-falcon.jpg"
    },
    {
      id: "screenshot-3",
      title: "Arctic Outpost Snowstorm",
      description: "Navigating through a blinding snowstorm at the Arctic Outpost map, demonstrating the game's dynamic weather system.",
      image: "/images/screenshot-arctic.jpg"
    },
    {
      id: "screenshot-4",
      title: "Mecha Customization Interface",
      description: "A glimpse of the detailed mecha customization system, allowing players to personalize their Strikers.",
      image: "/images/screenshot-customization.jpg"
    },
    {
      id: "screenshot-5",
      title: "Orbital Station Zero-G Combat",
      description: "Unique zero-gravity combat in the Orbital Station map, showcasing the three-dimensional movement system.",
      image: "/images/screenshot-orbital.jpg"
    },
    {
      id: "screenshot-6",
      title: "Team Battle Formation",
      description: "A coordinated team preparing for battle, highlighting the game's emphasis on teamwork and strategy.",
      image: "/images/screenshot-team.jpg"
    },
    {
      id: "screenshot-7",
      title: "Canyon Ruins Vertical Combat",
      description: "Vertical combat in the Canyon Ruins map, with Strikers battling across multiple elevation levels.",
      image: "/images/screenshot-canyon.jpg"
    },
    {
      id: "screenshot-8",
      title: "Quantum Core Airdrop",
      description: "A Striker claiming the powerful Quantum Core airdrop, surrounded by the energy field it generates.",
      image: "/images/screenshot-airdrop.jpg"
    }
  ],
  artwork: [
    {
      id: "artwork-1",
      title: "Mecha Break Key Art",
      description: "Official key art for Mecha Break, featuring the flagship Falcon Striker against a futuristic cityscape.",
      image: "/images/artwork-key-art.jpg"
    },
    {
      id: "artwork-2",
      title: "Striker Concept Art - Titan",
      description: "Early concept art for the Titan Striker, showing its evolution from initial sketches to final design.",
      image: "/images/artwork-titan-concept.jpg"
    },
    {
      id: "artwork-3",
      title: "Neo Tokyo Environment Design",
      description: "Detailed environment design for the Neo Tokyo map, showcasing the architectural style and atmosphere.",
      image: "/images/artwork-neo-tokyo.jpg"
    },
    {
      id: "artwork-4",
      title: "Character Art - Pilots",
      description: "Character designs for the various pilots that operate the Strikers in the world of Mecha Break.",
      image: "/images/artwork-pilots.jpg"
    },
    {
      id: "artwork-5",
      title: "Weapon Systems Illustration",
      description: "Technical illustrations of various weapon systems available for Strikers, including their mechanisms and effects.",
      image: "/images/artwork-weapons.jpg"
    },
    {
      id: "artwork-6",
      title: "Mecha Break Logo Evolution",
      description: "The evolution of the Mecha Break logo from early concepts to the final design.",
      image: "/images/artwork-logo.jpg"
    }
  ]
};

export default function Media() {
  const [activeTab, setActiveTab] = useState('videos');
  const [selectedVideo, setSelectedVideo] = useState(mediaData.videos[0]);

  return (
    <PageLayout title="Mecha Break - Media" description="Explore videos, screenshots, and artwork from Mecha Break, the revolutionary mecha combat game. Download media assets and stay updated with the latest visual content.">
      <section className="container-section bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h1 className="section-title">Media Gallery</h1>
          
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <p className="text-lg mb-6">
              Explore the visual world of Mecha Break through our collection of videos, screenshots, and artwork. Get a glimpse of the game's stunning visuals, intense combat, and unique mecha designs.
            </p>
          </div>
          
          {/* Media Tabs */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-slate-800 rounded-lg p-1">
              <button 
                className={`px-6 py-2 rounded-md transition-colors ${activeTab === 'videos' ? 'bg-blue-500 text-white' : 'hover:bg-slate-700'}`}
                onClick={() => setActiveTab('videos')}
              >
                Videos
              </button>
              <button 
                className={`px-6 py-2 rounded-md transition-colors ${activeTab === 'screenshots' ? 'bg-blue-500 text-white' : 'hover:bg-slate-700'}`}
                onClick={() => setActiveTab('screenshots')}
              >
                Screenshots
              </button>
              <button 
                className={`px-6 py-2 rounded-md transition-colors ${activeTab === 'artwork' ? 'bg-blue-500 text-white' : 'hover:bg-slate-700'}`}
                onClick={() => setActiveTab('artwork')}
              >
                Artwork
              </button>
            </div>
          </div>
          
          {/* Videos Content */}
          {activeTab === 'videos' && (
            <div className="videos-content">
              <div className="mb-8">
                <div className="aspect-w-16 aspect-h-9 bg-slate-800 rounded-lg overflow-hidden">
                  <iframe 
                    src={selectedVideo.embedUrl} 
                    title={selectedVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="mt-4">
                  <h2 className="text-2xl font-bold">{selectedVideo.title}</h2>
                  <p className="text-gray-400 mb-2">{selectedVideo.date}</p>
                  <p>{selectedVideo.description}</p>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-4">More Videos</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {mediaData.videos.map((video) => (
                  <div 
                    key={video.id} 
                    className={`video-thumbnail cursor-pointer transition-transform hover:scale-105 ${selectedVideo.id === video.id ? 'ring-2 ring-blue-500' : ''}`}
                    onClick={() => setSelectedVideo(video)}
                  >
                    <div className="relative aspect-video rounded-lg overflow-hidden">
                      <Image
                        src={video.thumbnail}
                        alt={video.title}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 bg-blue-500 bg-opacity-80 rounded-full flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <h4 className="mt-2 font-semibold line-clamp-1">{video.title}</h4>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Screenshots Content */}
          {activeTab === 'screenshots' && (
            <div className="screenshots-content">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {mediaData.screenshots.map((screenshot) => (
                  <div key={screenshot.id} className="screenshot-item group">
                    <div className="relative aspect-video rounded-lg overflow-hidden">
                      <Image
                        src={screenshot.image}
                        alt={screenshot.title}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="transition-transform group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                        <div className="p-4">
                          <h3 className="font-bold text-white">{screenshot.title}</h3>
                          <p className="text-sm text-gray-300">{screenshot.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Artwork Content */}
          {activeTab === 'artwork' && (
            <div className="artwork-content">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {mediaData.artwork.map((art) => (
                  <div key={art.id} className="artwork-item">
                    <div className="relative aspect-square rounded-lg overflow-hidden mb-4">
                      <Image
                        src={art.image}
                        alt={art.title}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="transition-transform hover:scale-105"
                      />
                    </div>
                    <h3 className="font-bold text-xl mb-2">{art.title}</h3>
                    <p className="text-gray-300">{art.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
      
      {/* Download Section */}
      <section className="container-section bg-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">Media Kit</h2>
          
          <div className="text-center mb-8">
            <p className="mb-6">
              Download our comprehensive media kit containing high-resolution logos, key art, character renders, and more for press and content creation purposes.
            </p>
            <Link href="/downloads/mecha-break-media-kit.zip" className="btn-primary">
              Download Media Kit (2.3 GB)
            </Link>
          </div>
          
          <div className="bg-slate-900 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Media Usage Guidelines</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>All Mecha Break assets are copyrighted and owned by Quantum Forge Studios.</li>
              <li>You may use these assets for non-commercial content creation, reviews, and news coverage.</li>
              <li>Please credit "Mecha Break by Quantum Forge Studios" when using these assets.</li>
              <li>Do not alter or modify the logos or key art without permission.</li>
              <li>For commercial usage requests, please contact our PR team at press@quantumforge.com</li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* Community Creations */}
      <section className="container-section bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title">Community Creations</h2>
          
          <div className="text-center mb-12">
            <p className="mb-6">
              We love seeing creative content from our community! Check out these amazing fan-made artworks, videos, and cosplays inspired by Mecha Break.
            </p>
            <p>
              Want to see your creation featured here? Tag your content with #MechaBreak on social media or submit it through our community portal.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* This would be populated with actual community content */}
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="community-item bg-slate-800 rounded-lg overflow-hidden">
                <div className="relative aspect-square">
                  <Image
                    src={`/images/community-${item}.jpg`}
                    alt={`Community Creation ${item}`}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-bold">Fan Art #{item}</h4>
                  <p className="text-sm text-gray-400">By Community Member</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link href="/community" className="btn-secondary">
              View More Community Creations
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
} 