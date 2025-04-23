import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./styles.module.css";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (path) => {
    setIsMenuOpen(false);
    if (path.startsWith("#") && location.pathname === "/") {
      document.querySelector(path)?.scrollIntoView({ behavior: "smooth" });
    } else if (path.startsWith("#")) {
      navigate("/" + path);
    } else {
      navigate(path);
    }
  };

  return (
    <header className={`${styles.header} sticky top-0 z-50`}>
      <div
        className={styles.logoWrapper}
        onClick={() => handleNavigation("/")}
        role="button"
        tabIndex={0}
        onKeyPress={(e) => e.key === "Enter" && handleNavigation("/")}
      >
        CalmMind AI
      </div>

      <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}>
        <div className={styles.navLinks}>
          <button
            onClick={() => handleNavigation("#how-it-works")}
            className={styles.navLink}
          >
            How It Works
          </button>
          <button
            onClick={() => handleNavigation("#ai-therapist")}
            className={styles.navLink}
          >
            AI Therapist
          </button>
          <button
            onClick={() => handleNavigation("#resources")}
            className={styles.navLink}
          >
            Resources
          </button>
          <button
            onClick={() => handleNavigation("#contact")}
            className={styles.navLink}
          >
            Contact
          </button>
        </div>

        <button
          onClick={() => handleNavigation("/chat")}
          className={styles.chatButton}
        >
          Start Chat
        </button>
      </nav>

      <button
        onClick={toggleMenu}
        className={styles.menuButton}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
      >
        <div className={styles.menuBar} />
        <div className={styles.menuBar} />
        <div className={styles.menuBar} />
      </button>
    </header>
  );
};
