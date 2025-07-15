import { Card, CardContent } from '@/components/ui/card';
import { partners } from '@/lib/constants';
import { ArrowUpRight, Banknote, Cpu, FileText, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';

interface Partner {
  name: string;
  logoUrl: string;
  website: string;
}

interface PartnerSectionProps {
  title: string;
  icon: LucideIcon;
  list: Partner[];
}

const PartnerCard = ({ partner }: { partner: Partner }) => (
  <Link href={partner.website} target="_blank" rel="noopener noreferrer" className="block group">
    <Card className="h-full flex flex-col items-center justify-center p-4 transition-all duration-300 hover:shadow-lg hover:border-primary/50">
      <CardContent className="p-0 flex flex-col items-center justify-center space-y-2">
        <div className="relative w-40 h-20">
          <Image
            src={partner.logoUrl}
            alt={`${partner.name} logo`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain"
            data-ai-hint="company logo"
          />
        </div>
        <div className="text-sm font-medium text-muted-foreground group-hover:text-primary flex items-center">
          {partner.name}
          <ArrowUpRight className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </CardContent>
    </Card>
  </Link>
);

const PartnerSection = ({ title, icon: Icon, list }: PartnerSectionProps) => (
  <section className="mb-16">
    <div className="flex items-center gap-4 mb-8">
      <Icon className="h-8 w-8 text-primary" />
      <h2 className="text-3xl font-bold font-headline">{title}</h2>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {list.map((partner) => (
        <PartnerCard key={partner.name} partner={partner} />
      ))}
    </div>
  </section>
);

export default function PartnersPage() {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">
            Our Trusted Partners
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            We collaborate with industry leaders to provide you with a seamless and secure financial experience.
          </p>
        </div>

        <PartnerSection title={partners.banking.title} icon={Banknote} list={partners.banking.list} />
        <PartnerSection title={partners.technology.title} icon={Cpu} list={partners.technology.list} />
        <PartnerSection title={partners.risk.title} icon={ShieldCheck} list={partners.risk.list} />
        <PartnerSection title={partners.accounting.title} icon={FileText} list={partners.accounting.list} />

      </div>
    </div>
  );
}
