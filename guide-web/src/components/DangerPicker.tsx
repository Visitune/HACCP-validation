import { useState, type ComponentType } from "react";
import { ChartIcon, ClipboardIcon, DocumentIcon, FlaskIcon } from "./DangerPickerIcons";
import "./DangerPicker.css";

interface Preset {
  id: string;
  label: string;
  icon: ComponentType;
  danger: string;
  produit: string;
  mesure: string;
  approcheNum: number;
  approcheLabel: string;
  trame: string;
}

const PRESETS: Preset[] = [
  {
    id: "aflatoxines",
    label: "Aflatoxines · fruits à coque",
    icon: DocumentIcon,
    danger: "Aspergillus spp. producteur d'aflatoxines",
    produit: "Fruits à coque après récolte",
    mesure: "Déshydratation post-récolte",
    approcheNum: 1,
    approcheLabel: "Documentation / antécédents",
    trame: `1. Étapes préalables
   a. Danger : Aspergillus spp. producteur d'aflatoxines [à confirmer]
   b. Résultat de sécurité sanitaire requis : [seuil réglementaire du
      marché visé, à vérifier — ne pas supposer une valeur]
   c. Mesure de maîtrise à valider : déshydratation post-récolte

2. Approche suggérée : Documentation / antécédents (Approche 1)
   — pertinente si une référence scientifique fiable couvre ce couple
   danger/produit dans des conditions comparables (cf. Partie 2, Approche 1)

3. Paramètres et critères de décision : [activité de l'eau cible,
   délai de déshydratation, source scientifique précise]

4. Documentation à réunir : [références scientifiques + mesures
   d'activité de l'eau chez le client]

5-6. Analyse, documentation et conclusion : [à conduire une fois
   les données réunies]`,
  },
  {
    id: "listeria",
    label: "Listeria · saucisson sec",
    icon: FlaskIcon,
    danger: "Listeria monocytogenes",
    produit: "Saucisson sec, recette propre à l'entreprise",
    mesure: "Affinage (pH, activité de l'eau, durée)",
    approcheNum: 2,
    approcheLabel: "Essais scientifiques expérimentaux",
    trame: `1. Étapes préalables
   a. Danger : Listeria monocytogenes [à confirmer]
   b. Résultat de sécurité sanitaire requis : [critère réglementaire
      applicable, ex. absence dans 25 g — à vérifier]
   c. Mesure de maîtrise à valider : affinage (pH / aw / durée)

2. Approche suggérée : Essais expérimentaux (Approche 2)
   — aucune documentation ne couvre cette recette/diamètre/durée
   précis (cf. Partie 2, Approche 2)

3. Paramètres et critères de décision : [souches de substitut,
   paliers de mesure, marge de sécurité pour la variabilité]

4. Documentation à réunir : [protocole du challenge test, résultats
   de laboratoire externe]

5-6. Analyse, documentation et conclusion : [à conduire une fois
   les résultats du laboratoire obtenus]`,
  },
  {
    id: "fragments",
    label: "Fragments métalliques",
    icon: ClipboardIcon,
    danger: "Fragments métalliques",
    produit: "Ligne de production équipée d'un tamis",
    mesure: "Tamis + détecteur de métal en sortie de ligne",
    approcheNum: 3,
    approcheLabel: "Collecte de données en conditions normales",
    trame: `1. Étapes préalables
   a. Danger : fragments métalliques [à confirmer]
   b. Résultat de sécurité sanitaire requis : [seuil cible, ex. < 1
      fragment > 2 mm pour 100 000 kg — à vérifier avec le client]
   c. Mesure de maîtrise à valider : tamis en ligne

2. Approche suggérée : Collecte de données (Approche 3)
   — aucun essai en labo ne reflète la variabilité réelle de la ligne
   (cf. Partie 2, Approche 3)

3. Paramètres et critères de décision : [durée de collecte — 1 mois
   d'opération normale — fréquence de relevé du détecteur]

4. Documentation à réunir : [données du détecteur de métal, taille
   des fragments rejetés]

5-6. Analyse, documentation et conclusion : [à conduire une fois
   la période de collecte terminée]`,
  },
  {
    id: "sterilisation",
    label: "Stérilisation · conserverie",
    icon: ChartIcon,
    danger: "Pathogènes thermorésistants (ex. C. botulinum)",
    produit: "Conserve de légumes, nouveau format de boîte",
    mesure: "Barème de stérilisation (valeur F0)",
    approcheNum: 4,
    approcheLabel: "Modélisation mathématique",
    trame: `1. Étapes préalables
   a. Danger : pathogènes thermorésistants [à confirmer]
   b. Résultat de sécurité sanitaire requis : [valeur F0 minimale
      applicable au produit — à vérifier]
   c. Mesure de maîtrise à valider : barème de stérilisation

2. Approche suggérée : Modélisation mathématique (Approche 4)
   — recalcul du barème pour le nouveau format à partir d'un modèle
   de destruction thermique (cf. Partie 2, Approche 4)

3. Paramètres et critères de décision : [courbes de pénétration de
   chaleur mesurées, valeur F0 cible]

4. Documentation à réunir : [mesures capteurs sur boîtes témoins,
   essais de vérification du modèle]

5-6. Analyse, documentation et conclusion : [à conduire après
   vérification du modèle par essais réels]`,
  },
];

export default function DangerPicker() {
  const [selectedId, setSelectedId] = useState(PRESETS[0].id);
  const selected = PRESETS.find((preset) => preset.id === selectedId) ?? PRESETS[0];

  return (
    <div className="danger-picker">
      <div className="danger-picker-tabs" role="tablist" aria-label="Choisir un cas pour régénérer la trame">
        {PRESETS.map((preset) => {
          const Icon = preset.icon;
          const isSelected = preset.id === selectedId;
          return (
            <button
              key={preset.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              className={`danger-picker-tab${isSelected ? " is-selected" : ""}`}
              onClick={() => setSelectedId(preset.id)}
            >
              <Icon />
              <span>{preset.label}</span>
            </button>
          );
        })}
      </div>

      <div className="danger-picker-panel" key={selected.id}>
        <div className="danger-picker-summary">
          <div className="danger-picker-field">
            <span className="danger-picker-field-label">Danger</span>
            <span>{selected.danger}</span>
          </div>
          <div className="danger-picker-field">
            <span className="danger-picker-field-label">Mesure à valider</span>
            <span>{selected.mesure}</span>
          </div>
          <div className="danger-picker-approach">
            <span className="danger-picker-approach-num">{selected.approcheNum}</span>
            Approche suggérée — {selected.approcheLabel}
          </div>
        </div>
        <pre className="danger-picker-trame">
          <code>{selected.trame}</code>
        </pre>
      </div>
    </div>
  );
}
