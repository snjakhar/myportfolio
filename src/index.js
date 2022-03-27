import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ParticlesBg from "particles-bg";
ReactDOM.render(
  <React.StrictMode>
    <App />
    <ParticlesBg
      type="cobweb"
      color="#FF7F50"
      num={[20]}
      bg={{
        height: "100%",
        width: "100%",
        position: "fixed",
        zIndex: -1,
        num: 1,
        top: 0,
        left: 0,
        rps: 0.1,
      }}
    />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
