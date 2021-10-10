import React from "react";
import App from "./components/App";
import { Provider } from "react-redux";
import { Store } from "redux";
import { FC } from "react";

type Props = {
  store: Store;
};

const Root: FC<Props> = (props) => {
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
