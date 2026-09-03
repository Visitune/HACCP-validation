import { Link } from "react-router-dom";
import Aside from "../components/Aside";

export default function Home() {
  return (
    <article className="article">
      <div className="hero">
        <div className="page-kicker">Guide d'orientation méthodologique</div>
        <h1 className="hero-title">
          Valider les mesures de maîtrise HACCP — ce que demande vraiment le
          Codex, et ce que l'IA peut y apporter
        </h1>
        <p className="page-lede">
          Depuis 2008, le CAC/GL 69-2008 encadre la validation des mesures de
          maîtrise de la sécurité sanitaire des aliments — au-delà des seuls
          CCP. Ce guide explique pourquoi cette exigence est aujourd'hui trop
          souvent contournée en pratique, comment le texte officiel la
          définit concrètement à travers ses cinq approches et ses six
          exemples, et où les outils d'IA actuels peuvent, pour la première
          fois, aider à la pratiquer correctement — sans jamais se
          substituer au jugement scientifique.
        </p>

        <div className="hero-stats">
          <div className="hero-stat">
            <div className="hero-stat-value">5</div>
            <div className="hero-stat-label">Approches officielles de validation</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-value">6</div>
            <div className="hero-stat-label">Exemples réels de l'Annexe I</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-value">4</div>
            <div className="hero-stat-label">Blocs d'assistance IA (Partie 3)</div>
          </div>
        </div>
      </div>

      <div className="home-grid">
        <Link to="/partie-1-pourquoi" className="home-card">
          <div className="home-card-kicker">Partie 1</div>
          <div className="home-card-title">Pourquoi</div>
          <p className="home-card-desc">
            Ce que le Codex demande réellement depuis 2008, pourquoi c'est
            contourné en pratique, et pourquoi le moment est venu d'aller
            plus loin.
          </p>
        </Link>
        <Link to="/partie-2-comment" className="home-card">
          <div className="home-card-kicker">Partie 2</div>
          <div className="home-card-title">Comment (illustré)</div>
          <p className="home-card-desc">
            Les cinq approches officielles de validation, chacune éclairée
            par un ou plusieurs des six exemples réels de l'Annexe I.
          </p>
        </Link>
        <Link to="/partie-3-avec-quoi" className="home-card">
          <div className="home-card-kicker">Partie 3</div>
          <div className="home-card-title">Avec quoi</div>
          <p className="home-card-desc">
            Ce que l'IA/LLM peut apporter à chaque étape — structuration,
            collecte de données, modélisation — présenté comme piste, pas
            comme produit fini.
          </p>
        </Link>
      </div>

      <h2>Ce que ce guide n'est pas</h2>
      <p>
        Pour que les attentes soient claires avant même la lecture de la
        Partie 1 : ce guide n'est pas un logiciel de validation, ni un
        calculateur scientifique clé en main, ni un substitut à l'expertise
        d'un statisticien ou d'un microbiologiste sur un cas complexe. C'est
        un document de méthode, fidèle au texte du Codex, qui explique une
        démarche et montre où l'assistance IA a un rôle réel — pas où elle
        remplace le jugement scientifique.
      </p>

      <Aside tone="warning">
        Garde-fou central de ce guide : l'IA structure, oriente la collecte
        de données, aide à écrire et à comprendre le code d'un modèle — elle
        n'invente jamais une donnée scientifique de sécurité alimentaire.
        Voir Partie 1, §4 et Partie 3, bloc 4.
      </Aside>
    </article>
  );
}
