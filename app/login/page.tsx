export default function LoginPage() {
  return (
    <main className="page-shell auth-shell">
      <div className="auth-card">
        <span className="eyebrow alt">Connexion</span>
        <h1>Bienvenue sur votre espace</h1>

        <form className="auth-form">
          <input type="email" placeholder="Adresse e-mail" />
          <input type="password" placeholder="Mot de passe" />
          <button type="submit" className="btn btn-primary full-width">
            Se connecter
          </button>
        </form>
      </div>
    </main>
  );
}
