import React from 'react';
import DichVu from "../components/Dichvu/DichVu.jsx";
import Hotsale from "../components/Hotsale/HotSale.jsx";
import DanhMucNB from "../components/Danhmucnb/DanhMucNB.jsx";
// import Tintuc from '../Tintuc/tintuc';
// import Product from '../Product/product';

const HomePage = () => {
    return (
        <div>
            <DichVu />
            <Hotsale />
            <DanhMucNB />
            <section className="content py-10">
                <h1 className="text-center text-3xl font-bold text-blue-500">Chào mừng đến với Trang Chính</h1>
                <p className="text-center text-gray-700">Đây là một trang web đơn giản được xây dựng bằng React và Tailwind CSS.</p>
                {/*<Product/>*/}

            </section>
            {/*<Tintuc/>*/}
        </div>
    );
};

export default HomePage;
