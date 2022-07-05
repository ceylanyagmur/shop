import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { TodoLayer } from "./components/context/TodoContext";
import reducer, { initialState } from "./components/context/reducer";

ReactDOM.render(
  <React.StrictMode>
    <TodoLayer initialState={initialState} reducer={reducer}>
      <App />
    </TodoLayer>
  </React.StrictMode>,
  document.getElementById("root")
);
