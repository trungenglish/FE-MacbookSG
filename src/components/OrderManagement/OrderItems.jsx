import {FiShoppingBag} from "react-icons/fi";

const OrderItems = ({ orders }) => {

    const filterOrdersByTabs = (orders, activeTab) => {
        if (activeTab === "all") {
            return orders;
        }
        return orders.filter((order) => order.status === activeTab);
    }

    return(
        <>
            {orders.length > 0 ? (
                <div className="space-y-8">
                    {orders.map((order) => (
                        <div key={order._id} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-200">
                            <div className="flex justify-between items-center mb-6">
                                <div>
                                    <span className="font-semibold text-lg">Mã đơn hàng: {order._id}</span>
                                    <span className="mx-4 text-gray-300">|</span>
                                    {/* Format createdAt to local time */}
                                    <span className="text-gray-500">{new Date(order.createdAt).toLocaleString()}</span>
                                </div>
                                <span className={`px-6 py-2 rounded-full text-sm font-medium ${
                                    order.status === "processing" ? "bg-orange-100 text-orange-600" :
                                        order.status === "shipping" ? "bg-green-100 text-green-600" :
                                            "bg-gray-100 text-gray-600"
                                }`}>
                                    {order.status === "đang xử lý" ? "Đang xử lý" :
                                        order.status === "đang vận chuyển" ? "Đang vận chuyển" : "Khác"}
                                </span>
                            </div>

                            {order.products.map((product, index) => (
                                <div key={index} className="border-t border-gray-100 pt-6">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-6">
                                            <img
                                                src={product.productDetails.images[0]}
                                                alt={product.name}
                                                className="w-24 h-24 object-cover rounded-xl"
                                            />
                                            <div>
                                                <h3 className="font-semibold text-lg text-gray-800">{product.name}</h3>
                                                <p className="text-gray-500 mt-2">
                                                    Phân loại: {product.color}, {product.storage}
                                                </p>
                                                <p className="text-gray-500 mt-1">
                                                    Số lượng: {product.quantity}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-semibold text-lg text-gray-800">
                                                {product.price.toLocaleString()}đ
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <div className="border-t border-gray-100 mt-6 pt-6 flex justify-between items-center">
                                <button className="text-orange-600 hover:text-orange-700 font-medium">Xem chi tiết</button>
                                <div>
                                    <span className="text-gray-500">Tổng tiền:</span>
                                    <span className="ml-3 text-xl font-semibold text-gray-800">
                                        {order.totalPrice.toLocaleString()}đ
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-16 bg-white rounded-2xl shadow-md">
                    <div className="w-28 h-28 bg-orange-50 rounded-full mx-auto mb-6 flex items-center justify-center">
                        <FiShoppingBag className="w-14 h-14 text-orange-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">Chưa có đơn hàng</h3>
                    <p className="text-gray-500 mb-6">
                        Bạn chưa có đơn hàng nào. Hãy mua sắm ngay!
                    </p>
                    <button
                        onClick={() => navigate("/homepage")}
                        className="px-8 py-3 bg-orange-600 text-white rounded-xl hover:bg-orange-700 transition-colors duration-200 shadow-md hover:shadow-lg font-medium">
                        Tiếp tục mua sắm
                    </button>
                </div>
            )}
        </>

    )
}

export default OrderItems;