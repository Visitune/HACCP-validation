import type { ReactNode } from "react";
import "./Tldr.css";

interface TldrProps {
  children: ReactNode;
}

export default function Tldr({ children }: TldrProps) {
  return (
    <div className="tldr">
      <div className="tldr-title">En bref</div>
      <ul>{children}</ul>
    </div>
  );
}
