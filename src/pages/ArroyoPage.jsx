import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Animate from '../components/Animate';
import useSEO from '../hooks/useSEO';
import ArroyoPipelineRow from '../components/arroyo/ArroyoPipelineRow';
import '../styles/site.css';
import en from '../content/en';

const { arroyo: arr } = en;

function ArroyoPage() {
  const { pathname } = useLocation();
  const [isNight, setIsNight] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useSEO({
    title: 'Arroyo Labs',
    description: 'We build your MVP. Real code, real architecture, real product. You own the repo. We exit.',
    path: '/arroyo',
  });

  useEffect(() => {
    document.body.style.background = isNight ? '#0F0E0A' : '#F5EDE3';
    document.body.style.color = isNight ? '#C8BBAB' : '#2D1B19';
    document.body.style.margin = '0';
    document.body.style.minHeight = '100vh';
    document.body.style.transition = 'background-color 1.5s ease, color 1.2s ease';
    return () => {
      document.body.style.background = '';
      document.body.style.color = '';
      document.body.style.minHeight = '';
      document.body.style.transition = '';
    };
  }, [isNight]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`arr-page${isNight ? ' arr-page--night' : ''}`}>
      {/* Nav */}
      <nav className="arr-nav">
        <div className="arr-nav-inner">
          <div className="arr-nav-brand-group">
            <span className="arr-nav-brand">{arr.nav.brand}</span>
            <span className="arr-nav-divider" />
            <span className="arr-nav-tagline">{arr.nav.tagline}</span>
          </div>
          <div className="arr-nav-links">
            <button className="arr-nav-link" onClick={() => scrollTo('how-it-works')}>How It Works</button>
            <button className="arr-nav-link" onClick={() => scrollTo('compare')}>Compare</button>
            <button className="arr-nav-link" onClick={() => scrollTo('pricing')}>Pricing</button>
            <button
              className="arr-night-toggle"
              onClick={() => setIsNight(!isNight)}
              aria-label={isNight ? 'Switch to day mode' : 'Switch to night mode'}
            >
              {isNight ? '\u2600' : '\u263D'}
            </button>
            <a href={arr.cta.bookingUrl} target="_blank" rel="noopener noreferrer" className="arr-btn arr-btn--primary arr-btn--sm">
              {arr.nav.cta} &rarr;
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="arr-section arr-hero">
        {/* Desert Scene */}
        <div className="arr-scene" aria-hidden="true">
          <div className="arr-stars" />
          <img className="arr-sun" src="/arroyo-scene/sun-1.png" alt="" />
          <img className="arr-moon" src="/arroyo-scene/sun-1.png" alt="" />
          <img className="arr-cloud arr-cloud--1" src="/arroyo-scene/cloud-1.png" alt="" />
          <img className="arr-cloud arr-cloud--2" src="/arroyo-scene/cloud-2.png" alt="" />
          <img className="arr-butte arr-butte--1" src="/arroyo-scene/butte-1.png" alt="" />
          <img className="arr-butte arr-butte--2" src="/arroyo-scene/butte-2.png" alt="" />
          <img className="arr-butte arr-butte--3" src="/arroyo-scene/butte-3.png" alt="" />
          <div className="arr-ground" />
          <img className="arr-saguaro arr-saguaro--1" src="/arroyo-scene/saguaro-1.png" alt="" />
          <img className="arr-pricklypear" src="/arroyo-scene/pricklypear-1.png" alt="" />
          <img className="arr-bones" src="/arroyo-scene/bones-1.png" alt="" />
          <img className="arr-yucca" src="/arroyo-scene/yucca-1.png" alt="" />
          <img className="arr-joshua" src="/arroyo-scene/joshua-1.png" alt="" />
          <img className="arr-saturn-v" src="/arroyo-scene/saturn-v-1.png" alt="" />
          <img className="arr-cactus-group" src="/arroyo-scene/cactus-group-1.png" alt="" />
          <img className="arr-saguaro arr-saguaro--2" src="/arroyo-scene/saguaro-2.png" alt="" />
        </div>

        {/* White card floating over the scene */}
        <div className="arr-hero-card-wrapper">
          <div className="arr-hero-card">
            <h1 className="arr-hero-title">
              {arr.hero.titleLines[0]}<br />
              <span className="arr-hero-accent">{arr.hero.titleLines[1]}</span><br />
              {arr.hero.titleLines[2]}
            </h1>
            <p className="arr-hero-subtitle">
              {arr.hero.subtitle}
            </p>
            <p className="arr-hero-aside">
              {arr.hero.aside}
            </p>
            <p className="arr-hero-credibility">
              {arr.hero.credibility}
            </p>
            <div className="arr-hero-ctas">
              <a href={arr.cta.bookingUrl} target="_blank" rel="noopener noreferrer" className="arr-btn arr-btn--primary">
                {arr.hero.primaryCta} &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The Real Question */}
      <section className="arr-section arr-section--elevated">
        <div className="arr-container">
          <Animate>
            <div className="arr-label">{arr.problem.label}</div>
            <h2 className="arr-headline">
              {arr.problem.headline.split('\n').map((line, i) => (
                <span key={i}>{line}{i === 0 && <br />}</span>
              ))}
            </h2>
          </Animate>
          <Animate>
            <div className="arr-problem-body">
              {arr.problem.body.map((p, i) => (
                <p key={i} className="arr-body">{p}</p>
              ))}
            </div>
          </Animate>
        </div>
      </section>

      {/* Three Paths */}
      <section id="compare" className="arr-section arr-section--light">
        <div className="arr-container">
          <Animate>
            <div className="arr-label arr-label--dark">{arr.compare.label}</div>
            <h2 className="arr-headline arr-headline--dark">{arr.compare.headline}</h2>
            <p className="arr-subtitle arr-subtitle--dark">{arr.compare.subtitle}</p>
          </Animate>
          <div className="arr-approaches">
            {arr.compare.approaches.map((a, i) => (
              <Animate key={i}>
                <div className={`arr-approach arr-approach--${a.variant}`}>
                  <div className="arr-approach-name">{a.name}</div>
                  <p className="arr-approach-desc">{a.desc}</p>
                  <div className="arr-approach-items">
                    {a.items.map((item, j) => (
                      <div key={j} className="arr-approach-item">{item}</div>
                    ))}
                  </div>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* What's Different */}
      <section className="arr-section arr-section--light-elevated">
        <div className="arr-container">
          <Animate>
            <div className="arr-label arr-label--dark">{arr.pipeline.label}</div>
            <h2 className="arr-headline arr-headline--dark">
              {arr.pipeline.headline}
            </h2>
            <p className="arr-subtitle arr-subtitle--dark">{arr.pipeline.subtitle}</p>
          </Animate>
          {arr.pipeline.rows.map((row, i) => (
            <Animate key={i}>
              <ArroyoPipelineRow {...row} />
            </Animate>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="arr-section arr-section--teal">
        <div className="arr-container">
          <Animate>
            <div className="arr-label">{arr.howItWorks.label}</div>
            <h2 className="arr-headline">{arr.howItWorks.headline}</h2>
            <p className="arr-subtitle">{arr.howItWorks.subtitle}</p>
          </Animate>
          <div className="arr-stages-grid">
            {arr.howItWorks.stages.map((s) => (
              <Animate key={s.num}>
                <div className={`arr-stage-card arr-stage-card--${s.variant}`}>
                  <div className="arr-stage-accent" />
                  <div className="arr-stage-num">{s.num}</div>
                  <div className="arr-stage-label">{s.label}</div>
                  <div className="arr-stage-body">{s.body}</div>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="arr-section">
        <div className="arr-container">
          <Animate>
            <div className="arr-label">{arr.whatYouGet.label}</div>
            <h2 className="arr-headline">{arr.whatYouGet.headline}</h2>
            <p className="arr-subtitle">{arr.whatYouGet.subtitle}</p>
          </Animate>
          <div className="arr-deliverables">
            {arr.whatYouGet.deliverables.map((d, i) => (
              <Animate key={i}>
                <div className="arr-deliverable">
                  <div className={`arr-deliverable-num arr-deliverable-num--${d.variant}`}>{d.num}</div>
                  <div className="arr-deliverable-content">
                    <div className="arr-deliverable-title">{d.title}</div>
                    <div className="arr-deliverable-body">{d.body}</div>
                  </div>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA — combined pricing + engage */}
      <section id="pricing" className="arr-section arr-section--dark arr-cta-section">
        <div className="arr-cta-glow" aria-hidden="true" />

        {/* Desert footer scene */}
        <div className="arr-footer-scene" aria-hidden="true">
          <img className="arr-footer-butte arr-footer-butte--1" src="/arroyo-scene/butte-1.png" alt="" />
          <img className="arr-footer-butte arr-footer-butte--2" src="/arroyo-scene/butte-2.png" alt="" />
          <img className="arr-footer-saguaro arr-footer-saguaro--1" src="/arroyo-scene/saguaro-1.png" alt="" />
          <img className="arr-footer-saguaro arr-footer-saguaro--2" src="/arroyo-scene/saguaro-2.png" alt="" />
          <img className="arr-footer-joshua" src="/arroyo-scene/joshua-1.png" alt="" />
          <div className="arr-footer-ground" />
        </div>

        <div className="arr-container arr-cta-inner">
          <Animate>
            <div className="arr-cta-label">{arr.cta.label}</div>
          </Animate>
          <Animate>
            <h2 className="arr-cta-headline">
              {arr.cta.headline.split('\n').map((line, i) => (
                <span key={i}>{line}{i === 0 && <br />}</span>
              ))}
            </h2>
          </Animate>
          <Animate>
            <p className="arr-cta-body">{arr.cta.body}</p>
            <p className="arr-cta-tagline">{arr.cta.tagline}</p>
          </Animate>
          <Animate>
            <div className="arr-pricing-cta">
              <a href={arr.cta.bookingUrl} target="_blank" rel="noopener noreferrer" className="arr-btn arr-btn--primary arr-btn--lg">
                Book a Call &rarr;
              </a>
            </div>
          </Animate>
        </div>
      </section>

      {/* Footer */}
      <footer className="arr-footer">
        <div className="arr-footer-inner">
          <div className="arr-footer-brand-group">
            <span className="arr-footer-brand">{arr.footer.brand}</span>
            <span className="arr-footer-tagline">{arr.footer.tagline}</span>
          </div>
          <div className="arr-footer-links">
            {arr.footer.links.map((link, i) => (
              <Link key={i} to={link.href} className="arr-footer-link">{link.label}</Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ArroyoPage;
