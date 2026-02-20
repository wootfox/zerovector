import { useState, useEffect, useCallback } from 'react';
import { useUser } from '../contexts/UserContext';
import { supabase } from '../lib/supabase';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import useSEO from '../hooks/useSEO';

const ADMIN_EMAIL = import.meta.env.VITE_ADMIN_EMAIL;

const ROLE_TITLES = {
  framework: 'Framework Engineer',
  curriculum: 'Curriculum Steward',
  evangelist: 'ZV Evangelist',
  funding: 'Funding Scout',
  visual_architect: 'Visual Architect',
  intern: 'Kestrel Intern',
};

const STATUSES = [
  { id: 'new', label: 'New' },
  { id: 'viewed', label: 'Viewed' },
  { id: 'contacted', label: 'Contacted' },
  { id: 'accepted', label: 'Accepted' },
  { id: 'rejected', label: 'Rejected' },
];

function formatDate(iso) {
  if (!iso) return '\u2014';
  const d = new Date(iso);
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit' });
}

function formatTimeAgo(iso) {
  if (!iso) return '\u2014';
  const d = new Date(iso);
  const now = new Date();
  const diffMs = now - d;
  const diffMins = Math.floor(diffMs / 60000);
  if (diffMins < 60) return `${diffMins}m ago`;
  const diffHours = Math.floor(diffMins / 60);
  if (diffHours < 24) return `${diffHours}h ago`;
  const diffDays = Math.floor(diffHours / 24);
  return `${diffDays}d ago`;
}

/* ── Status Bar (applications) ── */

function StatusBar({ app, onStatusChange }) {
  const [updating, setUpdating] = useState(false);

  async function handleChange(newStatus) {
    if (newStatus === app.status || updating) return;
    setUpdating(true);
    await onStatusChange(app.id, newStatus);
    setUpdating(false);
  }

  return (
    <div className="zv-admin-status-bar">
      <div className="zv-admin-status-buttons">
        {STATUSES.map(s => (
          <button
            key={s.id}
            type="button"
            className={`zv-admin-status-btn zv-admin-status-btn--${s.id} ${app.status === s.id ? 'zv-admin-status-btn--active' : ''}`}
            onClick={() => handleChange(s.id)}
            disabled={updating}
          >
            {s.label}
          </button>
        ))}
      </div>
      {app.status_updated_at && (
        <span className="zv-admin-status-timestamp">
          Status updated {formatDate(app.status_updated_at)}
        </span>
      )}
    </div>
  );
}

/* ── Markdown Export ── */

function applicationToMarkdown(app) {
  const roleAnswers = app.role_answers || {};
  const lines = [
    `# Application: ${app.name}`,
    '',
    `- **Role:** ${ROLE_TITLES[app.role] || app.role}`,
    `- **Email:** ${app.email}`,
    `- **Pronouns:** ${app.pronouns || '\u2014'}`,
    `- **Location:** ${app.location || '\u2014'}`,
    `- **Portfolio:** ${app.portfolio}`,
    app.portfolio2 ? `- **Portfolio 2:** ${app.portfolio2}` : null,
    `- **Hours/week:** ${app.hours || '\u2014'}`,
    `- **Runway:** ${app.runway || '\u2014'}`,
    `- **Source:** ${app.source || '\u2014'}`,
    `- **Status:** ${app.status || 'new'}`,
    `- **Submitted:** ${formatDate(app.submitted_at)}`,
    '',
    '## Endurance Test',
    '',
    `### Why this?`,
    app.why_this || '\u2014',
    '',
    `### What have you built that nobody asked you to build?`,
    app.built_unpaid || '\u2014',
    '',
    `### Endurance story`,
    app.endurance_story || '\u2014',
    '',
    `### AI relationship`,
    app.ai_relationship || '\u2014',
  ];

  if (Object.keys(roleAnswers).length > 0) {
    lines.push('', '## Role-Specific Answers', '');
    for (const [key, val] of Object.entries(roleAnswers)) {
      lines.push(`### ${key}`, val, '');
    }
  }

  if (app.anything_else) {
    lines.push('', '## Anything Else', '', app.anything_else);
  }

  return lines.filter(l => l !== null).join('\n');
}

