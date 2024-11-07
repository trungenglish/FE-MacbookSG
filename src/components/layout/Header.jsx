import React, { useContext, useState } from 'react';
import { useNavigate, NavLink, useLocation } from "react-router-dom";  // Thêm useLocation vào đây
import logo from '../../assets/logo.jpg';
import dc from '../../assets/dc.jpg';
import sdt from '../../assets/sdt.jpg';
import use from '../../assets/use.jpg';
import giohang from '../../assets/giohang.jpg';
import seach from '../../assets/seach.jpg';
import dangnhap from '../../assets/dangnhap.jpg';
import dangki from '../../assets/dangki.jpg';
import { AuthContext } from "../context/AuthContext.jsx";
import { CartContext } from "../context/CartContext.jsx";

const Header = () => {
    const { cart } = useContext(CartContext);
    const { user, setUser } = useContext(AuthContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpenAuth, setIsDropdownOpenAuth] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const totalItems = cart.reduce((sum, item) => sum + item.quantityCart, 0);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleDropdownAuth = () => {
        setIsDropdownOpenAuth((prev) => !prev);
    };

    const handleLogout = () => {
        setUser({
            isAuthenticated: false,
            name: '',
            email: '',
        });
    };

    // Mapping menu items to routes
    const routeMap = {
        'TRANG CHỦ': '/homepage',
        'MACBOOK': '/productList/670ff2c12938a36073a9d9c3',
        'MACBOOK99': '/productList/6729730be84df12ca0e8b77e',
        'IPHONE': '/productList/67297313e84df12ca0e8b782',
        'IPAD': '/productList/67297319e84df12ca0e8b786',
        'IMAC': '/productList/67297322e84df12ca0e8b78a',
        'SURFACE': '/productList/67297376e84df12ca0e8b78e',
        'PHỤ KIỆN': '/productList/67297392e84df12ca0e8b792',
        'BẢO HÀNH': '/warrantyPolicy',
        'LIÊN HỆ': '/lien-he',
        'VẬN CHUYỂN': '/deliveryPolicy',
    };

    return (
        <header className="bg-white shadow-md py-4 px-24 sticky top-0 z-50">
            <div className=" container mx-auto flex justify-between items-center px-4 lg:px-0">
                {/* Logo */}
                <div className="cursor-pointer flex items-center" onClick={() => navigate("/")}>
                    <img src={logo} alt="Macbook Saigon" className="h-14 w-auto object-contain" />
                </div>

                {/* Search Bar */}
                <div className="flex-grow mx-4 relative flex">
                    <input
                        type="text"
                        placeholder="Tìm kiếm sản phẩm..."
                        className="w-full pl-4 pr-10 py-2 border border-gray-300 bg-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
                    />
                    <img src={seach} alt="Search Icon" className="absolute right-4 top-2.5 w-6 h-6" />
                </div>

                {/* Contact Info - only visible on large screens */}
                <div className="hidden lg:flex items-center space-x-8">
                    <div
                        className="flex items-center space-x-2 cursor-pointer hover:text-orange-500 transition duration-300"
                        onClick={() => navigate("/branch")}
                    >
                        <img src={dc} alt="Địa chỉ" className="h-6" />
                        <div>
                            <p className="text-sm font-semibold">Hệ Thống Chi Nhánh</p>
                            <p className="text-xs text-gray-500">Có 1 cửa hàng</p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-2 cursor-pointer hover:text-orange-500 transition duration-300">
                        <img src={sdt} alt="Số điện thoại" className="h-6" />
                        <div>
                            <p className="text-sm font-semibold">Gọi mua hàng</p>
                            <p className="text-xs text-gray-500">0901.633.211</p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4 relative">
                        {user.isAuthenticated ? (
                            <div className="relative group flex items-center space-x-2 cursor-pointer bg-gray-50 p-2 rounded-md shadow hover:bg-gray-100 transition duration-300"
                                 onClick={toggleDropdownAuth} >
                                <span className="text-sm font-semibold text-gray-700 truncate w-32">Xin chào, {user.user.name}</span>
                            </div>
                        ) : (
                            <div className="cursor-pointer hover:text-orange-500 transition duration-300"
                                 onClick={toggleDropdownAuth}>
                                <img src={use} alt="User" className="h-10"/>
                            </div>
                        )}
                        {/* Dropdown for Login and Register */}
                        {isDropdownOpenAuth && (
                            <div className="absolute top-10 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                                {user.isAuthenticated ? (
                                    <button
                                        onClick={handleLogout}
                                        className="w-full px-4 py-3 text-left hover:bg-gray-100"
                                    >
                                        Đăng Xuất
                                    </button>
                                ) : (
                                    <div className="flex flex-col">
                                        <button
                                            onClick={() => {
                                                navigate('/login');
                                                setIsDropdownOpenAuth(false);
                                            }}
                                            className="flex items-center px-4 py-3 hover:bg-gray-100"
                                        >
                                            <img src={dangnhap} alt="Đăng Nhập Icon" className="h-6 w-6 mr-2" />
                                            Đăng Nhập
                                        </button>
                                        <button
                                            onClick={() => {
                                                navigate('/register');
                                                setIsDropdownOpenAuth(false);
                                            }}
                                            className="flex items-center px-4 py-3 hover:bg-gray-100"
                                        >
                                            <img src={dangki} alt="Đăng Kí Icon" className="h-6 w-6 mr-2" />
                                            Đăng Kí
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}

                        <div
                            onClick={() => navigate('/cart')}
                            className="cursor-pointer hover:text-orange-500 transition duration-300">
                            <img src={giohang} alt="Cart" className="h-8" />
                            {totalItems > 0 && (
                                <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                    {totalItems}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Bar */}
            <nav className={`${isMenuOpen ? 'block' : 'hidden'} lg:flex mt-4 bg-white lg:mt-3`}>
                <div className="container mx-auto flex flex-col lg:flex-row lg:justify-center space-y-2 lg:space-y-0 lg:space-x-3 py-1">
                    {Object.keys(routeMap).map((item, index) => (
                        <NavLink
                            key={index}
                            to={routeMap[item]}
                            className={({ isActive }) => {
                                const isCurrentRoute = location.pathname === routeMap[item];
                                return `text-sm lg:text-base font-semibold relative transition-all duration-300 ease-in-out 
                                    ${isCurrentRoute ? 'bg-orange-500 text-white px-4 py-2 rounded' : 'text-gray-700 hover:bg-orange-500 hover:text-white px-4 py-2 rounded'}`;
                            }}
                        >
                            {item}
                        </NavLink>
                    ))}
                </div>
            </nav>
        </header>
    );
};

export default Header;
