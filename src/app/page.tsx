
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { HowItWorksSection } from '@/components/common/how-it-works-section';
import { PartnersSection } from '@/components/common/partners-section';
import { HomeFaqSection } from '@/components/common/home-faq-section';
import { ArrowRight, Download, PlayCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';


function AnimatedSection({ children, className }: { children: React.ReactNode, className?: string }) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section
      ref={ref}
      className={cn(
        'w-full transition-all duration-1000 ease-out',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
        className
      )}
    >
      {children}
    </section>
  );
}


function AboutUsPreview() {
  return (
    <AnimatedSection className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">
              Empowering New Zealand's Farmers
            </h2>
            <p className="text-muted-foreground">
              Farmgate Finance was founded by a team of finance and technology experts with deep roots in New Zealand's agricultural sector. We saw firsthand how dairy farmers, the backbone of our economy, were hampered by outdated payment systems.
            </p>
            <p className="text-muted-foreground">
              Driven by a passion for innovation, we built Farmgate Access: a simple, secure, and transparent platform to give farmers immediate control over their cash flow.
            </p>
            <Button asChild variant="link" className="px-0">
              <Link href="/about">
                Learn More About Our Story <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg transition-transform duration-500 hover:scale-105">
            <Image
              src="/newzealand.jpg"
              alt="New Zealand landscape"
              width={600}
              height={200}
              className="w-full h-auto object-cover"
              data-ai-hint="new zealand"
            />
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}

function TermsPreview() {
  return (
    <AnimatedSection className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">
            Our Commitment to Transparency
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We believe in clear and fair terms. Our Terms & Conditions outline the agreement between us and our valued users, ensuring a transparent and trustworthy relationship. We encourage you to read them to understand your rights and obligations.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/terms">
                Read Terms & Conditions <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}


export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 lg:py-40 overflow-hidden">
        <Image
          src="/Farm.jpg"
          alt="Dairy farm background"
          layout="fill"
          objectFit="cover"
          className="z-0"
          data-ai-hint="dairy farm"
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="container relative z-20 mx-auto px-4 md:px-6 text-center">
            <h1 className={cn("text-4xl md:text-5xl lg:text-6xl font-bold font-headline tracking-tighter text-white transition-all duration-1000 ease-out", isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10')}>
                Get 100% of your milk receivables TODAY with{' '}
                <span className="text-accent">Farmgate Finance.</span>
            </h1>
            <p className={cn("mt-4 max-w-3xl mx-auto text-lg md:text-xl text-gray-200 transition-all duration-1000 ease-out delay-300", isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10')}>
                Why wait till next year to get paid for your milk? Get paid NOW.
            </p>
            <div className={cn("mt-8 flex flex-col sm:flex-row justify-center gap-4 transition-all duration-1000 ease-out delay-500", isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10')}>
                <Button asChild size="lg" className="font-bold">
                <Link href="/login">
                    Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                </Button>
                <Button asChild size="lg" variant="secondary">
                <Link href="#how-it-works">Learn More</Link>
                </Button>
            </div>
        </div>
      </section>

      <AnimatedSection>
        <PartnersSection />
      </AnimatedSection>
      
      <HowItWorksSection />
      
      {/* Video Section */}
      <AnimatedSection className="w-full py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
               <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">
                Unlock Your Cash Flow in 90 Seconds
              </h2>
              <p className="text-muted-foreground text-lg">
                Watch our short video to see exactly how Farmgate Access can transform your dairy business by giving you immediate access to the money you've already earned.
              </p>
              <p className="text-muted-foreground">
                No more waiting, no more uncertainty. Just simple, fast, and secure payments so you can focus on what you do best: farming.
              </p>
            </div>
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center relative shadow-xl overflow-hidden group">
              <Image
                src="https://placehold.co/1280x720.png"
                alt="Video thumbnail"
                layout="fill"
                objectFit="cover"
                className="rounded-lg transition-transform duration-500 group-hover:scale-105"
                data-ai-hint="farm video"
              />
              <div className="absolute inset-0 bg-black/30 rounded-lg flex items-center justify-center transition-colors group-hover:bg-black/40">
                <PlayCircle className="h-20 w-20 text-white/80 transition-all duration-300 group-hover:text-white group-hover:scale-110 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Cost & Scenarios Section */}
      <AnimatedSection className="w-full py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-gray-900">
              Transparent Pricing
            </h2>
            <p className="mt-3 text-lg text-muted-foreground">
              No hidden fees. Just simple, clear costs.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 40 }} transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }} viewport={{ once: true }}>
              <Card className="lg:col-span-1 bg-primary/5 border-primary/20 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl text-primary">
                    Our Fees
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-primary/80">
                  <p>
                    We charge a small administration fee on the value of the milk
                    solid receivables purchased.
                  </p>
                  <p>
                    Interest is calculated daily on the outstanding balance and
                    charged monthly. It's that simple.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
              <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 40 }} transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }} viewport={{ once: true }}>
                <Card className="shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <CardHeader>
                    <CardTitle className="font-headline">
                      What if Fonterra pays less?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      If the final milk price is lower than the advance rate, the
                      difference is simply added to your outstanding balance. We
                      manage the risk, you get the cash flow.
                    </p>
                    <p className="mt-4 text-sm text-primary font-semibold">
                      Example coming soon.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 40 }} transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }} viewport={{ once: true }}>
                <Card className="shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <CardHeader>
                    <CardTitle className="font-headline">
                      What if Fonterra pays more?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      If the final milk price is higher, the extra payment from
                      Fonterra is credited to your Farmgate account, reducing your
                      outstanding balance. You always get the full benefit.
                    </p>
                    <p className="mt-4 text-sm text-primary font-semibold">
                      Example coming soon.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AboutUsPreview />

      {/* Download Guide Section */}
      <AnimatedSection className="w-full py-20 md:py-28 bg-accent/20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-gray-900">
            Ready to Dive Deeper?
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-lg text-muted-foreground">
            Download our comprehensive guide to learn all the details about how
            Farmgate Access can benefit your business.
          </p>
          <div className="mt-8">
            <Button
              size="lg"
              className="font-bold bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Full Guide (PDF)
            </Button>
          </div>
        </div>
      </AnimatedSection>

      <HomeFaqSection />
      
      <TermsPreview />

    </div>
  );
}
