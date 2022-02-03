import MainPage from "./pages/MainPage";
import Settings from "./pages/Settings";
import Nav from "./components/Nav";
import styled from "styled-components";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </>
  );
}
export default App;
