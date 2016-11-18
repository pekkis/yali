import { Map } from 'immutable';

const consumables = Map({
  beer: {
    src: require('images/limu.png'),
    type: 'limu',
    text: 'Limu',
    consume: yali => (
      yali
        .update('fullness', f => f + 1)
        .update('alcohol', a => a + 10)
    ),
  },
  maito: {
    src: require('images/maito.png'),
    type: 'maito',
    text: 'Maito',
    consume: yali => (
      yali
        .update('fullness', f => f + 50)
        .update('alcohol', a => a + 50)
    ),
  },
  keksi: {
    src: require('images/keksi.png'),
    type: 'keksi',
    text: 'Keksula',
    consume: yali => (
      yali
        .update('fullness', f => f - 200)
        .update('alcohol', a => a - 200)
    ),
  },
  chickenleg: {
    src: require('images/chickenleg.png'),
    type: 'chickenleg',
    text: 'Kanankoipi',
    consume: yali => (
      yali.update('fullness', f => f + 15)
    ),
  },
  magnum: {
    src: require('images/magnum.png'),
    type: 'magnum',
    text: 'Valkoinen Magnum',
    consume: yali => (
      yali.update('fullness', f => f + 33)
    ),
  },
  ohrapuuro: {
    src: require('images/ohrapuuro.png'),
    type: 'ohrapuuro',
    text: 'Ohrapuuro',
    consume: yali => (
      yali.update('fullness', f => f - 25)
    ),
  },
});

export default consumables;
