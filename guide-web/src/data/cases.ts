export interface RichCase {
  id: number;
  approche: string;
  approcheNum: number;
  label: string;
  type: "officiel" | "terrain";
  danger: string;
  mesure: string;
  parametres: string[];
  preuves: string[];
  resultat: string;
  limites: string;
  source: string;
  leconIA: string;
}

export const cases: RichCase[] = [
  {
    id: 1, approcheNum: 1, approche: "Documentation / antécédents",
    label: "Déshydratation post-récolte — aflatoxines, fruits à coque",
    type: "officiel", danger: "Aflatoxines (Aspergillus flavus/parasiticus)",
    mesure: "Séchage contrôlé post-récolte (Aw cible ≤ 0,70)",
    parametres: ["Aw ≤ 0,70", "Humidité relative de stockage < 70 %", "Délai récolte→séchage < 24 h"],
    preuves: ["Littérature scientifique sur Aw vs croissance Aspergillus", "Historique de conformité du fournisseur", "Données surveillance lots précédents"],
    resultat: "La mesure est jugée capable si Aw maintenue sous le seuil + historique conforme.",
    limites: "Pas d'essai direct sur le lot ; dépend de la transférabilité des études citées.",
    source: "CAC/GL 69-2008, Annexe I Ex.1 + Section VI approche 1",
    leconIA: "L'IA peut retrouver et résumer la littérature, mais ne doit jamais inventer un seuil Aw.",
  },
  {
    id: 2, approcheNum: 2, approche: "Essais expérimentaux",
    label: "VTEC — fromage au lait cru à pâte dure",
    type: "officiel", danger: "E. coli vérotoxinogène (VTEC)",
    mesure: "Combinaison maturation longue + paramètres physico-chimiques (pH, Aw, sel)",
    parametres: ["pH ≤ 5,3 en 24 h", "Aw décroissante pendant affinage ≥ 60 j", "Réduction log cible ≥ 5 log"],
    preuves: ["Challenge tests en laboratoire (inoculation contrôlée)", "Réplicats statistiques, souches cocktail", "Mesures pH/Aw/température tracées"],
    resultat: "Réduction démontrée expérimentalement → mesure validée pour ce couple produit/procédé.",
    limites: "Coûteux ; résultats non transférables à un autre fromage sans ré-évaluation.",
    source: "CAC/GL 69-2008, Annexe I Ex.2 + Section VI approche 2",
    leconIA: "L'IA aide à écrire le protocole et analyser les données, pas à prédire la réduction.",
  },
  {
    id: 3, approcheNum: 3, approche: "Collecte de données opérationnelles",
    label: "SSOP nettoyage-désinfection — surfaces contact",
    type: "officiel", danger: "Contamination croisée (Listeria, Salmonella)",
    mesure: "Procédure SSOP validée par données terrain (ATP, microbiologie)",
    parametres: ["Seuil ATP < 30 RLU", "Échantillonnage 3–6 semaines", "n ≥ 30 points critiques"],
    preuves: ["Résultats ATP/microbio en conditions normales", "Tendances, taux de conformité > 95 %", "Actions correctives tracées"],
    resultat: "La SSOP est validée si les données montrent une maîtrise stable dans le temps.",
    limites: "Exige une collecte rigoureuse ; biais si échantillonnage partiel.",
    source: "CAC/GL 69-2008, Annexe I Ex.3 + Section VI approche 3",
    leconIA: "L'IA aide à définir le plan d'échantillonnage et les formulaires, pas à fabriquer des données.",
  },
  {
    id: 4, approcheNum: 3, approche: "Collecte de données opérationnelles",
    label: "Fragments métalliques — détecteur en ligne",
    type: "officiel", danger: "Corps étranger métallique",
    mesure: "Détecteur + rejet automatique, sensibilité calibrée",
    parametres: ["Billes test Fe 1,5 mm / non-Fe 2,0 mm / inox 2,5 mm", "Test début/fin lot + horaire", "Taux de rejet 100 % sur test"],
    preuves: ["Journaux de détection sur plusieurs semaines", "Tests cartes étalons tracés", "Maintenance/étalonnage documentés"],
    resultat: "Efficacité démontrée en conditions réelles de cadence et produit.",
    limites: "Valide pour ce produit/cadence uniquement ; effet produit à ré-évaluer.",
    source: "CAC/GL 69-2008, Annexe I Ex.4 + Section VI approche 3",
    leconIA: "L'IA structure le journal de bord et détecte les dérives, jamais les seuils.",
  },
  {
    id: 5, approcheNum: 4, approche: "Modélisation mathématique",
    label: "Inspection viande — Taenia saginata (modèle + essais)",
    type: "officiel", danger: "Cysticercus bovis (Taenia saginata)",
    mesure: "Procédure d'inspection post-mortem optimisée par modèle",
    parametres: ["Sensibilité d'inspection estimée", "Prévalence troupeau d'origine", "Combinaison incision/palpation ciblée"],
    preuves: ["Modèle publié + données d'abattoir", "Validation croisée avec essais (approche 2)", "Analyse de sensibilité du modèle"],
    resultat: "Le modèle montre l'équivalence de la procédure allégée pour faible prévalence.",
    limites: "Modèle valide dans son domaine ; hypothèses à documenter explicitement.",
    source: "CAC/GL 69-2008, Annexe I Ex.5 (combiné approche 2+4)",
    leconIA: "L'IA aide à coder/expliquer le modèle publié ; constantes toujours sourcées par l'utilisateur.",
  },
  {
    id: 6, approcheNum: 5, approche: "Études / Surveys",
    label: "Étiquette « manipulation sans risque » — œufs coquille",
    type: "officiel", danger: "Salmonella Enteritidis (œufs)",
    mesure: "Mention d'étiquetage + bonnes pratiques consommateur",
    parametres: ["Enquête statistiquement valide (plan, n, biais)", "Taux de compréhension ≥ seuil défini", "Comportement déclaré vs observé"],
    preuves: ["Survey représentatif consommateurs", "Analyse statistique (IC, puissance)", "Test A/B de formulations"],
    resultat: "L'allégation est validée si l'enquête montre compréhension et application.",
    limites: "« Surveys » = enquêtes statistiques, pas études au sens large ; biais déclaratif.",
    source: "CAC/GL 69-2008, Annexe I Ex.6 + Section VI approche 5",
    leconIA: "L'IA aide à rédiger le questionnaire et analyser, pas à simuler les réponses.",
  },
  {
    id: 7, approcheNum: 2, approche: "Essais expérimentaux",
    label: "Terrain — pasteurisation jus artisanal (scénario pédagogique)",
    type: "terrain", danger: "E. coli, levures d'altération",
    mesure: "Pasteurisation 72 °C / 15 s + refroidissement rapide",
    parametres: ["Couple temps/température enregistré", "Sondes étalonnées (±0,5 °C)", "Réduction cible 5 log"],
    preuves: ["Essai pilote avec laboratoire partenaire", "Courbes température/temps", "Analyses avant/après"],
    resultat: "Dossier client : barème validé pour ce jus et cet échangeur.",
    limites: "Scénario pédagogique — non officiel, à refaire pour chaque recette.",
    source: "Cas terrain fictif — usage pédagogique uniquement",
    leconIA: "Trame de dossier + checklist laboratoire fournies par l'IA.",
  },
  {
    id: 8, approcheNum: 3, approche: "Collecte de données opérationnelles",
    label: "Terrain — boulangerie, cuisson pain de mie (scénario)",
    type: "terrain", danger: "Salmonella (œufs en garniture), Bacillus cereus",
    mesure: "Cuisson à cœur ≥ 94 °C + refroidissement maîtrisé",
    parametres: ["Température à cœur sondée (n=30)", "Temps de refroidissement < 2 h (63→10 °C)", "Cartographie four"],
    preuves: ["Relevés 4 semaines, 3 équipes", "Histogrammes, capabilité", "Non-conformités + corrections"],
    resultat: "Fenêtre de cuisson validée pour ce four et ce format.",
    limites: "Scénario pédagogique ; changement de format = revalidation.",
    source: "Cas terrain fictif — usage pédagogique uniquement",
    leconIA: "Formulaire de relevés + tableau de bord générés avec l'IA.",
  },
  {
    id: 9, approcheNum: 4, approche: "Modélisation mathématique",
    label: "Terrain — traitement thermique conserve (valeur Z)",
    type: "terrain", danger: "C. botulinum (conserves peu acides)",
    mesure: "Barème stérilisation calculé par modèle Bigelow",
    parametres: ["D₁₂₁ = 0,21 min (souche de référence, à sourcer)", "z = 10 °C", "F₀ cible ≥ 3 min"],
    preuves: ["Code Python du modèle (transparence totale)", "Constantes issues de la littérature apportée par l'utilisateur", "Comparaison barème calculé vs sonde"],
    resultat: "Le modèle prédit la létalité ; la sonde confirme sur lot pilote.",
    limites: "Démonstration pédagogique : jamais utiliser des D/z inventés par un LLM.",
    source: "Modèle Bigelow (littérature) — démo Partie 3 du guide",
    leconIA: "L'IA écrit et commente le code ; l'utilisateur fournit D et z sourcés.",
  },
  {
    id: 10, approcheNum: 1, approche: "Documentation / antécédents",
    label: "Terrain — charcuterie sèche, nitrites réduits (scénario)",
    type: "terrain", danger: "C. botulinum, Listeria monocytogenes",
    mesure: "Recette + Aw/pH + fermentation contrôlée",
    parametres: ["pH ≤ 5,0 à 48 h", "Aw ≤ 0,92 en fin de séchage", "Sel nitrité + cultures starter"],
    preuves: ["Fiches fournisseurs, études publiées citées", "Historique autocontrôles", "Avis EFSA/ANSES référencés"],
    resultat: "Dossier documentaire jugé suffisant + surveillance renforcée 6 mois.",
    limites: "Scénario pédagogique ; toute dérive recette = ré-évaluation.",
    source: "Cas terrain fictif — usage pédagogique uniquement",
    leconIA: "Synthèse documentaire et matrice de traçabilité des sources.",
  },
];
