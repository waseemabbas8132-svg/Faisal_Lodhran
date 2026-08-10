import { useState } from 'react';
import Reveal from './Reveal.jsx';

const filters = ['funnels', 'automation', 'dashboard', 'websites'];

function GalleryShot({ variant }) {
  // Purely decorative abstract mockups — fallback if an image fails to load.
  const variants = {
    1: <><div className="blk blk1"></div><div className="blk blk2"></div><div className="blk3"><div></div><div></div></div></>,
    2: <><div className="blk blk2" style={{ width: '40%' }}></div><div className="blk3" style={{ gridTemplateColumns: '1fr' }}><div></div></div></>,
    3: <><div className="blk blk1" style={{ height: '16%' }}></div><div className="blk3"><div></div><div></div></div></>,
    4: <><div className="blk blk2" style={{ width: '70%' }}></div><div className="blk3" style={{ gridTemplateColumns: '1fr 1fr 1fr' }}><div></div><div></div><div></div></div></>,
    5: <><div className="blk blk1" style={{ height: '30%', width: '80%' }}></div><div className="blk3" style={{ gridTemplateColumns: '1fr' }}><div></div></div></>,
    6: <><div className="blk blk2" style={{ width: '50%' }}></div><div className="blk3"><div></div><div></div></div></>,
  };
  return (
    <div className="g-shot">
      <div className="bar"><span className="dotb"></span><span className="dotb"></span><span className="dotb"></span></div>
      {variants[variant] || variants[1]}
    </div>
  );
}

function FunnelPreviewCard({ title, url }) {
  return (
    <div className="funnel-card">
      <div className="funnel-card-icon"><i className="fa-solid fa-filter"></i></div>
      <h4>{title}</h4>
      <p>Live funnel preview — opens in a new tab.</p>
      <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm funnel-preview-btn">
        <i className="fa-solid fa-arrow-up-right-from-square"></i> Preview Funnel
      </a>
    </div>
  );
}

export default function Portfolio({ items }) {
  const [active, setActive] = useState('funnels');

  // Each category may repeat across multiple entries but shares the same
  // image set — dedupe by category, then flatten every image in that set
  // into its own gallery card so all 3 images per category actually show.
  const seenCategories = new Set();
  const uniqueByCategory = items.filter((item) => {
    if (seenCategories.has(item.category)) return false;
    seenCategories.add(item.category);
    return true;
  });

  const funnelItem = uniqueByCategory.find((item) => item.category === 'funnels');
  const funnelLinks = funnelItem?.links || [];

  const gallery = uniqueByCategory
    .filter((item) => item.category !== 'funnels')
    .flatMap((item) =>
      (item.images && item.images.length > 0 ? item.images : [null]).map((src, idx) => ({
        key: `${item.category}-${idx}`,
        category: item.category,
        src,
        variant: (item.id * 10) + idx,
      }))
    );
  const visible = gallery.filter((g) => g.category === active);

  return (
    <section id="portfolio" className="pad">
      <div className="section-glow">
        <span className="glow-a"></span>
        <span className="glow-b"></span>
      </div>
      <div className="container">
        <Reveal className="section-head">
          <div className="eyebrow"><i className="fa-solid fa-images"></i> Portfolio</div>
          <h2>A Look at My Work</h2>
          <p>A gallery of recent funnels, automations, and websites.</p>
        </Reveal>

        <Reveal className="filters" delay={100}>
          {filters.map((f) => (
            <button
              key={f}
              className={`filter-btn ${active === f ? 'active' : ''}`}
              onClick={() => setActive(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </Reveal>

        {active === 'funnels' ? (
          <div className="funnel-grid">
            {funnelLinks.map((f, i) => (
              <Reveal as="div" delay={i * 90} key={f.url}>
                <FunnelPreviewCard title={f.title} url={f.url} />
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="gallery">
            {visible.map((g, i) => (
              <Reveal as="div" className="g-card" delay={i * 90} key={g.key}>
                {g.src ? (
                  <GalleryImageWithFallback src={g.src} variant={g.variant} />
                ) : (
                  <GalleryShot variant={g.variant} />
                )}
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function GalleryImageWithFallback({ src, variant }) {
  const [broken, setBroken] = useState(false);
  if (broken) return <GalleryShot variant={variant} />;
  return (
    <img
      src={src}
      alt=""
      style={{ width: '100%', display: 'block', aspectRatio: '4/3', objectFit: 'cover' }}
      onError={() => setBroken(true)}
    />
  );
}
