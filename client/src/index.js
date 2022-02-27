import React from "react";
import ReactDOM from "react-dom";
import axios from "axios"
import "./index.css";

import App from "./App";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import { HashRouter as Router } from "react-router-dom";
import store from "./Store/store";

import dotenv from "dotenv";
dotenv.config();

axios.defaults.baseURL = process.env.REACT_APP_BACKEND || 'http://localhost:3001/'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();