import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from 'lucide-react';
import { siteConfig } from '@/data/config';
import { services } from '@/data/services';
import { locations } from '@/data/locations';

export function Footer() {
  const popularServices = services.slice(0, 8);
  const popularLocations = locations.slice(0, 10);

  return (
    <footer className="bg-primary-900 text-white">
      {/* Main Footer */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                <span className="text-primary-700 font-display font-bold text-xl">NJ</span>
              </div>
              <div>
                <span className="font-display font-bold text-xl text-white block leading-tight">New Jersey</span>
                <span className="font-display font-bold text-xl text-accent block leading-tight">Basements</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              New Jersey's premier basement finishing and remodeling contractor. Transforming basements into beautiful living spaces since 1999.
            </p>
            <div className="flex gap-4">
              <a href={siteConfig.social.facebook} className="w-10 h-10 bg-primary-800 rounded-lg flex items-center justify-center hover:bg-primary-700 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href={siteConfig.social.instagram} className="w-10 h-10 bg-primary-800 rounded-lg flex items-center justify-center hover:bg-primary-700 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={siteConfig.social.youtube} className="w-10 h-10 bg-primary-800 rounded-lg flex items-center justify-center hover:bg-primary-700 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {popularServices.map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className="text-gray-300 hover:text-accent transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-accent font-medium hover:text-accent-light transition-colors">
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6">Service Areas</h3>
            <ul className="space-y-3">
              {popularLocations.map((location) => (
                <li key={location.slug}>
                  <Link href={`/locations/${location.slug}`} className="text-gray-300 hover:text-accent transition-colors">
                    {location.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/locations" className="text-accent font-medium hover:text-accent-light transition-colors">
                  View All Areas →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a href={`tel:${siteConfig.phone}`} className="flex items-start gap-3 text-gray-300 hover:text-accent transition-colors">
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>{siteConfig.phone}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="flex items-start gap-3 text-gray-300 hover:text-accent transition-colors">
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>{siteConfig.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>{siteConfig.address.street}<br />{siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Mon-Fri: {siteConfig.businessHours.weekdays}</p>
                  <p>Sat: {siteConfig.businessHours.saturday}</p>
                  <p>Sun: {siteConfig.businessHours.sunday}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} New Jersey Basements. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-white transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
