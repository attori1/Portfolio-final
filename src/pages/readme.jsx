import { MOI, README_INTRO } from "../data";

export default function Readme({ouvrir}){
    return (
        <article className="md">
            <h1>#~/{MOI.pseudo}</h1>
            <blockquote>{MOI.role} - {MOI.ville}</blockquote>

            {README_INTRO.split('\n\n').map((para, i) => <p key={i}>{para}</p>)}

            <h2>## où aller</h2>
            <ul>
                <li><button onClick={()=> ouvrir('about.md')}>about.md</button> - qui je suis</li>
                <li><button onClick={() => ouvrir('now.md')}>now.md</button> - ce que je fais ces temps ci</li>
                <li><button onClick={() => ouvrir('projects.md')}>projects.md</button> - mes projets </li>
                <li><button onClick={()=> ouvrir('skils.json')}>skills.json</button> - outils et techologies </li>
                <li><button onClick={() => ouvrir('contact.sh')}>contact.sh</button> - m'écrire</li>
            </ul>

            <p className="curseur-ligne">
                <span className="prompt">{MOI.pseudo}@portfolio ~ %</span>
                <span className="curseur"/>
            </p>
        </article>
    );
}