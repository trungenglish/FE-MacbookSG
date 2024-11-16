import React, {useEffect, useState} from "react";
import ProductCard from "./ProductCard";
import {Spin} from "antd";

const ProductList = ({products, appLoading}) => {

    return (
        <>
            {appLoading === true ?
                <div style={{
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)"
                }}>
                    <Spin/>
                </div>
                :
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {products.filter((product) => product.isActive).map((product) => (
                        <ProductCard key={product._id} product={product}/>
                    ))}
                </div>
            }
        </>
    );
}

export default ProductList;