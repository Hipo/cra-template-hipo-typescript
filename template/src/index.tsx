// 3rd party CSS imports should come here
import "@hipo/react-ui-toolkit/dist/main.css";

import "./core/ui/style/override/_override.scss";
import "./core/ui/style/_align.scss";
import "./core/ui/style/_measure.scss";
import "./core/ui/style/_common.scss";
import "./core/ui/typography/_typography.scss";
import "./core/ui/style/color/_global-colors.scss";

// 3rd party CSS override imports should come here
import "./core/ui/style/override/hipo-ui-toolkit/_button.scss";

import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";

import App from "./core/app/App";
import reportWebVitals from "./core/reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
