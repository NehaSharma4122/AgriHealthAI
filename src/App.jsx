import React from "react";
import Navbar from "./components/Navbar/Navbar";
import AboutUs from "./components/AboutUs/AboutUs";
import Blog from "./pages/Blog/Blog";
import { Route, Routes } from "react-router-dom";
import Technology from "./pages/Technology/Technology";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/technology" element={<Technology/>}/>
      </Routes>
    </div>
  );
};

export default App;
