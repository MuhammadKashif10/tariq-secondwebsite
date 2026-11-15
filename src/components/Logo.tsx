export function Logo() {
  return (
    <span className="flex items-center gap-[11px]">
      <span className="grid size-[42px] shrink-0 place-items-center rounded-[13px] bg-amb">
        <svg viewBox="0 0 32 24" className="w-[26px]" aria-hidden="true">
          <path d="M1 3a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2v15H1z" fill="#0b1626" />
          <path d="M22 7h4.2a2 2 0 0 1 1.5.7l3.3 3.8V18h-9z" fill="#0b1626" fillOpacity=".55" />
          <circle cx="8" cy="19" r="3.4" fill="#ffb93b" stroke="#0b1626" strokeWidth="2" />
          <circle cx="25" cy="19" r="3.4" fill="#ffb93b" stroke="#0b1626" strokeWidth="2" />
        </svg>
      </span>
      <span className="text-[17px] leading-none font-extrabold tracking-[-0.03em] whitespace-nowrap text-white sm:text-[19px]">
        Dubai Junk Removal <span className="hidden font-medium text-[#a9b8cb] min-[420px]:inline">Services</span>
      </span>
    </span>
  );
}
