import type { ReactNode, MouseEvent } from "react";
import "../styles/footer.css";

type PageName =
  | "home"
  | "about-us"
  | "privacy-policy"
  | "terms-and-conditions"
  | "contact-us";

type LinkItem = {
  label: string;
  href: string;
  page?: PageName;
};

type ContactItem = {
  icon: ReactNode;
  content: ReactNode;
};

type FooterProps = {
  onNavigate?: (page: PageName) => void;
};

const infoLinks: LinkItem[] = [
  { label: "About Us", href: "#", page: "about-us" },
  { label: "Privacy Policy", href: "#", page: "privacy-policy" },
  { label: "Order History", href: "https://beauty-bloom.net/my-account/orders/" },
  { label: "Terms & Conditions", href: "#", page: "terms-and-conditions" },
  { label: "Contact Us", href: "#", page: "contact-us" },
];

const accountLinks: LinkItem[] = [
  { label: "My Account", href: "#" },
  { label: "Brand", href: "#" },
  { label: "Gift Certificates", href: "#" },
  { label: "Affiliates", href: "#" },
  { label: "My Wishlist", href: "/wishlist" },
];

const contactItems: ContactItem[] = [
  {
    icon: <PinIcon />,
    content: <>Ramallah Palestine</>,
  },
  {
    icon: <PhoneIcon />,
    content: <>WhatsApp : (+972) 59-4871814</>,
  },
  {
    icon: <MailIcon />,
    content: <>information@loving-wescoff.85-215-252-72.plesk.page</>,
  },
  {
    icon: <ClockIcon />,
    content: <>Sat-Thu 9:00pm - 5:00pm Friday: Closed</>,
  },
];

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bloom-footer">
      <div className="shipping-bar">
        <div className="shipping-item">
          <RocketIcon />
          <span>FAST DELIVERY</span>
        </div>

        <div className="shipping-item">
          <ShieldIcon />
          <span>100% AUTHENTIC PRODUCTS</span>
        </div>

        <div className="shipping-item">
          <MoneyBagIcon />
          <span>PRICES YOU CAN&apos;T RESIST</span>
        </div>

        <div className="shipping-item">
          <TruckIcon />
          <span>ALL ACROSS PALESTINE IN 2 DAYS!</span>
        </div>
      </div>

   
     
        <div className="policy-inner "   style={{ backgroundColor: "#ffc4d6" }} >
          <h2>Exchange and Return Policy</h2>
          <ul>
            <li>
              Exchanges are available within 2 days of receiving the order,
              provided the item is new, clean, and unused.
            </li>
            <li>
              If the product is found broken or damaged during delivery, we will
              replace it with a new one at no extra cost.
            </li>
            <li>
              No returns or exchanges will be accepted if the product is damaged
              due to customer misuse.
            </li>
          </ul>
        </div>
 

      <section className="footer-main">
        <div className="footer-main__inner">
          <div className="footer-column brand-column">
            <img
              className="brand-logo"
              src="/image/Logo-bloom.webp"
              alt="Bloom Beauty"
            />

            <p className="brand-copy">
              <span className="headline-highlight">
                <span className="headline-highlight__text">At Beauty Bloom</span>
                <svg
                  className="headline-highlight__stroke"
                  viewBox="0 0 500 150"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    d="M385.6 48.191C347.6 37.191 298.601 33.0304 250.929 32.1983C115.64 29.8368 5.59529 49.1857 5.13745 75.4152C4.67962 101.645 112.811 117.829 248.1 120.191C383.389 122.552 494.605 110.196 495.063 83.9669C495.063 61.691 416.806 41.878 361.1 32.1983"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <br />
              we are here to make your beauty journey simple, elegant, and trustworthy
            </p>

            <div className="social-row">
              <span>Follow Us:</span>
              <a
                href="https://www.instagram.com/Beautybloom.brands"
                target="_blank"
                rel="noreferrer"
                aria-label="Follow Bloom Beauty on Instagram"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          <FooterList
            title="Information"
            links={infoLinks}
            onNavigate={onNavigate}
          />

          <FooterList
            title="My Account"
            links={accountLinks}
            onNavigate={onNavigate}
          />

          <div className="footer-column contact-column">
            <h3>Contact Info.</h3>

            <div className="contact-list">
              {contactItems.map((item, index) => (
                <div className="contact-item" key={index}>
                  <span className="contact-icon">{item.icon}</span>
                  <p>{item.content}</p>
                </div>
              ))}
            </div>

            <img
              className="payments-image"
              src="/image/payment.webp"
              alt="Accepted payment methods"
            />
          </div>
        </div>
      </section>
    </footer>
  );
}

