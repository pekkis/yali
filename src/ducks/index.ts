import { ChatState } from "./chat";
import { YaliState } from "./yali";

export type AppState = {
  yali: YaliState;
  chatState: ChatState;
};

export { default as chat } from "./chat";
export { default as yali } from "./yali";
