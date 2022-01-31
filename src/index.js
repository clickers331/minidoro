import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import { TimeContextProvider } from "./context/timeContext";

ReactDOM.render(
  <React.StrictMode>
    <TimeContextProvider>
      <App />
    </TimeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
