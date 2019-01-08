import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from 'src/store/rootReducer';
import { loadState, saveState } from 'src/store/local_storage';
import App from './app';

const enhancers = [];
if (__DEV__) {
  const { __REDUX_DEVTOOLS_EXTENSION__ } = window;
  if (typeof __REDUX_DEVTOOLS_EXTENSION__ === 'function') {
    enhancers.push(__REDUX_DEVTOOLS_EXTENSION__());
  }
}

const store = createStore(reducer, loadState(), ...enhancers);

store.subscribe(() => {
  saveState(store.getState());
});

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
  );
};

if (URLSearchParams) {
  render();
} else {
  import('url-search-params-polyfill').then(render);
}
