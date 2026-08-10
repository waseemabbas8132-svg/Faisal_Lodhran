import { useEffect, useState } from 'react';
import { portfolioData } from '../data.js';

const links = ['Home', 'About', 'Journey', 'Services', 'Skills', 'Portfolio'];
const contactEmail = portfolioData.contact.email;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.toLowerCase()))
      .filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header id="navbar" className={scrolled ? 'scrolled' : ''}>
        <div className="nav-inner">
          <a href="#home" className="logo">FAISAL<span className="dot">.</span></a>
          <nav className="nav-links">
            {links.map((l) => {
              const id = l.toLowerCase();
              return (
                <a key={l} href={`#${id}`} className={activeId === id ? 'active' : ''}>{l}</a>
              );
            })}
          </nav>
          <div className="nav-actions">
            <a href={`mailto:${contactEmail}`} className="btn btn-primary btn-sm">Let's Talk</a>
            <button className="nav-toggle" aria-label="Open menu" onClick={() => setMenuOpen(true)}>
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>
      </header>

      <div className={`overlay ${menuOpen ? 'show' : ''}`} onClick={() => setMenuOpen(false)}></div>
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <button className="close-btn" aria-label="Close menu" onClick={() => setMenuOpen(false)}>
          <i className="fa-solid fa-xmark"></i>
        </button>
        {links.map((l) => (
          <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{l}</a>
        ))}
        <a href={`mailto:${contactEmail}`} className="btn btn-primary" style={{ marginTop: 16, justifyContent: 'center' }} onClick={() => setMenuOpen(false)}>
          Let's Talk
        </a>
      </div>
    </>
  );
}
