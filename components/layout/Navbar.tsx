'use client';

import { useState } from 'react';
import { Menu, MessageCircle, X } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-transparent relative z-50">
      <nav className="flex max-w-7xl lg:px-8 mr-auto ml-auto pt-6 pr-4 pb-6 pl-4 items-center justify-between">
        <div className="flex items-center space-x-3">
          <span className="text-xl font-bold tracking-tight font-geist">Pranamya Jain</span>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden rounded-lg p-2 hover:bg-neutral-100 transition-colors"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Navigation Links */}
        <ul className={`fixed inset-0 z-40 flex flex-col gap-8 lg:static lg:flex lg:flex-row lg:bg-transparent lg:gap-8 lg:backdrop-blur-none bg-white/95 backdrop-blur-md items-center justify-center transition-all duration-300 ${isMobileMenuOpen ? 'flex' : 'hidden'}`}>
          <li><Link href="/" className="hover:text-indigo-600 transition-colors duration-200 text-base font-medium font-geist">Home</Link></li>
          <li><Link href="/case-studies" className="text-base font-medium hover:text-indigo-600 transition-colors duration-200 font-geist">Portfolio</Link></li>
          <li><Link href="/services" className="text-base font-medium hover:text-indigo-600 transition-colors duration-200 font-geist">Services</Link></li>
          <li><Link href="/#about" className="hover:text-indigo-600 transition-colors duration-200 text-base font-medium font-geist">About</Link></li>
          <li><Link href="/contact" className="hover:text-indigo-600 transition-colors duration-200 text-base font-medium font-geist">Contact</Link></li>

          {/* Mobile Only Call to Action */}
          <li className="lg:hidden">
            <Link href="/contact" className="flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-600 px-6 py-3 text-sm font-medium text-white hover:from-indigo-700 hover:to-cyan-700 transition-all duration-200 font-geist">
              <MessageCircle className="h-4 w-4" />
              Start Project
            </Link>
          </li>
        </ul>

        {/* Desktop CTA Button */}
        {/* Desktop CTA Button */}
        <Link
          href="/contact"
          className="hidden lg:flex gap-2 text-sm font-medium text-white font-geist rounded-full shadow-lg items-center justify-center hover:scale-105 transition-transform duration-200 group relative overflow-hidden"
          style={{
            width: '150px',
            height: '55px',
            borderRadius: '45px',
            border: 'none',
            backgroundColor: 'rgb(151, 95, 255)',
            boxShadow: '0px 10px 10px rgb(210, 187, 253) inset, 0px 5px 10px rgba(5, 5, 5, 0.212), 0px -10px 10px rgb(124, 54, 255) inset',
            cursor: 'pointer'
          }}
        >
          <span className="relative z-10 flex items-center gap-2">
            Start Project
          </span>
          {/* Decorative blurs */}
          <span className="absolute w-[70%] h-[2px] bg-[rgba(250,250,250,0.678)] blur-[1px] top-[7px] rounded-[50%] left-[15%] z-0"></span>
          <span className="absolute w-[70%] h-[2px] bg-[rgba(250,250,250,0.137)] blur-[1px] bottom-[7px] rounded-[50%] left-[15%] z-0"></span>
        </Link>
      </nav>
    </header>
  );
}
