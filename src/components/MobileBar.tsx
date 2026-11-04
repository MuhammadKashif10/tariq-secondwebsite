import { defaultMessage, telUrl, whatsappUrl } from "@/lib/contact";
import { Icon, WhatsAppIcon } from "./Icon";

/** Always-visible contact actions on phones and tablets. */
export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-[1fr_1.6fr] gap-2 border-t border-ink-3 bg-ink p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] lg:hidden">
      <a href={telUrl} className="btn btn-ghost-dark !min-h-12 !px-2">
        <Icon name="phone" className="size-5" />
        Call
      </a>
      <a href={whatsappUrl(defaultMessage)} target="_blank" rel="noopener" className="btn btn-wa !min-h-12 !px-2">
        <WhatsAppIcon />
        WhatsApp a photo
      </a>
    </div>
  );
}
