import Reveal from './Reveal.jsx';

export default function Skills({ skills }) {
  return (
    <section id="skills" className="pad">
      <div className="section-glow">
        <span className="glow-a"></span>
        <span className="glow-b"></span>
      </div>
      <div className="container">
        <Reveal className="section-head">
          <div className="eyebrow"><i className="fa-solid fa-star"></i> Skills</div>
          <h2>Tools & Technologies</h2>
          <p>The platforms and languages I use to build and automate.</p>
        </Reveal>
        <div className="skill-grid">
          {skills.map((s, i) => (
            <Reveal as="div" className="skill-card" delay={i * 40} key={i}>
              <i className={s.icon}></i>
              <span>{s.name}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
