'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import { siteConfig } from '@/data/config';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top bar */}
      <div className="bg-primary-900 text-white py-2">
        <div className="container-custom flex justify-between items-center text-sm">
          <span className="hidden sm:block">Serving All of New Jersey</span>
          <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2 hover:text-accent transition-colors">
            <Phone className="w-4 h-4" />
            <span className="font-semibold">{siteConfig.phone}</span>
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary-700 rounded-xl flex items-center justify-center">
              <span className="text-white font-display font-bold text-xl">NJ</span>
            </div>
            <div>
              <span className="font-display font-bold text-xl text-primary-900 block leading-tight">New Jersey</span>
              <span className="font-display font-bold text-xl text-accent block leading-tight">Basements</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className="font-medium text-gray-700 hover:text-primary-700 transition-colors">
              Home
            </Link>
            
            <div className="relative group">
              <button 
                className="flex items-center gap-1 font-medium text-gray-700 hover:text-primary-700 transition-colors"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                Services
                <ChevronDown className="w-4 h-4" />
              </button>
              <div 
                className={`absolute top-full left-0 pt-2 ${isServicesOpen ? 'block' : 'hidden'}`}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-3 w-64">
                  <Link href="/services/basement-finishing" className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-700">
                    Basement Finishing
                  </Link>
                  <Link href="/services/basement-remodeling" className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-700">
                    Basement Remodeling
                  </Link>
                  <Link href="/services/waterproofing-moisture-control" className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-700">
                    Waterproofing
                  </Link>
                  <Link href="/services/home-theater-build-outs" className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-700">
                    Home Theater
                  </Link>
                  <Link href="/services/basement-bathroom-additions" className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-700">
                    Bathroom Additions
                  </Link>
                  <div className="border-t border-gray-100 mt-2 pt-2">
                    <Link href="/services" className="block px-4 py-2 text-primary-700 font-medium hover:bg-primary-50">
                      View All Services →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/locations" className="font-medium text-gray-700 hover:text-primary-700 transition-colors">
              Service Areas
            </Link>
            
            <Link href="/about" className="font-medium text-gray-700 hover:text-primary-700 transition-colors">
              About Us
            </Link>
            
            <Link href="/contact" className="font-medium text-gray-700 hover:text-primary-700 transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/contact" className="btn-accent">
              Free Estimate
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
            <div className="flex flex-col gap-4">
              <Link href="/" className="font-medium text-gray-700">Home</Link>
              <Link href="/services" className="font-medium text-gray-700">Services</Link>
              <Link href="/locations" className="font-medium text-gray-700">Service Areas</Link>
              <Link href="/about" className="font-medium text-gray-700">About Us</Link>
              <Link href="/contact" className="font-medium text-gray-700">Contact</Link>
              <Link href="/contact" className="btn-accent text-center mt-2">
                Free Estimate
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
