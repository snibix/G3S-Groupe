import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Barlow, Barlow_Condensed } from "next/font/google";
import { cn } from "@/lib/utils";

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-sans',
});

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: "G3S Sécurité | Votre Partenaire en Protection et Gardiennage",
  description: "Découvrez G3S, expert en sécurité, gardiennage et protection rapprochée. Des solutions sur mesure pour les entreprises et les particuliers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={cn("font-sans overflow-x-hidden w-full", barlow.variable, barlowCondensed.variable)}>
      <body className="overflow-x-hidden w-full flex flex-col min-h-screen">
        <Header />
        <div style={{ flex: 1 }}>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
