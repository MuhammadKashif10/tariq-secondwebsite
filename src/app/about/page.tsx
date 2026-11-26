import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero, Reviews, SectionHead } from "@/components/Blocks";
import { CtaBand, WhatsAppButton } from "@/components/Cta";
import { Icon, type IconName } from "@/components/Icon";
import { placeLine, profileLinks, site } from "@/config/site";
import { areas } from "@/data/areas";
import { photos } from "@/data/images";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About Our Dubai Junk Removal Service",
  description:
    "About our Dubai junk removal service: how photo quotes, fixed prices and collections work across the city, plus the hours and details we actually publish.",
  path: "/about",
});

const standards: { icon: IconName; color: string; title: string; text: string }[] = [
  { icon: "tag", color: "#ffb93b", title: "The price is the price", text: "You'll agree the full amount before anything moves. If the job changes, you'll agree the change first." },
  { icon: "clock", color: "#5aa9ff", title: "Straight answers on timing", text: "If today isn't possible, we'll tell you so rather than promise and go quiet." },
  { icon: "shield", color: "#9b8cff", title: "Care for your home", text: "Crews protect corners and floors, and they sweep up when they've finished." },
  { icon: "recycle", color: "#38d9a9", title: "Responsible disposal", text: "We reuse and recycle where we can. The rest goes for disposal through proper channels." },
];

const steps = [
  { title: "You send a photo", text: "One wide shot, your area and the floor number. That is usually enough for a fixed price, without a site visit." },
  { title: "You agree the number", text: "The quote covers carrying, loading, transport and disposal. If the job changes, the new price is agreed before anything extra is loaded." },
  { title: "The crew collects", text: "They work around service lifts, loading bays and community gates, carry from the room, and leave the space swept." },
];

export default function AboutPage() {
  const profiles = profileLinks();

  return (
    <>
      <PageHero
        crumbs={[{ name: "About", path: "/about" }]}
        eyebrow="About"
        photo={{ ...photos.moversRoom, alt: "Two movers lifting a sofa in an empty room during a Dubai collection" }}
        title="About our junk removal service in Dubai"
        lead="Getting rid of junk in Dubai should take one message. In a city of permits, service lifts and gated communities, the removal itself is the easy part. We take care of the rest."
      >
        <WhatsAppButton />
      </PageHero>

      <section className="sec sec-light sheet">
        <div className="wrap split">
          <div className="pho rv">
            <figure>
              <Image src={photos.moverCorridor.src} alt="Mover carrying a sofa along an apartment corridor in Dubai" fill sizes="(min-width: 1100px) 290px, 50vw" className="object-cover" />
              <figcaption>Any floor</figcaption>
            </figure>
            <figure>
              <Image src={photos.moversInterior.src} alt="Mover carrying a sofa past packed boxes in a Dubai home" fill sizes="(min-width: 1100px) 290px, 50vw" className="object-cover" />
              <figcaption>Swept when we leave</figcaption>
            </figure>
          </div>
          <div className="rv space-y-4 text-[18px] leading-[1.7]" style={{ "--d": ".1s" } as React.CSSProperties}>
            <p className="eyebrow">How a job runs</p>
            <h2 className="h-lg !mt-[18px] !mb-6">
              Photo, price, then the <span className="grad">carry-out.</span>
            </h2>
            <p>
              Ask around for a junk removal price in Dubai and you'll normally hear "it depends". It does depend, on volume, weight, access and timing. That shouldn't be where the conversation ends, so we start with a photo and a{" "}
              <Link href="/pricing" className="link">
                fixed price
              </Link>
              .
            </p>
            <p>
              The same crew handles a studio in Deira and a villa in Arabian Ranches. What changes is the plan: a service lift and a loading bay in a tower, or a gate pass and a driveway in a community.
            </p>
            <ol className="m-0 list-none space-y-4 p-0">
              {steps.map((step, index) => (
                <li key={step.title}>
                  <h3 className="h-sm text-[22px]">
                    {index + 1}. {step.title}
                  </h3>
                  <p className="mt-1">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="sec sec-white sheet">
        <div className="wrap grid gap-10 lg:grid-cols-2">
          <div className="rv">
            <p className="eyebrow">Where we work</p>
            <h2 className="h-lg mt-[18px]">Collections across Dubai</h2>
            <p className="lead mutL">
              We list {areas.length} communities, from the Marina and Downtown to villa districts and older neighbourhoods. If yours is not on the list, ask anyway. The crew collects from the property.
            </p>
            <p className="mt-4">
              <Link href="/areas" className="link">
                Junk removal areas across Dubai
              </Link>
            </p>
          </div>
          <ul className="rv m-0 list-none space-y-3 rounded-[32px] border border-line bg-paper p-8">
            <Fact label="Hours">{site.hoursLabel}</Fact>
            <Fact label="Based in">{placeLine()}</Fact>
            <Fact label="Phone">{site.phoneDisplay}</Fact>
            <Fact label="Email">
              <a href={`mailto:${site.email}`} className="break-all hover:text-amb-deep">
                {site.email}
              </a>
            </Fact>
            {site.tradeLicence && <Fact label="Trade licence">{site.tradeLicence}</Fact>}
          </ul>
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

      <section className="sec sec-light sheet">
        <div className="wrap max-w-[760px]">
          <p className="eyebrow">What we publish</p>
          <h2 className="h-lg mt-[18px]">Only details we can stand behind</h2>
          <div className="mt-6 space-y-4 text-[18px] leading-[1.7]">
            <p>
              Prices on this site appear only when they are real starting figures. Until then, every job is priced from your photo. The{" "}
              <Link href="/pricing" className="link">
                pricing page
              </Link>{" "}
              explains what goes into that number.
            </p>
            <p>Customer comments are shown when a customer wrote them.</p>
            {profiles.length > 0 && (
              <p>
                Profiles:{" "}
                {profiles.map((url, index) => (
                  <span key={url}>
                    {index > 0 && ", "}
                    <a href={url} className="link" rel="noopener noreferrer">
                      {url.replace(/^https?:\/\/(www\.)?/, "")}
                    </a>
                  </span>
                ))}
                .
              </p>
            )}
            <p>
              Common questions, including what we can't take, are on the{" "}
              <Link href="/faq" className="link">
                FAQ
              </Link>
              . To book,{" "}
              <Link href="/contact" className="link">
                contact us
              </Link>{" "}
              with a photo.
            </p>
          </div>
        </div>
      </section>

      <Reviews />
      <CtaBand />
    </>
  );
}

function Fact({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <li className="flex flex-col gap-1 border-b border-line pb-3 last:border-0 last:pb-0">
      <span className="text-xs font-extrabold tracking-[0.12em] text-amb-deep uppercase">{label}</span>
      <span className="font-bold">{children}</span>
    </li>
  );
}
