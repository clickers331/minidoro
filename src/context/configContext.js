import { useState, createContext, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import defaultConfigData from "../data/config.json";

const ConfigContext = createContext();

const ConfigContextProvider = (props) => {
  let configData;
  if (localStorage.getItem("config"))
    configData = JSON.parse(localStorage.getItem("config"));
  else {
    localStorage.setItem("config", JSON.stringify(defaultConfigData));
    configData = JSON.parse(localStorage.getItem("config"));
  }

  console.log(configData);
  const [config, setConfig] = useState({
    configData: configData,
    currentTheme: configData.themes.dark,
    currentTimeMode: configData.timeModes.pomodoro,
  });

  useEffect(() => {
    localStorage.setItem("config", JSON.stringify(config.configData));
  }, [config]);
  return (
    <ConfigContext.Provider
      value={{ config: config, setConfig: setConfig }}
    >
      <ThemeProvider theme={config.currentTheme}>
        {props.children}
      </ThemeProvider>
    </ConfigContext.Provider>
  );
};

export { ConfigContextProvider, ConfigContext };
