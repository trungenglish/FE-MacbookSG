import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {registerAPI} from "../../service/api/authApi.js";
import {notification} from "antd";

const RegisterPage = () => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();

        const passwordPattern = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})/;
        if (!passwordPattern.test(password)) {
            setError("Mật khẩu phải có ít nhất 6 ký tự, bao gồm chữ in hoa, số và ký tự đặc biệt");
            return;
        }

        const name = `${firstName} ${lastName}`;

        try{
            const res = await registerAPI(name, phone, password);
            if (res && res.EC === 0){
                notification.success({
                    message: "Tạo mới tài khoản",
                    description: "Tạo mới tài khoản thành công"
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
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
                {/* Tiêu đề */}
                <h2 className="text-center text-xl font-bold mb-6 border-b-2 pb-2 border-gray-200">
                    ĐĂNG KÍ TÀI KHOẢN
                </h2>

                {/* Form Đăng Kí */}
                <form onSubmit={handleRegister}>
                    <div className="space-y-4">
                        {/* Trường Họ */}
                        <input
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            type="text"
                            placeholder="Họ"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-200 text-gray-600 focus:outline-none focus:border-blue-500"
                        />
                        {/* Trường Tên */}
                        <input
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            type="text"
                            placeholder="Tên"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-200 text-gray-600 focus:outline-none focus:border-blue-500"
                        />
                        {/* Trường Số điện thoại */}
                        <input
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            type="text"
                            placeholder="Sđt"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-200 text-gray-600 focus:outline-none focus:border-blue-500"
                        />
                        {/* Trường Mật khẩu */}
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            placeholder="Mật khẩu"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-200 text-gray-600 focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    {/* Thông báo lỗi */}
                    {error && (
                        <div className="text-red-500 text-sm mt-2">
                            {error}
                        </div>
                    )}
                    {/* Nút Đăng Kí */}
                    <button
                        type="submit"
                        className="w-full mt-6 px-4 py-3 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition duration-300"
                    >
                        ĐĂNG KÍ
                    </button>

                    {/* Liên kết Quên mật khẩu */}
                    <div className="mt-4 text-center">
                        <a href="#" className="text-sm text-gray-500 hover:underline">
                            QUÊN MẬT KHẨU
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;