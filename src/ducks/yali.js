import { Map } from 'immutable';
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
  fullness: 90,
}).update(state => state.set('mood', calculateMood(state)));

export default function (state = defaultState, action) {
  switch (action.type) {
    case TICK:
      return state
        .update('fullness', f => (
          (f <= 0) ? 0 : f - 0.1
        ))
        .update('alcohol', a => (
          (a <= 0) ? 0 : a - 0.25
        ))
        .update(s => s.set('mood', calculateMood(s)));

    case CONSUME:
      return action.payload.consume(state)
        .update(s => s.set('mood', calculateMood(s)));
    default:
      return state;
  }
}
