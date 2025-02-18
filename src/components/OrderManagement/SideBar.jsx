import {FiEye, FiLogOut, FiMapPin, FiShoppingBag, FiUser} from "react-icons/fi";
import React, {useContext} from "react";
import {AuthContext} from "../context/AuthContext.jsx";

const SideBar = () => {
    const { user, setUser } = useContext(AuthContext);

    return (
        <div className="w-72 bg-white shadow-xl fixed top-50 left-0 h-full z-10">
            <div className="p-8">
                <div className="flex items-center space-x-4 mb-10">
                    <div
                        className="w-14 h-14 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center text-white text-xl font-bold">
                        NV
                    </div>
                    <div>
                        <h2 className="font-bold text-lg">{user.user.name}</h2>
                        <p className="text-sm text-gray-500">{user.user.email}</p>
                    </div>
                </div>

                <nav className="space-y-3">
                    <NavItem icon={<FiUser className="w-5 h-5"/>} label="Thông tin tài khoản"/>
                    <NavItem icon={<FiMapPin className="w-5 h-5"/>} label="Sổ địa chỉ"/>
                    <NavItem icon={<FiShoppingBag className="w-5 h-5"/>} label="Quản lý đơn hàng" active/>
                    <NavItem icon={<FiEye className="w-5 h-5"/>} label="Sản phẩm đã xem"/>
                    <NavItem icon={<FiLogOut className="w-5 h-5"/>} label="Đăng xuất"/>
                </nav>
            </div>
        </div>

    )
}

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

export default SideBar;