import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roof Replacement Phoenix AZ",
  description:
    "Full roof replacement services in Phoenix, Arizona. Premium shingle, tile, foam, and flat roofing systems with expert installation. Call AZ Pro Contractors at 623-246-7985.",
};

export default function RoofReplacementPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[#0f2440] py-20">
        <div className="container-max px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Roof Replacement in Phoenix, AZ
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Premium roof replacement with expert installation and manufacturer-backed warranties.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="heading-primary mb-6">Complete Roof Replacement Services</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                When repairs are no longer enough, AZ Pro Contractors LLC delivers full roof replacement with premium materials and expert craftsmanship. We handle everything from tear-off to final cleanup, ensuring your new roof provides decades of reliable protection against Arizona&apos;s harsh climate.
              </p>

              <h3 className="heading-secondary mb-6">Roofing Systems We Install</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <SystemCard title="Shingle Roofing" description="Premium asphalt shingles in multiple styles and colors. Durable, affordable, and attractive." />
                <SystemCard title="Tile Roofing" description="Concrete and clay tile systems built to last 50+ years. Classic Arizona style and superior durability." />
                <SystemCard title="Foam Roofing" description="Spray polyurethane foam with protective coatings. Excellent insulation and seamless waterproofing." />
                <SystemCard title="Flat Roofing" description="TPO, modified bitumen, and built-up roofing for flat and low-slope applications." />
              </div>

              <div className="bg-[var(--color-gray-light)] rounded-xl p-8 mb-8">
                <h3 className="heading-secondary mb-4">Our Replacement Process</h3>
                <div className="space-y-4">
                  <Step number={1} title="Free Inspection" description="Comprehensive assessment of your current roof's condition." />
                  <Step number={2} title="Detailed Estimate" description="Transparent pricing with material and labor breakdown." />
                  <Step number={3} title="Material Selection" description="Choose from premium products with manufacturer warranties." />
                  <Step number={4} title="Professional Installation" description="Expert crews with meticulous attention to detail." />
                  <Step number={5} title="Final Inspection" description="Quality check and thorough property cleanup." />
                </div>
              </div>

              <h3 className="heading-secondary mb-4">Why Replace Your Roof?</h3>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li className="flex items-start gap-3"><span className="text-[var(--color-accent)]">•</span> Roof is 20+ years old</li>
                <li className="flex items-start gap-3"><span className="text-[var(--color-accent)]">•</span> Frequent or recurring repairs</li>
                <li className="flex items-start gap-3"><span className="text-[var(--color-accent)]">•</span> Visible sagging or structural issues</li>
                <li className="flex items-start gap-3"><span className="text-[var(--color-accent)]">•</span> Extensive storm or water damage</li>
                <li className="flex items-start gap-3"><span className="text-[var(--color-accent)]">•</span> Selling your home and want to increase value</li>
              </ul>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-32 bg-gradient-to-br from-[var(--color-primary)] to-[#0f2440] rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Free Replacement Estimate</h3>
                <p className="text-gray-300 mb-6 text-sm">
                  Get a no-obligation quote for your roof replacement. Premium workmanship guaranteed.
                </p>
                <a href="tel:623-246-7985" className="btn-primary w-full text-center block mb-3">
                  📞 Call (623) 246-7985
                </a>
                <a href="/contact" className="btn-outline w-full text-center block text-sm !py-3">
                  Request Estimate Online
                </a>
                <div className="mt-6 pt-4 border-t border-white/20 text-xs text-gray-400 space-y-2">
                  <p>✓ Premium materials</p>
                  <p>✓ Manufacturer warranties</p>
                  <p>✓ Licensed & insured</p>
                  <p>✓ Financing available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-[var(--color-accent)] to-[#8b0a1e] text-white text-center">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for a New Roof?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Invest in your home with a premium roof replacement from AZ Pro Contractors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:623-246-7985" className="inline-flex items-center justify-center px-8 py-4 bg-white text-[var(--color-accent)] font-bold rounded-lg hover:bg-gray-100 transition-all shadow-lg text-lg">
              📞 Call (623) 246-7985
            </a>
            <a href="/contact" className="btn-outline text-lg">Request Free Estimate →</a>
          </div>
        </div>
      </section>
    </>
  );
}

function SystemCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-[var(--color-gray-light)] rounded-lg p-6 border">
      <h4 className="font-bold text-[var(--color-primary)] mb-2">{title}</h4>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

function Step({ number, title, description }: { number: number; title: string; description: string }) {
  return (
    <div className="flex gap-4">
      <div className="w-8 h-8 bg-[var(--color-accent)] rounded-full flex items-center justify-center shrink-0">
        <span className="text-white text-sm font-bold">{number}</span>
      </div>
      <div>
        <h4 className="font-bold text-[var(--color-primary)]">{title}</h4>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
}
