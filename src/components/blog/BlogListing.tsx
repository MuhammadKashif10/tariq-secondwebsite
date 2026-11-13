"use client";

import { useState } from "react";
import type { Post } from "@/data/posts";
import { PostCard } from "./PostCard";

type Props = {
  posts: Post[];
  tags: string[];
};

export function BlogListing({ posts, tags }: Props) {
  const [active, setActive] = useState("All");
  const allGrid = active === "All";
  const featured = posts[0]!;
  const filtered = active === "All" ? posts : posts.filter((p) => p.tag === active);
  const gridPosts = allGrid ? filtered.slice(1) : filtered;

  return (
    <div className="wrap py-16 md:py-24">
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter guides by topic">
        {["All", ...tags].map((tag) => (
          <button
            key={tag}
            type="button"
            className={`btn min-h-10 px-5 py-2 text-sm ${active === tag ? "btn-signal" : "btn-ghost"}`}
            aria-pressed={active === tag}
            onClick={() => setActive(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="mt-10 space-y-10">
        {allGrid && featured && (
          <article data-post-tag={featured.tag} data-post-featured="true">
            <PostCard post={featured} featured />
          </article>
        )}

        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {gridPosts.map((post) => (
            <li key={post.slug} data-post-tag={post.tag}>
              <PostCard post={post} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
