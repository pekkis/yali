import { getScripts, getStyles } from "@dr-kobros/broilerplate/lib/serverUtils";
import template from "./config/template";
import { createStore } from "./utils/redux";
import { getMiddlewares, getReducers, getEnhancers } from "./config/redux";
import { getInitialState } from "./config/state";

import ReactDOMServer from "react-dom/server";
import ServerRoot from "./ServerRoot";
import React from "react";
import { ServerStyleSheet } from "styled-components";
import transit from "transit-immutable-js";

import { getPersons } from "./ducks/person";

const respond = stats => {
  const chunks = ["meta", "vendor", "client"];
  const scripts = getScripts(stats, chunks);
  const styles = getStyles(stats, chunks);

  return async (req, res, next) => {
    const initialState = getInitialState();
    const store = createStore(
      getReducers(),
      getMiddlewares(),
      getEnhancers(),
      initialState
    );

    const context = {};

    await store.dispatch(getPersons());

    const sheet = new ServerStyleSheet();

    const html = ReactDOMServer.renderToString(
      sheet.collectStyles(
        <ServerRoot context={context} location={req.path} store={store} />
      )
    );

    const tpl = template(
      html,
      scripts,
      styles,
      sheet.getStyleTags(),
      transit.toJSON(store.getState())
    );

    // use context
    res.send(tpl);
  };
};

export default respond;
