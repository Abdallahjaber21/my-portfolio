import logo from "./logo.svg";
import "./css/App.css";
import Header from "./components/Header";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

// Pages
import Home from "./pages/Home";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    AOS.init({
      // Global settings (optional)
      offset: 100, // Offset (in pixels) from the top of the element
      duration: 1000, // Duration (in ms) for the animation to occur
      once: true
    });
  }, []); // The empty dependency array ensures this runs only once

  const navigation = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Page Two",
      path: "/pagetwo",
    },
  ];

  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
