import r from "../services/r";
import { TICK, CONSUME } from "./yali";
import { getConsumationMessage, getLatteus } from "../services/yali";
import parlayService from "../services/parlay";
import produce from "immer";
import { takeLast } from "ramda";

export const SEND_MESSAGE = "SEND_MESSAGE";

export function sendMessage(sender, message) {
  return {
    type: SEND_MESSAGE,
    payload: {
      sender,
      message
    }
  };
}

type MessageType = {
  sender: string;
  message: string;
};

type ChatState = {
  messages: MessageType[];
};

const defaultState = {
  messages: []
};

export default function chatReducer(state: ChatState = defaultState, action) {
  switch (action.type) {
    case SEND_MESSAGE:
      parlayService.speak(action.payload.message);

      return produce(state, (draft) => {
        draft.messages.push(action.payload);
      });

    case CONSUME: {
      const msg = {
        sender: "Yali",
        message: getConsumationMessage(action.payload)
      };
      parlayService.speak(msg.message);
      return produce(state, (draft) => {
        draft.messages.push(msg);
        draft.messages = takeLast(10, draft.messages);
      });
    }

    case TICK: {
      const rand = r.integer(0, 1000);
      if (rand > 3) {
        return state;
      }

      const msg = {
        sender: "Yali",
        message: getLatteus()
      };
      parlayService.speak(msg.message);
      return produce(state, (draft) => {
        draft.messages.push(msg);
        draft.messages = takeLast(10, draft.messages);
      });
    }
    default:
      return state;
  }
}
