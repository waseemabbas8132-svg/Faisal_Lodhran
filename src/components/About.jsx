import Reveal from './Reveal.jsx';

export default function About({ about }) {
  return (
    <section id="about" className="pad">
      <div className="section-glow">
        <span className="glow-a"></span>
        <span className="glow-b"></span>
      </div>
      <div className="container about-grid">
        <Reveal className="about-visual">
          <div className="about-photo-wrap">
            <div className="about-photo-ring"></div>
            <img
              src="/images/profile.png"
              alt="Faisal Imam"
              className="about-photo-img"
            />
            <div className="about-badge"><i className="fa-solid fa-check-double"></i> Verified Pro</div>
          </div>
        </Reveal>
        <Reveal className="about-copy" delay={120}>
          <div className="eyebrow"><i className="fa-solid fa-user"></i> About Me</div>
          <h2>About Me</h2>
          <p>{about.paragraph}</p>
          <div className="about-points">
            {about.points.map((p, i) => (
              <div key={i}><i className="fa-solid fa-check"></i> {p}</div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
