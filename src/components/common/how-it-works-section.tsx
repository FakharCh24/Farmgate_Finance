

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const steps = [
  {
    title: 'Register',
    description: 'Create your Farmgate Finance account using your FarmSource credentials.'
  },
  {
    title: 'Daily Data Transfer',
    description: 'Fonterra securely transfers your milk production and pricing data (kgMS, volume, quality) to us each day.'
  },
  {
    title: 'Advance Payment',
    description: 'We advance 100% of your forecasted payment (less our fee and interest) directly to your nominated bank account.'
  },
  {
    title: 'Settlement',
    description: 'When Fonterra makes the final payment, we settle your advance. If the final milk price is higher than forecast, we refund the extra to you. If the price is lower, we absorb the difference — you keep the full advance.'
  }
];

export function HowItWorksSection() {
  return (
    <section className="w-full py-20 md:py-28 bg-gray-50/50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Farmgate Finance makes it simple for farmers to access their milk payments early.
          </p>
          <div className="mt-8 mb-12 flex flex-col items-center justify-center">
            <a
              href="https://nzfarmsource.co.nz"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-lg p-2 transition-transform focus:outline-none focus:ring-2 focus:ring-[#2E9B5B] hover:scale-105 active:scale-100"
              aria-label="Visit FarmSource website (opens in new tab)"
            >
              <span className="relative flex items-center">
                <Image
                  src="/farmsource.png"
                  alt="FarmSource Logo"
                  width={200}
                  height={60}
                  data-ai-hint="company logo"
                  className="transition-transform duration-300"
                />
              </span>
              <span className="sr-only">(opens in new tab)</span>
            </a>
            <span className="mt-2 text-xs text-[#2E9B5B] font-semibold tracking-wide bg-[#2E9B5B]/10 px-2 py-0.5 rounded">Official Partner</span>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 * idx }}
              viewport={{ once: true }}
              className="h-full flex"
            >
              <div className="bg-white border-2 border-[#2E9B5B] rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group bg-card w-full flex flex-col items-center text-center p-8">
                <div className="text-3xl font-bold text-[#2E9B5B] mb-2">{idx + 1}</div>
                <h3 className="text-xl font-bold mb-2 text-[#234066]">{step.title}</h3>
                <p className="text-muted-foreground text-base">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 border border-[#2E9B5B] mt-8">
          <h3 className="text-2xl font-bold text-[#234066] mb-4">Example scenario</h3>
          <ul className="list-disc pl-6 text-base text-muted-foreground space-y-2 mb-4">
            <li>At the start of the season, Fonterra forecasts a milk price of <span className="font-bold text-[#234066]">$9.80/kgMS</span>.</li>
            <li>Farmgate Finance establishes a Milk Price Reserve (MPR) floor of <span className="font-bold text-[#234066]">$9.30/kgMS</span> to protect your breakeven point.</li>
            <li>For an average farmer producing <span className="font-bold text-[#234066]">176,875 kgMS</span>, the total expected payout over the season is approximately <span className="font-bold text-[#234066]">$1,742,769</span> based on the $9.80/kgMS forecast.</li>
          </ul>
          <div className="mb-2 font-bold text-[#234066]">During the season:</div>
          <ul className="list-disc pl-6 text-base text-muted-foreground mb-4">
            <li>Farmgate Finance advances monthly payments aligned with Fonterra’s forecast and payment schedule — giving you early access to your income and smoothing your cashflow.</li>
          </ul>
          <div className="mb-2 font-bold text-[#234066]">At the end of the season:</div>
          <ul className="list-disc pl-6 text-base text-muted-foreground">
            <li>If the final milk price is <span className="font-bold text-[#234066]">$10.00/kgMS</span> (above forecast):
              <ul className="list-disc pl-6">
                <li>You receive the full benefit of this price increase.</li>
                <li>The total payout is reconciled at $10.00/kgMS, and you are paid the difference between what was advanced based on the $9.80/kgMS forecast and the final price of $10.00/kgMS.</li>
              </ul>
            </li>
            <li>If the final milk price falls below forecast (e.g., <span className="font-bold text-[#234066]">$9.20/kgMS</span>):
              <ul className="list-disc pl-6">
                <li>Farmgate Finance absorbs the shortfall down to the $9.30/kgMS floor.</li>
                <li>You keep your advance — no repayments required — ensuring you’re protected from downside risk.</li>
              </ul>
            </li>
          </ul>
          <div className="mt-4 bg-[#F6FAF7] rounded-lg p-4 border border-[#2E9B5B]/30">
            <h4 className="text-lg font-semibold text-[#234066] mb-2">Key message for farmers:</h4>
            <ul className="list-disc pl-5 text-sm text-[#234066] space-y-1">
              <li><span className="font-semibold">This is a true cashflow facility</span> — you get certainty, liquidity, and protection for your breakeven point.</li>
              <li>If the milk price rises, you keep <span className="font-semibold">100% of the upside above forecast</span>.</li>
              <li>If the milk price falls, Farmgate Finance absorbs the difference down to the agreed floor.</li>
              <li>You receive monthly payments of <span className="font-semibold">100% of the milk supplied</span> aligned with Fonterra’s schedule — no waiting for retro adjustments.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
