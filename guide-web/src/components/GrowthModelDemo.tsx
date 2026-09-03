import { useMemo, useState } from "react";
import Slider from "./Slider";
import DemoFrame from "./DemoFrame";

const PH_AXIS: [number, number] = [3, 9.5];
const AW_AXIS: [number, number] = [0.85, 1.0];
const GRID_X = 22;
const GRID_Y = 14;
const CELL = 14;
const PAD = { top: 10, right: 12, bottom: 26, left: 34 };
const WIDTH = PAD.left + GRID_X * CELL + PAD.right;
const HEIGHT = PAD.top + GRID_Y * CELL + PAD.bottom;

/**
 * Forme cardinale bornée (cf. Rosso / Zwietering) : chaque terme (pH, aw)
 * est clampé à [0,1] SÉPARÉMENT avant d'être multiplié, pour éviter qu'un
 * terme > 1 ne compense artificiellement un autre terme faible.
 */
function gammaPH(pH: number, pHMin: number, pHOpt: number, pHMax: number) {
  if (pH <= pHMin || pH >= pHMax) return 0;
  const num = (pH - pHMin) * (pHMax - pH);
  const den = (pHOpt - pHMin) * (pHMax - pHOpt);
  return Math.max(0, Math.min(1, num / den));
}

function gammaAw(aw: number, awMin: number) {
  if (aw <= awMin) return 0;
  const denom = Math.max(1.0 - awMin, 0.01);
  return Math.max(0, Math.min(1, (aw - awMin) / denom));
}

function factor(pH: number, pHMin: number, pHOpt: number, pHMax: number, aw: number, awMin: number) {
  return gammaPH(pH, pHMin, pHOpt, pHMax) * gammaAw(aw, awMin);
}

export default function GrowthModelDemo() {
  const [pH, setPH] = useState(6.2);
  const [pHMin, setPHMin] = useState(4.0);
  const [pHOpt, setPHOpt] = useState(6.5);
  const [pHMax, setPHMax] = useState(9.0);
  const [aw, setAw] = useState(0.98);
  const [awMin, setAwMin] = useState(0.92);

  const currentFactor = factor(pH, pHMin, pHOpt, pHMax, aw, awMin);

  const cells = useMemo(() => {
    const result: { x: number; y: number; opacity: number }[] = [];
    for (let ix = 0; ix < GRID_X; ix++) {
      const pHCell = PH_AXIS[0] + ((ix + 0.5) / GRID_X) * (PH_AXIS[1] - PH_AXIS[0]);
      for (let iy = 0; iy < GRID_Y; iy++) {
        const awCell = AW_AXIS[1] - ((iy + 0.5) / GRID_Y) * (AW_AXIS[1] - AW_AXIS[0]);
        result.push({
          x: PAD.left + ix * CELL,
          y: PAD.top + iy * CELL,
          opacity: 0.06 + 0.8 * factor(pHCell, pHMin, pHOpt, pHMax, awCell, awMin),
        });
      }
    }
    return result;
  }, [pHMin, pHOpt, pHMax, awMin]);

  const markerX = PAD.left + ((pH - PH_AXIS[0]) / (PH_AXIS[1] - PH_AXIS[0])) * GRID_X * CELL;
  const markerY = PAD.top + ((AW_AXIS[1] - aw) / (AW_AXIS[1] - AW_AXIS[0])) * GRID_Y * CELL;

  return (
    <DemoFrame title="Simulation — croissance de pathogène (pH / aw)">
      <div className="demo-controls">
        <Slider label="pH du produit" value={pH} min={PH_AXIS[0]} max={PH_AXIS[1]} step={0.1} onChange={setPH} />
        <Slider label="pH_min (pathogène)" arbitrary value={pHMin} min={3} max={5.5} step={0.1} onChange={setPHMin} />
        <Slider label="pH_opt (pathogène)" arbitrary value={pHOpt} min={5.6} max={7.5} step={0.1} onChange={setPHOpt} />
        <Slider label="pH_max (pathogène)" arbitrary value={pHMax} min={7.6} max={9.5} step={0.1} onChange={setPHMax} />
        <Slider label="aw du produit" value={aw} min={AW_AXIS[0]} max={AW_AXIS[1]} step={0.01} onChange={setAw} />
        <Slider label="aw_min (pathogène)" arbitrary value={awMin} min={0.85} max={0.97} step={0.01} onChange={setAwMin} />
      </div>
      <div className="demo-visual">
        <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} width="100%" role="img" aria-label="Carte du facteur de croissance selon le pH et l'activité de l'eau">
          {cells.map((cell, i) => (
            <rect
              key={i}
              x={cell.x}
              y={cell.y}
              width={CELL}
              height={CELL}
              fill="var(--color-demo)"
              fillOpacity={cell.opacity}
            />
          ))}
          <rect x={PAD.left} y={PAD.top} width={GRID_X * CELL} height={GRID_Y * CELL} fill="none" stroke="var(--color-border)" />
          <text x={PAD.left} y={HEIGHT - 10} fontSize="10" fill="var(--color-text-faint)">pH {PH_AXIS[0]}</text>
          <text x={PAD.left + GRID_X * CELL} y={HEIGHT - 10} fontSize="10" textAnchor="end" fill="var(--color-text-faint)">pH {PH_AXIS[1]}</text>
          <text x={2} y={PAD.top + 9} fontSize="10" fill="var(--color-text-faint)">aw {AW_AXIS[1]}</text>
          <text x={2} y={PAD.top + GRID_Y * CELL} fontSize="10" fill="var(--color-text-faint)">aw {AW_AXIS[0]}</text>
          <circle cx={markerX} cy={markerY} r="5" fill="#fff" stroke="var(--color-accent-dark)" strokeWidth="2.5" />
        </svg>
        <div className="demo-result">
          Facteur de croissance relatif ={" "}
          <strong>{currentFactor.toFixed(2)}</strong> (0 = pas de croissance,
          1 = optimale)
        </div>
      </div>
    </DemoFrame>
  );
}
