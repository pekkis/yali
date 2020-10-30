import React from "react";
import styles from "./Stats.module.pcss";
import PropTypes from "prop-types";

export default function Stats({ yali }) {
  return (
    <div className={styles.root}>
      <div>Jano: {yali.get("alcohol").toFixed(0)}</div>
      <div>Nälkä: {yali.get("fullness").toFixed(0)}</div>
      <div>Onni: {yali.get("mood").toFixed(0)}</div>
    </div>
  );
}

Stats.propTypes = {
  yali: PropTypes.object.isRequired,
};
