import Nav from '../components/Nav';
import Footer from '../components/Footer';
import useSEO from '../hooks/useSEO';

function TermsPage() {
  useSEO({
    title: 'Terms of Service',
    description: 'Terms of service for zerovector.design, Open Vector, and Investiture.',
    path: '/terms',
  });

  return (
    <div className="zv-page zv-info-page">
      <Nav />

      <section className="zv-section">
        <div className="zv-container zv-legal">
          <h1>Terms of Service</h1>
          <p className="zv-legal-updated">Last updated: March 5, 2026</p>

          <p>
            By using zerovector.design ("Zero Vector," "the site"), including the Zero Vector manifesto,
            Open Vector learning platform, and Investiture, you agree to these terms.
          </p>

          <h2>What This Site Is</h2>
          <p>
            Zero Vector is a design manifesto and learning platform created by Erika Flowers. Open
            Vector is a free educational resource for design-led engineering. Investiture is a premium
            design framework exploration hosted on this site. All content is provided for educational
            and informational purposes.
          </p>

          <h2>Accounts</h2>
          <p>
            You may use most of the site without an account. Signing in with Google is optional and
            enables progress tracking. You are responsible for your account activity. We may suspend or
            remove accounts that violate these terms.
          </p>

          <h2>Acceptable Use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the site for any unlawful purpose</li>
            <li>Attempt to gain unauthorized access to our systems or other users' data</li>
            <li>Abuse the AI chat features (e.g., sending harmful, abusive, or excessively automated requests)</li>
            <li>Scrape or bulk-download site content for redistribution</li>
            <li>Misrepresent your identity or affiliation</li>
          </ul>

          <h2>Intellectual Property</h2>
          <p>
            All content on Zero Vector — including text, design, code examples, lesson materials,
            Investiture content, and the Zero Vector manifesto — is the intellectual property of Erika
            Flowers unless otherwise noted. You may reference and link to our content freely. You may
            not republish, resell, or redistribute substantial portions without permission.
          </p>
          <p>
            Open Vector lesson content is intended as educational material. You are welcome to apply
            what you learn in your own work — that is the point.
          </p>

          <h2>AI Features</h2>
          <p>
            The Ask and Chat features use Anthropic's Claude to generate responses. AI-generated
            content is provided as-is and may not always be accurate. Do not rely on AI responses as
            professional advice. Your use of AI features is also subject to{' '}
            <a href="https://www.anthropic.com/terms" target="_blank" rel="noopener noreferrer">
              Anthropic's terms of service
            </a>.
          </p>

          <h2>Availability</h2>
          <p>
            We aim to keep the site available but do not guarantee uptime. We may modify, suspend, or
            discontinue any part of the site at any time. Free services (including Open Vector) may
            change scope or availability.
          </p>

          <h2>Disclaimers</h2>
          <p>
            The site and all content are provided "as is" without warranties of any kind, express or
            implied. We are not liable for any damages arising from your use of the site, including
            reliance on AI-generated content or educational materials.
          </p>

          <h2>Termination</h2>
          <p>
            We may terminate or suspend your access at our discretion if you violate these terms. You
            may stop using the site at any time.
          </p>

          <h2>Changes</h2>
          <p>
            We may update these terms as the site evolves. Continued use after changes constitutes
            acceptance. Material changes will be noted on this page.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these terms? Reach out at{' '}
            <a href="mailto:hello@zerovector.design">hello@zerovector.design</a>.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default TermsPage;
