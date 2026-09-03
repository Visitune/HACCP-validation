import "./ApproachMatrix.css";

interface ApproachRow {
  numero: string;
  nom: string;
  quand: string;
  exemple: string;
  effort: string;
}

const rows: ApproachRow[] = [
  {
    numero: "1",
    nom: "Documentation / antécédents",
    quand: "Un antécédent fiable et récent existe pour ce danger précis",
    exemple: "Aflatoxines, fruits à coque",
    effort: "Faible",
  },
  {
    numero: "2",
    nom: "Essais expérimentaux",
    quand: "Le danger est connu mais aucune documentation ne couvre vos conditions",
    exemple: "VTEC, fromage lait cru",
    effort: "Élevé",
  },
  {
    numero: "3",
    nom: "Collecte de données en conditions normales",
    quand: "Ni documentation ni essai en labo ne reflètent la variabilité réelle",
    exemple: "SSOP · fragments métalliques",
    effort: "Élevé (surtout en temps)",
  },
  {
    numero: "4",
    nom: "Modélisation mathématique",
    quand: "Explorer des scénarios sans tester chaque combinaison en réel",
    exemple: "Taenia saginata",
    effort: "Moyen à élevé",
  },
  {
    numero: "5",
    nom: "Études (surveys)",
    quand: "La mesure dépend d'un comportement humain, pas d'un paramètre de procédé",
    exemple: "Étiquette, œufs en coquille",
    effort: "Moyen",
  },
];

export default function ApproachMatrix() {
  return (
    <div className="matrix-wrap">
      <table className="matrix">
        <thead>
          <tr>
            <th scope="col">Approche</th>
            <th scope="col">Quand l'utiliser</th>
            <th scope="col">Exemple Annexe I</th>
            <th scope="col">Effort typique</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.numero}>
              <th scope="row">
                <span className="matrix-num">{row.numero}</span>
                {row.nom}
              </th>
              <td>{row.quand}</td>
              <td>{row.exemple}</td>
              <td>{row.effort}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
