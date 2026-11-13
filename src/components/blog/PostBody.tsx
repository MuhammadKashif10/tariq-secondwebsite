import type { Block } from "@/data/posts";
import { assignHeadingIds } from "@/lib/post";

export function PostBody({ blocks }: { blocks: Block[] }) {
  const headingIds = assignHeadingIds(blocks);

  return (
    <div className="article-body max-w-[70ch] text-lg leading-relaxed text-ink">
      {blocks.map((block, index) => {
        if (block.type === "h2") {
          const id = headingIds.get(index);
          return (
            <h2 key={index} id={id} className="mt-12 text-2xl first:mt-0 md:text-3xl">
              {block.text}
            </h2>
          );
        }
        if (block.type === "h3") {
          return (
            <h3 key={index} className="mt-8 text-xl md:text-2xl">
              {block.text}
            </h3>
          );
        }
        if (block.type === "ul") {
          return (
            <ul key={index} className="my-5 list-disc space-y-2 pl-6 marker:text-signal-deep">
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        }
        if (block.type === "ol") {
          return (
            <ol key={index} className="my-5 list-decimal space-y-2 pl-6 marker:font-bold marker:text-signal-deep">
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          );
        }
        if (block.type === "callout") {
          return (
            <aside key={index} className="my-8 rounded-3xl border border-signal/35 bg-signal/10 p-6 md:p-7">
              {block.title && <p className="text-sm font-bold tracking-wide text-signal-deep uppercase">{block.title}</p>}
              <p className={block.title ? "mt-2 text-muted" : "text-muted"}>{block.body}</p>
            </aside>
          );
        }
        if (block.type === "quote") {
          return (
            <blockquote key={index} className="my-8 border-l-4 border-signal pl-5 text-xl font-medium text-ink-3 italic">
              <p>{block.text}</p>
              {block.cite && <footer className="mt-3 text-base font-semibold text-muted not-italic">— {block.cite}</footer>}
            </blockquote>
          );
        }
        return (
          <p key={index} className="my-4">
            {block.text}
          </p>
        );
      })}
    </div>
  );
}
