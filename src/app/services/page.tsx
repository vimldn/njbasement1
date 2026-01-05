import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import { services, serviceCategories } from '@/data/services';
import { siteConfig } from '@/data/config';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Basement Services | Complete Basement Solutions',
  description: 'Explore our comprehensive basement services including finishing, remodeling, waterproofing, and custom build-outs. Serving all of New Jersey.',
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-800 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Our Basement Services
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              From initial design to final cleanup, we offer comprehensive basement solutions. Every service is performed by our licensed, in-house team to ensure quality and consistency.
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

      {/* Services by Category */}
      <section className="section-padding">
        <div className="container-custom">
          {serviceCategories.map((category) => {
            const categoryServices = services.filter(s => s.category === category.slug);
            if (categoryServices.length === 0) return null;
            
            return (
              <div key={category.slug} className="mb-16 last:mb-0">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900 mb-8 pb-4 border-b">
                  {category.name}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryServices.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="card p-6 hover:-translate-y-1 transition-all duration-300 group"
                    >
                      <h3 className="font-display text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-700 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-gray-600 mb-4">{service.shortDescription}</p>
                      <span className="text-primary-700 font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                        Learn More <ArrowRight className="w-4 h-4" />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-900 text-white py-16">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl font-bold mb-4">
            Not Sure What You Need?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Our experts will assess your basement and recommend the perfect solutions for your goals and budget.
          </p>
          <Link href="/contact" className="btn-accent text-lg px-8 py-4">
            Schedule Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
