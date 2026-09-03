import { useMemo, useState } from "react";
import Slider from "./Slider";
import DemoFrame from "./DemoFrame";

const PH_AXIS: [number, number] = [3, 8];
const AW_AXIS: [number, number] = [0.85, 1.0];
const GRID_X = 20;
const GRID_Y = 14;
const CELL = 12;
const PAD = { top: 8, right: 8, bottom: 22, left: 30 };
const WIDTH = PAD.left + GRID_X * CELL + PAD.right;
const HEIGHT = PAD.top + GRID_Y * CELL + PAD.bottom;

function factor(pH: number, pHMin: number, pHOpt: number, aw: number, awMin: number) {
  if (pH <= pHMin || aw <= awMin) return 0;
  const denomPH = Math.max(pHOpt - pHMin, 0.01);
  const denomAw = Math.max(1.0 - awMin, 0.01);
  const effetPH = (pH - pHMin) / denomPH;
  const effetAw = (aw - awMin) / denomAw;
  return Math.max(0, Math.min(1, effetPH * effetAw));
}

export default function GrowthModelDemo() {
  const [pH, setPH] = useState(6.2);
  const [pHMin, setPHMin] = useState(4.0);
  const [pHOpt, setPHOpt] = useState(6.5);
  const [aw, setAw] = useState(0.98);
  const [awMin, setAwMin] = useState(0.92);

  const currentFactor = factor(pH, pHMin, pHOpt, aw, awMin);

  const cells = useMemo(() => {
    const result: { x: number; y: number; opacity: number }[] = [];
    for (let ix = 0; ix < GRID_X; ix++) {
      const pHCell = PH_AXIS[0] + ((ix + 0.5) / GRID_X) * (PH_AXIS[1] - PH_AXIS[0]);
      for (let iy = 0; iy < GRID_Y; iy++) {
        const awCell = AW_AXIS[1] - ((iy + 0.5) / GRID_Y) * (AW_AXIS[1] - AW_AXIS[0]);
        result.push({
          x: PAD.left + ix * CELL,
          y: PAD.top + iy * CELL,
          opacity: 0.06 + 0.8 * factor(pHCell, pHMin, pHOpt, awCell, awMin),
        });
      }
    }
    return result;
  }, [pHMin, pHOpt, awMin]);

  const markerX = PAD.left + ((pH - PH_AXIS[0]) / (PH_AXIS[1] - PH_AXIS[0])) * GRID_X * CELL;
  const markerY = PAD.top + ((AW_AXIS[1] - aw) / (AW_AXIS[1] - AW_AXIS[0])) * GRID_Y * CELL;

  return (
    <DemoFrame title="Simulation — croissance de pathogène (pH / aw)">
      <div className="demo-controls">
        <Slider label="pH du produit" value={pH} min={PH_AXIS[0]} max={PH_AXIS[1]} step={0.1} onChange={setPH} />
        <Slider label="pH_min (pathogène)" value={pHMin} min={3} max={5.5} step={0.1} onChange={setPHMin} />
        <Slider label="pH_opt (pathogène)" value={pHOpt} min={5.6} max={7.5} step={0.1} onChange={setPHOpt} />
        <Slider label="aw du produit" value={aw} min={AW_AXIS[0]} max={AW_AXIS[1]} step={0.01} onChange={setAw} />
        <Slider label="aw_min (pathogène)" value={awMin} min={0.85} max={0.97} step={0.01} onChange={setAwMin} />
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
          <text x={PAD.left} y={HEIGHT - 6} fontSize="9" fill="var(--color-text-faint)">pH →</text>
          <text x={2} y={PAD.top + 8} fontSize="9" fill="var(--color-text-faint)">aw ↑</text>
          <circle cx={markerX} cy={markerY} r="4.5" fill="#fff" stroke="var(--color-accent-dark)" strokeWidth="2" />
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
