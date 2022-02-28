import MainPage from "./pages/MainPage";
import Settings from "./pages/Settings";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="timer" element={<MainPage />} />
        <Route path="settings" element={<Settings />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </>
  );
}
export default App;
