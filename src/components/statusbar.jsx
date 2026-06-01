import { META } from '../data';
 
export default function StatusBar() {
  return (
    <footer className="statut">
      <span>
        <span className="mode">main</span>
        <span className="sep">·</span>
        last edit: {META.derniereMaj}
      </span>
      <span className="dim">{META.version} · UTF-8</span>
    </footer>
  );
}