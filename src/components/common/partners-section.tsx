import { partners } from '@/lib/constants';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const allPartners = [
  ...partners.banking.list,
  ...partners.technology.list,
  ...partners.risk.list,
  ...partners.accounting.list,
];

export function PartnersSection() {
  return (
    <section className="w-full py-12 md:py-20 bg-gray-50/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold tracking-wider text-primary uppercase">
            Trusted by Industry Leaders
          </h2>
          <p className="mt-2 text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
            We partner with the best in finance and technology
          </p>
        </div>
        <div className="mt-12">
          <motion.div
            className="flex justify-center items-center flex-wrap gap-x-8 gap-y-8 md:gap-x-12 lg:gap-x-16"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12 } },
            }}
          >
            {allPartners.slice(0, 12).map((partner, i) => (
              <motion.div
                key={partner.name}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
                }}
              >
                <div
                className="flex justify-center items-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <Link href={partner.website} target="_blank" rel="noopener noreferrer">
                  <div className="relative w-36 h-16 flex items-center justify-center">
                    <Image
                      src={partner.logoUrl}
                      alt={`${partner.name} logo`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain"
                      data-ai-hint="company logo"
                    />
                  </div>
                </Link>
              </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
