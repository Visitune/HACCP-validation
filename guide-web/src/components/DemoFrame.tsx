import type { ReactNode } from "react";
import "./DemoFrame.css";

interface DemoFrameProps {
  title: string;
  children: ReactNode;
}

export default function DemoFrame({ title, children }: DemoFrameProps) {
  return (
    <div className="demo-frame">
      <div className="demo-frame-header">
        <span className="demo-frame-title">{title}</span>
        <span className="demo-frame-badge">
          démo interactive — valeurs d'exemple fictives
        </span>
      </div>
      <div className="demo-frame-body">{children}</div>
    </div>
  );
}
