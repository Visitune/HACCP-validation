import type { ReactNode } from "react";
import "./Quote.css";

interface QuoteProps {
  source: string;
  children: ReactNode;
}

export default function Quote({ source, children }: QuoteProps) {
  return (
    <figure className="quote">
      <blockquote>{children}</blockquote>
      <figcaption>{source}</figcaption>
    </figure>
  );
}
