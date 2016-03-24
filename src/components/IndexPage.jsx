import React from 'react';
import Consumables from './Consumables';
import Yali from './Yali';
import Menu from './Menu';
import styles from './IndexPage.pcss';
import Stats from './Stats';
import Chat from './Chat';

class IndexPage extends React.Component {

  render() {

    const { yali, consume, sendMessage, messages } = this.props;

    return (
      <div className={styles.root}>

        <div className={styles.menu}>
          <Menu yali={yali} consume={consume} />
        </div>

        <div className={styles.yali}>

          <Stats yali={yali} />

          <Yali yali={yali} />
        </div>

        <div className={styles.chat}>
          <Chat messages={messages} sendMessage={sendMessage} />
        </div>

      </div>
    );
  }
};

/*
IndexPage.fetch = ({dispatch}) => {
    return dispatch(receiveTodos());
};
*/

export default IndexPage;
