import React from "react";
import styles from "./Mouth.pcss";
import PropTypes from "prop-types";

const moods = {
  "very-happy": require("../../assets/images/yali-very-happy.png"),
  happy: require("../../assets/images/yali-happy.png"),
  normal: require("../../assets/images/yali-normal.png"),
  sad: require("../../assets/images/yali-sad.png"),
  "very-sad": require("../../assets/images/yali-very-sad.png")
};

const getMood = mood => {
  if (mood > 75) {
    return "very-happy";
  }

  if (mood > 25) {
    return "happy";
  }

  if (mood < -75) {
    return "very-sad";
  }

  if (mood < -25) {
    return "sad";
  }

  return "normal";
};

export default function Mouth({ mood }) {
  const theMood = getMood(mood);
  return <img className={styles.root} src={moods[theMood]} />;
}

Mouth.propTypes = {
  mood: PropTypes.number.isRequired
};
