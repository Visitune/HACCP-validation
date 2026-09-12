import { useState } from "react";
import { Route, Routes, useLocation, Link } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Partie1Pourquoi from "./pages/Partie1Pourquoi";
import Partie2Comment from "./pages/Partie2Comment";
import Partie3AvecQuoi from "./pages/Partie3AvecQuoi";
import Sources from "./pages/Sources";
import "./App.css";

const crumbs: Record<string, string> = {
  "/": "Accueil",
  "/partie-1-pourquoi": "Partie 1 · Pourquoi",
  "/partie-2-comment": "Partie 2 · Comment",
  "/partie-3-avec-quoi": "Partie 3 · Avec quoi",
  "/sources": "Sources",
};

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(() => localStorage.getItem("sb-collapsed") === "1");
  const toggleCollapse = () => setCollapsed((v) => { const n = !v; localStorage.setItem("sb-collapsed", n ? "1" : "0"); return n; });
  const { pathname } = useLocation();
  return (
    <div className="layout">
      <a href="#main-content" className="skip-link">Aller au contenu principal</a>
      <Sidebar open={menuOpen} onClose={() => setMenuOpen(false)} collapsed={collapsed} onToggleCollapse={toggleCollapse} />
      <div className="main-col">
        <header className="sb-topbar">
          <button className="sb-burger" onClick={() => setMenuOpen(true)} aria-label="Ouvrir le menu"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16" /></svg></button>
          <span className="sb-top-title">{crumbs[pathname] ?? "Guide"}</span>
          <Link className="sb-top-cta" to="/partie-2-comment">Voir les cas →</Link>
        </header>
        <main className="content" id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/partie-1-pourquoi" element={<Partie1Pourquoi />} />
            <Route path="/partie-2-comment" element={<Partie2Comment />} />
            <Route path="/partie-3-avec-quoi" element={<Partie3AvecQuoi />} />
            <Route path="/sources" element={<Sources />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
