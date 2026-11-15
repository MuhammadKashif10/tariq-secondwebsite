"use client";

import { useState } from "react";
import { PostCard, type PostSummary } from "./PostCard";

type Props = {
  posts: PostSummary[];
  tags: string[];
};

export function BlogListing({ posts, tags }: Props) {
  const [active, setActive] = useState("All");
  const allGrid = active === "All";
  const featured = posts[0];
  const filtered = allGrid ? posts : posts.filter((p) => p.tag === active);
  const gridPosts = allGrid ? filtered.slice(1) : filtered;

  return (
    <>
      <div className="chips" role="group" aria-label="Filter guides by topic">
        {["All", ...tags].map((tag) => (
          <button key={tag} type="button" className="chip" aria-pressed={active === tag} onClick={() => setActive(tag)}>
            {tag}
          </button>
        ))}
      </div>

      <div className="mt-9 space-y-6">
        {allGrid && featured && (
          <article data-post-tag={featured.tag} data-post-featured="true">
            <PostCard post={featured} featured />
          </article>
        )}

        <ul className="cards3">
          {gridPosts.map((post) => (
            <li key={post.slug} data-post-tag={post.tag}>
              <PostCard post={post} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
