import r from './r';

export const ITEM_TYPES = {
  CONSUMABLE: 'consumable',
};

export function calculateMood(yali) {
  const alcohol = yali.get('alcohol');
  const fullness = yali.get('fullness');
  return -100 + alcohol + fullness;
}

export function getConsumationMessage(consumable) {
  const adjectives = [
    'maukas',
    'noheva',
    'mehevä',
    'herkullinen',
    'mahtava',
    'losokka',
    'ihana',
    'oksettava',
    'kauhea',
    'karmaiseva',
    'inha',
    'vinha',
    'lussuteltava',
  ];

  return `Olipas ${r.pick(adjectives)} ${consumable.text.toLowerCase()}!`;
}

export function getLatteus() {
  const latteus = [
    'Saisipa jotain lipaistavaa!',
    'Saisipa jotain lussutettavaa!',
  ];

  return r.pick(latteus);
}
