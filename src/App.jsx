import PlaySong from "./pages/PlaySong/PlaySong";
import "./styles/global.scss";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import UploadSong from "./pages/UploadSong/UploadSong";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");

  function handleChangeTheme() {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  }

  return (
    <div className={`echo-beat ${theme}`}>
      <ThemeContext.Provider value={(theme, setTheme)}>
        <Router>
          <Navbar handleChangeTheme={handleChangeTheme} theme={theme} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/play-song" element={<PlaySong />} />
            <Route path="/upload-song" element={<UploadSong />} />
          </Routes>
        </Router>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
