import { useState } from "react";
import { ThemeProvider } from "styled-components";
import config from "../data/config";

const ThemeContextProvider = (props) => {
  console.log(config);
  const [theme, setTheme] = useState(config.themes.dark);
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default ThemeContextProvider;
