import React, {useEffect, useState} from "react";
import ProductCard from "./ProductCard";
import {useParams} from "react-router-dom";
import {getProductByCategory} from "../../service/api/productApi.js";

const products = [
    { id: 1, name: "iPhone 15 Pro Max 256GB", condition: "NEW-100%", oldPrice: 30000000, discount: 10, image: "https://product.hstatic.net/1000063620/product/ip-15-pro-max-mhm-xanh_8dc67ad091eb477099276543f9e6fb19.jpg" },
    { id: 2, name: "iPhone 15 Pro 128GB", condition: "USED 98%", oldPrice: 28000000, discount: 15, image: "https://cdn.tgdd.vn/Products/Images/42/299033/iphone-15-pro-gold-thumbnew-600x600.jpg" },
    { id: 3, name: "iPhone 15 Plus 128GB", condition: "USED 99%", oldPrice: 23000000, discount: 8, image: "https://cdn.viettelstore.vn/Images/Product/ProductImage/1648981100.jpeg" },
    { id: 4, name: "iPhone 15 128GB", condition: "USED 97%", oldPrice: 22000000, discount: 22, image: "https://cdn.tgdd.vn/Products/Images/42/245545/iPhone-14-plus-thumb-xanh-1-600x600.jpg" },
    { id: 5, name: "iPhone 14 Pro Max 256GB", condition: "NEW-100%", oldPrice: 29000000, discount: 30, image: "https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-tim-thumb-600x600.jpg" },
    { id: 6, name: "iPhone 14 Pro 128GB", condition: "USED 98%", oldPrice: 25000000, discount: 15, image: "https://cdn.tgdd.vn/Products/Images/42/247508/iphone-14-pro-vang-thumb-600x600.jpg" },
    { id: 7, name: "iPhone 14 128GB", condition: "99%", oldPrice: 15000000, discount: 20, image: "https://cdn.viettablet.com/images/thumbnails/480/516/detailed/54/apple-iphone-14-128-256-512-gb-chinh-hang.jpg" },
    { id: 8, name: "iPhone 13 Pro Max 256GB", condition: "NEW-100%", oldPrice: 29000000, discount: 10, image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/3/_/3_51_1_2_2_1_1_2.jpg" },
    { id: 9, name: "iPhone 13 Pro 128GB", condition: "USED 98%", oldPrice: 25000000, discount: 15, image: "https://clickbuy.com.vn/uploads/pro/iphone-13-pro-128gb-cu-dep-99-khong-zin-tang-may-lg-157802.png" },
    { id: 10, name: "iPhone 13 128GB", condition: "USED 99%", oldPrice: 18000000, discount: 8, image: "https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-xanh-la-thumb-new-600x600.jpg" },
    { id: 11, name: "iPhone 12 Pro Max 256GB", condition: "USED 99%", oldPrice: 17000000, discount: 8, image: "https://cdn.xtmobile.vn/vnt_upload/product/Hinh_DT/Iphone/thumbs/(600x600)_crop_iphone-12-pro-128-gb-xtmobile.jpg" },
    { id: 12, name: "iPhone 12 Pro 128GB", condition: "USED 99%", oldPrice: 12000000, discount: 8, image: "https://product.hstatic.net/1000259254/product/iphone_12_pro_gold_f64580c3c23a40fb9ad4fe1549b61f5d_grande.jpg" },
    { id: 13, name: "iPhone 11 Pro Max 256GB", condition: "USED 99%", oldPrice: 7300000, discount: 8, image: "https://cdn.xtmobile.vn/vnt_upload/product/12_2021/thumbs/(600x600)_crop_iphone-11-pro-max-256gb-like-new.jpg" },

];

const ProductList = () => {
    const { categoryId} = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await getProductByCategory(categoryId);
            console.log("check", res);
            if (res && res.EC === 0) {
                setProducts(res.data);
            }else {
                setProducts([]);
            }
        };
        fetchProducts();
    }, []);

    console.log("products", products);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
                <ProductCard key={product._id} product={product} />
            ))}
        </div>
    );
}

export default ProductList;