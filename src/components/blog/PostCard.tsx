import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { postPhotos } from "@/data/images";
import type { Post } from "@/data/posts";
import { formatPostDate } from "@/lib/date";

/** The fields a card shows. Kept slim so client listings don't ship the article bodies. */
export type PostSummary = Pick<Post, "slug" | "title" | "description" | "tag" | "date" | "readMinutes">;

export const toSummary = (post: Post): PostSummary => ({
  slug: post.slug,
  title: post.title,
  description: post.description,
  tag: post.tag,
  date: post.date,
  readMinutes: post.readMinutes,
});

export function PostCard({ post, featured = false }: { post: PostSummary; featured?: boolean }) {
  const photo = postPhotos[post.slug];
  const date = formatPostDate(post.date);

  if (featured) {
    return (
      <Link href={`/blog/${post.slug}`} className="feat group rv">
        <div className="im">
          <Image src={photo.src} alt={photo.alt} fill priority sizes="(min-width: 1100px) 600px, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
        </div>
        <div className="tx">
          <span className="tag !bg-[#fff1d2]">Latest guide · {post.tag}</span>
          <h2 className="h-md">{post.title}</h2>
          <p className="mutL m-0 line-clamp-3 text-[17px]">{post.description}</p>
          <div className="mt-2 flex items-center gap-4">
            <span className="arrow-out">
              <Icon name="arrow" className="size-5" />
            </span>
            <span className="mutL text-sm font-bold">
              <time dateTime={post.date}>{date}</time> · {post.readMinutes} min read
            </span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/blog/${post.slug}`} className="cd blogc group">
      <div className="im">
        <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 1100px) 380px, (min-width: 700px) 50vw, 100vw" className="object-cover" />
      </div>
      <div className="bd2">
        <span className="tag">{post.tag}</span>
        <h3>{post.title}</h3>
        <p className="!m-0 line-clamp-2">{post.description}</p>
        <span className="mt-auto flex items-center gap-2 pt-2 text-sm font-extrabold">
          <time dateTime={post.date} className="mutL">
            {date}
          </time>
          <span className="mutL">· {post.readMinutes} min read</span>
          <Icon name="arrow" className="ml-auto size-5 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
