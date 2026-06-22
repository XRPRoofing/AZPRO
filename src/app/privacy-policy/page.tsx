import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for AZ Pro Contractors LLC. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[#0f2440] py-16">
        <div className="container-max px-4 text-center">
          <h1 className="text-4xl font-black text-white" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Privacy Policy
          </h1>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max max-w-4xl">
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="text-sm text-gray-500 mb-8">Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</p>

            <h2 className="heading-secondary mt-8 mb-4">1. Information We Collect</h2>
            <p>AZ Pro Contractors LLC (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) collects information you provide directly, including:</p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Name, email address, phone number, and property address when you request an estimate or contact us</li>
              <li>Information about your roofing project or service needs</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h2 className="heading-secondary mt-8 mb-4">2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Respond to your inquiries and provide roofing estimates</li>
              <li>Schedule and perform roofing services</li>
              <li>Communicate with you about your project</li>
              <li>Improve our services and website</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="heading-secondary mt-8 mb-4">3. Information Sharing</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share your information with:</p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Service providers who assist in our operations</li>
              <li>Business partners (such as XRP Roofing) for service fulfillment</li>
              <li>Legal authorities when required by law</li>
            </ul>

            <h2 className="heading-secondary mt-8 mb-4">4. Data Security</h2>
            <p>We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>

            <h2 className="heading-secondary mt-8 mb-4">5. Cookies and Tracking</h2>
            <p>Our website may use cookies and similar technologies to improve your browsing experience and analyze website traffic. You can control cookie settings through your browser preferences.</p>

            <h2 className="heading-secondary mt-8 mb-4">6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt out of marketing communications</li>
            </ul>

            <h2 className="heading-secondary mt-8 mb-4">7. Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us:</p>
            <ul className="list-none space-y-2 my-4">
              <li><strong>AZ Pro Contractors LLC</strong></li>
              <li>10008 W Madrugada Ct, Phoenix, AZ 85037</li>
              <li>Phone: (623) 246-7985</li>
            </ul>

            <h2 className="heading-secondary mt-8 mb-4">8. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated date.</p>
          </div>
        </div>
      </section>
    </>
  );
}
