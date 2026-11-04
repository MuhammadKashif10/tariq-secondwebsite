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
    <header className="sticky top-0 z-40 border-b border-sand-3 bg-sand/95 backdrop-blur">
      <div className="wrap flex h-[4.5rem] items-center justify-between gap-4">
        <Link href="/" aria-label={`${site.name} home`}>
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            if (item.href === "/services") {
              return (
                <div key={item.href} className="group relative">
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`block rounded-lg px-3 py-2 font-semibold hover:bg-sand-2 ${active ? "text-signal-deep" : ""}`}
                  >
                    {item.label}
                  </Link>
                  <div className="invisible absolute top-full left-0 w-[32rem] pt-2 opacity-0 transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                    <ul className="grid grid-cols-2 gap-1 rounded-xl border border-sand-3 bg-paper p-2 shadow-xl">
                      {services.map((service) => (
                        <li key={service.slug}>
                          <Link
                            href={`/services/${service.slug}`}
                            className="flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm font-semibold hover:bg-sand-2"
                          >
                            <Icon name={service.icon} className="size-5 shrink-0 text-signal-deep" />
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
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-lg px-3 py-2 font-semibold hover:bg-sand-2 ${active ? "text-signal-deep" : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a href={telUrl} className="hidden items-center gap-2 px-2 font-bold xl:flex">
            <Icon name="phone" className="size-5" />
            {site.phoneDisplay}
          </a>
          <a
            href={whatsappUrl(defaultMessage)}
            target="_blank"
            rel="noopener"
            className="btn btn-wa hidden !min-h-11 !py-2 sm:inline-flex"
          >
            <WhatsAppIcon />
            Get a price
          </a>
          <button
            type="button"
            onClick={() => setMenuFor(open ? null : pathname)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-11 place-items-center rounded-lg border-2 border-ink lg:hidden"
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-sand-3 bg-sand lg:hidden">
          <ul className="wrap py-3 pb-6">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="font-display block border-b border-sand-3 py-3.5 text-2xl font-extrabold">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
