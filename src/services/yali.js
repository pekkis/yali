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
    'On vain kaksi tukkaa: sotilaan tukka ja huoran tukka.',
    'Tämä koko roskahan vuotaa kuin rakkovaivainen marsu!',
    'Mitähän Olli-Pekkakin tähän oikein sanoisi?',
    'Jos olisi Bägy arvannut millaisia kiinapelejä' +
      ' sitä tehdään vuonna 2016, niin olisi voinut vaikka pelästyä',
    'Oletko koskaan kuullut valon hitaudesta?',
    'Kuule jos tietäisit kenen mukaan sain nimen Yali niin sinua pelottaisi!',
    'Tällaista koodausta ei Kikolon kursseilla opetettukaan',
    'Jos vielä Paksun Pojan tekemät graffat tähän saisi...',
  ];

  return r.pick(latteus);
}
