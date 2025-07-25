import JsonLd from '@/components/JsonLd';

export const metadata = {
  title: "About Farmgate Finance | NZ Dairy Cashflow Solutions",
  description: "Learn about Farmgate Finance, our mission, and how we empower New Zealand dairy farmers with innovative cashflow solutions.",
  alternates: {
    canonical: "https://farmgatefinance.co.nz/about"
  }
};

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  'name': 'Farmgate Finance Limited',
  'url': 'https://farmgatefinance.co.nz',
  'logo': 'https://farmgatefinance.co.nz/fargate-logo.png',
  'description': 'Farmgate Finance empowers NZ dairy farmers with advance milk payment solutions and transparent pricing.',
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
      'streetAddress': 'Level 4, 287-293 Durham Street North',
      'addressLocality': 'Christchurch',
      'postalCode': '8013',
      'addressCountry': 'NZ'
    }
  ],
  'contactPoint': [{
    '@type': 'ContactPoint',
    'telephone': '+64-9-950-5891',
    'contactType': 'customer service',
    'email': 'info@farmgatefinance.co.nz',
    'areaServed': 'NZ',
    'availableLanguage': ['English']
  }]
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={orgJsonLd} />
      <div className="bg-white">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">About Farmgate Finance</h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              Revolutionizing cash flow for New Zealand's dairy farmers.
            </p>
          </div>

          <div className="mt-16 grid lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/tech.webp"
                alt="Team of Farmgate Finance"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                data-ai-hint="team meeting"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold font-headline text-[#234066]">Our Story</h2>
              <p className="text-muted-foreground">
                Farmgate Finance was founded by a team of finance and technology experts with deep roots in New Zealand's agricultural sector. We saw firsthand how dairy farmers, the backbone of our economy, were hampered by outdated payment systems that delayed access to their hard-earned income.
              </p>
              <p className="text-muted-foreground">
                Driven by a passion for innovation and a commitment to supporting our rural communities, we set out to build a solution. Farmgate Finance was born from this vision: a simple, secure, and transparent platform to give farmers immediate control over their cash flow.
              </p>
            </div>
          </div>

          <div className="mt-24 grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 lg:order-2">
              <h2 className="text-3xl font-bold font-headline text-[#234066]">Our Mission</h2>
              <p className="text-muted-foreground">
                Our mission is to empower New Zealand dairy farmers by providing them with the financial tools they need to thrive. We believe that by eliminating the long wait for milk payments, we can help farmers invest in their operations, manage expenses with confidence, and build more resilient and prosperous businesses for generations to come.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-2xl lg:order-1">
              <Image
                src="/shakehand.webp"
                alt="New Zealand farm landscape"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                data-ai-hint="farm landscape"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}