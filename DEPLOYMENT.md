# Ivoire Foncier - Configuration Vercel & Supabase

## 🚀 Déploiement Production Vercel

### Étape 1 : Préparer le projet localement

```bash
# Installer les dépendances
npm install

# Vérifier que le build fonctionne
npm run build

# Tester localement
npm run start
```

### Étape 2 : Configurer les variables d'environnement

Créez `.env.production.local` à la racine :

```env
# Application
NEXT_PUBLIC_APP_NAME=Ivoire Foncier
NEXT_PUBLIC_APP_URL=https://votre-domaine.com
NEXT_PUBLIC_API_URL=https://votre-domaine.com/api

# Supabase Production
NEXT_PUBLIC_SUPABASE_URL=https://votre-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=votre_cle_anon_publique
SUPABASE_SERVICE_ROLE_KEY=votre_cle_service_role_privee
SUPABASE_DB_PASSWORD=votre_mot_de_passe_db

# NextAuth (Optionnel)
NEXTAUTH_URL=https://votre-domaine.com
NEXTAUTH_SECRET=your_generated_secret_here

# Email Service (Optionnel)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=votre_email@gmail.com
SMTP_PASS=votre_app_password
```

### Étape 3 : Pusher sur GitHub

```bash
# Ajouter les fichiers
git add .

# Commit
git commit -m "Production ready: Vercel & Supabase setup"

# Push
git push origin main
```

### Étape 4 : Déployer sur Vercel

1. Allez sur https://vercel.com/dashboard
2. Cliquez sur **"Add New..."** → **"Project"**
3. Sélectionnez le dépôt **ivoire-foncier**
4. Configurez les paramètres :
   - **Build Command** : `npm run build`
   - **Output Directory** : `.next`
   - **Install Command** : `npm install`

5. Ajoutez les **Environment Variables** :
   - Copiez toutes les variables du fichier `.env.production.local`
6. Cliquez sur **"Deploy"**

### Étape 5 : Configuration du domaine

1. Dans Vercel → **Settings** → **Domains**
2. Ajoutez votre domaine personnalisé
3. Suivez les instructions DNS pour pointer vers Vercel

---

## 🗄️ Configuration Supabase

### Créer un projet Supabase

1. Allez sur https://supabase.com
2. Créez un nouveau projet
3. Attendez que le projet soit initialisé (5-10 minutes)
4. Copiez les clés dans **Settings** → **API**

### Créer les tables de base de données

Dans Supabase SQL Editor, exécutez :

```sql
-- Table des propriétés
CREATE TABLE properties (
  id BIGSERIAL PRIMARY KEY,
  slug VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  location VARCHAR(255) NOT NULL,
  price VARCHAR(50) NOT NULL,
  type VARCHAR(100) NOT NULL,
  surface VARCHAR(50) NOT NULL,
  rooms VARCHAR(100) NOT NULL,
  status VARCHAR(50) NOT NULL,
  description TEXT,
  image_url VARCHAR(500),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Table des demandes de contact
CREATE TABLE contacts (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  subject VARCHAR(255),
  message TEXT NOT NULL,
  property_id BIGINT REFERENCES properties(id),
  status VARCHAR(50) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Table des utilisateurs
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255),
  name VARCHAR(255),
  role VARCHAR(50) DEFAULT 'user',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Créer les index
CREATE INDEX idx_properties_slug ON properties(slug);
CREATE INDEX idx_contacts_email ON contacts(email);
CREATE INDEX idx_contacts_status ON contacts(status);
CREATE INDEX idx_users_email ON users(email);
```

### Autoriser l'accès public (RLS)

Activez Row Level Security pour chaque table :

```sql
-- Pour properties
ALTER TABLE properties ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public read" ON properties
  FOR SELECT USING (true);

-- Pour contacts
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public insert" ON contacts
  FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow admin update" ON contacts
  FOR UPDATE USING (auth.uid() IS NOT NULL);
```

---

## 🔗 Routes API à Intégrer

Créez les fichiers suivants dans `app/api/` :

### 1. `app/api/properties/route.ts`

```typescript
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('properties')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;

    return Response.json(data);
  } catch (error) {
    return Response.json({ error: 'Failed to fetch properties' }, { status: 500 });
  }
}
```

### 2. `app/api/contact/route.ts`

```typescript
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  try {
    const { name, email, phone, subject, message } = await req.json();

    if (!name || !email || !message) {
      return Response.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const { error } = await supabase.from('contacts').insert({
      name,
      email,
      phone,
      subject,
      message,
      status: 'pending',
    });

    if (error) throw error;

    return Response.json({ success: true, message: 'Demande envoyée avec succès' });
  } catch (error) {
    return Response.json({ error: 'Failed to submit contact form' }, { status: 500 });
  }
}
```

### 3. `app/api/dashboard/stats/route.ts`

```typescript
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET() {
  try {
    const { count: propertiesCount } = await supabase
      .from('properties')
      .select('*', { count: 'exact', head: true });

    const { count: contactsCount } = await supabase
      .from('contacts')
      .select('*', { count: 'exact', head: true });

    const { data: pendingContacts } = await supabase
      .from('contacts')
      .select('*')
      .eq('status', 'pending')
      .order('created_at', { ascending: false })
      .limit(5);

    return Response.json({
      properties: propertiesCount || 0,
      contacts: contactsCount || 0,
      pending: pendingContacts || [],
    });
  } catch (error) {
    return Response.json({ error: 'Failed to fetch stats' }, { status: 500 });
  }
}
```

---

## 📦 Installer Supabase Client

```bash
npm install @supabase/supabase-js
```

---

## 🔐 Checklist de Sécurité Production

- [ ] HTTPS activé (Vercel par défaut)
- [ ] Variables d'environnement sécurisées dans Vercel
- [ ] RLS activé sur Supabase
- [ ] CORS configuré correctement
- [ ] Validation des formulaires côté serveur
- [ ] Rate limiting pour les APIs
- [ ] Logs d'erreur configurés
- [ ] Backups Supabase activés
- [ ] Monitoring Vercel activé
- [ ] CDN Vercel optimisé

---

## 📊 Monitoring & Analytics

### Vercel Analytics

1. Dashboard Vercel → **Analytics**
2. Activez **Web Analytics** pour le monitoring
3. Visualisez les performances en temps réel

### Supabase Analytics

1. Dashboard Supabase → **Reports**
2. Surveillez les requêtes et la consommation

---

## 🐛 Troubleshooting

### Erreur de connexion Supabase

```bash
# Vérifier les variables d'environnement
echo $NEXT_PUBLIC_SUPABASE_URL
echo $NEXT_PUBLIC_SUPABASE_ANON_KEY
```

### Build échoue sur Vercel

```bash
# Tester localement
npm run build

# Vérifier les logs
vercel logs
```

### Pages 404 après déploiement

1. Vérifiez que `next.config.mjs` est correct
2. Redéployez avec `vercel --prod`

---

## 🎯 Prochaines Étapes

1. ✅ Déployer sur Vercel
2. ✅ Configurer Supabase
3. ✅ Tester les APIs
4. ⏳ Ajouter l'authentification NextAuth
5. ⏳ Intégrer un service d'email
6. ⏳ Ajouter des tests automatisés
7. ⏳ Configurer les backups
8. ⏳ Mettre en place le CDN pour les images

---

## 📞 Support Production

**Email** : contact@ivoire-foncier.ci
**Tel** : +225 01 23 45 67 89
**Support 24/7** : Supabase Support + Vercel Premium

---

Version Production v1.0.0
