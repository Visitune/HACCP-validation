import type { ReactNode } from "react";
import "./Aside.css";

interface AsideProps {
  tone?: "info" | "warning";
  children: ReactNode;
}

export default function Aside({ tone = "info", children }: AsideProps) {
  return <p className={`aside aside-${tone}`}>{children}</p>;
}
