import { Link } from "react-router-dom";
import Aside from "../components/Aside";
import CodeBlock from "../components/CodeBlock";
import Toc from "../components/Toc";
import Tldr from "../components/Tldr";
import ProcessFlowPlayer from "../components/ProcessFlowPlayer";
import DangerPicker from "../components/DangerPicker";
import ZValueDemo from "../components/ZValueDemo";
import GrowthModelDemo from "../components/GrowthModelDemo";
import RiskModelDemo from "../components/RiskModelDemo";

const tocItems = [
  { id: "introduction", label: "Introduction" },
  { id: "bloc-1", label: "Bloc 1 — Structuration méthodologique" },
  { id: "bloc-2", label: "Bloc 2 — Assistance à la collecte de données" },
  { id: "bloc-3", label: "Bloc 3 — Aide à la modélisation et au code" },
  { id: "bloc-4", label: "Bloc 4 — Garde-fous" },
];

const processSteps = [
  {
    title: "Danger(s) à maîtriser",
    detail: "Identifier le ou les dangers pertinents pour le produit/process visé.",
  },
  {
    title: "Résultat de sécurité sanitaire requis",
    detail: "Fixer l'objectif chiffré ou qualitatif que la mesure doit atteindre.",
  },
  {
    title: "Identification et priorisation des mesures à valider",
    detail: "Lister les mesures en jeu et les classer selon les critères de la Section V.",
  },
  {
    title: "Choix de l'approche (ou combinaison d'approches)",
    detail: "Sélectionner une ou plusieurs des 5 approches de la Section VI.",
  },
  {
    title: "Définition des paramètres et critères de décision",
    detail: "Préciser ce qui sera mesuré et le seuil qui vaudra validation.",
  },
  {
    title: "Réunion de la documentation / réalisation des études",
    detail: "Rassembler les preuves : littérature, essais, données de collecte.",
  },
  {
    title: "Analyse des résultats",
    detail: "Comparer les données obtenues au critère de décision fixé en amont.",
  },
  {
    title: "Documentation et conclusion (+ révision si besoin)",
    detail: "Consigner la démonstration et prévoir sa révision (Section VII).",
  },
];

const zValueSnippet = `
# Modèle à valeur de Z — équivalence de traitements thermiques
# Codex CAC/GL 69-2008, Section VI : "modèles à valeur de Z pour
# déterminer des conditions alternatives de traitement thermique"
#
# ATTENTION : D_ref et z_value sont des constantes EMPIRIQUES propres
# à un pathogène et une matrice donnés. Elles ne sont JAMAIS générées
# par le LLM — elles doivent venir d'une source apportée par
# l'utilisateur (documentation scientifique publiée, essai réalisé
# en interne, cf. Bloc 1 et Partie 1 §4).

def temps_equivalent(D_ref: float, z_value: float,
                      T_ref: float, T_cible: float,
                      reductions_log: float) -> float:
    """
    Calcule le temps de traitement nécessaire à T_cible pour obtenir
    le même effet létal (en réductions décimales) qu'un traitement
    de référence à T_ref, à l'aide du couple (D_ref, z_value).

    D_ref          : temps de réduction décimale à T_ref (minutes)
    z_value        : élévation de température qui divise D par 10 (°C)
    T_ref, T_cible : températures de référence et cible (°C)
    reductions_log : nombre de réductions décimales visées
    """
    # D à la température cible, dérivé de D_ref via la valeur de Z
    D_cible = D_ref * 10 ** ((T_ref - T_cible) / z_value)

    # Temps nécessaire pour atteindre le nombre de réductions visé
    return D_cible * reductions_log

# Exemple d'appel — D_ref, z_value et reductions_log doivent provenir
# d'une source documentée par l'utilisateur, jamais d'une estimation
# du modèle de langage.
# temps_minutes = temps_equivalent(D_ref=..., z_value=...,
#                                   T_ref=..., T_cible=...,
#                                   reductions_log=...)
`;

