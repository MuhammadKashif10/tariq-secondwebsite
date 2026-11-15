import { posts, type Block, type Post } from "@/data/posts";

export function sortedPosts(): Post[] {
  return [...posts].sort((a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug));
}

export function uniquePostTags(): string[] {
  return [...new Set(posts.map((p) => p.tag))].sort();
}

export { formatPostDate } from "./date";

export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function headingAnchors(blocks: Block[]): { id: string; text: string }[] {
  const seen = new Map<string, number>();
  const toc: { id: string; text: string }[] = [];
  for (const block of blocks) {
    if (block.type !== "h2") continue;
    const base = slugifyHeading(block.text);
    const count = seen.get(base) ?? 0;
    const id = count > 0 ? `${base}-${count}` : base;
    seen.set(base, count + 1);
    toc.push({ id, text: block.text });
  }
  return toc;
}

export function assignHeadingIds(blocks: Block[]): Map<number, string> {
  const map = new Map<number, string>();
  const seen = new Map<string, number>();
  blocks.forEach((block, index) => {
    if (block.type !== "h2") return;
    const base = slugifyHeading(block.text);
    const count = seen.get(base) ?? 0;
    const id = count > 0 ? `${base}-${count}` : base;
    seen.set(base, count + 1);
    map.set(index, id);
  });
  return map;
}

export function postWordCount(post: Post): number {
  const textFrom = (s: string) => s.split(/\s+/).filter(Boolean).length;
  return post.blocks.reduce((total, block) => {
    if (block.type === "p" || block.type === "h2" || block.type === "h3") return total + textFrom(block.text);
    if (block.type === "quote") return total + textFrom(block.text) + (block.cite ? textFrom(block.cite) : 0);
    if (block.type === "callout") return total + textFrom(block.body) + (block.title ? textFrom(block.title) : 0);
    if (block.type === "ul" || block.type === "ol") return total + textFrom(block.items.join(" "));
    return total;
  }, 0);
}

export function postNeighbors(slug: string): { prev: Post | null; next: Post | null } {
  const sorted = sortedPosts();
  const index = sorted.findIndex((p) => p.slug === slug);
  if (index < 0) return { prev: null, next: null };
  return {
    prev: index > 0 ? sorted[index - 1]! : null,
    next: index < sorted.length - 1 ? sorted[index + 1]! : null,
  };
}

export function relatedPosts(current: Post, limit = 3): Post[] {
  const sorted = sortedPosts().filter((p) => p.slug !== current.slug);
  const sameTag = sorted.filter((p) => p.tag === current.tag);
  const other = sorted.filter((p) => p.tag !== current.tag);
  return [...sameTag, ...other].slice(0, limit);
}
