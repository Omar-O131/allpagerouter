import { useState, type CSSProperties, type MouseEvent } from "react";
import "../styles/product.css";
import { useCart } from "../context/CartContext";
type ProductData = {
  brand: string;
  title: string;
  subtitle: string;
  price: number;
  originalPrice: number;
  currency: string;
  sku: string;
  size: string;
  stock: string;
  viewers: number;
  tags: string[];
  breadcrumbs: string[];
  categories: string[];
  productTags: string[];
  gallery: string[];
  description: string[];
};

type SupportCard = {
  title: string;
  text: string;
  icon: "truck" | "wallet" | "badge" | "money";
};

type SimilarProduct = {
  title: string;
  price: number;
  badge: string;
  image: string;
  hoverImage: string;
};

const product: ProductData = {
  brand: "CHANEL",
  title: "CHANEL SUBLIMAGE LE SERUM YEUX",
  subtitle: "The Radiance-Renewing Eye Serum",
  price: 680,
  originalPrice: 1200,
  currency: " NIS",
  sku: "VNKD96",
  size: "15 ml",
  stock: "1 in stock",
  viewers: 41,
  tags: ["SALE UP TO 43%", "NEW"],
  breadcrumbs: ["Home", "Eyes", "Eye Creams/Serums"],
  categories: ["Eye Creams/Serums", "Eyes"],
  productTags: ["New Arrivals", "Skin Care"],
  gallery: [
    "https://cdn.beauty-bloom.net/wp-content/uploads/2026/04/sublimage-le-serum-yeux-ultimate-eye-serum-regenerates-and-illuminates-0-5oz-packshot-default-147960-9555301138462.avif",
    "https://cdn.beauty-bloom.net/wp-content/uploads/2026/04/9555301269534.webp",
    "https://cdn.beauty-bloom.net/wp-content/uploads/2026/04/9545617965086.webp",
  ],
  description: [
    "What it is: A potent yet gentle eye serum that helps to address the look of all youth parameters.",
    "Who it's for: Ideal for all skin types.",
    "What it does: This eye serum helps smooth the look of wrinkles, fine lines and diminishes the appearance of dark circles and puffiness, leaving lashes and eyebrows looking fuller.",
  ],
};

const supportCards: SupportCard[] = [
  {
    title: "Fast delivery",
    text: "Ship to over 200 city and Village within two days",
    icon: "truck",
  },
  {
    title: "Secure Payment",
    text: "Pay with the world most payment methods.",
    icon: "wallet",
  },
  {
    title: "100% authentic products",
    text: "",
    icon: "badge",
  },
  {
    title: "Discount Available",
    text: "Ongoing discounts & reward points - more perks every time you shop",
    icon: "money",
  },
];

const tabs = ["Description", "How To Use", "Reviews (0)"] as const;
type TabType = (typeof tabs)[number];

const similarProducts: SimilarProduct[] = [
  {
    title: "NARS Soft Matte Complete Full Coverage Longwear Concealer with Hyaluronic Acid",
    price: 150,
    badge: "",
    image:
      "https://cdn.beauty-bloom.net/wp-content/uploads/2026/02/s1900232-main-zoom.webp",
    hoverImage:
      "https://cdn.beauty-bloom.net/wp-content/uploads/2026/02/s1900232-av-12-zoom.jpg",
  },
  {
    title: "Glow Recipe PDRN Repair + Soothe Korean Prickly Pear Toner Pads for Skin Barrier",
    price: 165,
    badge: "NEW",
    image:
      "https://cdn.beauty-bloom.net/wp-content/uploads/2026/03/s2947117-main-zoom.webp",
    hoverImage:
      "https://cdn.beauty-bloom.net/wp-content/uploads/2026/03/s2947117-av-2202602020754498710800-zoom-1.webp",
  },
  {
    title: "Glow Recipe Vitamin C Brightening Korean Guava Toner Pads for Undereye & Cheeks",
    price: 165,
    badge: "NEW",
    image:
      "https://cdn.beauty-bloom.net/wp-content/uploads/2026/03/s2947109-main-zoom.webp",
    hoverImage:
      "https://cdn.beauty-bloom.net/wp-content/uploads/2026/03/s2947109-av-12202602090954211640800-zoom-1.webp",
  },
  {
    title: "Rhode Peptide Eye Prep Depuffing Eye Patches",
    price: 150,
    badge: "",
    image:
      "https://cdn.beauty-bloom.net/wp-content/uploads/2026/04/s2908697-main-zoom.webp",
    hoverImage:
      "https://cdn.beauty-bloom.net/wp-content/uploads/2026/04/s2908697-av-1202510020926207110700-zoom.webp",
  },
];

