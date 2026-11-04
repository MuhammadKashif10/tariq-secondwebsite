import Image from "next/image";
import Link from "next/link";
import { WhatsAppButton } from "@/components/Cta";
import { photos } from "@/data/images";

export default function NotFound() {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-white">
      <Image src={photos.dumpedSofa.src} alt="" fill sizes="100vw" className="-z-20 object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
      <div className="wrap py-24 md:py-36">
        <p className="eyebrow eyebrow-dark">404</p>
        <h1 className="mt-3 max-w-2xl text-5xl md:text-6xl">Looks like this page has already been hauled away.</h1>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/" className="btn btn-signal">
            Back to the homepage
          </Link>
          <WhatsAppButton />
        </div>
      </div>
    </section>
  );
}
