import { useState } from "react";
import { Autoplay, Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/homepage.css";
import { useCart } from "../context/CartContext";
import QuickViewPanel, { type QuickViewProduct } from "./QuickViewPanel";

const SearchIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

const EyeIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const RefreshIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
    <path d="M3 3v5h5" />
  </svg>
);

const HeartIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const CartIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);
function HeroBanner() {
  const mobileBannerLink = "https://beauty-bloom.net/shop/";
  const desktopSlides = [
    { id: 1, image: "/image/Artboard-2 (1).jpg" },
    { id: 2, image: "/image/Artboard-2.jpg" },
    { id: 3, image: "/image/banner-6.jpeg" },
    { id: 4, image: "/image/banner3.jpeg" },
    { id: 5, image: "/image/bannner-scaled.jpg" },
  ];
  const mobileSlides = [
    { id: 1, image: "/bannerimagemobileview/Artboard-7 (1).jpg" },
    { id: 2, image: "/bannerimagemobileview/Artboard-9 (1).jpg" },
    { id: 3, image: "/bannerimagemobileview/banner-mobile-new (1).jpg" },
    { id: 4, image: "/bannerimagemobileview/banner7 (1).jpg" },
    { id: 5, image: "/bannerimagemobileview/bannner-mobile-2 (1).jpg" },
  ];

  return (
    <section className="homepage-hero">
      <div className="homepage-hero__inner">
        <a href={mobileBannerLink} className="homepage-hero__mobile" aria-label="Shop now">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            loop
            speed={700}
            autoplay={{
              delay: 3200,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            className="homepage-hero__swiper homepage-hero__swiper--mobile"
          >
            {mobileSlides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <img
                  src={slide.image}
                  alt={`Mobile banner ${slide.id}`}
                  className="homepage-hero__mobile-image"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </a>

        <div className="homepage-hero__desktop">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            loop
            speed={700}
            autoplay={{
              delay: 3200,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            className="homepage-hero__swiper homepage-hero__swiper--desktop"
          >
            {desktopSlides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <img
                  src={slide.image}
                  alt={`Banner ${slide.id}`}
                  className="homepage-hero__image"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

function CategoryIcons() {
  const categories = [
    {
      name: "Beauty Accessories",
      image: "/cateicon/26.webp",
    },
    {
      name: "Best sellers",
      image: "/cateicon/1.webp",
    },
    {
      name: "Body Care",
      image: "/cateicon/body-care-1.webp",
    },
    {
      name: "Cheeks",
      image: "/cateicon/5.webp",
    },
    {
      name: "Eyes",
      image: "/cateicon/6.webp",
    },
    {
      name: "Face",
      image: "/cateicon/4.webp",
    },
    {
      name: "Gifts & Sets",
      image: "/cateicon/2-1.webp",
    },
    {
      name: "Lips",
      image: "/cateicon/3.webp",
    },
  ];

  return (
    <section className="homepage-category-section">
      <div className="homepage-category-shell mx-auto max-w-7xl px-4">
        <div className="homepage-category-grid">
          {categories.map((category) => (
            <button
              key={category.name}
              type="button"
              className="category-icon homepage-category-item group flex flex-col items-center gap-3"
            >
              <div className="homepage-category-item__media h-40 w-40 overflow-hidden rounded-full transition-all duration-300 hover:shadow-md md:h-24 md:w-24 lg:h-28 lg:w-28">
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <span className="homepage-category-item__label text-center text-base font-semibold text-gray-800 transition-colors group-hover:text-primary md:text-sm md:font-medium">
                {category.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function RewardsBanner() {
  const items = ["reward-1", "reward-2", "reward-3", "reward-4"];

  return (
    <section className="homepage-reward-section bg-white py-4 md:py-6">
      <div className="mx-auto max-w-7xl px-0 md:px-4">
        <div className="homepage-reward-strip overflow-hidden bg-primary py-3">
          <div className="animate-scroll-left flex whitespace-nowrap">
            {items.map((id) => (
              <div key={id} className="flex items-center gap-8 px-4 md:gap-16 md:px-8">
                <span className="text-sm text-white md:text-base">Each Point = 5 NIS</span>
                <span className="text-sm text-white md:text-base">
                  Earn 1 Reward Point for every 100 NIS spent
                </span>
                <span className="text-sm text-white md:text-base">Each Point = 5 NIS</span>
                <span className="text-sm text-white md:text-base">
                  Earn 1 Reward Point for every 100 NIS spent
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface Product {
  id: number;
  name: string;
  image: string;
  hoverImage?: string;
  href?: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  isNew?: boolean;
  isLimitedEdition?: boolean;
  colors?: string[];
  buttonLabel?: string;
}

interface ProductCardProps {
  product: Product;
  onQuickView: (product: QuickViewProduct) => void;
}

function ProductCard({ product, onQuickView }: ProductCardProps) {
  const { addToCart, toggleWishlist, isInWishlist } = useCart();
  const numericPrice = parseFloat(product.price.replace(/[^\d.-]/g, ""));
  const isFavorite = isInWishlist(product.id.toString());
  const quickViewProduct: QuickViewProduct = {
    id: product.id.toString(),
    name: product.name,
    image: product.image,
    price: product.price,
    priceValue: isNaN(numericPrice) ? 0 : numericPrice,
    originalPrice: product.originalPrice,
    badges: [
      ...(product.discount ? [`SALE UP TO ${product.discount}`] : []),
      ...(product.isLimitedEdition ? ["LIMITED EDITION"] : []),
      ...(product.isNew ? ["NEW"] : []),
    ],
    viewers: 23,
    stockText: "3 in stock",
    buttonLabel: product.buttonLabel === "SELECT OPTIONS" ? "SELECT OPTIONS" : "ADD TO CART",
    description: [
      "Suggested usage:",
      "Use this product as part of your beauty routine for a smooth, polished finish.",
      "Apply gently and build the result to your preferred look.",
    ],
    href: product.href,
  };

  const ctaLabel =
    product.buttonLabel || (product.colors ? "SELECT OPTIONS" : "ADD TO CART");
  const ctaClassName =
    ctaLabel === "SELECT OPTIONS"
      ? "product-card__cta product-card__cta--select"
      : "product-card__cta product-card__cta--cart";

  const handleAddToCart = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (ctaLabel === "ADD TO CART") {
      e.preventDefault();

      addToCart({
        id: product.id.toString(),
        name: product.name,
        price: product.price,
        priceValue: isNaN(numericPrice) ? 0 : numericPrice,
        image: product.image,
        quantity: 1,
        badge: product.isNew
          ? "NEW"
          : product.discount
          ? `SALE UP TO ${product.discount}`
          : undefined,
      });
    }
  };

  return (
    <article className="product-card group">
      <div className="product-card__media">
        <a href={product.href || "#"} aria-label={product.name}>
          <img
            src={product.image}
            alt={product.name}
            className={`product-image product-card__image ${
              product.hoverImage ? "group-hover:opacity-0" : ""
            }`}
          />

          {product.hoverImage && (
            <img
              src={product.hoverImage}
              alt={`${product.name} hover`}
              className="product-card__image product-card__image--hover"
            />
          )}
        </a>

        <div className="product-card__badges">
          {product.discount && (
            <span className="product-card__badge product-card__badge--sale">
              SALE UP TO {product.discount}
            </span>
          )}

          {product.isLimitedEdition && (
            <span className="product-card__badge product-card__badge--limited">
              LIMITED EDITION
            </span>
          )}

          {product.isNew && (
            <span className="product-card__badge product-card__badge--new">NEW</span>
          )}
        </div>

        <div className="product-card__actions">
          <button
            type="button"
            className="product-card__action"
            onClick={() => onQuickView(quickViewProduct)}
            aria-label={`Quick view ${product.name}`}
          >
            <EyeIcon />
          </button>

          <button
            type="button"
            className="product-card__action"
            onClick={() =>
              addToCart({
                id: product.id.toString(),
                name: product.name,
                price: product.price,
                priceValue: isNaN(numericPrice) ? 0 : numericPrice,
                image: product.image,
                quantity: 1,
                badge: product.isNew
                  ? "NEW"
                  : product.discount
                  ? `SALE UP TO ${product.discount}`
                  : undefined,
                })
            }
            aria-label={`Add ${product.name} to cart`}
          >
            <CartIcon />
          </button>

          <button
            type="button"
            className="product-card__action"
            aria-label={`Compare ${product.name}`}
          >
            <RefreshIcon />
          </button>

          <button
            type="button"
            className={`product-card__action${isFavorite ? " is-active" : ""}`}
            onClick={() =>
              toggleWishlist({
                id: product.id.toString(),
                name: product.name,
                price: product.price,
                priceValue: isNaN(numericPrice) ? 0 : numericPrice,
                image: product.image,
                badges: [
                  ...(product.discount ? [`SALE UP TO ${product.discount}`] : []),
                  ...(product.isLimitedEdition ? ["LIMITED EDITION"] : []),
                  ...(product.isNew ? ["NEW"] : []),
                ],
              })
            }
            aria-label={isFavorite ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}
          >
            <HeartIcon />
          </button>
        </div>
      </div>

      <div className="product-card__body">
        {product.colors && product.colors.length > 0 && (
          <div className="product-card__swatches">
            {product.colors.map((color) => (
              <button
                key={`${product.id}-${color}`}
                type="button"
                className="product-card__swatch"
                style={{ backgroundColor: color }}
                aria-label={`Select color ${color}`}
              />
            ))}
          </div>
        )}

        <h3 className="product-card__title">
          <a href={product.href || "#"}>{product.name}</a>
        </h3>

        <div className="product-card__price-row">
          {product.originalPrice && (
            <span className="product-card__price product-card__price--original">{product.originalPrice}</span>
          )}
          <span className="product-card__price product-card__price--current">{product.price}</span>
        </div>

        <a
          href={product.href || "#"}
          onClick={handleAddToCart}
          className={ctaClassName}
        >
          <span>{ctaLabel}</span>
        </a>
      </div>
    </article>
  );
}

function NewTrendySection() {
  const { addToCart } = useCart();
  const [previewProduct, setPreviewProduct] = useState<QuickViewProduct | null>(null);
  const products: Product[] = [
    {
      id: 1,
      name: "Yves Saint Laurent YSL Loveshine Plumping Lip Oil Gloss",
      href: "https://beauty-bloom.net/product/yves-saint-laurent-loveshine-plumping-lip-oil-gloss/",
      image:
        "https://cdn.beauty-bloom.net/wp-content/uploads/2025/09/4936968883569-300x300.webp",
      hoverImage:
        "https://cdn.beauty-bloom.net/wp-content/uploads/2025/09/Espresso-Stardust-3-300x300.webp",
      price: "150 NIS - 180 NIS",
      discount: "17%",
      colors: ["#9c7a98", "#ec7e7d", "#563430", "#7e303e", "#d73654", "#f5cbc3", "#c87a6c"],
      buttonLabel: "SELECT OPTIONS",
    },
    {
      id: 2,
      name: "Yves Saint Laurent YSL Tuxedo - Le Vestiaire des Parfums",
      href: "https://beauty-bloom.net/product/yves-saint-laurent-ysl-tuxedo-le-vestiaire-des-parfums/",
      image:
        "https://cdn.beauty-bloom.net/wp-content/uploads/2026/04/imgi_90_0757500a-9092-4147-91ee-700eb80d4106-300x300.jpg",
      hoverImage:
        "https://cdn.beauty-bloom.net/wp-content/uploads/2026/04/imgi_93_9c1cb245-3d79-4f74-b577-8212965db0f9-300x300.jpg",
      price: "980 NIS",
      originalPrice: "1,290 NIS",
      discount: "24%",
      isNew: true,
      buttonLabel: "SELECT OPTIONS",
    },
    {
      id: 3,
      name: "Tatcha Dewy Skin, Plump Lips Set",
      href: "https://beauty-bloom.net/product/tatcha-dewy-skin-plump-lips-set/",
      image:
        "https://cdn.beauty-bloom.net/wp-content/uploads/2026/01/s2909919-main-zoom-300x300.webp",
      hoverImage:
        "https://cdn.beauty-bloom.net/wp-content/uploads/2026/01/s2909919-av-1202508281528032950700-zoom-300x300.webp",
      price: "380 NIS",
      originalPrice: "520 NIS",
      discount: "27%",
      isLimitedEdition: true,
      isNew: true,
      buttonLabel: "ADD TO CART",
    },
    {
      id: 4,
      name: "Rouge Dior Sequin Liquid Duo",
      href: "https://beauty-bloom.net/product/rouge-dior-sequin-liquid-duo-2/",
      image:
        "https://cdn.beauty-bloom.net/wp-content/uploads/2026/01/Y1000057_E000000960_E01_RHC-300x300.webp",
      hoverImage:
        "https://cdn.beauty-bloom.net/wp-content/uploads/2026/01/87af873f9ebd5bb24c0e3dc6565fae34-300x300.webp",
      price: "195 NIS",
      originalPrice: "220 NIS",
      discount: "11%",
      isLimitedEdition: true,
      isNew: true,
      colors: ["#efe7e6", "#f7ebea", "#8a3952", "#e54d5f"],
      buttonLabel: "SELECT OPTIONS",
    },
    {
      id: 5,
      name: "KAYALI VANILLA | 28 Eau de Parfum",
      href: "https://beauty-bloom.net/product/kayali-vanilla-28-eau-de-parfum/",
      image:
        "https://cdn.beauty-bloom.net/wp-content/uploads/2026/01/s2163970-main-zoom-300x300.webp",
      hoverImage:
        "https://cdn.beauty-bloom.net/wp-content/uploads/2026/01/s2163970-av-8-zoom-300x300.jpg",
      price: "135 NIS - 560 NIS",
      discount: "29%",
      buttonLabel: "SELECT OPTIONS",
    },
    {
      id: 6,
      name: "Fenty Beauty by Rihanna Gloss Bomb Universal Lip Luminizer",
      href: "https://beauty-bloom.net/product/fenty-beauty-by-rihanna-gloss-bomb-universal-lip-luminizer-shades-fenty-glow-fuy-glass-slipper-hot-chocolit-riri-fuchsia-flex/",
      image:
        "https://cdn.beauty-bloom.net/wp-content/uploads/2026/04/s2936706-main-zoom-300x300.webp",
      hoverImage:
        "https://cdn.beauty-bloom.net/wp-content/uploads/2026/04/s2936706-av-1202602230756406000800-zoom-1-300x300.jpg",
      price: "110 NIS - 140 NIS",
      buttonLabel: "SELECT OPTIONS",
    },
  ];

  return (
    <>
      <section className="homepage-slider-section homepage-slider-section--products">
        <div className="homepage-slider-shell mx-auto max-w-7xl px-4 md:px-8">
          <div className="homepage-slider-heading">
            <h2 className="homepage-slider-title">NEW & TRENDY!</h2>
          </div>

          <Swiper
            modules={[Autoplay, Navigation, Scrollbar]}
            spaceBetween={16}
            slidesPerView={2.2}
            loop
            speed={800}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            navigation
            scrollbar={{ draggable: true, hide: false }}
            breakpoints={{
              640: { slidesPerView: 2.2, spaceBetween: 16 },
              768: { slidesPerView: 3, spaceBetween: 18 },
              1024: { slidesPerView: 4, spaceBetween: 22 },
              1280: { slidesPerView: 5, spaceBetween: 24 },
            }}
            className="homepage-product-swiper homepage-product-swiper--withbar"
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard product={product} onQuickView={setPreviewProduct} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <QuickViewPanel
        open={previewProduct !== null}
        product={previewProduct}
        onClose={() => setPreviewProduct(null)}
        onAddToCart={(item) => {
          addToCart({
            id: item.id,
            name: item.name,
            price: item.price,
            priceValue: item.priceValue,
            image: item.image,
            badge: item.badge ?? item.badges?.[0],
          });
        }}
      />
    </>
  );
}

function FilterShopSection() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [minPrice, setMinPrice] = useState(40);
  const [maxPrice, setMaxPrice] = useState(3500);
  const MAX_PRICE = 4000;

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown((prev) => (prev === dropdown ? null : dropdown));
  };

  const StarIcon = ({ filled }: { filled: boolean }) => (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill={filled ? "#fbbf24" : "#e5e7eb"}
      className="mx-0.5 inline-block"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );

  return (
    <section className="homepage-filter-section py-10 md:py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="homepage-filter-card relative min-h-[380px] overflow-hidden md:min-h-[450px]">
          <div className="absolute inset-0 bg-[#fdf4f8]" />

          <div className="homepage-filter-visual absolute right-0 top-0 h-full w-[42%] opacity-100 md:w-[44%]">
            <img
              src="/image/banner3.jpeg"
              alt="Beauty Bloom products"
              className="h-full w-full object-cover object-right"
            />
          </div>

          <div className="relative z-10 flex h-full flex-col justify-center px-6 py-12 md:px-12 md:py-16">
            <div className="homepage-filter-head mx-auto mb-8 w-full max-w-4xl text-center">
              <h2 className="homepage-filter-title mb-4 text-3xl font-bold tracking-tight text-[#20273b] md:text-5xl">
                Filter Our Shop For Your Need
              </h2>
              <p className="homepage-filter-copy text-lg italic text-black">
                Discover the art of glow — where sophistication meets your every desire.
              </p>
            </div>

            <div className="homepage-filter-toolbar mt-4 flex w-full items-stretch gap-3 bg-[#fb65a2] p-4 md:gap-0 md:p-5">
              <div className="relative z-20 flex-1 overflow-visible bg-white -skew-x-[12deg]">
                <div className="flex min-h-[55px] w-full items-center skew-x-[12deg]">
                  <div className="min-w-[120px] flex-1 border-r border-gray-100 px-4 md:px-6">
                    <select className="w-full cursor-pointer bg-transparent py-3 text-sm font-bold text-gray-700 focus:outline-none">
                      <option>Category</option>
                      <option>Makeup</option>
                      <option>Skincare</option>
                      <option>Perfumes</option>
                    </select>
                  </div>

                  <div className="min-w-[120px] flex-1 border-r border-gray-100 px-4 md:px-6">
                    <select className="w-full cursor-pointer bg-transparent py-3 text-sm font-bold text-gray-700 focus:outline-none">
                      <option>Brand</option>
                      <option>Dior</option>
                      <option>YSL</option>
                      <option>Chanel</option>
                    </select>
                  </div>

                  <div className="relative min-w-[140px] flex-1 border-r border-gray-100 px-4 md:px-6">
                    <button
                      onClick={() => toggleDropdown("rating")}
                      className="flex h-full w-full items-center justify-between bg-transparent py-3 text-left text-sm font-bold text-gray-700 focus:outline-none"
                    >
                      <span className="flex-1">Rating</span>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#999"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`transition-transform duration-200 ${
                          openDropdown === "rating" ? "rotate-180" : ""
                        }`}
                      >
                        <path d="M5 15l7-7 7 7" />
                      </svg>
                    </button>

                    {openDropdown === "rating" && (
                      <div className="absolute left-0 top-[110%] z-50 w-full min-w-[180px] border border-gray-100 bg-white py-2 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                        {[5, 4, 3, 2, 1].map((rating) => (
                          <label
                            key={rating}
                            className="flex cursor-pointer items-center gap-3 px-5 py-2 hover:bg-gray-50"
                          >
                            <input
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                            />
                            <div className="flex items-center">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <StarIcon key={star} filled={star <= rating} />
                              ))}
                            </div>
                          </label>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="relative min-w-[160px] flex-1 px-4 md:px-6">
                    <button
                      onClick={() => toggleDropdown("price")}
                      className="flex h-full w-full items-center justify-between bg-transparent py-3 text-left text-sm font-bold text-gray-700 focus:outline-none"
                    >
                      <span className="flex-1">Price</span>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#999"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`transition-transform duration-200 ${
                          openDropdown === "price" ? "rotate-180" : ""
                        }`}
                      >
                        <path d="M5 15l7-7 7 7" />
                      </svg>
                    </button>

                    {openDropdown === "price" && (
                      <div className="absolute left-0 top-[110%] z-50 flex w-full min-w-[240px] flex-col items-center border border-gray-100 bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                        <div className="group/slider relative mb-6 mt-2 flex h-1 w-full items-center rounded-full bg-gray-200 px-2">
                          <div
                            className="absolute h-full bg-[#af3b6e]"
                            style={{
                              left: `${(minPrice / MAX_PRICE) * 100}%`,
                              right: `${100 - (maxPrice / MAX_PRICE) * 100}%`,
                            }}
                          />

                          <input
                            type="range"
                            min="0"
                            max={MAX_PRICE}
                            step="10"
                            value={minPrice}
                            onChange={(e) =>
                              setMinPrice(Math.min(Number(e.target.value), maxPrice - 10))
                            }
                            className="absolute w-full appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:h-3.5 [&::-webkit-slider-thumb]:w-3.5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#af3b6e] cursor-pointer"
                          />

                          <input
                            type="range"
                            min="0"
                            max={MAX_PRICE}
                            step="10"
                            value={maxPrice}
                            onChange={(e) =>
                              setMaxPrice(Math.max(Number(e.target.value), minPrice + 10))
                            }
                            className="absolute w-full appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:h-3.5 [&::-webkit-slider-thumb]:w-3.5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#af3b6e] cursor-pointer"
                          />
                        </div>

                        <div className="flex items-center gap-1 text-center text-sm font-bold text-gray-800">
                          <span>Price:</span>
                          <span>{minPrice.toLocaleString()} NIS - {maxPrice.toLocaleString()} NIS</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <a
                href="https://beauty-bloom.net/shop/"
                className="homepage-filter-search relative z-10 flex min-h-[55px] w-[132px] shrink-0 items-center justify-center bg-white px-6 py-2 -skew-x-[12deg] shadow-sm transition-transform hover:scale-[1.02] active:scale-[0.98] md:ml-3 md:w-[138px] md:py-0"
              >
                <div className="flex items-center justify-center gap-2 whitespace-nowrap pr-2 font-bold text-gray-800 transition-colors group-hover:text-primary skew-x-[12deg] text-sm">
                  <SearchIcon />
                  <span>SEARCH</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RecommendedSection() {
  const { addToCart } = useCart();
  const [previewProduct, setPreviewProduct] = useState<QuickViewProduct | null>(null);
  const products: Product[] = [
    {
      id: 5,
      name: "Anastasia Beverly Hills Mini Modern Renaissance Kit",
      image:
        "/product-img/pro5/ABH_2024_Holiday-Kit_STD_Modern-Ren-Kit_01_Hero_5f752ca5-5237-43f2-85a2-2a6f0a72c0af.webp",
      hoverImage:
        "/product-img/pro5/ABH_2024_Holiday-Kit_STD_Modern-Ren-Kit_04_Swatch.webp",
      price: "135 NIS",
      isLimitedEdition: true,
      colors: ["#e4b6a9", "#4d2a22", "#c17e67"],
    },
    {
      id: 6,
      name: "Yves Saint Laurent YSL Libre Set",
      image:
        "/product-img/pro3/imgi_102_875851d9-246b-40e1-a5ae-588272bb9739.jpg",
      hoverImage:
        "/product-img/pro3/imgi_106_28c0c01d-7057-42ff-b5ff-edf86b19baa2-600x920.jpg",
      price: "450 NIS",
      discount: "17%",
      originalPrice: "520 NIS",
      isLimitedEdition: true,
    },
    {
      id: 7,
      name: "Rare Beauty Warm Wishes Soft Matte Powder Bronzer",
      image: "/product-img/pro4/s2935526-main-zoom.jpg",
      hoverImage:
        "/product-img/pro4/s2935526-av-4202511171354491130800-zoom-768x768.webp",
      price: "120 NIS",
    },
    {
      id: 8,
      name: "Fenty Beauty Gloss Bomb Universal Lip Luminizer",
      image: "/product-img/pro6/s2936706-main-zoom-600x600.webp",
      hoverImage:
        "/product-img/pro6/s2936706-av-3202602230756415300800-zoom-1-768x768.webp",
      price: "110 NIS",
      isNew: true,
    },
    {
      id: 9,
      name: "Kosas Lip Pulse Glassy Lip Plumper Gloss",
      image: "/product-img/pro7/2653535-600x600.avif",
      hoverImage: "/product-img/pro7/2653535_alt03-768x768.avif",
      price: "105 NIS",
      isNew: true,
    },
    {
      id: 10,
      name: "MAKEUP BY MARIO Ethereal Eyes Eyeshadow",
      image: "/product-img/pro2/s2945376-main-zoom-600x600.webp",
      hoverImage:
        "/product-img/pro2/s2945376-av-4202602170841279760800-zoom-300x300.webp",
      price: "320 NIS",
    },
  ];
  const mobileProducts = products.slice(0, 2);

  return (
    <>
      <section className="homepage-slider-section homepage-slider-section--recommended">
        <div className="homepage-slider-shell mx-auto max-w-7xl px-4">
          <div className="homepage-slider-heading">
            <h2 className="homepage-slider-title">RECOMMENDED FOR YOU</h2>
          </div>

          <div className="homepage-recommended-layout">
            <div className="homepage-recommended-media">
              <iframe
                src="https://www.youtube.com/embed/gmzoNurteWs?rel=0"
                title="Recommended beauty video"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>

            <div className="homepage-recommended-products homepage-recommended-products--desktop">
              <Swiper
                modules={[Autoplay, Navigation, Scrollbar]}
                spaceBetween={16}
                slidesPerView={2.2}
                loop
                speed={800}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: false,
                }}
                navigation
                scrollbar={{ draggable: true, hide: false }}
                breakpoints={{
                  640: { slidesPerView: 2.2, spaceBetween: 16 },
                  768: { slidesPerView: 2.6, spaceBetween: 18 },
                  1024: { slidesPerView: 4, spaceBetween: 18 },
                  1280: { slidesPerView: 4, spaceBetween: 20 },
                }}
                className="homepage-product-swiper homepage-product-swiper--recommended homepage-product-swiper--withbar"
              >
                {products.map((product) => (
                  <SwiperSlide key={product.id}>
                    <ProductCard product={product} onQuickView={setPreviewProduct} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="homepage-recommended-products homepage-recommended-products--mobile">
              <div className="homepage-recommended-mobile-grid">
                {mobileProducts.map((product) => (
                  <ProductCard
                    key={`mobile-${product.id}`}
                    product={product}
                    onQuickView={setPreviewProduct}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <QuickViewPanel
        open={previewProduct !== null}
        product={previewProduct}
        onClose={() => setPreviewProduct(null)}
        onAddToCart={(item) => {
          addToCart({
            id: item.id,
            name: item.name,
            price: item.price,
            priceValue: item.priceValue,
            image: item.image,
            badge: item.badge ?? item.badges?.[0],
          });
        }}
      />
    </>
  );
}

function MustHaveBrands() {
  const brands = [
    {
      name: "HUDA Beauty",
      id: "huda",
      image: "/sponsiericon/HUDA-Beauty-logo-1024x1024-1-300x300.webp",
    },
    {
      name: "Charlotte Tilbury",
      id: "charlotte",
      image: "/sponsiericon/charlottet-300x132 (1).jpg",
    },
    {
      name: "Charlotte Tilbury",
      id: "charlotte-alt",
      image: "/sponsiericon/charlottet-300x132 (2).jpg",
    },
    {
      name: "YSL",
      id: "ysl",
      image:
        "/sponsiericon/yves-saint-laurent-logo-png_seeklogo-288938-300x300.png",
    },
    {
      name: "YSL",
      id: "ysl-alt",
      image:
        "/sponsiericon/yves-saint-laurent-logo-png_seeklogo-288938-300x300 (1).png",
    },
    {
      name: "Patrick Ta",
      id: "patrickta",
      image: "/sponsiericon/jowE5OsDG2EaPTxJNsxQexjhJppIkCJ7nLIIhDU2-300x205.webp",
    },
    {
      name: "Makeup By Mario",
      id: "makeupbymario",
      image:
        "/sponsiericon/logo_53804680-a843-4c04-9465-fbb0ab905308-300x205.webp",
    },
    {
      name: "Images",
      id: "images",
      image: "/sponsiericon/images.png",
    },
    {
      name: "Images",
      id: "images-alt",
      image: "/sponsiericon/images (1).png",
    },
  ];
  const repeatedBrands = [...brands, ...brands, ...brands];

    return (
    <section className="homepage-slider-section homepage-slider-section--brands homepage-slider-section--brands-desktop">
      <div className="homepage-slider-shell relative mx-auto max-w-7xl px-4">
        <div className="homepage-slider-heading">
          <h2 className="homepage-slider-title">MUST-HAVE BRANDS</h2>
        </div>

        <div className="relative new-trendy-swiper-container homepage-brand-swiper-wrap">
          <Swiper
            modules={[Autoplay, Navigation, Scrollbar]}
            spaceBetween={16}
            slidesPerView={2.5}
            loop
            speed={800}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            scrollbar={{ draggable: true, hide: false }}
            loopAdditionalSlides={12}
            breakpoints={{
              640: { slidesPerView: 3.2 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
              1280: { slidesPerView: 6 },
            }}
            className="homepage-brand-swiper homepage-brand-swiper--withbar"
          >
            {repeatedBrands.map((brand, index) => (
              <SwiperSlide key={`${brand.id}-${index}`} className="h-auto">
                <button
                  type="button"
                  className="homepage-brand-card flex h-32 w-full items-center justify-center bg-white p-4 transition-all duration-300"
                >
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="max-h-full max-w-full object-contain transition-all"
                  />
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <main className="homepage-body">
        <HeroBanner />
        <CategoryIcons />
        <RewardsBanner />
        <NewTrendySection />
        <FilterShopSection />
        <RecommendedSection />
        <MustHaveBrands />
      </main>
    </div>
  );
}

