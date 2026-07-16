import {ArrowRight, Network, Smartphone, Code2} from 'lucide-react';
import {useTranslations} from 'next-intl';
import {Button} from '@/components/ui/button';
import {Link} from '@/i18n/navigation';

export function Hero() {
  const t = useTranslations('HomePage');

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-white to-muted">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
        <div className="flex flex-col justify-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-secondary">{t('heroEyebrow')}</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {t('heroTitle')}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">{t('heroDescription')}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/services">
                {t('primaryCta')} <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">{t('secondaryCta')}</Link>
            </Button>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {[
            {icon: Network, title: 'Telecom Infrastructure', body: 'Network services, fibre delivery, data centres and field operations.'},
            {icon: Code2, title: 'Web Platforms', body: 'Responsive websites, web apps, dashboards and business portals.'},
            {icon: Smartphone, title: 'Mobile Apps', body: 'Cross-platform apps for customers, teams and field operations.'}
          ].map((item) => (
            <div key={item.title} className="rounded-3xl border bg-card p-6 shadow-sm">
              <item.icon className="size-8 text-secondary" />
              <h2 className="mt-4 text-xl font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
