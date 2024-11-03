import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import logo from '../../assets/logo.jpg';
import dc from '../../assets/dc.jpg';
import sdt from '../../assets/sdt.jpg';
import use from '../../assets/use.jpg';
import giohang from '../../assets/giohang.jpg';
import seach from '../../assets/seach.jpg';
import dangnhap from '../../assets/dangnhap.jpg';
import dangki from '../../assets/dangki.jpg';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeItem, setActiveItem] = useState('TRANG CHỦ');
    const [isDropdownOpenAuth, setIsDropdownOpenAuth] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleDropdownAuth = () => {
        setIsDropdownOpenAuth((prev) => !prev);
    };

    // Mapping menu items to routes
    const routeMap = {
        'TRANG CHỦ': '/',
        'MACBOOK': '/macbook',
        'MACBOOK99': '/macbook99',
        'IPHONE': '/iphone',
        'IPAD': '/ipad',
        'IMAC': '/imac',
        'SURFACE': '/surface',
        'PHỤ KIỆN': '/phu-kien',
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
                        <div className="cursor-pointer hover:text-orange-500 transition duration-300" onClick={toggleDropdownAuth}>
                            <img src={use} alt="User" className="h-10" />
                        </div>

                        {/* Dropdown for Login and Register */}
                        {isDropdownOpenAuth && (
                            <div className="absolute top-6 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
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
