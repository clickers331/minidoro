import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import { ConfigContextProvider } from "./context/configContext";
import { HashRouter, BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <ConfigContextProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </ConfigContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
