import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../components/context/CartContext.jsx";
import { FaMoneyBillWave } from 'react-icons/fa';
import momoPayment from "../assets/momoPayment.png";
import zaloPay from "../assets/zaloPay.png";
import { AuthContext } from "../components/context/AuthContext.jsx";
import { getCity, getDistrict } from "../service/api/checkoutApi.js";

const Checkout = () => {
    const { cart } = useContext(CartContext);
    const { user } = useContext(AuthContext);
    const [selectedPayment, setSelectedPayment] = useState("Thanh toán khi nhận hàng (COD)");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [cities, setCities] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [selectedCity, setSelectedCity] = useState("");
    const [selectedDistrict, setSelectedDistrict] = useState("");

    useEffect(() => {
        const fetchCity = async () => {
            try {
                const res = await getCity();
                console.log("res", res);
                const options = res.map((item) => ({
                    value: item.code,
                    label: item.name,
                }));
                setCities(options);
            } catch (error) {
                console.error("Error fetching city data:", error);
            }
        };
        fetchCity();
    }, []);

    const handleCityChange = async (e) => {
        const cityCode = e.target.value;
        setSelectedCity(cityCode);
        setSelectedDistrict(""); // Reset district selection

        try {
            const res = await getDistrict(cityCode);
            const options = res.map((item) => ({
                value: item.code,
                label: item.name,
            }));
            setDistricts(options);
        } catch (error) {
            console.error("Error fetching district data:", error);
        }
    };

    const handleDistrictChange = (e) => {
        setSelectedDistrict(e.target.value);
    };

    const paymentMethods = [
        { value: "COD", label: "Thanh toán khi nhận hàng (COD)", icon: <FaMoneyBillWave /> },
        { value: "ZaloPay", label: "ZaloPay", icon: <img src={zaloPay} alt="ZaloPay" className="w-6 h-6 mr-2" /> },
        { value: "MoMo", label: "MoMo", icon: <img src={momoPayment} alt="MoMo" className="w-6 h-6 mr-2" /> },
    ];

    const handlePaymentSelection = (method) => {
        setSelectedPayment(method.label);
        setIsDropdownOpen(false);
    };

    const totalQuantityCart = cart.reduce((total, item) => total + item.quantityCart, 0);

    const totalAmount = cart.reduce((total, item) => {
        return total + (item.priceAfterDiscount * item.quantityCart);
    }, 0);

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center py-10">
            <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-6">
                <h1 className="text-2xl font-bold text-center mb-6">Thanh toán</h1>

                {/* Thông tin sản phẩm */}
                {cart.map((item) => (
                    <div className="flex items-center mb-6 p-4 bg-gray-200 rounded-lg" key={item.idPro._id}>
                        <img
                            src={item.idPro.images?.[0]}
                            alt={item.idPro.name || "Product Image"}
                            className="w-20 h-20 object-cover rounded-md mr-4"
                        />
                        <div>
                            <h2 className="text-lg font-semibold">{item.idPro.name} - {item.storage} - {item.color}</h2>
                            <div className="flex space-x-2 mt-2">
                                <span
                                    className="text-white bg-orange-500 text-sm px-2 py-1 rounded"> {item.color}</span>
                                <span className="text-white bg-red-500 text-sm px-2 py-1 rounded">Khuyến mãi</span>
                                <span
                                    className="text-white bg-yellow-500 text-sm px-2 py-1 rounded">{item.storage}</span>
                            </div>
                        </div>
                        <div className="ml-auto flex flex-col items-end">
                            <div className="flex items-center">
                                <span
                                    className="text-lg font-semibold mr-2">{item.priceAfterDiscount.toLocaleString()}₫</span>
                                <span className="text-sm text-gray-500">x {item.quantityCart}</span>
                            </div>
                            <div className="text-sm text-gray-500 mt-1">
                                <span
                                    className="font-bold">Tổng:</span> {(item.priceAfterDiscount * item.quantityCart).toLocaleString()}₫
                            </div>
                        </div>
                    </div>
                ))}

                {/* Thông tin khách hàng */}
                <div className="mb-6 bg-gray-200 p-4 rounded-lg">
                    <h2 className="text-lg font-semibold mb-2">Thông tin khách hàng</h2>
                    <p>{user.user.name}</p>
                    <p>{user.user.phone}</p>
                    <p>{user.user.email}</p>
                </div>

                {/* Thông tin nhận hàng */}
                <div className="mb-6 bg-gray-200 p-4 rounded-lg">
                    <h2 className="text-lg font-semibold mb-4">Thông tin nhận hàng</h2>
                    <form className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Tên người nhận"
                                defaultValue={user.user.name}
                                className="w-full p-2 border rounded bg-gray-50"
                                disabled
                            />
                            <input
                                type="text"
                                placeholder="SĐT"
                                defaultValue={user.user.phone}
                                className="w-full p-2 border rounded bg-gray-50"
                                disabled
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <select className="w-full p-2 border rounded" value={selectedCity} onChange={handleCityChange}>
                                <option value="">Chọn tỉnh/thành phố</option>
                                {cities.map((city) => (
                                    <option key={city.value} value={city.value}>{city.label}</option>
                                ))}
                            </select>
                            <select className="w-full p-2 border rounded" value={selectedDistrict} onChange={handleDistrictChange}>
                                <option value="">Chọn quận/huyện</option>
                                {districts.map((district) => (
                                    <option key={district.value} value={district.value}>{district.label}</option>
                                ))}
                            </select>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Phường/Xã"
                                className="w-full p-2 border rounded"
                            />
                            <input
                                type="text"
                                placeholder="Số nhà, Tên đường"
                                className="w-full p-2 border rounded"
                            />
                        </div>
                        <textarea
                            placeholder="Ghi chú khác (nếu có)"
                            className="w-full p-2 border rounded"
                        ></textarea>
                    </form>
                </div>

                {/* Thông tin đơn hàng */}
                <div className="mb-6 bg-gray-200 p-4 rounded-lg">
                    <h2 className="text-lg font-semibold mb-4">Thông tin đơn hàng</h2>
                    <div className="flex justify-between mb-2">
                        <span>Số lượng sản phẩm</span>
                        <span>{totalQuantityCart}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span>Tiền tạm tính</span>
                        <span>{totalAmount.toLocaleString()}₫</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span>Phí vận chuyển</span>
                        <span>Miễn phí</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg">
                        <span>Tổng tiền (đã gồm VAT)</span>
                        <span>{totalAmount.toLocaleString()}₫</span>
                    </div>
                </div>

                {/* Thông tin thanh toán */}
                <div className="mb-6 bg-gray-200 p-4 rounded-lg">
                    <h2 className="text-lg font-semibold mb-2">Chọn phương thức thanh toán</h2>
                    <div className="relative">
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="w-full text-left p-3 bg-gray-50 rounded-lg border border-gray-300 flex items-center justify-between"
                        >
                            <span>{selectedPayment}</span>
                            <span className="text-gray-500">{isDropdownOpen ? "▲" : "▼"}</span>
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute w-full bg-white rounded-lg shadow-lg mt-1">
                                {paymentMethods.map((method) => (
                                    <button
                                        key={method.value}
                                        onClick={() => handlePaymentSelection(method)}
                                        className="w-full text-left p-3 hover:bg-gray-100 flex items-center"
                                    >
                                        {method.icon}
                                        <span>{method.label}</span>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                <button className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700">
                    Đặt hàng
                </button>
            </div>
        </div>
    );
};

export default Checkout;
