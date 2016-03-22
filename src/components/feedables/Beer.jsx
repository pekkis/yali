import React from 'react';
import imgSrc from 'images/beer.png';
import { ItemTypes } from 'constants';
import { DragSource } from 'react-dnd';

function Beer() {
  return (
    <div>
      <img src={imgSrc} /> Olut
    </div>
  );
}


export default DragSource(
  ItemTypes.CONSUMABLE,
  {
    beginDrag(props) {
      return {};
    }
  },
  (connect, monitor) => {
    return {
      connectDragSource: connect.dragSource(),
      isDragging: monitor.isDragging()
    }
  }
)(Beer);
