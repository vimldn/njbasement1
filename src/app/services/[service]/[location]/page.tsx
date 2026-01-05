import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, Phone, Check, MapPin, Star, Clock, Shield, Award } from 'lucide-react';
import { services, getServiceBySlug } from '@/data/services';
import { locations, getLocationBySlug } from '@/data/locations';
import { siteConfig, testimonials } from '@/data/config';
import type { Metadata } from 'next';

interface Props {
  params: { service: string; location: string };
}

export async function generateStaticParams() {
  const params: { service: string; location: string }[] = [];
  
  services.forEach((service) => {
    locations.forEach((location) => {
      params.push({
        service: service.slug,
        location: location.slug,
      });
    });
  });

  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getServiceBySlug(params.service);
  const location = getLocationBySlug(params.location);

  if (!service || !location) {
    return { title: 'Page Not Found' };
  }

  const title = `${service.name} in ${location.name}, NJ`;
  const description = `Professional ${service.name.toLowerCase()} services in ${location.name}, ${location.county} County, New Jersey. ${service.shortDescription} Call for a free estimate!`;

  return {
    title,
    description,
    openGraph: {
      title: `${title} | New Jersey Basements`,
      description,
      type: 'website',
    },
  };
}

export default function ServiceLocationPage({ params }: Props) {
  const service = getServiceBySlug(params.service);
  const location = getLocationBySlug(params.location);

  if (!service || !location) {
    notFound();
  }

  const nearbyLocations = locations
    .filter(l => l.county === location.county && l.slug !== location.slug)
    .slice(0, 6);

  const relatedServices = services
    .filter(s => s.category === service.category && s.slug !== service.slug)
    .slice(0, 4);

  // JSON-LD Schema for Local Business
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `New Jersey Basements - ${location.name}`,
    description: `${service.name} services in ${location.name}, NJ`,
    url: `${siteConfig.url}/services/${service.slug}/${location.slug}`,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: location.name,
      addressRegion: 'NJ',
      addressCountry: 'US',
    },
    areaServed: {
      '@type': 'City',
      name: location.name,
      containedInPlace: {
        '@type': 'State',
        name: 'New Jersey',
      },
    },
    priceRange: '$$',
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
            <ol className="flex items-center gap-2 flex-wrap">
              <li><Link href="/" className="text-gray-500 hover:text-primary-700">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><Link href="/services" className="text-gray-500 hover:text-primary-700">Services</Link></li>
              <li className="text-gray-400">/</li>
              <li><Link href={`/services/${service.slug}`} className="text-gray-500 hover:text-primary-700">{service.name}</Link></li>
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
                <span>Serving {location.name}, {location.county} County</span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
                {service.name} in {location.name}, NJ
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Looking for professional {service.name.toLowerCase()} services in {location.name}? 
                Our experienced team delivers exceptional basement solutions to homeowners throughout {location.county} County.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/contact" className="btn-accent">
                  Get Free Estimate
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <a href={`tel:${siteConfig.phone}`} className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-primary-900">
                  <Phone className="w-5 h-5 mr-2" />
                  {siteConfig.phone}
                </a>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-accent fill-accent" />
                  <span>4.9 Rating</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>Same-Day Response</span>
                </div>
                <div className="flex items-center gap-1">
                  <Shield className="w-4 h-4" />
                  <span>Licensed & Insured</span>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white rounded-2xl p-8 text-gray-900">
                <h3 className="font-display text-xl font-bold mb-6">Request Your Free Estimate</h3>
                <form className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                  />
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                  />
                  <input 
                    type="text" 
                    value={location.name}
                    readOnly
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-600"
                  />
                  <button type="submit" className="btn-accent w-full">
                    Get Free Estimate
                  </button>
                </form>
                <p className="text-center text-gray-500 text-sm mt-4">
                  No obligation • Response within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-white py-8 border-b">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-8 items-center text-gray-600">
            <div className="flex items-center gap-2">
              <Award className="w-6 h-6 text-primary-700" />
              <span>25+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-primary-700" />
              <span>NJ Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-6 h-6 text-accent fill-accent" />
              <span>500+ 5-Star Reviews</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-6 h-6 text-green-600" />
              <span>BBB Accredited</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="font-display text-3xl font-bold text-gray-900 mb-6">
                {service.name} Services in {location.name}
              </h2>
              
              <div className="prose prose-lg max-w-none mb-12">
                <p>
                  {location.name} homeowners trust New Jersey Basements for all their {service.name.toLowerCase()} needs. 
                  As one of {location.county} County's premier basement contractors, we understand the unique 
                  characteristics of homes in {location.name} and deliver solutions tailored to your specific needs.
                </p>

                <p>
                  {location.description}. Whether you're looking to add living space, create a home office, 
                  or solve moisture issues, our team has the expertise to transform your basement into a valuable 
                  asset for your {location.name} home.
                </p>

                <h3>What We Offer {location.name} Homeowners</h3>
                <ul>
                  {service.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>

                <h3>Why {location.name} Residents Choose Us</h3>
                <p>
                  We've completed hundreds of basement projects in {location.county} County, giving us deep 
                  knowledge of local building codes, soil conditions, and common basement challenges in the area. 
                  Our {location.name} customers appreciate:
                </p>
                <ul>
                  <li>Local expertise with {location.county} County building requirements</li>
                  <li>Fast response times for {location.name} area service calls</li>
                  <li>References from satisfied {location.name} neighbors</li>
                  <li>Competitive pricing for {location.name} market</li>
                  <li>Warranty service you can count on</li>
                </ul>

                <h3>Our {service.name} Process</h3>
                <ol>
                  <li><strong>Free In-Home Consultation:</strong> We visit your {location.name} home to assess your basement and discuss your goals.</li>
                  <li><strong>Detailed Proposal:</strong> You'll receive a comprehensive scope of work and transparent pricing.</li>
                  <li><strong>Permit Handling:</strong> We manage all {location.county} County permits and inspections.</li>
                  <li><strong>Expert Installation:</strong> Our skilled team completes your project efficiently and professionally.</li>
                  <li><strong>Final Walkthrough:</strong> We ensure your complete satisfaction before considering the job done.</li>
                </ol>
              </div>

              {/* Mobile Form */}
              <div className="lg:hidden bg-primary-50 rounded-2xl p-6 mb-12">
                <h3 className="font-display text-xl font-bold text-gray-900 mb-4">Get Your Free Estimate</h3>
                <form className="space-y-4">
                  <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none" />
                  <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none" />
                  <button type="submit" className="btn-accent w-full">Request Estimate</button>
                </form>
              </div>

              {/* Testimonial */}
              <div className="bg-gray-50 rounded-2xl p-8 mb-12">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-lg text-gray-700 italic mb-6">
                  "{testimonials[0].text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="font-bold text-primary-700">{testimonials[0].name[0]}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonials[0].name}</p>
                    <p className="text-sm text-gray-600">{testimonials[0].location}</p>
                  </div>
                </div>
              </div>

              {/* Nearby Service Areas */}
              {nearbyLocations.length > 0 && (
                <div className="mb-12">
                  <h3 className="font-display text-2xl font-bold text-gray-900 mb-6">
                    Also Serving Nearby {location.county} County Areas
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {nearbyLocations.map((nearby) => (
                      <Link
                        key={nearby.slug}
                        href={`/services/${service.slug}/${nearby.slug}`}
                        className="flex items-center gap-2 p-4 bg-gray-50 rounded-xl hover:bg-primary-50 hover:text-primary-700 transition-colors"
                      >
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <span className="font-medium">{nearby.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Related Services */}
              {relatedServices.length > 0 && (
                <div>
                  <h3 className="font-display text-2xl font-bold text-gray-900 mb-6">
                    Related Services in {location.name}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {relatedServices.map((related) => (
                      <Link
                        key={related.slug}
                        href={`/services/${related.slug}/${location.slug}`}
                        className="card p-5 hover:-translate-y-1 transition-all duration-300 group"
                      >
                        <h4 className="font-display font-bold text-gray-900 mb-2 group-hover:text-primary-700">
                          {related.name}
                        </h4>
                        <p className="text-gray-600 text-sm mb-3">{related.shortDescription}</p>
                        <span className="text-primary-700 text-sm font-medium inline-flex items-center gap-1">
                          Learn More <ArrowRight className="w-4 h-4" />
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="hidden lg:block lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Quick Contact */}
                <div className="card p-6">
                  <h3 className="font-display text-lg font-bold text-gray-900 mb-4">
                    Questions? We're Here to Help
                  </h3>
                  <a 
                    href={`tel:${siteConfig.phone}`} 
                    className="flex items-center gap-3 p-4 bg-primary-50 rounded-xl hover:bg-primary-100 transition-colors mb-4"
                  >
                    <div className="w-12 h-12 bg-primary-700 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Call Us Now</p>
                      <p className="font-bold text-primary-700">{siteConfig.phone}</p>
                    </div>
                  </a>
                  <p className="text-sm text-gray-600 text-center">
                    Mon-Fri: {siteConfig.businessHours.weekdays}<br />
                    Sat: {siteConfig.businessHours.saturday}
                  </p>
                </div>

                {/* Service Highlights */}
                <div className="card p-6">
                  <h3 className="font-display text-lg font-bold text-gray-900 mb-4">
                    {service.name} Highlights
                  </h3>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* All Services Link */}
                <div className="card p-6">
                  <h3 className="font-display text-lg font-bold text-gray-900 mb-4">
                    All Services in {location.name}
                  </h3>
                  <ul className="space-y-2">
                    {services.slice(0, 5).map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/services/${s.slug}/${location.slug}`}
                          className={`block py-2 px-3 rounded-lg text-sm transition-colors ${
                            s.slug === service.slug 
                              ? 'bg-primary-100 text-primary-700 font-medium' 
                              : 'text-gray-600 hover:bg-gray-50'
                          }`}
                        >
                          {s.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href={`/locations/${location.slug}`}
                    className="inline-flex items-center gap-1 text-primary-700 text-sm font-medium mt-4 hover:gap-2 transition-all"
                  >
                    View All Services <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-900 text-white py-16">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl font-bold mb-4">
            Ready for {service.name} in {location.name}?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied {location.name} homeowners who've transformed their basements with New Jersey Basements.
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
