import Nav from '../components/Nav';
import Footer from '../components/Footer';
import useSEO from '../hooks/useSEO';

function PrivacyPage() {
  useSEO({
    title: 'Privacy Policy',
    description: 'Privacy policy for zerovector.design, Open Vector, and Investiture.',
    path: '/privacy',
  });

  return (
    <div className="zv-page zv-info-page">
      <Nav />

      <section className="zv-section">
        <div className="zv-container zv-legal">
          <h1>Privacy Policy</h1>
          <p className="zv-legal-updated">Last updated: March 5, 2026</p>

          <p>
            This privacy policy describes how zerovector.design ("Zero Vector," "we," "us") handles
            information when you use our website and services, including the Zero Vector manifesto,
            Open Vector learning platform, and Investiture.
          </p>

          <h2>What We Collect</h2>

          <h3>Google Sign-In</h3>
          <p>
            Open Vector offers optional sign-in via Google OAuth (through Supabase). When you sign in,
            we receive your name, email address, and profile photo from Google. This is used solely to
            identify your account and track your learning progress across sessions. We do not access
            your Google contacts, calendar, drive, or any other Google services.
          </p>

          <h3>Learning Progress</h3>
          <p>
            If you sign in, we store your lesson completion progress in our database (Supabase) so it
            persists across devices. If you use the site without signing in, progress is stored locally
            in your browser and we do not have access to it.
          </p>

          <h3>AI Chat</h3>
          <p>
            The Ask and Open Vector Chat features send your messages to Anthropic's Claude API to
            generate responses. We do not store your chat messages or conversations. Messages are
            transmitted to Anthropic for processing and are subject to{' '}
            <a href="https://www.anthropic.com/privacy" target="_blank" rel="noopener noreferrer">
              Anthropic's privacy policy
            </a>.
          </p>

          <h3>Analytics</h3>
          <p>
            We use Google Analytics to understand how visitors use the site (pages visited, time on
            site, general location). This data is aggregated and does not personally identify you. You
            can opt out using browser extensions or privacy settings.
          </p>

          <h3>Email</h3>
          <p>
            If you subscribe to our newsletter (via Buttondown), we collect your email address to send
            updates. You can unsubscribe at any time via the link in any email.
          </p>

          <h2>What We Do Not Collect</h2>
          <p>
            We do not sell, rent, or share your personal information with third parties for marketing
            purposes. We do not use tracking pixels, fingerprinting, or any form of cross-site tracking
            beyond Google Analytics.
          </p>

          <h2>Data Storage</h2>
          <p>
            Account and progress data is stored in Supabase (hosted on AWS). We retain your data for as
            long as your account exists. If you want your data deleted, contact us and we will remove it.
          </p>

          <h2>Cookies</h2>
          <p>
            We use essential cookies for authentication (maintaining your signed-in session) and Google
            Analytics cookies for usage statistics. We do not use advertising cookies.
          </p>

          <h2>Third-Party Services</h2>
          <ul>
            <li><strong>Supabase</strong> — authentication and data storage</li>
            <li><strong>Google</strong> — OAuth sign-in and analytics</li>
            <li><strong>Anthropic</strong> — AI chat processing</li>
            <li><strong>Buttondown</strong> — email newsletter</li>
            <li><strong>Netlify</strong> — website hosting</li>
          </ul>

          <h2>Children</h2>
          <p>
            Zero Vector is not directed at children under 13. We do not knowingly collect information
            from children under 13.
          </p>

          <h2>Changes</h2>
          <p>
            We may update this policy as our services evolve. Changes will be posted on this page with
            an updated date.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about this policy? Reach out at{' '}
            <a href="mailto:hello@zerovector.design">hello@zerovector.design</a>.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default PrivacyPage;
