import Reveal from './Reveal.jsx';

export default function Services({ services }) {
  return (
    <section id="services" className="pad">
      <div className="section-glow">
        <span className="glow-a"></span>
        <span className="glow-b"></span>
      </div>
      <div className="container">
        <Reveal className="section-head">
          <div className="eyebrow"><i className="fa-solid fa-layer-group"></i> Services</div>
          <h2>What I Do</h2>
          <p>Focused services to help your business run smoother and convert better.</p>
        </Reveal>
        <div className="svc-grid">
          {services.map((s, i) => (
            <Reveal as="div" className="svc-card" delay={i * 80} key={i}>
              <div className="svc-icon"><i className={s.icon}></i></div>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
