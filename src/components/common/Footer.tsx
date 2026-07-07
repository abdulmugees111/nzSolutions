import {navigation} from '@/constants/navigation';
import {siteConfig} from '@/constants/site';
import {Link} from '@/i18n/navigation';

export function Footer() {
  return (
    <footer className="border-t bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 text-lg font-bold">
            <span className="flex size-9 items-center justify-center rounded-xl bg-white/15 text-sm">NZ</span>
            <span>{siteConfig.name}</span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-6 text-primary-foreground/75">{siteConfig.description}</p>
        </div>

        <div>
          <h3 className="font-semibold">Company</h3>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/75">
            {navigation.slice(0, 5).map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label ?? item.labelKey}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/75">
            <li>{siteConfig.email}</li>
            <li>{siteConfig.phone}</li>
            <li>United Kingdom</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-primary-foreground/65">
        © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
      </div>
    </footer>
  );
}
