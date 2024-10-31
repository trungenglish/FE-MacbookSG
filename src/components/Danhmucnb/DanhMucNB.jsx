import React from 'react';
import suachua from '../../assets/suachua.jpg';
import ip13 from '../../assets/ip13.jpg';
import phukien from '../../assets/phukien.jpg';
import mb from '../../assets/mb.jpg';

const DanhMucNB = () => {
  const categories = [
    {
      title: 'MACBOOK',
      image: mb, 
      alt: 'MacBook'
    },
    {
      title: 'IPHONE',
      image: ip13,
      alt: 'iPhone'
    },
    {
      title: 'PHỤ KIỆN',
      image: phukien,
      alt: 'Phụ Kiện'
    },
    {
      title: 'SỬA CHỮA',
      image: suachua, 
      alt: 'Sửa Chữa'
    }
  ];

  return (
    <div className="text-center my-10">
      <h2 className="text-2xl font-bold mb-8">DANH MỤC SẢN PHẨM NỔI BẬT</h2>
      <div className="flex flex-wrap justify-center gap-10">
        {categories.map((category, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center w-36">
            <img
              src={category.image}
              alt={category.alt}
              className="w-36 h-36 object-cover"
            />
            <h3 className="mt-4 text-lg font-semibold">{category.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DanhMucNB;
