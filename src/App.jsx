import './index.css';
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import {Outlet} from "react-router-dom";
import BannerSlider from "./components/Banner/Banner.jsx";
import React from "react";

function App() {

  return (
    <>
        <Header />
        <BannerSlider />
        <Outlet />
        <Footer />
    </>
  )
}

export default App
