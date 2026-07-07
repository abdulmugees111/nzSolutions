import {Container} from '@/components/common/Container';
import {SectionHeader} from '@/components/common/SectionHeader';

export const metadata = {
  title: 'About Us',
  description: 'Learn about NZ Solutions and our telecom infrastructure and digital engineering capabilities.'
};

export default function AboutPage() {
  return (
    <Container className="section-padding">
      <SectionHeader
        eyebrow="About NZ Solutions"
        title="Reliable infrastructure delivery with modern software capability."
        description="NZ Solutions started with strong telecom and network delivery expertise. The company now expands that experience into web platforms, mobile apps, custom software, integrations, and digital transformation services."
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {[
          ['Infrastructure-first mindset', 'We understand operational reliability, field delivery, network systems, and business-critical service environments.'],
          ['Modern engineering', 'We build responsive, maintainable, SEO-friendly digital products using modern web and mobile technologies.'],
          ['Long-term support', 'We help clients plan, build, launch, maintain, and improve their platforms over time.']
        ].map(([title, body]) => (
          <div key={title} className="rounded-2xl border bg-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="mt-3 text-muted-foreground">{body}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}
