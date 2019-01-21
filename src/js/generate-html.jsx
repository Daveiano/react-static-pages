// React
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

// Node
import fs from 'fs';
import path from 'path';
import readdir from 'readdir';
import mkdirp from 'mkdirp';
import ejs from 'ejs';

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
  );

ejs.renderFile(`${__dirname}/ejs/index.ejs`, {
  content: markup('/'),
  css: css[0],
  preloadedState: JSON.stringify(store.getState()).replace(/</g, '\\u003c').replace(/\u2028/g, ''),
  bundleJs: bundleJs[0]
}, (err, str) => {
  fs.writeFile(
    `${__dirname}/../../index.html`,
    str,
    errWriteFile => {
      if (errWriteFile) {
        return console.error(errWriteFile);
      }

      console.log('Finished writing index.html');
    });
});
