import React from 'react';
import TraGop from '../assets/warrantyPolicy.png';

const WarrantyPolicy = () => {
    return (
        <div>

            {/* Warranty Policy Content */}
            <main className="bg-gray-50 py-8">
                <div className="container mx-auto px-4">
                    <h1 className="text-2xl font-bold mb-4">Trả góp</h1>

                    {/* Installment Terms */}
                    <section className="bg-white p-6 rounded-lg shadow-md mb-8">
                        <h2 className="text-xl font-semibold mb-4">1. Trả góp qua Công ty tài chính (HD SAISON, Mirae Asset)</h2>
                        <ul className="space-y-3 text-gray-700">
                            <li>- Mua hàng trả góp qua các công ty tài chính yêu cầu khách hàng phải trả trước bằng tiền mặt từ 20% đến 70% giá trị sản phẩm.</li>
                            <li>- Không cần thẻ tín dụng, không cần giấy tờ chứng minh thu nhập.</li>
                            <li>- Chỉ cần có CMND bản gốc hoặc CCCD bản gốc và Hộ Khẩu/ Bằng lái xe bản gốc.</li>
                        </ul>
                    </section>

                    {/* Payment Options */}
                    <section className="bg-white p-6 rounded-lg shadow-md mb-8">
                        <h2 className="text-xl font-semibold mb-4">2. Trả góp qua thẻ tín dụng</h2>
                        <img src={TraGop} alt="Payment Methods" className="w-full mb-4 rounded" />
                        <p className="text-gray-700">
                            Khách hàng có thể thanh toán bằng các loại thẻ của các ngân hàng tại Việt Nam và thế giới bao gồm: Visa, JCB, Master Card.
                        </p>
                    </section>

                    {/* Payment Advantages and Disadvantages */}
                    <section className="bg-white p-6 rounded-lg shadow-md mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="border p-4 rounded-lg">
                            <h3 className="text-lg font-semibold mb-2">Điểm Mạnh</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li>+ Khách hàng có thể mua sắm ngay cả khi chưa đủ tiền.</li>
                                <li>+ Không cần chứng minh thu nhập.</li>
                                <li>+ Không cần thế chấp tài sản.</li>
                                <li>+ Có thể trả trước từ 20% - 50% giá trị sản phẩm.</li>
                            </ul>
                        </div>
                        <div className="border p-4 rounded-lg">
                            <h3 className="text-lg font-semibold mb-2">Điểm Yếu</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li>- Chi phí chuyển đổi trả góp có thể cao.</li>
                                <li>- Một số ngân hàng yêu cầu thu phí dịch vụ.</li>
                            </ul>
                        </div>
                    </section>

                    {/* Contact Details */}
                    <section className="bg-white p-6 rounded-lg shadow-md">
                        <div className="text-center">
                            <h3 className="text-lg font-semibold mb-2">HỒ KINH DOANH MACBOOK SAIGON</h3>
                            <p className="text-gray-700">Chuyên Buôn bán, sửa chữa điện thoại, Ipad, Macbook,...</p>
                            <p className="text-gray-700">Địa chỉ: 69/17 Lê Văn Sỹ - P13 - Phú Nhuận - HCM</p>
                            <p className="text-gray-700">Hotline: 0901.633.211</p>
                            <p className="text-gray-700">Hỗ trợ bảo hành: 0901.633.211</p>
                            <p className="text-gray-700">Trả góp: 0901.633.211</p>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default WarrantyPolicy;