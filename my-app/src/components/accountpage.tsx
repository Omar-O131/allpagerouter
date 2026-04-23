import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/accountpage.css";

const FAKE_ACCOUNT_STORAGE_KEY = "bloom-fake-account";

const sideLinks = [
  { label: "Dashboard", icon: "◆", view: "dashboard" },
  { label: "Orders", icon: "◫", view: "orders" },
  { label: "Downloads", icon: "↓" },
  { label: "Addresses", icon: "◎" },
  { label: "Payment methods", icon: "⇄" },
  { label: "My Points", icon: "☆", view: "points" },
  { label: "Account details", icon: "◌", view: "account-details" },
  { label: "Wishlist", icon: "♡", route: "/wishlist" },
  { label: "Compare", icon: "⟳", view: "compare" },
  { label: "Waitlist", icon: "◔", view: "waitlist" },
  { label: "Log out", icon: "↪", action: "logout" },
];

const quickActions = [
  { label: "Recent Orders", view: "orders" },
  { label: "Addresses", view: "dashboard" },
  { label: "Account Details", view: "account-details" },
];

const heroTitles: Record<string, string> = {
  dashboard: "My Account",
  orders: "My Account",
  points: "My Account",
  "account-details": "My Account",
  compare: "Compare",
  waitlist: "Waitlist",
};

const products = [
  {
    title: "Chanel La Mousse Camellia Cleansing Cream-to-Foam",
    tag: "Sale Up To 21%",
    image:
      "https://cdn.beauty-bloom.net/wp-content/uploads/2025/09/Chanel-La-Mousse-Camellia-Cleansing-Cream-to-Foam-1.avif",
    hoverImage:
      "https://cdn.beauty-bloom.net/wp-content/uploads/2025/09/Chanel-La-Mousse-Camellia-Cleansing-Cream-to-Foam-3.webp",
    colors: [] as string[],
    oldPrice: "280 NIS",
    price: "220 NIS",
  },
  {
    title: "Make Up For Ever Artist Color Pencil",
    image:
      "https://cdn.beauty-bloom.net/wp-content/uploads/2026/01/imgi_239_s2797389-main-zoom-1.jpg",
    hoverImage:
      "https://cdn.beauty-bloom.net/wp-content/uploads/2026/01/s2797389-av-2-zoom.webp",
    colors: [
      "#222222",
      "#d2baae",
      "#b98e6d",
      "#d0bcb8",
      "#d7c0c2",
      "#b98a8f",
      "#87524b",
      "#7d715d",
      "#9e0f55",
      "#e0c0cf",
    ],
    price: "120 NIS",
  },
  {
    title: "Kosas Plump + Juicy Vegan Collagen + Probiotic Spray-On Serum",
    image:
      "https://cdn.beauty-bloom.net/wp-content/uploads/2025/11/imgi_119_s2768661-main-zoom.jpg",
    hoverImage:
      "https://cdn.beauty-bloom.net/wp-content/uploads/2025/11/s2620227-av-2-zoom.webp",
    colors: [] as string[],
    price: "100 NIS",
  },
];

function Icon({ children }: { children: string }) {
  return <span className="icon-badge">{children}</span>;
}

function ProductActionIcons() {
  return (
    <div className="product-card__actions" aria-hidden="true">
      <span>◉</span>
      <span>◫</span>
      <span>⟳</span>
      <span>♡</span>
    </div>
  );
}

function NoticeBanner({
  children,
  actions,
}: {
  children: React.ReactNode;
  actions?: React.ReactNode;
}) {
  return (
    <div className="notice-banner">
      <span className="notice-banner__message">
        <span className="notice-banner__icon" aria-hidden="true">
          i
        </span>
        {children}
      </span>
      {actions}
    </div>
  );
}

