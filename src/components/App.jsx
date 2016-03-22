import React from 'react';
import styles from './App.pcss';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class App extends React.Component {

  render() {

    return (
      <section className={styles.root}>
        <h1>YALI <sup>Beta</sup></h1>

        {this.props.children}

      </section>
    );
  }

  componentDidMount() {
    const { tick } = this.props;

    setInterval(tick, 100);

  }
}

export default DragDropContext(HTML5Backend)(App);
