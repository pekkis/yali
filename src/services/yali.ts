import r from "./r";
import { YaliState } from "../ducks/yali";
import { ConsumableType } from "./consumables";

export const ITEM_TYPES = {
  CONSUMABLE: "consumable"
};

export const calculateMood = (yali: YaliState): void => {
  yali.fullness = Math.max(yali.fullness, 0);
  yali.hydration = Math.max(yali.hydration, 0);

  yali.mood = -100 + yali.hydration + yali.fullness;
};

export const getConsumationMessage = (consumable: ConsumableType): string => {
  const adjectives = {
    positive: [
      "maukas",
      "noheva",
      "mehevä",
      "herkullinen",
      "mahtava",
      "losokka",
      "ihana",
      "vinha",
      "lussuteltava",
      "hyvänmakuinen",
      "aromikas"
    ],
    negative: [
      "oksettava",
      "kauhea",
      "karmaiseva",
      "inha",
      "pahanmakuinen",
      "hirveä"
    ]
  };

  const list = consumable.positive ? adjectives.positive : adjectives.negative;

  return `Olipas ${r.pick(list)} ${consumable.text.toLowerCase()}!`;
};

export const getLatteus = (): string => {
  const latteus = [
    "Saisipa jotain lipaistavaa!",
    "Saisipa jotain lussutettavaa!",
    "Olisipa jotain konsumoitavaa",
    "Voi jospa olisi jotain maksimoitavaa!",
    "Herkku kyllä maistuisi!"
  ];

  return r.pick(latteus);
};
