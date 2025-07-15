import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">About Farmgate Access</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Revolutionizing cash flow for New Zealand's dairy farmers.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-16 items-center">
          <div className="rounded-lg overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <Image
              src="/tech.jpg"
              alt="Technology team at Farmgate"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
              data-ai-hint="technology team"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold font-headline">Our Story</h2>
            <p className="text-muted-foreground">
              Farmgate Finance was founded by a team of finance and technology experts with deep roots in New Zealand's agricultural sector. We saw firsthand how dairy farmers, the backbone of our economy, were hampered by outdated payment systems that delayed access to their hard-earned income.
            </p>
            <p className="text-muted-foreground">
              Driven by a passion for innovation and a commitment to supporting our rural communities, we set out to build a solution. Farmgate Access was born from this vision: a simple, secure, and transparent platform to give farmers immediate control over their cash flow.
            </p>
          </div>
        </div>

        <div className="mt-24 grid lg:grid-cols-2 gap-16 items-center">
           <div className="space-y-6 lg:order-2">
            <h2 className="text-3xl font-bold font-headline">Our Mission</h2>
            <p className="text-muted-foreground">
              Our mission is to empower New Zealand dairy farmers by providing them with the financial tools they need to thrive. We believe that by eliminating the long wait for milk payments, we can help farmers invest in their operations, manage expenses with confidence, and build more resilient and prosperous businesses for generations to come.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-2xl lg:order-1 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <Image
              src="/shakehand.jpg"
              alt="Handshake partnership"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
              data-ai-hint="handshake partnership"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
