import {NOW} from "../data";

export default function Now(){
    return(
        <article className="md">
            <h1># now</h1>
            <blockquote>
                ce que je fais actuellement - mis à jours {NOW.miseAJour}
            </blockquote>

            {NOW.sections.map((s,i)=>(
                <section key={i}>
                    <h2>## {s.titre}</h2>
                    <ul>
                        {s.items.map((item, j) => <li key={j}>{item}</li>)}
                    </ul>
                </section>
            ))}
        </article>
    );
}