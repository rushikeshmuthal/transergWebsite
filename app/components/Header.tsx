'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import Image from 'next/image';
import Logo from '../assets/transerglogo-removebg-preview.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/60 backdrop-blur-xl border border-gray-200/20 shadow-sm mx-4 mt-4 rounded-2xl' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <Image src={Logo} alt="Transerg Logo" className="h-10 w-10 relative" width={40} height={40} />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                Transerg
              </span>
              <span className="text-xs text-gray-500">Where Tomorrow's Fun Meets Modern Tech!</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/blog", label: "Blog" },
              { href: "/services", label: "Services" },
              { href: "/use-cases", label: "Use Cases" },
              { href: "/contact", label: "Contact" }
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-gray-700 hover:text-indigo-600 font-medium transition-colors group"
              >
                {item.label}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>
            ))}
            <Button 
              asChild 
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-md hover:shadow-xl transition-all duration-300 rounded-xl"
            >
              <Link href="/contact" className="flex items-center gap-2">
                Get Started
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </Button>
          </nav>

          <button
            className="md:hidden relative p-2 rounded-lg text-gray-700 hover:text-indigo-600 focus:outline-none transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
            <svg className="w-6 h-6 relative" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transform transition-all duration-300 ${
          isMenuOpen 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}>
          <nav className="py-4 space-y-4 bg-white/80 backdrop-blur-xl rounded-xl mt-2 border border-gray-200/20">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/blog", label: "Blog" },
              { href: "/services", label: "Services" },
              { href: "/use-cases", label: "Use Cases" },
              { href: "/contact", label: "Contact" }
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg font-medium transition-all"
              >
                {item.label}
              </Link>
            ))}
            <div className="px-4">
              <Button 
                asChild 
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-md hover:shadow-xl transition-all duration-300 rounded-xl"
              >
                <Link href="/contact" className="flex items-center justify-center gap-2">
                  Get Started
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 