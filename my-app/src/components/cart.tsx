import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/cart.css";

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();
  const [currentStep, setCurrentStep] = useState<"cart" | "checkout">("cart");

  const clearCart = () => {
    cartItems.forEach((item) => removeFromCart(item.id));
  };

  return (
    <div className="page">
      <main>
        <section className="cart-hero compact">
          <div className="checkout-steps">
            <button
              type="button"
              className={`checkout-steps__item ${
                currentStep === "cart" ? "active" : ""
              }`}
              onClick={() => setCurrentStep("cart")}
            >
              <span className="checkout-steps__number">1</span>
              <span className="checkout-steps__label">SHOPPING CART</span>
            </button>

            <div className="checkout-steps__line" />

            <button
              type="button"
              className={`checkout-steps__item ${
                currentStep === "checkout" ? "active" : ""
              }`}
              onClick={() => setCurrentStep("checkout")}
            >
              <span className="checkout-steps__number">2</span>
              <span className="checkout-steps__label">CHECKOUT</span>
            </button>

            <div className="checkout-steps__line" />

            <div className="checkout-steps__item">
              <span className="checkout-steps__number">3</span>
              <span className="checkout-steps__label">ORDER STATUS</span>
            </div>
          </div>

          <p className="cart-hero__notice">
            You are out of time! Checkout now to avoid losing your order!
          </p>
        </section>

        {currentStep === "cart" ? (
          <section className="cart-layout">
            <div className="cart-layout__main">
              {cartItems.length === 0 ? (
                <div className="text-center py-12" style={{ textAlign: "center", padding: "40px" }}>
                  <p className="text-gray-500 mb-6 font-bold" style={{ marginBottom: "20px" }}>Your cart is currently empty.</p>
                  <Link
                    to="/shop"
                    className="slanted-button slanted-button--primary"
                    style={{ display: "inline-flex" }}
                  >
                    <span>Return to shop</span>
                  </Link>
                </div>
              ) : (
                <div className="cart-table">
                  <div className="cart-table__head">
                    <span className="product-col">PRODUCT</span>
                    <span>PRICE</span>
                    <span>SKU</span>
                    <span>QUANTITY</span>
                    <span>SUBTOTAL</span>
                  </div>

                  {cartItems.map((item) => (
                    <div key={item.id} className="cart-row">
                      <div className="cart-row__product">
                        <div className="cart-row__badges">
                          {item.badge && item.badge.includes("LIMITED EDITION") && (
                            <span>LIMITED EDITION</span>
                          )}
                          {item.badge && item.badge.includes("NEW") && (
                            <span>NEW</span>
                          )}
                          {item.badge && !item.badge.includes("LIMITED EDITION") && !item.badge.includes("NEW") && (
                            <span>{item.badge}</span>
                          )}
                        </div>

                        <div className="cart-row__product-inner">
                          <img src={item.image} alt={item.name} />

                          <div className="cart-row__product-copy">
                            <Link to="/product">{item.name}</Link>
                            <button type="button" onClick={() => removeFromCart(item.id)}>Remove</button>
                          </div>
                        </div>
                      </div>

                      <div className="cart-row__cell price">{item.price}</div>
                      <div className="cart-row__cell sku">{item.id}</div>

                      <div className="cart-row__cell qty">
                        <div className="qty-box">
                          <button type="button" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                          <span>{item.quantity}</span>
                          <button type="button" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                        </div>
                      </div>

                      <div className="cart-row__cell subtotal">{item.priceValue * item.quantity} ₪</div>
                    </div>
                  ))}
                </div>
              )}

              {cartItems.length > 0 && (
                <div className="cart-actions">
                  <div className="coupon-box">
                    <input type="text" placeholder="Coupon code" />
                    <button type="button">OK</button>
                  </div>

                  <button
                    type="button"
                    className="slanted-button slanted-button--ghost"
                    onClick={clearCart}
                  >
                    <span>Clear Shopping Cart</span>
                  </button>
                </div>
              )}
            </div>

            <aside className="cart-summary">
              <div className="cart-summary__box">
                <h3>CART TOTALS</h3>

                <div className="cart-summary__row">
                  <span>Subtotal</span>
                  <span>{cartTotal} ₪</span>
                </div>

                <div className="cart-summary__row cart-summary__row--total">
                  <span>TOTAL</span>
                  <span>{cartTotal} ₪</span>
                </div>

                <button
                  type="button"
                  className="slanted-button slanted-button--primary"
                  onClick={() => setCurrentStep("checkout")}
                  disabled={cartItems.length === 0}
                >
                  <span>Proceed To Checkout</span>
                </button>

                <Link
                  className="slanted-button slanted-button--secondary"
                  to="/shop"
                  style={{ display: "inline-flex", justifyContent: "center" }}
                >
                  <span>Continue Shopping</span>
                </Link>
              </div>

              <section className="payment-security">
                <h3>PAYMENT SECURITY</h3>
                <p>
                  Encryption ensures increased transaction security. SSL
                  technology protects data linked to personal and payment info.
                </p>

                <div
                  className="payment-methods"
                  aria-label="Accepted payment methods"
                >
                  {/* Fallback inline icons if the image isn't available */}
                  <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                    <div style={{ background: '#1434CB', color: 'white', padding: '2px 8px', fontSize: '10px', fontWeight: 'bold', borderRadius: '4px' }}>VISA</div>
                    <div style={{ background: '#FF5F00', padding: '2px 8px', borderRadius: '4px', position: 'relative', overflow: 'hidden', width: '32px', display: 'flex', justifyContent: 'center' }}>
                      <div style={{ width: '12px', height: '12px', background: '#EB001B', borderRadius: '50%', position: 'absolute', left: '4px' }}></div>
                      <div style={{ width: '12px', height: '12px', background: '#F79E1B', borderRadius: '50%', position: 'absolute', right: '4px', opacity: 0.8 }}></div>
                    </div>
                    <div style={{ background: '#00457C', color: 'white', padding: '2px 8px', fontSize: '10px', fontWeight: 'bold', borderRadius: '4px' }}>PayPal</div>
                    <div style={{ background: '#006FCF', color: 'white', padding: '2px 8px', fontSize: '10px', fontWeight: 'bold', borderRadius: '4px' }}>AMEX</div>
                  </div>
                </div>
              </section>
            </aside>
          </section>
        ) : (
          <section className="checkout-layout">
            <div className="checkout-layout__main">
              <div className="checkout-coupon-note">
                Have a coupon?{" "}
                <button type="button" className="text-link-inline">
                  Click here to enter
                </button>
              </div>

              <section className="checkout-card">
                <div className="checkout-card__header checkout-card__header--stacked">
                  <h2>Billing Details</h2>
                </div>

                <div className="checkout-form-grid">
                  <label className="form-field">
                    <span>First Name *</span>
                    <input type="text" placeholder="First Name" />
                  </label>

                  <label className="form-field">
                    <span>Last Name *</span>
                    <input type="text" placeholder="Last Name" />
                  </label>

                  <label className="form-field form-field--full">
                    <span>Country / Region *</span>
                    <select defaultValue="Palestinian Territory">
                      <option>Palestinian Territory</option>
                    </select>
                  </label>

                  <label className="form-field form-field--full">
                    <span>City *</span>
                    <select defaultValue="Select city">
                      <option>Select city</option>
                    </select>
                  </label>

                  <label className="form-field form-field--full">
                    <span>Village *</span>
                    <select defaultValue="Select village">
                      <option>Select village</option>
                    </select>
                  </label>

                  <label className="form-field form-field--full">
                    <span>Street address *</span>
                    <input
                      type="text"
                      placeholder="House number and street name"
                    />
                  </label>

                  <label className="form-field form-field--full">
                    <span>Phone *</span>
                    <input type="tel" placeholder="Phone" />
                  </label>

                  <label className="form-field form-field--full">
                    <span>Email Address *</span>
                    <input
                      type="email"
                      defaultValue="oghannam617@gmail.com"
                    />
                  </label>
                </div>
              </section>

              <section className="checkout-card">
                <h2>Shipping Address</h2>
                <label className="check-line">
                  <input type="checkbox" />
                  <span>Ship to a different address?</span>
                </label>
              </section>

              <section className="checkout-card">
                <h2>Additional Information</h2>
                <label className="form-field form-field--full">
                  <span>Order Notes (optional)</span>
                  <textarea
                    rows={5}
                    placeholder="Notes about your order, e.g. special notes for delivery."
                  />
                </label>
              </section>
            </div>

            <aside className="checkout-sidebar">
              <section className="checkout-card">
                <h2>Your Order</h2>

                <div className="order-summary">
                  {cartItems.map((item) => (
                    <div key={item.id} className="order-summary__product">
                      <strong>{item.name}</strong>
                      <span>{item.quantity} x {item.price}</span>
                      <span>Subtotal: {item.priceValue * item.quantity} ₪</span>
                    </div>
                  ))}
                  
                  {cartItems.length === 0 && (
                    <p style={{ fontStyle: "italic", color: "#666", marginBottom: "10px" }}>No items in cart.</p>
                  )}

                  <div className="order-summary__row mt-4 pt-4 border-t border-gray-200">
                    <span>Subtotal</span>
                    <span>{cartTotal} ₪</span>
                  </div>

                  <div className="order-summary__row order-summary__row--total">
                    <span>TOTAL</span>
                    <span>{cartTotal} ₪</span>
                  </div>
                </div>
              </section>

              <section className="checkout-card">
                <div className="radio-stack radio-stack--checkout">
                  <label className="radio-option radio-option--checkout active">
                    <input type="radio" name="payment" defaultChecked />
                    <div>
                      <strong>Cash on delivery</strong>
                      <span>Pay with cash upon delivery.</span>
                    </div>
                  </label>

                  <label className="radio-option radio-option--checkout">
                    <input type="radio" name="payment" />
                    <div>
                      <strong>Debit/Credit Cards</strong>
                      <span className="inline-payment-icons">
                        <div style={{ display: 'flex', gap: '4px' }}>
                          <div style={{ background: '#1434CB', color: 'white', padding: '1px 4px', fontSize: '8px', borderRadius: '2px' }}>VISA</div>
                          <div style={{ background: '#00457C', color: 'white', padding: '1px 4px', fontSize: '8px', borderRadius: '2px' }}>PayPal</div>
                        </div>
                      </span>
                    </div>
                  </label>
                </div>

                <p className="checkout-policy">
                  Your personal data will be used to process your order,
                  support your experience throughout this website, and for other
                  purposes described in our privacy policy.
                </p>

                <label className="check-line check-line--terms">
                  <input type="checkbox" />
                  <span>
                    I have read and agree to the website terms and conditions *
                  </span>
                </label>

                <button
                  type="button"
                  className="slanted-button slanted-button--primary checkout-place-order w-full"
                  disabled={cartItems.length === 0}
                >
                  <span>Place Order</span>
                </button>
              </section>
            </aside>
          </section>
        )}
      </main>
    </div>
  );
}