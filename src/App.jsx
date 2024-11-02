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
            {location.pathname !== '/register' && location.pathname !== '/login'
                && location.pathname !== '/branch' && location.pathname !== '/detailProduct' && <BannerSlider />}
            <Outlet />
            <TinTuc/>
            <Footer />
        </>
    )
}

export default App
