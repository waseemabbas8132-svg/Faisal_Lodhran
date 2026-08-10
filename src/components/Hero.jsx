export default function Hero({ hero, contact }) {
  return (
    <section id="home">
      <div className="section-glow">
        <span className="glow-a"></span>
        <span className="glow-b"></span>
        <span className="glow-c"></span>
      </div>
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow"><i className="fa-solid fa-bolt"></i> {hero.eyebrow}</div>
          <h1>{hero.heading}</h1>
          <p>{hero.description}</p>
          <div className="hero-btns">
            <a href="#portfolio" className="btn btn-primary">View Portfolio</a>
            <a href={`mailto:${contact.email}`} className="btn btn-outline">Contact Me</a>
          </div>
          <div className="stat-row">
            {hero.stats.map((s, i) => (
              <div className="stat-item" key={i}>
                <div className="stat-icon"><i className={s.icon}></i></div>
                <div><strong>{s.value}</strong><span>{s.label}</span></div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="hv-ring"></div>
          <div className="hv-card">
            <img src="/images/profile.png" alt="Faisal Imam" className="hv-avatar-img" />
            <div className="float-chip chip-1"><i className="fa-solid fa-filter"></i> Funnels</div>
            <div className="float-chip chip-2"><i className="fa-solid fa-gears"></i> Automation</div>
            <div className="float-chip chip-3"><i className="fa-solid fa-arrows-spin"></i> Workflows</div>
          </div>
        </div>
      </div>
    </section>
  );
}
