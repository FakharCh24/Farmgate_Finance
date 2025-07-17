import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { faqs } from '@/lib/constants';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function HomeFaqSection() {
  return (
    <section className="bg-white w-full py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Have questions? We've got answers. Here are some of the most common queries we receive.
          </p>
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => {
              // Special handling for the example scenario in the relevant FAQ
              if (faq.question === 'What happens if the final milk price from Fonterra is different to the advance rate?') {
                // Split answer at 'Example scenario:'
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
        <div className="flex justify-center mt-10">
          <Button asChild size="lg" className="font-bold bg-[#2E9B5B] hover:bg-[#26884C] text-white">
            <a href="/login">
              Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
