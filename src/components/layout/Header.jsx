import React, {useContext, useState} from 'react';
import { useNavigate } from "react-router-dom";
import logo from '../../assets/logo.jpg';
import dc from '../../assets/dc.jpg';
import sdt from '../../assets/sdt.jpg';
import use from '../../assets/use.jpg';
import giohang from '../../assets/giohang.jpg';
import seach from '../../assets/seach.jpg';
import dangnhap from '../../assets/dangnhap.jpg';
import dangki from '../../assets/dangki.jpg';
import {AuthContext} from "../context/AuthContext.jsx";

const Header = () => {
    const {user,setUser} = useContext(AuthContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeItem, setActiveItem] = useState('TRANG CHỦ');
    const [isDropdownOpenAuth, setIsDropdownOpenAuth] = useState(false);
    const navigate = useNavigate();

    console.log("check",user);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleDropdownAuth = () => {
        setIsDropdownOpenAuth((prev) => !prev);
    };

    // Mapping menu items to routes
    const routeMap = {
        'TRANG CHỦ': '/',
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

    const handleItemClick = (item) => {
        setActiveItem(item);
        setIsMenuOpen(false);

        // Navigate to the corresponding route
        const route = routeMap[item];
        if (route) {
            navigate(route);
        }
    };

    const handleLogout = () => {
        setUser({
            isAuthenticated: false,
            name: '',
            email: '',
        });
    }

    return (
        <header className="bg-white shadow-md py-4 px-24">
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

                        <div className="cursor-pointer hover:text-orange-500 transition duration-300">
                            <img src={giohang} alt="Cart" className="h-8" />
                        </div>
                    </div>
                </div>

                {/* Hamburger Menu Icon (For Mobile) */}
                <div className="lg:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
                        {isMenuOpen ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Navigation Bar */}
            <nav className={`${isMenuOpen ? 'block' : 'hidden'} lg:flex mt-4 bg-white lg:mt-3`}>
                <div className="container mx-auto flex flex-col lg:flex-row lg:justify-center space-y-2 lg:space-y-0 lg:space-x-3 py-1">
                    {Object.keys(routeMap).map((item, index) => (
                        <a
                            key={index}
                            href="#"
                            onClick={() => handleItemClick(item)}
                            className={`text-sm lg:text-base font-semibold relative transition-all duration-300 ease-in-out ${activeItem === item ? 'bg-orange-500 text-white px-4 py-2 rounded' : 'text-gray-700 hover:bg-orange-500 hover:text-white px-4 py-2 rounded'}`}
                        >
                            {item}
                        </a>
                    ))}
                </div>
            </nav>
        </header>
    );
};

export default Header;