const growthModelSnippet = `
# Modèle de croissance de pathogène — effet du pH et de l'activité de
# l'eau
# Codex CAC/GL 69-2008, Section VI : "modèles de croissance de
# pathogènes pour évaluer l'impact de changements du pH et de
# l'activité de l'eau sur la maîtrise de la croissance du pathogène"
#
# ATTENTION : les paramètres cardinaux (pH_min, pH_opt, aw_min) sont
# des constantes EMPIRIQUES propres à un couple pathogène/matrice.
# Elles doivent provenir d'un modèle publié et validé, jamais d'une
# estimation du LLM.

def facteur_croissance_relatif(pH: float, pH_min: float, pH_opt: float,
                                aw: float, aw_min: float) -> float:
    """
    Renvoie un facteur entre 0 (pas de croissance) et 1 (croissance
    optimale), combinant l'effet du pH et de l'activité de l'eau sur
    le taux de croissance d'un pathogène (forme "cardinale" simplifiée).
    """
    if pH <= pH_min or aw <= aw_min:
        return 0.0

    effet_pH = (pH - pH_min) / (pH_opt - pH_min)
    effet_aw = (aw - aw_min) / (1.0 - aw_min)

    return max(0.0, min(1.0, effet_pH * effet_aw))

# Exemple d'appel — pH_min, pH_opt, aw_min doivent venir d'un modèle
# publié et validé pour le pathogène et la matrice réels, jamais du LLM.
# facteur = facteur_croissance_relatif(pH=..., pH_min=..., pH_opt=...,
#                                       aw=..., aw_min=...)
`;

const riskModelSnippet = `
# Modèle basé sur les risques — impact cumulé d'une combinaison de
# mesures de maîtrise le long de la chaîne alimentaire
# Codex CAC/GL 69-2008, Section VI : "modèles basés sur les risques...
# qui examinent l'impact d'une mesure de maîtrise ou d'une combinaison
# de mesures de maîtrise tout au long de la chaîne alimentaire"
#
# ATTENTION : chaque taux de survie par étape est une donnée EMPIRIQUE
# (essai, littérature, retour terrain) apportée par l'utilisateur —
# jamais une estimation du LLM.

def niveau_danger_final(niveau_initial: float,
                         taux_survie_par_etape: list[float]) -> float:
    """
    Propage un niveau de danger (ex. cfu/g, ou probabilité) à travers
    une succession d'étapes de la chaîne, chacune caractérisée par un
    taux de survie (0 = élimination totale, 1 = aucun effet).

    niveau_initial        : niveau de danger en entrée de chaîne
    taux_survie_par_etape : un taux de survie par mesure de maîtrise,
                             dans l'ordre du process
    """
    niveau = niveau_initial
    for taux_survie in taux_survie_par_etape:
        niveau *= taux_survie
    return niveau

# Exemple d'appel — chaque taux_survie doit provenir d'une mesure ou
# d'une source documentée par l'utilisateur pour l'étape correspondante.
# niveau_sortie = niveau_danger_final(
#     niveau_initial=...,
#     taux_survie_par_etape=[...],
# )
`;

