'use client';

import {Menu, X} from 'lucide-react';
import {useTranslations} from 'next-intl';
import {useAtom} from 'jotai';
import {navigation} from '@/constants/navigation';
import {siteConfig} from '@/constants/site';
import {Link, usePathname} from '@/i18n/navigation';
import {mobileMenuOpenAtom} from '@/store';
import {Button} from '@/components/ui/button';
import {LanguageSwitcher} from './LanguageSwitcher';
import Image from 'next/image';

export function Header() {
  const t = useTranslations('Navigation');
  const [open, setOpen] = useAtom(mobileMenuOpenAtom);
  const pathname = usePathname();

  const isActiveRoute = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-bold tracking-tight text-primary">
          {/* <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-sm text-primary-foreground">
            NZ
          </span> */}
           <Image
    src="/logos/logo.png"
    alt="NZ Solutions"
    width={40}
    height={40}
    className="h-12 w-auto object-contain"
    priority
  />
          <span>{siteConfig.name}</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {/* {navigation.map((item) => { */}
          {navigation.slice(0, 4).map((item) => {

            const isActive = isActiveRoute(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative pb-1 text-sm font-semibold transition-colors ${
                  isActive
                    ? 'text-primary after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:rounded-full after:bg-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.labelKey ? t(item.labelKey) : item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          {/* <LanguageSwitcher /> */}
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
            {navigation.map((item) => {
              const isActive = isActiveRoute(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-primary/10 text-primary'
                      : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.labelKey ? t(item.labelKey) : item.label}
                </Link>
              );
            })}

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

// 'use client';

// import {Menu, X} from 'lucide-react';
// import {useTranslations} from 'next-intl';
// import {useAtom} from 'jotai';
// import {navigation} from '@/constants/navigation';
// import {siteConfig} from '@/constants/site';
// import {Link} from '@/i18n/navigation';
// import {mobileMenuOpenAtom} from '@/store';
// import {Button} from '@/components/ui/button';
// import {LanguageSwitcher} from './LanguageSwitcher';

// export function Header() {
//   const t = useTranslations('Navigation');
//   const [open, setOpen] = useAtom(mobileMenuOpenAtom);

//   return (
//     <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur">
//       <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
//         <Link href="/" className="flex items-center gap-2 font-bold tracking-tight text-primary">
//           <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-sm text-primary-foreground">NZ</span>
//           <span>{siteConfig.name}</span>
//         </Link>

//         <nav className="hidden items-center gap-7 lg:flex">
//           {navigation.map((item) => (
//             <Link key={item.href} href={item.href} className="text-sm font-medium text-muted-foreground hover:text-foreground">
//               {item.labelKey ? t(item.labelKey) : item.label}
//             </Link>
//           ))}
//         </nav>

//         <div className="hidden items-center gap-2 lg:flex">
//           {/* <LanguageSwitcher /> */}
//           <Button asChild>
//             <Link href="/contact">{t('contact')}</Link>
//           </Button>
//         </div>

//         <button
//           type="button"
//           className="inline-flex size-10 items-center justify-center rounded-lg border lg:hidden"
//           aria-label="Toggle navigation"
//           onClick={() => setOpen(!open)}
//         >
//           {open ? <X size={20} /> : <Menu size={20} />}
//         </button>
//       </div>

//       {open ? (
//         <div className="border-t bg-background px-4 py-4 lg:hidden">
//           <nav className="mx-auto flex max-w-7xl flex-col gap-3">
//             {navigation.map((item) => (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
//                 onClick={() => setOpen(false)}
//               >
//                 {item.labelKey ? t(item.labelKey) : item.label}
//               </Link>
//             ))}
//             <div className="flex items-center gap-2 pt-2">
//               <LanguageSwitcher />
//               <Button asChild className="flex-1">
//                 <Link href="/contact" onClick={() => setOpen(false)}>
//                   {t('contact')}
//                 </Link>
//               </Button>
//             </div>
//           </nav>
//         </div>
//       ) : null}
//     </header>
//   );
// }
