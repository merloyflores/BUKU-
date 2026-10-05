import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";

const siteUrl = "https://buku-web.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "BUKUË | Consultoría Ambiental en Costa Rica",
    template: "%s | BUKUË",
  },
  description:
    "Consultoría ambiental estratégica en Costa Rica: viabilidad ambiental ante SETENA, salud ocupacional, certificaciones y gestión sostenible para empresas y proyectos.",
  keywords: [
    "consultoría ambiental Costa Rica",
    "SETENA",
    "viabilidad ambiental",
    "gestión ambiental",
    "salud ocupacional",
    "certificaciones ambientales",
    "sostenibilidad Costa Rica",
    "BUKUË",
  ],
  authors: [{ name: "BUKUË Consultorías Ambientales" }],
  creator: "BUKUË Consultorías Ambientales",
  publisher: "BUKUË Consultorías Ambientales",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_CR",
    url: siteUrl,
    siteName: "BUKUË Consultorías Ambientales",
    title: "BUKUË | Consultoría Ambiental en Costa Rica",
    description:
      "Soluciones técnicas para cumplimiento ambiental, SETENA, salud ocupacional, certificaciones y sostenibilidad en Costa Rica.",
    images: [
      {
        url: "/LOGO_BUKUE_sin fondo.png",
        alt: "BUKUË Consultorías Ambientales",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BUKUË | Consultoría Ambiental en Costa Rica",
    description:
      "Consultoría ambiental, SETENA, salud ocupacional, certificaciones y sostenibilidad en Costa Rica.",
    images: ["/LOGO_BUKUE_sin fondo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "BUKUË Consultorías Ambientales",
  url: siteUrl,
  logo: `${siteUrl}/LOGO_BUKUE_sin%20fondo.png`,
  email: "admin@bukuecr.com",
  telephone: "+50688017441",
  address: {
    "@type": "PostalAddress",
    addressLocality: "San José",
    addressCountry: "CR",
  },
  areaServed: {
    "@type": "Country",
    name: "Costa Rica",
  },
  sameAs: [
    "https://www.instagram.com/bukue_consultores",
    "https://www.facebook.com/share/18C9U7tT12/",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Navbar />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
