import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Foam Roofing Phoenix AZ",
  description:
    "Expert foam roofing services in Phoenix, Arizona. Spray foam installation, recoating, elastomeric coatings, and flat roof waterproofing. Call AZ Pro Contractors at 623-246-7985.",
};

export default function FoamRoofingPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[#0f2440] py-20">
        <div className="container-max px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Foam Roofing in Phoenix, AZ
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Energy-efficient foam roofing solutions ideal for Arizona&apos;s hot climate.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="heading-primary mb-6">Foam Roofing Experts</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Spray polyurethane foam (SPF) roofing is one of the best roofing systems for Arizona homes and businesses. It provides seamless waterproofing, superior insulation, and can significantly reduce your energy costs. AZ Pro Contractors LLC is your trusted foam roofing specialist in Phoenix.
              </p>

              <h3 className="heading-secondary mb-6">Our Foam Roofing Services</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <ServiceItem title="Foam Roof Repair" description="Patch and repair damaged foam roofing to restore waterproof integrity." />
                <ServiceItem title="Foam Roof Recoating" description="Apply fresh protective coating to extend your foam roof's life by 10-15 years." />
                <ServiceItem title="Elastomeric Coating" description="Premium elastomeric coatings that reflect heat and protect against UV damage." />
                <ServiceItem title="Flat Roof Waterproofing" description="Complete waterproofing solutions for flat and low-slope roofs." />
              </div>

              <div className="bg-[var(--color-gray-light)] rounded-xl p-8 mb-8">
                <h3 className="heading-secondary mb-4">Benefits of Foam Roofing</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3"><span className="text-[var(--color-accent)] font-bold">✓</span> Seamless, monolithic waterproofing — no seams or joints to leak</li>
                  <li className="flex items-start gap-3"><span className="text-[var(--color-accent)] font-bold">✓</span> Superior insulation — reduces cooling costs in Arizona heat</li>
                  <li className="flex items-start gap-3"><span className="text-[var(--color-accent)] font-bold">✓</span> Lightweight — no structural stress on your building</li>
                  <li className="flex items-start gap-3"><span className="text-[var(--color-accent)] font-bold">✓</span> Renewable — recoat every 10-15 years instead of replacing</li>
                  <li className="flex items-start gap-3"><span className="text-[var(--color-accent)] font-bold">✓</span> Reflective coating — keeps your home cooler</li>
                  <li className="flex items-start gap-3"><span className="text-[var(--color-accent)] font-bold">✓</span> Long lifespan — 30+ years with proper maintenance</li>
                </ul>
              </div>

              <h3 className="heading-secondary mb-4">When to Recoat Your Foam Roof</h3>
              <p className="text-gray-600 mb-4">
                Foam roofs need periodic recoating to maintain their protective layer. Signs it&apos;s time to recoat include:
              </p>
              <ul className="space-y-2 text-gray-600 mb-8">
                <li className="flex items-start gap-3"><span className="text-[var(--color-accent)]">•</span> Visible foam exposed (coating worn through)</li>
                <li className="flex items-start gap-3"><span className="text-[var(--color-accent)]">•</span> Coating is chalking or flaking</li>
                <li className="flex items-start gap-3"><span className="text-[var(--color-accent)]">•</span> Standing water or ponding areas</li>
                <li className="flex items-start gap-3"><span className="text-[var(--color-accent)]">•</span> It&apos;s been 10+ years since last coating</li>
              </ul>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-32 bg-gradient-to-br from-[var(--color-primary)] to-[#0f2440] rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Foam Roofing Estimate</h3>
                <p className="text-gray-300 mb-6 text-sm">
                  Find out if foam roofing is right for your property. Free inspections and estimates.
                </p>
                <a href="tel:623-246-7985" className="btn-primary w-full text-center block mb-3">
                  📞 Call (623) 246-7985
                </a>
                <a href="/contact" className="btn-outline w-full text-center block text-sm !py-3">
                  Request Estimate Online
                </a>
                <div className="mt-6 pt-4 border-t border-white/20 text-xs text-gray-400 space-y-2">
                  <p>✓ Energy savings</p>
                  <p>✓ 30+ year lifespan</p>
                  <p>✓ Seamless waterproofing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-[var(--color-accent)] to-[#1e3a5f] text-white text-center">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Foam Roofing?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Save on energy costs and protect your home with premium foam roofing from AZ Pro Contractors.
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
