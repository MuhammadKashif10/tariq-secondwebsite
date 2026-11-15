import type { Metadata } from "next";
import { JsonLd, PageHero } from "@/components/Blocks";
import { BlogListing } from "@/components/blog/BlogListing";
import { toSummary } from "@/components/blog/PostCard";
import { CtaBand } from "@/components/Cta";
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
        title="Useful things to know about clearing out in Dubai."
        lead="Honest advice, including when you don't need to pay anyone at all."
      />

      <section className="sec sec-light sheet">
        <div className="wrap">
          <BlogListing posts={ordered.map(toSummary)} tags={tags} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
