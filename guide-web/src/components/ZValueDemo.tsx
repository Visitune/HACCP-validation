import { useMemo, useState } from "react";
import Slider from "./Slider";
import DemoFrame from "./DemoFrame";

const WIDTH = 340;
const HEIGHT = 220;
const PAD = { top: 18, right: 18, bottom: 34, left: 46 };

export default function ZValueDemo() {
  const [dRef, setDRef] = useState(0.5);
  const [zValue, setZValue] = useState(6);
  const [tRef, setTRef] = useState(121);
  const [tCible, setTCible] = useState(100);
  const [reductionsLog, setReductionsLog] = useState(5);

  const { dCible, temps, points, tRefPoint, tCiblePoint, tMin, tMax, gridY } = useMemo(() => {
    const dCibleVal = dRef * 10 ** ((tRef - tCible) / zValue);
    const tempsVal = dCibleVal * reductionsLog;

    const tMinVal = Math.min(tRef, tCible) - 8;
    const tMaxVal = Math.max(tRef, tCible) + 8;
    const logDAt = (t: number) => Math.log10(dRef) + (tRef - t) / zValue;

    const plotW = WIDTH - PAD.left - PAD.right;
    const plotH = HEIGHT - PAD.top - PAD.bottom;

    const logDMin = Math.min(logDAt(tMinVal), logDAt(tMaxVal));
    const logDMax = Math.max(logDAt(tMinVal), logDAt(tMaxVal));
    const logDSpan = logDMax - logDMin || 1;

    const x = (t: number) => PAD.left + ((t - tMinVal) / (tMaxVal - tMinVal)) * plotW;
    const y = (logD: number) =>
      PAD.top + (1 - (logD - logDMin) / logDSpan) * plotH;

    const gridYVal = [0.25, 0.5, 0.75].map((f) => PAD.top + f * plotH);

    return {
      dCible: dCibleVal,
      temps: tempsVal,
      points: `${x(tMinVal)},${y(logDAt(tMinVal))} ${x(tMaxVal)},${y(logDAt(tMaxVal))}`,
      tRefPoint: { x: x(tRef), y: y(logDAt(tRef)) },
      tCiblePoint: { x: x(tCible), y: y(logDAt(tCible)) },
      tMin: tMinVal,
      tMax: tMaxVal,
      gridY: gridYVal,
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
          <rect x={PAD.left} y={PAD.top} width={WIDTH - PAD.left - PAD.right} height={HEIGHT - PAD.top - PAD.bottom} fill="var(--color-demo-soft)" opacity="0.4" />
          {gridY.map((gy) => (
            <line key={gy} x1={PAD.left} y1={gy} x2={WIDTH - PAD.right} y2={gy} stroke="var(--color-border)" strokeDasharray="2 3" />
          ))}
          <line x1={PAD.left} y1={PAD.top} x2={PAD.left} y2={HEIGHT - PAD.bottom} stroke="var(--color-border)" />
          <line x1={PAD.left} y1={HEIGHT - PAD.bottom} x2={WIDTH - PAD.right} y2={HEIGHT - PAD.bottom} stroke="var(--color-border)" />
          <text x={PAD.left} y={HEIGHT - 12} fontSize="10" fill="var(--color-text-faint)">{tMin.toFixed(0)} °C</text>
          <text x={WIDTH - PAD.right} y={HEIGHT - 12} fontSize="10" textAnchor="end" fill="var(--color-text-faint)">{tMax.toFixed(0)} °C</text>
          <text x={4} y={PAD.top + 10} fontSize="10" fill="var(--color-text-faint)">log₁₀(D)</text>
          <polyline points={points} fill="none" stroke="var(--color-demo)" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx={tRefPoint.x} cy={tRefPoint.y} r="4.5" fill="var(--color-accent)" stroke="#fff" strokeWidth="1.5" />
          <text x={tRefPoint.x + 7} y={tRefPoint.y - 7} fontSize="10" fontWeight="600" fill="var(--color-accent-dark)">T_ref</text>
          <circle cx={tCiblePoint.x} cy={tCiblePoint.y} r="4.5" fill="var(--color-demo)" stroke="#fff" strokeWidth="1.5" />
          <text x={tCiblePoint.x + 7} y={tCiblePoint.y - 7} fontSize="10" fontWeight="600" fill="var(--color-demo)">T_cible</text>
        </svg>
        <div className="demo-result">
          D à T_cible = <strong>{dCible.toFixed(2)} min</strong> · temps de
          traitement = <strong>{temps.toFixed(1)} min</strong>
        </div>
      </div>
    </DemoFrame>
  );
}
