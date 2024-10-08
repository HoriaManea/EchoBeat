import React from "react";
import PlaySong from "./pages/PlaySong/PlaySong";
import "./styles/app.scss";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="player-app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/playsong" element={<PlaySong />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
