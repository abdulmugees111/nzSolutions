'use client';

import {Menu, X} from 'lucide-react';
import {useTranslations} from 'next-intl';
import {useAtom} from 'jotai';
import {navigation} from '@/constants/navigation';
import {siteConfig} from '@/constants/site';
import {Link} from '@/i18n/navigation';
import {mobileMenuOpenAtom} from '@/store';
import {Button} from '@/components/ui/button';
import {LanguageSwitcher} from './LanguageSwitcher';

export function Header() {
  const t = useTranslations('Navigation');
  const [open, setOpen] = useAtom(mobileMenuOpenAtom);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-bold tracking-tight text-primary">
          <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-sm text-primary-foreground">NZ</span>
          <span>{siteConfig.name}</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-muted-foreground hover:text-foreground">
              {t(item.labelKey)}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <LanguageSwitcher />
          <Button asChild>
            <Link href="/contact">{t('contact')}</Link>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-lg border lg:hidden"
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open ? (
        <div className="border-t bg-background px-4 py-4 lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-3">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                {t(item.labelKey)}
              </Link>
            ))}
            <div className="flex items-center gap-2 pt-2">
              <LanguageSwitcher />
              <Button asChild className="flex-1">
                <Link href="/contact" onClick={() => setOpen(false)}>
                  {t('contact')}
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
