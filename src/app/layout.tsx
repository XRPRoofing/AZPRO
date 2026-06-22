import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["700", "800", "900"], variable: "--font-montserrat" });

export const metadata: Metadata = {
  title: {
    default: "AZ Pro Contractors LLC | Premium Roofing in Phoenix, Arizona",
    template: "%s | AZ Pro Contractors LLC",
  },
  description:
    "AZ Pro Contractors LLC provides professional roof repair, roof replacement, tile roofing, foam roofing, and commercial roofing services across Phoenix and surrounding Arizona communities. Call 623-246-7985.",
  keywords: [
    "Phoenix roofing",
    "Arizona roofing contractor",
    "roof repair Phoenix",
    "roof replacement Arizona",
    "tile roofing Phoenix",
    "foam roofing Arizona",
    "commercial roofing Phoenix",
    "AZ Pro Contractors",
  ],
  openGraph: {
    title: "AZ Pro Contractors LLC | Premium Roofing in Phoenix, Arizona",
    description:
      "Professional roof repair, replacement, and installation services in Phoenix, AZ. Licensed, insured, and trusted by Arizona homeowners.",
    url: "https://azprocontractors.com",
    siteName: "AZ Pro Contractors LLC",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RoofingContractor",
              name: "AZ Pro Contractors LLC",
              url: "https://azprocontractors.com",
              telephone: "+1-623-246-7985",
              address: {
                "@type": "PostalAddress",
                streetAddress: "10008 W Madrugada Ct",
                addressLocality: "Phoenix",
                addressRegion: "AZ",
                postalCode: "85037",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 33.4484,
                longitude: -112.074,
              },
              areaServed: [
                "Phoenix",
                "Glendale",
                "Peoria",
                "Scottsdale",
                "Mesa",
                "Tempe",
                "Chandler",
                "Gilbert",
                "Avondale",
                "Goodyear",
                "Surprise",
                "Buckeye",
                "Tolleson",
                "Sun City",
                "Paradise Valley",
                "Cave Creek",
                "Queen Creek",
              ],
              priceRange: "$$",
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],
                opens: "07:00",
                closes: "18:00",
              },
              sameAs: [],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${montserrat.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="bg-[var(--color-primary)] text-white text-sm py-2">
        <div className="container-max px-4 flex justify-between items-center">
          <span>10008 W Madrugada Ct, Phoenix, AZ 85037</span>
          <a href="tel:623-246-7985" className="font-semibold hover:text-[var(--color-gold)] transition-colors">
            Call: (623) 246-7985
          </a>
        </div>
      </div>
      <nav className="container-max px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="text-2xl font-black text-[var(--color-primary)]" style={{ fontFamily: "Montserrat, sans-serif" }}>
            AZ PRO<span className="text-[var(--color-accent)]"> CONTRACTORS</span>
          </span>
        </Link>
        <div className="hidden lg:flex items-center gap-8">
          <Link href="/" className="font-medium text-gray-700 hover:text-[var(--color-accent)] transition-colors">Home</Link>
          <Link href="/about" className="font-medium text-gray-700 hover:text-[var(--color-accent)] transition-colors">About</Link>
          <div className="relative group">
            <Link href="/services" className="font-medium text-gray-700 hover:text-[var(--color-accent)] transition-colors">Services</Link>
            <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <Link href="/services/roof-repair" className="block px-4 py-3 hover:bg-gray-50 text-sm">Roof Repair</Link>
              <Link href="/services/roof-replacement" className="block px-4 py-3 hover:bg-gray-50 text-sm">Roof Replacement</Link>
              <Link href="/services/foam-roofing" className="block px-4 py-3 hover:bg-gray-50 text-sm">Foam Roofing</Link>
              <Link href="/services/tile-roofing" className="block px-4 py-3 hover:bg-gray-50 text-sm">Tile Roofing</Link>
              <Link href="/services/commercial-roofing" className="block px-4 py-3 hover:bg-gray-50 text-sm">Commercial Roofing</Link>
            </div>
          </div>
          <Link href="/service-areas" className="font-medium text-gray-700 hover:text-[var(--color-accent)] transition-colors">Service Areas</Link>
          <Link href="/contact" className="font-medium text-gray-700 hover:text-[var(--color-accent)] transition-colors">Contact</Link>
        </div>
        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:623-246-7985" className="btn-secondary text-sm !py-3 !px-6">
            Call Now
          </a>
          <Link href="/contact" className="btn-primary text-sm !py-3 !px-6">
            Free Estimate
          </Link>
        </div>
        <MobileMenu />
      </nav>
    </header>
  );
}

function MobileMenu() {
  return (
    <div className="lg:hidden">
      <Link href="/contact" className="btn-primary text-sm !py-2 !px-4">
        Free Estimate
      </Link>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-[var(--color-dark)] text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>
              AZ PRO<span className="text-[var(--color-accent)]"> CONTRACTORS</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Premium roofing services for Phoenix, Arizona and surrounding communities. Licensed, bonded, and insured.
            </p>
            <p className="text-gray-400 text-sm">
              Proudly connected with <a href="https://www.xrproofing.com" className="text-[var(--color-gold)] hover:underline">XRP Roofing</a>.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-lg">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/services/roof-repair" className="hover:text-white transition-colors">Roof Repair</Link></li>
              <li><Link href="/services/roof-replacement" className="hover:text-white transition-colors">Roof Replacement</Link></li>
              <li><Link href="/services/foam-roofing" className="hover:text-white transition-colors">Foam Roofing</Link></li>
              <li><Link href="/services/tile-roofing" className="hover:text-white transition-colors">Tile Roofing</Link></li>
              <li><Link href="/services/commercial-roofing" className="hover:text-white transition-colors">Commercial Roofing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/service-areas" className="hover:text-white transition-colors">Service Areas</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-lg">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-2">
                <span className="mt-1">📍</span>
                <span>10008 W Madrugada Ct<br />Phoenix, AZ 85037</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <a href="tel:623-246-7985" className="hover:text-white transition-colors">(623) 246-7985</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} AZ Pro Contractors LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[var(--color-accent)] p-3 flex items-center justify-center gap-4 lg:hidden z-50 shadow-[0_-4px_12px_rgba(0,0,0,0.15)]">
      <a href="tel:623-246-7985" className="flex items-center gap-2 text-white font-bold text-lg">
        <span>📞</span> Call (623) 246-7985
      </a>
    </div>
  );
}
