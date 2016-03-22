import React from 'react';
import { ItemTypes } from 'constants';
import { DragSource } from 'react-dnd';
import styles from './Feedable.pcss';
import cx from 'classnames';

function Feedable(props) {

  const { src, text, isDragging, connectDragSource } = props;

  console.log(isDragging, 'id');

  const classes = cx(
    styles.root,
    {
      [styles.isDragging]: isDragging
    }
  )

  return connectDragSource(
    <div className={styles.root}>
      <img src={src} /> {text}
    </div>
  );
}

export default DragSource(
  ItemTypes.CONSUMABLE,
  {
    beginDrag(props) {
      return {
        type: props.type
      };
    },
    endDrag(props) {
      props.consume(props.type);
    }
  },
  (connect, monitor) => {
    return {
      connectDragSource: connect.dragSource(),
      isDragging: monitor.isDragging()
    }
  }
)(Feedable);
