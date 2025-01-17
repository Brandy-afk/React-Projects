import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import store from "./reduxstore";
import App from "./App";
import { Provider } from "react-redux";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
