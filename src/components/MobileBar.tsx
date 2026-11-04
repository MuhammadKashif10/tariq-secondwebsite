import { defaultMessage, telUrl, whatsappUrl } from "@/lib/contact";
import { Icon, WhatsAppIcon } from "./Icon";

/** Always-visible contact actions on phones and tablets. */
export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-[1fr_1.7fr] gap-2 border-t border-white/10 bg-ink/95 p-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] backdrop-blur-xl lg:hidden">
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
