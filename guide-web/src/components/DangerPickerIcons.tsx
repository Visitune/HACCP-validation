const ICON_PROPS = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function DocumentIcon() {
  return (
    <svg {...ICON_PROPS}>
      <path d="M6 3h8l4 4v14H6z" />
      <path d="M14 3v4h4" />
      <path d="M9 13h6M9 16.5h6M9 9.5h2.5" />
    </svg>
  );
}

export function FlaskIcon() {
  return (
    <svg {...ICON_PROPS}>
      <path d="M9.5 3h5" />
      <path d="M10.5 3v5.5l-5 9A2 2 0 0 0 7.3 20.5h9.4a2 2 0 0 0 1.8-2.9l-5-9.1V3" />
      <path d="M8.2 15h7.6" />
    </svg>
  );
}

export function ClipboardIcon() {
  return (
    <svg {...ICON_PROPS}>
      <rect x="5" y="4.5" width="14" height="16.5" rx="2" />
      <path d="M9 3.2h6a1 1 0 0 1 1 1V6H8V4.2a1 1 0 0 1 1-1Z" />
      <path d="M8.5 12l2 2 4.5-4.5" />
    </svg>
  );
}

export function ChartIcon() {
  return (
    <svg {...ICON_PROPS}>
      <path d="M4.5 20V4" />
      <path d="M4.5 20h16" />
      <path d="M7.5 16l3.5-5 3 3 4.5-6.5" />
    </svg>
  );
}
