# Partie 3 — Avec quoi (orientation, pas un produit fini)

*Premier jet — à valider avant le scaffolding technique (React/Vite). Sources : CAC/GL 69-2008, sections déjà citées en Parties 1 et 2. Cette partie est volontairement présentée comme piste et démonstration, jamais comme un outil clé en main.*

---

## Introduction

Les Parties 1 et 2 ont posé le cadre : ce que le Codex demande réellement, et comment les cinq approches se déclinent concrètement. Cette Partie 3 revient sur une question pratique : **à quel endroit précis, dans cette démarche, un LLM apporte-t-il une aide réelle — et où s'arrête cette aide.**

Quatre blocs sont traités ici, dans l'ordre où ils interviennent dans une démarche de validation : structurer, collecter, modéliser/coder, et — à chaque étape — respecter le garde-fou. Aucun de ces blocs n'est un module logiciel fini : ce sont des pistes, illustrées par des exemples concrets, que l'outillage réel (V2, cf. PRD §7) développera le moment venu.

---

## Bloc 1 — Structuration méthodologique

Les étapes préalables à la validation (Section V) et le processus de validation lui-même (Section VI) suivent une séquence précise :

```
Danger(s) à maîtriser
   → Résultat de sécurité sanitaire requis
   → Identification et priorisation des mesures à valider
   → Choix de l'approche (ou combinaison d'approches)
   → Définition des paramètres et critères de décision
   → Réunion de la documentation / réalisation des études
   → Analyse des résultats
   → Documentation et conclusion (+ révision si besoin)
```

C'est exactement la séquence suivie par les six exemples de l'Annexe I (Partie 2) — chacun répète scrupuleusement ces mêmes étapes, dans le même ordre, quel que soit le danger ou l'approche retenue.

Un LLM est bien adapté pour transformer cette séquence en **trame de travail réutilisable** : poser les bonnes questions dans le bon ordre pour un dossier donné (quel danger ? quel résultat de sécurité sanitaire attendu ? quelle mesure ? quelle approche ?), aider à rédiger chaque section du dossier de validation dans un vocabulaire fidèle au Codex, et signaler les étapes qu'un dossier a sautées. Ce n'est rien de plus qu'une check-list intelligente et un assistant rédactionnel — mais c'est déjà ce qui manque le plus souvent dans les dossiers actuels, qui partent d'un gabarit générique plutôt que de cette séquence.

*Limite : structurer n'est pas remplir. Le LLM organise le raisonnement ; il ne produit aucune des données qui alimentent chaque étape.*

---

## Bloc 2 — Assistance à la collecte de données

C'est le bloc identifié comme prioritaire dans la discussion qui a précédé ce guide, et il intervient **avant** la modélisation — pas après.

Le constat de la Partie 1 (§2) et de la Partie 2 (approche 3) est concret : la collecte de données en conditions opérationnelles normales — trois à six semaines de production à pleine échelle selon le Codex (Section VI) — est la démarche la plus fréquemment sacrifiée, parce qu'elle est longue, mobilise du personnel et produit souvent des données partielles ou mal exploitables.

Ce qu'un LLM peut apporter concrètement à ce stade :

- **Déterminer quelles données collecter** — à partir du danger et du résultat de sécurité sanitaire requis, aider à lister les paramètres biologiques, chimiques ou physiques réellement pertinents (comme dans l'Exemple 4 de l'Annexe I, où seule la taille des fragments métalliques rejetés par le détecteur compte).
- **Cadrer la durée et les conditions de collecte** — rappeler la fourchette du Codex (trois à six semaines), et aider à identifier les périodes représentatives à couvrir (y compris les pointes d'activité, mentionnées explicitement par le texte).
- **Aider à concevoir un plan d'échantillonnage statistiquement défendable** — proposer une trame de plan d'échantillonnage (fréquence, points de prélèvement, taille d'échantillon) cohérente avec les analyses statistiques qui seront nécessaires ensuite, sans se substituer à un statisticien pour les cas complexes.
- **Produire des outils pratiques de collecte** — formulaires structurés, checklists de terrain, grilles de saisie — pour que la collecte, une fois lancée, reste fluide et complète plutôt que d'être abandonnée à mi-parcours.

*Limite : le LLM aide à concevoir le protocole de collecte ; il ne collecte, ne mesure, ni n'invente aucune donnée. Les résultats viennent uniquement du terrain.*

---

## Bloc 3 — Aide à la modélisation et au code

Ce bloc s'appuie sur l'exemple explicitement cité par le Codex en Section VI comme illustration de modélisation mathématique : le **modèle à valeur de Z**, utilisé pour déterminer des conditions alternatives de traitement thermique.

Le principe du modèle est simple à énoncer, mais son implémentation correcte (gestion des unités, des échelles logarithmiques, de la référence de température) est une source d'erreurs fréquente pour un non-spécialiste. C'est exactement le type de tâche où un LLM peut aider à écrire et à expliquer du code — sans jamais fournir les constantes empiriques qui rendent le calcul valide pour *un* couple produit/pathogène donné.

Extrait de code commenté, à titre d'illustration pédagogique uniquement (pas un module exécutable intégré au guide) :

```python
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
```

Ce que le LLM fait ici : structurer la fonction, nommer clairement les paramètres, écrire les commentaires qui relient chaque ligne à la définition du Codex, signaler explicitement où les constantes doivent être injectées par l'utilisateur. Ce qu'il ne fait jamais : proposer une valeur pour `D_ref` ou `z_value` d'un pathogène donné, même si on le lui demande — ces valeurs viennent uniquement d'une source citée par l'utilisateur.

*Limite, comme rappelé en Partie 2 (approche 4) : le modèle lui-même doit être validé pour l'application spécifique visée, et la validation doit tenir compte des marges d'incertitude — un code correct ne dispense jamais de cette étape.*

---

## Bloc 4 — Garde-fous (rappel explicite)

Ce guide s'est ouvert sur ce principe (Partie 1, §4) ; il se referme dessus, pour qu'aucune ambiguïté ne subsiste après la lecture des trois blocs précédents :

- **Le LLM ne répond jamais de mémoire à une question quantitative de sécurité alimentaire.** Ni une D-value, ni une z-value, ni un seuil réglementaire, ni un taux de réduction — ces valeurs viennent toujours d'une source apportée par l'utilisateur.
- **Structurer, orienter, coder — jamais halluciner une donnée scientifique.** Les trois blocs de cette partie (structuration, collecte, modélisation) illustrent une assistance méthodologique et rédactionnelle, pas une autorité scientifique.
- **Aucun de ces blocs n'est un produit fini.** Ce sont des démonstrations destinées à montrer où l'assistance IA a du sens dans la démarche de validation — pas des modules intégrés livrés avec ce guide. L'outillage réel, s'il voit le jour, correspond à la V2 (PRD §7), une fois le besoin validé par la diffusion de ce guide.

---

*Fin du premier jet de la Partie 3. Blocs couverts : structuration méthodologique, assistance à la collecte de données (priorisé), aide à la modélisation/code (extrait commenté, non exécutable), garde-fous. Contenu des trois parties (1, 2, 3) désormais complet — à valider avant le scaffolding technique React/Vite (Étape 4 du plan).*
