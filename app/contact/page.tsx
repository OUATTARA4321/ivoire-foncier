import Link from 'next/link';
import { supabase } from '@/lib/supabase';

export default function ContactPage() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          phone: formData.get('phone'),
          subject: formData.get('subject'),
          message: formData.get('message'),
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('✅ ' + data.message);
        e.currentTarget.reset();
      } else {
        alert('❌ ' + data.error);
      }
    } catch (error) {
      alert('❌ Erreur lors de l\'envoi de la demande');
    }
  };

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
            <h3>Coordonnées</h3>
            <p>📍 Abidjan, Côte d'Ivoire</p>
            <p>📞 +225 01 23 45 67 89</p>
            <p>✉️ contact@ivoire-foncier.ci</p>
            <p style={{ marginTop: '20px', fontSize: '0.9rem', color: 'var(--muted)' }}>
              Nous répondons à toutes les demandes en moins de 24 heures.
            </p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                type="text"
                name="name"
                placeholder="Nom complet"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Adresse email"
                required
              />
            </div>
            <input
              type="tel"
              name="phone"
              placeholder="Téléphone (optionnel)"
            />
            <input
              type="text"
              name="subject"
              placeholder="Objet de votre demande"
              required
            />
            <textarea
              name="message"
              rows={5}
              placeholder="Décrivez votre projet ou votre besoin..."
              required
            />
            <button type="submit" className="btn btn-primary">
              Envoyer ma demande
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
