import MainPage from "./pages/MainPage";
import styled from "styled-components";

const CSSVariables = styled.div`
  --clr-dark: rgb(20, 20, 20);
  --clr-accent: "255 79 0";
  --clr-light: "255,255,255";
`;

function App() {
  return (
    <CSSVariables>
      <MainPage />
    </CSSVariables>
  );
}
export default App;
