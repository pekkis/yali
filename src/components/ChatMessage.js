import React from 'react';
import styles from './ChatMessages.pcss';
import ChatMessage from './ChatMessage';

export default function ChatMessages({message}) {

  return (
    <div className={styles.root}>
      <strong>{message.sender}:</strong> <em>{message.message}</em>
    </div>
  );

}

ChatMessage.propTypes = {
  message: React.PropTypes.object.isRequired,
};
