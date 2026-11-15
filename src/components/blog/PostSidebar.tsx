import Link from "next/link";
import { WhatsAppButton } from "@/components/Cta";

type TocItem = { id: string; text: string };

function QuoteCard({ className = "" }: { className?: string }) {
  return (
    <div className={`glass-ink ${className}`}>
      <p className="h-sm">Need a fixed price?</p>
      <p className="mt-2 text-[15px] leading-relaxed text-soft">Send a photo of what you want cleared and we will reply with a price for the load.</p>
      <WhatsAppButton label="Get my price" className="btn-amb mt-5 w-full" />
    </div>
  );
}

function TocList({ items }: { items: TocItem[] }) {
  return (
    <ol className="m-0 list-none space-y-1 p-0 text-[15px] font-bold">
      {items.map((item) => (
        <li key={item.id}>
          <Link href={`#${item.id}`} className="block rounded-2xl border-l-[3px] border-amb px-3 py-2 transition-colors hover:bg-paper">
            {item.text}
          </Link>
        </li>
      ))}
    </ol>
  );
}

export function PostSidebar({ items }: { items: TocItem[] }) {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-28 space-y-5">
        {items.length > 0 && (
          <nav aria-label="On this page" className="rounded-[32px] border border-line bg-white p-6">
            <p className="eyebrow mb-4">On this page</p>
            <TocList items={items} />
          </nav>
        )}
        <QuoteCard />
      </div>
    </aside>
  );
}

export function PostQuoteMobile() {
  return <QuoteCard className="mt-10 lg:hidden" />;
}

export function PostTocMobile({ items }: { items: TocItem[] }) {
  if (items.length === 0) return null;

  return (
    <details className="mb-8 rounded-[28px] border border-line bg-white lg:hidden">
      <summary className="cursor-pointer list-none px-6 py-4 font-extrabold [&::-webkit-details-marker]:hidden">On this page</summary>
      <div className="border-t border-line px-3 pt-3 pb-4">
        <TocList items={items} />
      </div>
    </details>
  );
}
