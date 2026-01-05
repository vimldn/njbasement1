import Link from 'next/link';
import { Check, Star, Phone, ArrowRight, Shield, Award, Clock, Users } from 'lucide-react';
import { services, serviceCategories } from '@/data/services';
import { locations, counties } from '@/data/locations';
import { siteConfig, testimonials, stats } from '@/data/config';

export default function HomePage() {
  const featuredServices = services.slice(0, 6);
  const featuredLocations = locations.slice(0, 12);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center py-20 lg:py-28">
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium mb-6">
                <Star className="w-4 h-4 text-accent fill-accent" />
                <span>Rated 4.9/5 by 500+ homeowners</span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Transform Your Basement Into
                <span className="text-accent"> Beautiful Living Space</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8 max-w-xl">
                New Jersey's premier basement finishing experts. From design to completion, we handle every detail to create the basement of your dreams.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="/contact" className="btn-accent text-lg px-8 py-4">
                  Get Free Estimate
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <a href={`tel:${siteConfig.phone}`} className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-primary-900 text-lg px-8 py-4">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </div>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-accent" />
                  <span>Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-accent" />
                  <span>Free Estimates</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-accent" />
                  <span>Financing Available</span>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-primary-700 to-primary-600 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-4xl">🏠</span>
                    </div>
                    <p className="text-xl font-semibold">Beautiful Finished Basements</p>
                    <p className="text-gray-200 mt-2">Across New Jersey</p>
                  </div>
                </div>
              </div>
              {/* Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 rounded-xl shadow-xl p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">2,500+</p>
                    <p className="text-gray-600 text-sm">Basements Completed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 border-b">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-3xl md:text-4xl font-bold text-primary-700">{stat.value}</p>
                <p className="text-gray-600 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Basement Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From waterproofing to custom build-outs, we offer comprehensive basement solutions for every need.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredServices.map((service) => (
              <Link 
                key={service.slug}
                href={`/services/${service.slug}`}
                className="card p-6 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-700 transition-colors">
                  <span className="text-2xl group-hover:scale-110 transition-transform">🔨</span>
                </div>
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

          <div className="text-center">
            <Link href="/services" className="btn-primary">
              View All Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why New Jersey Homeowners Choose Us
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                With over 25 years of experience transforming basements across the Garden State, we've built our reputation on quality craftsmanship and exceptional service.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-primary-700" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-gray-900 mb-1">Fully Licensed & Insured</h3>
                    <p className="text-gray-600">NJ HIC licensed contractor with comprehensive liability and workers' comp coverage.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-primary-700" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-gray-900 mb-1">Award-Winning Quality</h3>
                    <p className="text-gray-600">Recognized by Houzz, Angi, and BBB for outstanding customer satisfaction.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary-700" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-gray-900 mb-1">On-Time Completion</h3>
                    <p className="text-gray-600">Clear timelines and milestone scheduling keep your project on track.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-primary-700" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-gray-900 mb-1">In-House Team</h3>
                    <p className="text-gray-600">Our own skilled craftsmen handle every aspect—no subcontractor surprises.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary-50 rounded-2xl p-8 lg:p-12">
              <h3 className="font-display text-2xl font-bold text-gray-900 mb-6">Get Your Free Estimate</h3>
              <form className="space-y-4">
                <div>
                  <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none" />
                </div>
                <div>
                  <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none" />
                </div>
                <div>
                  <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none" />
                </div>
                <div>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none text-gray-600">
                    <option value="">Select Service</option>
                    {services.slice(0, 10).map((service) => (
                      <option key={service.slug} value={service.slug}>{service.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <textarea placeholder="Tell us about your project" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none resize-none" />
                </div>
                <button type="submit" className="btn-accent w-full text-lg py-4">
                  Request Free Estimate
                </button>
              </form>
              <p className="text-center text-gray-500 text-sm mt-4">
                No obligation. We'll respond within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it—hear from homeowners across New Jersey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <div key={index} className="card p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="font-bold text-primary-700">{testimonial.name[0]}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Serving All of New Jersey
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From North Jersey to the Shore, we bring expert basement services to communities across the state.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            {featuredLocations.map((location) => (
              <Link
                key={location.slug}
                href={`/locations/${location.slug}`}
                className="p-4 bg-gray-50 rounded-xl hover:bg-primary-50 hover:text-primary-700 transition-colors text-center font-medium"
              >
                {location.name}
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link href="/locations" className="btn-primary">
              View All Service Areas
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-900 text-white py-16">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Basement?
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
