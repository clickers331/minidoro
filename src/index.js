import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import { ConfigContextProvider } from "./context/configContext";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <ConfigContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ConfigContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
