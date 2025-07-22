import { Card, CardContent } from '@/components/ui/card';
import { partners } from '@/lib/constants';
import { ArrowUpRight, Banknote, Cpu, FileText, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Trusted Partners | Farmgate Finance NZ Dairy Cashflow',
  description: 'Meet Farmgate Finance partners — working with NZ banks, Fonterra, FarmSource and leading technology firms for reliable farmer cashflow.',
};

interface Partner {
  name: string;
  logoUrl: string;
  website: string;
}

interface PartnerSectionProps {
  title: string;
  icon: LucideIcon;
  list: Partner[];
  description?: ReactNode;
}

const PartnerCard = ({ partner }: { partner: Partner }) => (
  <Link href={partner.website} target="_blank" rel="nofollow noopener noreferrer" className="block group">
    <Card className="h-full flex flex-col items-center justify-center p-4 transition-all duration-300 hover:shadow-lg hover:border-primary/50">
      <CardContent className="p-0 flex flex-col items-center justify-center space-y-2">
        <div className="relative w-40 h-20">
          <Image
            src={partner.logoUrl}
            alt={`Logo of ${partner.name} - Farmgate Finance partner for NZ dairy cashflow`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain"
            data-ai-hint="company logo"
            loading="lazy"
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

const PartnerSection = ({ title, icon: Icon, list, description }: PartnerSectionProps) => (
  <section className="mb-16">
    <div className="flex items-center justify-center gap-4 mb-8">
      <Icon className="h-8 w-8 text-primary" />
      <h2 className="text-3xl font-bold font-headline text-[#234066] text-center">{title}</h2>
    </div>
    {description && (
      <div className="max-w-2xl mx-auto flex flex-col gap-1 text-left text-muted-foreground text-sm mb-4 border-l-4 border-primary/40 pl-4">
        {description}
      </div>
    )}
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
            Trusted Partners
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Meet Farmgate Finance's partners – working with Fonterra, NZ Banks and leading technology companies for reliable farmer cashflow.
          </p>
          <div className="flex justify-center items-center mt-8">
            <a href="https://fonterra.com" target="_blank" rel="nofollow noopener noreferrer" className="block group flex flex-col items-center">
              <div className="relative w-80 h-40">
                <Image
                  src="/fonterra.png"
                  alt="Logo of Fonterra - Farmgate Finance partner for NZ dairy cashflow"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain"
                  data-ai-hint="Fonterra logo"
                  loading="lazy"
                />
              </div>
              <div className="text-sm font-medium text-muted-foreground group-hover:text-primary flex items-center justify-center mt-1 ml-6">
                Fonterra
                <ArrowUpRight className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </a>
          </div>
          <div className="max-w-xl mx-auto mt-4 bg-primary/5 border border-primary/10 rounded-lg p-4 text-center shadow-sm">
            <h2 className="text-lg font-semibold text-primary mb-1">Strategic Partner – Fonterra</h2>
            <p className="text-sm text-muted-foreground mb-1">
              Fonterra, a key partner for Farmgate Finance, is New Zealand's largest company and the backbone of our dairy sector. We work closely with Fonterra to receive daily, accurate data about your milk production and pricing, enabling us to calculate and advance payments reliably.
            </p>
            <p className="text-sm text-muted-foreground">
              Fonterra’s subsidiary, FarmSource, manages our relationship with farmers. Through FarmSource, we securely connect with your credentials, access your production data, and ensure that your payments are processed efficiently.
            </p>
          </div>
          {/* OLEA Partner Section */}
          <div className="flex justify-center items-center mt-8">
            <a href="https://olea.net" target="_blank" rel="nofollow noopener noreferrer" className="block group flex flex-col items-center">
              <div className="relative w-48 h-20 md:w-40 md:h-16">
                <Image
                  src="/olea.png"
                  alt="Logo of OLEA - Farmgate Finance global technology partner"
                  fill
                  sizes="(max-width: 768px) 60vw, (max-width: 1200px) 30vw, 20vw"
                  className="object-contain"
                  data-ai-hint="OLEA logo"
                  loading="lazy"
                />
              </div>
              <div className="text-sm font-medium text-muted-foreground group-hover:text-primary flex items-center justify-center mt-1 ml-6">
                OLEA
                <ArrowUpRight className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </a>
          </div>
          <div className="max-w-xl mx-auto mt-4 bg-primary/5 border border-primary/10 rounded-lg p-4 text-center shadow-sm">
            <h2 className="text-lg font-semibold text-primary mb-1">Global Technology Partner – OLEA</h2>
            <p className="text-sm text-muted-foreground mb-1">
              OLEA is a leading Singapore-based technology company with relationships with major global banks such as Standard Chartered and BBVA. As a global technology partner, OLEA brings international expertise and innovative solutions to Farmgate Finance, helping us deliver secure and efficient financial services to New Zealand farmers.
            </p>
          </div>
        </div>
        <PartnerSection
          title={partners.banking.title}
          icon={Banknote}
          list={partners.banking.list}
          description={
            'Farmgate Finance and the banks offer different but complementary financial solutions for farmers. While we may compete in some areas, we work closely with all major New Zealand banks to ensure payments flow smoothly.All major banks accept payments from Farmgate Finance, and we coordinate with them, so your financial arrangements work seamlessly alongside your existing bank facilities.'
          }
        />
        {/* Custom technology section: description first, then centered row of partner cards below */}
        <section className="mb-16">
          <div className="flex items-center justify-center gap-4 mb-8">
            <Cpu className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold font-headline text-[#234066] text-center">{partners.technology.title}</h2>
          </div>
          <div className="max-w-2xl mx-auto flex flex-col gap-1 text-left text-muted-foreground text-sm mb-8 border-l-4 border-primary/40 pl-4">
            <div>
              <div className="mb-1">Farmgate Finance relies on a trusted group of technology partners whose software and systems underpin the efficiency, security, and reliability of our service. These partners help us automate processes, minimize errors, and ensure fast, secure, and reliable service for farmers.</div>
              <ul className="space-y-0.5 pl-3">
                <li><span className="font-semibold">Datacom:</span> New Zealand’s largest software development company, providing robust infrastructure for our core systems.</li>
                <li><span className="font-semibold">DanceRace:</span> A UK-based software provider making strong inroads globally, known for excellent service and innovative financial solutions.</li>
                <li><span className="font-semibold">Hermes Data Systems:</span> A New Zealand success story with proven expertise transferring financial data securely between clients and banks across New Zealand, Australia, and the UK.</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {partners.technology.list.filter((partner) => partner.name !== 'Olea').map((partner) => (
              <PartnerCard key={partner.name} partner={partner} />
            ))}
          </div>
        </section>
        {/* Custom risk section: description first, then centered Jarden card below */}
        <section className="mb-16">
          <div className="flex items-center justify-center gap-4 mb-8">
            <ShieldCheck className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold font-headline text-[#234066] text-center">{partners.risk.title}</h2>
          </div>
          <div className="max-w-2xl mx-auto flex flex-col gap-1 text-left text-muted-foreground text-sm mb-8 border-l-4 border-primary/40 pl-4">
            Farmgate Finance works with Jarden to help manage milk price risk. Jarden arranges futures contracts based on milk price forecasts. This allows us to protect both you and us from large swings in milk prices, providing certainty and stability in your advance payments.
          </div>
          <div className="flex justify-center">
            <PartnerCard partner={partners.risk.list[0]} />
          </div>
        </section>
        {/* Custom accounting section: description first, then centered row of partner cards below */}
        <section className="mb-16">
          <div className="flex items-center justify-center gap-4 mb-8">
            <FileText className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold font-headline text-[#234066] text-center">{partners.accounting.title}</h2>
          </div>
          <div className="max-w-2xl mx-auto flex flex-col gap-1 text-left text-muted-foreground text-sm mb-8 border-l-4 border-primary/40 pl-4">
            We seamlessly integrate with your accounting software, including Xero, MYOB, QuickBooks, Reckon, Sage, and FarmFocus. Once we receive your updated production data from Fonterra, we process your payment and automatically update your accounting package — saving you time and reducing the risk of manual data entry errors.
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {partners.accounting.list.map((partner) => (
              <PartnerCard key={partner.name} partner={partner} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}