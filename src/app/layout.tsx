import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'New Jersey Basements | Premier Basement Finishing & Remodeling',
    template: '%s | New Jersey Basements',
  },
  description: 'Transform your basement into beautiful living space. Expert basement finishing, remodeling, waterproofing, and custom build-outs across New Jersey. Free estimates!',
  keywords: ['basement finishing', 'basement remodeling', 'New Jersey', 'basement waterproofing', 'basement renovation', 'NJ basement contractor'],
  authors: [{ name: 'New Jersey Basements' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'New Jersey Basements',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
