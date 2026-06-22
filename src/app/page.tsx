import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Roofing Services in Phoenix, Arizona | AZ Pro Contractors LLC",
  description:
    "AZ Pro Contractors LLC provides professional roof repair, roof replacement, tile roofing, foam roofing, and commercial roofing services across Phoenix and surrounding Arizona communities. Call 623-246-7985 for a free estimate.",
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-[var(--color-primary)] via-[#1e3a5f] to-[#0f2440] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-gold)] rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--color-accent)] rounded-full blur-3xl" />
        </div>
        <div className="container-max px-4 relative z-10 py-20">
          <div className="max-w-3xl">
            <div className="inline-block bg-[var(--color-gold)]/20 border border-[var(--color-gold)]/40 rounded-full px-4 py-2 mb-6">
              <span className="text-[var(--color-gold)] font-semibold text-sm">Licensed &amp; Insured Arizona Roofing Contractor</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Premium Roofing Services in{" "}
              <span className="text-[var(--color-gold)]">Phoenix, Arizona</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              AZ Pro Contractors LLC provides professional roof repair, roof replacement, tile roofing, foam roofing, and commercial roofing services across Phoenix and surrounding Arizona communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:623-246-7985" className="btn-primary text-lg">
                📞 Call (623) 246-7985
              </a>
              <a href="/contact" className="btn-outline text-lg">
                Request Free Estimate →
              </a>
            </div>
            <div className="mt-12 flex items-center gap-8 text-gray-400">
              <div className="flex items-center gap-2">
                <span className="text-[var(--color-gold)] text-2xl">★★★★★</span>
                <span className="text-sm">5-Star Rated</span>
              </div>
              <div className="text-sm">✓ Free Inspections</div>
              <div className="text-sm">✓ Licensed &amp; Bonded</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white py-6 border-b">
        <div className="container-max px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-gray-600">
            <div className="flex items-center gap-2 text-sm font-medium">
              <span className="text-[var(--color-accent)] text-xl">🛡️</span> Licensed &amp; Insured
            </div>
            <div className="flex items-center gap-2 text-sm font-medium">
              <span className="text-[var(--color-accent)] text-xl">⭐</span> 5-Star Reviews
            </div>
            <div className="flex items-center gap-2 text-sm font-medium">
              <span className="text-[var(--color-accent)] text-xl">🏠</span> Local Arizona Company
            </div>
            <div className="flex items-center gap-2 text-sm font-medium">
              <span className="text-[var(--color-accent)] text-xl">💰</span> Free Estimates
            </div>
            <div className="flex items-center gap-2 text-sm font-medium">
              <span className="text-[var(--color-accent)] text-xl">🔧</span> Expert Craftsmanship
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-[var(--color-gray-light)]">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="heading-primary mb-4">Our Roofing Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From minor repairs to complete roof replacements, we deliver premium roofing solutions for residential and commercial properties.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Roof Repair"
              description="Fast, reliable leak repair, broken tile replacement, flashing repair, and emergency services."
              href="/services/roof-repair"
            />
            <ServiceCard
              title="Roof Replacement"
              description="Complete roof replacement with premium materials — shingle, tile, foam, and flat roofing systems."
              href="/services/roof-replacement"
            />
            <ServiceCard
              title="Tile Roofing"
              description="Expert tile roof installation, repair, underlayment replacement, and mortar cap restoration."
              href="/services/tile-roofing"
            />
            <ServiceCard
              title="Foam Roofing"
              description="Spray foam roofing, recoating, elastomeric coatings, and flat roof waterproofing solutions."
              href="/services/foam-roofing"
            />
            <ServiceCard
              title="Commercial Roofing"
              description="Flat roof systems, roof coatings, commercial repair, and maintenance programs for businesses."
              href="/services/commercial-roofing"
            />
            <ServiceCard
              title="Storm Damage"
              description="Emergency storm damage assessment, insurance claim assistance, and rapid restoration services."
              href="/services/roof-repair"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="heading-primary mb-6">
                Why Choose AZ Pro Contractors?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We combine decades of roofing experience with premium materials and
                unmatched craftsmanship to protect your home or business.
              </p>
              <div className="space-y-5">
                <BenefitItem title="Licensed & Insured" description="Fully licensed, bonded, and insured for your complete peace of mind." />
                <BenefitItem title="Premium Materials" description="We use only top-quality roofing materials backed by manufacturer warranties." />
                <BenefitItem title="Expert Craftsmanship" description="Our skilled crews deliver meticulous workmanship on every project." />
                <BenefitItem title="Free Inspections" description="Comprehensive roof inspections and detailed estimates at no cost." />
                <BenefitItem title="Local & Trusted" description="Proudly serving Phoenix and surrounding Arizona communities." />
              </div>
            </div>
            <div className="bg-gradient-to-br from-[var(--color-primary)] to-[#0f2440] rounded-2xl p-12 text-white">
              <h3 className="text-2xl font-bold mb-6">Get Your Free Roofing Estimate</h3>
              <p className="text-gray-300 mb-8">
                Call us today for a no-obligation inspection and estimate on your roofing project.
              </p>
              <a href="tel:623-246-7985" className="btn-primary w-full text-center block mb-4">
                📞 Call (623) 246-7985
              </a>
              <a href="/contact" className="btn-outline w-full text-center block">
                Request Estimate Online →
              </a>
              <div className="mt-8 pt-6 border-t border-white/20 text-sm text-gray-300">
                <p>✓ No obligation &nbsp;•&nbsp; ✓ Same-day response &nbsp;•&nbsp; ✓ Honest pricing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-[var(--color-gray-light)]">
        <div className="container-max text-center">
          <h2 className="heading-primary mb-4">Serving Phoenix &amp; Surrounding Areas</h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            AZ Pro Contractors LLC proudly serves homeowners and businesses across the greater Phoenix metropolitan area.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              "Phoenix", "Glendale", "Peoria", "Scottsdale", "Mesa", "Tempe",
              "Chandler", "Gilbert", "Avondale", "Goodyear", "Surprise",
              "Buckeye", "Tolleson", "Sun City", "Paradise Valley", "Cave Creek", "Queen Creek",
            ].map((city) => (
              <span key={city} className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm border">
                {city}
              </span>
            ))}
          </div>
          <a href="/service-areas" className="btn-secondary">
            View All Service Areas →
          </a>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="heading-primary mb-4">What Our Customers Say</h2>
            <p className="text-lg text-gray-600">Trusted by homeowners across Arizona</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="AZ Pro Contractors replaced our entire tile roof. The crew was professional, clean, and finished ahead of schedule. Highly recommend!"
              name="Michael R."
              location="Phoenix, AZ"
            />
            <TestimonialCard
              quote="They repaired our foam roof leak quickly and at a fair price. Great communication throughout the process. Will use again."
              name="Sarah T."
              location="Glendale, AZ"
            />
            <TestimonialCard
              quote="Best roofing company in the valley. They handled our insurance claim and made the whole process stress-free."
              name="David K."
              location="Scottsdale, AZ"
            />
          </div>
        </div>
      </section>

      {/* XRP Connection */}
      <section className="bg-[var(--color-primary)] py-12">
        <div className="container-max px-4 text-center">
          <p className="text-white text-lg">
            AZ Pro Contractors LLC is proudly connected with{" "}
            <a href="https://www.xrproofing.com" className="text-[var(--color-gold)] font-bold hover:underline">
              XRP Roofing
            </a>
            , helping serve Arizona homeowners and businesses with reliable roofing solutions.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-br from-[var(--color-accent)] to-[#1e3a5f] text-white text-center">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact AZ Pro Contractors today for a free roofing inspection and estimate. We&apos;re here to protect your home.
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

function ServiceCard({ title, description, href }: { title: string; description: string; href: string }) {
  return (
    <a href={href} className="group bg-white rounded-xl p-8 shadow-sm border hover:shadow-lg hover:border-[var(--color-accent)]/30 transition-all duration-300">
      <div className="w-12 h-12 bg-[var(--color-accent)]/10 rounded-lg flex items-center justify-center mb-5">
        <span className="text-[var(--color-accent)] text-xl">🏠</span>
      </div>
      <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3 group-hover:text-[var(--color-accent)] transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
      <span className="inline-block mt-4 text-[var(--color-accent)] font-semibold text-sm group-hover:translate-x-1 transition-transform">
        Learn More →
      </span>
    </a>
  );
}

function BenefitItem({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex gap-4">
      <div className="w-6 h-6 bg-[var(--color-accent)] rounded-full flex items-center justify-center shrink-0 mt-0.5">
        <span className="text-white text-xs">✓</span>
      </div>
      <div>
        <h4 className="font-bold text-[var(--color-primary)]">{title}</h4>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
}

function TestimonialCard({ quote, name, location }: { quote: string; name: string; location: string }) {
  return (
    <div className="bg-[var(--color-gray-light)] rounded-xl p-8 border">
      <div className="text-[var(--color-gold)] text-2xl mb-4">★★★★★</div>
      <p className="text-gray-700 mb-6 leading-relaxed italic">&ldquo;{quote}&rdquo;</p>
      <div>
        <p className="font-bold text-[var(--color-primary)]">{name}</p>
        <p className="text-gray-500 text-sm">{location}</p>
      </div>
    </div>
  );
}
