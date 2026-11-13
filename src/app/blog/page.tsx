import type { Metadata } from "next";
import { JsonLd, PageHero, SectionHead } from "@/components/Blocks";
import { BlogListing } from "@/components/blog/BlogListing";
import { CtaBand } from "@/components/Cta";
import { photos } from "@/data/images";
import { blogPageSchema, itemListSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { sortedPosts, uniquePostTags } from "@/lib/post";

export const metadata: Metadata = pageMetadata({
  title: "Dubai Junk Removal Guides",
  description: "Practical guides to clearing junk in Dubai: free municipal pickup, move-out checklists, mattress disposal, e-waste and service lift rules.",
  path: "/blog",
});

export default function BlogPage() {
  const ordered = sortedPosts();
  const tags = uniquePostTags();

  return (
    <>
      <JsonLd data={blogPageSchema()} />
      <JsonLd
        data={itemListSchema(
          "Junk removal guides",
          ordered.map((post) => ({ name: post.title, path: `/blog/${post.slug}` })),
        )}
      />

      <PageHero
        crumbs={[{ name: "Guides", path: "/blog" }]}
        eyebrow="Guides"
        photo={photos.nightTowers}
        title="Useful things to know about clearing out in Dubai."
        lead="Honest advice, including when you don't need to pay anyone at all."
      />

      <section className="border-b border-sand-2 bg-white py-12 md:py-16">
        <div className="wrap">
          <SectionHead eyebrow="Latest" title="Guides and how-tos" />
        </div>
      </section>

      <BlogListing posts={ordered} tags={tags} />

      <CtaBand />
    </>
  );
}
