import useInViewOnce from '../hooks/useInViewOnce.js';

/**
 * Wraps any block in a smooth scroll-reveal animation.
 * Usage: <Reveal delay={120}><div className="svc-card">...</div></Reveal>
 */
export default function Reveal({ children, delay = 0, className = '', as = 'div', ...rest }) {
  const [ref, inView] = useInViewOnce();
  const Tag = as;

  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'in-view' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
