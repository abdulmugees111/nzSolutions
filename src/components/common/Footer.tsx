import {Mail, Phone, Smartphone, MapPin} from 'lucide-react';
import {siteConfig} from '@/constants/site';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1fr_1fr_1fr] lg:grid-cols-[2fr_1.5fr_1.5fr]">

          {/* Brand */}
          <div>
            <div className="inline-flex items-center gap-3 rounded-2xl border border-white/20 bg-white px-4 py-3">
              <div className="relative size-12 shrink-0">
                <Image
                  src="/logos/nz-logo.png"
                  alt="NZ Solutions logo"
                  fill
                  className="object-contain"
                  sizes="48px"
                />
              </div>
              <div>
                <p className="text-base font-black text-primary">{siteConfig.name}</p>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary/60">
                  Telecom &amp; Digital Engineering
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-6 text-primary-foreground/70">
              NZ Solutions delivers telecom infrastructure, network services, data-centre support, web applications, mobile applications, custom software, and system integration services.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary-foreground/50">Contact</h3>
            <ul className="mt-5 space-y-3">
              <li className="flex items-center gap-3 text-sm text-primary-foreground/80">
                <Mail size={15} className="shrink-0 text-primary-foreground/50" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/80">
                <Phone size={15} className="shrink-0 text-primary-foreground/50" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-white transition-colors">
                  020 3441 2198
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/80">
                <Smartphone size={15} className="shrink-0 text-primary-foreground/50" />
                <a href="tel:07796215793" className="hover:text-white transition-colors">
                  07796 215 793
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/80">
                <MapPin size={15} className="shrink-0 text-primary-foreground/50" />
                <span>United Kingdom</span>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary-foreground/50">Address</h3>
            <address className="mt-5 not-italic text-sm leading-7 text-primary-foreground/80">
              Suite 314, Stanmore Business and<br />
              Innovation Centre<br />
              Howard Road<br />
              Stanmore<br />
              HA7 1BT
            </address>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-5 text-center text-xs text-primary-foreground/50">
        © 2026 {siteConfig.legalName}. All rights reserved.
      </div>
    </footer>
  );
}
