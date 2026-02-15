import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';


const navLinks = [
  { to: '/philosophy', label: 'Philosophy' },
  { to: '/approach', label: 'Approach' },
  { to: '/for-builders', label: 'For Builders' },
  { to: '/for-leaders', label: 'For Leaders' },
  { to: '/media', label: 'Media' },
  { to: '/origin', label: 'The Origin' },
  { to: '/open', label: 'Open Vector' },
  { to: '/ask', label: 'Ask' },
];

function Nav() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, isLoggedIn, loading, signIn, signOut } = useUser();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="zv-nav">
      <div className="zv-nav-inner">
        <Link to="/" className="zv-nav-brand">ZERO VECTOR</Link>

        {/* Desktop links */}
        <div className="zv-nav-links">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`zv-nav-link ${pathname === to ? 'zv-nav-link-active' : ''}`}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/start"
            className={`zv-nav-start ${pathname === '/start' ? 'zv-nav-start-active' : ''}`}
          >
            Start
          </Link>
          {!loading && (
            isLoggedIn ? (
              <div className="zv-nav-user">
                <button
                  className="zv-nav-avatar-btn"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  aria-label="User menu"
                >
                  {user.avatar ? (
                    <img src={user.avatar} alt={user.name} className="zv-nav-avatar-img" referrerPolicy="no-referrer" />
                  ) : (
                    <span className="zv-nav-avatar-initial">{user.name.charAt(0)}</span>
                  )}
                </button>
                {dropdownOpen && (
                  <>
                    <div className="zv-nav-dropdown-backdrop" onClick={() => setDropdownOpen(false)} />
                    <div className="zv-nav-dropdown">
                      <div className="zv-nav-dropdown-name">{user.name}</div>
                      <div className="zv-nav-dropdown-email">{user.email}</div>
                      <button className="zv-nav-dropdown-signout" onClick={() => { signOut(); setDropdownOpen(false); }}>
                        Sign Out
                      </button>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <button className="zv-nav-signin" onClick={signIn}>Sign In</button>
            )
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          className={`zv-nav-hamburger ${menuOpen ? 'zv-nav-hamburger-open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="zv-nav-mobile">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`zv-nav-mobile-link ${pathname === to ? 'zv-nav-link-active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/start"
            className={`zv-nav-mobile-link zv-nav-start-mobile ${pathname === '/start' ? 'zv-nav-link-active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            Start
          </Link>
          {!loading && !isLoggedIn && (
            <button
              className="zv-nav-mobile-link zv-nav-mobile-signin"
              onClick={() => { signIn(); setMenuOpen(false); }}
            >
              Sign In with Google
            </button>
          )}
          {!loading && isLoggedIn && (
            <button
              className="zv-nav-mobile-link zv-nav-mobile-signout"
              onClick={() => { signOut(); setMenuOpen(false); }}
            >
              Sign Out ({user.name.split(' ')[0]})
            </button>
          )}
        </div>
      )}
    </nav>
  );
}

export default Nav;
