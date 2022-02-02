import { useState } from "react";
import { createContext } from "react/cjs/react.development";
import { ThemeProvider } from "styled-components";
import config from "../data/config.json";

const ConfigContext = createContext();

const ConfigContextProvider = (props) => {
  console.log(config);
  const [theme, setTheme] = useState(config.themes.dark);
  const [timeMode, setTimeMode] = useState(config.timeModes.pomodoro);
  return (
    <ConfigContext.Provider
      value={{
        config: config,
        states: {
          themeState: { theme: theme, setTheme: setTheme },
          timeModeState: {
            timeMode: timeMode,
            setTimeMode: setTimeMode,
          },
        },
      }}
    >
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </ConfigContext.Provider>
  );
};

export { ConfigContextProvider, ConfigContext };
