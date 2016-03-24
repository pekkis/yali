export const SEND_MESSAGE = 'SEND_MESSAGE';

export function sendMessage(sender, message) {
  return {
    type: SEND_MESSAGE,
    payload: {
      sender,
      message,
    },
  };
}
