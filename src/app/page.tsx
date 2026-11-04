import type { Metadata } from "next";
import Link from "next/link";
import { AreaDirectory, FaqList, JsonLd, PriceTiers, Reviews, ServiceCard } from "@/components/Blocks";
import { CallButton, CtaBand, WhatsAppButton } from "@/components/Cta";
import { Icon, type IconName } from "@/components/Icon";
import { LoadBuilder } from "@/components/LoadBuilder";
import { areas } from "@/data/areas";
import { homeFaqs } from "@/data/faqs";
import { services } from "@/data/services";
import { faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  description:
    "Junk removal in Dubai, priced from one WhatsApp photo. We lift, load and clear furniture, appliances, villas and offices. Same-day slots when available.",
};

const promises = ["Fixed price before we lift a thing", "You don't carry anything", "Pay when it's gone", "Open 7 days"];

const steps: { icon: IconName; title: string; text: string }[] = [
  { icon: "camera", title: "Snap it", text: "Send a photo of what's going, plus your area and floor. One wide shot is usually enough." },
  { icon: "tag", title: "Get your price", text: "You'll get one fixed price covering carrying, loading, transport and disposal." },
  { icon: "truck", title: "Watch it leave", text: "The crew arrives in your time window, carries everything out and sweeps up." },
];

const destinations: { icon: IconName; title: string; text: string }[] = [
  { icon: "heart", title: "Reuse first", text: "Clean, working items are set aside to find a second home wherever that's possible." },
  { icon: "recycle", title: "Recycle next", text: "Metal, cardboard, electronics and other recoverable materials are separated from the load." },
  { icon: "bin", title: "Dispose properly", text: "What's left goes for disposal through proper channels. It never gets dumped in the desert." },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(homeFaqs)} />

      <section className="relative overflow-hidden bg-ink text-sand">
        <Skyline />
        <div className="wrap relative grid gap-10 pt-10 pb-14 md:pt-16 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:pb-20">
          <div>
            <p className="eyebrow eyebrow-dark">Across all of Dubai, 7 days a week</p>
            <h1 className="mt-4 text-[2.9rem] sm:text-6xl xl:text-7xl">
              Dubai junk removal, priced from <span className="text-signal">one photo.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-mist md:text-xl">
              WhatsApp us a picture. You'll get a fixed price, then a crew that carries everything out, from any floor, and leaves the space swept.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton />
              <CallButton dark />
            </div>
          </div>
          <LoadBuilder />
        </div>
        <div className="chevrons relative" />
      </section>

      <section aria-label="Our promises" className="border-b border-sand-3 bg-paper">
        <ul className="wrap grid grid-cols-2 gap-x-6 gap-y-3 py-5 lg:grid-cols-4">
          {promises.map((promise) => (
            <li key={promise} className="flex items-start gap-2 font-semibold">
              <Icon name="check" className="mt-0.5 size-5 shrink-0 text-signal-deep" />
              {promise}
            </li>
          ))}
        </ul>
      </section>

      <section className="py-16 md:py-24">
        <div className="wrap">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">What we clear</p>
              <h2 className="mt-3 max-w-2xl text-4xl md:text-5xl">One sofa or a whole villa. Same crew, same deal.</h2>
            </div>
            <Link href="/services" className="link">
              All {services.length} services
            </Link>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <li key={service.slug}>
                <ServiceCard service={service} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-sand-2 py-16 md:py-24">
        <div className="wrap">
          <p className="eyebrow">How it works</p>
          <h2 className="mt-3 max-w-2xl text-4xl md:text-5xl">Three messages, and it's sorted.</h2>
          <ol className="mt-10 grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <li key={step.title} className="border-t-4 border-ink pt-5">
                <div className="flex items-center justify-between">
                  <span className="font-display text-5xl font-extrabold text-signal-deep">{index + 1}</span>
                  <Icon name={step.icon} className="size-9" />
                </div>
                <h3 className="mt-4 text-2xl">{step.title}</h3>
                <p className="mt-2 text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="wrap">
          <div className="grid gap-4 md:grid-cols-2 md:items-end">
            <div>
              <p className="eyebrow">Pricing</p>
              <h2 className="mt-3 text-4xl md:text-5xl">You pay for the space you use.</h2>
            </div>
            <p className="text-lg text-muted md:pb-1">
              Your quote comes down to how much of the truck you fill, how heavy it is, and how easy it is to reach. <Link href="/pricing" className="link text-ink">See how pricing works</Link>
            </p>
          </div>
          <div className="mt-10">
            <PriceTiers />
          </div>
        </div>
      </section>

      <section className="bg-ink py-16 text-sand md:py-24">
        <div className="wrap grid gap-10 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <p className="eyebrow eyebrow-dark">Where it goes</p>
            <h2 className="mt-3 text-4xl md:text-5xl">Gone from your place. Not dumped somewhere else.</h2>
          </div>
          <ul className="grid gap-6 sm:grid-cols-3">
            {destinations.map((item) => (
              <li key={item.title}>
                <Icon name={item.icon} className="size-9 text-signal" />
                <h3 className="mt-3 text-xl">{item.title}</h3>
                <p className="mt-2 text-mist">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Reviews />

      <section className="py-16 md:py-24">
        <div className="wrap">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Where we work</p>
              <h2 className="mt-3 max-w-2xl text-4xl md:text-5xl">Towers, villas, warehouses. Jebel Ali to Al Qusais.</h2>
            </div>
            <Link href="/areas" className="link">
              All {areas.length} areas
            </Link>
          </div>
          <div className="mt-10">
            <AreaDirectory />
          </div>
        </div>
      </section>

      <section className="bg-sand-2 py-16 md:py-24">
        <div className="wrap grid gap-10 lg:grid-cols-[1fr_2fr]">
          <div>
            <p className="eyebrow">Questions</p>
            <h2 className="mt-3 text-4xl md:text-5xl">The things people ask first.</h2>
            <Link href="/faq" className="link mt-5 inline-block">
              Read all FAQs
            </Link>
          </div>
          <FaqList faqs={homeFaqs} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}

function Skyline() {
  return (
    <svg
      viewBox="0 0 1256 300"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="absolute inset-x-0 bottom-3 h-28 w-full text-ink-2 md:h-44"
      fill="currentColor"
    >
      <path d="M0 300V220h60v-40h50v60h40v-90h46v70h44v-30h52v60h50V150h34l10-40 10 40h26v90h60v-60l30-30 30 30v90h50V210h40v-80h20V60l6-60 6 60v70h20v110h60v-50h40v-70h60v80h50v-30h60v50h46v-100h50v80h50v-40h60v60h46v-50h50v120z" />
    </svg>
  );
}
