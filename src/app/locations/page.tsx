import Link from 'next/link';
import { ArrowRight, Phone, MapPin } from 'lucide-react';
import { locations, counties } from '@/data/locations';
import { siteConfig } from '@/data/config';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Service Areas | Basement Services Across New Jersey',
  description: 'New Jersey Basements serves communities across the Garden State. Find professional basement finishing, remodeling, and waterproofing services in your area.',
};

export default function LocationsPage() {
  const locationsByCounty = counties.map(county => ({
    name: county,
    locations: locations.filter(l => l.county === county),
  })).filter(c => c.locations.length > 0);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-800 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Serving All of New Jersey
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              From North Jersey to the Shore, we bring expert basement services to communities across the Garden State. Find your location below.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-accent">
                Get Free Estimate
              </Link>
              <a href={`tel:${siteConfig.phone}`} className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-primary-900">
                <Phone className="w-5 h-5 mr-2" />
                {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-12 border-b">
        <div className="container-custom">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <p className="font-display text-4xl font-bold text-primary-700">{locations.length}+</p>
              <p className="text-gray-600">Communities Served</p>
            </div>
            <div>
              <p className="font-display text-4xl font-bold text-primary-700">{counties.length}</p>
              <p className="text-gray-600">Counties Covered</p>
            </div>
            <div>
              <p className="font-display text-4xl font-bold text-primary-700">2,500+</p>
              <p className="text-gray-600">Projects Completed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations by County */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="font-display text-3xl font-bold text-gray-900 mb-12 text-center">
            Find Your Community
          </h2>

          <div className="space-y-12">
            {locationsByCounty.map((county) => (
              <div key={county.name}>
                <h3 className="font-display text-2xl font-bold text-gray-900 mb-6 pb-3 border-b flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-primary-700" />
                  {county.name} County
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {county.locations.map((location) => (
                    <Link
                      key={location.slug}
                      href={`/locations/${location.slug}`}
                      className="p-4 bg-gray-50 rounded-xl hover:bg-primary-50 hover:text-primary-700 transition-colors group"
                    >
                      <span className="font-medium">{location.name}</span>
                      <ArrowRight className="w-4 h-4 inline-block ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-900 text-white py-16">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl font-bold mb-4">
            Don't See Your Area?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            We may still serve your community! Contact us to confirm service availability in your area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-accent text-lg px-8 py-4">
              Contact Us
            </Link>
            <a href={`tel:${siteConfig.phone}`} className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-primary-900 text-lg px-8 py-4">
              <Phone className="w-5 h-5 mr-2" />
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
