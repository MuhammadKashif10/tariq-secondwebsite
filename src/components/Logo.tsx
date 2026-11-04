export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-ink shadow-soft ring-1 ring-white/10">
        <svg viewBox="0 0 32 24" className="w-7" aria-hidden="true">
          <path d="M1 3a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2v15H1z" fill="#f5b13d" />
          <path d="M22 7h4.2a2 2 0 0 1 1.5.7l3.3 3.8V18h-9z" fill="#fff" />
          <circle cx="8" cy="19" r="3.6" fill="#fff" stroke="#0a1a2f" strokeWidth="1.6" />
          <circle cx="25" cy="19" r="3.6" fill="#fff" stroke="#0a1a2f" strokeWidth="1.6" />
        </svg>
      </span>
      <span className={`leading-[1.1] ${dark ? "text-white" : "text-ink"}`}>
        <span className="block text-[1.05rem] font-extrabold tracking-tight">Dubai Junk Removal</span>
        <span className={`block text-[0.68rem] font-semibold tracking-[0.2em] uppercase ${dark ? "text-mist" : "text-muted"}`}>Services</span>
      </span>
    </span>
  );
}
