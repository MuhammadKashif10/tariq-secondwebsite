import type { Metadata } from "next";
import Image from "next/image";
import { PageHero, Reviews } from "@/components/Blocks";
import { CtaBand, WhatsAppButton } from "@/components/Cta";
import { Icon, type IconName } from "@/components/Icon";
import { site } from "@/config/site";
import { photos } from "@/data/images";

export const metadata: Metadata = {
  title: "About Us",
  description: `${site.name} makes clearing junk in Dubai simple: a clear price from a photo, careful crews, and honest answers about timing and disposal.`,
  alternates: { canonical: "/about" },
};

const standards: { icon: IconName; title: string; text: string }[] = [
  { icon: "tag", title: "The price is the price", text: "You'll agree the full amount before anything moves. If the job changes, you'll agree the change first." },
  { icon: "clock", title: "Straight answers on timing", text: "If today isn't possible, we'll tell you so rather than promise and go quiet." },
  { icon: "shield", title: "Care for your home", text: "Crews protect corners and floors, and they sweep up when they've finished." },
  { icon: "recycle", title: "Responsible disposal", text: "We reuse and recycle where we can. The rest goes for disposal through proper channels." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "About", path: "/about" }]}
        eyebrow="About us"
        photo={photos.moversRoom}
        title="Getting rid of junk in Dubai should take one message."
        lead="In a city of permits, service lifts and gated communities, the removal itself is the easy part. We take care of the rest."
      >
        <WhatsAppButton />
      </PageHero>

      <section className="py-16 md:py-24">
        <div className="wrap grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="reveal relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-lift">
            <Image src={photos.moverCorridor.src} alt={photos.moverCorridor.alt} fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
          </div>
          <div className="space-y-4 text-lg leading-relaxed">
            <p className="eyebrow">Our approach</p>
            <h2 className="text-3xl md:text-[2.75rem]">Why we work the way we do</h2>
            <p>
              Ask around for a junk removal price in Dubai and you'll normally hear "it depends". It does depend, but that shouldn't be where the conversation ends.
            </p>
            <p>
              So we start with a photo. It tells us nearly everything we need to know, and it lets you get a real number in a single WhatsApp chat. You don't need a site visit, and you don't have to wait around for a call back.
            </p>
            <p>
              The same thinking runs through the job. Whether you're clearing a studio in Deira or a villa in the Ranches, you get a plan built around how your building works.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="wrap">
          <h2 className="text-3xl md:text-[2.75rem]">The standards we hold ourselves to</h2>
          <ul className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {standards.map((item) => (
              <li key={item.title} className="rounded-3xl bg-sand p-6">
                <Icon name={item.icon} className="size-8 text-signal-deep" />
                <h3 className="mt-3 text-xl">{item.title}</h3>
                <p className="mt-2 text-muted">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Reviews />
      <CtaBand />
    </>
  );
}
