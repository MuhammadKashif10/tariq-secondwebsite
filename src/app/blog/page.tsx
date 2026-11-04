import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/Blocks";
import { CtaBand } from "@/components/Cta";
import { Icon } from "@/components/Icon";
import { posts } from "@/data/posts";

export const metadata: Metadata = {
  title: "Dubai Junk Removal Guides",
  description: "Practical guides to clearing junk in Dubai: free municipal pickup, move-out checklists, mattress disposal, e-waste and service lift rules.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Guides", path: "/blog" }]}
        eyebrow="Guides"
        title="Useful things to know about clearing out in Dubai."
        lead="Honest advice, including when you don't need to pay anyone at all."
      />
      <section className="py-14 md:py-20">
        <ul className="wrap grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group flex h-full flex-col rounded-xl border-2 border-ink bg-paper p-6 transition-transform hover:-translate-y-1 hover:shadow-[5px_5px_0_var(--color-ink)]">
                <p className="eyebrow">{post.tag}</p>
                <h2 className="mt-3 text-2xl">{post.title}</h2>
                <p className="mt-3 flex-1 text-muted">{post.description}</p>
                <p className="mt-4 flex items-center justify-between text-sm font-bold">
                  {post.readMinutes} min read
                  <Icon name="arrow" className="size-5 transition-transform group-hover:translate-x-1" />
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <CtaBand />
    </>
  );
}
