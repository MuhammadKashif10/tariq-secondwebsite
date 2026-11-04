import type { Metadata } from "next";
import { FaqList, JsonLd, PageHero } from "@/components/Blocks";
import { CtaBand } from "@/components/Cta";
import { faqGroups } from "@/data/faqs";
import { photos } from "@/data/images";
import { faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Junk Removal FAQs",
  description: "Answers on junk removal in Dubai: pricing, same-day pickup, what we can take, building permits and service lifts.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqSchema(faqGroups.flatMap((group) => group.faqs))} />
      <PageHero
        crumbs={[{ name: "FAQ", path: "/faq" }]}
        eyebrow="FAQ"
        photo={photos.burjKhalifa}
        title="Straight answers before you book."
      />
      <section className="py-16 md:py-24">
        <div className="wrap space-y-14">
          {faqGroups.map((group) => (
            <div key={group.title} className="grid gap-6 lg:grid-cols-[1fr_1.8fr]">
              <h2 className="text-3xl">{group.title}</h2>
              <FaqList faqs={group.faqs} />
            </div>
          ))}
        </div>
      </section>
      <CtaBand title="Still got a question?" text="Send it on WhatsApp, along with a photo if that helps." />
    </>
  );
}
