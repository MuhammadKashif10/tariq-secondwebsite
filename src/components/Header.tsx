"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { site } from "@/config/site";
import { services } from "@/data/services";
import { defaultMessage, telUrl, whatsappUrl } from "@/lib/contact";
import { Icon, WhatsAppIcon } from "./Icon";
import { Logo } from "./Logo";

const nav = [
  { href: "/services", label: "Services" },
  { href: "/areas", label: "Areas" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Guides" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [menuFor, setMenuFor] = useState<string | null>(null);
  // Tying the open state to the path closes the menu on navigation.
  const open = menuFor === pathname;

  return (
    <>
      <div className="hidden bg-ink text-sm text-mist lg:block">
        <div className="wrap flex h-10 items-center justify-between">
          <p className="flex items-center gap-2">
            <Icon name="clock" className="size-4 text-signal" />
            {site.hoursLabel}
          </p>
          <p className="flex items-center gap-6">
            <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-white">
              <Icon name="mail" className="size-4 text-signal" />
              {site.email}
            </a>
            <span className="flex items-center gap-2">
              <Icon name="pin" className="size-4 text-signal" />
              {site.streetAddress}
            </span>
          </p>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-sand-3/70 bg-white/90 backdrop-blur-xl">
        <div className="wrap flex h-[4.75rem] items-center justify-between gap-4">
          <Link href="/" aria-label={`${site.name} home`}>
            <Logo />
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-0.5 lg:flex">
            {nav.map((item) => {
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
              const linkClass = `block rounded-full px-3.5 py-2 text-[0.95rem] font-semibold transition-colors hover:bg-sand-2 ${active ? "bg-sand-2" : ""}`;
              if (item.href === "/services") {
                return (
                  <div key={item.href} className="group relative">
                    <Link href={item.href} aria-current={active ? "page" : undefined} className={linkClass}>
                      {item.label}
                    </Link>
                    <div className="invisible absolute top-full -left-40 w-[42rem] translate-y-1 pt-3 opacity-0 transition duration-200 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                      <ul className="grid grid-cols-2 gap-1 rounded-3xl bg-white p-3 shadow-lift ring-1 ring-sand-3/60">
                        {services.map((service) => (
                          <li key={service.slug}>
                            <Link href={`/services/${service.slug}`} className="flex items-center gap-3 rounded-2xl p-2 text-sm font-semibold transition-colors hover:bg-sand">
                              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-sand-2">
                                <Icon name={service.icon} className="size-5" />
                              </span>
                              {service.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              }
              return (
                <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined} className={linkClass}>
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <a href={telUrl} className="hidden items-center gap-2.5 xl:flex">
              <span className="grid size-10 place-items-center rounded-full bg-sand-2">
                <Icon name="phone" className="size-[1.1rem]" />
              </span>
              <span className="leading-tight">
                <span className="block text-xs font-medium text-muted">Call us</span>
                <span className="block text-sm font-bold whitespace-nowrap">{site.phoneDisplay}</span>
              </span>
            </a>
            <a href={whatsappUrl(defaultMessage)} target="_blank" rel="noopener" className="btn btn-wa hidden !min-h-11 !px-5 !py-2 sm:inline-flex">
              <WhatsAppIcon />
              Get a price
            </a>
            <button
              type="button"
              onClick={() => setMenuFor(open ? null : pathname)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="grid size-11 place-items-center rounded-full bg-sand-2 lg:hidden"
            >
              <Icon name={open ? "close" : "menu"} />
            </button>
          </div>
        </div>

        {open && (
          <nav id="mobile-menu" aria-label="Mobile" className="max-h-[calc(100dvh-4.75rem)] overflow-y-auto border-t border-sand-3 bg-white lg:hidden">
            <ul className="wrap py-2 pb-6">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="flex items-center justify-between border-b border-sand-2 py-4 text-xl font-bold">
                    {item.label}
                    <Icon name="arrow" className="size-5 text-signal-deep" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>
    </>
  );
}
