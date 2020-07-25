import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
<<<<<<< HEAD

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
=======
import { Provider } from "mobx-react";
import RootStore from "./stores/RootStore";

const root = new RootStore();

ReactDOM.render(
  <Provider {...root}>
    <App />
  </Provider>,
>>>>>>> eb863cd982023026f8707769e4c0e0d3e8752eaf
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
