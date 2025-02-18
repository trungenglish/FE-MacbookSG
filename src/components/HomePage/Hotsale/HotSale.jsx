import React from 'react';
import cartIcon from '../../../assets/giohang.jpg';

const HotSale = ({ products }) => {
  return (
      <section className="bg-red-500 py-6 px-4 rounded-lg max-w-7xl mx-auto">
        <h2 className="text-white text-4xl font-bold mb-6 text-center">
          HOT SALE CUỐI TUẦN
        </h2>

        {/* Chỉ hiển thị tối đa 5 sản phẩm */}
        <div className="flex space-x-6 overflow-x-auto py-4 md:grid md:grid-cols-4 md:space-x-0 md:gap-6">
          {products.slice(0, 5).map((product) => (
              <div
                  key={product._id}
                  className="min-w-[250px] md:min-w-0 bg-white rounded-lg p-6 shadow-lg flex-shrink-0 transform hover:scale-105 transition duration-300 ease-in-out"
              >
                <img
                    src={product.idPro.images && product.idPro.images.length > 0 ? product.idPro.images[0] : cartIcon}
                    alt={product.name}
                    className="w-full h-40 object-cover mb-4 rounded-md"
                />
                <h3 className="text-gray-800 font-semibold text-lg mb-2">{product.idPro.name} - {product.discount}%</h3>
                <p className="text-gray-500 line-through mb-1">
                  {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price)}
                </p>
                <p className="text-red-500 font-bold text-xl mb-4">
                  {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.priceAfterDiscount)}
                </p>
                <img src={cartIcon} alt="Cart" className="h-5 w-5 mx-auto" />
              </div>
          ))}
        </div>
      </section>
  );
};

export default HotSale;
