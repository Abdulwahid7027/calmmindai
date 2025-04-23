import React from "react";
import styles from "./styles.module.css";

const resources = [
  {
    id: 1,
    title: "Self-Help Guides",
    description:
      "Access our comprehensive library of mental health guides, including meditation techniques, stress management, and emotional wellness resources.",
    icon: "📚",
    features: [
      "Guided meditation sessions",
      "Stress relief techniques",
      "Emotional awareness exercises",
    ],
  },
  {
    id: 2,
    title: "Crisis Support",
    description:
      "24/7 emergency mental health resources with immediate access to professional support and crisis intervention strategies.",
    icon: "🤝",
    features: [
      "24/7 crisis hotline",
      "Emergency response team",
      "Immediate intervention",
    ],
  },
  {
    id: 3,
    title: "Community Forum",
    description:
      "Connect with others on similar journeys in our moderated, supportive community. Share experiences and find understanding peers.",
    icon: "👥",
    features: [
      "Peer support groups",
      "Moderated discussions",
      "Anonymous sharing",
    ],
  },
];

export const Resources = () => {
  return (
    <section id="resources" className={styles.resources}>
      <div className="container mx-auto px-4">
        <h2 className={styles.sectionTitle}>Mental Health Resources</h2>
        <div className={styles.resourcesGrid}>
          {resources.map((resource) => (
            <div key={resource.id} className={styles.resourceCard}>
              <div className={styles.resourceIcon}>{resource.icon}</div>
              <h3 className={styles.resourceTitle}>{resource.title}</h3>
              <p className={styles.resourceDescription}>
                {resource.description}
              </p>
              <ul className={styles.featureList}>
                {resource.features.map((feature, index) => (
                  <li key={index} className={styles.featureItem}>
                    <span className={styles.featureDot}>•</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={styles.resourceButton}>Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
