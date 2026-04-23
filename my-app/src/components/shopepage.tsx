import { useEffect, useMemo, useState, type SVGProps } from "react";
import "../styles/shopestyle.css";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import QuickViewPanel, { type QuickViewProduct } from "./QuickViewPanel";
type Category = {
    label: string;
    href: string;
};

type Brand = {
    label: string;
    href: string;
};

type Product = {
    name: string;
    href: string;
    image: string;
    brand: string;
    categories: string[];
    badge?: string;
    secondaryBadge?: string;
    oldPrice?: string;
    oldPriceValue?: number;
    price: string;
    priceValue: number;
    buttonLabel: string;
};

type ViewMode = "grid" | "list";

const categories: Category[] = [
    { label: "Beauty Accessories", href: "#" },
    { label: "Best sellers", href: "#" },
    { label: "Body Care", href: "#" },
    { label: "Bronzers & contours", href: "#" },
    { label: "Cheeks", href: "#" },
    { label: "Cleansers", href: "#" },
    { label: "Concealers/Correctors", href: "#" },
    { label: "Eye Creams/Serums", href: "#" },
    { label: "Eyebrow/Lashes", href: "#" },
    { label: "Eyeliners & kohl", href: "#" },
    { label: "Eyes", href: "#" },
    { label: "Eyeshadows", href: "#" },
    { label: "Face", href: "#" },
    { label: "Face Creams", href: "#" },
    { label: "Gifts & Sets", href: "#" },
    { label: "Hair Care", href: "#" },
    { label: "Highlighters", href: "#" },
    { label: "Lip Gloss", href: "#" },
    { label: "Lips", href: "#" },
    { label: "Makeup", href: "#" },
    { label: "Makeup Palettes", href: "#" },
    { label: "Moisturizers", href: "#" },
    { label: "Perfumes", href: "#" },
    { label: "Primers", href: "#" },
    { label: "Serums/Oil", href: "#" },
    { label: "Setting sprays/Mists", href: "#" },
    { label: "Foundations/Tints", href: "#" },
];

const brands: Brand[] = [
    { label: "Aesop", href: "#" },
    { label: "Amika", href: "#" },
    { label: "Anastasia Beverly Hills", href: "#" },
    { label: "Armani Beauty", href: "#" },
    { label: "Chanel", href: "#" },
    { label: "Charlotte Tilbury", href: "#" },
    { label: "CLARINS", href: "#" },
    { label: "Dior", href: "#" },
    { label: "Drunk Elephant", href: "#" },
];

