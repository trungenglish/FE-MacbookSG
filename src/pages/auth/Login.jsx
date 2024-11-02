import React, {useContext, useState} from 'react';
import imageLogin from '../../assets/imageLogin.png';
import {Link, useNavigate} from "react-router-dom";
import {AuthContext} from "../../components/context/AuthContext.jsx";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import {loginAPI} from "../../service/api/authApi.js";

const LoginPage = () => {
    const {setUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        const passwordPattern = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})/;
        if (!passwordPattern.test(password)) {
            setError("Mật khẩu phải có ít nhất 6 ký tự, bao gồm chữ in hoa, số và ký tự đặc biệt");
            return;
        }
        try {
            const res = await loginAPI(phone, password);
            if (res && res.EC === 0){
                localStorage.setItem('access_token', res.access_token);
                setUser({
                    isAuthenticated: true,
                    user: {
                        phone: res?.user?.phone ?? "",
                        name: res?.user?.name ?? "",
                    }
                })
                navigate("/", {replace: true});
            } else{
                setError(res.EM);
            }
        }catch (e) {
            setError("Không thể kết nối tới server. Vui lòng thử lại sau.");
            console.error("Error connecting to backend:", e);
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="flex bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="hidden md:flex md:w-1/2 bg-blue-100 items-center justify-center">
                    <img
                        src={imageLogin}
                        alt="Illustration"
                        className="w-4/5"
                    />
                </div>
                {/* Phần form đăng nhập bên phải */}
                <div className="w-full md:w-1/2 p-8">
                    <h2 className="text-2xl font-bold text-center mb-4">Đăng Nhập</h2>
                    <form className="space-y-4"
                        onSubmit={handleLogin}>
                        <div>
                            <label className="block text-gray-700">Số điện thoại</label>
                            <input
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                type="text"
                                placeholder="Sdt"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Mật khẩu</label>
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                placeholder="Mật khẩu"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        {/* Thông báo lỗi */}
                        {error && (
                            <div className="text-red-500 text-sm mt-2">
                                {error}
                            </div>
                        )}
                        <button className="w-full py-2 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition duration-300">
                            Đăng Nhập
                        </button>
                    </form>
                    <p className="text-center text-gray-600 mt-4">
                        Bạn chưa có tài khoản?{" "}
                        <Link to="/register" className="text-blue-500 hover:underline">
                            Đăng ký ngay
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;