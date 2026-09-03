import "./Slider.css";

interface SliderProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  unit?: string;
  /** Marque le paramètre comme constante empirique non sourcée. */
  arbitrary?: boolean;
  onChange: (value: number) => void;
}

export default function Slider({
  label,
  value,
  min,
  max,
  step,
  unit,
  arbitrary,
  onChange,
}: SliderProps) {
  return (
    <label className="demo-slider">
      <span className="demo-slider-row">
        <span className="demo-slider-label">
          {label}
          {arbitrary && (
            <span className="demo-slider-tag" title="Valeur arbitraire — aucune source scientifique">
              arbitraire
            </span>
          )}
        </span>
        <span className="demo-slider-value">
          {value}
          {unit}
        </span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
      />
    </label>
  );
}
