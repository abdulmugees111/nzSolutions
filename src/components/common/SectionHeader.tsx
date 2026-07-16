import {cn} from '@/lib/utils';

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  inverted = false,
  as: Tag = 'h2',
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  inverted?: boolean;
  as?: 'h1' | 'h2';
}) {
  return (
    <div className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center')}>
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-wide text-secondary">{eyebrow}</p>
      ) : null}
      <Tag className={cn(
        'mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl',
        inverted ? 'text-white' : 'text-foreground',
      )}>
        {title}
      </Tag>
      {description ? (
        <p className={cn(
          'mt-4 text-base leading-7 sm:text-lg',
          inverted ? 'text-white/70' : 'text-muted-foreground',
        )}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
