'use client';
import React from 'react';
import Link from 'next/link';
import Logo from '../assets/transerglogo-removebg-preview.png';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <Image src={Logo} alt="Transerg Logo" className="h-10 w-10 relative" width={40} height={40} />
              </div>
              <span className="text-2xl font-bold">Transerg</span>
            </div>
            <p className="text-gray-400 mb-6">
              Leading provider of AI-powered technology solutions. We help businesses leverage artificial intelligence to drive innovation and growth.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/transerg-llp" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-indigo-600 transition-colors cursor-pointer">
                <FontAwesomeIcon icon={faLinkedinIn} className="w-5 h-5" />
              </a>
              <a href="https://x.com/TransergLLP" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-indigo-600 transition-colors cursor-pointer">
                <FontAwesomeIcon icon={faXTwitter} className="w-5 h-5" />
              </a>
              {/* <a href="https://www.instagram.com/supersalesmind/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-indigo-600 transition-colors cursor-pointer">
                <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
              </a> */}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-gray-400 hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  AI Solutions
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  QA and Testing
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-400 text-center">
            © {new Date().getFullYear()} Transerg LLP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 