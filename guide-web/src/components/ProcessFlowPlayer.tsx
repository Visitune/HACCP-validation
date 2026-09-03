import { useEffect, useRef, useState } from "react";
import ProcessFlow from "./ProcessFlow";
import "./ProcessFlowPlayer.css";

interface ProcessStep {
  title: string;
  detail?: string;
}

interface ProcessFlowPlayerProps {
  steps: ProcessStep[];
}

const STEP_DELAY_MS = 1100;

export default function ProcessFlowPlayer({ steps }: ProcessFlowPlayerProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const playFrom = (index: number) => {
    setActiveIndex(index);
    if (index < steps.length - 1) {
      timerRef.current = setTimeout(() => playFrom(index + 1), STEP_DELAY_MS);
    }
  };

  const handlePlay = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    playFrom(0);
  };

  const handleReset = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setActiveIndex(null);
  };

  const isPlaying = activeIndex !== null;

  return (
    <div className="flow-player">
      <div className="flow-player-controls">
        <button type="button" className="flow-player-btn" onClick={handlePlay}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M6 4.5v15l13-7.5-13-7.5Z" fill="currentColor" />
          </svg>
          {isPlaying ? "Rejouer la démonstration" : "Lancer la démonstration"}
        </button>
        {isPlaying && (
          <button type="button" className="flow-player-btn flow-player-btn--ghost" onClick={handleReset}>
            Réinitialiser
          </button>
        )}
        {activeIndex !== null && (
          <span className="flow-player-status" aria-live="polite">
            Étape {activeIndex + 1} / {steps.length}
          </span>
        )}
      </div>
      <ProcessFlow steps={steps} activeIndex={activeIndex ?? undefined} />
    </div>
  );
}
