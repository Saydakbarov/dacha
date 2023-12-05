import "react-app-polyfill/stable";
import "react-app-polyfill/ie9";
import "react-app-polyfill/ie11";

import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import "react-medium-image-zoom/dist/styles.css";
// import 'react-bnb-gallery/dist/style.css';
import "react-bnb-gallery/dist/style.css";
import "leaflet/dist/leaflet.css";
import "rsuite/dist/styles/rsuite-default.min.css";
import "./index.scss";


import App from "./Components/App";
import { Provider } from "react-redux";
import { store } from "./store/store";
import "./i18next/i18next";
import reportWebVitals from "./reportWebVitals";

require("dotenv").config();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
reportWebVitals();
