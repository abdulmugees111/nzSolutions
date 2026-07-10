// import {cn} from '@/lib/utils';

// export function Badge({className, children}: {className?: string; children: React.ReactNode}) {
//   return (
//     <span className={cn('inline-flex rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground', className)}>
//       {children}
//     </span>
//   );
// }
import * as React from 'react';
import {cn} from '@/lib/utils';

export function Badge({className, ...props}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary',
        className
      )}
      {...props}
    />
  );
}
