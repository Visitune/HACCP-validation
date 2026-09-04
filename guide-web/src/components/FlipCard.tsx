import { useState, type ComponentType, type ReactNode } from "react";
import "./FlipCard.css";

interface FlipCardProps {
  icon: ComponentType;
  term: string;
  children: ReactNode;
}

export default function FlipCard({ icon: Icon, term, children }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <button
      type="button"
      className={`flip-card${flipped ? " is-flipped" : ""}`}
      aria-pressed={flipped}
      onClick={() => setFlipped((prev) => !prev)}
    >
      {!flipped ? (
        <span className="flip-card-face flip-card-front" key="front">
          <span className="flip-card-icon">
            <Icon />
          </span>
          <span className="flip-card-term">{term}</span>
          <span className="flip-card-hint">Touchez pour voir la définition</span>
        </span>
      ) : (
        <span className="flip-card-face flip-card-back" key="back">
          <span className="flip-card-term flip-card-term--back">{term}</span>
          <span className="flip-card-definition">{children}</span>
        </span>
      )}
    </button>
  );
}
