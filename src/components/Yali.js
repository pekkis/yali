import React from "react";
import styles from "./Yali.module.pcss";
import Mouth from "./yali/Mouth";
import yaliBg from "../assets/images/yali.png";
import { ItemTypes } from "../constants";
import { DropTarget } from "react-dnd";
import YaliSvg from "./yali/Yali";

function Yali({ yali, isOver, connectDropTarget, consumable }) {
  return connectDropTarget(
    <section className={styles.root}>
      <YaliSvg yali={yali} />
    </section>
  );
}

export default DropTarget(
  ItemTypes.CONSUMABLE,
  {
    drop(props, xuu, xoo) {
      return {
        consumed: true
      };
    }
  },
  (connect, monitor) => {
    return {
      connectDropTarget: connect.dropTarget(),
      isOver: monitor.isOver(),
      consumable: monitor.getDropResult()
    };
  }
)(Yali);
