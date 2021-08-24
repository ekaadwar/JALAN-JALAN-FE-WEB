import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'

import reduxConfig from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'

// import './index.css';
// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// responsive styles
import "./styles/responsive.css";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
const redux = reduxConfig()

ReactDOM.render(
  <Provider store={redux.store}>
    <PersistGate persistor={redux.persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
