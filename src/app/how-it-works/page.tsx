export const metadata = {
  title: 'How It Works | Farmgate Finance Milk Receivables Cashflow',
  description: 'Learn how Farmgate Finance gives NZ farmers 100% monthly payment on milk supplied — with cashflow certainty and downside price protection.'
};

import { HowItWorksSection } from '@/components/common/how-it-works-section';
import Link from 'next/link';

export default function HowItWorksPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary mb-8 text-center">
          How It Works: Monthly Payments Aligned with Fonterra
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 text-center">
          Learn how our <strong>cashflow facility for dairy farmers</strong> provides <strong>advance milk payment</strong> and <strong>price protection for dairy farmers</strong>—with <strong>monthly payments for NZ farmers</strong> and <strong>Fonterra milk payment advance</strong>.
        </p>
        <HowItWorksSection showLearnMoreButton={false} />
        <div className="mt-12 text-center">
          <Link href="/partners" className="text-accent underline font-medium">See our trusted partners</Link>
        </div>
        <div className="mt-4 text-center">
          <Link href="/faq" className="text-accent underline font-medium">Read our FAQs about milk receivables finance</Link>
        </div>
      </div>
    </div>
  );
} 