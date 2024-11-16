import ProductList from "../components/Product/ProductList.jsx";
import Filter from "../components/Product/Fiilter.jsx";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {filterIncrease, getProductByCategory} from "../service/api/productApi.js";

const Product = () => {
    const { categoryId} = useParams();
    const [products, setProducts] = useState([]);
    const [appLoading, setAppLoading] = useState(false);

    useEffect(() => {
        fetchProducts();
    }, [categoryId]);

    const fetchProducts = async () => {
        setAppLoading(true);
        const res = await getProductByCategory(categoryId);
        if (res && res.EC === 0) {
            setProducts(res.data);
        }else {
            setProducts([]);
        }
        setAppLoading(false)
    };

    const filterProductsIncrease = async() => {
        setAppLoading(true);
        const res = await filterIncrease(categoryId);
        if (res && res.EC === 0) {
            setProducts(res.data);
        }else {
            setProducts([]);
        }
        setAppLoading(false);
    }

    const filterProductsDecrease = async() => {
        setAppLoading(true);
        const res = await filterIncrease(categoryId);
        if (res && res.EC === 0) {
            setProducts(res.data);
        }else {
            setProducts([]);
        }
        setAppLoading(false);
    }

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="container mx-auto px-4 py-4">
                {/* Phần Bộ lọc và sắp xếp */}
                <Filter
                    filterProductsIncrease={filterProductsIncrease}
                    filterProductsDecrease={filterProductsDecrease}/>

                {/* Danh sách sản phẩm */}
                <ProductList
                    products={products}
                    appLoading={appLoading}/>
            </div>
        </div>
    );
}

export default Product;


