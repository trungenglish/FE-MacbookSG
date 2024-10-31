import React from 'react';
import icondv from '../../assets/icondv.jpg';
import icondv1 from '../../assets/icondv1.jpg';
import icondv2 from '../../assets/icondv2.jpg';

const DichVu = () => {
  return (
      <div className="container mx-auto py-10 px-24">
        {/* Responsive Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8 px-4 md:px-0">

          {/* Nút Quà Tặng Hấp Dẫn */}
          <div className="bg-lime-200 hover:bg-lime-300 transition duration-300 rounded-lg flex items-center p-6 shadow-lg transform hover:scale-105">
            <img
                src={icondv2}
                alt="Quà Tặng Hấp DẪN"
                className="h-14 w-14"
            />
            <div className="ml-4">
              <p className="font-bold text-lg lg:text-xl">QUÀ TẶNG HẤP DẪN</p>
              <p className="text-sm text-gray-600 lg:text-base">Voucher lên đến 300K</p>
            </div>
          </div>

          {/* Nút Hỗ Trợ Trả Góp */}
          <div className="bg-yellow-200 hover:bg-yellow-300 transition duration-300 rounded-lg flex items-center p-6
          shadow-lg transform hover:scale-105">
            <img
                src={icondv1}
                alt="Hỗ Trợ Trả Góp"
                className="h-14 w-14"
            />
            <div className="ml-4">
              <p className="font-bold text-lg lg:text-xl">HỖ TRỢ TRẢ GÓP</p>
              <p className="text-sm text-gray-600 lg:text-base">Home Credit, Mcredit, HD Saison</p>
            </div>
          </div>

          {/* Nút Hotline */}
          <div className="bg-lime-300 hover:bg-lime-400 transition duration-300 rounded-lg flex items-center p-6
          shadow-lg transform hover:scale-105">
            <img
                src={icondv}
                alt="Hotline"
                className="h-14 w-14"
            />
            <div className="ml-4 overflow-hidden">
              <p className="font-bold text-lg lg:text-xl">Hotline: 0901.633.211</p>
              <p className="text-sm text-gray-600 lg:text-base">Hỗ trợ 24/7</p>
            </div>
          </div>

        </div>
      </div>
  );
};

export default DichVu;
