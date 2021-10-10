import produce from "immer";
import { ConsumableType } from "../services/consumables";
import { calculateMood } from "../services/yali";

export const TICK = "TICK";
export const CONSUME = "CONSUME";

export type YaliState = {
  fullness: number;
  hydration: number;
  mood: number;
};

export type TickAction = {
  type: typeof TICK;
};

export type ConsumeAction = {
  type: typeof CONSUME;
  payload: ConsumableType;
};

export const tick = (): TickAction => {
  return {
    type: TICK
  };
};

export const consume = (consumable: ConsumableType): ConsumeAction => {
  return {
    type: CONSUME,
    payload: consumable
  };
};

const defaultState: YaliState = {
  hydration: 90,
  fullness: 90,
  mood: 0
};

type Actions = ConsumeAction | TickAction;

export default function yaliReducer(
  state: YaliState = defaultState,
  action: Actions
): YaliState {
  switch (action.type) {
    case TICK:
      return produce(state, (draft) => {
        draft.fullness = Math.max(draft.fullness - 0.1, 0);
        draft.hydration = Math.max(draft.hydration - 0.25, 0);
        calculateMood(draft);
      });

    case CONSUME:
      return produce(state, (draft) => {
        action.payload.consume(draft);
        calculateMood(draft);
      });

    default:
      return produce(state, (draft) => {
        calculateMood(draft);
      });
  }
}
