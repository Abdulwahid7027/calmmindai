import React, { useState } from "react";
import styles from "./styles.module.css";

export const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formState);
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className="container mx-auto px-4">
        <h2 className={styles.sectionTitle}>Get in Touch</h2>
        <p className={styles.contactText}>
          Have questions? We're here to support you on your journey to better
          mental health. Reach out to us anytime.
        </p>

        <div className={styles.formWrapper}>
          <div className={styles.formContent}>
            <div className={styles.contactInfo}>
              <h3 className={styles.infoTitle}>Contact Information</h3>
              <p className={styles.infoText}>
                Fill out the form and our team will get back to you within 24
                hours.
              </p>

              <div className={styles.contactDetails}>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>📧</span>
                  <span>support@aitherapist.com</span>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>📞</span>
                  <span>24/7 Support Line</span>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>🌎</span>
                  <span>Available Worldwide</span>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className={styles.contactForm}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.formLabel}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className={styles.formInput}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.formLabel}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className={styles.formInput}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.formLabel}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  rows="4"
                  className={styles.formTextarea}
                  required
                />
              </div>

              <button type="submit" className={styles.submitButton}>
                Send Message
                <span className={styles.buttonIcon}>→</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
