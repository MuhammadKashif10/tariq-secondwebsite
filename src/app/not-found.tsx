import Link from "next/link";
import { WhatsAppButton } from "@/components/Cta";

export default function NotFound() {
  return (
    <section className="bg-ink text-sand">
      <div className="wrap py-24 md:py-32">
        <p className="eyebrow eyebrow-dark">404</p>
        <h1 className="mt-3 max-w-2xl text-5xl md:text-6xl">Looks like this page has already been hauled away.</h1>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/" className="btn btn-signal">
            Back to the homepage
          </Link>
          <WhatsAppButton />
        </div>
      </div>
      <div className="chevrons" />
    </section>
  );
}
