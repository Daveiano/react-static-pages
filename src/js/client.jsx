import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { BrowserRouter } from 'react-router-dom';

// Styling
import Style from './../scss/style.scss';

// Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { appReducer } from './redux/reducer';

const store = createStore(
  appReducer,
  window.__PRELOADED_STATE__,
);

// Allow the passed states to be garbage-collected
delete window.__PRELOADED_STATE__;

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter forceRefresh={false}>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);