function DashboardContent({ onNavigate }: { onNavigate: (view: string) => void }) {
  return (
    <>
      <div className="welcome-copy">
        <h2>Welcome to your account page</h2>
        <p>
          Hi oghannam617, today is a great day to check your account page. You can
          check also:
        </p>
      </div>

      <div className="quick-grid">
        {quickActions.map((action) => (
          <a
            key={action.label}
            href="/"
            onClick={(event) => {
              event.preventDefault();
              onNavigate(action.view);
            }}
          >
            {action.label}
          </a>
        ))}
      </div>

      <section className="recommendations">
        <h3>You may also like...</h3>

        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.title}>
              {product.tag ? <div className="product-card__tag">{product.tag}</div> : null}

              <div className="product-card__image-wrap">
                <img
                  className="product-card__image product-card__image--primary"
                  src={product.image}
                  alt={product.title}
                />
                <img
                  className="product-card__image product-card__image--hover"
                  src={product.hoverImage}
                  alt=""
                />
                <ProductActionIcons />
              </div>

              {product.colors.length > 0 ? (
                <div className="product-card__swatches">
                  {product.colors.map((color) => (
                    <span key={color} style={{ backgroundColor: color }} aria-hidden="true" />
                  ))}
                </div>
              ) : null}

              <h4>{product.title}</h4>

              <div className="product-card__price-row">
                {product.oldPrice ? (
                  <span className="product-card__old-price">{product.oldPrice}</span>
                ) : null}
                <span className="product-card__price">{product.price}</span>
              </div>

              <a
                className="product-card__button"
                href="/"
                onClick={(event) => event.preventDefault()}
              >
                Select Options
              </a>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function OrdersContent() {
  return (
    <section className="orders-panel">
      <NoticeBanner
        actions={
          <a href="/" onClick={(event) => event.preventDefault()}>
            Browse Products
          </a>
        }
      >
        No order has been made yet.
      </NoticeBanner>
    </section>
  );
}

function PointsContent() {
  return (
    <section className="points-panel">
      <p className="points-panel__topline">Array</p>
      <h2 className="points-panel__title">
        You have 0 Points, which are worth a discount of 0 NIS amount.
      </h2>

      <div className="points-table-wrap">
        <table className="points-table">
          <thead>
            <tr>
              <th>Event</th>
              <th>Date</th>
              <th>Points</th>
              <th>Amount</th>
              <th>Expiry Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={5}>No points log found.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

function AccountDetailsContent() {
  return (
    <section className="details-panel">
      <NoticeBanner>
        Your account with Bloom Beauty is using a temporary password. We emailed
        you a link to change your password.
      </NoticeBanner>

      <form className="details-form">
        <div className="details-form__grid">
          <label>
            First name *
            <input type="text" defaultValue="Omar" />
          </label>
          <label>
            Last name *
            <input type="text" defaultValue="Bloom" />
          </label>
        </div>

        <label>
          Display name *
          <input type="text" defaultValue="oghannam617" />
        </label>
        <p className="details-form__hint">
          This will be how your name will be displayed in the account section and
          in reviews
        </p>

        <label>
          Email address *
          <input type="email" defaultValue="oghannam617@gmail.com" />
        </label>

        <fieldset className="password-box">
          <legend>Password change</legend>

          <label>
            Current password (leave blank to leave unchanged)
            <span className="password-input">
              <input type="password" />
              <span aria-hidden="true">◉</span>
            </span>
          </label>

          <label>
            New password (leave blank to leave unchanged)
            <span className="password-input">
              <input type="password" />
              <span aria-hidden="true">◉</span>
            </span>
          </label>

          <label>
            Confirm new password
            <span className="password-input">
              <input type="password" />
              <span aria-hidden="true">◉</span>
            </span>
          </label>
        </fieldset>

        <button type="button" className="skew-button skew-button--dark">
          Save Changes
        </button>
      </form>
    </section>
  );
}

function EmptyStateContent({ type, title }: { type: "compare" | "wishlist"; title: string }) {
  return (
    <section className="empty-panel">
      <div className="empty-panel__inner">
        <div className="empty-panel__icon">{type === "compare" ? "⟳" : "♡"}</div>
        <h2>{title}</h2>
        <p>
          We invite you to get acquainted with an assortment of our shop. Surely
          you can find something for yourself!
        </p>
        <Link to="/shop" className="skew-button skew-button--dark">
          Return To Shop
        </Link>
      </div>
    </section>
  );
}

export const fakeAccountStorageKey = FAKE_ACCOUNT_STORAGE_KEY;

export default function AccountPage() {
  const navigate = useNavigate();
  const [activeView, setActiveView] = useState("dashboard");

  useEffect(() => {
    const session = window.localStorage.getItem(FAKE_ACCOUNT_STORAGE_KEY);
    if (session !== "omar") {
      navigate("/signin", { replace: true });
    }
  }, [navigate]);

  const handleSidebarAction = (link: (typeof sideLinks)[number]) => {
    if (link.action === "logout") {
      window.localStorage.removeItem(FAKE_ACCOUNT_STORAGE_KEY);
      navigate("/signin");
      return;
    }

    if (link.route) {
      navigate(link.route);
      return;
    }

    if (link.view) {
      setActiveView(link.view);
    }
  };

  return (
    <div className="page-shell">
      <section className="hero-banner">
        <h1>{heroTitles[activeView] || "My Account"}</h1>
      </section>

      <main className="account-layout">
        <aside className="account-sidebar">
          <div className="avatar-circle">
            <svg viewBox="0 0 64 64" aria-hidden="true">
              <circle cx="32" cy="24" r="12" fill="currentColor" />
              <path
                d="M12 56c3-10 11-16 20-16s17 6 20 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className="account-meta">
            <strong>oghannam617</strong>
            <span>oghannam617@gmail.com</span>
          </div>

          <ul className="sidebar-links">
            {sideLinks.map((link) => {
              const isActive = link.view === activeView;

              return (
                <li key={link.label} className={isActive ? "is-active" : ""}>
                  <a
                    href={link.route ?? "/"}
                    onClick={(event) => {
                      event.preventDefault();
                      handleSidebarAction(link);
                    }}
                  >
                    <Icon>{link.icon}</Icon>
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </aside>

        <section className="account-content">
          {activeView === "dashboard" ? <DashboardContent onNavigate={setActiveView} /> : null}
          {activeView === "orders" ? <OrdersContent /> : null}
          {activeView === "points" ? <PointsContent /> : null}
          {activeView === "account-details" ? <AccountDetailsContent /> : null}
          {activeView === "compare" ? (
            <EmptyStateContent type="compare" title="Your Compare Is Empty" />
          ) : null}
          {activeView === "waitlist" ? (
            <EmptyStateContent type="wishlist" title="Your Waitlist Is Empty" />
          ) : null}
        </section>
      </main>
    </div>
  );
}
