import type { ReactNode } from "react";
import "./Quote.css";

interface QuoteProps {
  source: string;
  href?: string;
  children: ReactNode;
}

export default function Quote({ source, href, children }: QuoteProps) {
  return (
    <figure className="quote">
      <blockquote>{children}</blockquote>
      <figcaption>
        {href ? (
          <a href={href} target="_blank" rel="noopener noreferrer">
            {source} — voir le document source ↗
          </a>
        ) : (
          source
        )}
      </figcaption>
    </figure>
  );
}
