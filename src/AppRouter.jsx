import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import createFetchers from '@dr-kobros/react-broilerplate/lib/universal';
// import { receiveTodos } from './actions/todo-actions';
import App from './components/container/AppContainer';
import IndexPage from './components/container/IndexPageContainer';

export default function AppRouter({ store, history }) {


  const { prefetcher } = createFetchers(store);
  function initApp(nextState, replaceState, callback) {
    // store.dispatch(receiveTodos()).then(() => {
    callback();
    // });
  }


  /*
  function requiresLogin(nextState, replaceState) {
      const user = store.getState().user.get('user');

      if (user.anonymous) {
          replaceState(
              {
                  'next': nextState.location.pathname,
              },
              '/login'
          );
      }
  }
  */

  return (
    <Router history={history}>
      <Route path="/" component={App} onEnter={initApp}>
        <IndexRoute component={IndexPage} onEnter={prefetcher} />
      </Route>
    </Router>
  );
}

AppRouter.propTypes = {
  store: React.PropTypes.object.isRequired,
  history: React.PropTypes.object.isRequired,
};

