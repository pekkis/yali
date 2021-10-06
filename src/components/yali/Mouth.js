import React from "react";
import styles from "./Mouth.module.pcss";
import PropTypes from "prop-types";

const Mouths = () => {
  return <></>;
};

const moods = {
  "very-happy": () => (
    <path
      d="M190.84,227.83c3.53,3.61,21.6,55,68.84,55.84,47.66.86,62.73-49.28,68.83-55.84"
      transform="translate(-126.51 -15.03)"
      fill="none"
      stroke="#231f20"
      strokeMiterlimit="10"
      strokeWidth="10"
    />
  ),
  "very-sad": () => (
    <path
      d="M190.84,227.83c3.53,3.61,21.66-64.35,68.84-63.5,47.66.87,62.73,70.06,68.83,63.5"
      transform="translate(-126.51 -15.03)"
      fill="none"
      stroke="#231f20"
      strokeMiterlimit="10"
      strokeWidth="10"
    />
  ),
  sad: () => (
    <path
      d="M190.84,227.83c3.53,3.61,25-21,72.16-20.16,47.67.86,59.41,26.72,65.51,20.16"
      transform="translate(-126.51 -15.03)"
      fill="none"
      stroke="#231f20"
      strokeMiterlimit="10"
      strokeWidth="10"
    />
  ),
  happy: () => (
    <path
      d="M190.84,227.83c3.53,3.61,21.66,28,68.84,28.84,47.66.86,62.73-22.28,68.83-28.84"
      transform="translate(-126.51 -15.03)"
      fill="none"
      stroke="#231f20"
      strokeMiterlimit="10"
      strokeWidth="8"
    />
  ),
  normal: () => (
    <path
      d="M190.84,227.83c3.53,3.61,27.65-.42,74.83.44,47.66.86,56.74,6.12,62.84-.44"
      transform="translate(-126.51 -15.03)"
      fill="none"
      stroke="#231f20"
      strokeMiterlimit="10"
      strokeWidth="8"
    />
  )
};

console.log(moods, "moods");

const getMood = (mood) => {
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

  const Component = moods[theMood];

  return <Component />;
}

Mouth.propTypes = {
  mood: PropTypes.number.isRequired
};
