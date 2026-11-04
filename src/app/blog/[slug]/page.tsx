import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd, PageHero } from "@/components/Blocks";
import { CtaBand } from "@/components/Cta";
import { site } from "@/config/site";
import { getPost, posts } from "@/data/posts";
import { getService } from "@/data/services";
import { articleSchema } from "@/lib/schema";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  return {
    title: { absolute: post.title },
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { type: "article", title: post.title, description: post.description, url: `/blog/${post.slug}`, publishedTime: post.date },
  };
}

export default async function PostPage({ params }: Props) {
  const post = getPost((await params).slug);
  if (!post) notFound();

  const path = `/blog/${post.slug}`;
  const service = getService(post.relatedService);
  const date = new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

  return (
    <>
      <JsonLd data={articleSchema(post.title, post.description, path, post.date)} />
      <PageHero
        crumbs={[
          { name: "Guides", path: "/blog" },
          { name: post.tag, path },
        ]}
        eyebrow={post.tag}
        title={post.title}
        lead={`${date} · ${post.readMinutes} min read · By the ${site.name} team`}
      />
      <article className="wrap max-w-3xl py-12 text-lg leading-relaxed md:py-16">
        {post.blocks.map((block, index) => {
          if (block.type === "h2") return <h2 key={index} className="mt-10 mb-3 text-3xl">{block.text}</h2>;
          if (block.type === "ul") {
            return (
              <ul key={index} className="my-4 list-disc space-y-2 pl-6 marker:text-signal-deep">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );
          }
          return <p key={index} className="my-4">{block.text}</p>;
        })}
        {post.sources && (
          <aside className="mt-10 border-t-2 border-sand-3 pt-5 text-base">
            <h2 className="font-sans text-base font-bold tracking-normal">Sources</h2>
            <ul className="mt-2 space-y-1">
              {post.sources.map((source) => (
                <li key={source.url}>
                  <a href={source.url} target="_blank" rel="noopener" className="link">
                    {source.label}
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        )}
        {service && (
          <p className="mt-10 rounded-xl bg-sand-2 p-5">
            Related service:{" "}
            <Link href={`/services/${service.slug}`} className="link">
              {service.name} in Dubai
            </Link>
          </p>
        )}
      </article>
      <CtaBand />
    </>
  );
}
