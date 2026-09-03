import "./ProcessFlow.css";

interface ProcessStep {
  title: string;
  detail?: string;
}

interface ProcessFlowProps {
  steps: ProcessStep[];
  activeIndex?: number;
}

export default function ProcessFlow({ steps, activeIndex }: ProcessFlowProps) {
  const hasActive = typeof activeIndex === "number";

  return (
    <ol className={`process-flow${hasActive ? " process-flow--playing" : ""}`}>
      {steps.map((step, index) => {
        const isActive = hasActive && index === activeIndex;
        const isPast = hasActive && index < (activeIndex as number);
        return (
          <li
            key={step.title}
            className={`process-step${isActive ? " is-active" : ""}${isPast ? " is-past" : ""}`}
          >
            <div className="process-step-marker">
              <span>{index + 1}</span>
            </div>
            <div className="process-step-body">
              <div className="process-step-title">{step.title}</div>
              {step.detail && (
                <div className="process-step-detail">{step.detail}</div>
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
