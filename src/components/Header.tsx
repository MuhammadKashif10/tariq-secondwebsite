"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/config/site";
import { defaultMessage, telUrl, whatsappUrl } from "@/lib/contact";
import { Icon } from "./Icon";
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
  const [scrolled, setScrolled] = useState(false);
  // Tying the open state to the path closes the menu on navigation.
  const open = menuFor === pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(scrollY > 30);
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-in">
        <Link href="/" aria-label={`${site.name} home`}>
          <Logo />
        </Link>

        <nav className="nav-links" aria-label="Main">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} aria-current={isActive(item.href) ? "page" : undefined}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="nav-cta">
          <a className="nav-phone" href={telUrl}>
            <Icon name="phone" className="size-[18px]" />
            {site.phoneDisplay}
          </a>
          <a className="btn btn-white" href={whatsappUrl(defaultMessage)} target="_blank" rel="noopener">
            WhatsApp
          </a>
          <button
            type="button"
            className="burger"
            onClick={() => setMenuFor(open ? null : pathname)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" className="mnav" aria-label="Mobile">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="ml" aria-current={isActive(item.href) ? "page" : undefined}>
              {item.label}
              <Icon name="arrow" className="size-6" />
            </Link>
          ))}
          <div className="mt-5 flex gap-2.5">
            <a className="btn btn-amb flex-1" href={whatsappUrl(defaultMessage)} target="_blank" rel="noopener">
              WhatsApp
            </a>
            <a className="btn btn-ghost flex-1" href={telUrl}>
              Call
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
