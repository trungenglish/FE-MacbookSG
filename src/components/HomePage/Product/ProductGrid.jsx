import React, { useState } from 'react';
import cartImage from '../../../assets/giohang.jpg';

const ProductGrid = ({ products }) => {
    // Giới hạn số sản phẩm hiển thị ban đầu
    const [visibleCount, setVisibleCount] = useState(8);

    // Xử lý khi bấm vào nút "Xem Tất Cả"
    const handleShowAll = () => {
        setVisibleCount(products.length);
    };

    return (
        <div className="my-10 px-4 max-w-screen-xl mx-auto">
            {/* Tiêu đề */}
            <h2 className="text-3xl font-bold text-center mb-6">MACBOOK</h2>

            {/* Lưới sản phẩm */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {products.slice(0, visibleCount).map((product) => (
                    <div key={product.id} className="relative border border-gray-200 rounded-lg p-4 hover:shadow-lg transition duration-300 ease-in-out">
                        {/* Badge Giảm giá */}
                        <div className="absolute top-2 left-2 bg-red-600 text-white text-sm font-semibold px-2 py-1 rounded">
                            -{product.idPro.discount}%
                        </div>

                        {/* Ảnh sản phẩm */}
                        <div className="w-  full h-64 flex items-center justify-center">
                            <img
                                src={product.idPro.image}
                                alt={product.name}
                                className="w-full h-full object-contain"
                            />
                        </div>

                        {/* Tên sản phẩm */}
                        <h3 className="text-md font-semibold mt-2">{product.idPro.name}</h3>

                        {/* Giá cũ */}
                        <p className="text-sm line-through text-gray-500">₫{product.price}</p>

                        {/* Giá mới */}
                        <p className="text-xl font-bold text-red-600">₫{product.priceAfterDiscount}</p>

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

            {/* Nút Xem Tất Cả chỉ hiển thị khi chưa hiển thị hết sản phẩm */}
            {visibleCount < products.length && (
                <div className="text-center mt-8">
                    <button
                        onClick={handleShowAll}
                        className="bg-gray-200 hover:bg-gray-300 text-black font-semibold py-3 px-8 rounded-lg transition duration-300 ease-in-out"
                    >
                        XEM TẤT CẢ
                    </button>
                </div>
            )}
        </div>
    );
};

export default ProductGrid;
