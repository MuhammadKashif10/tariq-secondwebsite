import type { Metadata } from "next";
import { FaqSection, JsonLd, PageHero } from "@/components/Blocks";
import { CtaBand, WhatsAppButton } from "@/components/Cta";
import { faqGroups } from "@/data/faqs";
import { photos } from "@/data/images";
import { faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Junk Removal Questions in Dubai",
  description:
    "Junk removal questions in Dubai, answered: fixed pricing, same-day pickup, items we cannot take, and how service lifts and building permits work.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqSchema(faqGroups.flatMap((group) => group.faqs))} />
      <PageHero
        crumbs={[{ name: "FAQ", path: "/faq" }]}
        eyebrow="FAQ"
        photo={photos.burjKhalifa}
        title="Junk removal questions in Dubai"
        lead="Straight answers before you book, on pricing, timing, what we take and building access."
      >
        <WhatsAppButton label="Ask on WhatsApp" />
      </PageHero>
      {faqGroups.map((group, index) => (
        <FaqSection
          key={group.title}
          eyebrow={`${String(index + 1).padStart(2, "0")} / ${String(faqGroups.length).padStart(2, "0")}`}
          title={group.title}
          faqs={group.faqs}
          className={`sec ${index % 2 ? "sec-white" : "sec-light"} sheet`}
        />
      ))}
      <CtaBand title="Still got a question?" text="Send it on WhatsApp, along with a photo if that helps." />
    </>
  );
}
