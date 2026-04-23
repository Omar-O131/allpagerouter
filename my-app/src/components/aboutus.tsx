import { useEffect } from "react";
import "../styles/aboutus.css";
import aboutUsImage from "../aboutusimage/Image.jpg";
import bannerimage from "../aboutusimage/about-banner-scaled.webp";

type Feature = {
  title: string;
  description: string;
  iconName: "delivery" | "internet" | "checked";
};

type Brand = {
  name: string;
  href: string;
};

const features: Feature[] = [
  {
    title: "Fast Shipping",
    description: "Ship to over 200 city and village within two days.",
    iconName: "delivery",
  },
  {
    title: "24/7 Support",
    description:
      "From skincare routines to makeup tips, we're here around the clock to support your beauty journey.",
    iconName: "internet",
  },
  {
    title: "100% Authentic Products",
    description: "Only original products, exceptional quality.",
    iconName: "checked",
  },
];

const brands: Brand[] = [
  {
    name: "Acqua di Parma",
    href: "https://beauty-bloom.net/shop/brand/acqua-di-parma/",
  },
  {
    name: "Aesop",
    href: "https://beauty-bloom.net/shop/brand/aesop/",
  },
  {
    name: "Amika",
    href: "https://beauty-bloom.net/shop/brand/amika/",
  },
  {
    name: "Amouage",
    href: "https://beauty-bloom.net/shop/brand/amouage/",
  },
  {
    name: "Anastasia Beverly Hills",
    href: "https://beauty-bloom.net/shop/brand/anastasia-beverly-hills/",
  },
  {
    name: "Armani Beauty",
    href: "https://beauty-bloom.net/shop/brand/armani-beauty/",
  },
];

function FeatureIcon({ name }: { name: Feature["iconName"] }) {
  if (name === "delivery") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="feature-svg">
        <path
          d="M3 7.5h10v7H3zm10 2h3.2l2-2H21v7h-2.1a2.6 2.6 0 0 0-5.1 0H13z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="8"
          cy="17.3"
          r="1.7"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle
          cx="16.8"
          cy="17.3"
          r="1.7"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M6.2 5.1h4.2m4.1 0h3.4M16.3 3.4l1.6 1.7-1.6 1.7"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (name === "internet") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="feature-svg">
        <circle
          cx="12"
          cy="12"
          r="8.6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M3.8 12h16.4M12 3.4c2.3 2.2 3.6 5.3 3.6 8.6S14.3 18.4 12 20.6M12 3.4C9.7 5.6 8.4 8.7 8.4 12s1.3 6.4 3.6 8.6M6.3 7.4c1.5 1 3.6 1.6 5.7 1.6s4.2-.6 5.7-1.6M6.3 16.6c1.5-1 3.6-1.6 5.7-1.6s4.2.6 5.7 1.6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="feature-svg">
      <circle
        cx="12"
        cy="12"
        r="8.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M8.1 12.1l2.7 2.8 5.2-5.7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function AboutUs() {
  useEffect(() => {
    const headerShell = document.querySelector(
      ".page > .page-shell"
    ) as HTMLElement | null;

    if (!headerShell) return;

    const previousMinHeight = headerShell.style.minHeight;
    headerShell.style.minHeight = "0";

    return () => {
      headerShell.style.minHeight = previousMinHeight;
    };
  }, []);

  return (
    <main className="page">


      <section className="content-page about-page">
        <section className="page-title-band about-banner" id="about-us">

          <div className="about-banner-overlay">
            <img
              src={bannerimage}
              alt="About Us Banner"
              className="about-banner-image"
            />




          </div>
          <h1 className="about-banner-heading text-white">ABOUT US</h1>
        </section>

        <section className="features-section content-section">
          <div className="feature-grid">
            <div className="intro-copy">
              <h2>
                <strong>At Beauty Bloom,</strong> we are here to make your beauty
                journey simple, elegant, and trustworthy
              </h2>
            </div>

            {features.map((feature) => (
              <article className="feature-card" key={feature.title}>
                <div className="feature-icon" aria-hidden="true">
                  <FeatureIcon name={feature.iconName} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="story-section content-section">
          <div className="story-copy">
            <h2>About Us</h2>
            <p>
              We believe that beauty is not just about appearance, but a complete
              experience of elegance and attention to detail. Our goal is to
              provide you with the latest and finest makeup and skincare products
              from the world's most renowned brands, with guaranteed authenticity
              and a smooth, secure shopping journey.
            </p>
            <p>
              We treat our customers as part of our family, always striving to
              offer unique products, fresh ideas, and creative touches that make
              every beauty moment blossom and shine, all at the best competitive
              prices.
            </p>
          </div>

          <div className="story-media">
            <img
              src={aboutUsImage}
              alt="Beauty products arranged on a table"
            />
          </div>
        </section>

        <section className="brands-section content-section">
          <div className="brand-marquee" aria-label="Featured brands">
            <div className="brand-track">
              {brands.map((brand) => (
                <a
                  key={brand.name}
                  href={brand.href}
                  className="brand-pill"
                  target="_blank"
                  rel="noreferrer"
                >
                  {brand.name}
                </a>
              ))}
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}