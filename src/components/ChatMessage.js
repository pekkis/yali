import React from "react";
import styles from "./ChatMessage.pcss";
import { List } from "immutable";
import PropTypes from "prop-types";

class ChatMessage extends React.PureComponent {
  render() {
    const { message } = this.props;
    return (
      <div className={styles.root}>
        <strong>{message.sender}:</strong> <em>{message.message}</em>
      </div>
    );
  }
}

ChatMessage.propTypes = {
  message: PropTypes.object.isRequired
};

export default ChatMessage;
