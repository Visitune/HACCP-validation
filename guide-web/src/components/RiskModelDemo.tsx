import { useMemo, useState } from "react";
import Slider from "./Slider";
import DemoFrame from "./DemoFrame";

const STEP_LABELS = ["Entrée", "Étape 1", "Étape 2", "Étape 3", "Étape 4"];
const PAD = { top: 12, right: 8, bottom: 34, left: 8 };
const BAR_W = 42;
const GAP = 12;
const PLOT_H = 130;
const WIDTH = PAD.left + STEP_LABELS.length * (BAR_W + GAP) + PAD.right;
const HEIGHT = PAD.top + PLOT_H + PAD.bottom;

export default function RiskModelDemo() {
  const [initialExp, setInitialExp] = useState(5);
  const [taux, setTaux] = useState([0.1, 0.4, 0.05, 0.3]);

  const niveauInitial = 10 ** initialExp;

  const niveaux = useMemo(() => {
    const values = [niveauInitial];
    let current = niveauInitial;
    for (const t of taux) {
      current *= t;
      values.push(current);
    }
    return values;
  }, [niveauInitial, taux]);

  const maxLog = Math.log10(niveauInitial + 1) || 1;
  const barHeight = (value: number) =>
    Math.max(2, (Math.log10(value + 1) / maxLog) * PLOT_H);

  const updateTaux = (index: number, value: number) => {
    setTaux((prev) => prev.map((t, i) => (i === index ? value : t)));
  };

  return (
    <DemoFrame title="Simulation — impact cumulé le long de la chaîne">
      <div className="demo-controls">
        <Slider
          label="Niveau initial (échelle log)"
          value={initialExp}
          min={0}
          max={6}
          step={1}
          onChange={setInitialExp}
        />
        {taux.map((t, i) => (
          <Slider
            key={i}
            label={`Taux de survie — ${STEP_LABELS[i + 1]}`}
            value={t}
            min={0}
            max={1}
            step={0.01}
            onChange={(v) => updateTaux(i, v)}
          />
        ))}
      </div>
      <div className="demo-visual">
        <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} width="100%" role="img" aria-label="Niveau de danger après chaque étape de la chaîne">
          {niveaux.map((value, i) => {
            const h = barHeight(value);
            const x = PAD.left + i * (BAR_W + GAP);
            const y = PAD.top + (PLOT_H - h);
            return (
              <g key={i}>
                <rect x={x} y={y} width={BAR_W} height={h} fill="var(--color-demo)" fillOpacity={0.75} rx="2" />
                <text x={x + BAR_W / 2} y={y - 5} fontSize="8" textAnchor="middle" fill="var(--color-text)">
                  {value >= 100 ? value.toExponential(1) : value.toFixed(2)}
                </text>
                <text x={x + BAR_W / 2} y={PAD.top + PLOT_H + 13} fontSize="8" textAnchor="middle" fill="var(--color-text-faint)">
                  {STEP_LABELS[i]}
                </text>
              </g>
            );
          })}
        </svg>
        <div className="demo-result">
          Niveau final ={" "}
          <strong>{niveaux[niveaux.length - 1].toExponential(2)}</strong>{" "}
          (unité arbitraire)
        </div>
      </div>
    </DemoFrame>
  );
}
