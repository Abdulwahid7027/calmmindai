import React from "react";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

const InputDesign = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/chat");
  };

  const steps = [
    {
      title: "Sign Up",
      description: "Create your account in minutes",
      icon: "https://images.pexels.com/photos/6933050/pexels-photo-6933050.jpeg",
    },
    {
      title: "Choose Your Focus",
      description: "Select the areas you want to work on",
      icon: "https://images.pexels.com/photos/14237834/pexels-photo-14237834.jpeg",
    },
    {
      title: "Start Chatting",
      description: "Connect with your AI therapist anytime",
      icon: "https://images.pexels.com/photos/932577/pexels-photo-932577.jpeg",
    },
  ];

  const features = [
    "Available 24/7",
    "Complete privacy & confidentiality",
    "Evidence-based approaches",
    "Personalized support",
  ];

  const resources = [
    {
      title: "Self-Help Guides",
      description: "Access our library of mental health guides",
    },
    {
      title: "Crisis Support",
      description: "24/7 emergency mental health resources",
    },
    {
      title: "Community Forum",
      description: "Connect with others on similar journeys",
    },
  ];

  return (
    <>
      <section className="flex flex-col items-center px-4 py-20 text-center bg-white">
        <h1 className="mb-6 text-6xl font-bold leading-tight text-gray-900 max-w-[800px] max-sm:text-4xl">
          Talk to an AI Therapist
        </h1>
        <p className="mb-8 text-xl max-w-[600px] text-slate-600">
          Get support for your mental well-being in a safe, confidential
          environment.
        </p>
        <button
          onClick={handleGetStarted}
          className={`${styles.button} px-8 py-4 rounded-lg`}
        >
          Get Started
        </button>
      </section>

      <section id="how-it-works" className="px-4 py-20 bg-gray-50">
        <h2 className="mb-16 text-4xl font-semibold text-center text-gray-900">
          How It Works
        </h2>
        <div className="grid gap-8 mx-auto my-0 grid-cols-[repeat(3,1fr)] max-w-[1200px] max-sm:grid-cols-[1fr]">
          {steps.map((step, index) => (
            <div key={index} className={styles.card}>
              <img
                className="object-cover overflow-hidden mb-4 w-16 h-16 aspect-square"
                src={step.icon}
                alt={step.title}
              />
              <h3 className="mb-4 text-2xl font-semibold text-gray-900">
                {step.title}
              </h3>
              <p className="text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="ai-therapist" className="px-4 py-20 mt-2.5 bg-white">
        <h2 className="mb-16 text-4xl font-semibold text-center text-gray-900">
          Meet Your AI Therapist
        </h2>
        <div className="flex gap-16 items-center mx-auto my-0 max-w-[1000px] max-sm:flex-col">
          <img
            alt="AI Therapist Interface"
            src="https://images.pexels.com/photos/16094042/pexels-photo-16094042.jpeg"
            className="object-cover overflow-hidden rounded-2xl aspect-square h-[400px] shadow-[0_4px_6px_rgba(0,0,0,0.1)] w-[400px]"
          />
          <div>
            <p className="mb-8 text-xl leading-relaxed text-slate-600">
              Our AI therapist combines advanced natural language processing
              with evidence-based therapeutic approaches to provide personalized
              support for your mental health journey.
            </p>
            <ul className="p-0">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex gap-4 items-center mb-4 text-slate-600"
                >
                  <div className="w-6 h-6 text-sky-700 bg-blue-50 rounded-full flex items-center justify-center">
                    ✓
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="resources" className="px-4 py-20 mt-px bg-gray-50">
        <h2 className="mb-16 text-4xl font-semibold text-center text-gray-900">
          Mental Health Resources
        </h2>
        <div className="grid gap-8 mx-auto my-0 grid-cols-[repeat(3,1fr)] max-w-[1200px] max-sm:grid-cols-[1fr]">
          {resources.map((resource, index) => (
            <div key={index} className={styles.card}>
              <h3 className="mb-4 text-2xl font-semibold text-gray-900">
                {resource.title}
              </h3>
              <p className="text-slate-600">{resource.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="px-4 py-20 text-center bg-white">
        <h2 className="mb-8 text-4xl font-semibold text-gray-900">Contact</h2>
        <p className="mx-auto my-0 mb-8 text-xl max-w-[600px] text-slate-600">
          Have questions? We're here to support you on your journey.
        </p>
        <div className="p-8 mx-auto my-0 rounded-lg bg-white max-w-[500px] shadow-[0_4px_6px_rgba(0,0,0,0.05)]">
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className={styles.input}
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className={styles.input}
              required
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className={`${styles.input} resize-y`}
              required
            />
            <button
              type="submit"
              className={`${styles.button} p-3 text-base font-medium rounded`}
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default InputDesign;
