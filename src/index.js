import React,{Component} from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/css/reset.css";
import "./assets/js/rem";
import { HashRouter } from "react-router-dom";
Component.prototype.$img="http://localhost:3000";
ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);
