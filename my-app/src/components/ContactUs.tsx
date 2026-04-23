import { useState, type FormEvent } from "react";
import "../styles/contact.css";
import contactImage from "../contactimage/Artboard.webp";

type ContactMethod = {
  label: string;
  value: string;
  href?: string;
};

const contactMethods: ContactMethod[] = [
  {
    label: "Instagram",
    value: "Beautybloom.brands",
    href: "https://www.instagram.com/Beautybloom.brands",
  },
  {
    label: "WhatsApp",
    value: "(+972) 59-4871814",
    href: "https://wa.me/972594871814",
  },
  {
    label: "Email Address",
    value: "information@loving-wescoff.85-215-252-72.plesk.page",
    href: "mailto:information@loving-wescoff.85-215-252-72.plesk.page",
  },
];

export default function ContactUs() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = {
      name: formValues.name.trim() === "",
      email: formValues.email.trim() === "",
      message: formValues.message.trim() === "",
    };

    setErrors(nextErrors);
  };

  return (
    <main className="page">
      <section className="hero">
        <img
          className="hero-image"
          src={contactImage}
          alt="Contact Us Banner"
        />
      </section>

      <section className="page-title-section">
        <div className="page-title-wrap">
          <h1>Contact Us</h1>
        </div>
      </section>

      <section className="contact-section" id="contact-form">
        <div className="section-grid">
          <article className="form-panel">
            <h2>Leave A Message</h2>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="field-row">
                <label>
                  <span>
                    Your Name <abbr title="required">*</abbr>
                  </span>
                  <input
                    className={errors.name ? "is-invalid" : undefined}
                    type="text"
                    value={formValues.name}
                    onChange={(event) =>
                      setFormValues((current) => ({
                        ...current,
                        name: event.target.value,
                      }))
                    }
                  />
                  {errors.name ? (
                    <small className="field-error">The field is required.</small>
                  ) : null}
                </label>

                <label>
                  <span>
                    Your Email <abbr title="required">*</abbr>
                  </span>
                  <input
                    className={errors.email ? "is-invalid" : undefined}
                    type="email"
                    value={formValues.email}
                    onChange={(event) =>
                      setFormValues((current) => ({
                        ...current,
                        email: event.target.value,
                      }))
                    }
                  />
                  {errors.email ? (
                    <small className="field-error">The field is required.</small>
                  ) : null}
                </label>
              </div>

              <label>
                <span>
                  Your Message <abbr title="required">*</abbr>
                </span>
                <textarea
                  className={errors.message ? "is-invalid" : undefined}
                  rows={8}
                  value={formValues.message}
                  onChange={(event) =>
                    setFormValues((current) => ({
                      ...current,
                      message: event.target.value,
                    }))
                  }
                />
                {errors.message ? (
                  <small className="field-error">The field is required.</small>
                ) : null}
              </label>

              <button type="submit" className="skew-button">
                <span>Send a message</span>
              </button>
            </form>
          </article>

          <aside className="info-panel">
            <div className="info-group">
              <h2>Our Address</h2>
              <p>Ramallah Palestine</p>
            </div>

            <div className="info-group">
              <h2>Get In Touch</h2>
              <div className="contact-stack">
                {contactMethods.map((item) => (
                  <ContactItem key={item.label} item={item} />
                ))}
              </div>
            </div>

            <div className="inline-socials">
              <SocialPill
                href="https://www.instagram.com/Beautybloom.brands"
                label="Instagram"
                icon="instagram"
              />
              <SocialPill
                href="https://wa.me/972594871814"
                label="WhatsApp"
                icon="whatsapp"
              />
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

function ContactItem({ item }: { item: ContactMethod }) {
  const content = item.href ? (
    <a href={item.href} target="_blank" rel="noreferrer">
      {item.value}
    </a>
  ) : (
    <span>{item.value}</span>
  );

  return (
    <div className="contact-item">
      <p className="contact-label">{item.label} :</p>
      <div className="contact-value">{content}</div>
    </div>
  );
}

function SocialPill({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: "instagram" | "whatsapp";
}) {
  return (
    <a
      className="social-pill"
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      title={label}
    >
      {icon === "instagram" ? <InstagramIcon /> : <WhatsAppIcon />}
    </a>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5Zm8.95 1.35a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3ZM12 6.85A5.15 5.15 0 1 1 6.85 12 5.15 5.15 0 0 1 12 6.85Zm0 1.8A3.35 3.35 0 1 0 15.35 12 3.35 3.35 0 0 0 12 8.65Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12.02 2.1A9.84 9.84 0 0 0 3.6 17.06L2 22l5.07-1.56a9.84 9.84 0 1 0 4.95-18.34Zm0 17.83a8.06 8.06 0 0 1-4.1-1.12l-.29-.17-3 .92.98-2.92-.19-.3a8.03 8.03 0 1 1 6.6 3.59Zm4.41-6.02c-.24-.12-1.41-.7-1.63-.77-.22-.08-.38-.12-.54.12-.16.24-.62.77-.76.93-.14.16-.28.18-.52.06-.24-.12-1-.37-1.91-1.18-.7-.63-1.17-1.4-1.31-1.63-.14-.24-.01-.37.11-.49.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.79-.2-.47-.4-.4-.54-.41h-.47c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.13 3.65.58.25 1.04.4 1.4.52.59.19 1.12.16 1.54.1.47-.07 1.41-.58 1.61-1.14.2-.56.2-1.03.14-1.14-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}