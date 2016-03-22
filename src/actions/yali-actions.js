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