function SupportIcon({ type }: { type: SupportCard["icon"] }) {
  if (type === "truck") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 7h10v8H3z" />
        <path d="M13 10h3l3 3v2h-6z" />
        <circle cx="7" cy="18" r="2" />
        <circle cx="17" cy="18" r="2" />
      </svg>
    );
  }

  if (type === "wallet") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 7h14a2 2 0 0 1 2 2v8H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z" />
        <path d="M16 11h4v4h-4a2 2 0 0 1 0-4z" />
        <path d="M5 7V5h11" />
      </svg>
    );
  }

  if (type === "badge") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="10" r="5" />
        <path d="M9 14l-1 6 4-2 4 2-1-6" />
        <path d="M10 10.5l1.2 1.2 2.5-2.7" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3c3.9 0 7 2.2 7 5v2.5c0 .9-.4 1.7-1 2.2l-1.4 1.3.9 5.4-3.8-2.1c-.6.2-1.2.2-1.7.2-3.9 0-7-2.2-7-5V8c0-2.8 3.1-5 7-5z" />
      <path d="M12 7v5" />
      <path d="M9.5 9.5h5" />
      <path d="M9.5 13h5" />
    </svg>
  );
}

function ProductCardActionIcon({ type }: { type: "view" | "wishlist" }) {
  if (type === "view") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M2.5 12s3.5-5 9.5-5 9.5 5 9.5 5-3.5 5-9.5 5-9.5-5-9.5-5z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 20.5 4.8 13.6A4.7 4.7 0 0 1 11.4 7l.6.7.6-.7a4.7 4.7 0 0 1 6.6 6.6z" />
    </svg>
  );
}

