import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { postPhotos } from "@/data/images";
import type { Post } from "@/data/posts";
import { formatPostDate } from "@/lib/post";

export function PostCard({ post, featured = false }: { post: Post; featured?: boolean }) {
  const photo = postPhotos[post.slug];
  const date = formatPostDate(post.date);

  if (featured) {
    return (
      <Link
        href={`/blog/${post.slug}`}
        className="card group grid overflow-hidden transition-shadow hover:shadow-lift md:grid-cols-2"
      >
        <div className="relative aspect-[16/10] min-h-[12rem] md:aspect-auto md:min-h-[18rem]">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="zoom object-cover"
          />
        </div>
        <div className="flex flex-col justify-center p-6 md:p-10">
          <p className="eyebrow">{post.tag}</p>
          <h2 className="mt-3 text-2xl md:text-3xl">{post.title}</h2>
          <p className="mt-3 line-clamp-2 text-muted">{post.description}</p>
          <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-bold">
            <time dateTime={post.date}>{date}</time>
            <span className="text-mist" aria-hidden="true">
              ·
            </span>
            <span>{post.readMinutes} min read</span>
            <Icon name="arrow" className="ml-auto size-5 transition-transform group-hover:translate-x-1" />
          </p>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/blog/${post.slug}`} className="card group flex h-full flex-col overflow-hidden transition-shadow hover:shadow-lift">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="zoom object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="eyebrow">{post.tag}</p>
        <h2 className="mt-3 text-xl">{post.title}</h2>
        <p className="mt-3 line-clamp-2 flex-1 text-muted">{post.description}</p>
        <p className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-bold text-muted">
          <time dateTime={post.date}>{date}</time>
          <span aria-hidden="true">·</span>
          <span>{post.readMinutes} min read</span>
          <Icon name="arrow" className="ml-auto size-5 text-ink transition-transform group-hover:translate-x-1" />
        </p>
      </div>
    </Link>
  );
}
