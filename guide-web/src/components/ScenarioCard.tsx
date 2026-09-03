import type { ReactNode } from "react";
import "./ScenarioCard.css";

interface ScenarioCardProps {
  title: string;
  children: ReactNode;
}

export default function ScenarioCard({ title, children }: ScenarioCardProps) {
  return (
    <div className="scenario-card">
      <div className="scenario-card-header">
        <span className="scenario-card-title">{title}</span>
        <span className="scenario-card-badge">
          scénario pédagogique, non officiel
        </span>
      </div>
      <p>{children}</p>
    </div>
  );
}
