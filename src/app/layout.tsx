import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://hcworkforcesolutions.am"),
  title: {
    default: "HC Workforce Solutions LLC | Staffing & Recruitment Agency Armenia",
    template: "%s | HC Workforce Solutions LLC",
  },
  description:
    "HC Workforce Solutions LLC is Armenia's trusted staffing and workforce solutions partner. We provide qualified personnel for hospitality, healthcare, retail, corporate, industrial, and household sectors across Yerevan and Armenia.",
  keywords: [
    "Workforce Solutions Armenia",
    "Staffing Agency Armenia",
    "Recruitment Agency Armenia",
    "Corporate Staffing Armenia",
    "Hotel Staffing Armenia",
    "Healthcare Staffing Armenia",
    "Housekeeping Staffing Armenia",
    "Facility Support Staffing Armenia",
    "Workforce Management Armenia",
    "Employee Recruitment Armenia",
    "Staff Placement Armenia",
    "Business Staffing Solutions Armenia",
    "Yerevan Staffing Agency",
    "Armenia HR Solutions",
  ],
  authors: [{ name: "HC Workforce Solutions LLC" }],
  creator: "HC Workforce Solutions LLC",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hcworkforcesolutions.am",
    siteName: "HC Workforce Solutions LLC",
    title: "HC Workforce Solutions LLC | Staffing & Recruitment Agency Armenia",
    description:
      "Connecting businesses with qualified workforce across Armenia. Staffing solutions for hospitality, healthcare, retail, corporate, and more.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "HC Workforce Solutions LLC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HC Workforce Solutions LLC | Staffing Agency Armenia",
    description:
      "Armenia's trusted workforce and staffing solutions partner. Connecting People • Supporting Families • Empowering Businesses.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-white">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
