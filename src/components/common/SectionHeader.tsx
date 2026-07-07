import {cn} from '@/lib/utils';

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center'
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}) {
  return (
    <div className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center')}>
      {eyebrow ? <p className="text-sm font-semibold uppercase tracking-wide text-secondary">{eyebrow}</p> : null}
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">{title}</h1>
      {description ? <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">{description}</p> : null}
    </div>
  );
}
