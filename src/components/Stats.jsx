import React from 'react';
import styles from './Stats.pcss';

export default function Stats({ yali }) {
  return (
    <div className={styles.root}>
      <div>Alkoholi: {yali.get('alcohol').toFixed(0)}</div>
      <div>Massu: {yali.get('fullness').toFixed(0)}</div>
      <div>Mieliala: {yali.get('mood').toFixed(0)}</div>
    </div>
  );
}

Stats.propTypes = {
  yali: React.PropTypes.object.isRequired,
};
