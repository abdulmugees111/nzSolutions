import {Shield} from 'lucide-react';
import {Container} from '@/components/common/Container';

function WaveCorner() {
  return (
    <svg
      viewBox="0 0 200 160"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute bottom-0 right-0 w-48 h-40 pointer-events-none select-none"
      aria-hidden="true"
    >
      <path
        d="M200 160 Q130 120 80 145 Q30 168 0 140 L0 160 Z"
        fill="#2d7a3a"
        fillOpacity="0.12"
      />
      <path
        d="M200 160 Q145 110 100 138 Q55 162 15 148 L0 160 Z"
        fill="#2d7a3a"
        fillOpacity="0.07"
      />
      <path
        d="M200 160 Q160 130 125 150 Q90 168 50 158 L0 160 Z"
        fill="#2d7a3a"
        fillOpacity="0.04"
      />
    </svg>
  );
}

export function AboutCovidPolicy() {
  return (
    <section className="border-t border-b bg-muted/30 pt-8 pb-8 sm:pt-10 sm:pb-10 lg:pt-12 lg:pb-12">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-7">
            <WaveCorner />
            <div className="relative z-10 flex items-start gap-5">
              <div
                className="mt-0.5 shrink-0 flex size-12 items-center justify-center rounded-2xl"
                style={{background: 'hsl(var(--primary) / 0.07)'}}
              >
                <Shield strokeWidth={1.75} className="size-5 text-primary" />
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
