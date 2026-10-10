# Ivoire Foncier - Plateforme Immobilière Premium

Plateforme professionnelle de gestion immobilière et foncière pour la Côte d'Ivoire.

## 🎯 Fonctionnalités

- **Recherche avancée** : Filtrez les biens par type, localisation, budget
- **Gestion des biens** : Affichage détaillé des propriétés
- **Contact direct** : Formulaire de demande sécurisé
- **Espace client** : Connexion et suivi des demandes
- **Dashboard admin** : Gestion complète de la plateforme
- **Design premium** : Interface moderne et professionnelle
- **Mobile-first** : Responsive sur tous les appareils

## 🚀 Stack technique

- **Framework** : Next.js 14
- **Runtime** : Node.js
- **Styling** : CSS personnalisé
- **Déploiement** : Vercel
- **Base de données** : Supabase PostgreSQL (optionnel)
- **Authentification** : NextAuth.js (optionnel)

## 📦 Installation locale

### Prérequis
- Node.js 18+
- npm ou pnpm

### Étapes

```bash
# Cloner le dépôt
git clone https://github.com/OUATTARA4321/ivoire-foncier.git
cd ivoire-foncier

# Installer les dépendances
npm install

# Créer le fichier .env.local
cp .env.example .env.local

# Lancer le serveur de développement
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 🔧 Configuration

### Variables d'environnement

Créez un fichier `.env.local` à la racine du projet :

```env
NEXT_PUBLIC_APP_NAME=Ivoire Foncier
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Supabase (optionnel)
NEXT_PUBLIC_SUPABASE_URL=votre_url_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=votre_clé_anon
SUPABASE_SERVICE_ROLE_KEY=votre_clé_service_role

# NextAuth (optionnel)
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=votre_secret_généré
```

## 📂 Structure du projet

```
ivoire-foncier/
├── app/
│   ├── page.tsx                 # Page d'accueil
│   ├── properties/              # Pages des biens
│   ├── properties/[slug]/        # Détail d'un bien
│   ├── about/                   # À propos
│   ├── contact/                 # Contact
│   ├── login/                   # Connexion
│   ├── dashboard/               # Tableau de bord
│   ├── api/                     # Routes API
│   └── globals.css              # Styles globaux
├── components/
│   ├── Navbar.tsx               # Barre de navigation
│   ├── Footer.tsx               # Pied de page
│   └── PropertyCard.tsx          # Composant bien immobilier
├── lib/
│   └── properties.ts            # Données des biens
├── public/                      # Fichiers statiques
└── package.json
```

## 🌐 Pages principales

- `/` - Accueil avec statistiques et biens en vedette
- `/properties` - Liste complète des biens
- `/properties/[slug]` - Détail d'un bien
- `/about` - À propos de l'entreprise
- `/contact` - Formulaire de contact
- `/login` - Espace client
- `/dashboard` - Tableau de bord administrateur

## 🚀 Déploiement sur Vercel

### Étape 1 : Préparer le projet

```bash
# Vérifier que le build fonctionne localement
npm run build
npm start
```

### Étape 2 : Push sur GitHub

```bash
git add .
git commit -m "Production ready"
git push origin main
```

### Étape 3 : Déployer sur Vercel

1. Rendez-vous sur [vercel.com](https://vercel.com)
2. Connectez-vous avec GitHub
3. Cliquez sur "New Project"
4. Sélectionnez le dépôt `ivoire-foncier`
5. Configurez les variables d'environnement :
   - `NEXT_PUBLIC_APP_NAME`
   - `NEXT_PUBLIC_APP_URL` (URL de production)
   - Les clés Supabase si utilisées
6. Cliquez sur "Deploy"

### Étape 4 : Configuration du domaine

1. Dans Vercel, allez à **Settings** > **Domains**
2. Ajoutez votre domaine personnalisé
3. Mettez à jour les DNS chez votre registraire

## 📊 API Routes (Prêt pour intégration backend)

### Exemples d'endpoints à ajouter

```typescript
// GET /api/properties
// GET /api/properties/:id
// POST /api/contact
// POST /api/auth/login
// GET /api/dashboard/stats
```

## 🔐 Sécurité

- Validations des formulaires côté client
- CORS configuré pour production
- Gestion des erreurs robuste
- Variables d'environnement sensibles sécurisées

## 📱 Responsive Design

Le site fonctionne parfaitement sur :
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (moins de 768px)

## 🎨 Personnalisation

### Couleurs principales

Modifiez les variables CSS dans `app/globals.css` :

```css
:root {
  --primary: #0d6b45;          /* Vert principal */
  --primary-dark: #084d35;     /* Vert foncé */
  --secondary: #eaf7f1;        /* Vert secondaire */
  --gold: #d9b35c;             /* Accent doré */
  --text: #12251f;             /* Texte */
  --muted: #5f726a;            /* Texte secondaire */
}
```

### Contenu

- Modifiez les biens dans `lib/properties.ts`
- Modifiez les pages dans le dossier `app/`
- Ajoutez vos images dans `public/`

## 🛠 Développement

```bash
# Développement
npm run dev

# Build production
npm run build

# Démarrer la production
npm run start

# Lint
npm run lint
```

## 📞 Support

Pour toute question ou problème :
- Email : contact@ivoire-foncier.ci
- Tél : +225 01 23 45 67 89

## 📄 Licence

Ce projet est la propriété exclusive d'Ivoire Foncier.

## 🤝 Contribution

Les contributions sont bienvenues. Créez une branche, effectuez vos modifications et envoyez une pull request.

---

**Ivoire Foncier** - Innovation foncière pour un avenir immobilier plus sûr et plus accessible.
