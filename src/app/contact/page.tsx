import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Check } from 'lucide-react';
import { siteConfig } from '@/data/config';
import { services } from '@/data/services';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Get Your Free Basement Estimate',
  description: 'Contact New Jersey Basements for a free estimate on basement finishing, remodeling, or waterproofing. Serving all of New Jersey.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-800 text-white py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Get Your Free Estimate
            </h1>
            <p className="text-xl text-gray-200">
              Ready to transform your basement? Contact us today for a free, no-obligation consultation 
              and estimate. Our team responds within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="card p-8">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
                Request Your Free Estimate
              </h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <input 
                    type="tel" 
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input 
                    type="email" 
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">City/Town *</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Service Needed</label>
                    <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none text-gray-600">
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service.slug} value={service.slug}>{service.name}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Project Details</label>
                  <textarea 
                    rows={5}
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none resize-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">How did you hear about us?</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none text-gray-600">
                    <option value="">Select an option</option>
                    <option value="google">Google Search</option>
                    <option value="referral">Friend/Family Referral</option>
                    <option value="social">Social Media</option>
                    <option value="houzz">Houzz</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <button type="submit" className="btn-accent w-full text-lg py-4">
                  Submit Request
                </button>
                <p className="text-center text-gray-500 text-sm">
                  We respect your privacy. Your information will never be shared.
                </p>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Quick Contact */}
              <div className="card p-8">
                <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h2>
                <ul className="space-y-6">
                  <li>
                    <a href={`tel:${siteConfig.phone}`} className="flex items-start gap-4 group">
                      <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center group-hover:bg-primary-700 transition-colors">
                        <Phone className="w-6 h-6 text-primary-700 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Phone</p>
                        <p className="text-primary-700 text-lg">{siteConfig.phone}</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${siteConfig.email}`} className="flex items-start gap-4 group">
                      <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center group-hover:bg-primary-700 transition-colors">
                        <Mail className="w-6 h-6 text-primary-700 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Email</p>
                        <p className="text-primary-700">{siteConfig.email}</p>
                      </div>
                    </a>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary-700" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Office</p>
                      <p className="text-gray-600">
                        {siteConfig.address.street}<br />
                        {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                      <Clock className="w-6 h-6 text-primary-700" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Business Hours</p>
                      <p className="text-gray-600">
                        Mon-Fri: {siteConfig.businessHours.weekdays}<br />
                        Sat: {siteConfig.businessHours.saturday}<br />
                        Sun: {siteConfig.businessHours.sunday}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* What to Expect */}
              <div className="card p-8 bg-primary-50 border-0">
                <h3 className="font-display text-xl font-bold text-gray-900 mb-4">
                  What to Expect
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Response within 24 hours</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Free in-home consultation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Detailed written estimate</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">No pressure, no obligation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Financing options available</span>
                  </li>
                </ul>
              </div>

              {/* Service Area */}
              <div className="card p-8">
                <h3 className="font-display text-xl font-bold text-gray-900 mb-4">
                  Service Area
                </h3>
                <p className="text-gray-600 mb-4">
                  We proudly serve homeowners throughout New Jersey, including Bergen, Essex, Hudson, 
                  Morris, Passaic, Union, Middlesex, Somerset, Monmouth, Ocean, and more.
                </p>
                <Link href="/locations" className="text-primary-700 font-medium hover:text-primary-800">
                  View All Service Areas →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
