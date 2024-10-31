import React from 'react';
import logo from '../../assets/logo.jpg';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-400 py-10">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-24">

                {/* Logo and Contact Info */}
                <div className="flex flex-col items-center md:items-start">
                    <img src={logo} alt="Logo" className="h-16 mb-4" />
                    <p className="text-gray-300 text-sm mb-1">Địa chỉ: 123 Đường ABC, TP. HCM, Việt Nam</p>
                    <p className="text-sm mb-1">Điện thoại: 0325.477.841</p>
                    <p className="text-sm mb-1">Email: support@hitech.com</p>
                </div>

                {/* Quick Links */}
                <div className="flex flex-col items-center md:items-start">
                    <h5 className="text-gray-200 font-semibold mb-4">Liên Kết Nhanh</h5>
                    <a href="#" className="text-sm hover:text-white mb-2 transition duration-300 ease-in-out">
                        Trang Chủ
                    </a>
                    <a href="#" className="text-sm hover:text-white mb-2 transition duration-300 ease-in-out">
                        Sản Phẩm
                    </a>
                    <a href="#" className="text-sm hover:text-white mb-2 transition duration-300 ease-in-out">
                        Liên Hệ
                    </a>
                    <a href="#" className="text-sm hover:text-white mb-2 transition duration-300 ease-in-out">
                        Chính Sách Bảo Hành
                    </a>
                    <a href="#" className="text-sm hover:text-white mb-2 transition duration-300 ease-in-out">
                        Hỗ Trợ Khách Hàng
                    </a>
                </div>

                {/* Social Media */}
                <div className="flex flex-col items-center md:items-start">
                    <h5 className="text-gray-200 font-semibold mb-4">Theo Dõi Chúng Tôi</h5>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-white transition duration-300 ease-in-out">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="hover:text-white transition duration-300 ease-in-out">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#" className="hover:text-white transition duration-300 ease-in-out">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="hover:text-white transition duration-300 ease-in-out">
                            <i className="fab fa-youtube"></i>
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Copyright Section */}
            <div className="mt-10 border-t border-gray-700 pt-4 text-center">
                <p className="text-sm text-gray-400">
                    Macbook Sài Gòn - Uy Tín - Chất Lượng
                </p>
            </div>
        </footer>
    );
};

export default Footer;
