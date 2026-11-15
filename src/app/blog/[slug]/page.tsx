import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd, PageHero, SectionHead } from "@/components/Blocks";
import { PostBody } from "@/components/blog/PostBody";
import { PostCard, toSummary } from "@/components/blog/PostCard";
import { PostShare } from "@/components/blog/PostShare";
import { PostQuoteMobile, PostSidebar, PostTocMobile } from "@/components/blog/PostSidebar";
import { CtaBand } from "@/components/Cta";
import { Icon } from "@/components/Icon";
import { ServiceCard } from "@/components/ServiceCard";
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
import { toCard } from "@/lib/service-card";
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

      <section className="sec sec-light sheet">
        <div className="wrap grid gap-12 lg:grid-cols-[minmax(0,1fr)_18.5rem] lg:items-start">
          <article>
            <PostTocMobile items={toc} />
            <PostBody blocks={post.blocks} />
            <PostQuoteMobile />

            {post.sources && (
              <aside className="mt-12 max-w-[70ch] rounded-[28px] border border-line bg-white p-6 text-base">
                <h2 className="h-sm text-xl">Sources</h2>
                <ul className="mt-3 list-none space-y-2 p-0">
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
              <div className="mt-12 max-w-[380px]">
                <p className="eyebrow">Related service</p>
                <div className="mt-4">
                  <ServiceCard service={toCard(service)} />
                </div>
              </div>
            )}

            <div className="max-w-[70ch]">
              <PostShare path={path} title={post.title} />
            </div>

            <nav aria-label="Guide pagination" className="mt-10 grid max-w-[70ch] gap-4 border-t border-line pt-8 sm:grid-cols-2">
              {prev ? (
                <Link href={`/blog/${prev.slug}`} className="cd group !p-6">
                  <span className="mutL text-sm font-bold">Previous</span>
                  <span className="mt-1 flex items-center gap-2 font-extrabold">
                    <Icon name="arrow" className="size-4 shrink-0 rotate-180 transition-transform group-hover:-translate-x-1" />
                    {prev.title}
                  </span>
                </Link>
              ) : (
                <span />
              )}
              {next && (
                <Link href={`/blog/${next.slug}`} className="cd group !p-6 text-right sm:col-start-2">
                  <span className="mutL text-sm font-bold">Next</span>
                  <span className="mt-1 flex items-center justify-end gap-2 font-extrabold">
                    {next.title}
                    <Icon name="arrow" className="size-4 shrink-0 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              )}
            </nav>
          </article>
          <PostSidebar items={toc} />
        </div>
      </section>

      {more.length > 0 && (
        <section className="sec sec-white sheet">
          <div className="wrap">
            <SectionHead eyebrow="Keep reading" title="More guides" />
            <ul className="cards3 mt-12">
              {more.map((item) => (
                <li key={item.slug}>
                  <PostCard post={toSummary(item)} />
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
