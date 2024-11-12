import React from 'react';
import DichVu from "../components/HomePage/Dichvu/DichVu.jsx";
import Hotsale from "../components/HomePage/Hotsale/HotSale.jsx";
import DanhMucNB from "../components/HomePage/Danhmucnb/DanhMucNB.jsx";
import ProductGrid from "../components/HomePage/Product/ProductGrid.jsx";

const HomePage = () => {
    return (
        <>
            <DichVu />
            <Hotsale />
            <DanhMucNB />
            <section className="content py-10">
                <ProductGrid/>
            </section>
        </>
    );
};

export default HomePage;
