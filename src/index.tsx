import React from "react";
import ReactDOM from "react-dom";
import "./Styles/Home.css";
import reportWebVitals from "./reportWebVitals";
// Pages
import App from "./pages/Home";
import About from "./pages/About";
import Test from "./pages/Test";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <About />
    <Test />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
