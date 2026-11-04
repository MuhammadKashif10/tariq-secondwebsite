import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AreaDirectory, FaqList, JsonLd, PriceTiers, Reviews, SectionHead, ServiceCard } from "@/components/Blocks";
import { CallButton, CtaBand, WhatsAppButton } from "@/components/Cta";
import { Icon, WhatsAppIcon, type IconName } from "@/components/Icon";
import { LoadBuilder } from "@/components/LoadBuilder";
import { areas } from "@/data/areas";
import { homeFaqs } from "@/data/faqs";
import { photos } from "@/data/images";
import { services } from "@/data/services";
import { defaultMessage, whatsappUrl } from "@/lib/contact";
import { faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  description:
    "Junk removal in Dubai, priced from one WhatsApp photo. We lift, load and clear furniture, appliances, villas and offices. Same-day slots when available.",
};

const promises: { icon: IconName; title: string; text: string }[] = [
  { icon: "tag", title: "Fixed price", text: "Agreed before we lift a thing" },
  { icon: "truck", title: "We do the carrying", text: "From any room, on any floor" },
  { icon: "shield", title: "Pay when it's gone", text: "Once the job is finished" },
  { icon: "clock", title: "Open 7 days", text: "Same-day slots when available" },
];

const benefits = [
  "No dragging things to the lobby. We collect from the room.",
  "We dismantle wardrobes, beds and flat-pack units on site.",
  "We plan around service lifts, permits and gate rules.",
  "You get a swept, empty space when we leave.",
];

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
  const featured = services.find((service) => service.slug === "sofa-removal") ?? services[0];
  const others = services.filter((service) => service.slug !== featured.slug);

  return (
    <>
      <JsonLd data={faqSchema(homeFaqs)} />

      <section className="relative isolate overflow-hidden bg-ink text-white">
        <Image src={photos.skyline.src} alt={photos.skyline.alt} fill priority quality={50} sizes="100vw" className="-z-20 object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/80 via-ink/70 to-ink/85 lg:bg-gradient-to-r lg:from-ink/90 lg:via-ink/65 lg:to-ink/10" />
        <div className="wrap grid gap-10 pt-12 pb-28 md:pt-20 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:pb-36">
          <div>
            <p className="eyebrow eyebrow-dark">Across all of Dubai, 7 days a week</p>
            <h1 className="mt-5 text-[2.85rem] sm:text-6xl xl:text-[4.6rem]">
              Dubai junk removal, priced from <span className="accent text-signal">one photo.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-mist md:text-xl">
              WhatsApp us a picture. You'll get a fixed price, then a crew that carries everything out, from any floor, and leaves the space swept.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton />
              <CallButton dark />
            </div>
          </div>
          <LoadBuilder />
        </div>
      </section>

      <section aria-label="Our promises" className="wrap relative z-10 -mt-16 lg:-mt-20">
        <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-sand-2 shadow-lift lg:grid-cols-4">
          {promises.map((promise) => (
            <li key={promise.title} className="flex flex-col gap-3 bg-white p-5 sm:flex-row sm:items-center sm:p-6">
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-signal/20 text-signal-deep">
                <Icon name={promise.icon} />
              </span>
              <span>
                <span className="block font-bold">{promise.title}</span>
                <span className="block text-sm text-muted">{promise.text}</span>
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="py-20 md:py-28">
        <div className="wrap grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="reveal relative pb-14 sm:pr-16">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-lift">
              <Image src={photos.moversStreet.src} alt={photos.moversStreet.alt} fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
            </div>
            <div className="absolute right-0 bottom-0 aspect-square w-[42%] overflow-hidden rounded-3xl shadow-lift ring-8 ring-sand">
              <Image src={photos.moversDoorway.src} alt={photos.moversDoorway.alt} fill sizes="(min-width: 1024px) 20vw, 40vw" className="object-cover" />
            </div>
          </div>
          <div className="reveal">
            <p className="eyebrow">Why people call us</p>
            <h2 className="mt-4 text-4xl md:text-[3.25rem]">
              You point. We carry. <span className="accent">It's gone.</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Getting rid of bulky things in Dubai means dealing with towers, permits and gated communities. We've built the whole service around making that part easy for you.
            </p>
            <ul className="mt-7 space-y-3.5">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 font-medium">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-signal text-ink">
                    <Icon name="check" className="size-3.5" />
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>
            <Link href="/about" className="btn btn-ghost mt-8">
              How we work <Icon name="arrow" className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="wrap">
          <SectionHead
            eyebrow="What we clear"
            title={
              <>
                One sofa or a whole villa. <span className="accent">Same crew, same deal.</span>
              </>
            }
          >
            <Link href="/services" className="link">
              All {services.length} services
            </Link>
          </SectionHead>
          <ul className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            <li className="col-span-2 lg:row-span-2">
              <ServiceCard service={featured} large />
            </li>
            {others.map((service) => (
              <li key={service.slug}>
                <ServiceCard service={service} />
              </li>
            ))}
            <li>
              <a
                href={whatsappUrl(defaultMessage)}
                target="_blank"
                rel="noopener"
                className="group flex h-full min-h-[13.5rem] flex-col justify-between rounded-3xl bg-signal p-4 text-ink shadow-soft transition-shadow hover:shadow-lift sm:min-h-[19rem] sm:p-6"
              >
                <WhatsAppIcon className="size-9" />
                <span>
                  <span className="block text-lg font-bold tracking-tight sm:text-2xl">Not sure which one?</span>
                  <span className="mt-2 hidden text-sm leading-relaxed sm:block">Send a photo and we'll work it out for you.</span>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold">
                    Ask on WhatsApp <Icon name="arrow" className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-ink py-20 text-white md:py-28">
        <div className="wrap grid gap-14 lg:grid-cols-[1.25fr_1fr] lg:items-center">
          <div>
            <p className="eyebrow eyebrow-dark">How it works</p>
            <h2 className="mt-4 max-w-xl text-4xl md:text-[3.25rem]">
              Three messages, and it's <span className="accent text-signal">sorted.</span>
            </h2>
            <ol className="mt-10 space-y-3">
              {steps.map((step, index) => (
                <li key={step.title} className="reveal flex gap-5 rounded-3xl bg-white/5 p-5 ring-1 ring-white/10 sm:p-6">
                  <span className="grid size-13 shrink-0 place-items-center rounded-2xl bg-signal text-ink">
                    <Icon name={step.icon} />
                  </span>
                  <span>
                    <span className="text-xs font-bold tracking-[0.14em] text-signal uppercase">Step {index + 1}</span>
                    <span className="mt-1 block text-xl font-bold tracking-tight">{step.title}</span>
                    <span className="mt-1 block leading-relaxed text-mist">{step.text}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
          <ChatExample />
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="wrap">
          <SectionHead eyebrow="Pricing" title={<>You pay for the <span className="accent">space you use.</span></>}>
            <Link href="/pricing" className="link">
              How pricing works
            </Link>
          </SectionHead>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            Your quote comes down to how much of the truck you fill, how heavy it is, and how easy it is to reach.
          </p>
          <div className="mt-10">
            <PriceTiers />
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="wrap grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">Where it goes</p>
            <h2 className="mt-4 text-4xl md:text-[3.25rem]">
              Gone from your place. <span className="accent">Not dumped somewhere else.</span>
            </h2>
            <ul className="mt-9 space-y-6">
              {destinations.map((item) => (
                <li key={item.title} className="flex gap-4">
                  <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-sand-2">
                    <Icon name={item.icon} />
                  </span>
                  <span>
                    <span className="block text-lg font-bold tracking-tight">{item.title}</span>
                    <span className="mt-0.5 block leading-relaxed text-muted">{item.text}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal grid grid-cols-2 gap-4">
            <figure className="relative mt-12 aspect-[3/4] overflow-hidden rounded-3xl shadow-soft">
              <Image src={photos.dumpedSofa.src} alt={photos.dumpedSofa.alt} fill sizes="(min-width: 1024px) 24vw, 50vw" className="object-cover" />
              <figcaption className="absolute inset-x-3 bottom-3 rounded-2xl bg-white/95 px-3.5 py-2.5 text-sm font-bold">What we won't do</figcaption>
            </figure>
            <figure className="relative aspect-[3/4] overflow-hidden rounded-3xl shadow-soft">
              <Image src={photos.recycling.src} alt={photos.recycling.alt} fill sizes="(min-width: 1024px) 24vw, 50vw" className="object-cover" />
              <figcaption className="absolute inset-x-3 bottom-3 rounded-2xl bg-white/95 px-3.5 py-2.5 text-sm font-bold">What we aim for</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <Reviews />

      <section className="py-20 md:py-28">
        <div className="wrap">
          <SectionHead eyebrow="Where we work" title={<>Towers, villas, warehouses. <span className="accent">Jebel Ali to Al Qusais.</span></>}>
            <Link href="/areas" className="link">
              All {areas.length} areas
            </Link>
          </SectionHead>
          <div className="mt-12">
            <AreaDirectory />
          </div>
        </div>
      </section>

      <section className="bg-sand-2 py-20 md:py-28">
        <div className="wrap grid gap-10 lg:grid-cols-[1fr_1.8fr]">
          <div>
            <p className="eyebrow">Questions</p>
            <h2 className="mt-4 text-4xl md:text-[3.25rem]">
              The things people <span className="accent">ask first.</span>
            </h2>
            <Link href="/faq" className="btn btn-ghost mt-7">
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

/** An illustration of the quoting flow, labelled so it isn't read as a real customer chat. */
function ChatExample() {
  return (
    <figure className="reveal mx-auto w-full max-w-sm overflow-hidden rounded-[2.25rem] bg-[#ece5dd] text-ink shadow-float ring-8 ring-white/10">
      <div className="flex items-center gap-3 bg-[#075e54] px-4 py-3.5 text-white">
        <span className="grid size-10 place-items-center rounded-full bg-white/20">
          <Icon name="truck" className="size-5" />
        </span>
        <span className="leading-tight">
          <span className="block font-bold">Dubai Junk Removal</span>
          <span className="block text-xs text-white/85">Example conversation</span>
        </span>
      </div>
      <div className="space-y-2.5 p-4 text-[0.92rem] leading-snug">
        <div className="ml-auto w-[78%] rounded-2xl rounded-tr-sm bg-[#d9fdd3] p-1.5 shadow-sm">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <Image src={photos.junkBags.src} alt={photos.junkBags.alt} fill sizes="280px" className="object-cover" />
          </div>
          <p className="p-1.5">Can you clear this? JVC, 3rd floor, there's a lift.</p>
        </div>
        <p className="w-[80%] rounded-2xl rounded-tl-sm bg-white p-3 shadow-sm">Yes! That's about a quarter truck. Here's your fixed price, with everything included.</p>
        <p className="ml-auto w-fit max-w-[78%] rounded-2xl rounded-tr-sm bg-[#d9fdd3] p-3 shadow-sm">Perfect. Tomorrow morning?</p>
        <p className="w-[80%] rounded-2xl rounded-tl-sm bg-white p-3 shadow-sm">Booked. We'll message you when the crew is on the way.</p>
      </div>
    </figure>
  );
}
