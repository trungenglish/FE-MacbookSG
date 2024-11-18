import './index.css';
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import {Outlet, useLocation} from "react-router-dom";
import BannerSlider from "./components/Banner/Banner.jsx";
import React from "react";
import TinTuc from "./components/TinTuc/TinTuc.jsx";

function App() {
    const location = useLocation();

    const hideBannerPaths = [
        '/register',
        '/login',
        '/branch',
        '/detailProduct',
        '/deliveryPolicy',
        '/warrantyPolicy',
        '/cart',
        '/installmentPolicy',
        '/news',
        '/checkout',
        '/your-order'
    ];

    const shouldShowBanner = !hideBannerPaths.some(path => location.pathname.startsWith(path));

    return (
        <>
            <Header />
            {shouldShowBanner && <BannerSlider />}
            <Outlet />
            {!location.pathname.startsWith('/your-order') && <TinTuc/> && <Footer />}
            {/*<TinTuc/>*/}
            {/*<Footer />*/}
        </>
    )
}

export default App
