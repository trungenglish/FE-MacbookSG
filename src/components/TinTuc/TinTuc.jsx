import React from 'react';
import newsImage from '../../assets/ip13.jpg';

const TinTuc = () => {
  const news = [
    {
      title: 'IPHONE 16 PRO/16 PRO MAX - CÓ GÌ MỚI?',
      description: 'Thông số kỹ thuật chi tiết iPhone 16 Pro/iPhone 16 Pro Max',
      content:
        'Apple vừa ra mắt iPhone 16 Pro và iPhone 16 Pro Max, phiên bản cao cấp trong dòng iPhone với nhiều cải tiến nổi bật về thiết kế và hiệu suất...',
      image: newsImage
    },
    {
      title: 'IPHONE 16 PRO/16 PRO MAX - CÓ GÌ MỚI?',
      description: 'Thông số kỹ thuật chi tiết iPhone 16 Pro/iPhone 16 Pro Max',
      content:
        'Apple vừa ra mắt iPhone 16 Pro và iPhone 16 Pro Max, phiên bản cao cấp trong dòng iPhone với nhiều cải tiến nổi bật về thiết kế và hiệu suất...',
      image: newsImage
    },
    {
      title: 'IPHONE 16 PRO/16 PRO MAX - CÓ GÌ MỚI?',
      description: 'Thông số kỹ thuật chi tiết iPhone 16 Pro/iPhone 16 Pro Max',
      content:
        'Apple vừa ra mắt iPhone 16 Pro và iPhone 16 Pro Max, phiên bản cao cấp trong dòng iPhone với nhiều cải tiến nổi bật về thiết kế và hiệu suất...',
      image: newsImage
    }
  ];

  return (
    <div className="my-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">TIN TỨC VỀ CÔNG NGHỆ</h2>

      {/* Container for responsive design */}
      <div className="overflow-x-auto">
        {/* Inner container for horizontal scrolling on small screens */}
        <div className="flex md:grid md:grid-cols-3 gap-6">
          {news.map((item, index) => (
            <div
              key={index}
              className="min-w-[280px] md:min-w-0 bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <h3 className="text-white text-lg font-semibold text-center px-2">
                    {item.title}
                  </h3>
                </div>
              </div>
              <div className="p-4">
                <h4 className="text-md font-semibold mb-2">{item.description}</h4>
                <p className="text-sm text-gray-700">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TinTuc;
