import { postPhotos } from "@/data/images";
import { getPost, posts } from "@/data/posts";
import { ogCard, ogContentType, ogSize } from "@/lib/og";

export const alt = "Dubai junk removal guide";
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const post = getPost((await params).slug) ?? posts[0];
  return ogCard({ eyebrow: `Guide · ${post.tag}`, title: post.title, photo: postPhotos[post.slug].src });
}