const baseProducts: Product[] = [
    {
        brand: "Aesop",
        categories: ["Cleansers", "Face", "Face Creams", "Gifts & Sets", "Moisturizers"],
        name: "Aesop Balance: Classic Skin Care Kit",
        href: "#",
        image:
            "https://cdn.beauty-bloom.net/wp-content/uploads/2026/03/Aesop_Kits_Balance_Classic_Skin_Care_Kit_Web_Front_2000x2000px-300x300.jpg",
        badge: "Sale Up To 18%",
        secondaryBadge: "New",
        oldPrice: "390 NIS",
        oldPriceValue: 390,
        price: "320 NIS",
        priceValue: 320,
        buttonLabel: "Add to Cart",
    },
    {
        brand: "Amika",
        categories: ["Hair Care", "Perfumes"],
        name: "Amika Aura Hair & Body Mist",
        href: "#",
        image: "https://cdn.beauty-bloom.net/wp-content/uploads/2026/04/s2897056-main-zoom-300x300.webp",
        price: "155 NIS",
        priceValue: 155,
        buttonLabel: "Select Options",
    },
    {
        brand: "Anastasia Beverly Hills",
        categories: ["Lips", "Lipstick/Tint"],
        name: "Anastasia Beverly Hills Velvet Lipstick",
        href: "#",
        image: "https://cdn.beauty-bloom.net/wp-content/uploads/2026/03/s2650984-main-zoom-300x300.webp",
        price: "120 NIS",
        priceValue: 120,
        buttonLabel: "Select Options",
    },
    {
        brand: "Anastasia Beverly Hills",
        categories: ["Beauty Accessories", "Eyes"],
        name: "Anastasia 3-in-1 Makeup Pencil Sharpener",
        href: "#",
        image: "https://cdn.beauty-bloom.net/wp-content/uploads/2026/01/s765255-main-zoom-300x300.jpg",
        price: "45 NIS",
        priceValue: 45,
        buttonLabel: "Add to Cart",
    },
    {
        brand: "Chanel",
        categories: ["Eye Creams/Serums"],
        name: "CHANEL SUBLIMAGE Eye Serum",
        href: "#",
        image:
            "https://cdn.beauty-bloom.net/wp-content/uploads/2026/04/sublimage-le-serum-yeux-ultimate-eye-serum-regenerates-and-illuminates-0-5oz-packshot-default-147960-9555301138462-300x300.avif",
        badge: "Sale Up To 43%",
        secondaryBadge: "New",
        oldPrice: "1,200 NIS",
        oldPriceValue: 1200,
        price: "680 NIS",
        priceValue: 680,
        buttonLabel: "Select Options",
    },
    {
        brand: "Charlotte Tilbury",
        categories: ["Eye Creams/Serums"],
        name: "Charlotte Tilbury Cryo-Recovery Eye Serum",
        href: "#",
        image: "https://cdn.beauty-bloom.net/wp-content/uploads/2026/01/s2486314-av-09-zoom-300x300.webp",
        badge: "Sale Up To 21%",
        oldPrice: "330 NIS",
        oldPriceValue: 330,
        price: "260 NIS",
        priceValue: 260,
        buttonLabel: "Select Options",
    },
    {
        brand: "CLARINS",
        categories: ["Eye Creams/Serums"],
        name: "Clarins DOUBLE SERUM Eye",
        href: "#",
        image: "https://cdn.beauty-bloom.net/wp-content/uploads/2026/01/s2481232-main-zoom-300x300.webp",
        badge: "Sale Up To 21%",
        oldPrice: "340 NIS",
        oldPriceValue: 340,
        price: "270 NIS",
        priceValue: 270,
        buttonLabel: "Select Options",
    },
    {
        brand: "Dior",
        categories: ["Eye Creams/Serums"],
        name: "Dior Capture Totale Eye Serum",
        href: "#",
        image:
            "https://cdn.beauty-bloom.net/wp-content/uploads/2025/09/Y0996239_C099600592_E01_ZHC-e1769086203992-300x300.webp",
        badge: "Sale Up To 14%",
        oldPrice: "420 NIS",
        oldPriceValue: 420,
        price: "360 NIS",
        priceValue: 360,
        buttonLabel: "Select Options",
    },
    {
        brand: "Drunk Elephant",
        categories: ["Eye Creams/Serums"],
        name: "Drunk Elephant A-Shaba Eye Serum",
        href: "#",
        image: "https://cdn.beauty-bloom.net/wp-content/uploads/2025/09/850005143507_1-300x300.jpg",
        oldPrice: "260 NIS",
        oldPriceValue: 260,
        price: "220 NIS",
        priceValue: 220,
        buttonLabel: "Select Options",
    },
    {
        brand: "Dior",
        categories: ["Makeup", "Face", "Foundations/Tints"],
        name: "Dior Forever Skin Glow Foundation",
        href: "#",
        image: "https://cdn.beauty-bloom.net/wp-content/uploads/2026/01/Y0996239_C099600592_E01_ZHC-e1769086203992-300x300.webp",
        price: "245 NIS",
        priceValue: 245,
        badge: "Best Seller",
        buttonLabel: "Add to Cart",
    },
    {
        brand: "Charlotte Tilbury",
        categories: ["Makeup", "Face", "Highlighters"],
        name: "Charlotte Tilbury Hollywood Flawless Filter",
        href: "#",
        image: "https://cdn.beauty-bloom.net/wp-content/uploads/2026/01/s2486314-av-09-zoom-300x300.webp",
        price: "210 NIS",
        priceValue: 210,
        buttonLabel: "Select Options",
    },
    {
        brand: "Armani Beauty",
        categories: ["Makeup", "Face", "Foundations/Tints"],
        name: "Luminous Silk Perfect Glow Flawless Oil-Free Foundation",
        href: "#",
        image: "https://cdn.beauty-bloom.net/wp-content/uploads/2026/04/s2897056-main-zoom-300x300.webp",
        price: "310 NIS",
        priceValue: 310,
        badge: "New",
        buttonLabel: "Add to Cart",
    },
    {
        brand: "Anastasia Beverly Hills",
        categories: ["Makeup", "Eyebrow/Lashes"],
        name: "Brow Wiz Ultra-Slim Precision Brow Pencil",
        href: "#",
        image: "https://cdn.beauty-bloom.net/wp-content/uploads/2026/03/s2650984-main-zoom-300x300.webp",
        oldPrice: "135 NIS",
        oldPriceValue: 135,
        price: "115 NIS",
        priceValue: 115,
        badge: "Sale Up To 15%",
        buttonLabel: "Select Options",
    },
    {
        brand: "Dior",
        categories: ["Makeup", "Lips", "Lip Gloss"],
        name: "Dior Addict Lip Glow Oil",
        href: "#",
        image: "https://cdn.beauty-bloom.net/wp-content/uploads/2025/09/Y0996239_C099600592_E01_ZHC-e1769086203992-300x300.webp",
        price: "185 NIS",
        priceValue: 185,
        buttonLabel: "Select Options",
    },
    {
        brand: "Charlotte Tilbury",
        categories: ["Makeup", "Setting sprays/Mists"],
        name: "Airbrush Flawless Setting Spray",
        href: "#",
        image: "https://cdn.beauty-bloom.net/wp-content/uploads/2026/01/s2486314-av-09-zoom-300x300.webp",
        price: "165 NIS",
        priceValue: 165,
        buttonLabel: "Add to Cart",
    },
    {
        brand: "Chanel",
        categories: ["Makeup", "Cheeks", "Bronzers & contours"],
        name: "Les Beiges Healthy Glow Bronzing Cream",
        href: "#",
        image: "https://cdn.beauty-bloom.net/wp-content/uploads/2026/04/sublimage-le-serum-yeux-ultimate-eye-serum-regenerates-and-illuminates-0-5oz-packshot-default-147960-9555301138462-300x300.avif",
        price: "275 NIS",
        priceValue: 275,
        badge: "Best Seller",
        buttonLabel: "Select Options",
    }
];

