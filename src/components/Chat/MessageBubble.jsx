import React from "react";
import styles from "./ChatInterface.module.css";

const MessageBubble = ({ message }) => {
  const { type, content, sender, timestamp, suggestions } = message;

  return (
    <div
      className={`${styles.message} ${styles[type]} ${
        sender ? styles[sender] : ""
      }`}
    >
      <div className={styles.messageContent}>
        <p className={styles.messageText}>{content}</p>
        {suggestions && (
          <div className={styles.suggestions}>
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => onSuggestionClick(suggestion)}
                className={styles.suggestionButton}
              >
                {suggestion}
              </button>
            ))}
          </div>
        )}
      </div>
      <span className={styles.timestamp}>
        {new Date(timestamp).toLocaleTimeString()}
      </span>
    </div>
  );
};

export default MessageBubble;
