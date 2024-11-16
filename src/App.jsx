import './index.css';
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import {Outlet, useLocation} from "react-router-dom";
import BannerSlider from "./components/Banner/Banner.jsx";
import React from "react";
import TinTuc from "./components/TinTuc/TinTuc.jsx";

function App() {
    const location = useLocation();
    return (
        <>
            <Header />
            {!(location.pathname.startsWith('/register') ||
                    location.pathname.startsWith('/login') ||
                    location.pathname.startsWith('/branch') ||
                    location.pathname.startsWith('/detailProduct') ||
                    location.pathname.startsWith('/deliveryPolicy') ||
                    location.pathname.startsWith('/warrantyPolicy') ||
                    location.pathname.startsWith('/cart') ||
                    location.pathname.startsWith('/installmentPolicy') ||
                    location.pathname.startsWith('/news')) &&
                <BannerSlider />
            }
            <Outlet />
            <TinTuc/>
            <Footer />
        </>
    )
}

export default App
