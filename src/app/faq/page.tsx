import type { Metadata } from "next";
import { FaqList, JsonLd, PageHero } from "@/components/Blocks";
import { CtaBand } from "@/components/Cta";
import { faqGroups } from "@/data/faqs";
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
        title="Straight answers before you book."
      />
      <section className="py-14 md:py-20">
        <div className="wrap space-y-12">
          {faqGroups.map((group) => (
            <div key={group.title} className="grid gap-6 lg:grid-cols-[1fr_2fr]">
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
