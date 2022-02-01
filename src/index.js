import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import ContextProvider from "./context/mergeContext";

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
