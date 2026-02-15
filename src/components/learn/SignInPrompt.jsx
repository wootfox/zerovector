import { useUser } from '../../contexts/UserContext';

export function SignInButton() {
  const { user, isLoggedIn, loading, signIn, signOut } = useUser();

  if (loading) {
    return <span className="ovl-signin-loading" />;
  }

  if (isLoggedIn) {
    return (
      <div className="ovl-user-menu">
        {user.avatar ? (
          <img src={user.avatar} alt={user.name} className="ovl-user-avatar ovl-user-avatar--img" referrerPolicy="no-referrer" />
        ) : (
          <span className="ovl-user-avatar">{user.name.charAt(0)}</span>
        )}
        <button className="ovl-signout-btn" onClick={signOut}>Sign Out</button>
      </div>
    );
  }

  return (
    <button className="ovl-signin-btn" onClick={signIn}>Sign In</button>
  );
}

export function SignInPrompt() {
  const { isLoggedIn, loading, signIn } = useUser();

  if (loading || isLoggedIn) return null;

  return (
    <div className="ovl-signin-prompt">
      <p className="ovl-signin-prompt-text">
        Sign in to track your progress across lessons.
      </p>
      <button className="ovl-signin-prompt-btn" onClick={signIn}>
        Sign in with Google
      </button>
    </div>
  );
}
