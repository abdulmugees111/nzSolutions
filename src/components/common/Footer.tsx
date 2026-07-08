import {navigation} from '@/constants/navigation';
import {siteConfig} from '@/constants/site';
import {Link} from '@/i18n/navigation';
import {Mail, MapPin, MessageCircle, PhoneCall} from 'lucide-react';

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

        {/* <div>
          <h3 className="font-semibold">Company</h3>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/75">
            {navigation.slice(0, 5).map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item?.label ?? item.labelKey}
                </Link>
              </li>
            ))}
          </ul>
        </div> */}

        <div>
  <h3 className="font-semibold">Contact</h3>

  <ul className="mt-4 space-y-3 text-sm text-primary-foreground/75">
    <li>
      <a
        href={`mailto:${siteConfig.email}`}
        className="flex items-center gap-3 transition hover:text-white"
      >
        <Mail className="size-4 shrink-0" />
        <span>{siteConfig.email}</span>
      </a>
    </li>

    <li>
      <a
        href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
        className="flex items-center gap-3 transition hover:text-white"
      >
        <PhoneCall className="size-4 shrink-0" />
        <span>{siteConfig.phone}</span>
      </a>
    </li>

    <li>
      <a
        href={`https://wa.me/44${siteConfig.whatsapp.replace(/\D/g, '').replace(/^0/, '')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 transition hover:text-white"
      >
        <MessageCircle className="size-4 shrink-0" />
        <span>{siteConfig.whatsapp}</span>
      </a>
    </li>

    <li className="flex items-center gap-3">
      <MapPin className="size-4 shrink-0" />
      <span>{siteConfig.address?.country}</span>
    </li>
  </ul>
</div>
        <div>
          <h3 className="font-semibold">Address</h3>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/75">
            <li>{siteConfig.address?.line1}</li>
            <li>{siteConfig.address?.line2}</li>
            <li>{siteConfig.address?.city}</li>
            <li>{siteConfig.address?.postcode}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-primary-foreground/65">
        © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
      </div>
    </footer>
  );
}