export default function Partie3AvecQuoi() {
  return (
    <article className="article">
      <div className="page-kicker">Partie 3</div>
      <h1 className="page-title">Avec quoi (orientation, pas un produit fini)</h1>
      <p className="page-lede">
        Ce que l'IA/LLM peut apporter à chaque étape de la démarche de
        validation — en pistes et démonstrations, jamais en produit clé en
        main.
      </p>

      <Tldr>
        <li>
          Quatre blocs, dans l'ordre où ils interviennent : structurer,
          collecter, modéliser/coder, et respecter le garde-fou à chaque
          étape.
        </li>
        <li>
          Chaque scénario d'usage s'ancre sur un exemple officiel de
          l'Annexe I — jamais sur un cas générique inventé pour l'occasion.
        </li>
        <li>
          Le Bloc 3 inclut des démonstrations interactives (curseurs) pour
          voir l'effet des modèles en temps réel — avec des valeurs
          d'exemple fictives, pas l'outillage réel du dossier client (V2).
        </li>
      </Tldr>

      <Toc items={tocItems} />

      <h2 id="introduction">Introduction</h2>
      <p>
        Les Parties 1 et 2 ont posé le cadre : ce que le Codex demande
        réellement, et comment les cinq approches se déclinent concrètement.
        Cette Partie 3 revient sur une question pratique :{" "}
        <strong>
          à quel endroit précis, dans cette démarche, un LLM apporte-t-il une
          aide réelle — et où s'arrête cette aide.
        </strong>
      </p>
      <p>
        Quatre blocs sont traités ici, dans l'ordre où ils interviennent dans
        une démarche de validation : structurer, collecter, modéliser/coder,
        et — à chaque étape — respecter le garde-fou. Aucun de ces blocs
        n'est un module logiciel fini : ce sont des pistes, illustrées par
        des exemples concrets, que l'outillage réel (V2) développera le
        moment venu.
      </p>

      <h2 id="bloc-1">Bloc 1 — Structuration méthodologique</h2>
      <p>
        Les étapes préalables à la validation (Section V) et le processus de
        validation lui-même (Section VI) suivent une séquence précise :
      </p>
      <ProcessFlowPlayer steps={processSteps} />
      <p>
        C'est exactement la séquence suivie par les six exemples de l'Annexe
        I (Partie 2) — chacun répète scrupuleusement ces mêmes étapes, dans
        le même ordre, quel que soit le danger ou l'approche retenue.
      </p>
      <p>
        Un LLM est bien adapté pour transformer cette séquence en{" "}
        <strong>trame de travail réutilisable</strong> : poser les bonnes
        questions dans le bon ordre pour un dossier donné (quel danger ?
        quel résultat de sécurité sanitaire attendu ? quelle mesure ? quelle
        approche ?), aider à rédiger chaque section du dossier de validation
        dans un vocabulaire fidèle au Codex, et signaler les étapes qu'un
        dossier a sautées. Ce n'est rien de plus qu'une check-list
        intelligente et un assistant rédactionnel — mais c'est déjà ce qui
        manque le plus souvent dans les dossiers actuels, qui partent d'un
        gabarit générique plutôt que de cette séquence.
      </p>
      <h3>Essayez — générateur de trame interactif</h3>
      <p>
        Le consultant décrit au LLM le contexte minimal d'un dossier (danger,
        produit, mesure envisagée). Le LLM restitue la séquence Codex
        appliquée à ce cas précis, sous forme de trame à compléter — sans
        jamais préremplir un seuil réglementaire ou une valeur scientifique
        de sa propre initiative. Choisissez un cas ci-dessous pour voir la
        trame se régénérer instantanément, avec l'approche suggérée :
      </p>
      <DangerPicker />
      <p>
        Les quatre cas repris ici sont ceux des cas d'application terrain de
        la Partie 2. Le consultant complète ensuite chaque champ avec les
        données réelles du client (documentation scientifique retenue,
        mesures de terrain, seuil réglementaire applicable). Le gain n'est
        pas le contenu scientifique — il vient toujours du consultant — mais
        le temps gagné à ne pas reconstruire la structure du dossier à
        chaque nouveau cas.
      </p>
      <Aside>
        Limite : structurer n'est pas remplir. Le LLM organise le
        raisonnement ; il ne produit aucune des données qui alimentent chaque
        étape.
      </Aside>

      <h2 id="bloc-2">Bloc 2 — Assistance à la collecte de données</h2>
      <p>
        C'est le bloc identifié comme prioritaire dans la discussion qui a
        précédé ce guide, et il intervient <strong>avant</strong> la
        modélisation — pas après.
      </p>
      <p>
        Le constat de la Partie 1 (§2) et de la Partie 2 (approche 3) est
        concret : la collecte de données en conditions opérationnelles
        normales — trois à six semaines de production à pleine échelle selon
        le Codex (Section VI) — est la démarche la plus fréquemment
        sacrifiée, parce qu'elle est longue, mobilise du personnel et produit
        souvent des données partielles ou mal exploitables.
      </p>
      <p>Ce qu'un LLM peut apporter concrètement à ce stade :</p>
      <ul>
        <li>
          <strong>Déterminer quelles données collecter</strong> — à partir du
          danger et du résultat de sécurité sanitaire requis, aider à lister
          les paramètres biologiques, chimiques ou physiques réellement
          pertinents (comme dans l'Exemple 4 de l'Annexe I, où seule la
          taille des fragments métalliques rejetés par le détecteur compte).
        </li>
        <li>
          <strong>Cadrer la durée et les conditions de collecte</strong> —
          rappeler la fourchette du Codex (trois à six semaines), et aider à
          identifier les périodes représentatives à couvrir (y compris les
          pointes d'activité, mentionnées explicitement par le texte).
        </li>
        <li>
          <strong>
            Aider à concevoir un plan d'échantillonnage statistiquement
            défendable
          </strong>{" "}
          — proposer une trame de plan d'échantillonnage (fréquence, points
          de prélèvement, taille d'échantillon) cohérente avec les analyses
          statistiques qui seront nécessaires ensuite, sans se substituer à
          un statisticien pour les cas complexes.
        </li>
        <li>
          <strong>Produire des outils pratiques de collecte</strong> —
          formulaires structurés, checklists de terrain, grilles de saisie —
          pour que la collecte, une fois lancée, reste fluide et complète
          plutôt que d'être abandonnée à mi-parcours.
        </li>
      </ul>
      <h3>Scénario d'usage — Exemple 4 (maîtrise des fragments métalliques)</h3>
      <p>
        Le consultant indique au LLM le contexte : un tamis en ligne, un
        détecteur de métal en sortie, et le résultat de sécurité visé (moins
        d'un fragment de plus de 2 mm pour 100 000 kg de produit). Sans
        connaître le produit ni l'installation, le LLM propose une trame de
        plan d'échantillonnage cohérente avec le Codex : une durée de
        collecte alignée sur une opération normale (un mois, comme dans
        l'exemple officiel), la fréquence de relevé du détecteur de métal,
        et une méthode de mesure de la taille des fragments rejetés — le
        tout sous forme de gabarit de formulaire de collecte que le
        consultant adapte ensuite à l'installation réelle du client (cadence
        de la ligne, format des relevés déjà en place, etc.).
      </p>
      <Aside>
        Limite : le LLM aide à concevoir le protocole de collecte ; il ne
        collecte, ne mesure, ni n'invente aucune donnée. Les résultats
        viennent uniquement du terrain.
      </Aside>

      <h2 id="bloc-3">Bloc 3 — Aide à la modélisation et au code</h2>
      <p>
        Ce bloc s'appuie sur l'exemple explicitement cité par le Codex en
        Section VI comme illustration de modélisation mathématique : le{" "}
        <strong>modèle à valeur de Z</strong>, utilisé pour déterminer des
        conditions alternatives de traitement thermique.
      </p>
      <p>
        Le principe du modèle est simple à énoncer, mais son implémentation
        correcte (gestion des unités, des échelles logarithmiques, de la
        référence de température) est une source d'erreurs fréquente pour un
        non-spécialiste. C'est exactement le type de tâche où un LLM peut
        aider à écrire et à expliquer du code — sans jamais fournir les
        constantes empiriques qui rendent le calcul valide pour <em>un</em>{" "}
        couple produit/pathogène donné.
      </p>
      <p>
        Extrait de code commenté, d'abord à lire pour comprendre le
        raisonnement :
      </p>
      <CodeBlock language="python">{zValueSnippet}</CodeBlock>
      <p>
        Ce que le LLM fait ici : structurer la fonction, nommer clairement
        les paramètres, écrire les commentaires qui relient chaque ligne à
        la définition du Codex, signaler explicitement où les constantes
        doivent être injectées par l'utilisateur. Ce qu'il ne fait jamais :
        proposer une valeur pour <code>D_ref</code> ou <code>z_value</code>{" "}
        d'un pathogène donné, même si on le lui demande — ces valeurs
        viennent uniquement d'une source citée par l'utilisateur.
      </p>
      <p>
        Le même modèle, exécuté ci-dessous avec des curseurs : les valeurs
        par défaut sont fictives, à remplacer mentalement par vos propres
        données sourcées — seule la relation mathématique du Codex est
        réelle ici.
      </p>
      <ZValueDemo />

      <h3>Autre modèle — croissance de pathogène (pH / activité de l'eau)</h3>
      <p>
        Le Codex cite aussi, dans la même Section VI, les modèles de
        croissance de pathogènes évaluant l'impact du pH et de l'activité de
        l'eau sur la maîtrise de la croissance — pertinents par exemple pour
        des produits stabilisés par acidification ou séchage (cf. le cas du
        saucisson sec, Partie 2, approche 2). Même logique d'assistance : le
        LLM structure et commente le code, jamais les paramètres cardinaux
        du pathogène.
      </p>
      <CodeBlock language="python">{growthModelSnippet}</CodeBlock>
      <GrowthModelDemo />

      <h3>Autre modèle — impact d'une combinaison de mesures le long de la chaîne</h3>
      <p>
        Le Codex mentionne enfin les modèles basés sur les risques, qui
        examinent l'impact d'une mesure ou d'une combinaison de mesures tout
        au long de la chaîne alimentaire — la logique suivie par l'Exemple 5
        de l'Annexe I (<em>Taenia saginata</em>), où l'effet d'un nouveau
        dispositif d'inspection est traduit en niveau de risque résiduel
        pour le consommateur.
      </p>
      <CodeBlock language="python">{riskModelSnippet}</CodeBlock>
      <RiskModelDemo />

      <h3>Scénario d'usage — Exemple 5 (inspection de la viande, Taenia saginata)</h3>
      <p>
        Une autorité compétente veut comparer, avant de la déployer, une
        nouvelle procédure d'inspection post-mortem à la procédure
        traditionnelle. Le consultant fournit au LLM la structure du
        problème (deux taux de non-détection à comparer, un niveau de risque
        actuel pour la population) sans lui demander la moindre valeur
        numérique. Le LLM aide à écrire et à commenter le code qui combine
        ces taux en un niveau de risque résiduel — la fonction{" "}
        <code>niveau_danger_final</code> ci-dessus en est un exemple simplifié
        — et à documenter chaque étape du calcul pour qu'elle reste
        vérifiable par un tiers. Les taux de non-détection eux-mêmes
        viennent exclusivement des essais expérimentaux menés par
        l'autorité, exactement comme dans l'exemple officiel.
      </p>
      <Aside tone="warning">
        Limite, comme rappelé en Partie 2 (approche 4) : le modèle lui-même
        doit être validé pour l'application spécifique visée, et la
        validation doit tenir compte des marges d'incertitude — un code
        correct ne dispense jamais de cette étape.
      </Aside>

      <h2 id="bloc-4">Bloc 4 — Garde-fous (rappel explicite)</h2>
      <p>
        Ce guide s'est ouvert sur ce principe (Partie 1, §4) ; il se referme
        dessus, pour qu'aucune ambiguïté ne subsiste après la lecture des
        trois blocs précédents :
      </p>
      <ul>
        <li>
          <strong>
            Le LLM ne répond jamais de mémoire à une question quantitative de
            sécurité alimentaire.
          </strong>{" "}
          Ni une D-value, ni une z-value, ni un seuil réglementaire, ni un
          taux de réduction — ces valeurs viennent toujours d'une source
          apportée par l'utilisateur.
        </li>
        <li>
          <strong>
            Structurer, orienter, coder — jamais halluciner une donnée
            scientifique.
          </strong>{" "}
          Les trois blocs de cette partie (structuration, collecte,
          modélisation) illustrent une assistance méthodologique et
          rédactionnelle, pas une autorité scientifique.
        </li>
        <li>
          <strong>Aucun de ces blocs n'est un produit fini.</strong> Ce sont
          des démonstrations destinées à montrer où l'assistance IA a du sens
          dans la démarche de validation — pas des modules intégrés livrés
          avec ce guide. L'outillage réel, s'il voit le jour, correspond à la
          V2, une fois le besoin validé par la diffusion de ce guide.
        </li>
      </ul>

      <p className="note-box">
        Blocs couverts : structuration méthodologique, assistance à la
        collecte de données (priorisé), aide à la modélisation/code (code
        commenté + démonstration interactive à valeurs fictives), garde-fous.
        Voir la page <Link to="/sources">Sources</Link> pour le document
        Codex complet.
      </p>
    </article>
  );
}
