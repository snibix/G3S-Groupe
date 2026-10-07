# G3S (Groupe 3S) - Site Web Officiel

![Next.js](https://img.shields.io/badge/Next.js-16.3.7-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.8-blue?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)

Bienvenue sur le dépôt du site web officiel du **Groupe 3S (G3S)**. Ce projet est une application web moderne développée avec **Next.js**, mettant en avant les expertises, secteurs d'activité, et actualités du groupe à travers une interface fluide, animée et responsive.

## 🚀 Technologies Principales

Le projet s'appuie sur une stack technique moderne et performante :

- **Framework :** [Next.js (App Router)](https://nextjs.org/) (v16.3.7)
- **Librairie UI :** [React](https://react.dev/) (v19)
- **Stylisation :** [Tailwind CSS](https://tailwindcss.com/) (v4)
- **Animations :** [Framer Motion](https://www.framer.com/motion/) & [GSAP](https://gsap.com/) pour des interactions riches et des transitions fluides.
- **Composants UI :** [Shadcn UI](https://ui.shadcn.com/) / Lucide React (Icônes)
- **Typage :** [TypeScript](https://www.typescriptlang.org/)

## 📂 Architecture du Projet

Le projet suit la structure standard de Next.js (App Router) dans le dossier `src` :

```text
src/
├── app/                      # Routes de l'application (App Router)
│   ├── actualites/           # Page des actualités
│   ├── decouvrir/            # Page "Découvrir le groupe"
│   ├── expertises/           # Page des expertises métiers
│   ├── secteurs/             # Page des secteurs d'intervention
│   ├── mentions-legales/     # Mentions légales
│   ├── politique-confidentialite/ # Politique de confidentialité
│   ├── api/                  # Routes API internes
│   ├── layout.tsx            # Layout principal (Header, Footer)
│   └── page.tsx              # Page d'accueil (Landing Page)
├── components/               # Composants réutilisables
│   ├── ui/                   # Composants UI de base (ex: Shadcn)
│   ├── Animations.tsx        # Utilitaires d'animation (Framer/GSAP)
│   ├── Header.tsx / Footer.tsx # Navigation et pied de page
│   ├── ContactCTA.tsx        # Call-to-action de contact
│   └── NewsSection.tsx       # Section dynamique d'actualités
```

## 🛠️ Installation et Démarrage

### Prérequis

- Node.js (version 20 ou supérieure recommandée)
- `npm`, `yarn`, `pnpm` ou `bun`

### Étapes

1. **Cloner le dépôt** et accéder au dossier du projet :
   ```bash
   cd G3S
   ```

2. **Installer les dépendances** :
   ```bash
   npm install
   ```

3. **Lancer le serveur de développement** :
   ```bash
   npm run dev
   ```

   Le site sera accessible à l'adresse [http://localhost:3000](http://localhost:3000).

## 📜 Scripts Disponibles

- `npm run dev` : Lance le serveur de développement avec rechargement à chaud (HMR).
- `npm run build` : Construit l'application pour la production (génération statique et optimisation).
- `npm run start` : Démarre le serveur Node.js de production (nécessite un `build` préalable).
- `npm run lint` : Vérifie le code source avec ESLint pour garantir la qualité et le respect des standards.

## 🎨 Design & UI

Le design du site met l'accent sur une esthétique moderne ("Premium") :
- Animations d'apparition et de défilement (Scroll-triggered animations via GSAP et Framer Motion).
- Composants modulaires et réutilisables.
- Typographie soignée et palette de couleurs corporate.
- Responsive Web Design (Mobile First).

## 📄 Pages Légales

Les pages de **Mentions Légales** et **Politique de Confidentialité** sont implémentées et accessibles via le footer pour se conformer aux directives RGPD.

---
*Projet développé pour le Groupe 3S.*
