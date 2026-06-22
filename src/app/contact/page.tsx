import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Free Roofing Estimate",
  description:
    "Contact AZ Pro Contractors LLC for a free roofing estimate in Phoenix, AZ. Call 623-246-7985 or fill out our online form. 10008 W Madrugada Ct, Phoenix, AZ 85037.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[#0f2440] py-20">
        <div className="container-max px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get your free roofing estimate today. We respond to all inquiries within 24 hours.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="heading-primary mb-6">Request a Free Estimate</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our team will contact you within 24 hours to schedule your free roof inspection and estimate.
              </p>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent outline-none transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent outline-none transition-all"
                      placeholder="Smith"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent outline-none transition-all"
                    placeholder="(623) 000-0000"
                  />
                </div>
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">Property Address</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent outline-none transition-all"
                    placeholder="123 Main St, Phoenix, AZ"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Service Needed</label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Select a service...</option>
                    <option value="repair">Roof Repair</option>
                    <option value="replacement">Roof Replacement</option>
                    <option value="tile">Tile Roofing</option>
                    <option value="foam">Foam Roofing</option>
                    <option value="commercial">Commercial Roofing</option>
                    <option value="inspection">Roof Inspection</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us about your roofing needs..."
                  />
                </div>
                <button type="submit" className="btn-primary w-full text-lg">
                  Request Free Estimate →
                </button>
                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to our <a href="/privacy-policy" className="underline">Privacy Policy</a>.
                </p>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <div className="bg-[var(--color-gray-light)] rounded-2xl p-8 mb-8">
                <h3 className="heading-secondary mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">📍</span>
                    <div>
                      <h4 className="font-bold text-[var(--color-primary)]">Address</h4>
                      <p className="text-gray-600">10008 W Madrugada Ct<br />Phoenix, AZ 85037<br />United States</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">📞</span>
                    <div>
                      <h4 className="font-bold text-[var(--color-primary)]">Phone</h4>
                      <a href="tel:623-246-7985" className="text-[var(--color-accent)] font-semibold text-lg hover:underline">(623) 246-7985</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">🕐</span>
                    <div>
                      <h4 className="font-bold text-[var(--color-primary)]">Business Hours</h4>
                      <p className="text-gray-600">Monday – Saturday: 7:00 AM – 6:00 PM<br />Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call CTA */}
              <div className="bg-gradient-to-br from-[var(--color-primary)] to-[#0f2440] rounded-2xl p-8 text-white mb-8">
                <h3 className="text-xl font-bold mb-4">Prefer to Call?</h3>
                <p className="text-gray-300 mb-6">
                  Speak directly with our roofing experts. We&apos;re available Monday through Saturday.
                </p>
                <a href="tel:623-246-7985" className="btn-primary w-full text-center block text-lg">
                  📞 Call (623) 246-7985
                </a>
              </div>

              {/* Map Placeholder */}
              <div className="bg-[var(--color-gray-light)] rounded-2xl p-8 border">
                <h3 className="heading-secondary mb-4">Our Location</h3>
                <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327.5!2d-112.25!3d33.44!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDI2JzI0LjAiTiAxMTLCsDE1JzAwLjAiVw!5e0!3m2!1sen!2sus!4v1"
                    width="100%"
                    height="256"
                    style={{ border: 0, borderRadius: "0.5rem" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="AZ Pro Contractors Location"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
