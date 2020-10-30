import { List, Map } from "immutable";
import r from "../services/r";
import { TICK, CONSUME } from "./yali";
import { getConsumationMessage, getLatteus } from "../services/yali";
import parlayService from "../services/parlay";

export const SEND_MESSAGE = "SEND_MESSAGE";

export function sendMessage(sender, message) {
  return {
    type: SEND_MESSAGE,
    payload: {
      sender,
      message,
    },
  };
}

const defaultState = Map({
  messages: List(),
});

export default function chatReducer(state = defaultState, action) {
  switch (action.type) {
    case SEND_MESSAGE:
      parlayService.speak(action.payload.message);
      return state.update("messages", (messages) =>
        messages.concat(action.payload)
      );

    case CONSUME: {
      const msg = {
        sender: "Yali",
        message: getConsumationMessage(action.payload),
      };
      parlayService.speak(msg.message);
      return state.update("messages", (m) => m.concat(msg).takeLast(10));
    }

    case TICK: {
      const rand = r.integer(0, 1000);
      if (rand > 3) {
        return state;
      }

      const msg = {
        sender: "Yali",
        message: getLatteus(),
      };
      parlayService.speak(msg.message);
      return state.update("messages", (m) => m.concat(msg).takeLast(10));
    }
    default:
      return state;
  }
}