const products: Product[] = [];
// Generate 384 products (16 base * 24) to create exactly 32 pages at 12 items/page
for (let i = 0; i < 24; i++) {
    baseProducts.forEach((p) => {
        products.push({
            ...p,
            name: i === 0 ? p.name : `${p.name} - Vol. ${i + 1}`,
        });
    });
}

function SearchIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" {...props}>
            <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="2" />
            <path d="M16 16L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
    );
}

function GridIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" {...props}>
            <rect x="3" y="3" width="4" height="4" stroke="currentColor" strokeWidth="1.8" />
            <rect x="10" y="3" width="4" height="4" stroke="currentColor" strokeWidth="1.8" />
            <rect x="17" y="3" width="4" height="4" stroke="currentColor" strokeWidth="1.8" />
            <rect x="3" y="10" width="4" height="4" stroke="currentColor" strokeWidth="1.8" />
            <rect x="10" y="10" width="4" height="4" stroke="currentColor" strokeWidth="1.8" />
            <rect x="17" y="10" width="4" height="4" stroke="currentColor" strokeWidth="1.8" />
            <rect x="3" y="17" width="4" height="4" stroke="currentColor" strokeWidth="1.8" />
            <rect x="10" y="17" width="4" height="4" stroke="currentColor" strokeWidth="1.8" />
            <rect x="17" y="17" width="4" height="4" stroke="currentColor" strokeWidth="1.8" />
        </svg>
    );
}

function ListIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" {...props}>
            <circle cx="5" cy="6" r="1.5" fill="currentColor" />
            <circle cx="5" cy="12" r="1.5" fill="currentColor" />
            <circle cx="5" cy="18" r="1.5" fill="currentColor" />
            <path d="M9 6H21" stroke="currentColor" strokeWidth="2" />
            <path d="M9 12H21" stroke="currentColor" strokeWidth="2" />
            <path d="M9 18H21" stroke="currentColor" strokeWidth="2" />
        </svg>
    );
}

function BagIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" {...props}>
            <path d="M6 8H18L17 21H7L6 8Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            <path d="M9 9V7C9 5.3 10.3 4 12 4C13.7 4 15 5.3 15 7V9" stroke="currentColor" strokeWidth="2" />
        </svg>
    );
}

function HeartIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" {...props}>
            <path
                d="M12 20.5L10.7 19.3C5.8 14.8 3 12.1 3 8.8C3 6.1 5 4 7.7 4C9.2 4 10.7 4.7 11.7 5.9C12.7 4.7 14.2 4 15.7 4C18.4 4 20.4 6.1 20.4 8.8C20.4 12.1 17.6 14.8 12.7 19.3L12 20.5Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function CompareIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" {...props}>
            <path
                d="M7 7H3V3M3 7C4.8 4.6 7.7 3 11 3C16.5 3 21 7.5 21 13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
            />
            <path
                d="M17 17H21V21M21 17C19.2 19.4 16.3 21 13 21C7.5 21 3 16.5 3 11"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
            />
        </svg>
    );
}

function EyeIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" {...props}>
            <path
                d="M2.5 12C4.7 8.5 8.1 6.5 12 6.5C15.9 6.5 19.3 8.5 21.5 12C19.3 15.5 15.9 17.5 12 17.5C8.1 17.5 4.7 15.5 2.5 12Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
            />
            <circle cx="12" cy="12" r="2.8" stroke="currentColor" strokeWidth="2" />
        </svg>
    );
}

const displayPrice = (price: string) => price.replace(/\s*NIS/g, " ₪");

