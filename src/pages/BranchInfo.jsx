import React from 'react';

const BranchInfo = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            {/* Container chính với chiều rộng lớn hơn và khoảng cách trên */}
            <div className="w-full max-w-5xl bg-white rounded-lg shadow-lg p-10 mt-8">
                {/* Tiêu đề */}
                <h2 className="text-center text-2xl font-bold mb-6">CHI NHÁNH Ở THÀNH PHỐ HỒ CHÍ MINH</h2>

                {/* Thông tin chi nhánh */}
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                    <div className="mb-4">
                        <h3 className="font-bold">Cửa hàng 1:</h3>
                        <p>95/17 Lê Văn Sỹ - Phường 13 - Quận Phú Nhuận - TP HCM</p>
                        <p className="text-gray-600">• 0901.633.211</p>
                    </div>
                    <div>
                        <h3 className="font-bold">Cửa hàng 2:</h3>
                        <p>Sắp mở cửa</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BranchInfo;