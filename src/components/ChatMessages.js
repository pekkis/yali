import React from "react";
import styles from "./ChatMessages.pcss";
import ChatMessage from "./ChatMessage";
import PropTypes from "prop-types";

export default function ChatMessages({ messages }) {
  return (
    <div className={styles.root}>
      {messages.map((message, i) => <ChatMessage key={i} message={message} />)}
    </div>
  );
}

ChatMessages.propTypes = {
  messages: PropTypes.object.isRequired
};
