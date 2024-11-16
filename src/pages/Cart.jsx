import React, { useContext, useState } from "react";
import { BsBagX } from "react-icons/bs";
import { CartContext } from "../components/context/CartContext.jsx";
import {useNavigate} from "react-router-dom";

const CartPage = () => {
    const navigate = useNavigate();
    const { cart, dispatch } = useContext(CartContext);
    const [isTooltipVisible, setTooltipVisible] = useState(false);

    const handleQuantityChange = (productId, type) => {
        const product = cart.find(item => item._id === productId);
        if (!product) return;

        if (type === "increase") {
            dispatch({ type: "ADD_TO_CART", payload: product });
        } else if (type === "decrease" && product.quantityCart > 1) {
            dispatch({
                type: "DECREASE_QUANTITY",
                payload: { ...product, quantityCart: product.quantityCart - 1 }
            });
        }
    };

    const handleRemoveItem = (productId) => {
        dispatch({ type: "REMOVE_FROM_CART", payload: { _id: productId } });
    };

    const calculateTotal = () => {
        return cart.reduce((acc, item) => acc + item.priceAfterDiscount * item.quantityCart, 0);
    };

    return (
        <div className="w-[90%] h-[90%] mx-auto mt-10 border rounded-lg p-6 md:p-8 bg-white shadow-md relative">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 border-b pb-2 md:pb-4">
                GIỎ HÀNG CỦA BẠN
            </h2>

            {cart.length > 0 ? (
                cart.map((item) => (
                    <div key={item._id} className="flex flex-col md:flex-row items-start border-b pb-4 mb-4 overflow-y-auto">
                        <img
                            src={item.idPro.images?.[0]}
                            alt={item.idPro.name || "Product Image"}
                            className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg mb-4 md:mb-0"
                        />

                        <div className="md:ml-6 flex-1">
                            <h3 className="text-lg md:text-xl font-semibold">{item.idPro.name} - {item.storage} - {item.color}</h3>
                            <div className="flex items-center mt-2 space-x-2">
                                <span className="px-2 py-1 md:px-3 md:py-1 bg-orange-400 text-white rounded text-xs">
                                    {item.color}
                                </span>
                                <span
                                    className="px-2 py-1 md:px-3 md:py-1 bg-orange-400 text-white rounded text-xs relative"
                                    onMouseEnter={() => setTooltipVisible(true)}
                                    onMouseLeave={() => setTooltipVisible(false)}
                                >
                                    Khuyến Mãi
                                    {isTooltipVisible && (
                                        <div
                                            className="absolute left-0 top-full mt-2 w-48 bg-white border border-gray-300 shadow-lg p-3 rounded-lg z-10">
                                            <ul className="text-sm text-gray-700">
                                                <li className="py-1 border-b last:border-none">Giảm 10% khi thanh toán qua thẻ</li>
                                                <li className="py-1 border-b last:border-none">Mua 1 tặng 1 phụ kiện</li>
                                                <li className="py-1 border-b last:border-none">Bảo hành 2 năm miễn phí</li>
                                            </ul>
                                        </div>
                                    )}
                                </span>
                            </div>

                            <div className="flex items-center mt-4 space-x-2 md:space-x-4">
                                <button
                                    className="w-10 h-10 border border-gray-300 rounded-l-md bg-gray-100 hover:bg-gray-200 flex items-center justify-center focus:outline-none"
                                    onClick={() => handleQuantityChange(item._id, "decrease")}
                                >
                                    -
                                </button>
                                <input
                                    type="text"
                                    value={item.quantityCart}
                                    readOnly
                                    className="w-16 h-10 text-center border-t border-b border-gray-300 focus:outline-none"
                                />
                                <button
                                    className="w-10 h-10 border border-gray-300 rounded-r-md bg-gray-100 hover:bg-gray-200 flex items-center justify-center focus:outline-none"
                                    onClick={() => handleQuantityChange(item._id, "increase")}
                                >
                                    +
                                </button>
                                <button
                                    className="ml-4 text-gray-500 hover:text-red-500"
                                    onClick={() => handleRemoveItem(item._id)}
                                >
                                    XÓA
                                </button>
                            </div>
                        </div>

                        <div className="text-right mt-4 md:mt-0 md:ml-4">
                            <span className="text-red-500 font-semibold text-lg md:text-xl">
                                {(item.priceAfterDiscount * item.quantityCart).toLocaleString("vi-VN")} đ
                            </span>
                        </div>
                    </div>
                ))
            ) : (
                <div className="flex flex-col items-center justify-center h-[60vh] text-gray-500">
                    <BsBagX size={80} />
                    <p className="text-lg mt-4">Không có sản phẩm trong giỏ hàng</p>
                </div>
            )}

            {cart.length > 0 && (
                <div className="text-right font-semibold text-lg md:text-xl mt-4">
                    Tạm tính ({cart.length} sản phẩm): {calculateTotal().toLocaleString("vi-VN")} đ
                </div>
            )}

            <div className="flex justify-end mt-6 space-x-4">
                <button
                    className="px-4 py-2 md:px-6 md:py-3 bg-gray-300 text-gray-500 rounded cursor-not-allowed"
                    disabled
                >
                    HỦY
                </button>
                <button
                    className="px-4 py-2 md:px-6 md:py-3 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600"
                    onClick={() => navigate("/checkout")}
                >
                    THANH TOÁN
                </button>
            </div>
        </div>
    );
};

export default CartPage;
