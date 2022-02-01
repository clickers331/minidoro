import { TimeContextProvider } from "./timeContext";
import ThemeContextProvider from "./themeContext";

const ContextProvider = (props) => {
  return (
    <ThemeContextProvider>
      <TimeContextProvider>{props.children}</TimeContextProvider>
    </ThemeContextProvider>
  );
};

export default ContextProvider;
