import {ArrowRight, CheckCircle2} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {Badge} from '@/components/ui/badge';
import {Container} from '@/components/common/Container';
import {homeContent} from '@/content/site';
import {trustStats} from '@/constants/partners';
import {Link} from '@/i18n/navigation';

export function Hero() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <Badge>{homeContent.hero.eyebrow}</Badge>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
  {homeContent.hero.title}
</h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg lg:text-xl">{homeContent.hero.description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/services">{homeContent.hero.primaryCta}<ArrowRight size={18} /></Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">{homeContent.hero.secondaryCta}</Link>
            </Button>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {['Telecom infrastructure', 'Web & mobile apps', 'Custom software'].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <CheckCircle2 size={18} className="text-secondary" /> {item}
              </div>
            ))}
          </div>
        </div>


<div className="relative">
  <div className="rounded-[2rem] border bg-card p-4 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(0,0,0,0.18)]">
    <div className="rounded-[1.5rem] bg-primary p-5 text-primary-foreground sm:p-7">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl bg-white/10 p-5">
          <p className="text-sm text-primary-foreground/70">Service families</p>
          <p className="mt-2 text-3xl font-black">2</p>
          <p className="mt-1 text-sm text-primary-foreground/70">Telecom + Digital</p>
        </div>

        <div className="rounded-2xl bg-white/10 p-5">
          <p className="text-sm text-primary-foreground/70">Founded</p>
          <p className="mt-2 text-3xl font-black">2012</p>
          <p className="mt-1 text-sm text-primary-foreground/70">UK delivery</p>
        </div>
      </div>

      <div className="mt-5 rounded-2xl bg-white p-5 text-foreground">
        <p className="text-sm font-bold text-primary">Project delivery board</p>

        <div className="mt-4 space-y-3">
          {[
            'Surveying / Civils / Cabling',
            'Data centre & network services',
            'Next.js web platform',
            'Mobile app and API integration',
          ].map((item, index) => (
            <div key={item} className="flex items-center gap-3 rounded-xl bg-muted px-4 py-3">
              <span className="flex size-7 items-center justify-center rounded-full bg-secondary/15 text-xs font-bold text-primary">
                {index + 1}
              </span>
              <span className="text-sm font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>

  <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
    {trustStats?.map((stat) => (
      <div
        key={stat.label}
        className="rounded-2xl border bg-card p-4 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
      >
        <p className="text-lg font-black text-primary">{stat.value}</p>
        <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
      </div>
    ))}
  </div>
</div>
      </Container>
    </section>
  );
}
