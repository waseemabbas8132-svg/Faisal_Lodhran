import Reveal from './Reveal.jsx';

export default function Journey({ journey }) {
  return (
    <section id="journey" className="pad">
      <div className="section-glow">
        <span className="glow-a"></span>
        <span className="glow-b"></span>
      </div>
      <div className="container">
        <Reveal className="section-head">
          <div className="eyebrow"><i className="fa-solid fa-route"></i> Journey</div>
          <h2>Professional Journey</h2>
          <p>A quick look at how my path across automation and development has progressed.</p>
        </Reveal>
        <div className="timeline">
          {journey.map((step, i) => (
            <Reveal as="div" className="t-item" delay={i * 120} key={i}>
              <div className="t-dot"><i className={step.icon}></i></div>
              <div className="t-card">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
