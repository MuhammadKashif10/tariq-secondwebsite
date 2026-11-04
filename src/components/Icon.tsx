import type { ReactNode } from "react";

const paths = {
  truck: (
    <>
      <path d="M2 6h12v11H2z" />
      <path d="M14 10h4l4 4v3h-8" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="17.5" cy="18" r="2" />
    </>
  ),
  wardrobe: (
    <>
      <rect x="4" y="2.5" width="16" height="17" rx="1" />
      <path d="M12 2.5v17M9.5 10v2M14.5 10v2M6.5 19.5v2M17.5 19.5v2" />
    </>
  ),
  sofa: (
    <>
      <path d="M5 11V8a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3" />
      <path d="M2.5 13a2.5 2.5 0 0 1 5 0v2h9v-2a2.5 2.5 0 0 1 5 0v5h-19z" />
      <path d="M5 18v2M19 18v2" />
    </>
  ),
  mattress: (
    <>
      <rect x="2.5" y="8" width="19" height="9" rx="2.5" />
      <path d="M2.5 12.5h19M7 8v9M12 8v9M17 8v9" />
    </>
  ),
  fridge: (
    <>
      <rect x="5" y="2.5" width="14" height="19" rx="2" />
      <path d="M5 10h14M8.5 5.5v2M8.5 13v3.5" />
    </>
  ),
  villa: (
    <>
      <path d="M3 21V10l9-6 9 6v11z" />
      <path d="M9.5 21v-6h5v6M3 21h18" />
    </>
  ),
  key: (
    <>
      <circle cx="8" cy="15.5" r="5" />
      <path d="m11.5 12 8.5-8.5M16.5 7l3 3M13.5 10l2 2" />
    </>
  ),
  office: (
    <>
      <path d="M2.5 9h19M4.5 9v11M19.5 9v11" />
      <rect x="8" y="3" width="8" height="6" rx="1" />
      <path d="M12 9v4M9 20l3-3.5 3 3.5" />
    </>
  ),
  palm: (
    <>
      <path d="M12 21c0-4 .3-7 1.5-10.5" />
      <path d="M13.5 10.5C11.5 7 7.5 6.5 4 9c3.5-.5 6.5.2 9.5 1.5Z" />
      <path d="M13.5 10.5C15 7 18.5 5.5 21.5 7.5c-3-.3-5.5.8-8 3Z" />
      <path d="M13.5 10.5C12.5 7 13.5 4 16 2.5c-.7 3-1 5.5-2.5 8Z" />
      <path d="M8 21h9" />
    </>
  ),
  bricks: (
    <>
      <path d="M3 5h18v15H3zM3 10h18M3 15h18M9 5v5M15 5v5M6 10v5M12 10v5M18 10v5M9 15v5M15 15v5" />
    </>
  ),
  chip: (
    <>
      <rect x="6.5" y="6.5" width="11" height="11" rx="1.5" />
      <path d="M9.5 3v3.5M14.5 3v3.5M9.5 17.5V21M14.5 17.5V21M3 9.5h3.5M3 14.5h3.5M17.5 9.5H21M17.5 14.5H21" />
    </>
  ),
  bolt: <path d="M13 2 4.5 13.5H11L10 22l9-12h-6.5z" />,
  camera: (
    <>
      <path d="M3 8h4l2-3h6l2 3h4v12H3z" />
      <circle cx="12" cy="13.5" r="3.5" />
    </>
  ),
  tag: (
    <>
      <path d="M3 3h8.5L21 12.5 12.5 21 3 11.5z" />
      <circle cx="8" cy="8" r="1.5" />
    </>
  ),
  check: <path d="m4 12.5 5 5L20 6.5" />,
  arrow: <path d="M4 12h15M13 6l6 6-6 6" />,
  phone: <path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2Z" />,
  pin: (
    <>
      <path d="M12 21.5s7.5-6.5 7.5-12a7.5 7.5 0 0 0-15 0c0 5.5 7.5 12 7.5 12Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="m3.5 6 8.5 7 8.5-7" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
  recycle: (
    <>
      <path d="M7 19H4.5a1.8 1.8 0 0 1-1.5-2.7l3.2-5.5M17 19h2.5a1.8 1.8 0 0 0 1.5-2.7L19.5 14" />
      <path d="M8.5 5.5 10.4 3a1.8 1.8 0 0 1 3.2 0l3 5.2" />
      <path d="M14 16.5 11.5 19l2.5 2.5M3 8.8l3.3.9.9-3.3M20 5.3l-.9 3.3-3.3-.9" />
    </>
  ),
  heart: <path d="M12 20.5S3 15.5 3 9a4.8 4.8 0 0 1 9-2.3A4.8 4.8 0 0 1 21 9c0 6.5-9 11.5-9 11.5Z" />,
  bin: (
    <>
      <path d="M4 6.5h16M9 6.5V3.5h6v3M6 6.5l1 14.5h10l1-14.5M10 10.5v7M14 10.5v7" />
    </>
  ),
  menu: <path d="M3 6h18M3 12h18M3 18h18" />,
  close: <path d="M5 5l14 14M19 5 5 19" />,
  shield: <path d="M12 2.5 4 5.5v6c0 5 3.3 8.5 8 10 4.7-1.5 8-5 8-10v-6z" />,
} satisfies Record<string, ReactNode>;

export type IconName = keyof typeof paths;

export function Icon({ name, className = "size-6" }: { name: IconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {paths[name]}
    </svg>
  );
}

export function WhatsAppIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.9 5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.6-1.1.1-.2 0-.3 0-.5l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.6.3-.2.3-.8.8-.8 2s.9 2.3 1 2.5c.1.2 1.7 2.6 4.1 3.6 1.5.7 2.1.7 2.9.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2 0-.1-.2-.2-.4-.3Z" />
    </svg>
  );
}
