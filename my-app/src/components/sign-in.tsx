import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/singin.css";
import { fakeAccountStorageKey } from "./accountpage";

function EyeIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function AccountSection() {
  const navigate = useNavigate();
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
    rememberMe: false,
  });

  const [registerForm, setRegisterForm] = useState({
    email: "",
  });

  const handleLoginSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (loginForm.username === "omar" && loginForm.password === "password123") {
      window.localStorage.setItem(fakeAccountStorageKey, "omar");
      setLoginError("");
      navigate("/account");
      return;
    }

    setLoginError("Use username: omar and password: password123");
  };

  const handleRegisterSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Register form:", registerForm);
  };

  return (
    <section className="account-section">
  

      <div className="account-grid">
        <article className="account-card">
          <h2>Login</h2>

          <form className="account-form" onSubmit={handleLoginSubmit}>
            <label htmlFor="username">Username or email address *</label>
            <input
              id="username"
              type="text"
              value={loginForm.username}
              onChange={(event) =>
                setLoginForm((current) => ({
                  ...current,
                  username: event.target.value,
                }))
              }
            />

            <label htmlFor="password">Password *</label>
            <div className="password-field">
              <input
                id="password"
                type={showLoginPassword ? "text" : "password"}
                value={loginForm.password}
                onChange={(event) =>
                  setLoginForm((current) => ({
                    ...current,
                    password: event.target.value,
                  }))
                }
              />
              <button
                type="button"
                className="password-toggle"
                aria-label={showLoginPassword ? "Hide password" : "Show password"}
                onClick={() => setShowLoginPassword((current) => !current)}
              >
                <EyeIcon />
              </button>
            </div>

            <div className="remember-row">
              <label className="checkbox-row">
                <input
                  type="checkbox"
                  checked={loginForm.rememberMe}
                  onChange={(event) =>
                    setLoginForm((current) => ({
                      ...current,
                      rememberMe: event.target.checked,
                    }))
                  }
                />
                <span>Remember me</span>
              </label>

              <a href="/">Lost your password?</a>
            </div>

            <button type="submit" className="account-submit">
              <span>Log in</span>
            </button>

            {loginError ? (
              <p style={{ color: "#cf3e84", fontWeight: 700, marginTop: "0.75rem" }}>
                {loginError}
              </p>
            ) : null}
          </form>
        </article>

        <article className="account-card">
          <h2>Register</h2>

          <form className="account-form" onSubmit={handleRegisterSubmit}>
            <label htmlFor="register-email">Email address *</label>
            <input
              id="register-email"
              type="email"
              value={registerForm.email}
              onChange={(event) =>
                setRegisterForm({
                  email: event.target.value,
                })
              }
            />

            <p className="account-copy">
              A link to set a new password will be sent to your email address.
            </p>

            <p className="account-copy">
              Your personal data will be used to support your experience throughout
              this website, to manage access to your account, and for other
              purposes described in our privacy policy.
            </p>

            <button type="submit" className="account-submit">
              <span>Register</span>
            </button>
          </form>
        </article>
      </div>
    </section>
  );
}

export default function SignInPage() {
  return (
    <div className="page-shell">
 
      <main>
        <AccountSection />
      </main>
    </div>
  );
}
