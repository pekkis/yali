import React from 'react';
import cx from 'classnames';
import styles from './Mouth.pcss';

const moods = {
  'very-happy': require('images/yali-very-happy.png'),
  'happy': require('images/yali-happy.png'),
  'normal': require('images/yali-normal.png'),
  'sad': require('images/yali-sad.png'),
  'very-sad': require('images/yali-very-sad.png'),
};

const getMood = mood => {

  if (mood > 75) {
    return 'very-happy';
  }

  if (mood > 25) {
    return 'happy';
  }

  if (mood < -75) {
    return 'very-sad';
  }

  if (mood < -25) {
    return 'sad';
  }

  return 'normal';
};


export default function Mouth({ mood }) {

  const theMood = getMood(mood);

  return (
    <img className={styles.root} src={moods[theMood]} />
  );

}
