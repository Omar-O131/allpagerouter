import { useEffect } from 'react';
import "../styles/privacy.css";
const sections = [
  {
    title: '1. Information We Collect',
    intro: 'We may collect the following:',
    items: [
      'Personal details you provide: name, email, phone number, delivery address, payment details.',
      'Order information: purchase history, billing, and shipping data.',
      'Technical data: IP address, browser, device type, access times, and referring pages.',
      'Cookies & tracking: to improve site performance, store preferences, and provide relevant promotions.',
    ],
  },
  {
    title: '2. How We Use Your Data',
    intro: 'We use your information to:',
    items: [
      'Process and deliver your orders.',
      'Provide customer support and respond to inquiries.',
      'Improve our website performance and user experience.',
      'Send you promotional updates (only if you consent).',
      'Ensure security, detect fraud, and comply with legal obligations.',
    ],
  },
  {
    title: '3. Sharing Your Information',
    intro: 'We may share your data with:',
    items: [
      'Service providers (delivery companies, hosting providers, payment processors).',
      'Payment partners (your payment details are processed securely by third-party providers, not stored by us).',
      'Authorities, if required by law or for fraud prevention.',
    ],
    outro: 'We do not sell your personal information.',
  },
  {
    title: '4. Data Retention',
    intro: 'We retain your data only for as long as needed for:',
    items: [
      'Completing orders and providing services.',
      'Legal and tax requirements.',
      'Resolving disputes.',
    ],
    outro: 'After that, your data will be securely deleted or anonymized.',
  },
  {
    title: '5. Security',
    intro:
      'We use reasonable safeguards (encryption, restricted access) to protect your personal information. However, no method of transmission or storage is 100% secure.',
  },
  {
    title: '6. Cookies',
    intro: 'We use cookies to:',
    items: [
      'Keep you logged in and remember preferences.',
      'Analyze traffic and improve services.',
      'Show relevant promotions.',
    ],
    outro: 'You can disable cookies in your browser, but some features may not work properly.',
  },
  {
    title: '7. Your Rights',
    intro: 'As a user, you have the right to:',
    items: [
      'Access the personal data we hold about you.',
      'Request corrections to inaccurate data.',
      'Request deletion of your data (where applicable).',
      'Opt-out of promotional communications at any time.',
    ],
    outro: 'To exercise these rights, contact us at [your email here].',
  },
  {
    title: "8. Children's Privacy",
    intro:
      'Our services are not directed to children under 13. We do not knowingly collect personal data from minors.',
  },
  {
    title: '9. International Visitors',
    intro:
      'If you access our Site from outside Palestine (e.g. EU), we process your data in line with GDPR standards:',
    items: [
      'We process data based on consent, legitimate interests, or contractual necessity.',
      'You may have additional rights under GDPR (data portability, restriction of processing, right to complain to a data authority).',
    ],
  },
  {
    title: '10. Changes to This Policy',
    intro:
      'We may update this Privacy Policy from time to time. Updates will be posted on this page with a revised date.',
  },
  {
    title: '11. Contact Us',
    intro: 'If you have questions about this Privacy Policy or how we handle your data, please contact us:',
    contact: ['[Insert business email]', '[Insert business address, Palestine]'],
  },
];

function App() {
  useEffect(() => {
    const headerShell = document.querySelector('.page > .page-shell') as HTMLElement | null;

    if (!headerShell) {
      return;
    }

    const previousMinHeight = headerShell.style.minHeight;
    headerShell.style.minHeight = '0';

    return () => {
      headerShell.style.minHeight = previousMinHeight;
    };
  }, []);

  return (
    <main className="page">
 

      <section className="content-page">
        <div className="container content-inner">
          <div className="policy-content">
            <p>
              <strong>Introduction</strong>
              <br />
              Beauty Bloom, we values the privacy of our customers and website visitors. This Privacy Policy
              explains how we collect, use, and protect your personal information when you visit{' '}
              <a
                className="decorated-link"
                href="https://loving-wescoff.85-215-252-72.plesk.page"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://loving-wescoff.85-215-252-72.plesk.page
              </a>{' '}
              (the "Site") and use our related services.
            </p>

            <p>By using our Site, you agree to the practices described in this Privacy Policy.</p>

            {sections.map((section) => (
              <section key={section.title} className="policy-section">
                <hr />
                <h2>{section.title}</h2>
                {section.intro ? <p>{section.intro}</p> : null}
                {'items' in section && section.items ? (
                  <ul>
                    {section.items.map((item) => (
                      <li key={item}>
                        <p>{item}</p>
                      </li>
                    ))}
                  </ul>
                ) : null}
                {'outro' in section && section.outro ? <p>{section.outro}</p> : null}
                {'contact' in section && section.contact ? (
                  <p>
                    <strong>Email</strong>: {section.contact[0]}
                    <br />
                    <strong>Address</strong>: {section.contact[1]}
                  </p>
                ) : null}
              </section>
            ))}
          </div>
        </div>
      </section>

 
    </main>
  );
}

export default App;
