import type { Metadata } from "next";
import Link from "next/link";
import { CheckList, PageHero, PriceTiers, SectionHead, TipCards } from "@/components/Blocks";
import { CtaBand, WhatsAppButton } from "@/components/Cta";
import { Icon } from "@/components/Icon";
import { photos } from "@/data/images";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Junk Removal Prices in Dubai",
  description:
    "Junk removal prices in Dubai for a single item through a full truck. See what a fixed quote includes before you book a crew.",
  path: "/pricing",
});

const factors = [
  { title: "Volume", body: "How much truck space your items take up. This is the biggest factor." },
  { title: "Weight", body: "Soil, tiles and marble need more effort and cost more to dispose of than their size suggests." },
  { title: "Access", body: "Floor, lift, carrying distance and parking all affect the crew size and time." },
  { title: "Timing", body: "Same-day, evening and peak-season slots can cost more. Your quote will say if so." },
];

const included = ["Carrying from where the items are", "Loading and transport", "Standard dismantling", "Disposal", "A sweep of the cleared space"];
const extras = ["Items added after your quote", "Access that differs from what we were told", "Long waits caused by lift or permit problems", "Specialist cleaning, if you request it"];

export default function PricingPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Pricing", path: "/pricing" }]}
        eyebrow="Pricing"
        photo={{ ...photos.packingBox, alt: "Mover packing items into a box before a priced collection in Dubai" }}
        title="Junk removal prices in Dubai"
        lead="One price, agreed before anything moves. Every job is different, so we price from your photo. Here's exactly what goes into that number."
      >
        <WhatsAppButton label="Get my price" />
      </PageHero>

      <section className="sec sec-light sheet">
        <div className="wrap">
          <SectionHead eyebrow="Truck space" title="Roughly how much truck do you need?" />
          <div className="mt-12">
            <PriceTiers />
          </div>
        </div>
      </section>

      <section className="sec sec-white sheet">
        <div className="wrap">
          <SectionHead eyebrow="What sets it" title="Four things set your price" />
          <div className="mt-12">
            <TipCards tips={factors} />
          </div>
        </div>
      </section>

      <section className="sec sec-light sheet">
        <div className="wrap grid gap-5 md:grid-cols-2">
          <div className="cd rv">
            <h2 className="h-sm">Included in your quote</h2>
            <CheckList items={included} />
          </div>
          <div className="glass-ink rv" style={{ "--d": ".1s" } as React.CSSProperties}>
            <h2 className="h-sm">What could change it</h2>
            <ul className="inc">
              {extras.map((item) => (
                <li key={item}>
                  <Icon name="plus" className="size-5" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 font-bold">If something changes, you'll agree the new price before the crew loads anything.</p>
          </div>
          <p className="rv mt-6 text-[18px] md:col-span-2">
            On a tight budget? If you qualify, Dubai Municipality's bulky waste pickup is free.{" "}
            <Link href="/blog/dubai-municipality-free-bulky-waste-vs-private-junk-removal" className="link">
              See when it's the better choice
            </Link>
          </p>
        </div>
      </section>

      <CtaBand title="Find out your exact price" text="Quotes by photo are free, and there's no obligation to book." />
    </>
  );
}
