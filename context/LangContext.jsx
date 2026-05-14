"use client";
import { createContext, useContext, useState } from "react";

const LangContext = createContext();

export const LINKEDIN_URL = "https://www.linkedin.com/in/didier-romuald-tafe-714055153/";

export const translations = {
  fr: {
    nav: { about: "À propos", skills: "Compétences", experience: "Expérience", roadmap: "Feuille de route", projects: "Projets", contact: "Contact" },
    hero: {
      tag: "Chef de Projet · Val-d'Or, Québec 🇨🇦",
      subtitle: "Chef de Projet & Analyste Systèmes d'Information",
      desc: "Du Cameroun au Canada — Master en Management des Systèmes d'Information, 6 ans d'expérience en gestion de projets IT, télécoms et finance digitale. Je construis ici mon profil canadien, compétence par compétence.",
      cta1: "Voir mon expérience",
      cta2: "Mes projets",
      stat1Num: "6+", stat1Label: "Années d'expérience",
      stat2Num: "Bac+5", stat2Label: "Master MSI",
      stat3Num: "2", stat3Label: "Langues maîtrisées",
    },
    about: {
      tag: "À propos de moi",
      title: ["Un profil ", "solide et international"],
      p1: ["Je m'appelle ", "Didier Romuald TAFE", ". Titulaire d'un Master en Management des Systèmes d'Information, je suis un Chef de Projet avec plus de 6 ans d'expérience dans les télécommunications, la finance digitale et le déploiement de projets IT."],
      p2: ["Basé à Val-d'Or, Québec, je construis mon profil canadien en combinant mon expérience terrain avec des certifications reconnues comme ", "PSM I (Scrum)", " et ", "CAPM (PMI)", " pour m'imposer sur le marché local."],
      p3: ["Ce portfolio est un ", "document vivant", " — chaque compétence acquise, chaque projet livré, chaque certification obtenue y est documenté en temps réel."],
      p4: ["Mon objectif : que ", "mes compétences parlent plus fort que ma géographie", "."],
      cardTitle: "Informations personnelles",
      rows: [
        ["Nom complet", "Didier Romuald TAFE"],
        ["Ville", "Val-d'Or, Québec 🇨🇦"],
        ["Origine", "Cameroun 🇨🇲"],
        ["Diplôme", "Master MSI – Bac+5"],
        ["Poste visé", "Chef de Projet Junior (Canada)"],
        ["Langues", "Français (excellent) · Anglais (très bien)"],
        ["Mode de travail", "Télétravail / Hybride"],
        ["Statut", "Ouvert aux opportunités"],
      ],
    },
    skills: {
      tag: "Compétences",
      title: ["Mes compétences ", "techniques et managériales"],
      statusProgress: "En cours", statusTodo: "Planifié", statusDone: "Maîtrisé",
      categories: [
        {
          label: "Gestion de Projet",
          items: [
            { name: "Gestion de portefeuille projets", status: "done", pct: 85, desc: "Planification, suivi et livraison de projets IT et télécoms — TECH DEALS & DBS Sarl." },
            { name: "Scrum / Agile (PSM I)", status: "progress", pct: 65, desc: "Préparation active à la certification PSM I — Scrum.org." },
            { name: "CAPM – PMI", status: "progress", pct: 20, desc: "Certification PMI en cours de préparation.", badge: "Mois 7" },
            { name: "Gestion des risques & budgets", status: "done", pct: 75, desc: "Études de faisabilité technique et financière pour des projets TIC nationaux." },
          ],
        },
        {
          label: "Données & Analyse",
          items: [
            { name: "R / MATLAB / ANACONDA", status: "done", pct: 70, desc: "Logiciels d'analyse utilisés en contexte de recherche (GRIAGES / MAIN)." },
            { name: "SMART PLS / SPAD", status: "done", pct: 65, desc: "Analyse statistique et modélisation de données." },
            { name: "SQL – MySQL / Oracle / Access", status: "done", pct: 75, desc: "Bases de données utilisées dans des projets de développement applicatif." },
            { name: "Power BI", status: "progress", pct: 20, desc: "Apprentissage en cours pour la visualisation de données.", badge: "Mois 5" },
          ],
        },
        {
          label: "Systèmes & Outils",
          items: [
            { name: "ODOO (ERP)", status: "done", pct: 70, desc: "Progiciel de gestion intégré utilisé en contexte professionnel." },
            { name: "UML / MERISE / RUP", status: "done", pct: 80, desc: "Méthodes de conception orientée objet — maîtrisées en formation et en projet." },
            { name: "Jira / Asana", status: "progress", pct: 40, desc: "Outils de gestion de projet Agile — apprentissage actif." },
            { name: "Adobe Photoshop / Illustrator / After Effects", status: "done", pct: 65, desc: "Outils multimédias pour communication visuelle et community management." },
          ],
        },
        {
          label: "Développement",
          items: [
            { name: "HTML / CSS / PHP", status: "done", pct: 75, desc: "Développement web — projets réalisés chez Megasoft SARL et Bantou Technology." },
            { name: "Java / C# / C++", status: "done", pct: 65, desc: "Développement logiciel — formation et projets professionnels." },
            { name: "Android Studio", status: "done", pct: 60, desc: "Application mobile de gestion des congés — MINJEC, Cameroun." },
            { name: "Linux / Ubuntu / Kali", status: "done", pct: 65, desc: "Systèmes Unix utilisés en environnement de développement." },
          ],
        },
      ],
    },
    experience: {
      tag: "Expérience professionnelle",
      title: ["6 ans ", "d'expérience terrain"],
      items: [
        {
          period: "2023 – En cours", company: "TECH DEALS", role: "Project Manager", location: "Cameroun",
          tasks: ["Conception et réalisation de projets de vidéosurveillance", "Gestion du portefeuille projets", "Gestion des stocks et approvisionnements", "Supervision des techniciens", "Responsable communication & Community Manager"],
          tags: ["Gestion de projet", "Vidéosurveillance", "Portefeuille", "Communication"],
        },
        {
          period: "2021 – 2023", company: "DBS Sarl", role: "Chef de projet", location: "Yaoundé, Cameroun",
          tasks: ["Renforcement des capacités des fédérations agricoles sur la finance digitale", "Identification des acteurs des chaînes de valeur (coton, riz, cacao, lait, oignon, bovin)", "Élaboration de plans de renforcement des capacités", "Étude sur l'intégration des TIC dans les filières prioritaires au Cameroun", "Étude de faisabilité technique et financière sur des projets TIC"],
          tags: ["Finance digitale", "TIC", "Agriculture", "Faisabilité"],
        },
        {
          period: "2020 – 2022", company: "DBS Sarl", role: "Chef de projet – Études télécoms", location: "Yaoundé, Cameroun",
          tasks: ["Étude sur la taille critique des Licences de Première Catégorie (ART)", "Analyse du marché des communications électroniques au Cameroun", "Évaluation des technologies 3G/4G — MTN, Orange Cameroun, Viettel", "Analyse SWOT et recommandations réglementaires", "Proposition de scénarios d'attribution des futures concessions"],
          tags: ["Télécoms", "Régulation", "3G/4G", "Analyse SWOT"],
        },
        {
          period: "2019", company: "GRIAGES", role: "Assistant projet", location: "Cameroun",
          tasks: ["Initiation à l'intelligence artificielle", "Utilisation des logiciels : SPAD, R, MATLAB, SMART PLS, ANACONDA", "Organisation de programmes de renforcement des capacités (MAIN)"],
          tags: ["Intelligence artificielle", "Analyse de données", "Recherche"],
        },
        {
          period: "2017", company: "MINJEC", role: "Assistant projet", location: "Cameroun",
          tasks: ["Conception et réalisation d'une application de gestion des congés"],
          tags: ["Développement", "Android Studio", "Application mobile"],
        },
      ],
    },
    roadmap: {
      tag: "Ma feuille de route",
      title: ["Mon plan pour ", "m'imposer au Canada"],
      phases: [
        { period: "Mois 1–3 · Maintenant", title: "Certifications Agile + Portfolio", desc: "Obtenir la certification PSM I. Lancer ce site. Maîtriser Jira et les outils PM canadiens.", tags: ["PSM I", "Jira", "Portfolio", "LinkedIn"], active: true },
        { period: "Mois 4–6", title: "Compétences Data — Power BI + SQL avancé", desc: "Construire des dashboards Power BI avec données canadiennes. Approfondir SQL analytique.", tags: ["Power BI", "SQL", "Excel Avancé", "Dashboard"], active: false },
        { period: "Mois 7–9", title: "Certification CAPM + Candidatures actives", desc: "Réussir l'examen CAPM du PMI. Postuler pour des postes de Chef de Projet Junior.", tags: ["CAPM", "PMI", "Candidatures", "Remote"], active: false },
        { period: "Mois 10–12", title: "Premier emploi au Canada", desc: "Portfolio complet, LinkedIn optimisé, entretiens maîtrisés. Décrocher ma première offre canadienne.", tags: ["Entretiens", "Réseautage", "Méthode STAR", "Offre"], active: false },
        { period: "Mois 13–18", title: "Progresser → PMP en préparation", desc: "Performer dans mon premier rôle. Lancer la préparation au PMP. Viser le profil Sénior.", tags: ["PMP", "Leadership", "Mentorat", "Évolution"], active: false },
      ],
    },
    projects: {
      tag: "Projets",
      title: ["Ce que j'ai ", "réalisé"],
      items: [
        { num: "01", status: "done", statusLabel: "Livré", title: "Système de Vidéosurveillance — TECH DEALS", desc: "Gestion complète d'un projet d'installation de vidéosurveillance : planification, supervision des techniciens, gestion des stocks et communication.", tools: ["Gestion de projet", "Portefeuille", "Supervision"] },
        { num: "02", status: "done", statusLabel: "Livré", title: "Étude TIC & Filières Agricoles — MINEPAT / PNDP", desc: "Étude nationale sur l'intégration des TIC dans les filières prioritaires du Cameroun. Faisabilité technique et financière sur 3 projets retenus.", tools: ["Étude de faisabilité", "TIC", "Agriculture", "Rapport"] },
        { num: "03", status: "done", statusLabel: "Livré", title: "Évaluation 3G/4G — ART Cameroun", desc: "Évaluation nationale du déploiement des réseaux mobiles par MTN, Orange et Viettel. Analyse SWOT et recommandations réglementaires.", tools: ["Télécoms", "Analyse SWOT", "Régulation", "3G/4G"] },
        { num: "04", status: "progress", statusLabel: "En cours", title: "Dashboard Power BI — Emploi en Abitibi-Témiscamingue", desc: "Tableau de bord Power BI avec données ouvertes de Statistique Canada. Visualisation des tendances d'emploi dans la région.", tools: ["Power BI", "SQL", "Stats Canada", "Données ouvertes"] },
      ],
    },
    contact: {
      tag: "Me contacter",
      title: ["Travaillons ", "ensemble"],
      sub: "Je suis ouvert aux postes de Chef de Projet Junior, Coordinateur de Projet et aux opportunités en télétravail partout au Canada.",
    },
    footer: { copy: "Val-d'Or, Québec · Canada · 2025" },
  },

  en: {
    nav: { about: "About", skills: "Skills", experience: "Experience", roadmap: "Roadmap", projects: "Projects", contact: "Contact" },
    hero: {
      tag: "Project Manager · Val-d'Or, Québec 🇨🇦",
      subtitle: "Project Manager & Information Systems Analyst",
      desc: "From Cameroon to Canada — Master's in Information Systems Management, 6 years of experience in IT, telecom, and digital finance projects. Building my Canadian profile here, skill by skill.",
      cta1: "See My Experience",
      cta2: "View Projects",
      stat1Num: "6+", stat1Label: "Years of experience",
      stat2Num: "Bac+5", stat2Label: "Master's ISM",
      stat3Num: "2", stat3Label: "Languages mastered",
    },
    about: {
      tag: "About Me",
      title: ["A strong ", "international profile"],
      p1: ["My name is ", "Didier Romuald TAFE", ". Holding a Master's in Information Systems Management, I am a Project Manager with over 6 years of experience in telecommunications, digital finance, and IT project deployment."],
      p2: ["Based in Val-d'Or, Québec, I am building my Canadian profile by combining my field experience with recognized certifications such as ", "PSM I (Scrum)", " and ", "CAPM (PMI)", " to establish myself in the local market."],
      p3: ["This portfolio is a ", "living document", " — every skill acquired, every project delivered, every certification obtained is documented in real time."],
      p4: ["My goal: make ", "my skills speak louder than my geography", "."],
      cardTitle: "Profile Details",
      rows: [
        ["Full Name", "Didier Romuald TAFE"],
        ["Location", "Val-d'Or, Québec 🇨🇦"],
        ["Origin", "Cameroon 🇨🇲"],
        ["Degree", "Master's ISM – Bac+5"],
        ["Target Role", "Junior Project Manager (Canada)"],
        ["Languages", "French (excellent) · English (very good)"],
        ["Work Mode", "Remote / Hybrid"],
        ["Status", "Open to Opportunities"],
      ],
    },
    skills: {
      tag: "Skills",
      title: ["My technical and ", "management skills"],
      statusProgress: "In Progress", statusTodo: "Planned", statusDone: "Mastered",
      categories: [
        {
          label: "Project Management",
          items: [
            { name: "Project Portfolio Management", status: "done", pct: 85, desc: "Planning, tracking and delivering IT and telecom projects — TECH DEALS & DBS Sarl." },
            { name: "Scrum / Agile (PSM I)", status: "progress", pct: 65, desc: "Actively preparing for PSM I certification — Scrum.org." },
            { name: "CAPM – PMI", status: "progress", pct: 20, desc: "PMI certification currently in preparation.", badge: "Month 7" },
            { name: "Risk & Budget Management", status: "done", pct: 75, desc: "Technical and financial feasibility studies for national ICT projects." },
          ],
        },
        {
          label: "Data & Analysis",
          items: [
            { name: "R / MATLAB / ANACONDA", status: "done", pct: 70, desc: "Data analysis tools used in research context (GRIAGES / MAIN)." },
            { name: "SMART PLS / SPAD", status: "done", pct: 65, desc: "Statistical analysis and data modeling." },
            { name: "SQL – MySQL / Oracle / Access", status: "done", pct: 75, desc: "Databases used in application development projects." },
            { name: "Power BI", status: "progress", pct: 20, desc: "Currently learning for data visualization.", badge: "Month 5" },
          ],
        },
        {
          label: "Systems & Tools",
          items: [
            { name: "ODOO (ERP)", status: "done", pct: 70, desc: "Enterprise resource planning software used professionally." },
            { name: "UML / MERISE / RUP", status: "done", pct: 80, desc: "Object-oriented design methods — mastered in training and projects." },
            { name: "Jira / Asana", status: "progress", pct: 40, desc: "Agile project management tools — actively learning." },
            { name: "Adobe Photoshop / Illustrator / After Effects", status: "done", pct: 65, desc: "Multimedia tools for visual communication and community management." },
          ],
        },
        {
          label: "Development",
          items: [
            { name: "HTML / CSS / PHP", status: "done", pct: 75, desc: "Web development — projects at Megasoft SARL and Bantou Technology." },
            { name: "Java / C# / C++", status: "done", pct: 65, desc: "Software development — training and professional projects." },
            { name: "Android Studio", status: "done", pct: 60, desc: "Leave management mobile application — MINJEC, Cameroon." },
            { name: "Linux / Ubuntu / Kali", status: "done", pct: 65, desc: "Unix systems used in development environments." },
          ],
        },
      ],
    },
    experience: {
      tag: "Professional Experience",
      title: ["6 years ", "of field experience"],
      items: [
        {
          period: "2023 – Present", company: "TECH DEALS", role: "Project Manager", location: "Cameroon",
          tasks: ["Design and implementation of video surveillance installation projects", "Project portfolio management", "Stock and supply management", "Technician supervision", "Communication lead & Community Manager"],
          tags: ["Project Management", "Video Surveillance", "Portfolio", "Communication"],
        },
        {
          period: "2021 – 2023", company: "DBS Sarl", role: "Project Manager", location: "Yaoundé, Cameroon",
          tasks: ["Capacity building for agricultural federations on digital finance", "Stakeholder identification across value chains (cotton, rice, cocoa, milk, onion, cattle)", "Development of capacity building plans", "Study on ICT integration in priority sectors in Cameroon", "Technical and financial feasibility studies on ICT projects"],
          tags: ["Digital Finance", "ICT", "Agriculture", "Feasibility"],
        },
        {
          period: "2020 – 2022", company: "DBS Sarl", role: "Project Manager – Telecom Studies", location: "Yaoundé, Cameroon",
          tasks: ["Study on critical size of Category 1 Licenses (ART Cameroon)", "Electronic communications market analysis", "Evaluation of 3G/4G mobile technologies — MTN, Orange Cameroon, Viettel", "SWOT analysis and regulatory recommendations", "Scenario proposals for future concession allocation"],
          tags: ["Telecom", "Regulation", "3G/4G", "SWOT Analysis"],
        },
        {
          period: "2019", company: "GRIAGES", role: "Project Assistant", location: "Cameroon",
          tasks: ["Introduction to artificial intelligence", "Analysis tools: SPAD, R, MATLAB, SMART PLS, ANACONDA", "Organization of capacity building programs (MAIN)"],
          tags: ["Artificial Intelligence", "Data Analysis", "Research"],
        },
        {
          period: "2017", company: "MINJEC", role: "Project Assistant", location: "Cameroon",
          tasks: ["Design and development of a leave management mobile application"],
          tags: ["Development", "Android Studio", "Mobile App"],
        },
      ],
    },
    roadmap: {
      tag: "My Roadmap",
      title: ["My plan to ", "establish myself in Canada"],
      phases: [
        { period: "Months 1–3 · Now", title: "Agile Certifications + Portfolio", desc: "Get PSM I certified. Launch this site. Master Jira and Canadian PM tools.", tags: ["PSM I", "Jira", "Portfolio", "LinkedIn"], active: true },
        { period: "Months 4–6", title: "Data Skills — Power BI + Advanced SQL", desc: "Build Power BI dashboards with Canadian data. Deepen SQL in an analytical context.", tags: ["Power BI", "SQL", "Advanced Excel", "Dashboard"], active: false },
        { period: "Months 7–9", title: "CAPM Certification + Active Applications", desc: "Pass the PMI CAPM exam. Apply for Junior PM and Project Coordinator roles.", tags: ["CAPM", "PMI", "Applications", "Remote"], active: false },
        { period: "Months 10–12", title: "First Job in Canada", desc: "Complete portfolio, optimized LinkedIn, mastered interviews. Land first Canadian job offer.", tags: ["Interviews", "Networking", "STAR Method", "Job Offer"], active: false },
        { period: "Months 13–18", title: "Grow → PMP in Preparation", desc: "Perform in first role. Start PMP preparation. Build toward Senior Project Manager.", tags: ["PMP", "Leadership", "Mentoring", "Growth"], active: false },
      ],
    },
    projects: {
      tag: "Projects",
      title: ["What I have ", "delivered"],
      items: [
        { num: "01", status: "done", statusLabel: "Delivered", title: "Video Surveillance System — TECH DEALS", desc: "Full management of a video surveillance installation project: planning, technician supervision, stock management and communication.", tools: ["Project Management", "Portfolio", "Supervision"] },
        { num: "02", status: "done", statusLabel: "Delivered", title: "ICT & Agricultural Sectors Study — MINEPAT / PNDP", desc: "National study on ICT integration into priority sectors in Cameroon. Technical and financial feasibility on 3 selected projects.", tools: ["Feasibility Study", "ICT", "Agriculture", "Report"] },
        { num: "03", status: "done", statusLabel: "Delivered", title: "3G/4G Evaluation — ART Cameroon", desc: "National evaluation of 3G/4G mobile network deployment by MTN, Orange and Viettel. SWOT analysis and regulatory recommendations.", tools: ["Telecom", "SWOT Analysis", "Regulation", "3G/4G"] },
        { num: "04", status: "progress", statusLabel: "In Progress", title: "Power BI Dashboard — Employment in Abitibi-Témiscamingue", desc: "Power BI dashboard using Statistics Canada open data. Employment trends visualization for the region.", tools: ["Power BI", "SQL", "Stats Canada", "Open Data"] },
      ],
    },
    contact: {
      tag: "Get in Touch",
      title: ["Let's ", "connect"],
      sub: "I am open to Junior PM roles, Project Coordinator positions, and remote opportunities across Canada.",
    },
    footer: { copy: "Val-d'Or, Québec · Canada · 2025" },
  },
};

export function LangProvider({ children }) {
  const [lang, setLang] = useState("fr");
  return (
    <LangContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
