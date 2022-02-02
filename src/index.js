import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import { ConfigContextProvider } from "./context/configContext";

ReactDOM.render(
  <React.StrictMode>
    <ConfigContextProvider>
      <App />
    </ConfigContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
