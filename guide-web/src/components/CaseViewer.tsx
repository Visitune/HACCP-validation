import { useState } from "react";
import { cases } from "../data/cases";
import "./CaseViewer.css";

type Filter = "all" | "officiel" | "terrain";

export default function CaseViewer() {
  const [filter, setFilter] = useState<Filter>("all");
  const [openId, setOpenId] = useState<number | null>(1);
  const [query, setQuery] = useState("");

  const filtered = cases.filter((c) => {
    if (filter !== "all" && c.type !== filter) return false;
    if (query && !(c.label + c.danger + c.mesure).toLowerCase().includes(query.toLowerCase())) return false;
    return true;
  });

  return (
    <section className="cv" aria-label="Galerie d'études de cas">
      <div className="cv-head">
        <div>
          <p className="cv-kicker">Preuves scientifiques · 6 Codex + 4 terrain</p>
          <h2 className="cv-title">Explorer les cas concrets</h2>
          <p className="cv-sub">Cartes visuelles : l'essentiel d'un coup d'œil, le détail scientifique en un clic.</p>
        </div>
        <input
          className="cv-search"
          placeholder="Rechercher : VTEC, métal, Z-value…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className="cv-filters" role="tablist" aria-label="Filtrer les cas">
        {([["all", "Tous"], ["officiel", "Codex officiels"], ["terrain", "Cas terrain"]] as [Filter, string][]).map(([v, l]) => (
          <button key={v} role="tab" aria-selected={filter === v}
            className={`cv-chip${filter === v ? " is-active" : ""}`} onClick={() => setFilter(v)}>{l}</button>
        ))}
      </div>

      <div className="cv-grid">
        {filtered.map((c) => {
          const open = openId === c.id;
          return (
            <article key={c.id} className={`cv-card${open ? " is-open" : ""} cv-${c.type}`}>
              <button className="cv-card-top" onClick={() => setOpenId(open ? null : c.id)} aria-expanded={open}>
                <span className="cv-badges">
                  <span className={`cv-badge cv-badge--${c.type}`}>{c.type === "officiel" ? "● CODEX" : "◆ TERRAIN"}</span>
                  <span className="cv-approach">Approche {c.approcheNum}</span>
                </span>
                <h3 className="cv-label">{c.label}</h3>
                <p className="cv-danger">⚠ {c.danger}</p>
                <p className="cv-mesure">✓ {c.mesure}</p>
                <span className="cv-toggle">{open ? "− réduire" : "+ détails scientifiques"}</span>
              </button>
              {open && (
                <div className="cv-detail">
                  <div className="cv-cols">
                    <div>
                      <h4>Paramètres clés</h4>
                      <ul>{c.parametres.map((p) => <li key={p}>{p}</li>)}</ul>
                    </div>
                    <div>
                      <h4>Preuves apportées</h4>
                      <ul>{c.preuves.map((p) => <li key={p}>{p}</li>)}</ul>
                    </div>
                  </div>
                  <p className="cv-result"><strong>Résultat :</strong> {c.resultat}</p>
                  <p className="cv-limites"><strong>Limites :</strong> {c.limites}</p>
                  <p className="cv-ia"><strong>Apport IA :</strong> {c.leconIA}</p>
                  <p className="cv-source">{c.source}</p>
                </div>
              )}
            </article>
          );
        })}
      </div>
      {filtered.length === 0 && <p className="cv-empty">Aucun cas ne correspond à « {query} ».</p>}
    </section>
  );
}
