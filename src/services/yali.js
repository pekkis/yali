import r from "./r";

export const ITEM_TYPES = {
  CONSUMABLE: "consumable"
};

export function calculateMood(yali) {
  const alcohol = yali.get("alcohol");
  const fullness = yali.get("fullness");
  return -100 + alcohol + fullness;
}

export function getConsumationMessage(consumable) {
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
}

export function getLatteus() {
  const latteus = [
    "Saisipa jotain lipaistavaa!",
    "Saisipa jotain lussutettavaa!",
    "Olisipa jotain konsumoitavaa",
    "Voi jospa olisi jotain maksimoitavaa!",
    "Herkku kyllä maistuisi!"
  ];

  return r.pick(latteus);
}
