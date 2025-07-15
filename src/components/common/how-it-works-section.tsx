

'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { UserPlus, ArrowLeftRight, Banknote, CheckCircle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

interface HowItWorksStep {
  icon: LucideIcon;
  title: string;
  description: string;
}

const howItWorksSteps: HowItWorksStep[] = [
  {
    icon: UserPlus,
    title: 'Sign Up',
    description: 'Sign up quickly and easily using your FarmSource credentials.',
  },
  {
    icon: ArrowLeftRight,
    title: 'Data Transfer',
    description: 'Your data is securely transferred from Fonterra to Farmgate daily.',
  },
  {
    icon: Banknote,
    title: 'Get Paid',
    description: 'Farmgate pays the full amount directly into your bank account.',
  },
  {
    icon: CheckCircle,
    title: 'Settlement',
    description: 'Fonterra pays Farmgate, completing the cycle. No hassle for you.',
  },
];

const AnimatedStepCard = ({
  step,
  index,
  isVisible,
}: {
  step: HowItWorksStep;
  index: number;
  isVisible: boolean;
}) => {
  const Icon = step.icon;
  return (
    <div
      className={cn(
        'transition-all duration-700 ease-out',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      )}
      style={{ transitionDelay: isVisible ? `${index * 150}ms` : '0ms' }}
    >
      <Card className="h-full text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group bg-card">
        <div className="absolute -top-4 -right-4 text-8xl font-bold text-primary/5 group-hover:text-primary/10 transition-colors duration-300">
          0{index + 1}
        </div>
        <CardHeader className="flex flex-col items-center justify-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
            <Icon className="h-8 w-8" />
          </div>
          <CardTitle className="font-headline text-xl">{step.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-sm">{step.description}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export function HowItWorksSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section
      id="how-it-works"
      ref={ref}
      className={cn(
        'w-full py-20 md:py-28 bg-gray-50/50 overflow-hidden transition-all duration-1000 ease-out',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">
            A Simple Path to Your Cash
          </h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
            Four simple steps to unlock your earnings instantly. Powered by
          </p>
          <div className="mt-8 mb-12 flex justify-center">
            <Image
              src="/farmsource.png"
              alt="FarmSource Logo"
              width={200}
              height={60}
              data-ai-hint="company logo"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {howItWorksSteps.map((step, index) => (
            <AnimatedStepCard
              key={index}
              step={step}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
