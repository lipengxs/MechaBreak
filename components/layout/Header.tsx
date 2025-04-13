'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-slate-900 text-white border-b border-slate-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="flex items-center mb-4 md:mb-0">
            <Link href="/" className="flex items-center">
              <Image 
                src="/logo.png" 
                alt="Mecha Break Logo" 
                width={180} 
                height={50} 
                priority
              />
            </Link>
          </div>

          {/* Main Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            <Link href="/" className="nav-link">
              Home
            </Link>
            <Link href="/news" className="nav-link">
              News
            </Link>
            <Link href="/media" className="nav-link">
              Media
            </Link>
            <div className="relative group">
              <button className="nav-link focus:outline-none flex items-center">
                Guides
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="dropdown-menu">
                <Link href="/guides/map" className="dropdown-item">
                  Map
                </Link>
                <Link href="/strikers" className="dropdown-item">
                  Strikers
                </Link>
                <Link href="/guides/airdrops" className="dropdown-item">
                  Airdrops
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 