import { PureComponent } from "react";
import styles from "./ChatMessage.module.pcss";

class ChatMessage extends PureComponent {
  render() {
    const { message } = this.props;
    return (
      <div className={styles.root}>
        <strong>{message.sender}:</strong> <em>{message.message}</em>
      </div>
    );
  }
}

export default ChatMessage;
