import React from "react";
import styles from "./styles.module.css";

const steps = [
  {
    id: 1,
    title: "Sign Up",
    description:
      "Create your account in minutes and start your journey to better mental health",
    icon: "https://images.pexels.com/photos/3811082/pexels-photo-3811082.jpeg",
    iconAlt: "Simple sign-up process illustration",
  },
  {
    id: 2,
    title: "Choose Your Focus",
    description:
      "Select specific areas you want to work on - anxiety, depression, stress, or personal growth",
    icon: "https://images.pexels.com/photos/3755761/pexels-photo-3755761.jpeg",
    iconAlt: "Person meditating in peaceful environment",
  },
  {
    id: 3,
    title: "Start Chatting",
    description:
      "Connect instantly with our AI therapist for personalized support and guidance",
    icon: "https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg",
    iconAlt: "Peaceful counseling session environment",
  },
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className={styles.howItWorks}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>How It Works</h2>
        <div className={styles.stepsGrid}>
          {steps.map((step) => (
            <div key={step.id} className={styles.stepCard}>
              <div className={styles.imageWrapper}>
                <img
                  src={step.icon}
                  alt={step.iconAlt}
                  className={styles.stepIcon}
                />
                <div className={styles.overlay} />
              </div>
              <div className={styles.contentWrapper}>
                <span className={styles.stepNumber}>0{step.id}</span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
