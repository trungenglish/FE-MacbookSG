import {useContext, useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import { getProductById } from "../service/api/productApi.js";
import TechnicalSpecs from "../components/Product/TechnicalSpecs.jsx";
import arrowLeft from "../assets/arrow-left-50.png";
import arrowRight from "../assets/arrow-right-50.png";
import gioHang from "../assets/giohang.jpg";
import {notification, Spin} from "antd";
import {CartContext} from "../components/context/CartContext.jsx";

const DetailProduct = () => {
    const navigate = useNavigate();
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [appLoading, setAppLoading] = useState(false);
    const [selectedStorage, setSelectedStorage] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [selectedTab, setSelectedTab] = useState("specs");
    const [groupedVariants, setGroupedVariants] = useState({});
    const [currentPrice, setCurrentPrice] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            setAppLoading(true);
            const res = await getProductById(productId);
            setProduct(res.data);

            // Group variants by storage
            const variants = res.data.variants || [];
            const grouped = variants.reduce((acc, variant) => {
                const storage = variant.storage;
                if (!acc[storage]) acc[storage] = [];
                acc[storage].push(variant);
                return acc;
            }, {});
            setGroupedVariants(grouped);

            // Set default storage, color, and price based on the first available variant
            const initialStorage = Object.keys(grouped)[0];
            const initialColor = grouped[initialStorage]?.[0].color;
            const initialPrice = grouped[initialStorage]?.[0].priceAfterDiscount;

            setSelectedStorage(initialStorage);
            setSelectedColor(initialColor);
            setCurrentPrice(initialPrice);

            setAppLoading(false);
        };
        fetchProduct();
    }, [productId]);

    console.log("variant", product)

    // Update price when selected storage and color change
    useEffect(() => {
        if (selectedStorage && selectedColor) {
            const variant = groupedVariants[selectedStorage]?.find(variant => variant.color === selectedColor);
            if (variant) {
                setCurrentPrice(variant.priceAfterDiscount);
            }
        }
    }, [selectedStorage, selectedColor, groupedVariants]);

    const handleStorageClick = (storage) => {
        setSelectedStorage(storage);
        setSelectedColor(groupedVariants[storage]?.[0].color); // Reset to the first color of the selected storage
    };

    const handleColorClick = (color) => setSelectedColor(color);

    const {dispatch} = useContext(CartContext);

    const handleAddToCart = () => {
        if (selectedStorage && selectedColor) {
            // Tìm biến thể chính xác dựa vào dung lượng và màu sắc đã chọn
            const selectedVariant = groupedVariants[selectedStorage]?.find(
                variant => variant.color === selectedColor
            );

            if (selectedVariant) {
                notification.success({
                    message: "Thêm vào giỏ hàng thành công",
                    description: `${product.mainProduct.name} (${selectedStorage}, ${selectedColor}) đã được thêm vào giỏ hàng`,
                    placement: "topRight",
                    duration: 2,
                });

                dispatch({
                    type: "ADD_TO_CART",
                    payload: {
                        ...selectedVariant,
                        idPro: {
                            name: product.mainProduct.name,
                            images: [ product.mainProduct.images[0]]
                        },
                    },
                });
            } else {
                notification.error({
                    message: "Lỗi",
                    description: "Không tìm thấy biến thể sản phẩm",
                    placement: "topRight",
                    duration: 2,
                });
            }
        } else {
            notification.warning({
                message: "Chọn biến thể",
                description: "Vui lòng chọn dung lượng và màu sắc trước khi thêm vào giỏ hàng",
                placement: "topRight",
                duration: 2,
            });
        }
    };

    if (appLoading) {
        return (
            <div style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)"
            }}>
                <Spin />
            </div>
        );
    }

    if (!product) {
        return <div>Product not found!</div>;
    }

    return (
        <>
            <div className="max-w-7xl mx-auto mt-4 p-4 bg-white flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/2 flex flex-col items-center relative">
                    <img
                        src={product.mainProduct?.images[currentImageIndex] || ""}
                        alt="Product"
                        className="w-full h-full max-w-md mb-4"
                    />
                    <button
                        onClick={() => setCurrentImageIndex((currentImageIndex - 1 + product.mainProduct?.images.length) % product.mainProduct?.images.length)}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full">
                        <img src={arrowLeft} alt="Previous"/>
                    </button>
                    <button
                        onClick={() => setCurrentImageIndex((currentImageIndex + 1) % product.mainProduct?.images.length)}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full">
                        <img src={arrowRight} alt="Next"/>
                    </button>

                    {/* Thumbnails for image selection */}
                    <div className="flex mt-4 space-x-2">
                        {product.mainProduct?.images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt="Thumbnail"
                                className={`w-16 h-16 cursor-pointer ${currentImageIndex === index ? 'border-2 border-red-500' : 'border border-gray-300'}`}
                                onClick={() => setCurrentImageIndex(index)}
                            />
                        ))}
                    </div>
                </div>

                <div className="w-full md:w-1/2 flex flex-col gap-4">
                    <div className="text-2xl font-bold text-gray-800 truncate">{product.mainProduct?.name}</div>

                    {/* Display Current Price */}
                    {currentPrice && (
                        <div className="text-3xl font-semibold text-red-500">
                            {currentPrice.toLocaleString()}đ
                        </div>
                    )}

                    <div>
                        <h3 className="text-lg font-semibold mb-2">Chọn dung lượng bộ nhớ trong</h3>
                        <div className="flex gap-2 flex-wrap">
                            {Object.keys(groupedVariants).map((storage) => (
                                <button
                                    key={storage}
                                    onClick={() => handleStorageClick(storage)}
                                    className={`p-2 border rounded ${selectedStorage === storage ? 'border-red-500 text-red-500' : 'border-gray-300'}`}
                                >
                                    {storage}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-2">Chọn màu sắc</h3>
                        <div className="flex gap-2 flex-wrap">
                            {selectedStorage && groupedVariants[selectedStorage].map((variant) => (
                                <button
                                    key={variant.color}
                                    onClick={() => handleColorClick(variant.color)}
                                    className={`p-2 border rounded ${selectedColor === variant.color ? 'border-red-500 text-red-500' : 'border-gray-300'}`}
                                >
                                    {variant.color}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 h-auto">
                            <button
                                onClick={() => {
                                    handleAddToCart();
                                    navigate(`/cart`)
                                }}
                                className="bg-red-600 text-white w-full py-4 px-8 rounded-2xl font-semibold">
                                MUA NGAY
                            </button>
                            <button
                                onClick={handleAddToCart}
                                className="border-2 border-red-500 rounded-lg p-1 w-1/5 h-16 flex flex-col items-center justify-center
                                    transform transition-transform duration-200 hover:scale-110">
                                <img src="https://bizweb.dktcdn.net/100/344/969/themes/705911/assets/carts.svg?1719463671033" alt="Cart" className=" w-6 h-6"/>
                                <span className="text-red-500 text-xs font-semibold mt-1">thêm vào giỏ</span>
                            </button>
                        </div>
                        <div className="flex items-center gap-2">
                            <button className="bg-blue-600 h-full w-1/2 rounded-2xl text-white py-2 font-semibold">TRẢ
                                GÓP 0% <br/> <span className="text-xs">Trả trước chỉ từ 15.000.000</span></button>
                            <button className="bg-blue-600 h-full w-1/2 rounded-2xl text-white py-2 font-semibold">Trả
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
                    <span onClick={() => setSelectedTab("description")}
                          className={`text-xl p-3 border-2 rounded-lg font-semibold cursor-pointer ${selectedTab === "description" ? "border-red-500 text-red-500" : ""}`}>Mô tả</span>
                    <span onClick={() => setSelectedTab("specs")}
                          className={`text-xl p-3 border-2 rounded-lg font-semibold cursor-pointer ${selectedTab === "specs" ? "border-red-500 text-red-500" : ""}`}>Thông số kỹ thuật</span>
                    <span onClick={() => setSelectedTab("reviews")}
                          className={`text-xl p-3 border-2 rounded-lg font-semibold cursor-pointer ${selectedTab === "reviews" ? "border-red-500 text-red-500" : ""}`}>Đánh giá sản phẩm</span>
                </div>
            </div>

            {/* Tab Content */}
            {selectedTab === "specs" && <TechnicalSpecs product={product} />}
            {selectedTab === "description" && <div className="p-4">{product.mainProduct?.description}</div>}
            {selectedTab === "reviews" && <div className="p-4">Hiện chưa có đánh giá nào!</div>}
        </>
    );
};

export default DetailProduct;
