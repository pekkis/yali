import { Component } from "react";
import styles from "./App.module.pcss";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import IndexPage from "./containers/IndexPageContainer";

class App extends Component {
  render() {
    return (
      <section className={styles.root}>
        <IndexPage />
      </section>
    );
  }

  componentDidMount() {
    const { tick } = this.props;
    setInterval(tick, 100);
  }
}

export default DragDropContext(HTML5Backend)(App);
