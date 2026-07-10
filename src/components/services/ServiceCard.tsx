import Image from 'next/image';
import {ArrowRight} from 'lucide-react';

import {Link} from '@/i18n/navigation';
import {cn} from '@/lib/utils';
import type {Service} from '@/constants/services';

export function ServiceCard({service}: {service: Service}) {
  const isDigital = service.category === 'digital';

  return (
    <article className="group relative h-full p-3 sm:p-4">
      {/* Top-left decorative corner */}
      <div
        aria-hidden="true"
        className={cn(
          'absolute left-0 top-0 h-28 w-28 rounded-2xl',
          'transition-all duration-500 ease-out',
          'group-hover:translate-x-5 group-hover:translate-y-5',
          'group-hover:scale-75 group-hover:opacity-0',
          isDigital ? 'bg-secondary' : 'bg-cyan-500'
        )}
      />

      {/* Bottom-right decorative corner */}
      <div
        aria-hidden="true"
        className={cn(
          'absolute bottom-0 right-0 h-28 w-28 rounded-2xl',
          'bg-primary',
          'transition-all duration-500 ease-out',
          'group-hover:-translate-x-5 group-hover:-translate-y-5',
          'group-hover:scale-75 group-hover:opacity-0'
        )}
      />

      <Link
        href={`/services/${service.slug}`}
        aria-label={`Learn more about ${service.title}`}
        className={cn(
          'relative z-10 block h-full overflow-hidden rounded-2xl',
          'border border-border/50 bg-card',
          'shadow-sm outline-none',
          'transition-all duration-500 ease-out',
          'group-hover:-translate-y-1 group-hover:border-primary/20',
          'group-hover:shadow-2xl',
          'focus-visible:ring-2 focus-visible:ring-primary',
          'focus-visible:ring-offset-2'
        )}
      >
        {/* Service image */}
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={cn(
              'object-cover',
              'transition-transform duration-700 ease-out',
              'group-hover:scale-110'
            )}
          />

          {/* Dark hover overlay */}
          <div
            className={cn(
              'absolute inset-0',
              'bg-gradient-to-t from-primary/95 via-primary/70 to-primary/15',
              'opacity-0 transition-opacity duration-500',
              'group-hover:opacity-100'
            )}
          />

          {/* Normal-state subtle gradient */}
          <div
            className={cn(
              'absolute inset-x-0 bottom-0 h-1/3',
              'bg-gradient-to-t from-black/20 to-transparent',
              'transition-opacity duration-500',
              'group-hover:opacity-0'
            )}
          />

          {/* Hover content */}
          <div
            className={cn(
              'absolute inset-0 flex flex-col items-center justify-center',
              'px-6 text-center',
              'opacity-0 transition-all duration-500',
              'translate-y-8 group-hover:translate-y-0',
              'group-hover:opacity-100'
            )}
          >
            <span
              className={cn(
                'mb-3 rounded-full border border-white/20',
                'bg-white/10 px-4 py-1.5',
                'text-xs font-bold uppercase tracking-[0.14em]',
                'text-white backdrop-blur-sm'
              )}
            >
              {isDigital
                ? 'Digital Engineering'
                : 'Telecom Infrastructure'}
            </span>

            <h3 className="max-w-sm text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {service.title}
            </h3>

            <span
              className={cn(
                'mt-6 inline-flex items-center gap-2 rounded-full',
                'bg-secondary px-5 py-2.5',
                'text-sm font-bold text-secondary-foreground',
                'shadow-lg transition-all duration-300',
                'group-hover:gap-3 group-hover:bg-secondary/90'
              )}
            >
              Learn more
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}