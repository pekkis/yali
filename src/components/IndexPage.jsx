import React from 'react';
import Yali from './Yali';
import Feedables from './Feedables';

class IndexPage extends React.Component {

  render() {

    const { yali, consume } = this.props;

    return (
      <section>

        <Feedables consume={consume} />

        <Yali yali={yali} />

        <section>
          <div>Alcohol: {yali.get('alcohol').toFixed(0)}</div>
          <div>Fullness: {yali.get('fullness').toFixed(0)}</div>
          <div>Mood: {yali.get('mood').toFixed(0)}</div>
        </section>

      </section>
      );
  }
};

/*
IndexPage.fetch = ({dispatch}) => {
    return dispatch(receiveTodos());
};
*/

export default IndexPage;
