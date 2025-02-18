import React, {useEffect, useState} from "react";
import { FiSearch, FiUser, FiMapPin, FiShoppingBag, FiEye, FiLogOut } from "react-icons/fi";
import {getOrderById} from "../service/api/orderApi.js";
import SideBar from "../components/OrderManagement/SideBar.jsx";
import OrderSearchBar from "../components/OrderManagement/OrderSearchBar.jsx";
import OrderTabs from "../components/OrderManagement/OrderTabs.jsx";
import {useNavigate} from "react-router-dom";
import OrderItems from "../components/OrderManagement/OrderItems.jsx";

const OrderManagement = () => {
    const navigate = useNavigate()
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
        { id: "processing", label: "Đang xử lý" },
        // { id: "shipping", label: "Đang vận chuyển" },
        { id: "completed", label: "Hoàn thành" },
        { id: "cancelled", label: "Hủy" },
    ];

    return (
        <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Sidebar */}
            <SideBar/>
            {/* Main Content */}
            <div className="flex-1 p-10 ml-72">  {/* Adjusted to leave space for the fixed sidebar */}
                <h1 className="text-3xl font-bold mb-10 text-gray-800">Quản lý đơn hàng</h1>

                {/* Search */}
                <OrderSearchBar/>

                {/* OrderTabs */}
                <OrderTabs
                    tabs={tabs}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />

                {/* Orders */}
                <OrderItems
                    activeTab={activeTab}
                    orders={orders}
                />
            </div>
        </div>
    );
};


export default OrderManagement;