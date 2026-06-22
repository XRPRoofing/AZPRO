import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial Roofing Phoenix AZ",
  description:
    "Professional commercial roofing services in Phoenix, Arizona. Flat roof systems, roof coatings, commercial repair, and maintenance programs. Call AZ Pro Contractors at 623-246-7985.",
};

export default function CommercialRoofingPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[#0f2440] py-20">
        <div className="container-max px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Commercial Roofing in Phoenix, AZ
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Reliable commercial roofing solutions for Arizona businesses of all sizes.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="heading-primary mb-6">Commercial Roofing Experts</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Your business deserves a roof that performs. AZ Pro Contractors LLC provides comprehensive commercial roofing services for offices, retail spaces, warehouses, and industrial facilities across the Phoenix metro area. We minimize disruption to your operations while maximizing roof performance.
              </p>

              <h3 className="heading-secondary mb-6">Our Commercial Services</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <ServiceItem title="Flat Roof Systems" description="TPO, EPDM, modified bitumen, and built-up roofing for commercial buildings." />
                <ServiceItem title="Roof Coatings" description="Elastomeric and silicone coatings to extend your roof's life and improve energy efficiency." />
                <ServiceItem title="Commercial Roof Repair" description="Fast response for leaks, ponding water, membrane damage, and storm damage." />
                <ServiceItem title="Maintenance Programs" description="Scheduled inspections and preventative maintenance to avoid costly emergencies." />
              </div>

              <div className="bg-[var(--color-gray-light)] rounded-xl p-8 mb-8">
                <h3 className="heading-secondary mb-4">Industries We Serve</h3>
                <div className="grid grid-cols-2 gap-3 text-gray-600">
                  <p>• Office Buildings</p>
                  <p>• Retail Centers</p>
                  <p>• Warehouses</p>
                  <p>• Restaurants</p>
                  <p>• Medical Facilities</p>
                  <p>• Manufacturing</p>
                  <p>• Multi-Family Housing</p>
                  <p>• HOA Properties</p>
                  <p>• Religious Facilities</p>
                  <p>• Schools</p>
                </div>
              </div>

              <h3 className="heading-secondary mb-4">Why Choose Us for Commercial Roofing?</h3>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li className="flex items-start gap-3"><span className="text-[var(--color-accent)] font-bold">✓</span> Minimal disruption to your business operations</li>
                <li className="flex items-start gap-3"><span className="text-[var(--color-accent)] font-bold">✓</span> Flexible scheduling — nights and weekends available</li>
                <li className="flex items-start gap-3"><span className="text-[var(--color-accent)] font-bold">✓</span> Comprehensive warranties on materials and labor</li>
                <li className="flex items-start gap-3"><span className="text-[var(--color-accent)] font-bold">✓</span> Licensed, bonded, and fully insured for commercial work</li>
                <li className="flex items-start gap-3"><span className="text-[var(--color-accent)] font-bold">✓</span> Preventative maintenance programs to protect your investment</li>
              </ul>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-32 bg-gradient-to-br from-[var(--color-primary)] to-[#0f2440] rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Commercial Roofing Quote</h3>
                <p className="text-gray-300 mb-6 text-sm">
                  Protect your business with a professional commercial roofing solution.
                </p>
                <a href="tel:623-246-7985" className="btn-primary w-full text-center block mb-3">
                  📞 Call (623) 246-7985
                </a>
                <a href="/contact" className="btn-outline w-full text-center block text-sm !py-3">
                  Request Quote Online
                </a>
                <div className="mt-6 pt-4 border-t border-white/20 text-xs text-gray-400 space-y-2">
                  <p>✓ Free roof assessment</p>
                  <p>✓ Maintenance programs</p>
                  <p>✓ Minimal disruption</p>
                  <p>✓ Emergency service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-[var(--color-accent)] to-[#8b0a1e] text-white text-center">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Protect Your Business</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get a professional commercial roofing assessment from AZ Pro Contractors today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:623-246-7985" className="inline-flex items-center justify-center px-8 py-4 bg-white text-[var(--color-accent)] font-bold rounded-lg hover:bg-gray-100 transition-all shadow-lg text-lg">
              📞 Call (623) 246-7985
            </a>
            <a href="/contact" className="btn-outline text-lg">Request Free Quote →</a>
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
