import { useState, createContext, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import defaultConfigData from "../data/defaultConfig.json";

const ConfigContext = createContext();

const ConfigContextProvider = (props) => {
  let configData;
  if (localStorage.getItem("config"))
    configData = JSON.parse(localStorage.getItem("config"));
  else {
    localStorage.setItem(
      "config",
      JSON.stringify({
        configData: defaultConfigData,
        currentTheme: defaultConfigData.themes.dark,
        currentTimeMode: defaultConfigData.timeModes.pomodoro,
      })
    );
    configData = JSON.parse(localStorage.getItem("config"));
  }
  const [config, setConfig] = useState(configData);

  useEffect(() => {
    localStorage.setItem("config", JSON.stringify(config));
  }, [config]);
  return (
    <ConfigContext.Provider
      value={{ config: config, setConfig: setConfig }}
    >
      <ThemeProvider
        theme={{
          ...config.currentTheme,
        }}
      >
        {props.children}
      </ThemeProvider>
    </ConfigContext.Provider>
  );
};

export { ConfigContextProvider, ConfigContext };
