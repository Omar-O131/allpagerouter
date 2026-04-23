import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/headerstyle.css";
import logo from "../publicimage/Logo-bloom.webp";
import { useCart } from "../context/CartContext";

type MenuItem = {
  label: string;
  href: string;
};

type CategoryGroup = MenuItem & {
  children?: MenuItem[];
};

const categories: CategoryGroup[] = [
  { label: "Beauty Accessories", href: "/shop" },
  { label: "Best Sellers", href: "/shop" },
  { label: "Body Care", href: "/shop" },
  {
    label: "Cheeks",
    href: "/shop",
    children: [
      { label: "Blushes", href: "/shop" },
      { label: "Bronzers & Contours", href: "/shop" },
      { label: "Highlighters", href: "/shop" },
    ],
  },
  {
    label: "Eyes",
    href: "/shop",
    children: [
      { label: "Concealers / Correctors", href: "/shop" },
      { label: "Eye Creams / Serums", href: "/shop" },
      { label: "Eyebrow / Lashes", href: "/shop" },
      { label: "Eyeliners & Kohl", href: "/shop" },
      { label: "Eyeshadows", href: "/shop" },
      { label: "Mascaras", href: "/shop" },
    ],
  },
  {
    label: "Face",
    href: "/shop",
    children: [
      { label: "BB & CC Cream", href: "/shop" },
      { label: "Foundation", href: "/shop" },
      { label: "Loose Powder", href: "/shop" },
      { label: "Primer", href: "/shop" },
      { label: "Setting Spray", href: "/shop" },
    ],
  },
  {
    label: "Lips",
    href: "/shop",
    children: [
      { label: "Lip Balms", href: "/shop" },
      { label: "Lip Gloss", href: "/shop" },
      { label: "Lip Liners", href: "/shop" },
      { label: "Lipsticks", href: "/shop" },
    ],
  },
  { label: "Nail Polish", href: "/shop" },
  { label: "Oral Care", href: "/shop" },
  { label: "Perfumes", href: "/shop" },
];

const menuLinks: MenuItem[] = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "About Us", href: "/shop" },
  { label: "Contact Us", href: "/shop" },
  { label: "Track Order", href: "/shop" },
  { label: "My Account", href: "/signin" },
];

const navLinks: MenuItem[] = [
  { label: "Makeup", href: "/shop" },
  { label: "New Arrivals", href: "/shop" },
  { label: "Skin Care", href: "/shop" },
  { label: "Hair Care", href: "/shop" },
  { label: "Perfumes", href: "/shop" },
  { label: "Brushes & Tools", href: "/shop" },
];

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="8" r="4" />
      <path d="M5 20a7 7 0 0 1 14 0" />
    </svg>
  );
}

function RefreshIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 12a8 8 0 0 1-13.66 5.66" />
      <path d="M4 12A8 8 0 0 1 17.66 6.34" />
      <path d="M16 3.8v3.7h3.7" />
      <path d="M8 20.2v-3.7H4.3" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 20.5 4.6 13.3a4.8 4.8 0 0 1 6.8-6.8L12 7l.6-.5a4.8 4.8 0 0 1 6.8 6.8z" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 8h10.2l-.9 10a1.4 1.4 0 0 1-1.4 1.3H9.1A1.4 1.4 0 0 1 7.7 18z" />
      <path d="M9 9V7.4A3 3 0 0 1 12 4.5a3 3 0 0 1 3 2.9V9" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 6 18 18M18 6 6 18" />
    </svg>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={`chevron-icon${open ? " is-open" : ""}`}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function BloomLogo() {
  return (
    <Link to="/" aria-label="Bloom Beauty home" >
      <img
        src={logo}
        alt="Bloom Beauty"
        style={{ width: "140px", height: "auto", objectFit: "contain" }}
      />
    </Link>
  );
}

function OffCanvasMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [activeTab, setActiveTab] = useState<"categories" | "menu">("categories");
  const [expandedCategory, setExpandedCategory] = useState<string | null>("Eyes");

  useEffect(() => {
    if (!open) {
      setActiveTab("categories");
      setExpandedCategory("Eyes");
    }
  }, [open]);

  return (
    <>
      <div
        className={`menu-backdrop${open ? " is-visible" : ""}`}
        onClick={onClose}
        aria-hidden={!open}
      />

      <aside className={`side-menu${open ? " is-open" : ""}`} aria-hidden={!open}>
        <div className="side-menu__header">
          <button
            type="button"
            className="icon-button side-menu__close-button"
            onClick={onClose}
            aria-label="Close menu"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="side-menu__logo">
          <BloomLogo />
        </div>

        <form className="side-menu__search" action="#" method="get">
          <input
            type="search"
            placeholder="Search for products..."
            aria-label="Search products"
            name="s"
          />
          <input type="hidden" name="post_type" value="product" />
          <button type="submit" className="search-submit" aria-label="Search">
            <SearchIcon />
          </button>
        </form>

        <div className="side-menu__tabs" role="tablist" aria-label="Menu sections">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "categories"}
            className={activeTab === "categories" ? "is-active" : ""}
            onClick={() => setActiveTab("categories")}
          >
            Categories
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "menu"}
            className={activeTab === "menu" ? "is-active" : ""}
            onClick={() => setActiveTab("menu")}
          >
            Menu
          </button>
        </div>

        {activeTab === "categories" ? (
          <nav className="side-menu__list" aria-label="Categories">
            {categories.map((item) => {
              const isExpanded = expandedCategory === item.label;
              const hasChildren = Boolean(item.children?.length);

              return (
                <div
                  key={item.label}
                  className={`side-menu__group${isExpanded ? " is-expanded" : ""}`}
                >
                  <div className="side-menu__group-row">
                    <Link to={item.href} onClick={onClose} className="side-menu__group-link">
                      {item.label}
                    </Link>

                    {hasChildren ? (
                      <button
                        type="button"
                        className="side-menu__toggle"
                        aria-label={`Toggle ${item.label}`}
                        aria-expanded={isExpanded}
                        onClick={() =>
                          setExpandedCategory((current) =>
                            current === item.label ? null : item.label
                          )
                        }
                      >
                        <ChevronIcon open={isExpanded} />
                      </button>
                    ) : null}
                  </div>

                  {hasChildren && isExpanded ? (
                    <div className="side-menu__children">
                      {item.children?.map((child) => (
                        <Link key={child.label} to={child.href} onClick={onClose}>
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </nav>
        ) : (
          <nav className="side-menu__list" aria-label="Site menu">
            {menuLinks.map((item) => (
              <Link key={item.label} to={item.href} onClick={onClose}>
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </aside>
    </>
  );
}

function AccountPanel({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div
        className={`account-backdrop${open ? " is-visible" : ""}`}
        onClick={onClose}
        aria-hidden={!open}
      />

      <aside
        className={`account-panel signin-panel${open ? " is-open" : ""}`}
        aria-hidden={!open}
      >
        <div className="signin-panel__header-link">
          <Link to="/signin" onClick={onClose}>
            <div className="signin-panel__header">
              <div className="signin-panel__title">
                <UserIcon />
                <span>SIGN IN</span>
              </div>
            </div>
          </Link>
        </div>

        <div className="signin-panel__tabs">
          <button
            type="button"
            className={activeTab === "login" ? "is-active" : ""}
            onClick={() => setActiveTab("login")}
          >
            LOGIN
          </button>

          <button
            type="button"
            className={activeTab === "register" ? "is-active" : ""}
            onClick={() => setActiveTab("register")}
          >
            REGISTER
          </button>
        </div>

        {activeTab === "login" ? (
          <form className="signin-panel__form">
            <label htmlFor="signin-username">Username or email *</label>
            <input id="signin-username" type="text" />

            <label htmlFor="signin-password">Password *</label>
            <div className="signin-panel__password">
              <input
                id="signin-password"
                type={showPassword ? "text" : "password"}
              />
              <button
                type="button"
                aria-label={showPassword ? "Hide password" : "Show password"}
                onClick={() => setShowPassword((current) => !current)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            <label className="signin-panel__remember">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>

            <button type="submit" className="signin-panel__submit">
              <span>LOGIN</span>
            </button>

            <Link to="/signin" onClick={onClose} className="signin-panel__lost">
              Lost your password?
            </Link>
          </form>
        ) : (
          <form className="signin-panel__form">
            <label htmlFor="register-email">Email address *</label>
            <input id="register-email" type="email" />

            <p className="signin-panel__text">
              A link to set a new password will be sent to your email address.
            </p>

            <button type="submit" className="signin-panel__submit">
              <span>REGISTER</span>
            </button>
          </form>
        )}
      </aside>
    </>
  );
}

function ComparePanel({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <>
      <div
        className={`account-backdrop${open ? " is-visible" : ""}`}
        onClick={onClose}
        aria-hidden={!open}
      />

      <aside
        className={`account-panel compare-panel${open ? " is-open" : ""}`}
        aria-hidden={!open}
      >
        <button
          type="button"
          className="icon-button compare-panel__close-button"
          onClick={onClose}
          aria-label="Close compare"
        >
          <CloseIcon />
        </button>

        <div className="compare-panel__body">
          <p>No products in the compare.</p>
          <Link className="compare-panel__button" to="/shop" onClick={onClose}>
            <span>Return to Shop</span>
          </Link>
        </div>
      </aside>
    </>
  );
}

function WishlistPanel({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { wishlistItems, removeFromWishlist, addToCart } = useCart();

  return (
    <>
      <div
        className={`account-backdrop${open ? " is-visible" : ""}`}
        onClick={onClose}
        aria-hidden={!open}
      />

      <aside
        className={`account-panel wishlist-panel${open ? " is-open" : ""}`}
        aria-hidden={!open}
      >
        <button
          type="button"
          className="icon-button wishlist-panel__close-button"
          onClick={onClose}
          aria-label="Close wishlist"
        >
          <CloseIcon />
        </button>

        <div className="wishlist-panel__list">
          {wishlistItems.length === 0 ? (
            <div className="wishlist-panel__item">
              <div className="wishlist-panel__content">
                <p className="wishlist-panel__title">Your wishlist is empty.</p>
                <p className="wishlist-panel__price">
                  Tap the heart on a product to save it here.
                </p>
              </div>
            </div>
          ) : (
            wishlistItems.map((item) => (
              <div key={item.id} className="wishlist-panel__item">
                <div className="wishlist-panel__image-wrap">
                  {(item.badges ?? (item.badge ? [item.badge] : [])).map((badge) => (
                    <span key={badge} className="wishlist-panel__badge">
                      {badge}
                    </span>
                  ))}
                  <img src={item.image} alt={item.name} />
                </div>

                <div className="wishlist-panel__content">
                  <p className="wishlist-panel__title">{item.name}</p>
                  <p className="wishlist-panel__price">{item.price}</p>

                  <div className="wishlist-panel__item-actions">
                    <button
                      type="button"
                      className="wishlist-panel__text-button"
                      onClick={() =>
                        addToCart({
                          id: item.id,
                          name: item.name,
                          price: item.price,
                          priceValue: item.priceValue,
                          image: item.image,
                          sku: item.sku,
                          badge: item.badge ?? item.badges?.[0],
                        })
                      }
                    >
                      Add to cart
                    </button>

                    <button
                      type="button"
                      className="wishlist-panel__text-button wishlist-panel__text-button--danger"
                      onClick={() => removeFromWishlist(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="wishlist-panel__actions">
          <Link
            className="wishlist-panel__button wishlist-panel__button--secondary"
            to="/wishlist"
            onClick={onClose}
          >
            <span>View Wishlist</span>
          </Link>

          <button
            type="button"
            className="wishlist-panel__button wishlist-panel__button--primary"
            onClick={() => {
              wishlistItems.forEach((item) => {
                addToCart({
                  id: item.id,
                  name: item.name,
                  price: item.price,
                  priceValue: item.priceValue,
                  image: item.image,
                  sku: item.sku,
                  badge: item.badge ?? item.badges?.[0],
                });
              });
              onClose();
            }}
          >
            <span>Add All to Cart</span>
          </button>
        </div>
      </aside>
    </>
  );
}

function CartPanel() {
  const { isCartOpen, setIsCartOpen, cartItems, cartTotal, removeFromCart } = useCart();
  const open = isCartOpen;

  return (
    <>
      <div
        className={`account-backdrop${open ? " is-visible" : ""}`}
        onClick={() => setIsCartOpen(false)}
        aria-hidden={!open}
      />

      <aside
        className={`account-panel cart-panel${open ? " is-open" : ""}`}
        aria-hidden={!open}
      >
        <button
          type="button"
          className="icon-button wishlist-panel__close-button"
          onClick={() => setIsCartOpen(false)}
          aria-label="Close cart"
        >
          <CloseIcon />
        </button>

        <div className="cart-panel__header">
          <CartIcon />
          <span>Cart</span>
        </div>

        <div className="cart-panel__list">
          {cartItems.length === 0 ? (
            <p className="cart-panel__empty">Cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="cart-panel__item">
                <div className="cart-panel__image-wrap">
                  {item.badge && (
                    <span className="wishlist-panel__badge">{item.badge}</span>
                  )}
                  <img src={item.image} alt={item.name} />
                </div>

                <div className="cart-panel__content">
                  <p className="cart-panel__title">{item.name}</p>
                  <p className="cart-panel__price">
                    {item.quantity} × {item.price}
                  </p>

                  <button
                    type="button"
                    className="cart-panel__remove"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="cart-panel__footer">
          <div className="cart-panel__subtotal">
            <span>Subtotal:</span>
            <span>{cartTotal} ₪</span>
          </div>

          <Link
            className="wishlist-panel__button wishlist-panel__button--secondary"
            to="/cart"
            onClick={() => setIsCartOpen(false)}
          >
            <span>View Cart</span>
          </Link>

          <Link
            className="wishlist-panel__button wishlist-panel__button--primary"
            to="/cart"
            onClick={() => setIsCartOpen(false)}
          >
            <span>Checkout</span>
          </Link>
        </div>
      </aside>
    </>
  );
}

export default function Header() {
  const { cartItems, wishlistItems, setIsCartOpen, isCartOpen } = useCart();

  const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const wishlistItemCount = wishlistItems.length;

  const [menuOpen, setMenuOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [compareOpen, setCompareOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const hasPanelOpen =
      menuOpen || accountOpen || compareOpen || wishlistOpen || isCartOpen;

    document.body.style.overflow = hasPanelOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen, accountOpen, compareOpen, wishlistOpen, isCartOpen]);

  useEffect(() => {
    if (!compareOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null;
      if (target?.closest(".compare-panel")) return;
      setCompareOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown, true);
    return () => document.removeEventListener("pointerdown", handlePointerDown, true);
  }, [compareOpen]);

  useEffect(() => {
    if (!wishlistOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null;
      if (target?.closest(".wishlist-panel")) return;
      setWishlistOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown, true);
    return () => document.removeEventListener("pointerdown", handlePointerDown, true);
  }, [wishlistOpen]);

  return (
    <>
      <OffCanvasMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <AccountPanel open={accountOpen} onClose={() => setAccountOpen(false)} />
      <ComparePanel open={compareOpen} onClose={() => setCompareOpen(false)} />
      <WishlistPanel open={wishlistOpen} onClose={() => setWishlistOpen(false)} />
      <CartPanel />

      <div className="site-header">
        <header className="header-top">
          <div className="mobile-bar">
            <button
              type="button"
              className="icon-button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <MenuIcon />
            </button>

            <div className="mobile-logo">
              <BloomLogo />
            </div>

            <div className="mobile-spacer" aria-hidden="true" />
          </div>

          <div className="mobile-search">
            <div className="mobile-search__pill">
              <span className="mobile-search__label">Search for</span>
              <span className="mobile-search__emoji" aria-hidden="true">
                🔥
              </span>
              <span className="mobile-search__value">Foundations</span>

              <button type="button" className="search-submit" aria-label="Search">
                <SearchIcon />
              </button>
            </div>
          </div>

          <div className="mobile-actions">
            <button
              type="button"
              className="header-counter header-counter--button"
              aria-label="Account"
              onClick={() => {
                setCompareOpen(false);
                setWishlistOpen(false);
                setIsCartOpen(false);
                setAccountOpen(true);
              }}
            >
              <UserIcon />
            </button>

            <button
              type="button"
              className="header-counter header-counter--button"
              aria-label="Compare"
              onClick={() => {
                setWishlistOpen(false);
                setIsCartOpen(false);
                setCompareOpen((current) => !current);
              }}
            >
              <RefreshIcon />
              <span className="header-counter__count">0</span>
            </button>

            <button
              type="button"
              className="header-counter header-counter--button"
              aria-label="Wishlist"
              onClick={() => {
                setCompareOpen(false);
                setIsCartOpen(false);
                setWishlistOpen((current) => !current);
              }}
            >
              <HeartIcon />
              <span className="header-counter__count">{wishlistItemCount}</span>
            </button>

            <button
              type="button"
              className="header-counter header-counter--button"
              aria-label="Cart"
              onClick={() => {
                setCompareOpen(false);
                setWishlistOpen(false);
                setIsCartOpen(true);
              }}
            >
              <CartIcon />
              <span className="header-counter__count">{cartItemCount}</span>
            </button>

            <a className="language-link" href="#" onClick={(e) => e.preventDefault()}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg"
                alt=""
              />
              Arabic
            </a>
          </div>

          <div className="desktop-bar">
            <BloomLogo />

            <button
              type="button"
              className="icon-button desktop-menu-button"
              onClick={() => {
                setCompareOpen(false);
                setMenuOpen(true);
              }}
              aria-label="Open menu"
            >
              <MenuIcon />
            </button>

            <form className="desktop-search" action="#" method="get">
              {!searchQuery ? (
                <span className="desktop-search__prompt" aria-hidden="true">
                  <span className="desktop-search__hint">Search for</span>
                  <span className="desktop-search__emoji">🔥</span>
                  <span className="desktop-search__topic">Foundations</span>
                </span>
              ) : null}

              <input
                type="search"
                placeholder=""
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                aria-label="Search products"
                name="s"
              />
              <input type="hidden" name="post_type" value="product" />

              <button type="submit" className="search-submit" aria-label="Search">
                <SearchIcon />
              </button>
            </form>

            <div className="desktop-actions">
              <button
                type="button"
                className="header-counter header-counter--button"
                aria-label="Account"
                onClick={() => {
                  setCompareOpen(false);
                  setWishlistOpen(false);
                  setIsCartOpen(false);
                  setAccountOpen(true);
                }}
              >
                <UserIcon />
              </button>

              <button
                type="button"
                className="header-counter header-counter--button"
                aria-label="Compare"
                onClick={() => {
                  setWishlistOpen(false);
                  setIsCartOpen(false);
                  setCompareOpen((current) => !current);
                }}
              >
                <RefreshIcon />
                <span className="header-counter__count">0</span>
              </button>

              <button
                type="button"
                className="header-counter header-counter--button"
                aria-label="Wishlist"
                onClick={() => {
                  setCompareOpen(false);
                  setIsCartOpen(false);
                  setWishlistOpen((current) => !current);
                }}
              >
                <HeartIcon />
                <span className="header-counter__count">{wishlistItemCount}</span>
              </button>

              <button
                type="button"
                className="header-counter header-counter--button"
                aria-label="Cart"
                onClick={() => {
                  setCompareOpen(false);
                  setWishlistOpen(false);
                  setIsCartOpen(true);
                }}
              >
                <CartIcon />
                <span className="header-counter__count">{cartItemCount}</span>
              </button>

              <a
                className="language-link desktop-language-link"
                href="#"
                onClick={(e) => e.preventDefault()}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg"
                  alt=""
                />
                Arabic
              </a>
            </div>
          </div>
        </header>

        <nav className="desktop-nav" aria-label="Primary categories">
          {navLinks.map((item) => (
            <Link key={item.label} to={item.href} className="desktop-nav__link">
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <nav className="mobile-nav" aria-label="Mobile categories">
          {navLinks.map((item) => (
            <Link key={item.label} to={item.href} className="mobile-nav__link">
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}