import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/quickview.css";

export type QuickViewProduct = {
  id: string;
  name: string;
  image: string;
  price: string;
  priceValue: number;
  originalPrice?: string;
  badge?: string;
  badges?: string[];
  stockText?: string;
  viewers?: number;
  description?: string[];
  sku?: string;
  href?: string;
  buttonLabel?: string;
};

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 6 18 18M18 6 6 18" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M2.5 12s3.5-5 9.5-5 9.5 5 9.5 5-3.5 5-9.5 5-9.5-5-9.5-5z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

type QuickViewPanelProps = {
  open: boolean;
  product: QuickViewProduct | null;
  onClose: () => void;
  onAddToCart: (product: QuickViewProduct) => void;
};

export default function QuickViewPanel({
  open,
  product,
  onClose,
  onAddToCart,
}: QuickViewPanelProps) {
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  if (!product) {
    return null;
  }

  const badges = product.badges ?? (product.badge ? [product.badge] : []);
  const description =
    product.description ?? [
      `${product.name} is one of Bloom's featured beauty picks.`,
      "Suggested usage:",
      "Apply or use as part of your daily beauty routine for a polished finish.",
    ];

  return (
    <>
      <div
        className={`quickview-backdrop${open ? " is-visible" : ""}`}
        onClick={onClose}
        aria-hidden={!open}
      />

      <aside
        className={`quickview-panel${open ? " is-open" : ""}`}
        aria-hidden={!open}
        role="dialog"
        aria-modal="true"
        aria-labelledby="quickview-title"
      >
        <button
          type="button"
          className="quickview-panel__close"
          onClick={onClose}
          aria-label="Close quick view"
        >
          <CloseIcon />
        </button>

        <div className="quickview-panel__body">
          <div className="quickview-panel__media">
            {badges.length ? (
              <div className="quickview-panel__badges">
                {badges.map((badge) => (
                  <span key={badge}>{badge}</span>
                ))}
              </div>
            ) : null}
            <img src={product.image} alt={product.name} />
          </div>

          <div className="quickview-panel__content">
            <h2 id="quickview-title">{product.name}</h2>

            <div className="quickview-panel__price">
              {product.originalPrice ? <del>{product.originalPrice}</del> : null}
              <strong>{product.price}</strong>
            </div>

            {product.viewers ? (
              <p className="quickview-panel__viewing">
                <EyeIcon />
                <span>{product.viewers} people are viewing this product right now</span>
              </p>
            ) : null}

            <div className="quickview-panel__description">
              {description.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>

            <p className="quickview-panel__stock">
              {product.stockText ?? "In stock"}
            </p>

            <p className="quickview-panel__points">
              Purchase this product now and earn 3 Points!
            </p>

            <div className="quickview-panel__actions">
              <button
                type="button"
                className="quickview-panel__button quickview-panel__button--primary"
                onClick={() => onAddToCart(product)}
              >
                <span>{product.buttonLabel ?? "ADD TO CART"}</span>
              </button>

              <Link
                to="/product"
                className="quickview-panel__button quickview-panel__button--secondary"
                onClick={onClose}
              >
                <span>VIEW PRODUCT</span>
              </Link>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
