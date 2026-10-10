export default function ContactPage() {
  return (
    <main className="page-shell">
      <section className="page-header">
        <div className="container">
          <span className="eyebrow alt">Contact</span>
          <h1>Parlons de votre projet immobilier.</h1>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-card">
            <h3>Informations</h3>
            <p>Abidjan, Côte d’Ivoire</p>
            <p>+225 01 23 45 67 89</p>
            <p>contact@ivoire-foncier.ci</p>
          </div>

          <form className="contact-form">
            <div className="form-row">
              <input type="text" placeholder="Nom complet" />
              <input type="email" placeholder="Email" />
            </div>
            <input type="text" placeholder="Objet" />
            <textarea rows={5} placeholder="Décrivez votre besoin" />
            <button type="submit" className="btn btn-primary">
              Envoyer ma demande
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
