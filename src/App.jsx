import ScrollProgress from './components/ScrollProgress.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Journey from './components/Journey.jsx';
import Services from './components/Services.jsx';
import Skills from './components/Skills.jsx';
import Portfolio from './components/Portfolio.jsx';
import Footer from './components/Footer.jsx';
import { portfolioData as data } from './data.js';

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <Hero hero={data.hero} contact={data.contact} />
      <About about={data.about} />
      <Journey journey={data.journey} />
      <Services services={data.services} />
      <Skills skills={data.skills} />
      <Portfolio items={data.portfolio} />
      <Footer contact={data.contact} />
    </>
  );
}
