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
import { useEffect, useState, useRef } from 'react';
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

export default function HomeClient() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);

  // Video autoplay on scroll
  const videoRef = useRef<HTMLVideoElement>(null);
  const { ref: videoSectionRef, isVisible: videoVisible } = useScrollAnimation({ threshold: 0.5 });
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (videoVisible) {
      if (video.paused) {
        video.play().catch(() => {});
      }
    } else {
      if (!video.paused) {
        video.pause();
      }
    }
  }, [videoVisible]);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/Farm.jpg"
          alt="Farmgate Finance cashflow facility for NZ dairy farmers"
          layout="fill"
          objectFit="cover"
          className="z-0"
          data-ai-hint="dairy farm"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="container relative z-20 mx-auto px-4 md:px-6 text-center flex flex-col items-center justify-center h-full">
            <h1 className={cn("text-3xl md:text-4xl lg:text-5xl font-bold font-headline tracking-tighter text-white leading-tight transition-all duration-1000 ease-out", show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10')}>
                Advance Your Fonterra Milk Receivables Today with{' '}
                <span style={{ color: '#2E9B5B' }}>Farmgate Finance</span>
            </h1>
            <p className={cn("mt-4 max-w-3xl mx-auto text-lg md:text-xl text-gray-200 transition-all duration-1000 ease-out delay-300", show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10')}>
                Farmgate Finance helps New Zealand dairy farmers get paid upfront for their Fonterra milk receivables. Our advance payment service gives you immediate access to 100% of your forecasted milk payout, improving your cashflow and helping you plan with certainty.
            </p>
            <div className={cn("mt-8 flex flex-col sm:flex-row justify-center gap-4 transition-all duration-1000 ease-out delay-500", show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10')}>
                <Button asChild size="lg" className="font-bold bg-[#2E9B5B] hover:bg-[#26884C] text-white">
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

      {/* Partners Section */}
      <AnimatedSection>
        <PartnersSection />
      </AnimatedSection>

      {/* See Trusted Partners Link - standalone, lower on the page */}
      <div className="text-center mt-4">
        <Link href="/partners" className="text-accent underline font-medium">See our trusted partners</Link>
      </div>

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* Video Section */}
      <div ref={videoSectionRef}>
        <AnimatedSection className="w-full py-10 md:py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">
                  Unlock Your Cash Flow in 60 Seconds
                </h2>
                <p className="text-muted-foreground text-lg">
                  Watch our short video to see exactly how Farmgate Access can transform your dairy business by giving you immediate access to the money you've already earned.
                </p>
                <p className="text-muted-foreground">
                  No more waiting, no more uncertainty. Just simple, fast, and secure payments so you can focus on what you do best: farming.
                </p>
                <div className="mt-8">
                  <Button asChild size="lg" className="font-bold bg-[#2E9B5B] hover:bg-[#26884C] text-white">
                    <Link href="/login">
                      Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center relative shadow-xl overflow-hidden group">
                <video
                  ref={videoRef}
                  src="/video.mp4"
                  controls
                  poster="/vid.png"
                  className="rounded-lg w-full h-full object-cover"
                  preload="none"
                  muted
                />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Transparent Pricing / Cost & Scenarios Section */}
      <AnimatedSection className="w-full py-10 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-gray-900">
              Transparent Pricing
            </h2>
            <p className="mt-3 text-lg text-muted-foreground">
              No hidden fees. Just simple, clear costs.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 40 }} transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }} viewport={{ once: true }} className="h-full flex">
              <Card className="lg:col-span-1 bg-primary/5 border-primary/20 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl text-primary">
                    Our Fees
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-primary/80">
                  <p>
                    We charge a small administration fee on the receivables we purchase. There are no hidden fees.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 40 }} transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }} viewport={{ once: true }} className="h-full flex">
              <Card className="lg:col-span-1 bg-primary/5 border-primary/20 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl text-primary">
                    Interest Calculation
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-primary/80">
                  <p>
                    We also charge interest for the funds advanced based on the time before we get paid. The interest rate is generally the same as or lower than the overdraft rate charged by your bank.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 40 }} transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }} viewport={{ once: true }} className="h-full flex">
              <Card className="lg:col-span-1 bg-primary/5 border-primary/20 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl text-primary">
                    No Hidden Costs
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-primary/80">
                  <p>
                    There are no setup fees or hidden charges. All costs are clearly outlined up front for complete transparency.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* About Us Preview */}
      <AnimatedSection className="py-10 md:py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
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
                src="/Newzealand.jpg"
                alt="Farmgate Finance New Zealand landscape for dairy farmers"
                width={600}
                height={200}
                className="w-full h-auto object-cover"
                data-ai-hint="new zealand"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* FAQ Section */}
      <HomeFaqSection />

      {/* CTA after FAQ Section */}

      {/* Download Guide Section */}
      <AnimatedSection className="py-10 md:py-16 bg-[#F6FAF7] border-t border-[#2E9B5B]/20">
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-[#234066] mb-4">
            Ready to Dive Deeper?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mb-8">
            Make an appointment with one of our Business Development Managers to discuss how <span className="text-[#2E9B5B] font-semibold">Farmgate Finance</span> can benefit your farm.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="font-bold bg-[#2E9B5B] hover:bg-[#26884C] text-white shadow-lg">
              <a href="https://outlook.office365.com/owa/calendar/FarmgateAccessAppointments@yourdomain.com/bookings/" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" /> Book an Appointment
              </a>
            </Button>
            <Button asChild size="lg" className="font-bold bg-[#2E9B5B] hover:bg-[#26884C] text-white shadow-lg">
              <a href="/farmgate-checklist.pdf" download target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" /> Download Getting Started Checklist
              </a>
            </Button>
          </div>
        </div>
      </AnimatedSection>

      {/* Terms Preview */}
      <AnimatedSection className="py-10 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">
              Our Commitment to Transparency
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We believe in clear and fair terms. Our Terms & Conditions outline the agreement between us and our valued users, ensuring a transparent and trustworthy relationship. We encourage you to read them to understand your rights and obligations.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="font-bold bg-[#2E9B5B] hover:bg-[#26884C] text-white">
                <Link href="/terms">
                  Read Terms & Conditions <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
} 