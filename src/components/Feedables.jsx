import React from 'react';
import styles from './Feedables.pcss';
import Feedable from './Feedable';

const feedables = [
  {
    src: require('images/beer.png'),
    type: 'beer',
    text: 'Olut'
  },
  {
    src: require('images/chickenleg.png'),
    type: 'chickenleg',
    text: 'Kanankoipi'
  }
];

export default function Feedables(props) {

  const { consume } = props;

  return (
    <section className={styles.root}>

      {feedables.map((feedable, i) =>
        <Feedable consume={consume} key={feedable.type} {...feedable} />
      )}

    </section>
  );

}
