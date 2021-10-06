import styles from "./ChatMessages.module.pcss";
import ChatMessage from "./ChatMessage";

export default function ChatMessages({ messages }) {
  return (
    <div className={styles.root}>
      {messages.map((message, i) => (
        <ChatMessage key={i} message={message} />
      ))}
    </div>
  );
}
