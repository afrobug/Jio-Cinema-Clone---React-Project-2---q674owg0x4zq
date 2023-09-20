import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Handle from "./LoginComponents/Handle";
import Navbar from "./components/Navbar";
import { createContext, useState } from "react";

export const MyContext = createContext("");



function App() {
  const [videoUrl, setVideoUrl] = useState("");
  const [slider, setSlider] = useState(false);
  const [newFile, setNewFile] = useState("");
  const [activeLink, setActiveLink] = useState("Home");

  const contextValue = {
    videoUrl: videoUrl,
    setVideoUrl: setVideoUrl,
    slider,
    setSlider,
    setNewFile,
    newFile,
    activeLink,
    setActiveLink,
  };
  return (
    <div className="">
      <MyContext.Provider value={contextValue}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Handle />}></Route>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/navbar" element={<Navbar/>}></Route>
        </Routes>
      </Router>
      </MyContext.Provider>
    </div>
  );
}

export default App;
