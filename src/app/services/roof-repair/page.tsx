import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roof Repair Phoenix AZ",
  description:
    "Expert roof repair services in Phoenix, Arizona. Leak repair, broken tiles, flashing repair, underlayment repair, and emergency roofing services. Call AZ Pro Contractors at 623-246-7985.",
};

export default function RoofRepairPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[#0f2440] py-20">
        <div className="container-max px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Roof Repair in Phoenix, AZ
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Fast, reliable roof repair services to protect your home from Arizona&apos;s extreme weather.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="heading-primary mb-6">Professional Roof Repair Services</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                A damaged roof puts your entire home at risk. AZ Pro Contractors LLC provides fast, professional roof repair services throughout Phoenix and the surrounding areas. Whether you have a small leak or major storm damage, our experienced team will restore your roof&apos;s integrity quickly and affordably.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <RepairService title="Leak Repair" description="Locate and repair leaks to prevent water damage to your home's interior and structure." />
                <RepairService title="Broken Tile Repair" description="Replace cracked or missing tiles to restore your roof's protection and appearance." />
                <RepairService title="Flashing Repair" description="Repair or replace damaged flashing around vents, chimneys, and roof edges." />
                <RepairService title="Underlayment Repair" description="Address worn or damaged underlayment to restore your roof's waterproof barrier." />
                <RepairService title="Emergency Repair" description="Rapid response for urgent roof damage — we'll protect your home fast." />
                <RepairService title="Storm Damage" description="Assessment and repair of monsoon, hail, and wind damage with insurance assistance." />
              </div>

              <div className="bg-[var(--color-gray-light)] rounded-xl p-8 mb-8">
                <h3 className="heading-secondary mb-4">Signs You Need Roof Repair</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3"><span className="text-[var(--color-accent)]">•</span> Water stains on ceilings or walls</li>
                  <li className="flex items-start gap-3"><span className="text-[var(--color-accent)]">•</span> Missing, cracked, or curling shingles/tiles</li>
                  <li className="flex items-start gap-3"><span className="text-[var(--color-accent)]">•</span> Visible damage after storms</li>
                  <li className="flex items-start gap-3"><span className="text-[var(--color-accent)]">•</span> Granules in gutters (shingle deterioration)</li>
                  <li className="flex items-start gap-3"><span className="text-[var(--color-accent)]">•</span> Sagging roof areas</li>
                  <li className="flex items-start gap-3"><span className="text-[var(--color-accent)]">•</span> Higher than normal energy bills</li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-32 bg-gradient-to-br from-[var(--color-primary)] to-[#0f2440] rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Get a Free Repair Estimate</h3>
                <p className="text-gray-300 mb-6 text-sm">
                  Don&apos;t let a small leak become a big problem. Call us today for fast, reliable roof repair.
                </p>
                <a href="tel:623-246-7985" className="btn-primary w-full text-center block mb-3">
                  📞 Call (623) 246-7985
                </a>
                <a href="/contact" className="btn-outline w-full text-center block text-sm !py-3">
                  Request Estimate Online
                </a>
                <div className="mt-6 pt-4 border-t border-white/20 text-xs text-gray-400 space-y-2">
                  <p>✓ Same-day emergency service</p>
                  <p>✓ Free inspections</p>
                  <p>✓ Insurance claim assistance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[var(--color-gray-light)]">
        <div className="container-max text-center">
          <h2 className="heading-primary mb-8">Don&apos;t Wait — Fix Your Roof Today</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Small problems become expensive disasters. Contact AZ Pro Contractors for fast, affordable roof repair in Phoenix.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:623-246-7985" className="btn-primary text-lg">📞 Call (623) 246-7985</a>
            <a href="/contact" className="btn-secondary text-lg">Request Free Estimate →</a>
          </div>
        </div>
      </section>
    </>
  );
}

function RepairService({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-[var(--color-gray-light)] rounded-lg p-6 border">
      <h4 className="font-bold text-[var(--color-primary)] mb-2">{title}</h4>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
