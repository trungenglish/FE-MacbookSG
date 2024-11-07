import { createContext, useReducer, useEffect } from "react";
import {notification} from "antd";

export const CartContext = createContext();

const CART_LIMIT = 10;

export const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            const updatedCart = [...state];// tạo bản sao giỏ hàng đảm bảo state không thay đổi trực tiếp
            // kiểm tra sản phẩm đã tồn tại trong giỏ hàng chưa
            const productIndex = updatedCart.findIndex(item => item._id === action.payload._id);

            // Kiểm tra nếu giỏ hàng đã đạt giới hạn
            const totalQuantity = updatedCart.reduce((acc, item) => acc + item.quantityCart, 0);
            if (totalQuantity >= CART_LIMIT) {
                notification.error({
                    message: 'Giới hạn giỏ hàng',
                    description: `Giỏ hàng chỉ cho phép tối đa ${CART_LIMIT} sản phẩm.`,
                });
                return state;
            }

            // nếu đã tồn tại thì tăng số lượng lên 1
            if (productIndex > -1) {
                updatedCart[productIndex].quantityCart += 1;
            } else {
                updatedCart.push({ ...action.payload, quantityCart: 1 });
            }

            return updatedCart;

        case "REMOVE_FROM_CART":
            return state.filter(item => item._id !== action.payload._id);

        case "DECREASE_QUANTITY":
            const decreasedCart = [...state];
            const itemIndex = decreasedCart.findIndex(item => item._id === action.payload._id);

            if (itemIndex > -1) {
                // If quantity is greater than 1, decrease it
                if (decreasedCart[itemIndex].quantityCart > 1) {
                    decreasedCart[itemIndex].quantityCart -= 1;
                } else {
                    // If quantity is 1, remove the item from cart
                    return decreasedCart.filter(item => item._id !== action.payload._id);
                }
            }
            return decreasedCart;

        default:
            return state;
    }
};

export const CartProvider = ({ children }) => {
    const [cart, dispatch] = useReducer(cartReducer, [], () => {
        const localData = localStorage.getItem("cart");
        return localData ? JSON.parse(localData) : [];
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    return (
        <CartContext.Provider value={{ cart, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};