import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd, PageHero, ServiceCard } from "@/components/Blocks";
import { PostBody } from "@/components/blog/PostBody";
import { PostCard } from "@/components/blog/PostCard";
import { PostShare } from "@/components/blog/PostShare";
import { PostQuoteMobile, PostSidebar, PostTocMobile } from "@/components/blog/PostSidebar";
import { CtaBand } from "@/components/Cta";
import { Icon } from "@/components/Icon";
import { site } from "@/config/site";
import { postPhotos } from "@/data/images";
import { getPost, posts } from "@/data/posts";
import { getService } from "@/data/services";
import {
  formatPostDate,
  headingAnchors,
  postNeighbors,
  relatedPosts,
} from "@/lib/post";
import { blogPostingSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  return pageMetadata({
    title: post.title,
    absolute: true,
    description: post.description,
    path: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.date,
    modifiedTime: post.updated ?? post.date,
    image: `/blog/${post.slug}/opengraph-image`,
  });
}

export default async function PostPage({ params }: Props) {
  const post = getPost((await params).slug);
  if (!post) notFound();

  const path = `/blog/${post.slug}`;
  const service = getService(post.relatedService);
  const published = formatPostDate(post.date);
  const updated = post.updated ? formatPostDate(post.updated) : null;
  const toc = headingAnchors(post.blocks);
  const { prev, next } = postNeighbors(post.slug);
  const more = relatedPosts(post, 3);

  const metaParts = [
    published,
    ...(updated ? [`Updated ${updated}`] : []),
    `${post.readMinutes} min read`,
    `By the ${site.name} team`,
  ];

  return (
    <>
      <JsonLd data={blogPostingSchema(post, path)} />

      <PageHero
        crumbs={[
          { name: "Guides", path: "/blog" },
          { name: post.title, path },
        ]}
        eyebrow={post.tag}
        title={post.title}
        lead={metaParts.join(" · ")}
        photo={postPhotos[post.slug]}
      />

      <div className="wrap py-12 md:py-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_17.5rem] lg:items-start">
          <article>
            <PostTocMobile items={toc} />
            <PostBody blocks={post.blocks} />
            <PostQuoteMobile />

            {post.sources && (
              <aside className="mt-12 max-w-[70ch] border-t-2 border-sand-3 pt-6 text-base">
                <h2 className="text-base font-bold tracking-normal">Sources</h2>
                <ul className="mt-2 space-y-1">
                  {post.sources.map((source) => (
                    <li key={source.url}>
                      <a href={source.url} target="_blank" rel="noopener noreferrer" className="link">
                        {source.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </aside>
            )}

            {service && (
              <div className="mt-10 max-w-[70ch]">
                <p className="eyebrow">Related service</p>
                <div className="mt-4">
                  <ServiceCard service={service} />
                </div>
              </div>
            )}

            <div className="max-w-[70ch]">
              <PostShare path={path} title={post.title} />
            </div>

            <nav aria-label="Guide pagination" className="mt-10 grid max-w-[70ch] gap-4 border-t-2 border-sand-3 pt-8 sm:grid-cols-2">
              {prev ? (
                <Link href={`/blog/${prev.slug}`} className="card group p-5 transition-shadow hover:shadow-lift">
                  <span className="text-sm font-bold text-muted">Previous</span>
                  <span className="mt-1 flex items-center gap-2 font-bold">
                    <Icon name="arrow" className="size-4 rotate-180 transition-transform group-hover:-translate-x-1" />
                    {prev.title}
                  </span>
                </Link>
              ) : (
                <span />
              )}
              {next && (
                <Link href={`/blog/${next.slug}`} className="card group p-5 text-right transition-shadow hover:shadow-lift sm:col-start-2">
                  <span className="text-sm font-bold text-muted">Next</span>
                  <span className="mt-1 flex items-center justify-end gap-2 font-bold">
                    {next.title}
                    <Icon name="arrow" className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              )}
            </nav>
          </article>
          <PostSidebar items={toc} />
        </div>
      </div>

      {more.length > 0 && (
        <section className="bg-white py-16 md:py-24">
          <div className="wrap">
            <h2 className="text-3xl md:text-4xl">More guides</h2>
            <ul className="mt-9 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {more.map((item) => (
                <li key={item.slug}>
                  <PostCard post={item} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <CtaBand />
    </>
  );
}
