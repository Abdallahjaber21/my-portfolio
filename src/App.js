import logo from "./logo.svg";
import "./css/App.css";
import Header from "./components/Header";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";

function App() {
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
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
