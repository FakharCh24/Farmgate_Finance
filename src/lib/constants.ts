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
      { name: 'ANZ', logoUrl: '/anz.png', website: 'https://www.anz.co.nz/agribusiness/' },
      { name: 'ASB', logoUrl: '/ASB.png', website: 'https://www.asb.co.nz/rural-banking/' },
      { name: 'BNZ', logoUrl: '/bnz.png', website: 'https://www.bnz.co.nz/business-banking/partners/agribusiness/' },
      { name: 'Rabobank', logoUrl: '/rabo.png', website: 'https://rabobank.co.nz/agribusiness/banking-with-us/' },
      { name: 'Westpac', logoUrl: '/west.png', website: 'https://www.westpac.co.nz/agribusiness/' },
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

export const faqs = [
  {
    question: 'What is Farmgate Finance?',
    answer: 'Farmgate Finance is a cashflow facility that allows New Zealand dairy farmers to receive advance payments for their Fonterra milk receivables, providing immediate access to their forecasted milk payout.'
  },
  {
    question: 'How does the process work?',
    answer: 'Farmgate Finance advances monthly payments aligned with Fonterra’s forecast and payment schedule, giving you early access to your income. At the end of the season, the final payout is reconciled based on the actual milk price.'
  },
  {
    question: 'What are the costs?',
    answer: 'We charge a small administration fee on the receivables we purchase. We also charge interest for the funds advanced based on the time before we get paid. The interest rate is generally the same as or lower than the overdraft rate charged by your bank. There are no hidden fees.'
  },
  {
    question: 'Is this service compatible with my bank?',
    answer: 'Yes, your bank will not be affected by your facility Farmgate Finance. Farmgate Finance work with all major New Zealand banks, including ANZ, ASB, BNZ, Rabobank and Westpac. If you have borrowing from your bank they will require us to pay to a nominated account.'
  },
  {
    question: 'What happens if the final milk price from Fonterra is different to the advance rate?',
    answer: `Our system is designed to handle milk price fluctuations.\nIf the final milk price from Fonterra is higher than you have been paid, then Farmgate Finance repays their facility including any Fonterra deductions and refunds the excess to you.\nIf the final milk price from Fonterra is lower than you have been paid, then Farmgate Finance absorbs the shortfall, and you keep your advance ensuring you are protected from the downside risk.\n\nExample scenario:\nAt the start of the season, Fonterra forecasts a milk price of $9.80/kgMS.\nFor an average farmer producing say 176,875 kgMS, the total expected payout over the season is approximately $1,733,375 based on the $9.80/kgMS forecast.\nDuring the season:\n• Farmgate Finance advances monthly payments aligned with Fonterra’s forecast and payment schedule — giving you early access to your income and smoothing your cashflow.\nAt the end of the season:\n• If the final milk price is $10.05/kgMS (above forecast):\n  o You receive the full benefit of this price increase.\n  o The total payout is reconciled at $10.05/kgMS, and you are paid the difference between what was advanced based on the $9.80/kgMS forecast and the final price of $10.05/kgMS.\n• If the final milk price falls below forecast (e.g., $9.50/kgMS):\n  o Farmgate Finance absorbs the shortfall down to the $9.50/kgMS floor.\n  o You keep your advance — no repayments required — ensuring you’re protected from downside risk.`
  },
  {
    question: 'How secure is my data?',
    answer: 'Farmgate Finance takes data security seriously. All data is encrypted and handled in accordance with New Zealand privacy laws and industry best practices.'
  },
  {
    question: 'Can I integrate Farmgate Finance with my accounting software?',
    answer: 'Yes, Farmgate Finance is compatible with major accounting software packages, making reconciliation and reporting easy.'
  },
  {
    question: 'Who is eligible for Farmgate Finance?',
    answer: 'Farmgate Finance is available to New Zealand dairy farmers who supply Fonterra and meet our standard credit and operational criteria.'
  },
  {
    question: 'How quickly can I get set up?',
    answer: 'Once your application is approved and all required documentation is received, setup can be completed quickly so you can start receiving advance payments.'
  },
  {
    question: 'What if I have more questions?',
    answer: 'Our support team is here to help. You can contact Farmgate Finance via email at info@farmgatefinance.co.nz or by phone @ +64(09)9505891. Alternatively, you can contact your Farm Source representative on 0800 65 65 68.'
  },
];