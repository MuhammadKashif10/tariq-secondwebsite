import Link from "next/link";
import { WhatsAppButton } from "@/components/Cta";

export function PostSidebar({ items }: { items: { id: string; text: string }[] }) {
  if (items.length === 0) return null;

  return (
  <aside className="hidden lg:block">
    <div className="sticky top-28 space-y-6">
      <nav aria-label="On this page" className="card p-6">
        <p className="eyebrow">On this page</p>
        <ol className="mt-4 space-y-2 text-base font-semibold">
          {items.map((item) => (
            <li key={item.id}>
              <Link href={`#${item.id}`} className="link text-ink no-underline hover:underline">
                {item.text}
              </Link>
            </li>
          ))}
        </ol>
      </nav>
      <div className="card p-6">
        <p className="text-lg font-bold">Need a fixed price?</p>
        <p className="mt-2 text-sm leading-relaxed text-muted">Send a photo of what you want cleared and we will reply with a price for the load.</p>
        <WhatsAppButton label="Get my price" className="mt-5 w-full" />
      </div>
    </div>
  </aside>
  );
}

export function PostQuoteMobile() {
  return (
    <div className="card mt-10 p-6 lg:hidden">
      <p className="text-lg font-bold">Need a fixed price?</p>
      <p className="mt-2 text-sm leading-relaxed text-muted">Send a photo of what you want cleared and we will reply with a price for the load.</p>
      <WhatsAppButton label="Get my price" className="mt-5 w-full" />
    </div>
  );
}

export function PostTocMobile({ items }: { items: { id: string; text: string }[] }) {
  if (items.length === 0) return null;

  return (
    <details className="card mb-4 lg:hidden">
      <summary className="cursor-pointer list-none px-6 py-4 font-bold [&::-webkit-details-marker]:hidden">
        On this page
      </summary>
      <ol className="space-y-2 border-t border-sand-2 px-6 pt-4 pb-5 text-base font-semibold">
        {items.map((item) => (
          <li key={item.id}>
            <Link href={`#${item.id}`} className="link text-ink no-underline hover:underline">
              {item.text}
            </Link>
          </li>
        ))}
      </ol>
    </details>
  );
}
