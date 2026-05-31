import { PROJETS } from "../data";

export default function Projects() {
    return(
        <article className="md">
            <h1># projects</h1>
            <blockquote>
                {PROJETS.length} entrées - sélection chronologique inversée 
            </blockquote>

            {PROJETS.map((p) => (
                <section key={p.num} className="proj">
                    <h2>
                        ## {p.num} - {p.titre}{'  '}
                        <span className="dim">({p.annee})</span>
                    </h2>

                    {p.technos.length > 0 && (
                        <p className="dim techs">{p.technos.join(' . ')}</p>
                    )}

                    <p>{p.description}</p>

                    {(p.demo || p.code) && (
                        <p className="proj-liens">
                            {p.demo && (
                                <a href={p.demo} target="_blank" rel="noreferrer">[ démo ]</a>
                            )}
                            {p.code && (
                                <a href={p.code} target="_blank" rel="noreferrer"> [ code ] </a>
                            )}
                        </p>
                    )}
                </section>
            ))}
        </article>
    );
}