'use client';

import {useEffect, useState} from 'react';
import Image from 'next/image';
import {
  ChevronDown,
  Menu,
  MonitorSmartphone,
  RadioTower,
  X
} from 'lucide-react';
import {useTranslations} from 'next-intl';
import {useAtom} from 'jotai';

import {navigation} from '@/constants/navigation';
import {serviceCategories} from '@/constants/services';
import {siteConfig} from '@/constants/site';
import {Link, usePathname} from '@/i18n/navigation';
import {mobileMenuOpenAtom} from '@/store';
import {Button} from '@/components/ui/button';
import {LanguageSwitcher} from './LanguageSwitcher';

export function Header() {
  const t = useTranslations('Navigation');
  const pathname = usePathname();

  const [open, setOpen] = useAtom(mobileMenuOpenAtom);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);

  const isActiveRoute = (href: string) => {
    const pathWithoutQuery = href.split('?')[0];

    if (pathWithoutQuery === '/') {
      return pathname === '/';
    }

    return (
      pathname === pathWithoutQuery ||
      pathname.startsWith(`${pathWithoutQuery}/`)
    );
  };

  const closeMobileMenu = () => {
    setOpen(false);
    setMobileServicesOpen(false);
  };

  const closeDesktopServices = () => {
    setDesktopServicesOpen(false);
  };

  /*
   * Close menus whenever the pathname changes.
   * This also handles browser back/forward navigation.
   */
  useEffect(() => {
    setDesktopServicesOpen(false);
    setMobileServicesOpen(false);
    setOpen(false);
  }, [pathname, setOpen]);

  const categoryIcon = {
    telecom: RadioTower,
    digital: MonitorSmartphone
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-bold tracking-tight text-primary"
          onClick={() => {
            closeDesktopServices();
            closeMobileMenu();
          }}
        >
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

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navigation.slice(0, 3).map((item) => {
            const isActive = isActiveRoute(item.href);
            const isServicesItem = item.href === '/services';

            if (isServicesItem) {
              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setDesktopServicesOpen(true)}
                  onMouseLeave={closeDesktopServices}
                  onFocusCapture={() => setDesktopServicesOpen(true)}
                  onBlurCapture={(event) => {
                    const nextFocusedElement =
                      event.relatedTarget as Node | null;

                    if (
                      !event.currentTarget.contains(nextFocusedElement)
                    ) {
                      closeDesktopServices();
                    }
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={closeDesktopServices}
                    className={`relative flex items-center gap-1.5 pb-1 text-sm font-semibold transition-colors ${
                      isActive
                        ? 'text-primary after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:rounded-full after:bg-primary'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <span>
                      {item.labelKey ? t(item.labelKey) : 'Services'}
                    </span>

                    <ChevronDown
                      size={15}
                      className={`transition-transform duration-200 ${
                        desktopServicesOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </Link>

                  {/* Hover bridge and dropdown */}
                  <div
                    className={`
                      absolute left-1/2 top-full z-50 w-80
                      -translate-x-1/2 pt-4
                      transition-all duration-200
                      ${
                        desktopServicesOpen
                          ? 'visible pointer-events-auto translate-y-0 opacity-100'
                          : 'invisible pointer-events-none translate-y-2 opacity-0'
                      }
                    `}
                  >
                    <div className="overflow-hidden rounded-2xl border bg-background p-2 shadow-xl">
                      <div className="px-3 pb-2 pt-2">
                        <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                          Service categories
                        </p>
                      </div>

                      <div className="space-y-1">
                        {serviceCategories.map((category) => {
                          const Icon = categoryIcon[category.key];

                          return (
                            <Link
                              key={category.key}
                              href={category.href}
                              onClick={closeDesktopServices}
                              className="
                                group/category flex items-start gap-3
                                rounded-xl px-3 py-3 transition-colors
                                hover:bg-primary/5
                              "
                            >
                              <span
                                className="
                                  mt-0.5 flex size-10 shrink-0
                                  items-center justify-center rounded-xl
                                  bg-primary/10 text-primary
                                  transition-colors
                                  group-hover/category:bg-primary
                                  group-hover/category:text-primary-foreground
                                "
                              >
                                <Icon size={19} />
                              </span>

                              <span>
                                <span className="block text-sm font-semibold text-foreground">
                                  {category.label}
                                </span>

                                <span className="mt-1 block text-xs leading-5 text-muted-foreground">
                                  {category.description}
                                </span>
                              </span>
                            </Link>
                          );
                        })}
                      </div>

                      <div className="mt-2 border-t px-3 pb-1 pt-3">
                        <Link
                          href="/services"
                          onClick={closeDesktopServices}
                          className="text-sm font-semibold text-primary hover:underline"
                        >
                          View all services
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeDesktopServices}
                className={`relative pb-1 text-sm font-semibold transition-colors ${
                  isActive
                    ? 'text-primary after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:rounded-full after:bg-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.labelKey ? t(item.labelKey) : '/'}
              </Link>
            );
          })}
        </nav>

        {/* Desktop contact button */}
        <div className="hidden items-center gap-2 lg:flex">
          <Button asChild>
            <Link href="/contact" onClick={closeDesktopServices}>
              {t('contact')}
            </Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-lg border lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile navigation */}
      {open ? (
        <div className="border-t bg-background px-4 py-4 lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2">
            {navigation.map((item) => {
              const isActive = isActiveRoute(item.href);
              const isServicesItem = item.href === '/services';

              if (isServicesItem) {
                return (
                  <div key={item.href}>
                    <div
                      className={`flex items-center rounded-lg transition-colors ${
                        isActive
                          ? 'bg-primary/10 text-primary'
                          : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                      }`}
                    >
                      <Link
                        href="/services"
                        className="flex-1 px-3 py-2 text-sm font-semibold"
                        onClick={closeMobileMenu}
                      >
                        {item.labelKey
                          ? t(item.labelKey)
                          : 'Services'}
                      </Link>

                      <button
                        type="button"
                        className="flex size-10 items-center justify-center"
                        aria-label="Show service categories"
                        aria-expanded={mobileServicesOpen}
                        onClick={() =>
                          setMobileServicesOpen(
                            (current) => !current
                          )
                        }
                      >
                        <ChevronDown
                          size={17}
                          className={`transition-transform duration-200 ${
                            mobileServicesOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                    </div>

                    {mobileServicesOpen ? (
                      <div className="ml-3 mt-2 space-y-1 border-l pl-3">
                        {serviceCategories.map((category) => {
                          const Icon = categoryIcon[category.key];

                          return (
                            <Link
                              key={category.key}
                              href={category.href}
                              className="
                                flex items-center gap-3 rounded-lg
                                px-3 py-2.5 text-sm font-semibold
                                text-muted-foreground transition-colors
                                hover:bg-muted hover:text-foreground
                              "
                              onClick={closeMobileMenu}
                            >
                              <Icon
                                size={17}
                                className="text-primary"
                              />

                              {category.label}
                            </Link>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-primary/10 text-primary'
                      : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                  }`}
                  onClick={closeMobileMenu}
                >
                  {item.labelKey ? t(item.labelKey) : '/'}
                </Link>
              );
            })}

            <div className="flex items-center gap-2 pt-2">
              <LanguageSwitcher />

              <Button asChild className="flex-1">
                <Link href="/contact" onClick={closeMobileMenu}>
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
