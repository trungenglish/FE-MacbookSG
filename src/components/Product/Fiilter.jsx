import {FaFilter} from "react-icons/fa";
import React from "react";

const Filter = ({ filter, setFilter }) => {

    return (
        <div className="my-4 p-4 bg-white shadow-md rounded-lg flex justify-between items-center">
            {/* Thay button "Bộ lọc" bằng khung xám có icon */}
            <div
                className="flex items-center bg-gray-200 p-2 rounded-md hover:bg-black hover:text-white cursor-pointer">
                <FaFilter className="mr-2"/> {/* Icon kế bên chữ "Bộ lọc" */}
                <span>Bộ lọc</span>
            </div>

            <div className="flex space-x-4">
                <button className="bg-gray-200 p-2 rounded-md hover:bg-black hover:text-white">
                    Mặc định
                </button>
                <button className="bg-gray-200 p-2 rounded-md hover:bg-black hover:text-white">
                    Từ Giá thấp đến cao
                </button>
                <button className="bg-gray-200 p-2 rounded-md hover:bg-black hover:text-white">
                    Từ Giá cao đến thấp
                </button>
            </div>
        </div>
    )
}

export default Filter;