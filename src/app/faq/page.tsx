import type { Metadata } from "next";
import { FaqSection, JsonLd, PageHero } from "@/components/Blocks";
import { CtaBand, WhatsAppButton } from "@/components/Cta";
import { faqGroups } from "@/data/faqs";
import { photos } from "@/data/images";
import { faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Junk Removal FAQs",
  description: "Answers on junk removal in Dubai: pricing, same-day pickup, what we can take, building permits and service lifts.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqSchema(faqGroups.flatMap((group) => group.faqs))} />
      <PageHero crumbs={[{ name: "FAQ", path: "/faq" }]} eyebrow="FAQ" photo={photos.burjKhalifa} title="Straight answers before you book.">
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
