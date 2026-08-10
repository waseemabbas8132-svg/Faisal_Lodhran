import Reveal from './Reveal.jsx';

export default function Footer({ contact }) {
  return (
    <footer>
      <div className="section-glow">
        <span className="glow-a"></span>
        <span className="glow-b"></span>
      </div>
      <div className="container">
        <Reveal className="footer-grid">
          <div className="footer-brand">
            <a href="#home" className="logo">FAISAL<span className="dot" style={{ color: 'var(--purple-light)' }}>.</span></a>
            <p>Helping businesses grow with GoHighLevel CRM & Automation.</p>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
            </ul>
          </div>
          <div className="footer-social">
            <h4>Follow</h4>
            <div className="social-row">
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
              <a href="#" aria-label="GitHub"><i className="fa-brands fa-github"></i></a>
              <a href="#" aria-label="Discord" title={contact.discord}><i className="fa-brands fa-discord"></i></a>
              <a href={`mailto:${contact.email}`} aria-label="Email"><i className="fa-solid fa-envelope"></i></a>
            </div>
          </div>
        </Reveal>
        <div className="footer-bottom">© 2026 Faisal Imam</div>
      </div>
    </footer>
  );
}
