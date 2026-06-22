import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about AZ Pro Contractors LLC — a licensed, professional roofing contractor proudly connected with XRP Roofing, serving Phoenix and all of Arizona.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[#0f2440] py-20">
        <div className="container-max px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6" style={{ fontFamily: "Montserrat, sans-serif" }}>
            About AZ Pro Contractors
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Your trusted local roofing partner in Phoenix, Arizona
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="heading-primary mb-6">
                Phoenix&apos;s Premier Roofing Contractor
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                AZ Pro Contractors LLC is a full-service roofing company dedicated to providing premium roofing solutions for homeowners and businesses across the greater Phoenix metropolitan area. We specialize in roof repair, roof replacement, tile roofing, foam roofing, and commercial roofing services.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                As a licensed, bonded, and insured Arizona contractor, we bring professionalism, expertise, and honest pricing to every project — from minor repairs to complete roof installations.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our mission is simple: protect Arizona homes and businesses with roofing solutions that last, using premium materials and expert craftsmanship that exceeds expectations.
              </p>
            </div>
            <div className="bg-[var(--color-gray-light)] rounded-2xl p-10">
              <h3 className="heading-secondary mb-6">Our Core Values</h3>
              <div className="space-y-6">
                <ValueItem title="Quality First" description="We never cut corners. Every project receives the same premium attention to detail." />
                <ValueItem title="Honest Pricing" description="Transparent, fair pricing with no hidden fees or surprise charges." />
                <ValueItem title="Customer Focus" description="Your satisfaction drives everything we do, from first call to final cleanup." />
                <ValueItem title="Local Commitment" description="We live and work in Arizona. This community is our home." />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connection with XRP */}
      <section className="section-padding bg-[var(--color-gray-light)]">
        <div className="container-max text-center">
          <h2 className="heading-primary mb-6">Connected with XRP Roofing</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            AZ Pro Contractors LLC is proudly connected with{" "}
            <a href="https://www.xrproofing.com" className="text-[var(--color-accent)] font-semibold hover:underline">XRP Roofing</a>,
            one of Arizona&apos;s most trusted roofing companies. Together, we bring expanded capacity and expertise to serve even more Arizona homeowners and businesses with reliable, high-quality roofing solutions.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            This partnership means our customers benefit from the combined experience, resources, and commitment to excellence of both companies — ensuring every roofing project is completed to the highest standard.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="heading-primary text-center mb-12">Why Arizona Homeowners Trust Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TrustCard title="Licensed & Insured" description="Fully licensed Arizona roofing contractor (ROC#). Bonded and insured for your protection." />
            <TrustCard title="Local Arizona Team" description="We're not a national chain. We live, work, and invest in the Phoenix community." />
            <TrustCard title="Premium Materials" description="We partner with top manufacturers to bring you the best roofing products available." />
            <TrustCard title="Warranty Protection" description="Our work is backed by comprehensive labor warranties and manufacturer material warranties." />
            <TrustCard title="Clean Jobsites" description="We treat your property with respect — thorough cleanup after every project, guaranteed." />
            <TrustCard title="Free Estimates" description="Honest, detailed estimates at no cost. No pressure, no obligation." />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-[var(--color-accent)] to-[#8b0a1e] text-white text-center">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Work With Arizona&apos;s Best</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Ready to experience the AZ Pro Contractors difference? Contact us today for a free inspection and estimate.
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

function ValueItem({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex gap-4">
      <div className="w-5 h-5 bg-[var(--color-accent)] rounded-full flex items-center justify-center shrink-0 mt-1">
        <span className="text-white text-xs">✓</span>
      </div>
      <div>
        <h4 className="font-bold text-[var(--color-primary)] mb-1">{title}</h4>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
}

function TrustCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-[var(--color-gray-light)] rounded-xl p-8 border">
      <h3 className="text-lg font-bold text-[var(--color-primary)] mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
