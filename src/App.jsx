import { useState, useEffect } from 'react';
import './App.css';

import WindowBar from './components/WindowBar';
import Sidebar from './components/Sidebar';
import StatusBar from './components/StatusBar';

import Readme from './pages/readme.jsx';
import About from './pages/about.jsx';
import Now from './pages/now.jsx';
import Projects from './pages/projects.jsx';
import Skills from './pages/skills.jsx';
import Contact from './pages/contact.jsx';

import { MOI } from './data';

export default function App() {

  const [actif, setActif] = useState('README.md');


  useEffect(() => {
    console.log(
      '%c salut. ',
      'background:#E8B339;color:#15151B;padding:2px 8px;font-weight:bold;border-radius:2px;'
    );
    console.log(
      `%c tu ouvres la console — bon réflexe. si t'as envie de discuter : ${MOI.email}`,
      'color:#7DBF6A;font-style:italic;'
    );
  }, []);

  function ouvrir(nom) {
    setActif(nom);
    const main = document.querySelector('.main');
    if (main) main.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className="app">
      <div className="fenetre">
        <WindowBar actif={actif} />

        <div className="corps">
          <Sidebar actif={actif} ouvrir={ouvrir} />
          <main className="main">
            <PageActuelle actif={actif} ouvrir={ouvrir} />
          </main>
        </div>

        <StatusBar />
      </div>
    </div>
  );
}


function PageActuelle({ actif, ouvrir }) {
  switch (actif) {
    case 'README.md':   return <Readme ouvrir={ouvrir} />;
    case 'about.md':    return <About />;
    case 'now.md':      return <Now />;
    case 'projects.md': return <Projects />;
    case 'skills.json': return <Skills />;
    case 'contact.sh':  return <Contact />;
    default:            return <Readme ouvrir={ouvrir} />;
  }
}