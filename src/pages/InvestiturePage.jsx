import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Animate from '../components/Animate';
import useSEO from '../hooks/useSEO';
import '../styles/site.css';
import en from '../content/en';

const { investiture: inv } = en;

function InvestiturePage() {
  const { pathname } = useLocation();
  const [copiedIdx, setCopiedIdx] = useState(null);
  const [heroInput, setHeroInput] = useState('Investiture');
  const [promptFocused, setPromptFocused] = useState(false);
  const promptRef = useRef(null);

  const copyCmd = (cmd, idx) => {
    navigator.clipboard.writeText(cmd);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 1800);
  };

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
    console.log(
      '%c"The most important step a man can take is the next one." %c- Dalinar Kholin',
      'color: #c9a84c; font-size: 14px; font-style: italic;',
      'color: #8a9ab5; font-size: 12px;'
    );
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
          <Link to="/investiture/changelog" className="inv-nav-link">{inv.nav.changelog}</Link>
          <a href={inv.cta.primaryUrl} target="_blank" rel="noopener noreferrer" className="inv-nav-link">{inv.nav.github}</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="inv-section inv-hero">
        <div className="inv-container">
          <div className="inv-hero-glow" aria-hidden="true" />
          <div className="inv-label">{inv.hero.label}</div>
          <p className="inv-hero-epigraph">{inv.hero.epigraph[0]}<br />{inv.hero.epigraph[1]}</p>
          <div className="inv-hero-ornament" aria-hidden="true" />
          <h1 className="inv-sr-only">Investiture</h1>
          {/* The title IS a prompt — Investiture is something you build */}
          <div className="inv-hero-prompt-whisper" aria-hidden="true">"Say the words..."</div>
          <label
            className={`inv-hero-prompt${promptFocused ? ' inv-hero-prompt--focused' : ''}`}
            onClick={() => promptRef.current?.focus()}
          >
            <span className="inv-hero-prompt-char" aria-hidden="true">&gt;</span>
            <input
              ref={promptRef}
              className="inv-hero-prompt-input"
              type="text"
              value={heroInput}
              onChange={(e) => setHeroInput(e.target.value)}
              onFocus={() => {
                setPromptFocused(true);
                if (heroInput === 'Investiture') setHeroInput('');
              }}
              onBlur={() => {
                setPromptFocused(false);
                if (!heroInput.trim()) setHeroInput('Investiture');
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && heroInput.trim() && heroInput !== 'Investiture') {
                  e.target.blur();
                }
              }}
              placeholder="What will you build?"
              aria-label="Investiture: what will you build?"
              spellCheck={false}
              autoComplete="off"
            />
            {!promptFocused && heroInput === 'Investiture' && (
              <span className="inv-hero-prompt-cursor" aria-hidden="true">_</span>
            )}
          </label>
          <p className="inv-hero-creed">{inv.hero.subtitle}</p>
        </div>
      </section>

      {/* CTA — Start Building (inverted) */}
      <section className="inv-section" style={{ paddingTop: 0 }}>
        <div className="inv-container">
          <Animate>
            <div className="inv-cta-inverted">
              <h2 className="inv-cta-inverted-title">Start Building</h2>
              <p className="inv-cta-inverted-body">The scaffold is free. The knowledge is free. The only cost is your willingness to take the next step.</p>
              <div className="inv-cta-inverted-buttons">
                <a href={inv.cta.primaryUrl} target="_blank" rel="noopener noreferrer" className="inv-btn inv-btn--dark">{inv.cta.primaryCta}</a>
                <a href={inv.cta.secondaryUrl} target="_blank" rel="noopener noreferrer" className="inv-btn inv-btn--dark-outline">{inv.cta.secondaryCta}</a>
              </div>
            </div>
          </Animate>
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

      {/* Skills — the skill chain */}
      <section className="inv-section">
        <div className="inv-container">
          <hr className="inv-rule" />
          <Animate>
            <div className="inv-label">{inv.skills.label}</div>
            <h2 className="inv-section-headline">{inv.skills.headline}</h2>
            <p className="inv-section-body">{inv.skills.body}</p>
          </Animate>
          <Animate delay={1}>
            <div className="inv-chain-flow">{inv.skills.flow}</div>
          </Animate>
          <Animate delay={2}>
            <div className="inv-chain">
              {inv.skills.chain.map((skill, i) => (
                <div key={i} className="inv-chain-entry">
                  <div className="inv-chain-entry-header">
                    <span className="inv-chain-entry-name">{skill.name}</span>
                    <span className="inv-chain-entry-role">{skill.role}</span>
                  </div>
                  <p className="inv-chain-entry-desc">{skill.desc}</p>
                  <p className="inv-chain-entry-when">{skill.when}</p>
                </div>
              ))}
            </div>
            <p className="inv-reading-caption">{inv.skills.flowCaption}</p>
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
                  <div
                    key={i}
                    className={`inv-terminal-line inv-terminal-line--copyable${copiedIdx === i ? ' inv-terminal-line--copied' : ''}`}
                    onClick={() => copyCmd(cmd, i)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && copyCmd(cmd, i)}
                  >
                    <span className="inv-terminal-prompt">$</span>
                    <span className="inv-terminal-cmd">{cmd}</span>
                    <span className="inv-terminal-copy-hint">{copiedIdx === i ? 'Copied!' : 'Click to copy'}</span>
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
                <div className={`inv-card inv-card--gold${ver.shipped ? ' inv-card--shipped' : ''}`}>
                  <div className="inv-roadmap-version">
                    {ver.version}
                    {ver.shipped && <span className="inv-roadmap-shipped">Shipped</span>}
                  </div>
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
