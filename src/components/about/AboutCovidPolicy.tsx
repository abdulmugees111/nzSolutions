import {Shield} from 'lucide-react';
import {Container} from '@/components/common/Container';

export function AboutCovidPolicy() {
  return (
    <section className="border-t border-b bg-[#F8FAFC] pt-8 pb-8 sm:pt-10 sm:pb-10 lg:pt-12 lg:pb-12">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-7">
          <div className="relative z-10 flex items-start gap-5">
            <div className="mt-0.5 shrink-0 flex size-12 items-center justify-center rounded-2xl bg-secondary/10">
              <Shield strokeWidth={1.75} className="size-5 text-secondary" />
            </div>
            <div className="min-w-0">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-secondary">Covid-19 Policy</p>
              <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                Responsibility at the heart of everything we do.
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                We protect our staff, our environment, and the quality of our designs and
                deliveries to the highest standard. NZS belongs to the key industries deemed
                critical to national infrastructure. Our employees are classed as{' '}
                <strong className="font-semibold text-foreground">Key Workers</strong>{' '}
                who work diligently every day to operate, maintain, and upgrade the telecoms
                network — managing the rising demand on the UK&apos;s infrastructure on a
                24×7×365 basis.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
