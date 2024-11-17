import React, {useContext} from "react";
import {CartContext} from "../context/CartContext.jsx";
import {notification} from "antd";
import {useNavigate} from "react-router-dom";

const ProductCard = ({ product }) => {
    const navigate = useNavigate();
    const {dispatch} = useContext(CartContext);

    const handleAddToCart = () => {
        notification.success({
            message: "Thêm vào giỏ hàng thành công",
            description: `${product.idPro.name} đã được thêm vào giỏ hàng`,
            placement: "topRight",
            duration: 2,
        });
        dispatch({
            type: "ADD_TO_CART",
            payload: product,
        });
    };

    return (
        <div
            onClick={() => navigate(`/detailProduct/${product.idPro._id}`)}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 relative">

            {/* Khung tròn màu đỏ chứa nội dung "Trả góp 0%" */}
            <div className="absolute top-2 left-2 bg-red-500 text-white font-bold text-xs py-1 px-2 rounded">
                Trả góp 0%
            </div>

            {/* Hình ảnh sản phẩm */}
            <img
                src={product.idPro.images[0]}
                alt={product.name}
                className="w-full h-48 object-contain mt-8"  // Khoảng cách giữa hình ảnh và phần trên
            />

            {/* Thông tin sản phẩm dịch xuống phía dưới */}
            <div className="p-4 mt-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.idPro.name}</h3>
                {/*<p className="text-gray-600 mb-2">{product.condition}</p>*/}

                {/* Giá cũ, giá mới và khung giảm giá */}
                <div>
                    <div className="flex items-center space-x-2">
                        <p className="text-sm text-gray-500 line-through">{product.price.toLocaleString('vi-VN')}₫</p>  {/* Giá cũ */}
                        <div className="bg-yellow-400 text-black text-xs font-bold py-1 px-2 rounded">
                            -{product.discount}%
                        </div>
                    </div>
                    <p className="text-red-500 font-bold text-lg mt-1">{product.priceAfterDiscount.toLocaleString('vi-VN')}₫</p>  {/* Giá hiện tại */}

                    {/* Đánh giá 5 ngôi sao vàng đẹp hơn */}
                    <div className="flex items-center mt-2">
                        {[...Array(5)].map((_, index) => (
                            <svg
                                key={index}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="gold"
                                className="w-4 h-4"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.332 4.1a1 1 0 00.95.69h4.317c.97 0 1.371 1.24.588 1.81l-3.49 2.54a1 1 0 00-.364 1.118l1.332 4.1c.3.921-.755 1.688-1.54 1.118l-3.49-2.54a1 1 0 00-1.176 0l-3.49 2.54c-.784.57-1.838-.197-1.539-1.118l1.332-4.1a1 1 0 00-.364-1.118l-3.49-2.54c-.784-.57-.383-1.81.588-1.81h4.317a1 1 0 00.95-.69l1.332-4.1z" />
                            </svg>
                        ))}
                    </div>
                </div>
            </div>

            {/* Nút giỏ hàng và "Thu cũ đổi mới" */}
            <div className="p-4 flex justify-between items-center">
                <div className="text-gray-500 text-sm">
                    Thu cũ đổi mới trợ giá lên đến{" "}
                    <span className="text-blue-500">1,000,000VND</span>
                </div>
                {/* Nút giỏ hàng */}
                <button
                    onClick={handleAddToCart}
                    className="bg-gray-100 hover:bg-gray-300 text-gray-700 font-semibold p-4 rounded-full
                        transform transition-transform duration-200 hover:scale-110">
                    <img
                        src="https://bizweb.dktcdn.net/100/344/969/themes/705911/assets/carts.svg?1719463671033"
                        alt="Cart"
                        className="w-8 h-8"
                    />
                </button>
            </div>
        </div>
    );
}

export default ProductCard;