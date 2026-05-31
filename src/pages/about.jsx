import { MOI, ABOUT_PARAS} from "../data";

export default function About(){
    return(
        <article className="md">
            <h1># about</h1>
            <blockquote>{MOI.nom} - {MOI.role}</blockquote>
            {ABOUT_PARAS.map((para, i) => <p key={i}>{para}</p>)}
        </article>
    );
}