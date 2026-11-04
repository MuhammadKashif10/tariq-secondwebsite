import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/Blocks";
import { CtaBand } from "@/components/Cta";
import { Icon } from "@/components/Icon";
import { photos, postPhotos } from "@/data/images";
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
        photo={photos.nightTowers}
        title="Useful things to know about clearing out in Dubai."
        lead="Honest advice, including when you don't need to pay anyone at all."
      />
      <section className="py-16 md:py-24">
        <ul className="wrap grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="card group flex h-full flex-col overflow-hidden transition-shadow hover:shadow-lift">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={postPhotos[post.slug].src} alt={postPhotos[post.slug].alt} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="zoom object-cover" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                <p className="eyebrow">{post.tag}</p>
                <h2 className="mt-3 text-xl">{post.title}</h2>
                <p className="mt-3 flex-1 text-muted">{post.description}</p>
                <p className="mt-4 flex items-center justify-between text-sm font-bold">
                  {post.readMinutes} min read
                  <Icon name="arrow" className="size-5 transition-transform group-hover:translate-x-1" />
                </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <CtaBand />
    </>
  );
}
