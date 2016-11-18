import { List, Map } from 'immutable';
import r from 'services/r';
import {
  TICK,
  CONSUME,
} from './yali';
import { getConsumationMessage, getLatteus } from 'services/yali';

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

const defaultState = Map({
  messages: List.of({
    sender: 'Yali',
    message: 'Moi mä oon Jali!',
  }),
});

export default function (state = defaultState, action) {
  switch (action.type) {
    case SEND_MESSAGE:
      return state.update('messages', messages => messages.concat(action.payload));

    case CONSUME: {
      const msg = {
        sender: 'Yali',
        message: getConsumationMessage(action.payload),
      };
      return state.update('messages', m => m.concat(msg).takeLast(10));
    }

    case TICK: {
      const rand = r.integer(0, 1000);
      if (rand > 3) {
        return state;
      }


      const msg = {
        sender: 'Yali',
        message: getLatteus(),
      };
      return state.update('messages', m => m.concat(msg).takeLast(10));
    }
    default:
      return state;
  }
}
