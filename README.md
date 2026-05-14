# Didier Romuald TAFE — Portfolio Next.js

Portfolio personnel bilingue (FR/EN) construit avec **Next.js 14** (App Router).

## 🚀 Lancer le projet

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer en développement
npm run dev

# 3. Ouvrir dans le navigateur
http://localhost:3000
```

## 📁 Structure du projet

```
didier-portfolio/
├── app/
│   ├── globals.css        # Variables CSS globales (couleurs, fonts)
│   ├── layout.js          # Layout racine + Google Fonts
│   └── page.js            # Page principale (assemblage des composants)
├── components/
│   ├── Nav.jsx            # Navigation fixe + toggle FR/EN
│   ├── Hero.jsx           # Section héro
│   ├── About.jsx          # À propos + carte de profil
│   ├── Skills.jsx         # Compétences par catégorie
│   ├── Experience.jsx     # Expérience professionnelle (CV)
│   ├── Roadmap.jsx        # Feuille de route Canada
│   ├── Projects.jsx       # Projets réalisés
│   ├── Contact.jsx        # Contact + liens sociaux
│   └── Footer.jsx         # Pied de page
├── context/
│   └── LangContext.jsx    # Système de traduction FR/EN + toutes les données
└── public/                # Images et assets statiques
```

## ✏️ Modifier le contenu

Tout le contenu du site (textes FR et EN) se trouve dans :
```
context/LangContext.jsx
```

Pour mettre à jour :
- Ton email → `Contact.jsx` ligne `href="mailto:..."`
- Tes compétences → `LangContext.jsx` → `skills.categories`
- Tes projets → `LangContext.jsx` → `projects.items`
- Ton LinkedIn → `LangContext.jsx` → `LINKEDIN_URL`

## 🌐 Déployer gratuitement

### Option 1 — Vercel (recommandé, gratuit)
```bash
npm install -g vercel
vercel
```

### Option 2 — Netlify
```bash
npm run build
# Déposer le dossier .next sur netlify.com
```

## 🎨 Personnaliser les couleurs

Dans `app/globals.css` :
```css
:root {
  --gold: #c9a227;   /* Couleur principale */
  --navy: #080d1a;   /* Fond principal */
  /* ... */
}
```
