import { NavLink, useLocation } from "react-router-dom";
import "./Sidebar.css";

function Svg({ d, size = 18 }: { d: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d={d} />
    </svg>
  );
}
const HomeIcon = () => <Svg d="M4 11l8-7 8 7M6 10v10h12V10" />;
const WhyIcon = () => <Svg d="M12 4a8 8 0 100 16 8 8 0 000-16zM9.5 9.5a2.5 2.5 0 115 0c0 1.5-2.5 2-2.5 3.5M12 17h.01" />;
const HowIcon = () => <Svg d="M4 6h16M4 12h16M4 18h10" />;
const WhatIcon = () => <Svg d="M12 3l2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5z" />;
const SrcIcon = () => <Svg d="M6 3h8l4 4v14H6zM14 3v4h4M9 13h6M9 16.5h6" />;
const ChevronL = () => <Svg d="M14 6l-6 6 6 6" />;
const ChevronR = () => <Svg d="M10 6l6 6-6 6" />;
const CloseIcon = () => <Svg d="M6 6l12 12M18 6L6 18" />;

const links = [
  { to: "/", label: "Accueil", desc: "Vue d'ensemble", Icon: HomeIcon, end: true },
  { to: "/partie-1-pourquoi", label: "Pourquoi", desc: "Partie 1 · argumentaire", Icon: WhyIcon },
  { to: "/partie-2-comment", label: "Comment", desc: "Partie 2 · 10 cas illustrés", Icon: HowIcon },
  { to: "/partie-3-avec-quoi", label: "Avec quoi", desc: "Partie 3 · apport IA", Icon: WhatIcon },
  { to: "/sources", label: "Sources", desc: "Codex & références", Icon: SrcIcon },
];

export default function Sidebar({ open, onClose, collapsed, onToggleCollapse }: {
  open: boolean; onClose: () => void; collapsed: boolean; onToggleCollapse: () => void;
}) {
  const { pathname } = useLocation();
  const idx = Math.max(0, links.findIndex((l) => (l.end ? pathname === "/" : pathname.startsWith(l.to))));
  const progress = ((idx + 1) / links.length) * 100;

  return (
    <>
      <div className={`sb-overlay${open ? " is-open" : ""}`} onClick={onClose} aria-hidden={!open} />
      <nav className={`sidebar${open ? " is-open" : ""}${collapsed ? " is-collapsed" : ""}`} aria-label="Sommaire du guide">
        <div className="sb-brand">
          <span className="sb-logo">H</span>
          <div>
            <div className="sb-title">HACCP · Validation</div>
            <div className="sb-sub">Guide CAC/GL 69-2008</div>
          </div>
          <button className="sb-close" onClick={onClose} aria-label="Fermer le menu"><CloseIcon /></button>
          <button className="sb-collapse" onClick={onToggleCollapse}
            aria-label={collapsed ? "Déplier le menu" : "Replier le menu"}
            title={collapsed ? "Déplier" : "Replier"}>
            {collapsed ? <ChevronR /> : <ChevronL />}
          </button>
        </div>
        <div className="sb-progress"><span style={{ width: `${progress}%` }} /></div>
        <ul className="sb-links">
          {links.map(({ to, label, desc, Icon, end }) => (
            <li key={to}>
              <NavLink to={to} end={end}
                className={({ isActive }) => (isActive ? "sb-link active" : "sb-link")}
                onClick={onClose} title={label}>
                <span className="sb-icon" aria-hidden><Icon /></span>
                <span className="sb-text">
                  <span className="sb-label">{label}</span>
                  <span className="sb-desc">{desc}</span>
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="sb-footer"><span className="sb-dot" /> 6 exemples Codex + 4 terrain</div>
      </nav>
    </>
  );
}
