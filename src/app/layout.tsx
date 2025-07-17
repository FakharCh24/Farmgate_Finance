import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/common/header';
import { Footer } from '@/components/common/footer';

export const metadata: Metadata = {
  title: 'Farmgate Finance | Cashflow Facility for NZ Dairy Farmers',
  description: 'Get paid upfront for your Fonterra milk receivables with Farmgate Finance. Cashflow certainty and price protection for NZ dairy farmers.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@500;700&display=swap"
          rel="stylesheet"
        />
        {/* Organization Schema Markup */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          'name': 'Farmgate Finance Limited',
          'url': 'https://farmgatefinance.co.nz',
          'logo': 'https://farmgatefinance.co.nz/fargate-logo.png',
          'contactPoint': [{
            '@type': 'ContactPoint',
            'telephone': '+64-9-950-5891',
            'contactType': 'customer service',
            'email': 'info@farmgatefinance.co.nz',
            'areaServed': 'NZ',
            'availableLanguage': ['English']
          }],
          'address': [
            {
              '@type': 'PostalAddress',
              'streetAddress': 'Level 10, 11 Britomart Place, Auckland CBD',
              'addressLocality': 'Auckland',
              'postalCode': '1010',
              'addressCountry': 'NZ'
            },
            {
              '@type': 'PostalAddress',
              'streetAddress': 'Awly Building, Level 4, 287-293 Durham Street North',
              'addressLocality': 'Christchurch',
              'postalCode': '8013',
              'addressCountry': 'NZ'
            }
          ]
        }) }} />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-body antialiased',
        )}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
