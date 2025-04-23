import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import chatService, { MessageTypes } from "../../services/chat";
import LoadingSpinner from "../LoadingSpinner";
import VoiceInput from "./VoiceInput";
import styles from "./ChatInterface.module.css";

const ChatInterface = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState(null);
  const [error, setError] = useState(null);
  const messagesEndRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    initializeChat();
    return () => {
      if (sessionId) {
        chatService.endSession(sessionId).catch(console.error);
      }
    };
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const initializeChat = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const { sessionId: newSessionId } = await chatService.initializeSession();
      setSessionId(newSessionId);

      addMessage({
        type: MessageTypes.SYSTEM,
        content: "Hello! I'm your AI therapist. How are you feeling today?",
        timestamp: new Date(),
      });
    } catch (error) {
      setError("Failed to initialize chat. Please try again.");
      addMessage({
        type: MessageTypes.ERROR,
        content: "Failed to initialize chat. Please try again.",
        timestamp: new Date(),
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendMessage = async (e) => {
    e?.preventDefault();
    if (!inputMessage.trim() || isLoading) return;

    try {
      setIsLoading(true);
      setError(null);
      const userMessage = inputMessage.trim();
      setInputMessage("");

      addMessage({
        type: MessageTypes.TEXT,
        content: userMessage,
        sender: "user",
        timestamp: new Date(),
      });

      const response = await chatService.sendMessage(userMessage, sessionId);

      addMessage({
        type: MessageTypes.TEXT,
        content: response.text,
        sender: "ai",
        timestamp: new Date(),
        suggestions: response.suggestions,
      });
    } catch (error) {
      setError("Failed to send message. Please try again.");
      addMessage({
        type: MessageTypes.ERROR,
        content: "Failed to send message. Please try again.",
        timestamp: new Date(),
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleVoiceInput = (transcript) => {
    setInputMessage(transcript);
  };

  const addMessage = (message) => {
    setMessages((prev) => [...prev, { id: Date.now(), ...message }]);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className={styles.chatContainer}>
      <header className={styles.chatHeader}>
        <h2>AI Therapist Chat</h2>
        <button
          onClick={() => navigate("/")}
          className={styles.closeButton}
          aria-label="Close chat"
        >
          ×
        </button>
      </header>

      {error && (
        <div className={styles.errorBanner}>
          {error}
          <button
            onClick={() => setError(null)}
            className={styles.dismissError}
          >
            ×
          </button>
        </div>
      )}

      <div className={styles.messagesContainer}>
        {messages.map((message) => (
          <div
            key={message.id}
            className={`${styles.message} ${styles[message.type]} ${
              message.sender ? styles[message.sender] : ""
            }`}
          >
            <div className={styles.messageContent}>
              <p>{message.content}</p>
              {message.suggestions && (
                <div className={styles.suggestions}>
                  {message.suggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => setInputMessage(suggestion)}
                      className={styles.suggestionButton}
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <span className={styles.timestamp}>
              {new Date(message.timestamp).toLocaleTimeString()}
            </span>
          </div>
        ))}
        {isLoading && (
          <div className={styles.loadingIndicator}>
            <LoadingSpinner />
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className={styles.inputContainer}>
        <form onSubmit={handleSendMessage} className="w-full">
          <div className={styles.inputWrapper}>
            <textarea
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message here..."
              className={styles.inputField}
              disabled={isLoading}
              rows={1}
            />
            <div className={styles.inputActions}>
              <VoiceInput
                onTranscript={handleVoiceInput}
                disabled={isLoading}
              />
              <button
                type="submit"
                className={styles.sendButton}
                disabled={!inputMessage.trim() || isLoading}
              >
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatInterface;
