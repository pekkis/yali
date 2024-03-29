import React from "react";
import ReactDOM from "react-dom";
import Root from "./Root";

import { createStore } from "./utils/redux";
import { getMiddlewares, getReducers, getEnhancers } from "./config/redux";
import { getInitialState } from "./config/state";
import { sendMessage } from "./ducks/chat";

const initialState = getInitialState();

const store = createStore(
  getReducers(),
  getMiddlewares(),
  getEnhancers(),
  initialState
);

store.dispatch(sendMessage("Yali", "Hei esikoulun väki, mä oon Yali!"));

function render(Component, rootElement, method = "render") {
  ReactDOM[method](<Component store={store} />, rootElement);
}

const rootElement = document.getElementById("app");
render(Root, rootElement, initialState ? "hydrate" : "render");
