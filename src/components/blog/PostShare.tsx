import { site } from "@/config/site";

export function PostShare({ path, title }: { path: string; title: string }) {
  const url = `${site.url}${path}`;
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const links = [
    { label: "Share on WhatsApp", href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}` },
    { label: "Share on Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}` },
    { label: "Share on X", href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}` },
    { label: "Share on LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}` },
  ];

  return (
    <section aria-label="Share this guide" className="mt-10 border-t-2 border-sand-3 pt-8">
      <h2 className="text-lg font-bold">Share this guide</h2>
      <ul className="mt-4 flex flex-wrap gap-3">
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href} target="_blank" rel="noopener noreferrer" className="btn btn-ghost min-h-10 px-4 py-2 text-sm">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
