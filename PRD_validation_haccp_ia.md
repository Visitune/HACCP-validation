# PRD — Guide d'orientation méthodologique IA pour la validation des mesures de maîtrise (HACCP / CAC/GL 69-2008)

**Version :** 0.4 (draft de travail — changement de forme du produit)
**Auteur :** [Consultant / auditeur food safety]
**Statut :** Discussion — à affiner
**Sources officielles disponibles :** CAC/GL 69-2008 (FR — CXG_069f, EN — CXG_069e, cohérence vérifiée) ; CXC 1-1969 révisé 2023 (General Principles of Food Hygiene).

---

## 0. Changement de forme (v0.3 → v0.4)

Le produit n'est plus d'abord conçu comme un outil logiciel fini (wizard + calculateurs + export). C'est d'abord un **guide d'orientation en trois parties** :

1. **Pourquoi** — l'argumentaire : pourquoi la validation des mesures de maîtrise est aujourd'hui trop souvent faite de façon approximative, et pourquoi c'est le bon moment pour aller plus loin, avec des références précises et fidèles au Codex.
2. **Comment (illustré)** — les 5 approches officielles de validation, chacune éclairée par un ou plusieurs des 6 exemples réels de l'Annexe I du CAC/GL 69-2008, expliqués de façon technique et pédagogique.
3. **Avec quoi** — une orientation sur ce que l'IA/LLM peut apporter à chaque étape de la démarche (structuration, aide à la collecte de données, aide à la modélisation/au code), présentée comme piste et démonstration, **pas comme un produit fini**.

Les briques logicielles envisagées précédemment (assistant de cadrage, calculateurs Python, générateur de dossier) ne disparaissent pas : elles deviennent des **illustrations concrètes dans la Partie 3**, pas le livrable central du V1.

## 1. Vision

Faire comprendre — d'abord à des pairs consultants/auditeurs, puis plus largement — pourquoi la validation des mesures de maîtrise telle que pratiquée aujourd'hui s'écarte souvent de ce que le Codex demande réellement depuis 2008, et montrer concrètement comment les outils d'IA actuels permettent, pour la première fois, de la pratiquer correctement à un coût et un effort raisonnables — sans jamais transformer l'IA en oracle scientifique.

## 2. Constat de départ

- CAC/GL 69-2008 s'applique à la validation de mesures de maîtrise individuelles, combinées, ou de systèmes complets (HACCP, GHP/BPH) — Section II, confirmé dans les deux langues.
- Le texte lui-même reconnaît sa propre limite : *« Les outils, techniques et principes statistiques qui seraient utilisés pour valider les mesures de maîtrise […] dépassent le cadre du présent document. »* Le Codex donne le cadre méthodologique ; il ne fournit ni les outils statistiques, ni l'assistance pratique pour les mettre en œuvre. C'est exactement l'écart que ce guide — puis l'outillage qui en découlera — doit combler.
- **Constat métier central** : la validation des mesures de maîtrise est très souvent traitée de façon approximative en pratique — reprise d'un plan générique, absence de preuve scientifique actualisée, pas de retour réel à la méthodologie officielle. Une raison fréquente et concrète : la collecte de données (approche n°3, cf. §5.1) est longue, coûteuse et souvent très partielle dans les entreprises, ce qui pousse à s'en dispenser plutôt qu'à la faire correctement.
- Les LLM génériques sont dangereux s'ils sont utilisés pour "répondre" directement à des questions scientifiques quantitatives (D-value, z-value, réduction log, courbes de survie) : risque d'hallucination sur des données qui, si elles sont fausses, ont un impact réel sur la sécurité alimentaire. Le guide doit être aussi clair sur cette limite que sur les opportunités.

## 3. Structure du contenu

### Partie 1 — Pourquoi

**Objectif :** convaincre et cadrer, sans jargon inutile, en s'appuyant sur des citations et références précises au texte officiel (pas des approximations).

Points à couvrir :
- Ce que le Codex demande *réellement* depuis 2008 — et pourquoi ce n'est pas réservé aux CCP (rappel Section II, définition de « Validation » Section III, Section IV sur la nature de la validation).
- Pourquoi cette exigence est aujourd'hui trop souvent contournée en pratique : coût, temps, expertise scientifique rare, collecte de données partielle.
- Pourquoi le moment est venu d'aller plus loin : les LLM et les outils d'IA peuvent désormais assister — pas remplacer — la collecte d'information, la structuration méthodologique, la modélisation et l'écriture de code, ce qui change radicalement le rapport coût/rigueur pour un consultant ou un service qualité.
- Poser d'emblée le garde-fou central du guide : l'IA structure et outille, elle n'invente jamais une donnée scientifique de sécurité alimentaire (cf. §6).

### Partie 2 — Comment (illustré)

