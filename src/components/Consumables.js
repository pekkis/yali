import React from "react";
import styles from "./Consumables.module.pcss";
import Consumable from "./Consumable";
import consumables from "../services/consumables";

export default function Consumables(props) {
  const { consume } = props;

  return (
    <section className={styles.root}>
      {Array.from(consumables.values()).map((consumable) => (
        <Consumable
          consume={consume}
          key={consumable.type}
          consumable={consumable}
        />
      ))}
    </section>
  );
}