function FooterList({
  title,
  links,
  onNavigate,
}: {
  title: string;
  links: LinkItem[];
  onNavigate?: (page: PageName) => void;
}) {
  const handleClick = (
    event: MouseEvent<HTMLAnchorElement>,
    link: LinkItem
  ) => {
    if (link.page && onNavigate) {
      event.preventDefault();
      onNavigate(link.page);
    }
  };

  return (
    <div className="footer-column links-column">
      <h3>{title}</h3>

      <ul className="footer-links">
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href} onClick={(event) => handleClick(event, link)}>
              <span className="arrow">&gt;</span>
              <span>{link.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function IconBase({
  children,
  viewBox = "0 0 24 24",
}: {
  children: ReactNode;
  viewBox?: string;
}) {
  return (
    <svg viewBox={viewBox} aria-hidden="true" focusable="false">
      {children}
    </svg>
  );
}

function RocketIcon() {
  return (
    <IconBase>
      <path
        fill="currentColor"
        d="M14.4 2.2c3.1.5 5.3 2.8 5.8 5.8l.1.6-.5.3c-1.2.7-2.5 1.7-3.8 2.9l-1.9-1.9c1.2-1.3 2.1-2.6 2.8-3.8-.1-.7-.5-1.3-1-1.8s-1.1-.8-1.8-1c-1.2.7-2.5 1.6-3.8 2.8L8.4 4.2c1.2-1.3 2.2-2.5 2.9-3.7l.3-.5.6.2Z"
      />
      <path
        fill="currentColor"
        d="m13.7 11.7-1.4-1.4c-2.7 2.9-4.5 5.5-5.4 7.9l-.2.4 2.3 2.3.4-.2c2.4-.9 5-2.7 7.9-5.4l-1.4-1.4-2.8 2.4-2-2 2.6-2.6Z"
      />
      <path
        fill="currentColor"
        d="M5.6 14.6c-.9.2-1.7.7-2.3 1.4C2.4 17 2 18.3 2 20.4v1.6h1.6c2.1 0 3.4-.4 4.4-1.3.7-.6 1.2-1.4 1.4-2.3l-3.8-3.8Z"
      />
      <circle cx="15.8" cy="8.2" r="1.5" fill="#fff" />
    </IconBase>
  );
}

function ShieldIcon() {
  return (
    <IconBase>
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        d="M12 3.2 5.5 5.6v5.3c0 4.1 2.5 7.8 6.5 9.9 4-2.1 6.5-5.8 6.5-9.9V5.6L12 3.2Z"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m9.2 11.9 1.8 1.8 3.8-4.2"
      />
    </IconBase>
  );
}

function MoneyBagIcon() {
  return (
    <IconBase>
      <path
        fill="currentColor"
        d="M9 3h6l-1.1 2.1c-.2.3-.5.5-.9.5h-2c-.4 0-.7-.2-.9-.5L9 3Z"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        d="M12 6.4c-4.4 0-7 3.1-7 7.1 0 4.6 3.3 7.5 7 7.5s7-2.9 7-7.5c0-4-2.6-7.1-7-7.1Z"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        d="M12 10v7m2.2-5.2c0-1-1-1.8-2.2-1.8s-2.2.8-2.2 1.8 1 1.8 2.2 1.8 2.2.8 2.2 1.8-1 1.8-2.2 1.8-2.2-.8-2.2-1.8"
      />
    </IconBase>
  );
}

function TruckIcon() {
  return (
    <IconBase>
      <path
        fill="currentColor"
        d="M3 6.5h10.5V15H3V6.5Zm10.5 2.2h3.2l2.3 2.6V15h-5.5V8.7Z"
      />
      <circle
        cx="7"
        cy="17.8"
        r="1.9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle
        cx="17"
        cy="17.8"
        r="1.9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </IconBase>
  );
}

function InstagramIcon() {
  return (
    <IconBase>
      <rect
        x="4.5"
        y="4.5"
        width="15"
        height="15"
        rx="4.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle
        cx="12"
        cy="12"
        r="3.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="17" cy="7.4" r="1.1" fill="currentColor" />
    </IconBase>
  );
}

function PinIcon() {
  return (
    <IconBase>
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        d="M12 20s5.3-5.8 5.3-10A5.3 5.3 0 1 0 6.7 10c0 4.2 5.3 10 5.3 10Z"
      />
      <circle cx="12" cy="10" r="1.8" fill="currentColor" />
    </IconBase>
  );
}

function PhoneIcon() {
  return (
    <IconBase>
      <path
        fill="currentColor"
        d="M7.1 4.4c.6-.6 1.7-.6 2.3 0l1.7 1.7c.6.6.6 1.5.1 2.1l-1 1.2c1.1 2 2.7 3.6 4.7 4.7l1.2-1c.6-.5 1.5-.4 2.1.1l1.7 1.7c.6.6.6 1.7 0 2.3l-1.1 1.1c-.8.8-2 1.1-3.1.8-3-.7-5.9-2.4-8.4-4.9s-4.2-5.4-4.9-8.4c-.3-1.1 0-2.3.8-3.1l1.1-1.1Z"
      />
    </IconBase>
  );
}

function MailIcon() {
  return (
    <IconBase>
      <rect
        x="3.5"
        y="6"
        width="17"
        height="12"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m5.4 8 6.6 5.1L18.6 8"
      />
    </IconBase>
  );
}

function ClockIcon() {
  return (
    <IconBase>
      <circle
        cx="12"
        cy="12"
        r="8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        d="M12 7.8v4.6l3.1 1.7"
      />
    </IconBase>
  );
}
