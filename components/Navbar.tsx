export default function DashboardPage() {
  const stats = [
    { label: 'Biens en vente', value: '340' },
    { label: 'Nouvelles demandes', value: '58' },
    { label: 'Transactions validées', value: '128' },
    { label: 'Taux de satisfaction', value: '94%' },
  ];

  return (
    <main className="page-shell dashboard-shell">
      <section className="page-header simple-header">
        <div className="container">
          <span className="eyebrow alt">Tableau de bord</span>
          <h1>Vue d’ensemble de l’activité</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="dashboard-grid">
            {stats.map((stat) => (
              <div key={stat.label} className="dashboard-card">
                <span>{stat.label}</span>
                <strong>{stat.value}</strong>
              </div>
            ))}
          </div>

          <div className="table-card">
            <h3>Dernières demandes</h3>
            <table>
              <thead>
                <tr>
                  <th>Client</th>
                  <th>Bien</th>
                  <th>Montant</th>
                  <th>Statut</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Marie Kouassi</td>
                  <td>Villa Cocody</td>
                  <td>72 M</td>
                  <td><span className="status-pill success">Validée</span></td>
                </tr>
                <tr>
                  <td>Thomas Yao</td>
                  <td>Appartement Plateau</td>
                  <td>44 M</td>
                  <td><span className="status-pill warning">En cours</span></td>
                </tr>
                <tr>
                  <td>Fabrice N’Guessan</td>
                  <td>Terrain Marcory</td>
                  <td>26 M</td>
                  <td><span className="status-pill neutral">À revoir</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
