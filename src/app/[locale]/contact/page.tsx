import {Container} from '@/components/common/Container';
import {SectionHeader} from '@/components/common/SectionHeader';
import {ContactForm} from '@/components/forms/ContactForm';

export const metadata = {
  title: 'Contact Us',
  description: 'Contact NZ Solutions for telecom, web development, mobile app development, and custom software services.'
};

export default function ContactPage() {
  return (
    <Container className="section-padding">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <SectionHeader
          align="left"
          eyebrow="Contact"
          title="Tell us about your project."
          description="Send your requirements and our team will get back to you about the best solution for your telecom or digital engineering project."
        />
        <ContactForm />
      </div>
    </Container>
  );
}
