import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import { ConfigContextProvider } from "./context/configContext";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <ConfigContextProvider>
        <App />
      </ConfigContextProvider>
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);
