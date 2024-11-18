import React, {useEffect, useState} from "react";
import { FiSearch, FiUser, FiMapPin, FiShoppingBag, FiEye, FiLogOut } from "react-icons/fi";
import {getOrderById} from "../service/api/orderApi.js";

const OrderManagement = () => {
    const [activeTab, setActiveTab] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            const res = await getOrderById();
            if (res && res.EC === 0) {
                setOrders(res.data);
            }else {
                setOrders([]);
            }
        }
        fetchOrders();
    }, []);

    console.log("check orders", orders);

    const tabs = [
        { id: "all", label: "Tất cả" },
        { id: "new", label: "Mới" },
        { id: "processing", label: "Đang xử lý" },
        { id: "shipping", label: "Đang vận chuyển" },
        { id: "completed", label: "Hoàn thành" },
        { id: "cancelled", label: "Hủy" },
    ];

    // const dummyOrders = [
    //     {
    //         id: "ORD123",
    //         date: "2024-01-20",
    //         status: "processing",
    //         total: 25990000,
    //         products: [
    //             {
    //                 name: "iPhone 15 Pro Max",
    //                 color: "Natural Titanium",
    //                 storage: "256GB",
    //                 quantity: 1,
    //                 price: 25990000,
    //                 image: "https://images.unsplash.com/photo-1696446702183-cbd13d78e1e7"
    //             }
    //         ]
    //     },
    //     {
    //         id: "ORD124",
    //         date: "2024-01-21",
    //         status: "shipping",
    //         total: 35990000,
    //         products: [
    //             {
    //                 name: "MacBook Pro M3",
    //                 color: "Space Black",
    //                 storage: "512GB",
    //                 quantity: 1,
    //                 price: 35990000,
    //                 image: "https://images.unsplash.com/photo-1639249227523-78502e9bb8b7"
    //             }
    //         ]
    //     }
    // ];

    return (
        <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Sidebar */}
            <div className="w-72 bg-white shadow-xl fixed top-50 left-0 h-full z-10">
                <div className="p-8">
                    <div className="flex items-center space-x-4 mb-10">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center text-white text-xl font-bold">
                            NV
                        </div>
                        <div>
                            <h2 className="font-bold text-lg">Nguyen Van A</h2>
                            <p className="text-sm text-gray-500">user@example.com</p>
                        </div>
                    </div>

                    <nav className="space-y-3">
                        <NavItem icon={<FiUser className="w-5 h-5" />} label="Thông tin tài khoản" />
                        <NavItem icon={<FiMapPin className="w-5 h-5" />} label="Sổ địa chỉ" />
                        <NavItem icon={<FiShoppingBag className="w-5 h-5" />} label="Quản lý đơn hàng" active />
                        <NavItem icon={<FiEye className="w-5 h-5" />} label="Sản phẩm đã xem" />
                        <NavItem icon={<FiLogOut className="w-5 h-5" />} label="Đăng xuất" />
                    </nav>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-10 ml-72">  {/* Adjusted to leave space for the fixed sidebar */}
                <h1 className="text-3xl font-bold mb-10 text-gray-800">Quản lý đơn hàng</h1>

                {/* Search */}
                <div className="flex space-x-4 mb-10">
                    <div className="flex-1 relative">
                        <input
                            type="text"
                            placeholder="Tìm kiếm đơn hàng theo mã đơn hàng"
                            className="w-full pl-5 pr-12 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent shadow-sm"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <FiSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    </div>
                    <button className="px-8 py-3 bg-orange-600 text-white rounded-xl hover:bg-orange-700 transition-colors duration-200 shadow-md hover:shadow-lg font-medium">
                        Tìm kiếm
                    </button>
                </div>

                {/* Tabs */}
                <div className="flex space-x-6 mb-10 border-b border-gray-200">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            className={`pb-4 px-4 font-medium text-base transition-colors duration-200 ${
                                activeTab === tab.id
                                    ? "text-orange-600 border-b-2 border-orange-600"
                                    : "text-gray-500 hover:text-gray-700"
                            }`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Orders */}
                {orders.length > 0 ? (
                    <div className="space-y-8">
                        {orders.map((order) => (
                            <div key={order._id} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-200">
                                <div className="flex justify-between items-center mb-6">
                                    <div>
                                        <span className="font-semibold text-lg">Mã đơn hàng: {order._id}</span>
                                        <span className="mx-4 text-gray-300">|</span>
                                        {/* Format createdAt to local time */}
                                        <span className="text-gray-500">{new Date(order.createdAt).toLocaleString()}</span>
                                    </div>
                                    <span className={`px-6 py-2 rounded-full text-sm font-medium ${
                                        order.status === "processing" ? "bg-orange-100 text-orange-600" :
                                            order.status === "shipping" ? "bg-green-100 text-green-600" :
                                                "bg-gray-100 text-gray-600"
                                    }`}>
                                    {order.status === "đang xử lý" ? "Đang xử lý" :
                                        order.status === "đang vận chuyển" ? "Đang vận chuyển" : "Khác"}
                                </span>
                                </div>

                                {order.products.map((product, index) => (
                                    <div key={index} className="border-t border-gray-100 pt-6">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-6">
                                                <img
                                                    src={product.productDetails.images[0]}
                                                    alt={product.name}
                                                    className="w-24 h-24 object-cover rounded-xl"
                                                />
                                                <div>
                                                    <h3 className="font-semibold text-lg text-gray-800">{product.name}</h3>
                                                    <p className="text-gray-500 mt-2">
                                                        Phân loại: {product.color}, {product.storage}
                                                    </p>
                                                    <p className="text-gray-500 mt-1">
                                                        Số lượng: {product.quantity}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <p className="font-semibold text-lg text-gray-800">
                                                    {product.price.toLocaleString()}đ
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                <div className="border-t border-gray-100 mt-6 pt-6 flex justify-between items-center">
                                    <button className="text-orange-600 hover:text-orange-700 font-medium">Xem chi tiết</button>
                                    <div>
                                        <span className="text-gray-500">Tổng tiền:</span>
                                        <span className="ml-3 text-xl font-semibold text-gray-800">
                                        {order.totalPrice.toLocaleString()}đ
                                    </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16 bg-white rounded-2xl shadow-md">
                        <div className="w-28 h-28 bg-orange-50 rounded-full mx-auto mb-6 flex items-center justify-center">
                            <FiShoppingBag className="w-14 h-14 text-orange-500" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-gray-800">Chưa có đơn hàng</h3>
                        <p className="text-gray-500 mb-6">
                            Bạn chưa có đơn hàng nào. Hãy mua sắm ngay!
                        </p>
                        <button className="px-8 py-3 bg-orange-600 text-white rounded-xl hover:bg-orange-700 transition-colors duration-200 shadow-md hover:shadow-lg font-medium">
                            Tiếp tục mua sắm
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

const NavItem = ({ icon, label, active }) => (
    <button
        className={`flex items-center space-x-4 w-full px-5 py-3 rounded-xl transition-all duration-200 ${
            active
                ? "bg-orange-50 text-orange-600 shadow-sm"
                : "text-gray-600 hover:bg-gray-50"
        }`}
    >
        {icon}
        <span className="font-medium">{label}</span>
    </button>
);

export default OrderManagement;