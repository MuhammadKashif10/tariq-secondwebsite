import Link from "next/link";
import { WhatsAppButton } from "@/components/Cta";
import { Icon } from "@/components/Icon";

export default function NotFound() {
  return (
    <section className="phero min-h-[80vh]">
      <div className="wrap rv">
        <p className="eyebrow">404</p>
        <h1 className="h-xl mt-4 max-w-[14em]">
          Looks like this page has already been <span className="grad">hauled away.</span>
        </h1>
        <div className="mt-[34px] flex flex-wrap gap-3">
          <Link href="/" className="btn btn-amb">
            Back to the homepage
            <Icon name="arrow" className="ar size-5" />
          </Link>
          <WhatsAppButton className="btn-ghost" />
        </div>
      </div>
    </section>
  );
}
