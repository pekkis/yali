import React from "react";
import { ItemTypes } from "../constants";
import { DragSource } from "react-dnd";
import styles from "./Consumable.module.pcss";
import cx from "classnames";

function Consumable(props) {
  const { consumable, isDragging, connectDragSource } = props;
  const classes = cx(styles.root, {
    [styles.isDragging]: isDragging,
  });

  return connectDragSource(
    <div className={styles.root}>
      <div>
        <img src={consumable.src} />
      </div>

      <div>{consumable.text}</div>
    </div>
  );
}

export default DragSource(
  ItemTypes.CONSUMABLE,
  {
    beginDrag(props) {
      return {
        type: props.type,
      };
    },
    endDrag(props) {
      props.consume(props.consumable);
    },
  },
  (connect, monitor) => {
    return {
      connectDragSource: connect.dragSource(),
      isDragging: monitor.isDragging(),
    };
  }
)(Consumable);
