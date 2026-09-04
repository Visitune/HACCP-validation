import { useId, useState, type ReactNode } from "react";
import Modal from "./Modal";
import "./Quote.css";

interface QuoteProps {
  source: string;
  href?: string;
  children: ReactNode;
}

export default function Quote({ source, href, children }: QuoteProps) {
  const [open, setOpen] = useState(false);
  const titleId = useId();

  return (
    <figure className="quote">
      <blockquote className="quote-clamped">{children}</blockquote>
      <button type="button" className="quote-expand" onClick={() => setOpen(true)}>
        Lire la citation complète →
      </button>
      <figcaption>
        {href ? (
          <a href={href} target="_blank" rel="noopener noreferrer">
            {source} — voir le document source ↗
          </a>
        ) : (
          source
        )}
      </figcaption>

      <Modal open={open} onClose={() => setOpen(false)} titleId={titleId} title="Citation complète">
        <div className="quote quote-in-modal">
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
        </div>
      </Modal>
    </figure>
  );
}
