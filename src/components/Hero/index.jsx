import React from "react";
import styles from "./styles.module.css";

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="container mx-auto px-4">
        <h1 className={styles.heroTitle}>Talk to an AI Therapist</h1>
        <p className={styles.heroText}>
          Get support for your mental well-being in a safe, confidential
          environment.
        </p>
        <button className={styles.primaryButton}>Get Started</button>
      </div>
    </section>
  );
};
