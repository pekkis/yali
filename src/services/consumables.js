import { Map } from 'immutable';

const consumables = Map({
  beer: {
    src: require('images/beer.png'),
    type: 'beer',
    text: 'Olut',
    consume: yali => (
      yali
        .update('fullness', f => f + 1)
        .update('alcohol', a => a + 10)
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
  quorn: {
    src: require('images/quorn.png'),
    type: 'quorn',
    text: 'Quorn',
    consume: yali => (
      yali.update('fullness', f => f - 25)
    ),
  },
});

export default consumables;
