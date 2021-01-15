import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "@fortawesome/fontawesome-free/css/all.css";

import logger from "./services/logService";
import RouteHighLevel from "./config/routeHighLevel";
import './i18n'

logger.init();
ReactDOM.render(

  <RouteHighLevel/>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
