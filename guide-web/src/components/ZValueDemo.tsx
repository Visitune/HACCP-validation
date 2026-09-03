import { useMemo, useState } from "react";
import Slider from "./Slider";
import DemoFrame from "./DemoFrame";

const WIDTH = 300;
const HEIGHT = 190;
const PAD = { top: 16, right: 16, bottom: 30, left: 42 };

export default function ZValueDemo() {
  const [dRef, setDRef] = useState(0.5);
  const [zValue, setZValue] = useState(6);
  const [tRef, setTRef] = useState(121);
  const [tCible, setTCible] = useState(100);
  const [reductionsLog, setReductionsLog] = useState(5);

  const { dCible, temps, points, tRefPoint, tCiblePoint } = useMemo(() => {
    const dCibleVal = dRef * 10 ** ((tRef - tCible) / zValue);
    const tempsVal = dCibleVal * reductionsLog;

    const tMin = Math.min(tRef, tCible) - 8;
    const tMax = Math.max(tRef, tCible) + 8;
    const logDAt = (t: number) => Math.log10(dRef) + (tRef - t) / zValue;

    const plotW = WIDTH - PAD.left - PAD.right;
    const plotH = HEIGHT - PAD.top - PAD.bottom;

    const logDMin = Math.min(logDAt(tMin), logDAt(tMax));
    const logDMax = Math.max(logDAt(tMin), logDAt(tMax));
    const logDSpan = logDMax - logDMin || 1;

    const x = (t: number) => PAD.left + ((t - tMin) / (tMax - tMin)) * plotW;
    const y = (logD: number) =>
      PAD.top + (1 - (logD - logDMin) / logDSpan) * plotH;

    return {
      dCible: dCibleVal,
      temps: tempsVal,
      points: `${x(tMin)},${y(logDAt(tMin))} ${x(tMax)},${y(logDAt(tMax))}`,
      tRefPoint: { x: x(tRef), y: y(logDAt(tRef)) },
      tCiblePoint: { x: x(tCible), y: y(logDAt(tCible)) },
    };
  }, [dRef, zValue, tRef, tCible, reductionsLog]);

  return (
    <DemoFrame title="Simulation — modèle à valeur de Z">
      <div className="demo-controls">
        <Slider label="D_ref (min)" value={dRef} min={0.1} max={5} step={0.1} onChange={setDRef} />
        <Slider label="z_value (°C)" value={zValue} min={2} max={15} step={0.5} onChange={setZValue} />
        <Slider label="T_ref (°C)" value={tRef} min={90} max={135} step={1} unit="°C" onChange={setTRef} />
        <Slider label="T_cible (°C)" value={tCible} min={80} max={130} step={1} unit="°C" onChange={setTCible} />
        <Slider label="Réductions log visées" value={reductionsLog} min={1} max={12} step={1} onChange={setReductionsLog} />
      </div>
      <div className="demo-visual">
        <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} width="100%" role="img" aria-label="Courbe temps de réduction décimale en fonction de la température">
          <line x1={PAD.left} y1={PAD.top} x2={PAD.left} y2={HEIGHT - PAD.bottom} stroke="var(--color-border)" />
          <line x1={PAD.left} y1={HEIGHT - PAD.bottom} x2={WIDTH - PAD.right} y2={HEIGHT - PAD.bottom} stroke="var(--color-border)" />
          <text x={PAD.left} y={HEIGHT - 6} fontSize="9" fill="var(--color-text-faint)">T (°C) →</text>
          <text x={4} y={PAD.top + 8} fontSize="9" fill="var(--color-text-faint)">log₁₀(D)</text>
          <polyline points={points} fill="none" stroke="var(--color-demo)" strokeWidth="2" />
          <circle cx={tRefPoint.x} cy={tRefPoint.y} r="4" fill="var(--color-accent)" />
          <text x={tRefPoint.x + 6} y={tRefPoint.y - 6} fontSize="9" fill="var(--color-accent-dark)">T_ref</text>
          <circle cx={tCiblePoint.x} cy={tCiblePoint.y} r="4" fill="var(--color-demo)" />
          <text x={tCiblePoint.x + 6} y={tCiblePoint.y - 6} fontSize="9" fill="var(--color-demo)">T_cible</text>
        </svg>
        <div className="demo-result">
          D à T_cible = <strong>{dCible.toFixed(2)} min</strong> · temps de
          traitement = <strong>{temps.toFixed(1)} min</strong>
        </div>
      </div>
    </DemoFrame>
  );
}
