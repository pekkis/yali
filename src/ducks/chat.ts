import r from "../services/r";
import { TICK, CONSUME, TickAction, ConsumeAction } from "./yali";
import { getConsumationMessage, getLatteus } from "../services/yali";
import { speak } from "../services/parlay";
import produce from "immer";
import { takeLast } from "ramda";

export const SEND_MESSAGE = "SEND_MESSAGE";

type MessageAction = {
  type: typeof SEND_MESSAGE;
  payload: MessageType;
};

export const sendMessage = (sender: string, message: string): MessageAction => {
  return {
    type: SEND_MESSAGE,
    payload: {
      sender,
      message
    }
  };
};

type MessageType = {
  sender: string;
  message: string;
};

export type ChatState = {
  messages: MessageType[];
};

const defaultState = {
  messages: []
};

type Actions = TickAction | ConsumeAction | MessageAction;

const chatReducer = (
  state: ChatState = defaultState,
  action: Actions
): ChatState => {
  switch (action.type) {
    case SEND_MESSAGE:
      speak(action.payload.message);

      return produce(state, (draft) => {
        draft.messages.push(action.payload);
      });

    case CONSUME: {
      const msg = {
        sender: "Yali",
        message: getConsumationMessage(action.payload)
      };
      speak(msg.message);
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
      speak(msg.message);
      return produce(state, (draft) => {
        draft.messages.push(msg);
        draft.messages = takeLast(10, draft.messages);
      });
    }
    default:
      return state;
  }
};

export default chatReducer;
