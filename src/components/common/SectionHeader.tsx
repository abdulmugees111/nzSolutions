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
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
          {eyebrow}
        </p>
      )}
      <Tag className={cn(
        'mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl',
        inverted ? 'text-primary-foreground' : 'text-foreground',
      )}>
        {title}
      </Tag>
      {description && (
        <p className={cn(
          'mt-3 text-sm leading-7',
          inverted ? 'text-primary-foreground/60' : 'text-muted-foreground',
        )}>
          {description}
        </p>
      )}
    </div>
  );
}
