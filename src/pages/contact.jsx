import { useState } from 'react';
import { MOI } from '../data';

export default function Contact() {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function envoyer() {
    const sujet = encodeURIComponent(`Message de ${nom || '—'}`);
    const corps = encodeURIComponent(`${message}\n\n— ${nom} (${email})`);
    window.location.href = `mailto:${MOI.email}?subject=${sujet}&body=${corps}`;
  }

  return (
    <article className="md">
      <h1># contact.sh</h1>
      <blockquote>par mail direct · ou via le formulaire</blockquote>

      <pre className="code">
        <span className="c"># --- liens directs ---</span>{'\n'}
        <span className="v">EMAIL</span>=<span className="s">"{MOI.email}"</span>{'\n'}
        <span className="v">GITHUB</span>=<span className="s">"{MOI.github}"</span>{'\n'}
        <span className="v">LINKEDIN</span>=<span className="s">"{MOI.linkedin}"</span>
      </pre>

      <div className="form">
        <label>
          <span className="prompt">$</span> nom
          <input value={nom} onChange={(e) => setNom(e.target.value)} />
        </label>
        <label>
          <span className="prompt">$</span> email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span className="prompt">$</span> message
          <textarea
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
        <button className="btn" onClick={envoyer}>./send →</button>
      </div>
    </article>
  );
}