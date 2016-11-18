import React from 'react';
import styles from './ChatMessage.pcss';
import { List } from 'immutable';

class ChatMessage extends React.Component {

  render() {
    const { message } = this.props;
    return (
      <div className={styles.root}>
        <strong>{message.sender}:</strong> <em>{message.message}</em>
      </div>
    );
  }

  componentDidMount() {
    const { message } = this.props;

    if (window.speechSynthesis) {
      var msg = new SpeechSynthesisUtterance(message.message);
      var voices = List(window.speechSynthesis.getVoices());
      msg.voice = voices.find(v => v.lang === 'fi-FI');
      msg.pitch = 0;
      window.speechSynthesis.speak(msg);      
    }
  }
}

ChatMessage.propTypes = {
  message: React.PropTypes.object.isRequired,
};

export default ChatMessage;
