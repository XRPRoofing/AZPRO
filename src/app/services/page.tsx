import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roofing Services",
  description:
    "AZ Pro Contractors LLC offers comprehensive roofing services in Phoenix, AZ — roof repair, replacement, tile, foam, flat, commercial, storm damage, and inspections. Call 623-246-7985.",
};

const services = [
  {
    title: "Roof Repair",
    description: "Fast, reliable repairs for leaks, broken tiles, flashing damage, underlayment issues, and emergency situations.",
    href: "/services/roof-repair",
  },
  {
    title: "Roof Replacement",
    description: "Complete roof replacement with premium shingle, tile, foam, and flat roofing systems. Expert installation guaranteed.",
    href: "/services/roof-replacement",
  },
  {
    title: "Tile Roofing",
    description: "Broken tile replacement, mortar cap restoration, underlayment repair, and tile roof maintenance services.",
    href: "/services/tile-roofing",
  },
  {
    title: "Foam Roofing",
    description: "Spray foam roofing, foam roof recoating, elastomeric coatings, and flat roof waterproofing solutions.",
    href: "/services/foam-roofing",
  },
  {
    title: "Commercial Roofing",
    description: "Flat roof systems, roof coatings, commercial roof repair, and maintenance programs for Arizona businesses.",
    href: "/services/commercial-roofing",
  },
  {
    title: "Storm Damage Roofing",
    description: "Emergency storm damage assessment, rapid repairs, and insurance claim assistance for Arizona homeowners.",
    href: "/services/roof-repair",
  },
  {
    title: "Roof Inspections",
    description: "Comprehensive roof inspections to identify issues before they become costly problems. Free with estimate.",
    href: "/contact",
  },
  {
    title: "Shingle Roofing",
    description: "Premium asphalt shingle installation and repair. Multiple style and color options for every home.",
    href: "/services/roof-replacement",
  },
  {
    title: "Flat Roofing",
    description: "Expert flat roof installation, repair, and maintenance for residential and commercial properties.",
    href: "/services/foam-roofing",
  },
  {
    title: "Residential Roofing",
    description: "Full-service residential roofing for homes of all sizes — from repairs to complete installations.",
    href: "/services/roof-replacement",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[#0f2440] py-20">
        <div className="container-max px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Our Roofing Services
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive roofing solutions for residential and commercial properties across Phoenix, Arizona.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-[var(--color-gray-light)]">
        <div className="container-max">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <a
                key={service.title}
                href={service.href}
                className="group bg-white rounded-xl p-8 shadow-sm border hover:shadow-lg hover:border-[var(--color-accent)]/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[var(--color-accent)]/10 rounded-lg flex items-center justify-center mb-5">
                  <span className="text-[var(--color-accent)] text-xl">🏠</span>
                </div>
                <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3 group-hover:text-[var(--color-accent)] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                <span className="inline-block mt-4 text-[var(--color-accent)] font-semibold text-sm group-hover:translate-x-1 transition-transform">
                  Learn More →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-[var(--color-accent)] to-[#1e3a5f] text-white text-center">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need a Roofing Expert?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact AZ Pro Contractors for a free inspection and estimate on any roofing project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:623-246-7985" className="inline-flex items-center justify-center px-8 py-4 bg-white text-[var(--color-accent)] font-bold rounded-lg hover:bg-gray-100 transition-all shadow-lg text-lg">
              📞 Call (623) 246-7985
            </a>
            <a href="/contact" className="btn-outline text-lg">
              Request Free Estimate →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