**Objectif :** rendre concrètes et compréhensibles les 5 approches officielles, en s'appuyant sur les 6 exemples réels de l'Annexe I — pas des cas inventés.

| Approche officielle (Section VI) | Exemple(s) officiel(s) associé(s) (Annexe I) |
|---|---|
| 1. Renvoi à la documentation scientifique/technique, validations antérieures, antécédents | Exemple 1 — Déshydratation post-récolte / aflatoxines dans les fruits à coque |
| 2. Essais scientifiques expérimentaux valides | Exemple 2 — VTEC dans le fromage au lait cru à pâte dure |
| 3. Collecte de données en conditions opérationnelles normales | Exemples 3 et 4 — Protocoles de nettoyage-désinfection (SSOP) ; maîtrise des fragments métalliques |
| 4. Modélisation mathématique | Exemple 5 (combiné à l'approche 2) — Procédures d'inspection de la viande pour *Taenia saginata* |
| 5. Études *(« Surveys » en anglais — enquêtes statistiquement valides, pas "études" au sens large)* | Exemple 6 — Étiquette de manipulation sans risque des œufs en coquille |

Chaque approche doit être présentée avec :
- sa définition officielle (paraphrasée, fidèle, sourcée) ;
- son exemple associé, reformulé pédagogiquement (pas de reproduction verbatim du texte Codex) ;
- ce qui la rend adaptée ou non à une situation donnée (cf. critères de priorisation, Section V du texte) ;
- une transition explicite vers la Partie 3 : *« voici où et comment l'IA peut vous assister sur ce type d'approche »*.

### Partie 3 — Avec quoi (orientation, pas un produit fini)

**Objectif :** montrer concrètement, sans sur-promettre, ce que l'IA/LLM peut apporter à chaque étape — en pistes et démonstrations, pas en produit clé en main.

Blocs à couvrir, chacun avec des exemples concrets et, si utile, une démonstration légère (pas un module complet) :

1. **Structuration méthodologique** — reprendre les étapes préalables (danger → résultat de sécurité sanitaire requis → priorisation des mesures) et le processus de validation (approche → paramètres/critères → documentation → analyse → conclusion) sous forme de guide interactif ou de trame réutilisable.
2. **Assistance à la collecte de données** *(nouveau bloc, priorité identifiée dans la discussion)* — avant même de modéliser : aider à déterminer quelles données collecter, sur quelle durée (le texte cite 3 à 6 semaines pour l'approche 3), avec quel plan d'échantillonnage, et quels outils pratiques existent pour fluidifier une collecte souvent lente et partielle en entreprise (formulaires structurés, checklists, aide à la définition d'un protocole d'échantillonnage statistiquement défendable).
3. **Aide à la modélisation et au code** — montrer, sur l'exemple illustratif du traitement thermique (modèle à valeur de Z, explicitement cité par le Codex comme exemple de modélisation mathématique), comment un LLM peut aider à écrire et expliquer le code d'un modèle scientifique publié — sans jamais inventer les constantes empiriques (D-value, z-value), qui doivent toujours venir d'une source apportée par l'utilisateur.
4. **Garde-fous** — rappel explicite, à cet endroit précis du guide, de ce que l'IA ne doit jamais faire (répondre de mémoire à une question quantitative de sécurité alimentaire), pour que la partie "outils" ne laisse aucune ambiguïté.

## 4. Utilisateurs cibles

- **Persona principal (V1) :** l'auteur lui-même, consultant/auditeur indépendant en sécurité des aliments, Europe — le guide sert d'abord à clarifier et structurer sa propre pensée/pratique, et à tester le message.
- **Persona cible (diffusion) :** consultants et auditeurs indépendants ou en cabinet, Europe principalement — le guide sert de contenu de positionnement/thought leadership avant tout produit logiciel.
- L'outillage logiciel (V2+, cf. §7) vise ensuite cette même communauté, une fois le besoin validé par la diffusion du guide.

## 5. Éléments méthodologiques de référence (issus du texte officiel)

### 5.1 Les 5 approches de validation (Section VI, non hiérarchisées, combinables)

1. Renvoi à la documentation scientifique/technique, validations antérieures ou antécédents connus.
2. Essais scientifiques expérimentaux valides (challenge tests, essais pilotes, avec attention à la pertinence des micro-organismes de substitut et aux marges de sécurité pour l'incertitude/variabilité).
3. Collecte de données en conditions opérationnelles normales de production (3 à 6 semaines de production à pleine échelle, plan d'échantillonnage approprié).
4. Modélisation mathématique (modèles de croissance de pathogènes, modèles à valeur de Z pour le traitement thermique, modèles basés sur les risques) — le modèle lui-même doit être validé pour l'application spécifique.
5. Études/enquêtes statistiquement valides (ex. compréhension d'un étiquetage par les consommateurs).

### 5.2 Étapes préalables à la validation (Section V)

Danger(s) à maîtriser → résultat de sécurité sanitaire requis → identification et priorisation des mesures à valider (importance, historique/antécédents et leur fiabilité actuelle, capacité de surveillance/vérification, faisabilité scientifique/technique, ressources disponibles).

### 5.3 Processus de validation (Section VI)

Décider de l'approche/combinaison → définir paramètres et critères de décision (tenant compte de l'incertitude/variabilité) → réunir la documentation/réaliser les études → analyser les résultats → documenter et réviser.

### 5.4 Déclencheurs de revalidation (Section VII)

Échec du système (écart sans cause identifiée, analyse de danger initiale inadéquate) ; changements du processus (nouvelle mesure, technologie, équipement, formulation, paramètres) ; nouvelles informations scientifiques ou réglementaires (nouvelle souche, nouvelles données épidémiologiques, danger émergent, nouveau résultat de sécurité sanitaire requis).

## 6. Principes directeurs (non négociables, valables pour le guide comme pour l'outillage futur)

1. Le contenu du guide et tout outil qui en découle doivent rester **strictement fidèles au texte officiel** — vocabulaire, structure, exemples.
2. **Le LLM ne "répond" jamais à une question scientifique quantitative de sécurité alimentaire de mémoire.** Il structure, oriente la collecte de données, aide à coder — les valeurs numériques viennent toujours de sources apportées par l'utilisateur.
3. Aucune promesse de "produit fini" prématurée : la Partie 3 doit être présentée explicitement comme orientation/démonstration.
4. Traçabilité : toute affirmation scientifique dans le guide doit être rattachée à sa source (Codex ou littérature citée), pas de paraphrase qui dérive du sens original.

## 7. Roadmap indicative

1. **V1 — Le guide** (contenu, Parties 1-2-3), délivré via une interface web (React/Vite envisagé), avec les démonstrations légères de la Partie 3 intégrées comme illustrations, pas comme modules produit.
2. **V2 — Outillage réel**, une fois le besoin validé par la diffusion du guide : assistant de cadrage interactif, assistance structurée à la collecte de données, calculateurs scientifiques déterministes (à commencer par le modèle à valeur de Z), gestion de sources, génération de dossier exportable.
3. **V3 — Commercialisation**, si le besoin est confirmé : multi-clients, dossiers-types sectoriels, suivi des déclencheurs de revalidation.

## 8. Risques & mitigations

| Risque | Mitigation |
|---|---|
| Le guide sur-promet ce que l'IA peut faire | Chaque bloc de la Partie 3 rappelle explicitement les garde-fous (§6) ; aucune affirmation "l'IA valide pour vous" |
| Dérive de fidélité au texte Codex au fil des rédactions successives | Toute affirmation méthodologique tracée à la section exacte du texte officiel (FR/EN vérifiés) |
| Confusion entre le guide (contenu) et un outil (produit) chez le lecteur | Structure éditoriale explicite en 3 parties, avec la Partie 3 clairement labellisée "orientation, pas un produit fini" |
| Investissement dans l'outillage (V2) avant validation du besoin par le marché | Séquencement clair : guide d'abord, outillage ensuite (§7) |

## 9. Décisions prises (issues de la discussion)

- Le produit V1 est un **guide d'orientation en 3 parties** (Pourquoi / Comment illustré / Avec quoi), pas un outil logiciel fini.
- Les 6 exemples officiels de l'Annexe I servent de matériel pédagogique central de la Partie 2, mappés aux 5 approches officielles.
- Un nouveau bloc fonctionnel est identifié comme prioritaire dans la Partie 3 : l'**assistance à la collecte de données**, en amont de la modélisation.
- L'outillage logiciel détaillé en v0.2/v0.3 (assistant de cadrage, calculateurs, générateur de dossier) devient la matière de la V2, pas du V1.
- Les textes officiels FR et EN sont en main et cohérents entre eux ; le vocabulaire du guide peut être figé.

## 10. Questions ouvertes restantes

1. Le guide doit-il être un document consultable linéairement (type long-form web/PDF), ou une expérience web guidée (navigation par partie/approche, ex. React) dès le V1 ?
2. Quel niveau de démonstration technique dans la Partie 3 pour le V1 : uniquement des extraits de code commentés (lecture), ou un vrai bout de calculateur exécutable (ex. modèle à valeur de Z) intégré à titre d'illustration ?
3. Voulez-vous que je rédige maintenant un premier jet de la Partie 1 ("Pourquoi"), pour valider le ton et le niveau de précision avant d'attaquer la Partie 2 ?

---

*Document de travail — à itérer au fil des échanges.*
