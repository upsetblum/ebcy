import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NODE_ENV === 'production' ? 'https://ebcy-portfolio.com' : 'http://localhost:3000'),
  title: "EBCY - Emmanuelle Baudin | Portfolio Artistique",
  description: "Portfolio artistique d'Emmanuelle Baudin (EBCY) - Art contemporain, sensibilisation environnementale et créations artistiques",
  keywords: "art contemporain, EBCY, Emmanuelle Baudin, portfolio artistique, environnement, 7ème continent",
  authors: [{ name: "Emmanuelle Baudin" }],
  creator: "Emmanuelle Baudin",
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: { url: '/apple-icon.svg', type: 'image/svg+xml' },
  },
  openGraph: {
    title: "EBCY - Emmanuelle Baudin | Portfolio Artistique",
    description: "Découvrez l'univers artistique d'Emmanuelle Baudin à travers ses créations contemporaines",
    type: "website",
    locale: "fr_FR",
    images: [{ url: "/ebcy-logo.jpg" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
