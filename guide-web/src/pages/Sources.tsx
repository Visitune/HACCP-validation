export default function Sources() {
  return (
    <article className="article">
      <div className="page-kicker">Références</div>
      <h1 className="page-title">Sources</h1>
      <p className="page-lede">
        Ce guide s'appuie sur un texte officiel pour ses affirmations
        méthodologiques — le CAC/GL 69-2008 — et sur des textes
        réglementaires européens et français pour les cas d'application
        terrain de la Partie 2. Chaque citation renvoie ici vers le document
        réel, pour que chaque affirmation reste vérifiable.
      </p>

      <h2>CAC/GL 69-2008 — Directives relatives à la validation des mesures de maîtrise de la sécurité alimentaire</h2>
      <p>
        Texte adopté en 2008, modifications rédactionnelles en 2013. Deux
        versions linguistiques sont utilisées dans ce guide, vérifiées
        cohérentes entre elles.
      </p>
      <div className="source-grid">
        <a className="source-card" href="/sources/CXG_069f.pdf" target="_blank" rel="noopener noreferrer">
          <div className="source-card-title">Version française (CXG_069f)</div>
          <p className="source-card-desc">
            Document de référence pour toutes les citations de ce guide.
            17 pages : Sections I à VII + Annexe I (6 exemples).
          </p>
          <span className="source-card-link">Ouvrir le PDF ↗</span>
        </a>
        <a className="source-card" href="/sources/CXG_069e.pdf" target="_blank" rel="noopener noreferrer">
          <div className="source-card-title">English version (CXG_069e)</div>
          <p className="source-card-desc">
            Version anglaise officielle, utilisée pour vérifier la fidélité
            de traduction des passages cités.
          </p>
          <span className="source-card-link">Ouvrir le PDF ↗</span>
        </a>
      </div>

      <h2>Repères de pagination (édition française)</h2>
      <p>Pour retrouver rapidement une section citée dans ce guide :</p>
      <div className="matrix-wrap">
        <table className="matrix">
          <thead>
            <tr>
              <th scope="col">Section / Annexe</th>
              <th scope="col">Contenu</th>
              <th scope="col">Page</th>
            </tr>
          </thead>
          <tbody>
            <tr><th scope="row">Section I</th><td>Introduction, répartition des rôles industrie / autorités</td><td>1</td></tr>
            <tr><th scope="row">Section II</th><td>Champ d'application</td><td>1–2</td></tr>
            <tr><th scope="row">Section III</th><td>Définitions (dont « Validation »)</td><td>2</td></tr>
            <tr><th scope="row">Section IV</th><td>Concept et nature de la validation</td><td>2–3</td></tr>
            <tr><th scope="row">Section V</th><td>Étapes précédant la validation</td><td>3–5</td></tr>
            <tr><th scope="row">Section VI</th><td>Processus de validation, les 5 approches</td><td>5–8</td></tr>
            <tr><th scope="row">Section VII</th><td>Nécessité de procéder à une revalidation</td><td>8</td></tr>
            <tr><th scope="row">Annexe I — Exemple 1</th><td>Aflatoxines, fruits à coque</td><td>9–11</td></tr>
            <tr><th scope="row">Annexe I — Exemple 2</th><td>VTEC, fromage au lait cru</td><td>11–13</td></tr>
            <tr><th scope="row">Annexe I — Exemple 3</th><td>SSOP, nettoyage-désinfection</td><td>13</td></tr>
            <tr><th scope="row">Annexe I — Exemple 4</th><td>Fragments métalliques</td><td>14</td></tr>
            <tr><th scope="row">Annexe I — Exemple 5</th><td>Taenia saginata, inspection viande</td><td>15–16</td></tr>
            <tr><th scope="row">Annexe I — Exemple 6</th><td>Étiquette, œufs en coquille</td><td>16–17</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Textes réglementaires cités dans les cas d'application terrain (Partie 2)</h2>
      <p>
        Ces cas sont des scénarios pédagogiques, pas des exemples officiels
        du Codex — mais les textes réglementaires qu'ils citent, eux, sont
        réels. Liens externes (EUR-Lex, Légifrance), non hébergés dans ce
        guide.
      </p>
      <div className="source-grid">
        <a className="source-card" href="https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32005R2073" target="_blank" rel="noopener noreferrer">
          <div className="source-card-title">Règlement (CE) n° 2073/2005</div>
          <p className="source-card-desc">
            Critères microbiologiques applicables aux denrées alimentaires —
            Annexe II §3.2 (classement « favorise / ne favorise pas la
            croissance » de <em>Listeria monocytogenes</em>), cité dans le
            cas saucisson sec (Approche 2).
          </p>
          <span className="source-card-link">Ouvrir sur EUR-Lex ↗</span>
        </a>
        <a className="source-card" href="https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=OJ:L_202402895" target="_blank" rel="noopener noreferrer">
          <div className="source-card-title">Règlement (UE) 2024/2895</div>
          <p className="source-card-desc">
            Modifie le 2073/2005 : conformité démontrée sur toute la durée
            de vie, critère par défaut absence/25 g, échéance 1er juillet
            2026. Cité dans les cas saucisson sec et réchauffage (Approches
            2 et 5).
          </p>
          <span className="source-card-link">Ouvrir sur EUR-Lex ↗</span>
        </a>
        <a className="source-card" href="https://www.legifrance.gouv.fr/loda/id/JORFTEXT000021676699" target="_blank" rel="noopener noreferrer">
          <div className="source-card-title">Arrêté du 21 décembre 2009</div>
          <p className="source-card-desc">
            Températures de conservation des denrées, cité pour le repère de
            refroidissement rapide (cas traiteur, Approche 3) — l'article
            exact applicable dépend du produit et reste à vérifier au cas
            par cas.
          </p>
          <span className="source-card-link">Ouvrir sur Légifrance ↗</span>
        </a>
      </div>

      <p className="note-box">
        Les autres documents consultés pendant la préparation de ce guide
        (Codex 2023 général, additifs CXG_036e, Listeria CXG_061e) ne sont
        pas cités dans les Parties 1–3 et ne sont donc pas liés ici : seule
        une source réellement citée dans le texte est référencée.
      </p>
    </article>
  );
}
