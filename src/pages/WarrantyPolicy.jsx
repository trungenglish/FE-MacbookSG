import React from 'react';
import TraGop from '../assets/warrantyPolicy.png';

const WarrantyPolicy = () => {
    return (
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md mt-10">
            <h1 className="text-2xl font-bold mb-4 text-gray-800">Chính Sách Bảo Hành</h1>
            <h2 className="text-xl font-semibold mb-2 text-gray-700">Điều Kiện Bảo Hành iTech Mobile</h2>
            <p className="mb-4">(Quý khách hàng vui lòng đọc kỹ ngay khi mua máy)</p>
            <p className="mb-4">
                Trong thời gian bảo hành, chúng tôi chỉ bảo hành những vật liệu, linh kiện bị hư hỏng
                trong điều kiện sử dụng bình thường. Sau thời gian bảo hành, chi phí sửa chữa sẽ được ưu đãi.
            </p>
            <p className="mb-4">
                Các điều kiện bảo hành có giới hạn của nhà sản xuất như Apple, Samsung, Dell, Lenovo, Asus,... Cụ thể
                như
                sau:
            </p>
            <ul className="list-disc ml-6 mb-4">
                <li>Các sản phẩm iPhone, iPad, Macbook, Laptop, Apple Watch được bảo test trong vòng 07 ngày đầu tiên (1
                    đổi
                    1 với máy có lỗi).
                </li>
                <li><strong>iPhone</strong>: 12 tháng, bao gồm bảo hành pin (dưới 80% thay thế miễn phí).</li>
                <li><strong>iPad</strong>: 12 tháng.</li>
                <li><strong>Macbook – Laptop</strong>: 06 tháng (Phụ kiện sạc cáp đi kèm bảo hành 01 tháng 1 đổi 1).
                </li>
                <li><strong>Đối với Macbook</strong>: Không bảo hành trường hợp mất gói Apple Care đi với những máy có
                    sẵn
                    Apple Care từ ban đầu.
                </li>
                <li><strong>Apple Watch</strong>: 06 tháng.</li>
                <li>Phụ kiện tai nghe, bàn phím, loa,...: 01 tháng 1 đổi 1.</li>
                <li>Phụ kiện sạc cáp mua riêng không kèm theo máy: 06 tháng 1 đổi 1.</li>
            </ul>
            <h3 className="text-lg font-semibold mb-2 text-gray-700">Những trường hợp sau đây đủ điều kiện bảo
                hành:</h3>
            <ul className="list-disc ml-6 mb-4">
                <li>Các sản phẩm có lỗi do nhà sản xuất.</li>
                <li>Sản phẩm phải còn nguyên vẹn, chưa bị sửa chữa bởi các nơi khác ngoài hệ thống của hàng iTech
                    Mobile.
                </li>
                <li>Số serial máy, kiểu máy trên sản phẩm phải trùng với số serial máy, kiểu máy trên phiếu bảo hành.
                </li>
                <li>Tem bảo hành phải còn nguyên vẹn, tránh trường hợp rách, mất tem.</li>
            </ul>
            <h3 className="text-lg font-semibold mb-2 text-gray-700">Những trường hợp sau đây không được bảo hành:</h3>
            <ul className="list-disc ml-6 mb-4">
                <li>Các sản phẩm đã hết hạn bảo hành.</li>
                <li>Các sản phẩm bị lỗi màn hình, chức năng vân tay, chức năng Face ID, vấn đề về chip CPU (laptop),
                    chip
                    GPU (laptop) và nguồn điện của máy.
                </li>
                <li>Các sản phẩm bị lỗi do người dùng cố tình sử dụng máy cho mục đích vượt quá công suất của máy do nhà
                    sản
                    xuất đưa ra như ép xung CPU, ép xung GPU, đào Bitcoin,... (đối với laptop).
                </li>
                <li>Các sản phẩm có dấu hiệu rơi vỡ, va đập, cấn mép, vỏ nứt hoặc có sự tác động của yếu tố thứ ba.</li>
            </ul>
            <p className="italic text-gray-600">Lưu ý: Thời gian bảo hành từ 13h00 đến 21h00, trừ ngày lễ và chủ
                nhật.</p>
        </div>
    );
};

export default WarrantyPolicy;