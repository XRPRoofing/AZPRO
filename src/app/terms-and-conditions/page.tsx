import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Terms and Conditions for AZ Pro Contractors LLC. Read our service terms, warranties, and policies.",
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[#0f2440] py-16">
        <div className="container-max px-4 text-center">
          <h1 className="text-4xl font-black text-white" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Terms and Conditions
          </h1>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max max-w-4xl">
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="text-sm text-gray-500 mb-8">Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</p>

            <h2 className="heading-secondary mt-8 mb-4">1. Agreement to Terms</h2>
            <p>By accessing and using the AZ Pro Contractors LLC website and services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our website or services.</p>

            <h2 className="heading-secondary mt-8 mb-4">2. Services</h2>
            <p>AZ Pro Contractors LLC provides roofing services including but not limited to roof repair, roof replacement, tile roofing, foam roofing, and commercial roofing services in the Phoenix, Arizona metropolitan area. All services are subject to a separate written agreement or estimate.</p>

            <h2 className="heading-secondary mt-8 mb-4">3. Estimates and Pricing</h2>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>All estimates are provided free of charge and without obligation</li>
              <li>Estimates are valid for 30 days from the date of issue unless otherwise stated</li>
              <li>Final pricing may vary based on actual conditions discovered during the project</li>
              <li>Additional work beyond the original scope requires written authorization</li>
            </ul>

            <h2 className="heading-secondary mt-8 mb-4">4. Warranties</h2>
            <p>AZ Pro Contractors LLC provides:</p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Workmanship warranties as specified in individual project agreements</li>
              <li>Manufacturer material warranties as provided by the product manufacturer</li>
              <li>Warranty coverage is subject to proper roof maintenance by the property owner</li>
            </ul>

            <h2 className="heading-secondary mt-8 mb-4">5. Payment Terms</h2>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Payment terms are outlined in individual project agreements</li>
              <li>We accept cash, check, and major credit cards</li>
              <li>Financing options may be available for qualified projects</li>
              <li>Late payments may be subject to additional fees as outlined in the project agreement</li>
            </ul>

            <h2 className="heading-secondary mt-8 mb-4">6. Scheduling and Access</h2>
            <p>Customers agree to:</p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Provide reasonable access to the property for inspections and work</li>
              <li>Clear the work area of personal property and vehicles as requested</li>
              <li>Understand that weather conditions may affect scheduling</li>
            </ul>

            <h2 className="heading-secondary mt-8 mb-4">7. Limitation of Liability</h2>
            <p>AZ Pro Contractors LLC shall not be liable for damages caused by pre-existing conditions not visible during initial inspection, acts of nature, or issues arising from customer modifications to completed work.</p>

            <h2 className="heading-secondary mt-8 mb-4">8. Intellectual Property</h2>
            <p>All content on this website, including text, images, logos, and design, is the property of AZ Pro Contractors LLC and is protected by copyright laws.</p>

            <h2 className="heading-secondary mt-8 mb-4">9. Website Use</h2>
            <p>You agree to use this website only for lawful purposes and in a manner that does not infringe upon the rights of others or restrict their use of the website.</p>

            <h2 className="heading-secondary mt-8 mb-4">10. Governing Law</h2>
            <p>These Terms and Conditions are governed by the laws of the State of Arizona. Any disputes shall be resolved in the courts of Maricopa County, Arizona.</p>

            <h2 className="heading-secondary mt-8 mb-4">11. Contact</h2>
            <p>Questions about these Terms and Conditions should be directed to:</p>
            <ul className="list-none space-y-2 my-4">
              <li><strong>AZ Pro Contractors LLC</strong></li>
              <li>10008 W Madrugada Ct, Phoenix, AZ 85037</li>
              <li>Phone: (623) 246-7985</li>
            </ul>

            <h2 className="heading-secondary mt-8 mb-4">12. Changes to Terms</h2>
            <p>We reserve the right to update these Terms and Conditions at any time. Changes become effective immediately upon posting to this website.</p>
          </div>
        </div>
      </section>
    </>
  );
}
