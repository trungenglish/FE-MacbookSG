import React from 'react';
import productImage from '../../../assets/product.jpg';
import cartIcon from '../../../assets/giohang.jpg';

const HotSale = () => {
  const products = [
    {
      name: "Macbook Pro M1 - 99%",
      originalPrice: "16.800.000 đ",
      salePrice: "15.000.000 đ",
      image: productImage,
    },
    {
      name: "Macbook Pro M1 - 99%",
      originalPrice: "16.800.000 đ",
      salePrice: "15.000.000 đ",
      image: productImage,
    },
    {
      name: "Macbook Pro M1 - 99%",
      originalPrice: "16.800.000 đ",
      salePrice: "15.000.000 đ",
      image: productImage,
    },
    {
      name: "Macbook Pro M1 - 99%",
      originalPrice: "16.800.000 đ",
      salePrice: "15.000.000 đ",
      image: productImage,
    },
  ];

  return (
    <section className="bg-red-500 py-6 px-4 rounded-lg max-w-7xl mx-auto">
      <h2 className="text-white text-4xl font-bold mb-6 text-center">
        HOT SALE CUỐI TUẦN
      </h2>

      {/* Chỉ lướt ngang trên thiết bị di động */}
      <div className="flex space-x-6 overflow-x-auto py-4 md:grid md:grid-cols-4 md:space-x-0 md:gap-6">
        {products.map((product, index) => (
          <div 
            key={index} 
            className="min-w-[250px] md:min-w-0 bg-white rounded-lg p-6 shadow-lg flex-shrink-0 transform hover:scale-105 transition duration-300 ease-in-out"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover mb-4 rounded-md"
            />
            <h3 className="text-gray-800 font-semibold text-lg mb-2">{product.name}</h3>
            <p className="text-gray-500 line-through mb-1">{product.originalPrice}</p>
            <p className="text-red-500 font-bold text-xl mb-4">{product.salePrice}</p>
            <img src={cartIcon} alt="Cart" className="h-5 w-5 mx-auto" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HotSale;
