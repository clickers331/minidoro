import { useState } from "react";
import { ThemeProvider } from "styled-components";
import themes from "../data/themes";

const ThemeContextProvider = (props) => {
  console.log(themes);
  const [theme, setTheme] = useState(themes.dark);
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default ThemeContextProvider;
