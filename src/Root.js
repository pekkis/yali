import React from "react";
import App from "./components/containers/AppContainer";
import { Provider } from "react-redux";

const Root = (props) => {
  const { store } = props;
  return (
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
};

export default Root;
