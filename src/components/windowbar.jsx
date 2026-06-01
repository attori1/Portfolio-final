export default function WindowBar({ actif }) {
    return (
      <header className="barre">
        <div className="dots">
          <span /><span /><span />
        </div>
        <span className="titre">
          ~/portfolio — <strong>{actif}</strong>
        </span>
        <span className="vide" />
      </header>
    );
  }