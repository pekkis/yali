import React from "react";
import styles from "./Menu.module.pcss";
import Consumables from "./Consumables";
import PropTypes from "prop-types";

export default function Menu({ consume }) {
  return (
    <div className={styles.root}>
      <h1>
        YALI <sup>3.0</sup>
      </h1>
      <Consumables consume={consume} />
    </div>
  );
}

Menu.propTypes = {
  consume: PropTypes.func.isRequired
};
