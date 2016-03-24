import React from 'react';
import styles from './Consumables.pcss';
import Consumable from './Consumable';
import consumables from 'services/consumables';

export default function Consumables(props) {

  const { consume } = props;

  return (
    <section className={styles.root}>

      {consumables.toList().map(consumable =>
        <Consumable consume={consume} key={consumable.type} consumable={consumable} />
      )}

    </section>
  );

}
