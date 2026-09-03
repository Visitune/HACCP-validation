import "./CodeBlock.css";

interface CodeBlockProps {
  language: string;
  children: string;
}

export default function CodeBlock({ language, children }: CodeBlockProps) {
  return (
    <div className="code-block">
      <div className="code-block-label">
        <span>{language}</span>
        <span className="code-block-badge">extrait illustratif — non exécuté</span>
      </div>
      <pre>
        <code>{children.trim()}</code>
      </pre>
    </div>
  );
}