function downloadMarkdown(app) {
  const md = applicationToMarkdown(app);
  const blob = new Blob([md], { type: 'text/markdown' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${app.name.replace(/\s+/g, '-').toLowerCase()}-${app.role}.md`;
  a.click();
  URL.revokeObjectURL(url);
}

/* ── Application Card ── */

function ApplicationCard({ app, expanded, onToggle, onStatusChange }) {
  const roleAnswers = app.role_answers || {};
  const status = app.status || 'new';
  return (
    <div className={`zv-admin-card ${expanded ? 'zv-admin-card--expanded' : ''}`}>
      <button className="zv-admin-card-header" onClick={onToggle} type="button">
        <div className="zv-admin-card-summary">
          <span className={`zv-admin-card-status-dot zv-admin-card-status-dot--${status}`} />
          <span className="zv-admin-card-name">{app.name}</span>
          <span className="zv-admin-card-role">{ROLE_TITLES[app.role] || app.role}</span>
          <span className="zv-admin-card-email">{app.email}</span>
        </div>
        <div className="zv-admin-card-meta">
          <span className="zv-admin-card-date">{formatDate(app.submitted_at)}</span>
          <span className={`zv-admin-card-badge zv-admin-card-badge--${status}`}>{status}</span>
          <span className="zv-admin-card-chevron">{expanded ? '\u2212' : '+'}</span>
        </div>
      </button>
      {expanded && (
        <div className="zv-admin-card-body">
          <StatusBar app={app} onStatusChange={onStatusChange} />
          <div className="zv-admin-card-section">
            <h4>Basics</h4>
            <dl>
              <dt>Pronouns</dt><dd>{app.pronouns || '\u2014'}</dd>
              <dt>Location</dt><dd>{app.location || '\u2014'}</dd>
              <dt>Portfolio</dt><dd><a href={app.portfolio} target="_blank" rel="noopener noreferrer">{app.portfolio}</a></dd>
              {app.portfolio2 && <><dt>Portfolio 2</dt><dd><a href={app.portfolio2} target="_blank" rel="noopener noreferrer">{app.portfolio2}</a></dd></>}
              <dt>Hours/week</dt><dd>{app.hours || '\u2014'}</dd>
              <dt>Runway</dt><dd>{app.runway || '\u2014'}</dd>
              <dt>Source</dt><dd>{app.source || '\u2014'}</dd>
            </dl>
          </div>
          <div className="zv-admin-card-section">
            <h4>Endurance Test</h4>
            <dl>
              <dt>Why this?</dt><dd>{app.why_this}</dd>
              <dt>Built unpaid</dt><dd>{app.built_unpaid}</dd>
              <dt>Endurance story</dt><dd>{app.endurance_story}</dd>
              <dt>AI relationship</dt><dd>{app.ai_relationship}</dd>
            </dl>
          </div>
          {Object.keys(roleAnswers).length > 0 && (
            <div className="zv-admin-card-section">
              <h4>Role-Specific Answers</h4>
              <dl>
                {Object.entries(roleAnswers).map(([key, val]) => (
                  <span key={key}><dt>{key}</dt><dd>{val}</dd></span>
                ))}
              </dl>
            </div>
          )}
          {app.anything_else && (
            <div className="zv-admin-card-section">
              <h4>Anything else</h4>
              <p>{app.anything_else}</p>
            </div>
          )}
          <div className="zv-admin-card-actions">
            <button
              type="button"
              className="zv-admin-download-btn"
              onClick={() => downloadMarkdown(app)}
            >
              Download as .md
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* ── Kestrel Activity Table ── */

const PROJECT_GITHUB_MAP = {
  'zerovector': 'erikaflowers/zerovector',
  'open-vector-site': 'erikaflowers/zerovector',
  'investiture': 'erikaflowers/zerovector',
};

function KestrelActivity({ isAdmin }) {
  const [checkins, setCheckins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [projectFilter, setProjectFilter] = useState('all');

  useEffect(() => {
    if (!isAdmin || !supabase) return;

    async function fetchCheckins() {
      setLoading(true);
      setError(null);
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (!session) { setError('No session'); setLoading(false); return; }

        const res = await fetch('/.netlify/functions/kestrel-checkin', {
          headers: { Authorization: `Bearer ${session.access_token}` },
        });

        if (!res.ok) {
          const body = await res.json().catch(() => ({}));
          setError(body.error || `Error ${res.status}`);
        } else {
          const body = await res.json();
          setCheckins(body.checkins || []);
        }
      } catch {
        setError('Network error');
      }
      setLoading(false);
    }

    fetchCheckins();
  }, [isAdmin]);

  const projects = [...new Set(checkins.map(c => c.project))];
  const filtered = projectFilter === 'all' ? checkins : checkins.filter(c => c.project === projectFilter);

  function commitLink(checkin) {
    if (!checkin.commit_sha) return '\u2014';
    const repo = PROJECT_GITHUB_MAP[checkin.project];
    const short = checkin.commit_sha.slice(0, 7);
    if (repo) {
      return <a href={`https://github.com/${repo}/commit/${checkin.commit_sha}`} target="_blank" rel="noopener noreferrer">{short}</a>;
    }
    return <span>{short}</span>;
  }

  if (loading) return <div className="zv-admin-status"><p>Loading check-ins...</p></div>;
  if (error) return <div className="zv-admin-status"><p className="zv-join-error">{error}</p></div>;

  return (
    <>
      {projects.length > 1 && (
        <div className="zv-admin-filters">
          <button
            className={`zv-admin-filter ${projectFilter === 'all' ? 'zv-admin-filter--active' : ''}`}
            onClick={() => setProjectFilter('all')}
          >
            All projects ({checkins.length})
          </button>
          {projects.map(p => (
            <button
              key={p}
              className={`zv-admin-filter ${projectFilter === p ? 'zv-admin-filter--active' : ''}`}
              onClick={() => setProjectFilter(p)}
            >
              {p} ({checkins.filter(c => c.project === p).length})
            </button>
          ))}
        </div>
      )}

      {filtered.length === 0 ? (
        <div className="zv-admin-status"><p>No check-ins yet.</p></div>
      ) : (
        <div className="zv-admin-kestrel-table-wrap">
          <table className="zv-admin-kestrel-table">
            <thead>
              <tr>
                <th>Kestrel</th>
                <th>Operator</th>
                <th>Project</th>
                <th>Summary</th>
                <th>Commit</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(c => (
                <tr key={c.id}>
                  <td className="zv-admin-kestrel-id">{c.kestrel_id}</td>
                  <td>{c.operator}</td>
                  <td>{c.project}</td>
                  <td className="zv-admin-kestrel-summary">{c.summary}</td>
                  <td className="zv-admin-kestrel-commit">{commitLink(c)}</td>
                  <td className="zv-admin-kestrel-time">{formatTimeAgo(c.created_at)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

/* ── Main Page ── */

function AdminPage() {
  const { user, isLoggedIn, loading, signIn } = useUser();
  const [applications, setApplications] = useState([]);
  const [fetchLoading, setFetchLoading] = useState(false);
  const [fetchError, setFetchError] = useState(null);
  const [expandedId, setExpandedId] = useState(null);
  const [roleFilter, setRoleFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [activeTab, setActiveTab] = useState('applications');

  useSEO({ title: 'Admin \u2014 Zero Vector', path: '/admin', noIndex: true });

  const isAdmin = isLoggedIn && user?.email === ADMIN_EMAIL;

  useEffect(() => {
    if (!isAdmin || !supabase) return;

    async function fetchApplications() {
      setFetchLoading(true);
      setFetchError(null);
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (!session) { setFetchError('No session'); setFetchLoading(false); return; }

        const res = await fetch('/.netlify/functions/admin-applications', {
          headers: { Authorization: `Bearer ${session.access_token}` },
        });

        if (!res.ok) {
          const body = await res.json().catch(() => ({}));
          setFetchError(body.error || `Error ${res.status}`);
        } else {
          const body = await res.json();
          setApplications(body.applications || []);
        }
      } catch {
        setFetchError('Network error');
      }
      setFetchLoading(false);
    }

    fetchApplications();
  }, [isAdmin]);

  const handleStatusChange = useCallback(async (appId, newStatus) => {
    if (!supabase) return;
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) return;

      const res = await fetch('/.netlify/functions/admin-applications', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session.access_token}`,
        },
        body: JSON.stringify({ id: appId, status: newStatus }),
      });

      if (res.ok) {
        const { application } = await res.json();
        setApplications(prev => prev.map(a => a.id === appId ? application : a));
      }
    } catch (err) {
      console.error('Status update failed:', err);
    }
  }, []);

  // Loading auth
  if (loading) {
    return (
      <div className="zv-page zv-info-page">
        <Nav />
        <div className="zv-admin-status"><p>Loading...</p></div>
        <Footer />
      </div>
    );
  }

  // Not logged in
  if (!isLoggedIn) {
    return (
      <div className="zv-page zv-info-page">
        <Nav />
        <div className="zv-admin-status">
          <h1>Admin</h1>
          <p>Sign in to continue.</p>
          <button className="zv-join-submit-btn" onClick={signIn}>Sign In with Google</button>
        </div>
        <Footer />
      </div>
    );
  }

  // Logged in but not admin
  if (!isAdmin) {
    return (
      <div className="zv-page zv-info-page">
        <Nav />
        <div className="zv-admin-status">
          <h1>Access Denied</h1>
          <p>This page is restricted.</p>
        </div>
        <Footer />
      </div>
    );
  }

  let filtered = applications;
  if (roleFilter !== 'all') filtered = filtered.filter(a => a.role === roleFilter);
  if (statusFilter !== 'all') filtered = filtered.filter(a => (a.status || 'new') === statusFilter);

  const roleCounts = applications.reduce((acc, a) => { acc[a.role] = (acc[a.role] || 0) + 1; return acc; }, {});
  const statusCounts = applications.reduce((acc, a) => { const s = a.status || 'new'; acc[s] = (acc[s] || 0) + 1; return acc; }, {});

  return (
    <div className="zv-page zv-info-page">
      <Nav />
      <div className="zv-admin-container">
        {/* Top-level tab toggle */}
        <div className="zv-admin-tabs">
          <button
            className={`zv-admin-tab ${activeTab === 'applications' ? 'zv-admin-tab--active' : ''}`}
            onClick={() => setActiveTab('applications')}
          >
            Applications
          </button>
          <button
            className={`zv-admin-tab ${activeTab === 'kestrel' ? 'zv-admin-tab--active' : ''}`}
            onClick={() => setActiveTab('kestrel')}
          >
            Kestrel Activity
          </button>
        </div>

        {activeTab === 'applications' && (
          <>
            <div className="zv-admin-header">
              <h1>Crew Applications</h1>
              <span className="zv-admin-count">{applications.length} total</span>
            </div>

            <div className="zv-admin-filter-group">
              <div className="zv-admin-filters">
                <button
                  className={`zv-admin-filter ${roleFilter === 'all' ? 'zv-admin-filter--active' : ''}`}
                  onClick={() => setRoleFilter('all')}
                >
                  All roles ({applications.length})
                </button>
                {Object.entries(ROLE_TITLES).map(([id, title]) => (
                  <button
                    key={id}
                    className={`zv-admin-filter ${roleFilter === id ? 'zv-admin-filter--active' : ''}`}
                    onClick={() => setRoleFilter(id)}
                  >
                    {title} ({roleCounts[id] || 0})
                  </button>
                ))}
              </div>
              <div className="zv-admin-filters">
                <button
                  className={`zv-admin-filter ${statusFilter === 'all' ? 'zv-admin-filter--active' : ''}`}
                  onClick={() => setStatusFilter('all')}
                >
                  All statuses
                </button>
                {STATUSES.map(s => (
                  <button
                    key={s.id}
                    className={`zv-admin-filter zv-admin-filter--${s.id} ${statusFilter === s.id ? 'zv-admin-filter--active' : ''}`}
                    onClick={() => setStatusFilter(s.id)}
                  >
                    {s.label} ({statusCounts[s.id] || 0})
                  </button>
                ))}
              </div>
            </div>

            {fetchLoading && <div className="zv-admin-status"><p>Loading applications...</p></div>}
            {fetchError && <div className="zv-admin-status"><p className="zv-join-error">{fetchError}</p></div>}

            {!fetchLoading && !fetchError && filtered.length === 0 && (
              <div className="zv-admin-status"><p>No applications yet.</p></div>
            )}

            <div className="zv-admin-list">
              {filtered.map(app => (
                <ApplicationCard
                  key={app.id}
                  app={app}
                  expanded={expandedId === app.id}
                  onToggle={() => setExpandedId(expandedId === app.id ? null : app.id)}
                  onStatusChange={handleStatusChange}
                />
              ))}
            </div>
          </>
        )}

        {activeTab === 'kestrel' && (
          <>
            <div className="zv-admin-header">
              <h1>Kestrel Activity</h1>
            </div>
            <KestrelActivity isAdmin={isAdmin} />
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default AdminPage;
