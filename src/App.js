import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Handle from "./LoginComponents/Handle";
import Navbar from "./components/Navbar";
import { createContext, useState } from "react";
import Detail from "./components/Detail";
import Video from "./components/Video";
import Watchlist from "./components/Watchlist";
import Footer from "./components/Footer";
import Subscription from "./components/Subscription";
import { Search } from "@mui/icons-material";
import Register from "./LoginComponents/Register";

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
            <Route exact path="/navbar" element={<Navbar />}></Route>
            <Route exact path="/detail" element={<Detail />}></Route>
            <Route exact path="/video/:id" element={<Video />}></Route>
            <Route exact path="/watchlist" element={<Watchlist />}></Route>
            <Route exact path="/search" element={<Search />}></Route>
            <Route exact path="/footer" element={<Footer />}></Route>
            <Route exact path="/Subscription" element={<Subscription />}></Route>
            <Route exact path="/detail/:id" element={<Detail />}></Route>
          </Routes>
        </Router>
      </MyContext.Provider>
    </div>
  );
}

export default App;
