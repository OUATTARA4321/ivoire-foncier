* {
  box-sizing: border-box;
}

:root {
  --bg: #f6f8f5;
  --surface: #ffffff;
  --primary: #0d6b45;
  --primary-dark: #084d35;
  --secondary: #eaf7f1;
  --gold: #d9b35c;
  --text: #12251f;
  --muted: #5f726a;
  --border: #dfe9e4;
  --shadow: rgba(18, 37, 31, 0.08);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Inter", sans-serif;
  background: linear-gradient(180deg, #f7f9f8 0%, #f2f7f4 100%);
  color: var(--text);
}

a {
  text-decoration: none;
  color: inherit;
}

button {
  font: inherit;
  cursor: pointer;
  border: none;
}

.container {
  width: min(1120px, calc(100% - 32px));
  margin: 0 auto;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(246, 248, 245, 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 76px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 800;
}

.brand-mark {
  width: 38px;
  height: 38px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, var(--primary), #2ea36b);
  color: white;
  border-radius: 12px;
  box-shadow: 0 12px 24px rgba(13, 107, 69, 0.2);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 28px;
  color: var(--muted);
  font-weight: 600;
}

.btn {
  padding: 0.9rem 1.5rem;
  border-radius: 12px;
  font-weight: 700;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary), #1d8a5f);
  color: white;
  box-shadow: 0 14px 28px rgba(13, 107, 69, 0.2);
}

.btn-secondary {
  background: white;
  color: var(--text);
  border: 1px solid var(--border);
}

.btn-light {
  background: white;
  color: var(--primary-dark);
}

.hero {
  padding: 76px 0 40px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  align-items: center;
  gap: 38px;
}

.pill {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 0.9rem;
  border-radius: 999px;
  background: var(--secondary);
  color: var(--primary);
  font-weight: 700;
  font-size: 0.76rem;
  letter-spacing: 0.03em;
}

.pill.alt {
  background: #edf8f1;
}

.hero-copy h1 {
  font-size: clamp(2.8rem, 5vw, 4.5rem);
  line-height: 1.05;
  margin: 18px 0 18px;
  letter-spacing: -0.06em;
}

.hero-copy p {
  max-width: 620px;
  color: var(--muted);
  font-size: 1.06rem;
  line-height: 1.75;
  margin-bottom: 30px;
}

.hero-actions {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}

.hero-stats {
  list-style: none;
  padding: 0;
  margin: 28px 0 0;
  display: flex;
  flex-wrap: wrap;
  gap: 26px;
}

.hero-stats li {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.hero-stats strong {
  font-size: 1.7rem;
}

.hero-stats span {
  color: var(--muted);
  font-size: 0.9rem;
}

.hero-panel {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 500px;
}

.panel-card {
  background: var(--surface);
  box-shadow: 0 22px 42px var(--shadow);
  border-radius: 28px;
  border: 1px solid var(--border);
}

.card-main {
  width: min(100%, 430px);
  padding: 22px;
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
  margin-bottom: 22px;
}

.status-dot {
  font-size: 0.76rem;
  color: var(--primary);
  background: rgba(13, 107, 69, 0.08);
  padding: 0.45rem 0.7rem;
  border-radius: 999px;
}

.mini-chart {
  height: 185px;
  display: flex;
  align-items: end;
  gap: 12px;
  padding: 20px 12px 10px;
  background: linear-gradient(180deg, #f9fbfa, #eef8f3);
  border-radius: 18px;
}

.mini-chart span {
  display: block;
  width: 100%;
  border-radius: 999px 999px 0 0;
  background: linear-gradient(180deg, #d9b35c, var(--primary));
}

.metrics-row {
  display: flex;
  gap: 16px;
  margin-top: 18px;
}

.metrics-row > div {
  flex: 1;
  background: #f7faf8;
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 16px;
}

.metrics-row small {
  display: block;
  color: var(--muted);
  margin-bottom: 8px;
}

.metrics-row strong {
  font-size: 1.35rem;
}

.card-floating {
  position: absolute;
  right: 0;
  bottom: 18px;
  width: 180px;
  padding: 18px 20px;
}

.card-floating p {
  margin: 0 0 8px;
  color: var(--muted);
}

.card-floating strong {
  display: block;
  font-size: 2rem;
  margin-bottom: 8px;
}

.card-floating span {
  color: var(--primary);
  font-weight: 700;
}

.features,
.stats-section,
.about-section,
.cta-section {
  padding: 54px 0;
}

.section-heading {
  text-align: center;
  margin-bottom: 32px;
}

.section-heading h2,
.stats-grid h2,
.about-text h2,
.cta-box h2 {
  margin-top: 14px;
  font-size: clamp(2rem, 4vw, 2.8rem);
  letter-spacing: -0.05em;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}

.feature-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 22px;
  padding: 28px 22px;
  box-shadow: 0 12px 26px rgba(18, 37, 31, 0.04);
}

.icon {
  width: 52px;
  height: 52px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  background: linear-gradient(135deg, #eefaf3, #f8f0d9);
  font-size: 1.8rem;
  margin-bottom: 18px;
}

.feature-card h3 {
  margin: 0 0 10px;
  font-size: 1.35rem;
}

.feature-card p {
  margin: 0;
  color: var(--muted);
  line-height: 1.7;
}

.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 24px;
  align-items: center;
}

.stats-boxes {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.stats-boxes div {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 26px 18px;
  text-align: center;
  box-shadow: 0 10px 24px rgba(18, 37, 31, 0.03);
}

.stats-boxes strong {
  display: block;
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  margin-bottom: 8px;
}

.stats-boxes span {
  color: var(--muted);
}

.about-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 24px;
  align-items: center;
}

.about-text p {
  color: var(--muted);
  line-height: 1.8;
  font-size: 1rem;
}

.about-card {
  background: linear-gradient(135deg, #0d6b45, #0f7d59);
  color: white;
  border-radius: 26px;
  padding: 26px 24px;
  box-shadow: 0 18px 34px rgba(13, 107, 69, 0.2);
}

.about-card ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 14px;
}

.about-card li {
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 600;
}

.about-card li::before {
  content: "✓";
  display: inline-grid;
  place-items: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.18);
  flex-shrink: 0;
}

.cta-box {
  background: linear-gradient(135deg, var(--primary-dark), var(--primary));
  color: white;
  border-radius: 30px;
  padding: 36px 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.cta-box .pill {
  background: rgba(255, 255, 255, 0.12);
  color: white;
}

.footer {
  padding: 32px 0 52px;
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  border-top: 1px solid var(--border);
  padding-top: 28px;
}

.footer-brand {
  margin-bottom: 8px;
}

.footer p {
  margin: 0;
  color: var(--muted);
}

.footer-links {
  display: flex;
  gap: 20px;
  color: var(--muted);
}

@media (max-width: 860px) {
  .nav {
    flex-wrap: wrap;
    padding: 18px 0;
  }

  .nav-links {
    width: 100%;
    justify-content: center;
  }

  .hero-grid,
  .card-grid,
  .stats-grid,
  .about-grid,
  .cta-box,
  .footer-inner {
    grid-template-columns: 1fr;
    display: grid;
  }

  .cta-box {
    text-align: center;
    justify-items: center;
  }

  .stats-boxes {
    grid-template-columns: 1fr;
  }

  .hero-panel {
    min-height: 360px;
  }
}
