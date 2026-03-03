import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Animate from '../components/Animate';
import useSEO from '../hooks/useSEO';
import '../styles/site.css';
import en from '../content/en';

const { investiture: inv } = en;

function InvestiturePage() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useSEO({
    title: 'Investiture',
    description: 'The AI-native project scaffold. Start every project with VECTOR.md doctrine, structured research schemas, and clean architecture. Clone it, open Claude Code, start building.',
    path: '/investiture',
    ogImage: 'https://zerovector.design/og/investiture.png',
  });

  useEffect(() => {
    document.body.style.background = '#0a1628';
    document.body.style.color = '#e8e0d0';
    document.body.style.margin = '0';
    document.body.style.minHeight = '100vh';
    return () => {
      document.body.style.background = '';
      document.body.style.color = '';
      document.body.style.minHeight = '';
    };
  }, []);

  return (
    <div className="inv-page">
      {/* Stormlight — floating spren particles */}
      <div className="inv-stormlight" aria-hidden="true">
        {Array.from({ length: 24 }, (_, i) => (
          <span key={i} className="inv-spren" style={{ '--spren': i }} />
        ))}
      </div>

      {/* Nav */}
      <nav className="inv-nav">
        <div className="inv-nav-inner">
          <Link to="/" className="inv-nav-back">{inv.nav.back}</Link>
          <span className="inv-nav-brand">{inv.nav.brand}</span>
          <Link to="/open/learn" className="inv-nav-link">Learn</Link>
          <a href={inv.cta.primaryUrl} target="_blank" rel="noopener noreferrer" className="inv-nav-link">{inv.nav.github}</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="inv-section inv-hero">
        <div className="inv-container">
          <div className="inv-label">{inv.hero.label}</div>
          <div className="inv-badge">{inv.hero.badge}</div>
          <div className="inv-hero-glow" aria-hidden="true" />
          <h1 className="inv-hero-title">
            <span className="inv-hero-light">{inv.hero.title[0]}</span>
            <span className="inv-hero-heavy">{inv.hero.title[1]}</span>
          </h1>
          <p className="inv-subtitle">{inv.hero.subtitle}</p>
        </div>
      </section>

      {/* What It Is */}
      <section className="inv-section">
        <div className="inv-container">
          <hr className="inv-rule" />
          <Animate>
            <div className="inv-label">{inv.whatItIs.label}</div>
            <h2 className="inv-section-headline">{inv.whatItIs.headline}</h2>
            <p className="inv-section-body">{inv.whatItIs.body}</p>
          </Animate>
          <Animate delay={1}>
            <div className="inv-card inv-card--steel" style={{ marginTop: 32 }}>
              <h3 className="inv-card-title">{inv.whatItIs.callout.title}</h3>
              <p className="inv-card-body">{inv.whatItIs.callout.body}</p>
            </div>
          </Animate>
        </div>
      </section>

      {/* What You Get — file tree + reading order */}
      <section className="inv-section inv-section--blueprint">
        <div className="inv-container">
          <hr className="inv-rule" />
          <Animate>
            <div className="inv-label">{inv.whatYouGet.label}</div>
            <p className="inv-intro">{inv.whatYouGet.intro}</p>
          </Animate>
          <Animate delay={1}>
            <div className="inv-filetree-wrapper">
              <div className="inv-terminal-bar">
                <div className="inv-terminal-dots" aria-hidden="true">
                  <span /><span /><span />
                </div>
                <span className="inv-terminal-title">project structure</span>
              </div>
              <pre className="inv-filetree">{inv.whatYouGet.fileTree}</pre>
            </div>
          </Animate>
          <Animate delay={2}>
            <div className="inv-reading-order">
              {inv.whatYouGet.readingOrder.map((item, i) => (
                <div key={i} className="inv-reading-step">
                  <div className="inv-reading-step-number">{item.step}</div>
                  <div className="inv-reading-step-content">
                    <h3 className="inv-reading-step-file">{item.file}</h3>
                    <p className="inv-reading-step-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="inv-reading-caption">{inv.whatYouGet.readingOrderCaption}</p>
          </Animate>
        </div>
      </section>

      {/* The Zero Vector Connection */}
      <section className="inv-section">
        <div className="inv-container">
          <hr className="inv-rule" />
          <Animate>
            <div className="inv-label">{inv.connection.label}</div>
            <h2 className="inv-section-headline">{inv.connection.headline}</h2>
            <p className="inv-section-body">{inv.connection.body}</p>
          </Animate>
        </div>
      </section>

      {/* Quick Start */}
      <section className="inv-section">
        <div className="inv-container">
          <hr className="inv-rule" />
          <Animate>
            <div className="inv-label">{inv.quickstart.label}</div>
            <p className="inv-intro">{inv.quickstart.intro}</p>
          </Animate>
          <Animate delay={1}>
            <div className="inv-terminal">
              <div className="inv-terminal-bar">
                <div className="inv-terminal-dots" aria-hidden="true">
                  <span /><span /><span />
                </div>
                <span className="inv-terminal-title">terminal</span>
              </div>
              <div className="inv-terminal-body">
                {inv.quickstart.commands.map((cmd, i) => (
                  <div key={i} className="inv-terminal-line">
                    <span className="inv-terminal-prompt">$</span>
                    <span className="inv-terminal-cmd">{cmd}</span>
                  </div>
                ))}
                <div className="inv-terminal-line">
                  <span className="inv-terminal-prompt">$</span>
                  <span className="inv-terminal-cursor" />
                </div>
              </div>
            </div>
          </Animate>
          <Animate delay={2}>
            <p className="inv-after">{inv.quickstart.after}</p>
          </Animate>
        </div>
      </section>

      {/* What's Coming — Roadmap */}
      <section className="inv-section">
        <div className="inv-container">
          <hr className="inv-rule" />
          <Animate>
            <div className="inv-label">{inv.roadmap.label}</div>
          </Animate>
          <div className="inv-two-col">
            {inv.roadmap.versions.map((ver, i) => (
              <Animate key={i} delay={i}>
                <div className="inv-card inv-card--gold">
                  <div className="inv-roadmap-version">{ver.version}</div>
                  <h3 className="inv-card-title">{ver.title}</h3>
                  <p className="inv-card-body">{ver.body}</p>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="inv-section inv-quote-section">
        <div className="inv-container">
          <hr className="inv-rule inv-rule--diamond" />
          <Animate>
            <blockquote className="inv-quote">{inv.quote.text}</blockquote>
            <cite className="inv-cite">{inv.quote.cite}</cite>
          </Animate>
          <Animate delay={1}>
            <p className="inv-context">{inv.quote.context}</p>
          </Animate>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="inv-section inv-cta-section">
        <div className="inv-container">
          <hr className="inv-rule" />
          <Animate>
            <div className="inv-cta-buttons">
              <a href={inv.cta.primaryUrl} target="_blank" rel="noopener noreferrer" className="inv-btn inv-btn--primary">{inv.cta.primaryCta}</a>
              <a href={inv.cta.secondaryUrl} target="_blank" rel="noopener noreferrer" className="inv-btn inv-btn--outline">{inv.cta.secondaryCta}</a>
            </div>
          </Animate>
        </div>
      </section>
    </div>
  );
}

export default InvestiturePage;
