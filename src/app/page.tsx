import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AreaCheck } from "@/components/AreaFinder";
import { AreaMap } from "@/components/AreaMap";
import { BeforeAfter } from "@/components/BeforeAfter";
import { ArrowIcon, CheckList, FaqSection, PriceTiers, Reviews, SectionHead } from "@/components/Blocks";
import { CallButton, CtaBand, WhatsAppButton } from "@/components/Cta";
import { HeroScene } from "@/components/HeroScene";
import { Icon, WhatsAppIcon } from "@/components/Icon";
import { DeferredLoadBuilder } from "@/components/DeferredLoadBuilder";
import { ServiceRail } from "@/components/ServiceRail";
import { Steps, type Step } from "@/components/Steps";
import { site } from "@/config/site";
import { areas } from "@/data/areas";
import { homeFaqs } from "@/data/faqs";
import { photos } from "@/data/images";
import { areaLinks, mapPins } from "@/data/map-pins";
import { services } from "@/data/services";
import { defaultMessage, telUrl, whatsappUrl } from "@/lib/contact";
import { pageMetadata } from "@/lib/seo";
import { toCards } from "@/lib/service-card";

export const metadata: Metadata = pageMetadata({
  title: "Dubai Junk Removal Services: Fixed Price from a Photo",
  absolute: true,
  description:
    "Junk removal in Dubai, priced from one WhatsApp photo. We lift, load and clear furniture, appliances, villas and offices. Same-day slots when available.",
  path: "/",
});

const intro =
  "Getting rid of bulky things in Dubai means dealing with towers, permits and gated communities. We've built the whole service around making that part easy for you.";

const benefits = [
  "No dragging things to the lobby. We collect from the room.",
  "We dismantle wardrobes, beds and flat-pack units on site.",
  "We plan around service lifts, permits and gate rules.",
  "You get a swept, empty space when we leave.",
];

const steps: Step[] = [
  { icon: "camera", title: "Snap it", text: "Send a photo of what's going, plus your area and floor. One wide shot is usually enough." },
  { icon: "tag", title: "Get your price", text: "You'll get one fixed price covering carrying, loading, transport and disposal." },
  { icon: "truck", title: "Watch it leave", text: "The crew arrives in your time window, carries everything out and sweeps up." },
];

const included = ["Carrying from where the items are", "Loading and transport", "Standard dismantling", "Disposal", "A sweep of the cleared space"];

/** "07:00" becomes "7am", matching the style guide. */
function clock(time: string) {
  const [h, m] = time.split(":").map(Number);
  const hour = h % 12 || 12;
  return `${hour}${m ? `:${String(m).padStart(2, "0")}` : ""}${h < 12 ? "am" : "pm"}`;
}

const delay = (s: number) => ({ "--d": `${s}s` }) as React.CSSProperties;