export default function ProductPage() {
  const { addToCart, toggleWishlist, isInWishlist } = useCart();
  const [activeImage, setActiveImage] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<TabType>("Description");
  const [zoomStyle, setZoomStyle] = useState<CSSProperties>({
    backgroundPosition: "50% 50%",
    opacity: 0,
  });

  const handleZoomMove = (event: MouseEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * 100;
    const y = ((event.clientY - bounds.top) / bounds.height) * 100;

    setZoomStyle({
      backgroundPosition: `${x}% ${y}%`,
      opacity: 1,
    });
  };

  const handleZoomLeave = () => {
    setZoomStyle((current) => ({
      ...current,
      opacity: 0,
    }));
  };

  const mainProductPrice = `${product.price}${product.currency}`;
  const mainProductIsFavorite = isInWishlist(product.sku);

  return (
    <div className="page-shell">
      <main id="product" className="product-page">
        <aside className="support-sidebar">
          <div className="breadcrumbs">
            {product.breadcrumbs.map((crumb) => (
              <span key={crumb}>{crumb}</span>
            ))}
          </div>

          {supportCards.map((card) => (
            <section key={card.title} className="support-card">
              <div className="support-icon">
                <SupportIcon type={card.icon} />
              </div>
              <div>
                <h3>{card.title}</h3>
                {card.text ? <p>{card.text}</p> : null}
              </div>
            </section>
          ))}

          <section className="support-card support-help">
            <h3>Need Help?</h3>
            <p>(+972) 59 4871814</p>
            <p>beautybloom.brands</p>
          </section>
        </aside>

        <section className="gallery-stage">
          <div
            className="main-product-image"
            onMouseMove={handleZoomMove}
            onMouseLeave={handleZoomLeave}
          >
            <img src={product.gallery[activeImage]} alt={product.title} />
            <div
              className="image-zoom-overlay"
              style={{
                ...zoomStyle,
                backgroundImage: `url(${product.gallery[activeImage]})`,
              }}
            />
          </div>

          <div className="thumbnail-strip">
            {product.gallery.map((image, index) => (
              <button
                key={image}
                type="button"
                className={index === activeImage ? "active" : ""}
                onClick={() => setActiveImage(index)}
              >
                <img src={image} alt={`View ${index + 1}`} />
              </button>
            ))}
          </div>
        </section>

        <section className="product-info">
          <a className="back-link" href="#product">
            Return to previous page
          </a>

          <h1>
            {product.title} - <br />
            {product.subtitle}
          </h1>

          <div className="price-row">
            <span className="old-price">
              {product.originalPrice}
              {product.currency}
            </span>
            <span className="new-price">
              {product.price}
              {product.currency}
            </span>
          </div>

          <p className="viewing-line">
            {product.viewers} people are viewing this product right now
          </p>

          <div className="brand-block">
            <div className="brand-name">{product.brand}</div>
            <div className="brand-mark">CC</div>
          </div>

          <div className="badge-row">
            {product.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <div className="size-box">
            <label htmlFor="size">Size:</label>
            <div className="size-select-row">
              <select id="size" defaultValue={product.size}>
                <option>{product.size}</option>
              </select>
              <button type="button">Clear</button>
            </div>
          </div>

          <p className="stock-line">{product.stock}</p>
          <p className="points-line">Purchase this product now and earn 7 Points!</p>

          <div className="cart-row">
            <div className="qty-box">
              <button
                type="button"
                onClick={() => setQuantity((value) => Math.max(1, value - 1))}
              >
                -
              </button>
              <span>{quantity}</span>
              <button type="button" onClick={() => setQuantity((value) => value + 1)}>
                +
              </button>
            </div>

            <button 
              type="button" 
              className="add-cart-button"
              onClick={() => addToCart({
                id: product.sku,
                name: product.title,
                price: `${product.price}${product.currency}`,
                priceValue: product.price,
                image: product.gallery[0],
                quantity: quantity
              })}
            >
              ADD TO CART
            </button>
          </div>

          <div className="action-links">
            <button
              type="button"
              onClick={() =>
                toggleWishlist({
                  id: product.sku,
                  name: product.title,
                  price: mainProductPrice,
                  priceValue: product.price,
                  image: product.gallery[0],
                  sku: product.sku,
                  badges: product.tags,
                })
              }
            >
              {mainProductIsFavorite ? "Remove from Wishlist" : "Add to Wishlist"}
            </button>
            <button type="button">Add to compare</button>
          </div>

          <div className="meta-list">
            <p>
              <strong>SKU:</strong> {product.sku}
            </p>
            <p>
              <strong>Categories:</strong> {product.categories.join(", ")}
            </p>
            <p>
              <strong>Tags:</strong> {product.productTags.join(", ")}
            </p>
          </div>
        </section>
      </main>

      <section className="tabs-section">
        <div className="tabs-nav">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              className={tab === activeTab ? "active" : ""}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="tabs-content">
          {activeTab === "Description" && (
            <>
              {product.description.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </>
          )}

          {activeTab === "How To Use" && (
            <p>
              Apply a small amount to the eye contour morning and evening using gentle
              tapping motions.
            </p>
          )}

          {activeTab === "Reviews (0)" && (
            <p>There are no reviews yet for this product.</p>
          )}
        </div>
      </section>

      <section className="similar-section">
        <h2>Similar Products</h2>
        <div className="similar-grid">
          {similarProducts.map((item) => (
            <article key={item.title} className="similar-card">
              {item.badge ? (
                <span className="similar-badge">{item.badge}</span>
              ) : (
                <span className="similar-badge spacer" />
              )}

              <div className="similar-image">
                <img className="default-image" src={item.image} alt={item.title} />
                <img
                  className="hover-image"
                  src={item.hoverImage}
                  alt={`${item.title} alternate`}
                />

                <div className="similar-actions">
                  <button type="button" aria-label="Quick view">
                    <ProductCardActionIcon type="view" />
                  </button>
                  <button
                    type="button"
                    aria-label={
                      isInWishlist(item.title)
                        ? `Remove ${item.title} from wishlist`
                        : `Add ${item.title} to wishlist`
                    }
                    onClick={() =>
                      toggleWishlist({
                        id: item.title,
                        name: item.title,
                        price: `${item.price}${product.currency}`,
                        priceValue: item.price,
                        image: item.image,
                        badge: item.badge || undefined,
                        badges: item.badge ? [item.badge] : [],
                      })
                    }
                    style={{ color: isInWishlist(item.title) ? "#eb5aa0" : undefined }}
                  >
                    <ProductCardActionIcon type="wishlist" />
                  </button>
                </div>
              </div>

              <h3>{item.title}</h3>

              <p className="similar-price">
                {item.price}
                {product.currency}
              </p>

              <button 
                type="button" 
                className="similar-button"
                onClick={() => addToCart({
                  id: item.title,
                  name: item.title,
                  price: `${item.price}${product.currency}`,
                  priceValue: item.price,
                  image: item.image,
                  quantity: 1
                })}
              >
                <span>ADD TO CART</span>
              </button>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
