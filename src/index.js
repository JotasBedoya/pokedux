import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import { logger } from './middlewares';
import './index.css'
import rootReducer from './reducers/rootReducer';

const root = ReactDOM.createRoot(document.getElementById('root'));

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const composedEnhacers = composeAlt(applyMiddleware(thunk, logger));


const store = createStore( rootReducer, composedEnhacers  )
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


