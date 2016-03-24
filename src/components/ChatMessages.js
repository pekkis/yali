import React from 'react';
import styles from './ChatMessages.pcss';
import ChatMessage from './ChatMessage';

export default function ChatMessages({messages}) {

  return (
    <div className={styles.root}>

      {messages.map(message =>
        <ChatMessage message={message} />
      )}

    </div>
  );

}

ChatMessages.propTypes = {
  messages: React.PropTypes.object.isRequired,
};
