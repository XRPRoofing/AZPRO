import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tile Roofing Phoenix AZ",
  description:
    "Expert tile roofing services in Phoenix, Arizona. Broken tile replacement, mortar caps, underlayment repair, and tile roof maintenance. Call AZ Pro Contractors at 623-246-7985.",
};

export default function TileRoofingPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[#0f2440] py-20">
        <div className="container-max px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Tile Roofing in Phoenix, AZ
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Expert tile roof repair, replacement, and maintenance for Arizona homes.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="heading-primary mb-6">Tile Roofing Specialists</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Tile roofing is the most popular choice for Arizona homes — and for good reason. It offers unmatched durability, beauty, and protection against our extreme heat. AZ Pro Contractors LLC provides comprehensive tile roofing services including repair, replacement, and maintenance.
              </p>

              <h3 className="heading-secondary mb-6">Our Tile Roofing Services</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <ServiceItem title="Broken Tile Replacement" description="Replace cracked, broken, or missing tiles to restore your roof's protection." />
                <ServiceItem title="Mortar Caps" description="Repair and restore mortar caps at ridges and hips to prevent water intrusion." />
                <ServiceItem title="Underlayment Repair" description="Replace worn underlayment beneath tiles — the critical waterproof barrier." />
                <ServiceItem title="Tile Roof Maintenance" description="Regular maintenance programs to extend your tile roof's lifespan." />
              </div>

              <div className="bg-[var(--color-gray-light)] rounded-xl p-8 mb-8">
                <h3 className="heading-secondary mb-4">Why Tile Roofing?</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3"><span className="text-[var(--color-accent)] font-bold">✓</span> 50+ year lifespan with proper maintenance</li>
                  <li className="flex items-start gap-3"><span className="text-[var(--color-accent)] font-bold">✓</span> Fire resistant — important in Arizona&apos;s dry climate</li>
                  <li className="flex items-start gap-3"><span className="text-[var(--color-accent)] font-bold">✓</span> Excellent heat reflection and insulation</li>
                  <li className="flex items-start gap-3"><span className="text-[var(--color-accent)] font-bold">✓</span> Wind resistant — withstands monsoon storms</li>
                  <li className="flex items-start gap-3"><span className="text-[var(--color-accent)] font-bold">✓</span> Low maintenance — no painting or staining</li>
                  <li className="flex items-start gap-3"><span className="text-[var(--color-accent)] font-bold">✓</span> Increases home value and curb appeal</li>
                </ul>
              </div>

              <h3 className="heading-secondary mb-4">Common Tile Roof Issues in Arizona</h3>
              <p className="text-gray-600 mb-4">
                While tile roofs are incredibly durable, Arizona&apos;s conditions can cause specific issues:
              </p>
              <ul className="space-y-2 text-gray-600 mb-8">
                <li className="flex items-start gap-3"><span className="text-[var(--color-accent)]">•</span> Cracked tiles from thermal expansion/contraction</li>
                <li className="flex items-start gap-3"><span className="text-[var(--color-accent)]">•</span> Deteriorated underlayment (usually after 20-25 years)</li>
                <li className="flex items-start gap-3"><span className="text-[var(--color-accent)]">•</span> Broken mortar at ridges and hips</li>
                <li className="flex items-start gap-3"><span className="text-[var(--color-accent)]">•</span> Tiles displaced by monsoon winds</li>
                <li className="flex items-start gap-3"><span className="text-[var(--color-accent)]">•</span> Wildlife damage (birds nesting under tiles)</li>
              </ul>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-32 bg-gradient-to-br from-[var(--color-primary)] to-[#0f2440] rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Tile Roof Estimate</h3>
                <p className="text-gray-300 mb-6 text-sm">
                  Whether you need a few tiles replaced or a complete re-tile, we&apos;ve got you covered.
                </p>
                <a href="tel:623-246-7985" className="btn-primary w-full text-center block mb-3">
                  📞 Call (623) 246-7985
                </a>
                <a href="/contact" className="btn-outline w-full text-center block text-sm !py-3">
                  Request Estimate Online
                </a>
                <div className="mt-6 pt-4 border-t border-white/20 text-xs text-gray-400 space-y-2">
                  <p>✓ 50+ year roof systems</p>
                  <p>✓ Premium materials</p>
                  <p>✓ Expert tile crews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-[var(--color-accent)] to-[#8b0a1e] text-white text-center">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Tile Roof Service?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            From broken tiles to full re-roofs, AZ Pro Contractors is Phoenix&apos;s tile roofing expert.
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

function ServiceItem({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-[var(--color-gray-light)] rounded-lg p-6 border">
      <h4 className="font-bold text-[var(--color-primary)] mb-2">{title}</h4>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
