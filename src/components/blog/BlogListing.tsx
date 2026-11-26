import { Fragment } from "react";
import { PostCard, type PostSummary } from "./PostCard";

type Props = {
  posts: PostSummary[];
  tags: string[];
};

function tagId(tag: string) {
  return `guide-${tag.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`;
}

function cssAttr(value: string) {
  return value.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

/** Tag filter in CSS, so every guide link is in the first HTML response. */
export function BlogListing({ posts, tags }: Props) {
  const featured = posts[0];
  const rules = [
    ".blog-filters:has(#guide-all:checked) .guide-grid > li[data-featured]{display:none}",
    ".blog-filters:not(:has(#guide-all:checked)) .guide-featured{display:none}",
    ...tags.map((tag) => `.blog-filters:has(#${tagId(tag)}:checked) .guide-grid > li:not([data-tag="${cssAttr(tag)}"]){display:none}`),
  ].join("");

  return (
    <div className="blog-filters">
      <style>{rules}</style>
      <div className="chips" role="radiogroup" aria-label="Filter guides by topic">
        <input className="sr-only" type="radio" name="guide-tag" id="guide-all" defaultChecked />
        <label className="chip" htmlFor="guide-all">
          All
        </label>
        {tags.map((tag) => (
          <Fragment key={tag}>
            <input className="sr-only" type="radio" name="guide-tag" id={tagId(tag)} />
            <label className="chip" htmlFor={tagId(tag)}>
              {tag}
            </label>
          </Fragment>
        ))}
      </div>

      <div className="mt-9 space-y-6">
        {featured && (
          <article className="guide-featured" data-tag={featured.tag}>
            <PostCard post={featured} featured />
          </article>
        )}
        <ul className="cards3 guide-grid">
          {posts.map((post, index) => (
            <li key={post.slug} data-tag={post.tag} data-featured={index === 0 ? "true" : undefined}>
              <PostCard post={post} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
