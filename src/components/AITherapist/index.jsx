import React from "react";
import styles from "./styles.module.css";

const features = [
  { id: 1, text: "Available 24/7" },
  { id: 2, text: "Complete privacy & confidentiality" },
  { id: 3, text: "Evidence-based approaches" },
  { id: 4, text: "Personalized support" },
];

export const AITherapist = () => {
  return (
    <section id="ai-therapist" className={styles.aiTherapist}>
      <div className="container mx-auto px-4">
        <h2 className={styles.sectionTitle}>Meet Your AI Therapist</h2>
        <div className={styles.therapistContent}>
          <img
            alt="AI Therapist Interface"
            src="https://images.pexels.com/photos/16094042/pexels-photo-16094042.jpeg"
            className={styles.therapistImage}
          />
          <div className={styles.therapistInfo}>
            <p className={styles.therapistDescription}>
              Our AI therapist combines advanced natural language processing
              with evidence-based therapeutic approaches to provide personalized
              support for your mental health journey.
            </p>
            <ul className={styles.featureList}>
              {features.map((feature) => (
                <li key={feature.id} className={styles.featureItem}>
                  <div className={styles.checkmark}>✓</div>
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
