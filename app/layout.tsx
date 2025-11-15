// app/layout.tsx (Server Component)
import type { Metadata } from "next";
import { Inter, Poppins, Dancing_Script, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ClientWrapper from "@/components/ClientWrapper";
import { Toaster } from "@/components/ui/toaster";
import { ConfettiProvider } from "@/contexts/ConfettiContext";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "optional" });
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "optional",
});
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400"], // thin/regular weight
  variable: "--font-bricolage",
});
const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
  weight: "700",
  display: "optional",
});

// ✅ Updated & SEO-optimized Metadata
export const metadata: Metadata = {
  title: "Digizinc | Digital Marketing & Branding Solutions",
  description:
    "Digizinc delivers innovative digital marketing, creative branding, and data-driven growth solutions. We help businesses transform their online presence with automation, AI, and strategic campaigns that deliver measurable ROI.",
  keywords: [
    "digital marketing agency",
    "branding experts",
    "data-driven marketing",
    "AI marketing solutions",
    "machine learning marketing",
    "generative design",
    "creative content creation",
    "digital transformation",
    "brand identity design",
    "marketing automation",
    "ROI-focused campaigns",
    "web design and development",
    "performance marketing",
    "SEO and SEM",
    "Digizinc",
  ],
  authors: [{ name: "Digizinc" }],

  openGraph: {
    title: "Digizinc | Digital Marketing & Branding Agency",
    description:
      "Partner with Digizinc for innovative branding and ROI-driven digital marketing. From AI-powered strategies to creative design, we elevate your brand online.",
    url: "https://digizinc.com/",
    siteName: "Digizinc",
    images: [
      {
        url: "https://miscellaneous-0.s3.ap-south-1.amazonaws.com/digizinc_main_og.jpg",
        width: 1200,
        height: 630,
        alt: "Digizinc - Digital Marketing & Branding Agency",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Digizinc | Digital Marketing & Branding Agency",
    description:
      "Transform your brand with Digizinc — data-driven marketing, creative design, and ROI-focused strategies tailored to your growth.",
    images: [
      "https://miscellaneous-0.s3.ap-south-1.amazonaws.com/digizinc_main_og.jpg",
    ],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://vitals.vercel-insights.com" />
        <link rel="preconnect" href="https://miscellaneous-0.s3.ap-south-1.amazonaws.com" />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} ${dancingScript.variable} ${bricolage.variable} min-h-screen bg-background font-sans`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ConfettiProvider>
            <ClientWrapper>
              <Navbar />
              <main>{children}</main>
              <Footer />
              <Toaster />
            </ClientWrapper>
          </ConfettiProvider>
        </ThemeProvider>
        <Analytics />

        {/* ✅ Fixed JSON-LD (structured data) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "Digizinc",
                url: "https://digizinc.com",
                logo: "https://digizinc.com/digizinc-main-logo.jpg",
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: "+91-97015-63362",
                  contactType: "customer service",
                },
                sameAs: [
                  "https://dribbble.com/digizinc_",
                  "https://medium.com/@digizinc_",
                  "https://www.instagram.com/digizinc_",
                  "https://www.behance.net/digizinc_",
                  "https://x.com/digizinc_",
                ],
              },
              null,
              2
            ),
          }}
        />
        {/* Tidio Chatbot Script Placeholder */}
        <script
          // Replace the src with the script from your Tidio account
          src="//code.tidio.co/YOUR_TIDIO_CODE.js"
          defer
        ></script>
      </body>
    </html>
  );
}
