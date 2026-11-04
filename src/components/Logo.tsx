export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <svg viewBox="0 0 48 32" className="h-8 w-12 shrink-0" aria-hidden="true">
        <path d="M1 3h28v21H1z" fill="#f4581c" />
        <path d="M6 3 1 10v6L12 3zM18 3 6 24h6L24 3z" fill={dark ? "#10211f" : "#f5efe4"} opacity=".9" />
        <path d="M31 9h8l8 8v7H31z" fill={dark ? "#f5efe4" : "#10211f"} />
        <circle cx="11" cy="26" r="5" fill={dark ? "#f5efe4" : "#10211f"} />
        <circle cx="38" cy="26" r="5" fill={dark ? "#f5efe4" : "#10211f"} />
      </svg>
      <span className={`font-display text-[1.05rem] leading-[1.02] font-extrabold tracking-tight ${dark ? "text-sand" : "text-ink"}`}>
        Dubai Junk
        <br />
        Removal Services
      </span>
    </span>
  );
}
