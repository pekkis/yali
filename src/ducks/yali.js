import { List, Map } from 'immutable';
import { calculateMood } from 'services/yali';

export const TICK = 'TICK';
export const CONSUME = 'CONSUME';

export function tick() {
  return {
    type: TICK,
  };
}

export function consume(consumable) {
  return {
    type: CONSUME,
    payload: consumable,
  };
}

const defaultState = Map({
  alcohol: 90,
  fullness: 90
}).update(state => state.set('mood', calculateMood(state)));

export default function (state = defaultState, action) {
  switch (action.type) {

    case TICK:
      return state
        .update('fullness', f => {
          return (f <= 0) ? 0 : f - .1;
        })
        .update('alcohol', a => {
          return (a <= 0) ? 0 : a - .25;
        })
        .update(state => state.set('mood', calculateMood(state)));

    case CONSUME:
      return action.payload.consume(state)
        .update(state => state.set('mood', calculateMood(state)));
    default:
      return state;

  }
}
