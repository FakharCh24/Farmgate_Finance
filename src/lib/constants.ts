import { Banknote, Cpu, FileText, ShieldCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/partners', label: 'Partners' },
  { href: '/faq', label: 'FAQs' },
  { href: '/about', label: 'About' },
  { href: '/terms', label: 'Terms' },
];

export const partners = {
  banking: {
    title: 'Banking Partners',
    icon: Banknote,
    list: [
      { name: 'ANZ', logoUrl: '/anz.png', website: 'https://anz.co.nz' },
      { name: 'ASB', logoUrl: '/ASB.png', website: 'https://asbbank.co.nz' },
      { name: 'BNZ', logoUrl: '/bnz.png', website: 'https://bnz.co.nz' },
      { name: 'Rabobank', logoUrl: '/rabo.png', website: 'https://rabobank.com' },
      { name: 'Westpac', logoUrl: '/west.png', website: 'https://westpac.co.nz' },
    ],
  },
  technology: {
    title: 'Technology Partners',
    icon: Cpu,
    list: [
      { name: 'Datacom', logoUrl: '/dataco.png', website: 'https://datacom.com' },
      { name: 'Dancerace', logoUrl: '/dancerace.png', website: 'https://dancerace.com' },
      { name: 'Olea', logoUrl: '/olea.png', website: 'https://olea.net' },
      { name: 'Hermes Data Systems', logoUrl: '/hermes.png', website: 'https://hermesdatasystems.com' },
    ],
  },
  risk: {
    title: 'Risk Management Partner',
    icon: ShieldCheck,
    list: [{ name: 'Jarden', logoUrl: '/jarden.png', website: 'https://jarden.co.nz' }],
  },
  accounting: {
    title: 'Accounting Packages',
    icon: FileText,
    list: [
      { name: 'Xero', logoUrl: '/xero.png', website: 'https://xero.co.nz' },
      { name: 'MYOB', logoUrl: '/myob.jpg', website: 'https://myob.co.nz' },
      { name: 'QuickBooks', logoUrl: '/quickbooks.png', website: 'https://quickbooks.com' },
      { name: 'Reckon', logoUrl: '/xeroco.png', website: 'https://reckon.co.nz' },
      { name: 'Sage', logoUrl: '/sage.png', website: 'https://sage.com' },
      { name: 'FarmFocus', logoUrl: '/farmfocus.png', website: 'https://farmfocus.co.nz' },
    ],
  },
};

export const faqs: { question: string; answer: string }[] = [
  {
    question: 'What is Farmgate Access?',
    answer:
      'Farmgate Access is a financial service that allows dairy farmers to get paid for 100% of their milk receivables on the day they are earned, rather than waiting for traditional payout schedules.',
  },
  {
    question: 'How does the process work?',
    answer:
      "It's simple: 1) Sign up with your FarmSource credentials. 2) We receive your production data from Fonterra daily. 3) We pay 100% of the value into your bank account. 4) Fonterra pays us directly on the scheduled payout date.",
  },
  {
    question: 'What are the costs involved?',
    answer:
      'We charge a small, transparent administration fee on the value of the receivables we purchase. Additionally, interest is calculated daily on the outstanding balance and charged monthly. There are no hidden fees.',
  },
  {
    question: 'Is this service compatible with my bank?',
    answer:
      'Yes, we work with all major New Zealand banks, including ANZ, ASB, BNZ, Rabobank, and Westpac. You can find a full list on our Partners page.',
  },
  {
    question: 'What happens if the final milk price from Fonterra is different from the advance rate?',
    answer:
      "Our system is designed to handle milk price fluctuations. If the final price is lower, the difference is added to your outstanding balance. If it's higher, the surplus is credited to your account, reducing your balance. You always receive the full benefit of a higher payout.",
  },
  {
    question: 'How secure is my data?',
    answer:
      'Extremely secure. We partner with leading technology providers like Datacom to ensure all data transfer and storage meets the highest security standards. Your financial and personal information is always protected.',
  },
  {
    question: 'Can I integrate Farmgate Access with my accounting software?',
    answer:
      'Absolutely. We support integration with popular accounting packages such as Xero, MYOB, QuickBooks, and more, to make your bookkeeping seamless.',
  },
  {
    question: 'Who is eligible for Farmgate Access?',
    answer:
      'Any Fonterra-supplying dairy farmer in New Zealand is eligible to apply for Farmgate Access. The application process is quick and straightforward.',
  },
  {
    question: 'How quickly can I get set up?',
    answer:
      'The sign-up process is fast. Once you register with your FarmSource credentials and complete the necessary agreements, you can start receiving payments within a few business days.',
  },
  {
    question: 'What if I have more questions?',
    answer: 'Our support team is here to help. You can reach us via email at info@farmgatefinance.com or by phone at +64 (09) 950 5891.',
  },
];