export default function HomePage() {
  const cards = toCards(services);
  const [weekdays, friday] = site.hours;

  return (
    <>
      <HeroScene
        faces={[photos.junkBags, photos.moversRoom, photos.villaPool, photos.office, photos.labelledBox, photos.marina]}
        chips={[
          { icon: "check", label: "Fixed price", color: "var(--mint)", style: { left: -6, top: 70 } },
          { icon: "clock", label: "Same-day slots when available", color: "var(--amb)", style: { right: -10, top: 210 } },
          { icon: "truck", label: "We do the carrying", color: "var(--sky)", style: { left: 20, bottom: 50 } },
        ]}
      >
        <div>
          <span className="badge">
            <span className="dot" />
            Across all of Dubai, 7 days a week
          </span>
          <h1 className="h-xl">
            <span className="ln">
              <span>Dubai junk removal, </span>
            </span>
            <span className="ln">
              <span>priced from </span>
            </span>
            <span className="ln">
              <span className="grad">one photo.</span>
            </span>
          </h1>
          <p className="hero-p">
            WhatsApp us a picture. You'll get a fixed price, then a crew that carries everything out, from any floor, and leaves the space swept.
          </p>
          <div className="hero-cta">
            <WhatsAppButton />
            <CallButton dark />
          </div>
        </div>
      </HeroScene>

      <div className="marq" aria-hidden="true">
        <div className="marq-t">
          {[...services, ...services].map((service, index) => (
            <span key={`${service.slug}-${index}`}>{service.name}</span>
          ))}
        </div>
      </div>

      <section className="sec sec-light" style={{ paddingTop: 150 }}>
        <div className="wrap">
          <p className="eyebrow rv">Why people call us</p>
          <p className="hl">
            {intro.split(" ").map((word, index) => (
              <span key={index} className="w">
                {word}{" "}
              </span>
            ))}
          </p>
          <div className="mosaic">
            <Tile className="m1" photo={{ ...photos.villaPool, alt: "Modern villa with a pool, typical of the Dubai homes we clear" }} n={String(services.length)} label="Services, from one sofa to a whole villa" />
            <Tile className="m2" photo={{ ...photos.office, alt: "Open-plan office of the kind cleared for businesses in Dubai" }} n={String(areas.length)} label="Dubai areas with local tips" />
            <Tile className="m3" photo={{ ...photos.labelledBox, alt: "Moving box labelled for the kitchen during a Dubai move-out" }} n="7" label="Days a week" />
            <Tile className="m4" photo={photos.marina} n="1" label="Photo for a fixed price" />
          </div>
          <div className="about-foot rv">
            <p className="mutL">Fixed price, agreed before we lift a thing. Carrying, loading, transport and disposal included.</p>
            <div className="flex gap-2.5">
              <a className="btn btn-amb btn-round" href={telUrl} aria-label={`Call ${site.phoneDisplay}`}>
                <Icon name="phone" className="size-5" />
              </a>
              <a className="btn btn-amb btn-round" href={whatsappUrl(defaultMessage)} target="_blank" rel="noopener" aria-label="WhatsApp us">
                <WhatsAppIcon className="size-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="how" className="sec sec-dark sheet">
        <div className="wrap">
          <SectionHead eyebrow="How it works" title={<>Three messages, and it's <span className="grad">sorted.</span></>} dark>
            <p className="lead mutD max-w-[24em]">Send a photo of what's going, plus your area and floor. One wide shot is usually enough.</p>
          </SectionHead>
          <Steps steps={steps} />
        </div>
      </section>

      <section className="sec sec-light sheet">
        <div className="wrap">
          <SectionHead
            eyebrow="What we clear"
            title={<>One sofa or a whole villa. <span className="grad">Same crew, same deal.</span></>}
            lead="Not sure which one you need? You don't have to choose. Send a photo and we'll work it out."
          >
            <Link href="/services" className="btn btn-line">
              All {services.length} services
              <ArrowIcon />
            </Link>
          </SectionHead>
          <ServiceRail list={cards} />
        </div>
      </section>

      <section className="sec sec-dark2 sheet">
        <div className="wrap">
          <SectionHead eyebrow="Instant load check" title="Build your load." dark>
            <p className="lead mutD max-w-[24em]">Tap what's going and we turn it into a ready WhatsApp message. Add your photo and send.</p>
          </SectionHead>
          <DeferredLoadBuilder />
        </div>
      </section>

      <section className="sec sec-light sheet">
        <div className="wrap">
          <SectionHead eyebrow="Our promises" title={<>Fixed price. <span className="grad">Full service.</span></>} />
          <div className="bento">
            <div className="bc bA rv">
              <div className="b-ring" />
              <div className="bi bg-amb text-ink">
                <Icon name="tag" className="size-7" />
              </div>
              <h3>
                Fixed price.
                <br />
                Agreed before we lift a thing.
              </h3>
              <p className="text-soft">You'll get one fixed price covering carrying, loading, transport and disposal.</p>
              <CheckList items={included} dark />
            </div>
            <div className="bc bB rv" style={delay(0.1)}>
              <div className="bi bg-ink text-amb">
                <Icon name="clock" className="size-7" />
              </div>
              <h3>Open 7 days.</h3>
              <p>Same-day slots when available. Message us with a photo and we'll tell you right away whether today is possible.</p>
              <ul className="slots">
                {weekdays && (
                  <li>
                    <span>Saturday to Thursday</span>
                    <span>
                      {clock(weekdays.opens)} to {clock(weekdays.closes)}
                    </span>
                  </li>
                )}
                {friday && (
                  <li>
                    <span>Friday</span>
                    <span>
                      {clock(friday.opens)} to {clock(friday.closes)}
                    </span>
                  </li>
                )}
              </ul>
            </div>
            <div className="bc bC rv">
              <div className="bi bg-[#fff1d2]">
                <Icon name="truck" className="size-7" />
              </div>
              <h3 className="!text-[28px]">We do the carrying</h3>
              <p className="mutL">From any room, on any floor. No dragging things to the lobby.</p>
            </div>
            <div className="bc bD rv" style={delay(0.1)}>
              <div className="bi bg-white">
                <Icon name="shield" className="size-7" />
              </div>
              <h3 className="!text-[28px]">Pay when it's gone</h3>
              <p>Once the job is finished and you're happy with it.</p>
            </div>
            <div className="bc bE rv" style={delay(0.2)}>
              <div className="bi bg-white">
                <Icon name="recycle" className="size-7" />
              </div>
              <h3 className="!text-[28px]">Not dumped somewhere else</h3>
              <div className="flow">
                <span>Reuse first</span>
                <span>Recycle next</span>
                <span>Dispose properly</span>
              </div>
              <p className="!text-[14.5px]">What's left goes for disposal through proper channels. It never gets dumped in the desert.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec sec-dark sheet">
        <div className="wrap">
          <SectionHead eyebrow="Space back" title="A swept, empty space when we leave." dark>
            <WhatsAppButton label="Get my price" />
          </SectionHead>
          <BeforeAfter
            before={{ ...photos.clutteredRoom, alt: "Illustrative photo of a cluttered bedroom before junk is collected in Dubai" }}
            after={{ ...photos.emptyRoom, alt: "Illustrative photo of a bright empty room after a clearance in Dubai" }}
          />
          <p className="mutD mt-[18px] text-center text-sm">Drag the handle. Illustrative photos.</p>
        </div>
      </section>

      <section className="sec sec-light sheet">
        <div className="wrap split">
          <div className="rv">
            <p className="eyebrow">How we work</p>
            <h2 className="h-lg mt-[18px]">
              You point. We carry. <span className="grad">It's gone.</span>
            </h2>
            <p className="lead mutL">{intro}</p>
            <CheckList items={benefits} />
            <div className="mt-[34px] flex flex-wrap gap-3">
              <WhatsAppButton label="Send a photo" className="btn-ink" />
              <Link href="/about" className="btn btn-line">
                How we work
                <ArrowIcon />
              </Link>
            </div>
          </div>
          <div className="pho rv" style={delay(0.12)}>
            <figure>
              <Image src={photos.moversStreet.src} alt="Two movers carrying a sofa out of a home for collection in Dubai" fill sizes="(min-width: 1100px) 290px, 50vw" className="object-cover" />
              <figcaption>Carried out</figcaption>
            </figure>
            <figure>
              <Image src={photos.moversDoorway.src} alt="Movers carrying a sofa through a doorway during a Dubai pickup" fill sizes="(min-width: 1100px) 290px, 50vw" className="object-cover" />
              <figcaption>Any floor</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="sec sec-dark2 sheet">
        <div className="wrap">
          <SectionHead
            eyebrow="Where we work"
            title={<>Towers, villas, warehouses. <span className="grad">Jebel Ali to Al Qusais.</span></>}
            dark
          >
            <Link href="/areas" className="btn btn-ghost">
              All {areas.length} areas
              <ArrowIcon />
            </Link>
          </SectionHead>
          <div className="rv">
            <AreaCheck areas={areaLinks} />
          </div>
          <AreaMap pins={mapPins} />
        </div>
      </section>

      <section className="sec sec-white sheet">
        <div className="wrap">
          <SectionHead eyebrow="Pricing" title={<>You pay for the <span className="grad">space you use.</span></>} lead="Your quote comes down to how much of the truck you fill, how heavy it is, and how easy it is to reach.">
            <Link href="/pricing" className="btn btn-line">
              How pricing works
              <ArrowIcon />
            </Link>
          </SectionHead>
          <div className="mt-14">
            <PriceTiers />
          </div>
        </div>
      </section>

      <Reviews />

      <FaqSection title={<>The things people <span className="grad">ask first.</span></>} faqs={homeFaqs}>
        <Link href="/faq" className="btn btn-line">
          Read all FAQs
          <ArrowIcon />
        </Link>
      </FaqSection>

      <CtaBand />
    </>
  );
}

function Tile({ className, photo, n, label }: { className: string; photo: { src: string; alt: string }; n: string; label: string }) {
  return (
    <div className={`mt ${className} rv`}>
      <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 1100px) 420px, 50vw" className="object-cover" />
      <div className="st">
        <div className="n">{n}</div>
        <p>{label}</p>
      </div>
    </div>
  );
}
