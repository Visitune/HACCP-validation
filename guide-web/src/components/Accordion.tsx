import { useId, useState, type ComponentType, type ReactNode } from "react";
import "./Accordion.css";

interface AccordionProps {
  id?: string;
  icon: ComponentType;
  title: string;
  summary: string;
  defaultOpen?: boolean;
  children: ReactNode;
}

export default function Accordion({
  id,
  icon: Icon,
  title,
  summary,
  defaultOpen = false,
  children,
}: AccordionProps) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = useId();

  return (
    <div className={`accordion${open ? " is-open" : ""}`} id={id}>
      <h2 className="accordion-heading-row">
        <button
          type="button"
          className="accordion-header"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="accordion-icon">
            <Icon />
          </span>
          <span className="accordion-text">
            <span className="accordion-title">{title}</span>
            <span className="accordion-summary">{summary}</span>
          </span>
          <svg
            className="accordion-chevron"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
      </h2>
      <div className="accordion-panel-wrap" id={panelId} role="region">
        <div className="accordion-panel">{children}</div>
      </div>
    </div>
  );
}
