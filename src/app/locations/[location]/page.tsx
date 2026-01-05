import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, Phone, MapPin, Star, Check } from 'lucide-react';
import { services, serviceCategories } from '@/data/services';
import { locations, getLocationBySlug } from '@/data/locations';
import { siteConfig, testimonials } from '@/data/config';
import type { Metadata } from 'next';

interface Props {
  params: { location: string };
}

export async function generateStaticParams() {
  return locations.map((location) => ({
    location: location.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const location = getLocationBySlug(params.location);
  if (!location) return { title: 'Location Not Found' };

  return {
    title: `Basement Services in ${location.name}, NJ`,
    description: `Professional basement finishing, remodeling, and waterproofing services in ${location.name}, ${location.county} County, New Jersey. Free estimates available!`,
    openGraph: {
      title: `Basement Services in ${location.name} | New Jersey Basements`,
      description: `Expert basement contractors serving ${location.name} and ${location.county} County.`,
    },
  };
}

export default function LocationPage({ params }: Props) {
  const location = getLocationBySlug(params.location);
  
  if (!location) {
    notFound();
  }

  const nearbyLocations = locations
    .filter(l => l.county === location.county && l.slug !== location.slug)
    .slice(0, 8);

  const featuredServices = services.slice(0, 8);

  // JSON-LD Schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `New Jersey Basements - ${location.name}`,
    description: `Basement finishing, remodeling, and waterproofing services in ${location.name}, NJ`,
    url: `${siteConfig.url}/locations/${location.slug}`,
    telephone: siteConfig.phone,
    areaServed: {
      '@type': 'City',
      name: location.name,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '500',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 border-b">
        <div className="container-custom">
          <nav className="text-sm">
            <ol className="flex items-center gap-2">
              <li><Link href="/" className="text-gray-500 hover:text-primary-700">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><Link href="/locations" className="text-gray-500 hover:text-primary-700">Locations</Link></li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-900 font-medium">{location.name}</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-800 text-white py-16 md:py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium mb-6">
                <MapPin className="w-4 h-4" />
                <span>{location.county} County, New Jersey</span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Basement Services in {location.name}, NJ
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                {location.description}. Our expert team provides comprehensive basement services 
                to homeowners throughout {location.name} and {location.county} County.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-accent">
                  Get Free Estimate
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <a href={`tel:${siteConfig.phone}`} className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-primary-900">
                  <Phone className="w-5 h-5 mr-2" />
                  {siteConfig.phone}
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white rounded-2xl p-8 text-gray-900">
                <h3 className="font-display text-xl font-bold mb-6">Request Your Free Estimate</h3>
                <form className="space-y-4">
                  <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none" />
                  <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none" />
                  <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none" />
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none text-gray-600">
                    <option value="">Select Service</option>
                    {services.slice(0, 10).map((service) => (
                      <option key={service.slug} value={service.slug}>{service.name}</option>
                    ))}
                  </select>
                  <button type="submit" className="btn-accent w-full">Get Free Estimate</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services in Location */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="font-display text-3xl font-bold text-gray-900 mb-4 text-center">
            Our Services in {location.name}
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Complete basement solutions from design to completion, all performed by our licensed, insured team.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featuredServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}/${location.slug}`}
                className="card p-6 hover:-translate-y-1 transition-all duration-300 group"
              >
                <h3 className="font-display text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-700 transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{service.shortDescription}</p>
                <span className="text-primary-700 font-medium text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link href="/services" className="btn-primary">
              View All Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl font-bold text-gray-900 mb-6">
                Why {location.name} Homeowners Trust Us
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                With extensive experience serving {location.county} County, we understand the unique 
                needs of {location.name} homes and deliver basement solutions that exceed expectations.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">Local Expertise:</span>
                    <span className="text-gray-600"> Deep knowledge of {location.county} County building codes and requirements</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">Fast Response:</span>
                    <span className="text-gray-600"> Quick service for {location.name} area homeowners</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">Proven Track Record:</span>
                    <span className="text-gray-600"> Hundreds of satisfied customers across {location.county} County</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">Warranty Protection:</span>
                    <span className="text-gray-600"> Comprehensive warranties backed by local service</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-accent fill-accent" />
                ))}
              </div>
              <p className="text-lg text-gray-700 italic mb-6">
                "{testimonials[1].text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="font-bold text-primary-700 text-lg">{testimonials[1].name[0]}</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonials[1].name}</p>
                  <p className="text-gray-600">{testimonials[1].location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      {nearbyLocations.length > 0 && (
        <section className="section-padding">
          <div className="container-custom">
            <h2 className="font-display text-3xl font-bold text-gray-900 mb-4 text-center">
              Also Serving Nearby {location.county} County Areas
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Our team provides the same excellent service to communities throughout {location.county} County.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {nearbyLocations.map((nearby) => (
                <Link
                  key={nearby.slug}
                  href={`/locations/${nearby.slug}`}
                  className="flex items-center gap-2 p-4 bg-gray-50 rounded-xl hover:bg-primary-50 hover:text-primary-700 transition-colors"
                >
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span className="font-medium">{nearby.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-primary-900 text-white py-16">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl font-bold mb-4">
            Ready to Transform Your {location.name} Basement?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Schedule your free consultation today and take the first step toward the basement of your dreams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-accent text-lg px-8 py-4">
              Get Free Estimate
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