export default function ShopPage() {
    const { addToCart, toggleWishlist, isInWishlist } = useCart();
    const [categoryQuery, setCategoryQuery] = useState("");
    const [brandQuery, setBrandQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedBrand, setSelectedBrand] = useState("");
    const [sortBy, setSortBy] = useState("default");
    const [viewMode, setViewMode] = useState<ViewMode>("grid");
    const [previewProduct, setPreviewProduct] = useState<QuickViewProduct | null>(null);
    const [minPrice, setMinPrice] = useState(40);
    const [maxPrice, setMaxPrice] = useState(3500);
    const [itemsPerPage, setItemsPerPage] = useState("12");
    const [currentPage, setCurrentPage] = useState(1);

    const minBase = 40;
    const maxBase = 3500;

    const filteredCategories = useMemo(() => {
        return categories.filter((category) =>
            category.label.toLowerCase().includes(categoryQuery.toLowerCase())
        );
    }, [categoryQuery]);

    const filteredBrands = useMemo(() => {
        return brands.filter((brand) =>
            brand.label.toLowerCase().includes(brandQuery.toLowerCase())
        );
    }, [brandQuery]);

    const filteredProducts = useMemo(() => {
        const result = products.filter((product) => {
            const matchCategory =
                !selectedCategory || product.categories.includes(selectedCategory);
            const matchBrand = !selectedBrand || product.brand === selectedBrand;
            const matchPrice =
                product.priceValue >= minPrice && product.priceValue <= maxPrice;

            return matchCategory && matchBrand && matchPrice;
        });

        if (sortBy === "price-low") {
            result.sort((a, b) => a.priceValue - b.priceValue);
        } else if (sortBy === "price-high") {
            result.sort((a, b) => b.priceValue - a.priceValue);
        } else if (sortBy === "name") {
            result.sort((a, b) => a.name.localeCompare(b.name));
        }

        return result;
    }, [selectedCategory, selectedBrand, minPrice, maxPrice, sortBy]);

    const pageCount = useMemo(() => {
        if (itemsPerPage === "all") return 1;
        return Math.max(1, Math.ceil(filteredProducts.length / Number(itemsPerPage)));
    }, [filteredProducts.length, itemsPerPage]);

    const visibleProducts = useMemo(() => {
        if (itemsPerPage === "all") return filteredProducts;

        const size = Number(itemsPerPage);
        const start = (currentPage - 1) * size;
        return filteredProducts.slice(start, start + size);
    }, [filteredProducts, itemsPerPage, currentPage]);

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedCategory, selectedBrand, minPrice, maxPrice, sortBy, itemsPerPage]);

    useEffect(() => {
        if (currentPage > pageCount) {
            setCurrentPage(pageCount);
        }
    }, [currentPage, pageCount]);

    const minPercent = ((minPrice - minBase) / (maxBase - minBase)) * 100;
    const maxPercent = ((maxPrice - minBase) / (maxBase - minBase)) * 100;

    return (
        <div className="page-shell">
            <section className="breadcrumb-banner">
                <div className="breadcrumb-banner__inner">
                    <a href="/">Home</a>
                    <span>&gt;</span>
                    <strong>Shop</strong>
                </div>
            </section>

            <main className="shop-layout">
                <aside className="filters-panel">
                    <div className="filters-panel__header">
                        <h2>FILTER BY CATEGORIES</h2>
                    </div>

                    <label className="category-search">
                        <input
                            type="text"
                            placeholder="Find a category"
                            value={categoryQuery}
                            onChange={(e) => setCategoryQuery(e.target.value)}
                        />
                        <span>
                            <SearchIcon />
                        </span>
                    </label>

                    <div className="category-list">
                        {filteredCategories.map((category) => (
                            <label
                                key={category.label}
                                className={
                                    selectedCategory === category.label
                                        ? "category-item active"
                                        : "category-item"
                                }
                            >
                                <input
                                    type="checkbox"
                                    checked={selectedCategory === category.label}
                                    onChange={() =>
                                        setSelectedCategory((current) =>
                                            current === category.label ? "" : category.label
                                        )
                                    }
                                />
                                <a
                                    href={category.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setSelectedCategory((current) =>
                                            current === category.label ? "" : category.label
                                        );
                                    }}
                                >
                                    {category.label}
                                </a>
                            </label>
                        ))}
                    </div>

                    <div className="filter-block">
                        <div className="filters-panel__header">
                            <h2>PRICE RANGE</h2>
                        </div>

                        <div className="price-filter">
                            <div className="price-filter__sliders">
                                <div className="price-filter__track">
                                    <span className="price-filter__track-line" />
                                    <span
                                        className="price-filter__track-active"
                                        style={{
                                            left: `${minPercent}%`,
                                            right: `${100 - maxPercent}%`,
                                        }}
                                    />
                                    <span className="price-filter__thumb" style={{ left: `${minPercent}%` }} />
                                    <span className="price-filter__thumb" style={{ left: `${maxPercent}%` }} />
                                </div>

                                <input
                                    className="price-filter__range price-filter__range--min"
                                    type="range"
                                    min={minBase}
                                    max={maxBase}
                                    value={minPrice}
                                    onChange={(e) => {
                                        const next = Number(e.target.value);
                                        setMinPrice(Math.min(next, maxPrice - 10));
                                    }}
                                />

                                <input
                                    className="price-filter__range price-filter__range--max"
                                    type="range"
                                    min={minBase}
                                    max={maxBase}
                                    value={maxPrice}
                                    onChange={(e) => {
                                        const next = Number(e.target.value);
                                        setMaxPrice(Math.max(next, minPrice + 10));
                                    }}
                                />
                            </div>

                            <div className="price-filter__summary">
                                <p className="price-filter__label">
                                    Price: {minPrice} NIS - {maxPrice} NIS
                                </p>
                                <button
                                    type="button"
                                    className="price-filter__button"
                                    onClick={() => setCurrentPage(1)}
                                >
                                    Filter
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="filter-block">
                        <div className="filters-panel__header">
                            <h2>BY BRANDS</h2>
                        </div>

                        <label className="category-search">
                            <input
                                type="text"
                                placeholder="Find a brand"
                                value={brandQuery}
                                onChange={(e) => setBrandQuery(e.target.value)}
                            />
                            <span>
                                <SearchIcon />
                            </span>
                        </label>

                        <div className="category-list">
                            {filteredBrands.map((brand) => (
                                <label
                                    key={brand.label}
                                    className={
                                        selectedBrand === brand.label
                                            ? "category-item active"
                                            : "category-item"
                                    }
                                >
                                    <input
                                        type="checkbox"
                                        checked={selectedBrand === brand.label}
                                        onChange={() =>
                                            setSelectedBrand((current) =>
                                                current === brand.label ? "" : brand.label
                                            )
                                        }
                                    />
                                    <a
                                        href={brand.href}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setSelectedBrand((current) =>
                                                current === brand.label ? "" : brand.label
                                            );
                                        }}
                                    >
                                        {brand.label}
                                    </a>
                                </label>
                            ))}
                        </div>
                    </div>
                </aside>

                <section className="products-panel">
                    <div className="products-toolbar">
                        <div className="products-toolbar__left">
                            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                                <option value="default">Default sorting</option>
                                <option value="name">Sort by name</option>
                                <option value="price-low">Sort by price: low to high</option>
                                <option value="price-high">Sort by price: high to low</option>
                            </select>

                            <div className="view-icons">
                                <button
                                    type="button"
                                    aria-label="Grid view"
                                    className={viewMode === "grid" ? "view-icons__active" : ""}
                                    onClick={() => setViewMode("grid")}
                                >
                                    <GridIcon />
                                </button>
                                <button
                                    type="button"
                                    aria-label="List view"
                                    className={viewMode === "list" ? "view-icons__active" : ""}
                                    onClick={() => setViewMode("list")}
                                >
                                    <ListIcon />
                                </button>
                            </div>
                        </div>

                        <div className="products-toolbar__right">
                            <span>Show</span>
                            <select value={itemsPerPage} onChange={(e) => setItemsPerPage(e.target.value)}>
                                <option value="12">12</option>
                                <option value="24">24</option>
                                <option value="36">36</option>
                                <option value="all">All</option>
                            </select>
                        </div>
                    </div>

                    <div
                        className={
                            viewMode === "list"
                                ? "products-grid products-grid--list"
                                : "products-grid"
                        }
                    >
                        {visibleProducts.map((product) => (
                            <article
                                key={product.name}
                                className={
                                    viewMode === "list"
                                        ? "product-card product-card--list"
                                        : "product-card"
                                }
                            >
                                <div className="product-card__image-box">
                                    {product.badge ? <span className="badge">{product.badge}</span> : null}
                                    {product.secondaryBadge ? (
                                        <span className="badge secondary">{product.secondaryBadge}</span>
                                    ) : null}

                                    <Link className="product-card__image-link" to="/product">
                                        <img src={product.image} alt={product.name} />
                                    </Link>
                                    <div className="floating-actions">
                                        <button 
                                          type="button" 
                                          aria-label={`Add ${product.name} to cart`}
                                          onClick={(e) => {
                                              e.preventDefault();
                                              addToCart({
                                                  id: product.name,
                                                  name: product.name,
                                                  price: product.price,
                                                  priceValue: product.priceValue,
                                                  image: product.image,
                                                  quantity: 1,
                                                  badge: product.badge
                                              });
                                          }}
                                        >
                                            <BagIcon />
                                        </button>
                                        <button
                                          type="button"
                                          aria-label={
                                            isInWishlist(product.name)
                                              ? `Remove ${product.name} from wishlist`
                                              : `Save ${product.name}`
                                          }
                                          onClick={() =>
                                            toggleWishlist({
                                              id: product.name,
                                              name: product.name,
                                              price: product.price,
                                              priceValue: product.priceValue,
                                              image: product.image,
                                              badge: product.badge,
                                              badges: [
                                                ...(product.badge ? [product.badge] : []),
                                                ...(product.secondaryBadge ? [product.secondaryBadge] : []),
                                              ],
                                            })
                                          }
                                          style={{ color: isInWishlist(product.name) ? "#df6197" : undefined }}
                                        >
                                            <HeartIcon />
                                        </button>
                                        <button type="button" aria-label={`Compare ${product.name}`}>
                                            <CompareIcon />
                                        </button>
                                        <button
                                            type="button"
                                            aria-label={`Preview ${product.name}`}
                                            onClick={() =>
                                              setPreviewProduct({
                                                id: product.name,
                                                name: product.name,
                                                image: product.image,
                                                price: product.price,
                                                priceValue: product.priceValue,
                                                originalPrice: product.oldPrice,
                                                badge: product.badge,
                                                badges: [
                                                  ...(product.badge ? [product.badge] : []),
                                                  ...(product.secondaryBadge ? [product.secondaryBadge] : []),
                                                ],
                                                stockText: "In stock",
                                                viewers: 23,
                                                buttonLabel: product.buttonLabel.toUpperCase(),
                                                href: product.href,
                                                description: [
                                                  `${product.brand} beauty favorite from Bloom.`,
                                                  `Categories: ${product.categories.join(", ")}.`,
                                                  "Use the quick actions to add it to cart or open the full product page.",
                                                ],
                                              })
                                            }
                                        >
                                            <EyeIcon />
                                        </button>
                                    </div>
                                </div>

                                <div className="product-card__body">
                                    <h3>
                                        <Link to="/product">{product.name}</Link>
                                    </h3>

                                    <div className="price-row">
                                        {product.oldPrice ? <del>{displayPrice(product.oldPrice)}</del> : null}
                                        <strong>{displayPrice(product.price)}</strong>
                                    </div>

                                    <button 
                                      className="product-button" 
                                      onClick={(e) => {
                                        e.preventDefault();
                                        addToCart({
                                            id: product.name,
                                            name: product.name,
                                            price: product.price,
                                            priceValue: product.priceValue,
                                            image: product.image,
                                            quantity: 1,
                                            badge: product.badge
                                        });
                                      }}
                                    >
                                        <BagIcon />
                                        <span>{product.buttonLabel.toUpperCase()}</span>
                                    </button>

                                    {viewMode === "list" && product.buttonLabel !== "Add to Cart" ? (
                                        <p className="product-card__option-note">
                                            This product has multiple variants. The options may be chosen on the product page.
                                        </p>
                                    ) : null}
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="pagination-bar" aria-label="Pagination">
                        {Array.from({ length: pageCount }).map((_, i) => {
                            const page = i + 1;
                            // Show first page, last page, and pages around current page
                            if (
                                page === 1 ||
                                page === pageCount ||
                                (page >= currentPage - 1 && page <= currentPage + 1)
                            ) {
                                return (
                                    <button
                                        key={page}
                                        type="button"
                                        className={
                                            currentPage === page
                                                ? "pagination-bar__item pagination-bar__item--active"
                                                : "pagination-bar__item"
                                        }
                                        onClick={() => setCurrentPage(page)}
                                    >
                                        {page}
                                    </button>
                                );
                            }
                            // Show ellipsis for gaps
                            if (page === currentPage - 2 || page === currentPage + 2) {
                                return <span key={page} className="pagination-bar__ellipsis">...</span>;
                            }
                            return null;
                        })}

                        <button
                            type="button"
                            className="pagination-bar__item"
                            disabled={currentPage >= pageCount || pageCount === 0}
                            onClick={() => setCurrentPage((page) => Math.min(pageCount, page + 1))}
                        >
                            &gt;
                        </button>
                    </div>
                </section>
            </main>

            <QuickViewPanel
                open={previewProduct !== null}
                product={previewProduct}
                onClose={() => setPreviewProduct(null)}
                onAddToCart={(item) =>
                    addToCart({
                        id: item.id,
                        name: item.name,
                        price: item.price,
                        priceValue: item.priceValue,
                        image: item.image,
                        badge: item.badge ?? item.badges?.[0],
                    })
                }
            />
        </div>
    );
}
