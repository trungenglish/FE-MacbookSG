import {FiSearch} from "react-icons/fi";
import React, {useState} from "react";


const OrderSearchBar = () => {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <div className="flex space-x-4 mb-10">
            <div className="flex-1 relative">
                <input
                    type="text"
                    placeholder="Tìm kiếm đơn hàng theo mã đơn hàng"
                    className="w-full pl-5 pr-12 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent shadow-sm"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <FiSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"/>
            </div>
            <button
                className="px-8 py-3 bg-orange-600 text-white rounded-xl hover:bg-orange-700 transition-colors duration-200 shadow-md hover:shadow-lg font-medium">
                Tìm kiếm
            </button>
        </div>
    )
}

export default OrderSearchBar;