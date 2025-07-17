import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { faqs } from '@/lib/constants';
import { Card } from '@/components/ui/card';
import Head from 'next/head';

export const metadata = {
  title: 'FAQs | Farmgate Finance Milk Receivable Advances NZ',
  description: 'Answers about Farmgate Finance: cashflow facility, payments, milk price protection, banking arrangements and Fonterra alignment.',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': faqs.map(faq => ({
    '@type': 'Question',
    'name': faq.question,
    'acceptedAnswer': {
      '@type': 'Answer',
      'text': faq.answer
    }
  }))
};

export default function FAQPage() {
  return (
    <div className="bg-white">
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </Head>
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">
            FAQs | Farmgate Finance Milk Receivable Advances NZ
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Answers about Farmgate Finance: cashflow facility, payments, milk price protection, banking arrangements and Fonterra alignment.
          </p>
        </div>
        <div className="mt-12 max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => {
              if (faq.question === 'What happens if the final milk price from Fonterra is different to the advance rate?') {
                const [mainAnswer, exampleRaw] = faq.answer.split('Example scenario:');
                return (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground">
                      <p>{mainAnswer.trim()}</p>
                      {exampleRaw && (
                        <Card className="bg-white rounded-xl shadow-lg p-6 border border-[#2E9B5B] mt-6">
                          <h4 className="text-lg font-bold text-[#234066] mb-2">Example scenario</h4>
                          <div className="text-sm text-muted-foreground whitespace-pre-line">{exampleRaw.trim()}</div>
                        </Card>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                );
              }
              return (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    <p>{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
