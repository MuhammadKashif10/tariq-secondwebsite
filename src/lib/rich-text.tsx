import Link from "next/link";
import { site } from "@/config/site";

const TOKEN = /\[([^\]]+)\]\(([^)\s]+)\)/g;

/** Turns [label](/path) into a link. Other text is left as written. */
export function RichText({ text }: { text: string }) {
  const nodes: React.ReactNode[] = [];
  let last = 0;
  for (const match of text.matchAll(TOKEN)) {
    const index = match.index ?? 0;
    if (index > last) nodes.push(text.slice(last, index));
    const label = match[1];
    const href = match[2];
    if (href.startsWith("/")) {
      nodes.push(
        <Link key={index} href={href} className="link">
          {label}
        </Link>,
      );
    } else if (href.startsWith("https://")) {
      nodes.push(
        <a key={index} href={href} className="link" rel="noopener noreferrer">
          {label}
        </a>,
      );
    } else {
      nodes.push(match[0]);
    }
    last = index + match[0].length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return <>{nodes}</>;
}

/** Plain text for structured data, with internal links expanded to absolute URLs. */
export function richPlain(text: string) {
  return text.replace(TOKEN, (_, label: string, href: string) => {
    if (href.startsWith("/")) return `${label} (${site.url}${href})`;
    if (href.startsWith("https://")) return `${label} (${href})`;
    return label;
  });
}
