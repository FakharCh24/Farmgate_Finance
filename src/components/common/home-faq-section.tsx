import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const homeFaqs = [
    {
      question: 'How much do I get paid?',
      answer: 'You get paid out 100% of the value of the Fonterra calculated value of your receivable less our fee.',
    },
    {
      question: 'What happens if the Fonterra retro payment is more than I have been paid by Farmgate Finance?',
      answer: 'Farmgate Finance repays their facility including any Fonterra deductions and refunds any excess to you (ie give an example).',
    },
    {
      question: 'What happens if the Fonterra retro payment is less than I have been paid by Farmgate Finance?',
      answer: 'Farmgate pays out the floor and therefore you do not need to refund funds to Farmgate (ie give an example).',
    },
    {
      question: 'How does the Farmgate facility work with my bank facilities?',
      answer: 'The funds from Farmgate are paid directly to your nominated bank account. If you have borrowings from your bank they will require us to pay to a nominated account.',
    },
    {
      question: 'What does the facility cost?',
      answer: 'Farmgate charge an interest rate for the funds advanced based on the time before they get repaid. The interest rate is generally the same as or lower than the overdraft rate charged by your bank.',
    },
    {
      question: 'How long do I need to commit to this facility?',
      answer: 'Farmgate are looking for a minimum three year facility and we structure our costs based on this term. As there are significant costs for us to set up the facility for you we need time to recover these costs.',
    },
    {
      question: 'How will my bank react to this facility?',
      answer: 'Your bank will not be affected by your facility with Farmgate Finance. In fact Farmgate has an arrangement with all major banks they will accept payment from Farmgate Finance to a account nominated by the bank.',
    },
    {
      question: 'Are there any fees in relation to setting up the facility with Farmgate Finance?',
      answer: 'There is no your facility, but we ask for a three year commitment to offset the costs of establishing the facility.',
    },
    {
      question: 'What data is transferred from Fonterra to Farmgate Finance?',
      answer: 'Fonterra only transfers the data that relates to the calculation of the milk price ie',
    },
    {
      question: 'What data is transferred from Fonterra to Farmgate Finance each day?',
      answer: 'Fonterra transfers the data that Farmgate Finance requires to determine the value to the daily payment eg Volume, Quality kgMs',
    },
  ];

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
            {homeFaqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  <p>{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
