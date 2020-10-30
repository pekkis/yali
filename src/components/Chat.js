import React from "react";
import styles from "./Chat.module.pcss";
import ChatMessages from "./ChatMessages";
import PropTypes from "prop-types";

export default function Chat({ yali, sendMessage, messages }) {
  return (
    <div className={styles.root}>
      <h2>Tsätti</h2>
      <ChatMessages messages={messages} />
    </div>
  );
}

Chat.propTypes = {
  yali: PropTypes.object.isRequired,
  sendMessage: PropTypes.func.isRequired,
  messages: PropTypes.object.isRequired,
};
