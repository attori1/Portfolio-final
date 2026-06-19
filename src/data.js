export const MOI = {
    nom: "Younès Ziane",
    pseudo: "attori",
    role: "Étudiant en développement web",
    ville: "Île-de-France",
    email: "younes.mohamed.ziane@gmail.com",
    github: "https://github/com/attori1",
    cv: "public/CV.pdf",
};

export const META = {
    derniereMaj: "2026-06-15",
    version: "v1.0.3",
};


export const README_INTRO = `Salut ! Je m'appelle ${MOI.nom} et je suis un ${MOI.role.toLowerCase()} basé en ${MOI.ville}. 
                            
                            Bienvenu dans mon portfolio qui me sert de vitrine pour exposer mes compétences et mes projets passés. 
                            N'hesitez pas à me contacter si vous êtes interessés !`;;

export const ABOUT_PARAS = [
    "// Actuellement étudiant en deuxieme année à l'HETIC en bachelor de développement web, je suis passionné par l'informatique et le développement de projets innovants.",
    "// Ma scolarité a toujours été tourné autour de l'informatique, apres une classe prepa MPI j'ai intégré l'EFREI Paris pour ensuite me réorienter vers l'HETIC",
    "// Actuellement je suis à la recherche d'une alternance pour ma deuxième année de bachelor, n'hésitez pas à me contacter !",
];

export const NOW = {
    derniereMaj: "2026-06-15",
    sections: [
        {
            titre: "code",
            items: [
                "j'apprends React via différents projets (notamment ce portfolio)",
                "prochain projet : ReadList de comics",
            ],
        },
        {
            titre: "lecture",
            items: [
                "en cours: Invincible de Robert Kirkman",
                "récemment terminé : Mécanique du privilège blanc d'Estelle Depris",
            ],
        },
        {
            titre: "divers",
            items: [
                "j'écoute beaucoup Beyoncé en codant",
            ],
        },
    ],
};

export const PROJETS = [
    {
        num: "01",
        titre: "Runner",
        annee: "2025",
        description: "Petit jeu de course assez simple en html, css et javascript" +
                     "Premier projet que j'ai pu faire seul de mon coté",
        technos: ["Javascript, HTML, CSS"],
        demo: "https://runner-v1-chi.vercel.app",
        code: "https://github.com/attori1/Runner-v1",
    },
    {
        num: "02",
        titre: "Projet 2",
        annee: "2026",
        description: "à venir",
        technos: [],
        demo: "mettre le lien",
        code: "mettre le lien",
    },
    {
        num: "03",
        titre: "Projet 3",
        annee: "2026",
        description: "à venir",
        technos: [],
        demo: "mettre le lien",
        code: "mettre le lien",
    },
];

export const COMPETENCES = {
    acquis: ["HTML", "CSS", "Javascript", "Python", "Figma", "SQL", "Outils de génération IA (Claude, Gemini, Manus, Clicky, etc)"],
    en_cours: ["React", "Node.js", "et bien d'autres à venir !"],
};

export const FICHIERS = [
    "README.md",
    "about.md",
    "now.md",
    "projects.md",
    "skills.json",
    "contact.sh",
];