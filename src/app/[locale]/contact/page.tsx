import {ContactHero} from '@/components/contact/ContactHero';
import {ContactFormMap} from '@/components/contact/ContactFormMap';

export const metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with NZ Solutions. Contact our team for telecom infrastructure, web development, mobile apps, and digital engineering services.',
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactFormMap />
    </>
  );
}
