import { Link } from "react-router-dom";
import Aside from "../components/Aside";
import Toc from "../components/Toc";
import Tldr from "../components/Tldr";
import ApproachMatrix from "../components/ApproachMatrix";
import ScenarioCard from "../components/ScenarioCard";

const tocItems = [
  { id: "introduction", label: "Introduction" },
  { id: "vue-densemble", label: "Vue d'ensemble comparative" },
  { id: "approche-1", label: "Approche 1 — Documentation / antécédents" },
  { id: "approche-2", label: "Approche 2 — Essais expérimentaux" },
  { id: "approche-3", label: "Approche 3 — Collecte de données" },
  { id: "approche-4", label: "Approche 4 — Modélisation mathématique" },
  { id: "approche-5", label: "Approche 5 — Études (surveys)" },
  { id: "choix-approche", label: "Ce qui détermine le choix d'une approche" },
];

export default function Partie2Comment() {
  return (
    <article className="article">
      <div className="page-kicker">Partie 2</div>
      <h1 className="page-title">Comment (illustré)</h1>
      <p className="page-lede">
        Les cinq approches officielles de validation (Section VI), chacune
        éclairée par un ou plusieurs des six exemples réels de l'Annexe I du
        CAC/GL 69-2008.
      </p>

      <Tldr>
        <li>
          Cinq approches, non hiérarchisées et combinables : documentation,
          essais expérimentaux, collecte de données, modélisation,
          études/enquêtes.
        </li>
        <li>
          Chacune est illustrée par un exemple officiel de l'Annexe I, plus
          un cas d'application terrain — clairement distingué comme
          scénario pédagogique, pas comme référence Codex.
        </li>
        <li>
          Le choix entre elles dépend surtout des antécédents disponibles,
          de la capacité de surveillance et des ressources — la Section V
          donne les critères.
        </li>
      </Tldr>

      <Toc items={tocItems} />

      <h2 id="introduction">Introduction</h2>
      <p>
        Le Codex décrit cinq approches pour valider une mesure de maîtrise
        (Section VI). Elles ne sont <strong>pas hiérarchisées</strong> — le
        texte le précise explicitement : « Ces approches n'ont pas été
        classées dans un ordre particulier » — et elles peuvent être{" "}
        <strong>combinées</strong> selon la situation. Le choix dépend, entre
        autres, de la nature du danger, des ingrédients, du produit, et de
        l'ampleur de la maîtrise prévue.
      </p>
      <p>
        Pour rendre ces cinq approches concrètes, ce guide s'appuie
        exclusivement sur les six exemples officiels de l'Annexe I du
        CAC/GL 69-2008. Le texte est clair sur leur statut : ce sont des
        illustrations, pas des scénarios réels de validation à reproduire
        tels quels, et les valeurs utilisées « sont fournies à titre
        d'illustration et ne peuvent aucunement servir de guide ». On les
        reprend ici avec la même prudence : pour comprendre la logique de
        chaque approche, pas comme des gabarits à copier.
      </p>
      <p>
        Pour chaque approche, un second cas vient s'ajouter à l'exemple
        officiel : un <strong>cas d'application terrain</strong>, encadré et
        marqué explicitement <em>scénario pédagogique, non officiel</em>. Ce
        sont des mises en situation courantes en conseil food safety
        européen (boulangerie, charcuterie, plats cuisinés, conserverie),
        inventées pour ce guide — à la différence des six exemples de
        l'Annexe I, elles ne viennent pas du texte du Codex et ne doivent
        jamais être confondues avec lui. Leur seul rôle est de montrer à quoi
        ressemble chaque approche appliquée à un dossier client réel.
      </p>

      <h2 id="vue-densemble">Vue d'ensemble comparative</h2>
      <p>
        Avant d'entrer dans le détail de chaque approche, voici comment elles
        se comparent d'un coup d'œil :
      </p>
      <ApproachMatrix />

      <h2 id="approche-1">Approche 1 — Renvoi à la documentation scientifique/technique, aux validations antérieures ou aux antécédents connus</h2>
      <h3>Ce que dit le Codex</h3>
      <p>
        Les informations nécessaires pour valider une mesure de maîtrise
        peuvent provenir de sources déjà existantes : documentation
        scientifique publiée, réglementation gouvernementale, directives BPH
        ou mesures HACCP dont l'efficacité est déjà démontrée par des
        autorités compétentes ou des organisations scientifiques
        indépendantes, normes internationales (Codex y compris), ou études
        de validation menées par des fabricants d'équipements. Pour un
        processus bien établi — le texte cite en exemple la pasteurisation
        du lait — il peut suffire de vérifier que les conditions réelles
        (durée, température) correspondent à celles décrites dans la
        documentation, sans refaire l'étude depuis zéro.
      </p>
      <h3>Illustration — Exemple 1 : déshydratation post-récolte contre les aflatoxines dans les fruits à coque</h3>
      <p>
        Le danger identifié est la contamination par les aflatoxines
        produites par <em>Aspergillus</em> spp. La documentation
        scientifique disponible établit un fait précis et déjà validé
        ailleurs : ce champignon ne peut plus produire de toxines lorsque
        l'activité de l'eau du produit descend sous 0,70. Il n'y a donc pas
        besoin de mener un essai expérimental propre à l'entreprise — la
        mesure de maîtrise (le séchage post-récolte) peut être validée en
        s'appuyant sur cette documentation, à condition de démontrer que le
        procédé de déshydratation utilisé atteint effectivement ce seuil
        d'activité de l'eau, de façon constante, dans un délai compatible
        avec la cinétique de contamination (24 à 48 heures selon la
        littérature citée).
      </p>
      <a className="source-link" href="/sources/CXG_069f.pdf#page=9" target="_blank" rel="noopener noreferrer">
        Voir Annexe I, Exemple 1 dans le PDF (p. 9–11) ↗
      </a>
      <h3>Quand c'est adapté</h3>
      <p>
        Cette approche est la plus économique dès qu'un antécédent fiable
        existe pour <em>ce</em> danger, dans des conditions comparables à
        celles de l'entreprise. Mais le Codex met en garde (Section V) : les
        antécédents peuvent se périmer — de nouvelles souches, de nouvelles
        données épidémiologiques ou un changement dans les conditions
        d'exploitation peuvent rendre une documentation ancienne caduque. Il
        ne faut jamais réutiliser une référence sans vérifier que les
        conditions d'application restent comparables.
      </p>
      <ScenarioCard title="Cas d'application terrain">
        Une boulangerie industrielle veut valider l'étape de cuisson de son
        pain de mie vis-à-vis de <em>Salmonella</em>, dont la source la plus
        probable dans cette matrice est la farine crue (contaminant
        d'origine agricole, pas un contaminant de cuisson). Le procédé
        (température à cœur, durée) est un standard largement documenté dans
        la littérature technique boulangère et par les fournisseurs de fours
        industriels. Plutôt que de lancer un essai expérimental coûteux, le
        consultant s'appuie sur cette documentation existante : il vérifie
        que la température à cœur atteinte en fin de cuisson, mesurée sur un
        échantillon défendable de pains représentatifs des formats et
        positions de four produits (pas « quelques pains » choisis au
        hasard), correspond bien aux barèmes documentés — et consigne cette
        comparaison comme preuve de validation.
      </ScenarioCard>
      <Aside>
        C'est précisément ici que l'assistance à la collecte et à
        l'organisation de la documentation scientifique pertinente devient
        utile — voir Partie 3, bloc 1.
      </Aside>

      <h2 id="approche-2">Approche 2 — Essais scientifiques expérimentaux valides</h2>
      <h3>Ce que dit le Codex</h3>
      <p>
        Les tests de provocation en laboratoire (<em>challenge tests</em>) et
        les essais pilotes reproduisant les conditions de traitement sont des
        techniques de validation fréquentes, en particulier dans les unités
        de transformation. Le texte insiste sur deux points de rigueur : la
        pertinence des micro-organismes de substitut utilisés (on n'introduit
        jamais de pathogènes viables dans une installation de production), et
        la nécessité de marges de sécurité supplémentaires pour couvrir
        l'incertitude et la variabilité entre l'essai à petite échelle et
        l'opération à pleine échelle.
      </p>
      <h3>
        Illustration — Exemple 2 : atteindre un objectif de performance pour{" "}
        <em>E. coli</em> producteur de vérotoxine (VTEC) dans le fromage au
        lait cru à pâte dure
      </h3>
      <p>
        Le résultat de sécurité sanitaire requis est fixé précisément (moins
        de 0,001 cfu VTEC/g en fin de production). La combinaison de mesures
        — niveau de pathogène dans le lait cru, durée/température de
        transformation, pH, activité de l'eau, durée d'affinage — est testée
        via une étude expérimentale conçue pour reproduire le procédé réel :
        du VTEC est ajouté au lait cru dans des conditions contrôlées, le
        fromage est fabriqué à échelle pilote, et des échantillons sont
        prélevés aux points pertinents. Les critères de décision utilisent un
        calcul statistique explicite (moyenne géométrique + 3 écarts-types)
        pour absorber la variabilité du processus.
      </p>
      <a className="source-link" href="/sources/CXG_069f.pdf#page=11" target="_blank" rel="noopener noreferrer">
        Voir Annexe I, Exemple 2 dans le PDF (p. 11–13) ↗
      </a>
      <h3>Quand c'est adapté</h3>
      <p>
        Cette approche convient quand le danger est bien caractérisé mais
        qu'aucune documentation existante ne couvre les conditions
        spécifiques de l'entreprise (recette, procédé, matrice). Elle est en
        revanche coûteuse et exige une expertise scientifique et statistique
        réelle pour concevoir l'essai et interpréter les résultats — c'est un
        point de friction directement lié au constat de la Partie 1 (§2).
      </p>
      <ScenarioCard title="Cas d'application terrain">
        Un charcutier artisanal introduit un nouveau saucisson sec, avec une
        recette et un temps d'affinage propres à l'entreprise. Le danger visé
        est <em>Listeria monocytogenes</em>. Aucune documentation existante
        ne couvre exactement cette combinaison de recette, de diamètre de
        boyau et de conditions de séchage. Le consultant fait réaliser un
        challenge test — une étude de croissance, pas de réduction — en
        laboratoire externe <strong>accrédité</strong> : c'est le pathogène
        réel qui est utilisé (cocktail d'au moins trois souches de terrain),
        et non un substitut — les substituts servent aux essais menés
        directement en usine, précisément pour ne jamais introduire le
        pathogène dans l'installation de production (cf. Partie 2, Approche
        2). Le produit est suivi sur toute la durée de vie visée, y compris
        en conditions d'abus de température, et la croissance mesurée à
        plusieurs paliers. Le résultat sert de preuve que la combinaison pH /
        activité de l'eau / durée d'affinage maîtrise effectivement le
        danger.
      </ScenarioCard>
      <Aside>
        Voir Partie 3, bloc 3 : l'aide à la modélisation et au code peut
        soutenir l'interprétation statistique des résultats d'essai, jamais
        leur substitution.
      </Aside>

      <h2 id="approche-3">Approche 3 — Collecte de données en conditions opérationnelles normales de production</h2>
      <h3>Ce que dit le Codex</h3>
      <p>
        Cette approche consiste à recueillir des données biologiques,
        chimiques ou physiques directement liées au danger, pendant une
        période représentative de l'ensemble de l'opération — le texte cite
        « trois à six semaines de production à pleine échelle » — en incluant
        les périodes de pointe si elles existent (le Codex mentionne
        explicitement les fêtes de fin d'année comme exemple). L'échantillonnage
        doit reposer sur des techniques, plans et méthodologies appropriés,
        en quantité suffisante pour permettre les analyses statistiques
        nécessaires.
      </p>
      <h3>Illustrations — Exemples 3 et 4</h3>
      <ul>
        <li>
          <strong>Exemple 3 : protocoles de nettoyage-désinfection (SSOP).</strong>{" "}
          Le danger est générique (contaminants microbiens de surface). La
          mesure de maîtrise — les procédures de nettoyage et de
          désinfection — est validée en comparant, sur trois à quatre
          semaines d'opération, les résultats des tests microbiologiques de
          surface en fin de production aux critères établis. Si les
          résultats sont conformes de façon constante sur cette période, les
          SSOP sont considérés comme validés ; un taux de test réduit peut
          ensuite servir d'activité de vérification permanente.
        </li>
        <li>
          <strong>Exemple 4 : maîtrise des fragments métalliques.</strong> Le
          résultat de sécurité sanitaire est quantifié précisément (moins
          d'un fragment métallique de plus de 2 mm pour 100 000 kg de
          produit). La mesure de maîtrise (un tamis) est validée en
          collectant, pendant un mois d'opération normale, les données du
          détecteur de métal en sortie de ligne, pour déterminer la taille
          réelle des fragments qui passent le tamis.
        </li>
      </ul>
      <a className="source-link" href="/sources/CXG_069f.pdf#page=13" target="_blank" rel="noopener noreferrer">
        Voir Annexe I, Exemples 3 (p. 13) et 4 (p. 14) dans le PDF ↗
      </a>
      <h3>Quand c'est adapté</h3>
      <p>
        C'est l'approche à privilégier quand aucune documentation ni essai en
        laboratoire ne peut refléter fidèlement la variabilité réelle d'un
        procédé en production. C'est aussi, comme souligné en Partie 1,
        l'approche la plus exigeante en temps et en organisation — ce qui
        explique pourquoi elle est le plus souvent la première sacrifiée en
        pratique.
      </p>
      <ScenarioCard title="Cas d'application terrain">
        Un traiteur de plats cuisinés doit valider son étape de
        refroidissement rapide (liaison froide) après cuisson, pour maîtriser
        la reprise de croissance des pathogènes sporulés (ex.{" "}
        <em>Clostridium perfringens</em>). Pendant quatre semaines de
        production normale, incluant une période de forte activité
        (réceptions de fin d'année), des sondes de température enregistrent
        la courbe de refroidissement de plusieurs lots représentatifs des
        formats et volumes produits. Les données sont ensuite comparées au
        repère réglementaire français du refroidissement rapide (63 °C à
        10 °C en moins de deux heures — arrêté du 21 décembre 2009, à
        vérifier pour l'article exact applicable au produit du client). Le
        consultant s'assure que le plan de prélèvement couvre bien
        les cas les plus défavorables (plus gros volumes, bacs les plus
        remplis), pas seulement les conditions moyennes.
      </ScenarioCard>
      <Aside>
        C'est le bloc identifié comme prioritaire en Partie 3 (bloc 2) :
        aider à cadrer la durée, le plan d'échantillonnage et les outils de
        collecte (formulaires, checklists) pour que cette approche redevienne
        réalisable.
      </Aside>

      <h2 id="approche-4">Approche 4 — Modélisation mathématique</h2>
      <h3>Ce que dit le Codex</h3>
      <p>
        La modélisation mathématique intègre par voie mathématique des
        données scientifiques sur la manière dont certains facteurs
        affectent la capacité d'une mesure de maîtrise à atteindre le
        résultat de sécurité sanitaire visé. Le texte cite explicitement deux
        familles de modèles largement utilisées par l'industrie : les
        modèles de croissance de pathogènes (impact du pH, de l'activité de
        l'eau) et les <strong>modèles à valeur de Z</strong> pour déterminer
        des conditions alternatives de traitement thermique — ainsi que les
        modèles basés sur les risques, qui examinent l'impact d'une mesure
        tout au long de la chaîne alimentaire. Un point de rigueur essentiel
        : le modèle lui-même doit être validé pour l'application spécifique
        visée, ce qui peut nécessiter des tests supplémentaires, et la
        validation doit tenir compte des limites d'incertitude et de
        variabilité des prévisions du modèle.
      </p>
      <h3>
        Illustration — Exemple 5 : procédures d'inspection de la viande pour{" "}
        <em>Taenia saginata</em> (validation par une autorité compétente,
        Nouvelle-Zélande)
      </h3>
      <p>
        Cet exemple combine l'approche 4 avec l'approche 2. Le danger porte
        sur les kystes de <em>Taenia saginata</em> dans le bétail abattu ; le
        résultat de sécurité sanitaire requis est l'absence d'augmentation du
        niveau actuel de risque pour les consommateurs (1,1 cas d'infection
        par an dans la population totale). Des essais expérimentaux
        déterminent les taux de non-détection de l'inspection post-mortem
        traditionnelle et d'une nouvelle procédure allégée ; la modélisation
        mathématique traduit ensuite ces taux en impact réel sur le niveau de
        protection des consommateurs, sous forme de distribution de
        probabilité. Le résultat modélisé (1,3 cas/an) reste compatible avec
        le critère de décision, mais le texte souligne une limite
        importante : ce résultat, obtenu dans un contexte de très faible
        prévalence en Nouvelle-Zélande, ne serait probablement pas
        transposable tel quel dans un pays à prévalence modérée à élevée.
      </p>
      <a className="source-link" href="/sources/CXG_069f.pdf#page=15" target="_blank" rel="noopener noreferrer">
        Voir Annexe I, Exemple 5 dans le PDF (p. 15–16) ↗
      </a>
      <h3>Quand c'est adapté</h3>
      <p>
        Cette approche est puissante pour explorer des scénarios (nouvelles
        conditions de traitement, nouveau dispositif) sans avoir à tester
        exhaustivement chaque combinaison en conditions réelles. Mais elle
        repose entièrement sur la qualité et la traçabilité des données
        d'entrée du modèle — un modèle mal validé, ou appliqué hors de son
        contexte d'origine (comme le rappelle la mise en garde sur la
        Nouvelle-Zélande), produit une fausse assurance.
      </p>
      <ScenarioCard title="Cas d'application terrain">
        Une conserverie de légumes change de format de boîte (plus grand
        diamètre) pour un nouveau client et doit revalider son barème de
        stérilisation. Plutôt que de multiplier les essais en autoclave
        industriel — longs et coûteux en produit — l'entreprise s'appuie sur
        un modèle de destruction thermique (valeur F0) pour recalculer le
        temps de traitement nécessaire à ce nouveau format, à partir des
        courbes de pénétration de chaleur mesurées avec des capteurs
        introduits au <strong>point le plus froid</strong> de boîtes témoins
        (localisé au préalable, car il dépend de la texture du produit et du
        format), dans les conditions de charge d'autoclave les plus
        défavorables. Le modèle est ensuite vérifié par un nombre limité
        d'essais réels avant validation définitive — exactement la logique
        de l'Exemple 5 (essais + modélisation combinés), transposée à un
        contexte de stérilisation encadré par la réglementation spécifique
        aux traitements appertisés.
      </ScenarioCard>
      <Aside tone="warning">
        C'est l'approche la plus directement concernée par le garde-fou de la
        Partie 1 (§4) et développée en Partie 3, bloc 3 : un LLM peut aider à
        écrire et expliquer le code d'un modèle publié (ex. valeur de Z),
        jamais à fournir de sa propre initiative les constantes empiriques
        qui l'alimentent.
      </Aside>

      <h2 id="approche-5">Approche 5 — Études (surveys)</h2>
      <h3>Ce que dit le Codex</h3>
      <p>
        Le terme employé par le texte anglais est <em>surveys</em> — des
        enquêtes statistiquement valides, pas des « études » au sens large.
        Elles servent à démontrer le niveau de maîtrise attendu d'un danger,
        souvent en parallèle d'autres approches, et exigent des procédures
        garantissant la validité statistique et la précision des données
        recueillies.
      </p>
      <h3>Illustration — Exemple 6 : étiquette de manipulation sans risque des œufs en coquille</h3>
      <p>
        Le danger est <em>Salmonella</em> Enteritidis dans les œufs en
        coquille ; la mesure de maîtrise est une étiquette de consigne
        (réfrigération à 5 °C et cuisson jusqu'à ce que le jaune soit ferme),
        l'une des mesures de maîtrise réparties le long de la chaîne, de la
        production primaire à la consommation. La validation ne porte pas
        sur l'efficacité microbiologique de la consigne elle-même (déjà
        établie par ailleurs) mais sur sa{" "}
        <strong>compréhension et son adoption réelle par les consommateurs</strong>{" "}
        : une étude statistiquement représentative mesure quel pourcentage de
        la population comprend l'étiquette et déclare être prêt à changer ses
        pratiques en conséquence. Le critère de décision est atteint : plus
        de 25 % de la population déclare vouloir suivre les instructions, ce
        qui suffit, selon l'évaluation des risques associée, à réduire
        fortement le nombre de cas.
      </p>
      <a className="source-link" href="/sources/CXG_069f.pdf#page=16" target="_blank" rel="noopener noreferrer">
        Voir Annexe I, Exemple 6 dans le PDF (p. 16–17) ↗
      </a>
      <h3>Quand c'est adapté</h3>
      <p>
        Cette approche est la seule des cinq à porter sur un comportement
        humain plutôt que sur un paramètre physico-chimique ou
        microbiologique — elle s'impose dès que la mesure de maîtrise dépend
        de l'action d'un tiers (consommateur, opérateur en aval) plutôt que
        d'un paramètre de procédé maîtrisable en interne.
      </p>
      <ScenarioCard title="Cas d'application terrain">
        Un fabricant de plats cuisinés réfrigérés ajoute une consigne de
        réchauffage sur son emballage (« à consommer chaud, réchauffer à
        cœur avant consommation ») en{" "}
        <strong>complément</strong> de sa maîtrise interne de{" "}
        <em>Listeria monocytogenes</em> — jamais à sa place : le fabricant
        reste tenu, indépendamment de cette consigne, de respecter le
        critère microbiologique applicable sur toute la durée de vie du
        produit (une exigence encore renforcée par le règlement (UE)
        2024/2895, dont la règle par défaut est l'absence dans 25 g en
        l'absence de validation robuste). Pour valider l'étiquette comme
        mesure de maîtrise complémentaire réelle, l'entreprise fait réaliser
        une enquête représentative auprès de consommateurs de la cible
        visée, pour mesurer combien comprennent la consigne et déclarent
        l'appliquer systématiquement. Comme dans l'Exemple 6, ce n'est pas
        l'efficacité microbiologique du réchauffage qui est en question
        (déjà établie), mais l'adoption réelle de la consigne par ceux qui
        la lisent.
      </ScenarioCard>
      <Aside>
        Peu couverte par l'assistance IA envisagée en Partie 3 dans ce guide
        (hors périmètre du bloc collecte de données/modélisation), mais
        mentionnée pour la complétude des cinq approches.
      </Aside>

      <h2 id="choix-approche">Ce qui détermine le choix d'une approche</h2>
      <p>
        Le Codex ne classe pas les cinq approches, mais la Section V donne
        des critères concrets de priorisation qui, en pratique, orientent le
        choix :
      </p>
      <ul>
        <li>
          <strong>L'importance de la mesure</strong> dans l'obtention du
          résultat de sécurité sanitaire visé.
        </li>
        <li>
          <strong>Les antécédents disponibles et leur fiabilité actuelle</strong>{" "}
          — plus les antécédents sont solides et récents, plus l'approche 1
          devient suffisante ; plus ils sont absents ou datés, plus les
          approches 2 à 4 s'imposent.
        </li>
        <li>
          <strong>La capacité de surveillance et de vérification</strong> de
          la mesure une fois mise en œuvre — certaines mesures (dispositifs
          d'étanchéité, procédures de lavage des mains) ne se prêtent pas
          facilement à une validation quantitative et ne peuvent pas toujours
          être priorisées.
        </li>
        <li>
          <strong>La faisabilité scientifique et technique</strong>, en
          particulier la variabilité de la mesure, du produit et des dangers
          en cause.
        </li>
        <li>
          <strong>Les ressources disponibles</strong> — un facteur limitant
          explicitement reconnu par le texte lui-même (Section V), et le
          point de départ direct de la Partie 3 de ce guide.
        </li>
      </ul>
      <p>
        C'est cette dernière contrainte — les ressources, en particulier le
        temps de collecte de données — que la Partie 3 aborde en premier,
        avant même la modélisation.
      </p>

      <p className="note-box">
        Sections/Annexes citées : VI (les 5 approches), Annexe I Exemples 1 à
        6, V (critères de priorisation). Voir la page{" "}
        <Link to="/sources">Sources</Link> pour ouvrir le document complet et
        les liens directs de chaque exemple.
      </p>
    </article>
  );
}
