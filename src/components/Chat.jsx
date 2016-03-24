import React from 'react';
import styles from './Chat.pcss';
import ChatMessages from './ChatMessages';

export default function Chat({ yali, sendMessage, messages }) {
  return (
    <div className={styles.root}>
      <h2>Latteudet</h2>
      <ChatMessages messages={messages} />
    </div>
  )
}

Chat.propTypes = {
  yali: React.PropTypes.object.isRequired,
  sendMessage: React.PropTypes.func.isRequired,
  messages: React.PropTypes.object.isRequired,
};
