import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const links = [
  { to: "/", label: "Accueil", end: true },
  { to: "/partie-1-pourquoi", label: "Partie 1 — Pourquoi" },
  { to: "/partie-2-comment", label: "Partie 2 — Comment (illustré)" },
  { to: "/partie-3-avec-quoi", label: "Partie 3 — Avec quoi" },
];

export default function Sidebar() {
  return (
    <nav className="sidebar" aria-label="Sommaire du guide">
      <div className="sidebar-title">
        Validation des mesures
        <br />
        de maîtrise HACCP
      </div>
      <ul>
        {links.map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              end={link.end}
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="sidebar-footer">
        Guide d'orientation méthodologique
        <br />
        basé sur CAC/GL 69-2008
      </div>
    </nav>
  );
}
