// React
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

// Node
import fs from 'fs';
import path from 'path';
import readdir from 'readdir';
import mkdirp from 'mkdirp';

// Components
import App from './app';

// Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { appReducer, appReducerDefaultState } from './redux/reducer';

const store = createStore(appReducer, appReducerDefaultState),
  bundleJs = readdir.readSync(path.join(__dirname, './../assets/'), ['bundle*.js']),
  css = readdir.readSync(path.join(__dirname, './../assets/'), ['style.css']),
  preloadedState = store.getState(),
  staticRouterContext = {},
  markup = url => ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={url} context={staticRouterContext}>
        <App />
      </StaticRouter>
    </Provider>
  ),
  renderFullPage = (renderedMarkup, preloadedReduxState) =>
    `<!doctype html>
      <html lang="de">
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta property="og:title" content="" />
        <meta property="og:type" content="website"/>
        <title></title>
        <link rel="stylesheet" href="/dist/assets/${css[0]}"/>
      </head>
      <body>
     
      <div id="app">${renderedMarkup}</div>
      
      <script>window.__PRELOADED_STATE__ = ['preloadedState']</script>
      <script async type="text/javascript" src="/dist/assets/${bundleJs[0]}" ></script>
      </body>
    </html>`;

fs.writeFile(
  `${__dirname}/../../index.html`,
  renderFullPage(markup('/'), preloadedState).replace('[\'preloadedState\']', JSON.stringify(store.getState()).replace(/</g, '\\u003c').replace(/\u2028/g, '')),
  errWriteFile => {
    if (errWriteFile) {
      return console.error(errWriteFile);
    }

    console.log('Finished writing index.html');
  });
