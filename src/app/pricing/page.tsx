import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, PriceTiers } from "@/components/Blocks";
import { CtaBand, WhatsAppButton } from "@/components/Cta";
import { Icon } from "@/components/Icon";
import { photos } from "@/data/images";

export const metadata: Metadata = {
  title: "Junk Removal Prices in Dubai",
  description:
    "How junk removal is priced in Dubai: truck space, weight, access and timing. See what's included in your fixed quote and how to lower it.",
  alternates: { canonical: "/pricing" },
};

const factors = [
  { title: "Volume", text: "How much truck space your items take up. This is the biggest factor." },
  { title: "Weight", text: "Soil, tiles and marble need more effort and cost more to dispose of than their size suggests." },
  { title: "Access", text: "Floor, lift, carrying distance and parking all affect the crew size and time." },
  { title: "Timing", text: "Same-day, evening and peak-season slots can cost more. Your quote will say if so." },
];

const included = ["Carrying from where the items are", "Loading and transport", "Standard dismantling", "Disposal", "A sweep of the cleared space"];
const extras = ["Items added after your quote", "Access that differs from what we were told", "Long waits caused by lift or permit problems", "Specialist cleaning, if you request it"];

export default function PricingPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Pricing", path: "/pricing" }]}
        eyebrow="Pricing"
        photo={photos.packingBox}
        title="One price, agreed before anything moves."
        lead="Every job is different, so we price from your photo. Here's exactly what goes into that number."
      >
        <WhatsAppButton label="Get my price" />
      </PageHero>

      <section className="py-16 md:py-24">
        <div className="wrap">
          <h2 className="text-3xl md:text-[2.75rem]">Roughly how much truck do you need?</h2>
          <div className="mt-8">
            <PriceTiers />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="wrap">
          <h2 className="text-3xl md:text-[2.75rem]">Four things set your price</h2>
          <ul className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {factors.map((factor) => (
              <li key={factor.title} className="rounded-3xl bg-sand p-6">
                <h3 className="text-xl">{factor.title}</h3>
                <p className="mt-2 text-muted">{factor.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="wrap grid gap-5 md:grid-cols-2">
          <div className="card p-8">
            <h2 className="text-2xl">Included in your quote</h2>
            <ul className="mt-4 space-y-3">
              {included.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <Icon name="check" className="mt-0.5 size-5 shrink-0 text-signal-deep" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-ink p-8 text-white">
            <h2 className="text-2xl">What could change it</h2>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-mist marker:text-signal">
              {extras.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-4 font-semibold">If something changes, you'll agree the new price before the crew loads anything.</p>
          </div>
        </div>
        <p className="wrap mt-10 text-lg">
          On a tight budget? If you qualify, Dubai Municipality's bulky waste pickup is free.{" "}
          <Link href="/blog/dubai-municipality-free-bulky-waste-vs-private-junk-removal" className="link">
            See when it's the better choice
          </Link>
        </p>
      </section>

      <CtaBand title="Find out your exact price" text="Quotes by photo are free, and there's no obligation to book." />
    </>
  );
}
