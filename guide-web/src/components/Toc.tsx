import "./Toc.css";

interface TocItem {
  id: string;
  label: string;
}

interface TocProps {
  items: TocItem[];
}

export default function Toc({ items }: TocProps) {
  return (
    <nav className="toc" aria-label="Sommaire de cette partie">
      <div className="toc-title">Sommaire de cette partie</div>
      <ol>
        {items.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`}>{item.label}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
