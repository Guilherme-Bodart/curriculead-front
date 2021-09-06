import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { storeConfig, persistor } from "./store/storeConfig";

import "./styles/index.css";
import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeConfig}>
      <PersistGate persistor={persistor} loading={null}>
        <Router>
          <App />
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
