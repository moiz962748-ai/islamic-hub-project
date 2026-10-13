import React from 'react';
import type { Metadata } from 'next';
import TopBar from '@/src/components/layout/TopBar';
import Navbar from '@/src/components/layout/Navbar';
import Footer from '@/src/components/layout/Footer';
import '@/src/index.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://islamhub.example.com'),
  title: {
    default: 'IslamHub — Prayer Times, Zakat, Duas & Islamic Guides',
    template: '%s | IslamHub',
  },
  description:
    'Global navigation and authentic Islamic platform featuring accurate prayer times, reliable Zakat calculators, authenticated Duas with audio, and verified step-by-step worship guides.',
  keywords: [
    'Islam',
    'Prayer Times',
    'Namaz Guide',
    'Zakat Calculator',
    'Ramadan Timings',
    'Authentic Duas',
    'Dua e Qunoot',
    '99 Names of Allah',
    'Islamic Tools',
    'Qibla Finder',
  ],
  authors: [{ name: 'IslamHub Scholarly Board' }],
  creator: 'IslamHub',
  publisher: 'IslamHub',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'IslamHub — Authentic Islamic Platform & Tools',
    description:
      'Verified Islamic utility platform offering prayer times, Zakat calculations, authentic Prophetic Duas, and step-by-step worship guides.',
    url: 'https://islamhub.example.com',
    siteName: 'IslamHub',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IslamHub — Authentic Islamic Platform & Tools',
    description:
      'Accurate prayer times, Zakat calculators, authentic Duas, and verified worship manuals for the global Muslim ummah.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body 
        className="min-h-screen flex flex-col bg-black text-neutral-50 font-sans antialiased selection:bg-white selection:text-black"
        suppressHydrationWarning
      >
        <header className="w-full flex flex-col z-50">
          <TopBar />
          <Navbar />
        </header>

        <main className="flex-grow flex flex-col relative w-full bg-black text-neutral-50">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
