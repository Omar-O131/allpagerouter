import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./components/header";
import ShopPage from "./components/shopepage";
import ProductPage from "./components/productpage";
import SignInPage from "./components/sign-in";
import Footer from "./components/Footersec";
import HomePage from "./components/homepage";

import AboutUs from "./components/aboutus";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsConditions from "./components/TermsConditions";
import ContactUs from "./components/ContactUs";
import CartPage from "./components/cart";
import WishlistPage from "./components/fav";
import AccountPage from "./components/accountpage";
import { CartProvider } from "./context/CartContext";

function AppContent() {
  const navigate = useNavigate();

  const handleFooterNavigate = (
    page:
      | "home"
      | "about-us"
      | "privacy-policy"
      | "terms-and-conditions"
      | "contact-us"
  ) => {
    if (page === "home") navigate("/");
    if (page === "about-us") navigate("/about-us");
    if (page === "privacy-policy") navigate("/privacy-policy");
    if (page === "terms-and-conditions") navigate("/terms-and-conditions");
    if (page === "contact-us") navigate("/contact-us");
  };

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/account" element={<AccountPage />} />

        <Route path="/cart" element={<CartPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsConditions />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>

      <Footer onNavigate={handleFooterNavigate} />
    </>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
