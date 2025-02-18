import React, {useEffect, useState} from 'react';
import DichVu from "../components/HomePage/Dichvu/DichVu.jsx";
import Hotsale from "../components/HomePage/Hotsale/HotSale.jsx";
import DanhMucNB from "../components/HomePage/Danhmucnb/DanhMucNB.jsx";
import ProductGrid from "../components/HomePage/Product/ProductGrid.jsx";
import {getProductByCategory} from "../service/api/productApi.js";

const HomePage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProductsByCate = async () => {
            const res = await getProductByCategory("670ff2c12938a36073a9d9c3");
            if (res && res.EC === 0) {
                setProducts(res.data);
            }
        }
        fetchProductsByCate()
    }, []);

    return (
        <>
            <DichVu />
            <Hotsale products={products}/>
            <DanhMucNB />
            <section className="content py-10">
                <ProductGrid products={products}/>
            </section>
        </>
    );
};

export default HomePage;
