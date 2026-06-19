import {NOW} from "../data";

function tempsEcoule(dateISO) {
  const debut = new Date(dateISO);
  const maintenant = new Date();
 

  const jours = Math.floor((maintenant - debut) / (1000 * 60 * 60 * 24));
 
  if (jours <= 0) return "aujourd'hui";
  if (jours === 1) return 'hier';
  if (jours < 7) return `il y a ${jours} jours`;
  if (jours < 14) return 'il y a une semaine';
  if (jours < 30) return `il y a ${Math.floor(jours / 7)} semaines`;
  if (jours < 60) return 'il y a un mois';
  return `il y a ${Math.floor(jours / 30)} mois`;
}


export default function Now(){
    return(
        <article className="md">
            <h1># now</h1>
            <blockquote>
                ce que je fais actuellement - mis à jours {tempsEcoule(NOW.derniereMaj)}
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