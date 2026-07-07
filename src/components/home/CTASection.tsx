import {ArrowRight} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {Link} from '@/i18n/navigation';

export function CTASection() {
  return (
    <section className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-primary px-6 py-12 text-primary-foreground shadow-sm sm:px-10 lg:px-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to discuss your project?</h2>
            <p className="mt-4 max-w-2xl text-primary-foreground/75">
              Contact NZ Solutions for telecom infrastructure, web development, mobile apps, custom software, and system integrations.
            </p>
          </div>
          <Button asChild variant="secondary" size="lg">
            <Link href="/contact">
              Start a conversation <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
