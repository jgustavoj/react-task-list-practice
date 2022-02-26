//React bundle
import React from "react";
import ReactDOM from "react-dom";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.scss";

// Components
import Layout from "./js/layout.js";

// import reportWebVitals from "./reportWebVitals";

// Render React Application
ReactDOM.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
