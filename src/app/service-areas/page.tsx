import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Areas - Phoenix & Surrounding Cities",
  description:
    "AZ Pro Contractors LLC serves Phoenix, Glendale, Peoria, Scottsdale, Mesa, Tempe, Chandler, Gilbert, Avondale, Goodyear, Surprise, and more Arizona cities. Call 623-246-7985.",
};

const serviceAreas = [
  { city: "Phoenix", description: "Our home base. Full roofing services for all Phoenix neighborhoods and zip codes." },
  { city: "Glendale", description: "Roof repair, replacement, and maintenance for Glendale homeowners and businesses." },
  { city: "Peoria", description: "Trusted roofing contractor serving the Peoria community with premium services." },
  { city: "Scottsdale", description: "High-end roofing solutions for Scottsdale's luxury homes and commercial properties." },
  { city: "Mesa", description: "Comprehensive roofing services for Mesa residents — repairs, replacements, and more." },
  { city: "Tempe", description: "Fast, reliable roofing for Tempe homeowners, rentals, and commercial buildings." },
  { city: "Chandler", description: "Expert roofing contractors proudly serving the Chandler area." },
  { city: "Gilbert", description: "Premium roofing services for Gilbert's growing community of homes and businesses." },
  { city: "Avondale", description: "Professional roof repair and replacement for Avondale properties." },
  { city: "Goodyear", description: "Trusted roofing services for Goodyear — from tile to foam to shingle." },
  { city: "Surprise", description: "Reliable roofing solutions for Surprise homeowners. Free estimates available." },
  { city: "Buckeye", description: "Serving Buckeye's expanding community with quality roofing craftsmanship." },
  { city: "Tolleson", description: "Local roofing experts serving Tolleson with honest pricing and quality work." },
  { city: "Sun City", description: "Specialized roofing services for Sun City's retirement communities." },
  { city: "Paradise Valley", description: "Premium roofing for Paradise Valley's luxury estates and custom homes." },
  { city: "Cave Creek", description: "Expert roofing services for Cave Creek's unique desert properties." },
  { city: "Queen Creek", description: "Professional roofing solutions for Queen Creek's residential communities." },
];

export default function ServiceAreasPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[#0f2440] py-20">
        <div className="container-max px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Service Areas
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Proudly serving Phoenix and the entire greater metropolitan area with premium roofing services.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="heading-primary mb-4">Cities We Serve</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              AZ Pro Contractors LLC provides roofing services throughout the Phoenix metropolitan area and surrounding Arizona communities.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceAreas.map((area) => (
              <div key={area.city} className="bg-[var(--color-gray-light)] rounded-lg p-6 border hover:border-[var(--color-accent)]/30 hover:shadow-md transition-all">
                <h3 className="font-bold text-[var(--color-primary)] text-lg mb-2">{area.city}, AZ</h3>
                <p className="text-gray-600 text-sm">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[var(--color-gray-light)]">
        <div className="container-max text-center">
          <h2 className="heading-primary mb-6">Not Sure If We Cover Your Area?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            We serve most of Maricopa County and surrounding areas. Give us a call and we&apos;ll let you know if we can help with your roofing project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:623-246-7985" className="btn-primary text-lg">📞 Call (623) 246-7985</a>
            <a href="/contact" className="btn-secondary text-lg">Contact Us →</a>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-[var(--color-accent)] to-[#8b0a1e] text-white text-center">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Roofing in Your Area?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact AZ Pro Contractors for a free roofing estimate anywhere in the Phoenix metro.
          </p>
          <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-[var(--color-accent)] font-bold rounded-lg hover:bg-gray-100 transition-all shadow-lg text-lg">
            Request Free Estimate →
          </a>
        </div>
      </section>
    </>
  );
}
