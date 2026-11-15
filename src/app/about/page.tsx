import type { Metadata } from "next";
import Image from "next/image";
import { PageHero, Reviews, SectionHead } from "@/components/Blocks";
import { CtaBand, WhatsAppButton } from "@/components/Cta";
import { Icon, type IconName } from "@/components/Icon";
import { site } from "@/config/site";
import { photos } from "@/data/images";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About Us",
  description: `${site.name} makes clearing junk in Dubai simple: a clear price from a photo, careful crews, and honest answers about timing and disposal.`,
  path: "/about",
});

const standards: { icon: IconName; color: string; title: string; text: string }[] = [
  { icon: "tag", color: "#ffb93b", title: "The price is the price", text: "You'll agree the full amount before anything moves. If the job changes, you'll agree the change first." },
  { icon: "clock", color: "#5aa9ff", title: "Straight answers on timing", text: "If today isn't possible, we'll tell you so rather than promise and go quiet." },
  { icon: "shield", color: "#9b8cff", title: "Care for your home", text: "Crews protect corners and floors, and they sweep up when they've finished." },
  { icon: "recycle", color: "#38d9a9", title: "Responsible disposal", text: "We reuse and recycle where we can. The rest goes for disposal through proper channels." },
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

      <section className="sec sec-light sheet">
        <div className="wrap split">
          <div className="pho rv">
            <figure>
              <Image src={photos.moverCorridor.src} alt={photos.moverCorridor.alt} fill sizes="(min-width: 1100px) 290px, 50vw" className="object-cover" />
              <figcaption>Any floor</figcaption>
            </figure>
            <figure>
              <Image src={photos.moversInterior.src} alt={photos.moversInterior.alt} fill sizes="(min-width: 1100px) 290px, 50vw" className="object-cover" />
              <figcaption>Swept when we leave</figcaption>
            </figure>
          </div>
          <div className="rv space-y-4 text-[18px] leading-[1.7]" style={{ "--d": ".1s" } as React.CSSProperties}>
            <p className="eyebrow">Our approach</p>
            <h2 className="h-lg !mt-[18px] !mb-6">
              Why we work the way <span className="grad">we do.</span>
            </h2>
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

      <section className="sec sec-dark2 sheet">
        <div className="wrap">
          <SectionHead eyebrow="How we work" title="The standards we hold ourselves to" dark />
          <ul className="cards3 mt-12">
            {standards.map((item, index) => (
              <li key={item.title} className="cd rv" style={{ "--d": `${(index % 3) * 0.08}s` } as React.CSSProperties}>
                <span className="ci" style={{ background: item.color }}>
                  <Icon name={item.icon} className="size-7" />
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
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
