import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, Phone, Check, MapPin } from 'lucide-react';
import { services, getServiceBySlug } from '@/data/services';
import { locations } from '@/data/locations';
import { siteConfig } from '@/data/config';
import type { Metadata } from 'next';

interface Props {
  params: { service: string };
}

export async function generateStaticParams() {
  return services.map((service) => ({
    service: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getServiceBySlug(params.service);
  if (!service) return { title: 'Service Not Found' };

  return {
    title: `${service.name} Services in New Jersey`,
    description: `Professional ${service.name.toLowerCase()} services across New Jersey. ${service.shortDescription} Free estimates available.`,
    openGraph: {
      title: `${service.name} | New Jersey Basements`,
      description: service.shortDescription,
    },
  };
}

export default function ServicePage({ params }: Props) {
  const service = getServiceBySlug(params.service);
  
  if (!service) {
    notFound();
  }

  const relatedServices = services
    .filter(s => s.category === service.category && s.slug !== service.slug)
    .slice(0, 3);
    
  const featuredLocations = locations.slice(0, 12);

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 border-b">
        <div className="container-custom">
          <nav className="text-sm">
            <ol className="flex items-center gap-2">
              <li><Link href="/" className="text-gray-500 hover:text-primary-700">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><Link href="/services" className="text-gray-500 hover:text-primary-700">Services</Link></li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-900 font-medium">{service.name}</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-800 text-white py-16 md:py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
                {service.name} in New Jersey
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                {service.description}
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
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="font-display text-xl font-bold mb-6">Why Choose Us for {service.name}</h3>
                <ul className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="font-display text-3xl font-bold text-gray-900 mb-6">
                Professional {service.name} Services
              </h2>
              
              <div className="prose prose-lg max-w-none mb-12">
                <p>
                  At New Jersey Basements, we specialize in delivering exceptional {service.name.toLowerCase()} services 
                  to homeowners across the Garden State. Our experienced team understands the unique challenges 
                  of basement projects in New Jersey, from high water tables to strict building codes.
                </p>
                
                <p>
                  Every {service.name.toLowerCase()} project begins with a thorough assessment of your space and 
                  a detailed discussion of your goals. We provide transparent pricing, realistic timelines, and 
                  keep you informed at every step of the process.
                </p>

                <h3>What's Included</h3>
                <ul>
                  <li>Initial consultation and space assessment</li>
                  <li>Detailed project proposal and pricing</li>
                  <li>Permit acquisition and code compliance</li>
                  <li>Professional installation by our in-house team</li>
                  <li>Quality materials and workmanship warranty</li>
                  <li>Final walkthrough and satisfaction guarantee</li>
                </ul>

                <h3>Our Process</h3>
                <ol>
                  <li><strong>Free Consultation:</strong> We visit your home, assess your basement, and discuss your vision.</li>
                  <li><strong>Custom Proposal:</strong> You'll receive a detailed scope of work and transparent pricing.</li>
                  <li><strong>Permit & Planning:</strong> We handle all permits and finalize the project plan.</li>
                  <li><strong>Expert Installation:</strong> Our skilled team completes the work with minimal disruption.</li>
                  <li><strong>Final Inspection:</strong> We ensure everything meets our high standards and your expectations.</li>
                </ol>
              </div>

              {/* Benefits on Mobile */}
              <div className="lg:hidden bg-primary-50 rounded-2xl p-6 mb-12">
                <h3 className="font-display text-xl font-bold text-gray-900 mb-4">Key Benefits</h3>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary-700 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Service Areas */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="font-display text-2xl font-bold text-gray-900 mb-6">
                  {service.name} Service Areas
                </h3>
                <p className="text-gray-600 mb-6">
                  We provide {service.name.toLowerCase()} services throughout New Jersey, including:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {featuredLocations.map((location) => (
                    <Link
                      key={location.slug}
                      href={`/services/${service.slug}/${location.slug}`}
                      className="flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors"
                    >
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <span className="font-medium">{location.name}</span>
                    </Link>
                  ))}
                </div>
                <Link 
                  href="/locations" 
                  className="inline-flex items-center gap-2 text-primary-700 font-medium mt-6 hover:gap-3 transition-all"
                >
                  View All Service Areas <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Contact Card */}
              <div className="card p-6 mb-8 sticky top-24">
                <h3 className="font-display text-xl font-bold text-gray-900 mb-4">
                  Get a Free Estimate
                </h3>
                <p className="text-gray-600 mb-6">
                  Ready to start your {service.name.toLowerCase()} project? Contact us for a free, no-obligation estimate.
                </p>
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
                  <button type="submit" className="btn-accent w-full">
                    Request Estimate
                  </button>
                </form>
                <p className="text-center text-gray-500 text-sm mt-4">
                  Or call <a href={`tel:${siteConfig.phone}`} className="text-primary-700 font-medium">{siteConfig.phone}</a>
                </p>
              </div>

              {/* Related Services */}
              {relatedServices.length > 0 && (
                <div className="card p-6">
                  <h3 className="font-display text-lg font-bold text-gray-900 mb-4">
                    Related Services
                  </h3>
                  <ul className="space-y-3">
                    {relatedServices.map((related) => (
                      <li key={related.slug}>
                        <Link 
                          href={`/services/${related.slug}`}
                          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors"
                        >
                          <span className="font-medium">{related.name}</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-900 text-white py-16">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Transform your basement with our professional {service.name.toLowerCase()} services. Contact us today for a free estimate.
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
