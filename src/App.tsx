import "./css/App.css";
import { initFlowbite } from 'flowbite'
import { ThemeProvider } from './context/ThemeContext';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

// Pages
import Home from "./pages/Home";
import { useEffect } from "react";

function App(): React.JSX.Element {

    useEffect(() => {

        initFlowbite();

        if (window.innerWidth < 768) {
            // Mobile settings
            AOS.init({
                offset: 300,
                duration: 1500,
                once: true
            });
        } else {
            // Desktop settings
            AOS.init({
                offset: 250,
                duration: 1000,
                once: true
            });
        }
    }, []); // The empty dependency array ensures this runs only once

    return (
        <ThemeProvider>
            <BrowserRouter>
                {/* <Header /> */}
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
