import React from "react";
import styles from "./styles.module.css";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { title: "About Us", href: "/about" },
      { title: "Careers", href: "/careers" },
      { title: "Contact", href: "#contact" },
    ],
    legal: [
      { title: "Privacy Policy", href: "/privacy" },
      { title: "Terms of Service", href: "/terms" },
      { title: "Data Use", href: "/data-use" },
    ],
    resources: [
      { title: "Blog", href: "/blog" },
      { title: "Support", href: "/support" },
      { title: "FAQ", href: "/faq" },
    ],
  };

  const socialLinks = [
    { icon: "📱", label: "Twitter", href: "https://twitter.com" },
    { icon: "💼", label: "LinkedIn", href: "https://linkedin.com" },
    { icon: "📸", label: "Instagram", href: "https://instagram.com" },
    { icon: "📘", label: "Facebook", href: "https://facebook.com" },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.mainContent}>
          <div className={styles.brandSection}>
            <h3 className={styles.brandTitle}>AI Therapist</h3>
            <p className={styles.brandText}>
              Providing accessible mental health support through innovative AI
              technology. Available 24/7 for your emotional wellbeing.
            </p>
            <div className={styles.socialLinks}>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={styles.socialLink}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className={styles.linksGrid}>
            <div className={styles.linkSection}>
              <h4 className={styles.linkTitle}>Company</h4>
              <ul className={styles.linkList}>
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className={styles.link}>
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.linkSection}>
              <h4 className={styles.linkTitle}>Legal</h4>
              <ul className={styles.linkList}>
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className={styles.link}>
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.linkSection}>
              <h4 className={styles.linkTitle}>Resources</h4>
              <ul className={styles.linkList}>
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className={styles.link}>
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © {currentYear} AI Therapist. All rights reserved.
          </p>
          <div className={styles.bottomLinks}>
            <a href="/accessibility" className={styles.bottomLink}>
              Accessibility
            </a>
            <span className={styles.divider}>•</span>
            <a href="/sitemap" className={styles.bottomLink}>
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
