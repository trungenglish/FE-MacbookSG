import React from 'react';
import cartImage from '../../../assets/giohang.jpg';
import mb from '../../../assets/mb.jpg';

// Dữ liệu sản phẩm (ví dụ)
const products = [
    {
        id: 1,
        name: "Macbook Pro M1 - 99%",
        oldPrice: "16.800.000",
        newPrice: "15.000.000",
        discount: "Giảm 13%",
        image: mb,
    },
    {
        id: 1,
        name: "Macbook Pro M1 - 99%",
        oldPrice: "16.800.000",
        newPrice: "15.000.000",
        discount: "Giảm 13%",
        image: mb,
    },
    {
        id: 1,
        name: "Macbook Pro M1 - 99%",
        oldPrice: "16.800.000",
        newPrice: "15.000.000",
        discount: "Giảm 13%",
        image: mb,
    },
    {
        id: 1,
        name: "Macbook Pro M1 - 99%",
        oldPrice: "16.800.000",
        newPrice: "15.000.000",
        discount: "Giảm 13%",
        image: mb,
    },
    {
        id: 1,
        name: "Macbook Pro M1 - 99%",
        oldPrice: "16.800.000",
        newPrice: "15.000.000",
        discount: "Giảm 13%",
        image: mb,
    },
    {
        id: 1,
        name: "Macbook Pro M1 - 99%",
        oldPrice: "16.800.000",
        newPrice: "15.000.000",
        discount: "Giảm 13%",
        image: mb,
    },
    {
        id: 1,
        name: "Macbook Pro M1 - 99%",
        oldPrice: "16.800.000",
        newPrice: "15.000.000",
        discount: "Giảm 13%",
        image: mb,
    },
    {
        id: 1,
        name: "Macbook Pro M1 - 99%",
        oldPrice: "16.800.000",
        newPrice: "15.000.000",
        discount: "Giảm 13%",
        image: mb,
    },

    // Các sản phẩm khác...
];

const ProductGrid = () => {
    return (
        <div className="my-10 px-4 max-w-screen-xl mx-auto">
            {/* Tiêu đề */}
            <h2 className="text-3xl font-bold text-center mb-6">IPHONE</h2>

            {/* Lưới sản phẩm */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {products.map((product) => (
                    <div key={product.id} className="relative border border-gray-200 rounded-lg p-4 hover:shadow-lg transition duration-300 ease-in-out">

                        {/* Badge Giảm giá */}
                        <div className="absolute top-2 left-2 bg-red-600 text-white text-sm font-semibold px-2 py-1 rounded">
                            {product.discount}
                        </div>

                        {/* Ảnh sản phẩm */}
                        <div className="w-full h-64 flex items-center justify-center">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-contain"
                            />
                        </div>

                        {/* Tên sản phẩm */}
                        <h3 className="text-md font-semibold mt-2">{product.name}</h3>

                        {/* Giá cũ */}
                        <p className="text-sm line-through text-gray-500">₫{product.oldPrice}</p>

                        {/* Giá mới */}
                        <p className="text-xl font-bold text-red-600">₫{product.newPrice}</p>

                        {/* Ảnh giỏ hàng */}
                        <div className="flex justify-end mt-3">
                            <img
                                src={cartImage}
                                alt="Cart"
                                className="w-8 h-8 cursor-pointer hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Nút Xem Tất Cả */}
            <div className="text-center mt-8">
                <button className="bg-gray-200 hover:bg-gray-300 text-black font-semibold py-3 px-8 rounded-lg transition duration-300 ease-in-out">
                    XEM TẤT CẢ
                </button>
            </div>
        </div>
    );
};

export default ProductGrid;
