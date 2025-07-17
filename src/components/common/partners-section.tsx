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
  return null;
}
