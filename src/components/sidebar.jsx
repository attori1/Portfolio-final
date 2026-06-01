import { MOI, FICHIERS } from '../data';
 
export default function Sidebar({ actif, ouvrir }) {
  return (
    <aside className="sidebar">
      <div className="bloc-side">
        <p className="label">EXPLORER</p>
        <ul className="files">
          {FICHIERS.map((nom) => (
            <li key={nom}>
              <button
                className={nom === actif ? 'actif' : ''}
                onClick={() => ouvrir(nom)}
              >
                <span className="ind">{nom === actif ? '▸' : ' '}</span>
                {nom}
              </button>
            </li>
          ))}
          <li>
            <a className="dl" href={MOI.cv} download>
              <span className="ind"> </span>cv.pdf <span className="fl">↓</span>
            </a>
          </li>
        </ul>
      </div>
 
      <div className="bloc-side bas">
        <p className="label">STATUS</p>
        <p className="status-line">
          <span className="point-vert" /> available
        </p>
        <p className="status-line dim">{MOI.ville}</p>
      </div>
    </aside>
  );
}