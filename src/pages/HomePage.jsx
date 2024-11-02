import React from 'react';
import DichVu from "../components/HomePage/Dichvu/DichVu.jsx";
import Hotsale from "../components/HomePage/Hotsale/HotSale.jsx";
import DanhMucNB from "../components/HomePage/Danhmucnb/DanhMucNB.jsx";
import Product from "../components/HomePage/Product/Product.jsx";

const HomePage = () => {
    return (
        <>
            <DichVu />
            <Hotsale />
            <DanhMucNB />
            <section className="content py-10">
                <h1 className="text-center text-3xl font-bold text-blue-500">Chào mừng đến với Trang Chính</h1>
                <p className="text-center text-gray-700">Đây là một trang web đơn giản được xây dựng bằng React và Tailwind CSS.</p>
                <Product/>
            </section>
        </>
    );
};

export default HomePage;
