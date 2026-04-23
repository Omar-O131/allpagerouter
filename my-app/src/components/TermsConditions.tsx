import "../styles/terms.css";

type TermSection = {
  heading: string;
  body: string[];
};

const terms: TermSection[] = [
  {
    heading: "1. Use of the Website",
    body: [
      "By using Beauty Bloom, you agree to use the website for lawful purposes only and in a manner that does not infringe upon the rights of others or restrict their use of the site.",
    ],
  },
  {
    heading: "2. Products and Prices",
    body: [
      "All our products are 100% authentic and carefully selected from leading global brands.",
      "Some details, such as colors or packaging, may differ slightly from the displayed images due to technical factors or manufacturer updates.",
      "We reserve the right to change prices or product availability at any time without prior notice.",
    ],
  },
  {
    heading: "3. Orders and Payment",
    body: [
      "Once your order is placed, you will receive a confirmation with details via email or phone.",
      "Payment must be completed through the available payment methods listed on our checkout page to confirm your order.",
      "We reserve the right to refuse or cancel any order in case of incorrect information or payment issues.",
    ],
  },
  {
    heading: "4. Delivery",
    body: [
      "We strive to deliver your orders as quickly as possible to the address provided.",
      "In case of delays due to circumstances beyond our control, customers will be notified promptly.",
    ],
  },
  {
    heading: "5. Exchange and Return Policy",
    body: [
      "Exchanges are available within 2 days of receiving the order, provided the item is new, clean, and unused.",
      "If the product is found broken or damaged during delivery, we will replace it with a new one at no extra cost.",
      "No returns or exchanges will be accepted if the product is damaged due to customer misuse.",
    ],
  },
  {
    heading: "6. Privacy",
    body: [
      "We are committed to protecting your personal data and will not share it with third parties, in accordance with our Privacy Policy.",
    ],
  },
  {
    heading: "7. Intellectual Property Rights",
    body: [
      "All content on this website (texts, images, designs, trademarks) is the exclusive property of Beauty Bloom and may not be used or copied without prior permission.",
    ],
  },
  {
    heading: "8. Governing Law",
    body: [
      "These Terms shall be governed and interpreted in accordance with the local laws of Palestine.",
    ],
  },
];

export default function TermsConditions() {
  return (
    <main className="terms-page">
      <div id="top" />

      <div className="external-header-shell"></div>

      <div className="content-wrap">
        <div className="terms-body">
          <p>Terms &amp; Conditions – Beauty Bloom</p>
          <p className="spacer">&nbsp;</p>

          <p>
            Welcome to Beauty Bloom <span className="sparkle">✨</span>
          </p>

          <p>
            Please read these Terms and Conditions carefully. By accessing our
            website or completing a purchase, you fully agree to comply with the
            following:
          </p>

          <p className="spacer">&nbsp;</p>

          {terms.map((section) => (
            <section className="term-section" key={section.heading}>
              <p>
                <strong>{section.heading}</strong>
              </p>

              {section.body.map((line) => (
                <p key={line}>
                  •{" "}
                  {section.heading === "6. Privacy" ? (
                    <>
                      We are committed to protecting your personal data and will
                      not share it with third parties, in accordance with our{" "}
                      <a
                        href="https://beauty-bloom.net/privacy-policy/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Privacy Policy
                      </a>
                      .
                    </>
                  ) : (
                    line
                  )}
                </p>
              ))}

              <p className="spacer">&nbsp;</p>
            </section>
          ))}
        </div>

        <a className="scroll-top" href="#top" aria-label="Scroll to top">
          ↑
        </a>
      </div>

      <div className="external-footer-shell"></div>
    </main>
  );
}