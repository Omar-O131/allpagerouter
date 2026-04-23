import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/fav.css";
import { useCart } from "../context/CartContext";

function EyeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M2.5 12s3.5-5 9.5-5 9.5 5 9.5 5-3.5 5-9.5 5-9.5-5-9.5-5z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function TrashIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 7h16" />
      <path d="M10 11v6M14 11v6" />
      <path d="M6 7l1 13h10l1-13" />
      <path d="M9 7V4h6v3" />
    </svg>
  );
}

export default function WishlistPage() {
  const { wishlistItems, removeFromWishlist, addToCart } = useCart();
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [bulkAction, setBulkAction] = useState("add");

  const allSelected = useMemo(
    () => wishlistItems.length > 0 && selectedItems.length === wishlistItems.length,
    [selectedItems.length, wishlistItems.length]
  );

  const toggleSelectedItem = (id: string) => {
    setSelectedItems((current) =>
      current.includes(id) ? current.filter((itemId) => itemId !== id) : [...current, id]
    );
  };

  const handleAddItemToCart = (item: (typeof wishlistItems)[number]) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      priceValue: item.priceValue,
      image: item.image,
      sku: item.sku,
      badge: item.badge ?? item.badges?.[0],
    });
  };

  const handleAddAllToCart = () => {
    wishlistItems.forEach((item) => {
      handleAddItemToCart(item);
    });
  };

  const handleApplyBulkAction = () => {
    const itemsToProcess = wishlistItems.filter((item) => selectedItems.includes(item.id));
    if (itemsToProcess.length === 0) {
      return;
    }

    if (bulkAction === "add") {
      itemsToProcess.forEach((item) => handleAddItemToCart(item));
      return;
    }

    itemsToProcess.forEach((item) => removeFromWishlist(item.id));
    setSelectedItems([]);
  };

  return (
    <div className="page-shell">
      <main className="main-content">
        <h1 className="mobile-page-title">Wishlist</h1>

        <section className="wishlist-table" aria-label="Wishlist products">
          <div className="wishlist-table__head">
            <span className="wishlist-table__spacer" />
            <span className="wishlist-table__spacer" />
            <span>Quantity</span>
            <span>Price</span>
            <span>Stock Status</span>
            <span>Action</span>
          </div>

          <div className="wishlist-table__body">
            {wishlistItems.length === 0 ? (
              <article className="wishlist-row">
                <div className="wishlist-row__product">
                  <div className="wishlist-row__details">
                    <h2>Your wishlist is empty</h2>
                    <p className="wishlist-row__sku">
                      Click the heart icon on the home page, shop page, or product page to add items here.
                    </p>
                    <Link to="/shop" className="wishlist-action-button">
                      <span>GO TO SHOP</span>
                    </Link>
                  </div>
                </div>
              </article>
            ) : (
              wishlistItems.map((item) => (
                <article key={item.id} className="wishlist-row">
                  <div className="wishlist-row__select">
                    <input
                      type="checkbox"
                      checked={selectedItems.includes(item.id)}
                      onChange={() => toggleSelectedItem(item.id)}
                      aria-label={`Select ${item.name}`}
                    />
                  </div>

                  <div className="wishlist-row__product">
                    <div className="wishlist-row__media-wrap">
                      {(item.badges ?? (item.badge ? [item.badge] : [])).length ? (
                        <div className="wishlist-row__badges">
                          {(item.badges ?? (item.badge ? [item.badge] : [])).map((badge) => (
                            <span key={badge}>{badge}</span>
                          ))}
                        </div>
                      ) : null}

                      <img
                        src={item.image}
                        alt={item.name}
                        className="wishlist-row__image"
                      />
                    </div>

                    <div className="wishlist-row__details">
                      <h2>{item.name}</h2>
                      {item.sku ? <p className="wishlist-row__sku">SKU: {item.sku}</p> : null}
                    </div>
                  </div>

                  <div className="wishlist-row__quantity">
                    <span className="wishlist-row__dash">-</span>
                  </div>

                  <div className="wishlist-row__price">
                    <ins>{item.price}</ins>
                  </div>

                  <div className="wishlist-row__stock wishlist-row__stock--in">
                    <span>In stock</span>
                  </div>

                  <div className="wishlist-row__actions">
                    <div className="wishlist-row__action-group">
                      <button
                        type="button"
                        className="action-icon-button"
                        aria-label={`Quick view ${item.name}`}
                        data-hover-label="Quick view"
                      >
                        <EyeIcon />
                      </button>

                      <button
                        type="button"
                        className="wishlist-action-button wishlist-action-button--active wishlist-action-button--with-icon"
                        onClick={() => handleAddItemToCart(item)}
                      >
                        <span>ADD TO CART</span>
                      </button>

                      <button
                        type="button"
                        className="action-icon-button"
                        aria-label={`Remove ${item.name}`}
                        data-hover-label="Delete"
                        onClick={() => removeFromWishlist(item.id)}
                      >
                        <TrashIcon />
                      </button>
                    </div>

                    <p>Added on: April 22, 2026</p>
                  </div>
                </article>
              ))
            )}
          </div>

          {wishlistItems.length > 0 ? (
            <div className="wishlist-toolbar">
              <div className="wishlist-toolbar__left">
                <label className="wishlist-toolbar__select-all">
                  <input
                    type="checkbox"
                    checked={allSelected}
                    onChange={() =>
                      setSelectedItems(allSelected ? [] : wishlistItems.map((item) => item.id))
                    }
                  />
                  <span>Select all</span>
                </label>

                <select
                  aria-label="Bulk action"
                  value={bulkAction}
                  onChange={(event) => setBulkAction(event.target.value)}
                >
                  <option value="add">Add to cart</option>
                  <option value="remove">Remove</option>
                </select>

                <button
                  type="button"
                  className="toolbar-button toolbar-button--dark"
                  onClick={handleApplyBulkAction}
                >
                  APPLY
                </button>
              </div>

              <div className="wishlist-toolbar__right">
                <button type="button" className="toolbar-button toolbar-button--light">
                  ASK FOR AN ESTIMATE
                </button>

                <button
                  type="button"
                  className="toolbar-button toolbar-button--dark"
                  onClick={handleAddAllToCart}
                >
                  ADD ALL TO CART
                </button>
              </div>
            </div>
          ) : null}
        </section>
      </main>
    </div>
  );
}
