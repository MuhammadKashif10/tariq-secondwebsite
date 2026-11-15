import type { Block } from "@/data/posts";
import { assignHeadingIds } from "@/lib/post";

export function PostBody({ blocks }: { blocks: Block[] }) {
  const headingIds = assignHeadingIds(blocks);

  return (
    <div className="prose-body article-body">
      {blocks.map((block, index) => {
        if (block.type === "h2") {
          return (
            <h2 key={index} id={headingIds.get(index)}>
              {block.text}
            </h2>
          );
        }
        if (block.type === "h3") {
          return <h3 key={index}>{block.text}</h3>;
        }
        if (block.type === "ul") {
          return (
            <ul key={index}>
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        }
        if (block.type === "ol") {
          return (
            <ol key={index}>
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          );
        }
        if (block.type === "callout") {
          return (
            <aside key={index} className="callout">
              {block.title && <b>{block.title}</b>}
              <p>{block.body}</p>
            </aside>
          );
        }
        if (block.type === "quote") {
          return (
            <blockquote key={index}>
              <p className="m-0">{block.text}</p>
              {block.cite && <footer>— {block.cite}</footer>}
            </blockquote>
          );
        }
        return <p key={index}>{block.text}</p>;
      })}
    </div>
  );
}
