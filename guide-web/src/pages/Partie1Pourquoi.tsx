import Quote from "../components/Quote";
import Aside from "../components/Aside";
import Toc from "../components/Toc";
import Tldr from "../components/Tldr";

const tocItems = [
  { id: "ce-que-demande-le-codex", label: "1. Ce que le Codex demande réellement depuis 2008" },
  { id: "pourquoi-contourne", label: "2. Pourquoi cette exigence est trop souvent contournée" },
  { id: "pourquoi-maintenant", label: "3. Pourquoi le moment est venu d'aller plus loin" },
  { id: "garde-fou", label: "4. Le garde-fou, posé d'emblée" },
];

export default function Partie1Pourquoi() {
  return (
    <article className="article">
      <div className="page-kicker">Partie 1</div>
      <h1 className="page-title">Pourquoi</h1>
      <p className="page-lede">
        Ce que le Codex demande réellement depuis 2008, pourquoi cette
        exigence est aujourd'hui trop souvent contournée, et pourquoi le
        moment est venu d'aller plus loin.
      </p>

      <Tldr>
        <li>
          La validation s'applique à toute mesure de maîtrise — pas
          seulement aux CCP — et sa charge repose sur l'industrie, pas sur
          l'auditeur.
        </li>
        <li>
          Elle est aujourd'hui souvent contournée par manque de temps,
          d'expertise et de ressources pour la collecte de données — un
          écart que le Codex reconnaît lui-même dépasser son propre cadre.
        </li>
        <li>
          Les outils d'IA changent ce rapport coût/rigueur : ils
          structurent, orientent la collecte et aident à coder — sans
          jamais remplacer la donnée scientifique elle-même.
        </li>
      </Tldr>

      <Toc items={tocItems} />

      <h2 id="ce-que-demande-le-codex">1. Ce que le Codex demande réellement depuis 2008</h2>
      <p>
        Depuis 2008, un texte du Codex Alimentarius encadre spécifiquement un
        point que beaucoup de systèmes qualité traitent encore comme une
        formalité : la <strong>validation des mesures de maîtrise</strong>.
        Ce texte, le CAC/GL 69-2008, ne parle pas de HACCP en général — il
        parle d'un geste précis, trop souvent sauté ou fait à moitié.
      </p>
      <p>
        Première chose à corriger : ce n'est{" "}
        <strong>pas une exigence réservée aux CCP</strong>. Le champ
        d'application (Section II) est explicite :
      </p>
      <Quote source="CAC/GL 69-2008, Section II — Champ d'application">
        « Les présentes directives s'appliquent à la validation de mesures
        de maîtrise dans l'ensemble de la chaîne alimentaire. Ces directives
        visent à fournir des orientations à l'industrie et aux gouvernements
        nationaux sur la validation de mesures de maîtrise individuelles,
        d'une combinaison restreinte de mesures de maîtrise ou d'une gamme
        complète de mesures de maîtrise combinées appartenant à un système
        de maîtrise de la sécurité sanitaire des aliments (par exemple
        HACCP, BPH). »
      </Quote>
      <p>
        Une mesure de maîtrise, une combinaison de mesures, un système entier
        (HACCP ou BPH) : la validation s'applique à ce périmètre-là, pas
        seulement aux points critiques identifiés dans une analyse des
        dangers. Une procédure de nettoyage-désinfection, une étape de
        refroidissement, une consigne d'étiquetage destinée au consommateur —
        dès lors qu'elle porte le rôle de maîtriser un danger, elle relève de
        ce texte.
      </p>
      <p>
        Le même texte précise aussi qui porte la responsabilité de cet
        exercice — un point souvent flou dans l'esprit d'un opérateur qui
        pense « c'est l'auditeur qui validera » :
      </p>
      <Quote source="CAC/GL 69-2008, Section I — Introduction">
        « L'industrie est responsable de la validation des mesures de
        maîtrise, alors que les autorités compétentes s'assurent que
        l'industrie possède des systèmes de validation efficaces et
        vérifient que les mesures de maîtrise sont correctement validées. »
      </Quote>
      <p>
        Autrement dit, un auditeur — interne, de certification, ou une
        autorité compétente — ne valide pas la mesure de maîtrise à la place
        de l'entreprise. Il vérifie que l'entreprise a produit une validation
        recevable. Cette distinction change la façon dont un consultant doit
        aborder le sujet avec son client : l'objectif n'est pas de préparer
        un dossier qui « passera » l'audit, mais de construire, en amont, la
        preuve elle-même — ce que l'audit se contente ensuite de vérifier.
      </p>
      <p>
        Deuxième chose à fixer : ce que « valider » veut dire précisément. La
        Section III donne la définition officielle :
      </p>
      <Quote source="CAC/GL 69-2008, Section III — Définitions">
        <strong>Validation :</strong> obtention de preuves que les mesures de
        maîtrise permettent de contrôler le danger, à condition d'être
        correctement mises en œuvre.
      </Quote>
      <p>
        Cette définition mérite d'être lue lentement, parce qu'elle tranche
        avec la pratique courante. Valider, ce n'est pas justifier a
        posteriori une limite critique qu'on a déjà fixée. C'est{" "}
        <strong>obtenir des preuves</strong>, avant la mise en œuvre
        effective si possible, que la mesure choisie est <em>capable</em>{" "}
        d'atteindre le résultat de sécurité sanitaire requis. La Section IV
        le précise :
      </p>
      <Quote source="CAC/GL 69-2008, Section IV — Concept et nature de la validation">
        « La validation est effectuée au moment de la conception de
        nouvelles mesures de maîtrise ou d'un nouveau système de maîtrise de
        la sécurité sanitaire des aliments, ou lorsque des changements
        indiquent la nécessité de procéder à une revalidation [...]. La
        validation des mesures de maîtrise est, lorsque possible, effectuée
        avant leur mise en œuvre effective. »
      </Quote>
      <p>
        C'est là que se loge la confusion la plus fréquente sur le terrain :
        valider n'est ni surveiller, ni vérifier. Le texte prend soin de
        séparer les trois concepts (Section IV) :
      </p>
      <div className="def-grid">
        <div className="def-card">
          <div className="def-card-label">Validation</div>
          <p>
            La démonstration, <strong>en amont</strong>, que la mesure{" "}
            <em>peut</em> atteindre le résultat voulu si elle est
            correctement mise en œuvre.
          </p>
        </div>
        <div className="def-card">
          <div className="def-card-label">Surveillance</div>
          <p>
            La collecte <strong>continue</strong> de données pendant que la
            mesure fonctionne, pour confirmer qu'elle reste dans ses
            limites.
          </p>
        </div>
        <div className="def-card">
          <div className="def-card-label">Vérification</div>
          <p>
            Les contrôles <strong>a posteriori</strong> (audits, relevés
            d'enregistrements, analyses ponctuelles) qui confirment que la
            mesure a été appliquée comme prévu.
          </p>
        </div>
      </div>
      <p>
        Un plan de surveillance bien tenu et des vérifications régulières ne
        remplacent jamais une validation absente. On peut surveiller
        parfaitement une mesure qui n'a jamais été démontrée capable de
        maîtriser le danger visé — c'est exactement la situation que ce
        guide veut aider à corriger.
      </p>

      <h2 id="pourquoi-contourne">2. Pourquoi cette exigence est aujourd'hui trop souvent contournée</h2>
      <p>
        Si le texte est clair depuis 2008, pourquoi la validation reste-t-elle,
        dans la pratique, le parent pauvre des systèmes HACCP ? Le Codex
        lui-même reconnaît une partie du problème, en creux, dès la Section
        II :
      </p>
      <Quote source="CAC/GL 69-2008, Section II — Champ d'application">
        « Les outils, techniques et principes statistiques qui seraient
        utilisés pour valider les mesures de maîtrise pour la sécurité
        sanitaire des aliments spécifiques dépassent le cadre du présent
        document. »
      </Quote>
      <p>
        Le Codex fixe le cadre méthodologique — les cinq approches, les
        étapes, les critères — mais ne donne ni les outils statistiques, ni
        l'assistance pratique pour les mettre en œuvre. Sur le terrain, cet
        écart se traduit par des raccourcis bien identifiables :
      </p>
      <ul>
        <li>
          <strong>Le coût et le temps.</strong> La Section V le dit sans
          détour : « Les activités de validation peuvent exiger de
          nombreuses ressources. Des activités de validation particulières,
          telles que les essais expérimentaux, les études de capacité
          opérationnelle d'un processus, les enquêtes, la modélisation
          informatique, les échantillons de produits ou de l'environnement
          et la vérification par analyse exigent des ressources
          considérables. » Pour une PME agroalimentaire, ces ressources ne
          sont simplement pas disponibles au moment de bâtir le plan HACCP.
        </li>
        <li>
          <strong>L'expertise scientifique rare.</strong> Construire un
          modèle à valeur de Z, concevoir un essai de provocation
          microbiologique ou interpréter une distribution de probabilité
          (cf. Exemple 5 de l'Annexe I, sur <em>Taenia saginata</em>) suppose
          des compétences que peu de services qualité ont en interne, et que
          peu de consultants indépendants maîtrisent seuls.
        </li>
        <li>
          <strong>
            La collecte de données, en particulier, est le point de blocage
            le plus concret.
          </strong>{" "}
          L'approche n°3 du Codex (collecte de données en conditions
          opérationnelles normales) demande, selon le texte, de recueillir
          des données sur{" "}
          <strong>trois à six semaines de production à pleine échelle</strong>
          , en couvrant les conditions représentatives de l'opération y
          compris les périodes de pointe. C'est long, ça mobilise du
          personnel, et le résultat est souvent partiel — ce qui pousse, en
          pratique, à s'en dispenser plutôt qu'à le faire correctement.
        </li>
      </ul>
      <p>
        Le résultat le plus courant sur le terrain n'est donc pas l'absence
        totale de démarche, mais un simulacre, que la plupart des auditeurs
        reconnaissent au premier coup d'œil : reprise d'un plan HACCP
        générique d'un confrère ou d'un gabarit sectoriel, sans preuve
        scientifique réellement rattachée à <em>ce</em> produit, <em>ce</em>{" "}
        process, <em>ces</em> conditions ; barème de cuisson ou de
        refroidissement recopié d'un référentiel professionnel sans
        vérification qu'il s'applique au format ou à la recette réels ; ou
        une validation faite une fois, au démarrage de l'activité, jamais
        réexaminée malgré des changements de process qui, selon la Section
        VII, l'auraient justifié (nouvelle recette, nouvel équipement,
        changement de fournisseur de matière première). Ce n'est pas de la
        mauvaise foi — c'est un problème d'accès aux outils et au temps,
        exactement ce que le Codex laisse hors de son propre périmètre.
      </p>
      <p>
        La conséquence concrète de ce simulacre n'apparaît généralement pas
        tant que tout va bien. Elle se révèle au moment où elle compte le
        plus : un incident, un rappel produit, un contrôle officiel qui
        remonte à la cause. À ce moment-là, l'entreprise — et le consultant
        qui l'a accompagnée — doit pouvoir produire la preuve que la mesure
        de maîtrise en cause était capable, dans ces conditions précises,
        d'atteindre le résultat de sécurité sanitaire visé. Un plan HACCP
        générique, aussi bien présenté soit-il, ne constitue pas cette
        preuve. C'est un point de vulnérabilité direct pour la
        responsabilité de l'entreprise, et donc pour la valeur du conseil
        apporté.
      </p>

      <h2 id="pourquoi-maintenant">3. Pourquoi le moment est venu d'aller plus loin</h2>
      <p>
        Ce qui a changé, ce n'est pas le texte du Codex — il n'a pas bougé
        sur le fond depuis 2008. Ce qui a changé, c'est ce qu'un consultant
        ou un service qualité peut faire seul, avec les outils d'IA
        générative actuels, pour combler l'écart que le texte laisse ouvert.
      </p>
      <p>
        Un LLM ne remplace ni la donnée scientifique ni le jugement de
        l'auditeur. Mais il change trois choses concrètes dans le rapport
        coût/rigueur d'une validation :
      </p>
      <ul>
        <li>
          <strong>Structurer</strong> — transformer les étapes préalables et
          le processus de validation du Codex (Sections V et VI) en une
          trame de travail claire, applicable danger par danger, mesure par
          mesure, au lieu de partir d'une page blanche à chaque dossier.
        </li>
        <li>
          <strong>Assister la collecte de données</strong> — aider à cadrer
          un plan d'échantillonnage défendable, préparer les formulaires et
          checklists nécessaires aux trois à six semaines de collecte de
          l'approche n°3, avant même de parler de modélisation.
        </li>
        <li>
          <strong>Aider à modéliser et à coder</strong> — expliquer et aider
          à écrire le code d'un modèle scientifique publié (par exemple un
          modèle à valeur de Z pour un traitement thermique, explicitement
          cité par le Codex comme exemple de modélisation mathématique en
          Section VI), pour qu'un non-spécialiste du calcul puisse le
          comprendre et le mettre en œuvre correctement.
        </li>
      </ul>
      <p>
        C'est un changement d'accessibilité, pas un changement de nature de
        l'exigence. Ce que le Codex demande depuis 2008 reste identique ; ce
        qui devient réaliste à un coût raisonnable, pour la première fois,
        c'est de le faire correctement plutôt que de le contourner.
      </p>
      <p>
        Concrètement, pour un consultant indépendant ou un petit service
        qualité, ce que ça change ressemble à ceci :
      </p>
      <div className="compare-grid">
        <div className="compare-row">
          <div className="compare-cell compare-before">
            <div className="compare-label">Avant</div>
            <p>
              Un dossier de validation improvisé, sans trame, où chaque
              section est écrite à partir de zéro, avec le risque d'oublier
              une étape prévue par la Section VI du Codex.
            </p>
          </div>
          <div className="compare-cell compare-after">
            <div className="compare-label">Avec l'assistance IA</div>
            <p>
              Une trame conforme à la séquence officielle, générée en
              quelques minutes, qu'il reste à remplir avec les données
              réelles du dossier.
            </p>
          </div>
        </div>
        <div className="compare-row">
          <div className="compare-cell compare-before">
            <div className="compare-label">Avant</div>
            <p>
              Un plan d'échantillonnage bricolé, ou pas de plan du tout,
              faute d'accès à un statisticien pour les trois à six semaines
              de collecte de l'approche n°3.
            </p>
          </div>
          <div className="compare-cell compare-after">
            <div className="compare-label">Avec l'assistance IA</div>
            <p>
              Un protocole d'échantillonnage défendable — fréquence, points
              de prélèvement, taille d'échantillon — cadré en amont de la
              collecte, pas improvisé pendant.
            </p>
          </div>
        </div>
        <div className="compare-row">
          <div className="compare-cell compare-before">
            <div className="compare-label">Avant</div>
            <p>
              Un modèle mathématique (valeur de Z, croissance de pathogènes)
              hors de portée d'un non-spécialiste du calcul, donc simplement
              écarté au profit d'une approximation.
            </p>
          </div>
          <div className="compare-cell compare-after">
            <div className="compare-label">Avec l'assistance IA</div>
            <p>
              Un code lisible, commenté et expliqué, qui rend le modèle
              vérifiable par quelqu'un qui n'est pas statisticien — à
              condition que les constantes scientifiques restent, elles,
              apportées par l'utilisateur (cf. §4).
            </p>
          </div>
        </div>
      </div>

      <h2 id="garde-fou">4. Le garde-fou, posé d'emblée</h2>
      <p>
        Ce point doit être clair avant toute autre chose, parce qu'il
        conditionne tout ce qui suit dans ce guide :{" "}
        <strong>
          un LLM générique est dangereux s'il est utilisé pour répondre
          directement à une question scientifique quantitative de sécurité
          alimentaire.
        </strong>
      </p>
      <p>
        Une D-value, une z-value, une réduction logarithmique, une courbe de
        survie microbienne — si un modèle de langage restitue ces valeurs
        « de mémoire », sans source, le risque n'est pas une approximation
        académique : c'est une donnée fausse intégrée dans un dossier qui a
        un impact réel sur la sécurité alimentaire, potentiellement invisible
        jusqu'à ce qu'il soit trop tard.
      </p>
      <Aside tone="warning">
        Le principe qui gouverne ce guide, et tout outil qui pourrait en
        découler, est simple et non négociable : l'IA structure, oriente la
        collecte de données, aide à écrire et à comprendre le code d'un
        modèle — elle n'invente jamais une constante ou une donnée
        scientifique de sécurité alimentaire. Les valeurs numériques qui
        entrent dans une validation viennent toujours d'une source apportée
        par l'utilisateur : documentation scientifique publiée, essai
        expérimental réalisé, donnée collectée sur le terrain.
      </Aside>

      <p className="note-box">
        Sections Codex citées : I (introduction, répartition des rôles), II
        (champ d'application), III (définition de Validation), IV (concept
        et nature de la validation, distinction
        validation/surveillance/vérification), V (étapes préalables,
        ressources), VI (les 5 approches, mention du modèle à valeur de Z),
        VII (nécessité de revalidation, mentionnée en creux).
      </p>
    </article>
  );
}
