import React from 'react';
import styles from './Menu.pcss';
import Consumables from './Consumables';

export default function Menu({ consume }) {


  return (
    <div className={styles.root}>
      <h1>YALI <sup>2.0</sup></h1>
      <Consumables consume={consume} />
    </div>
  );
}

Menu.propTypes = {
  consume: React.PropTypes.func.isRequired,
};
