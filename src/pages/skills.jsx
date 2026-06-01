import { COMPETENCES } from "../data";

export default function Skills() {
    return (
        <article className="md">
            <h1># skills.json</h1>
            <blockquote>ce qui est acquis - ce qui est en cours</blockquote>

            <pre className="code">
                <span className="p">{'{'}</span>{'\n'}

                {'  '}<span className='k'>"acquis"</span>
                <span className="p">: [</span>{'\n'}
                {COMPETENCES.acquis.map((it, i)=> (
                    <span key={i}>
                        {'  '}<span className="s">"{it}"</span>
                        {i <COMPETENCES.acquis.length - 1 ? ',' : ''}
                        {'\n'}
                    </span>
                ))}
                {'  '}<span className="p">],</span>{'\n'}

                {'  '}<span className='k'>"en_cours"</span>
                <span className="p">: [</span>{'\n'}
                {COMPETENCES.en_cours.map((it, i) => (
                    <span key={i}>
                        {'  '}<span className="s">"{it}"</span>
                        {i < COMPETENCES.en_cours.length - 1 ? ',' : ''}
                        {'\n'}
                    </span>
                ))}
                {'  '}<span className="p">]</span>{'\n'}

                <span className="p">{'}'}</span>
            </pre>
        </article>
    );
}