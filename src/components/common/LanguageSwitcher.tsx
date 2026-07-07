'use client';

import {useLocale} from 'next-intl';
import {usePathname, useRouter} from '@/i18n/navigation';
import {Button} from '@/components/ui/button';

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const nextLocale = locale === 'en' ? 'sv' : 'en';

  return (
    <Button variant="ghost" size="sm" onClick={() => router.replace(pathname, {locale: nextLocale})}>
      {nextLocale.toUpperCase()}
    </Button>
  );
}
