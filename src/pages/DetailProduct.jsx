import { useState } from "react";
import iphone16 from "../assets/iphone16.jpg";
import gioHang from "../assets/giohang.jpg";
import arrowLeft from "../assets/arrow-left-50.png";
import arrowRight from "../assets/arrow-right-50.png";

const DetailProduct = () => {
    const [selectedStorage, setSelectedStorage] = useState('256GB');
    const [selectedColor, setSelectedColor] = useState('Titan xanh');
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [iphone16, iphone16, iphone16]; // List of images

    const storageOptions = [
        { label: '256GB', price: '32.000.000 ₫' },
        { label: '512GB', price: '38.000.000 ₫' },
        { label: '1TB', price: '45.000.000 ₫' },
    ];

    const colorOptions = [
        { label: 'Titan xanh', price: '32.000.000 ₫' },
        { label: 'Titan đen', price: '31.000.000 ₫' },
        { label: 'Titan trắng', price: '32.500.000 ₫' },
        { label: 'Titan tự nhiên', price: '32.500.000 ₫' },
    ];

    const handleStorageClick = (storage) => setSelectedStorage(storage);
    const handleColorClick = (color) => setSelectedColor(color);

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const handleThumbnailClick = (index) => {
        setCurrentImageIndex(index);
    };

    return (
        <>
            <div className="max-w-7xl mx-auto mt-4 p-4 bg-white flex flex-col md:flex-row gap-4">
                {/* Left Column - Product Image */}
                <div className="w-full md:w-1/2 flex flex-col items-center relative">
                    <img src={images[currentImageIndex]} alt="Product" className="w-full h-full max-w-md mb-4"/>

                    {/* Navigation Arrows */}
                    <button onClick={handlePrevImage}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full">
                        <img src={arrowLeft}/>
                    </button>
                    <button onClick={handleNextImage}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full">
                        <img src={arrowRight}/>
                    </button>

                    {/* Thumbnail Images */}
                    <div className="flex gap-2 mt-2">
                        {images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Thumbnail ${index + 1}`}
                                onClick={() => handleThumbnailClick(index)}
                                className={`w-16 h-16 cursor-pointer ${currentImageIndex === index ? 'border-2 border-red-500' : 'border border-gray-300'}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Right Column - Product Options */}
                <div className="w-full md:w-1/2 flex flex-col gap-4">
                    {/* Storage Options */}
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Chọn dung lượng bộ nhớ trong</h3>
                        <div className="flex gap-2 flex-wrap">
                            {storageOptions.map((option) => (
                                <button
                                    key={option.label}
                                    onClick={() => handleStorageClick(option.label)}
                                    className={`p-2 border rounded ${selectedStorage === option.label ? 'border-red-500 text-red-500' : 'border-gray-300'}`}
                                >
                                    {option.label} <br/> <span className="text-sm font-medium">{option.price}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Color Options */}
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Chọn màu sắc yêu thích</h3>
                        <div className="flex gap-2 flex-wrap">
                            {colorOptions.map((option) => (
                                <button
                                    key={option.label}
                                    onClick={() => handleColorClick(option.label)}
                                    className={`p-2 border rounded ${selectedColor === option.label ? 'border-red-500 text-red-500' : 'border-gray-300'}`}
                                >
                                    {option.label} <br/> <span className="text-sm font-medium">{option.price}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 h-auto">
                            <button className="bg-red-600 text-white w-full py-4 px-8 rounded-2xl font-semibold">MUA
                                NGAY
                            </button>
                            <button
                                className="border-4 border-red-500 rounded-lg p-1 w-1/6 h-16 flex flex-col items-center justify-center">
                                <img src={gioHang} alt="Cart" className="w-6 h-6"/>
                                <span className="text-red-500 text-xs font-semibold mt-1">thêm vào giỏ</span>
                            </button>
                        </div>
                        <div className="flex items-center gap-2">
                            <button
                                className="bg-blue-600 h-full w-1/2 rounded-2xl text-white py-2 font-semibold">TRẢ
                                GÓP 0% <br/> <span className="text-xs">Trả trước chỉ từ 15.000.000</span></button>
                            <button
                                className="bg-blue-600 h-full w-1/2 rounded-2xl text-white py-2 font-semibold">Trả
                                góp 0% qua thẻ tín dụng
                            </button>
                        </div>
                    </div>

                    {/* Trade-in Offer */}
                    <div className="bg-orange-400 text-white h-auto p-3 rounded-2xl text-center font-medium">
                        Thu cũ lên đời được trợ giá 60%
                    </div>
                </div>
            </div>

            <div className="justify-center max-mx-auto mt-4 p-4 bg-white flex flex-col md:flex-row gap-4">
                <div className="flex gap-2 p-4 space-x-3">
                    <span className="text-xl p-3 border-2 rounded-lg font-semibold ">Mô tả</span>
                    <span className="text-xl p-3 border-2 rounded-lg font-semibold ">Thông số kỹ thuật</span>
                    <span className="text-xl p-3 border-2 rounded-lg font-semibold ">Đánh giá sản phẩm</span>
                </div>
            </div>
            <div className="justify-center max-mx-auto my-4 p-4 bg-white flex flex-col md:flex-row gap-4">
                <span>Cấu hình & Bộ nhớ</span>
                <span>Hệ điều hành: IOS 18</span>
            </div>
        </>

    );
};

export default DetailProduct;
