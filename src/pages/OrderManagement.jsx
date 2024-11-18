

const OrderManagement = () => {
    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-1/4 bg-white shadow-md">
                <div className="p-6 text-lg font-bold">39 Minh Trung</div>
                <nav className="mt-6">
                    <ul>
                        <li className="px-6 py-3 hover:bg-gray-100 text-gray-700">
                            Thông tin tài khoản
                        </li>
                        <li className="px-6 py-3 hover:bg-gray-100 text-gray-700">
                            Sổ địa chỉ
                        </li>
                        <li className="px-6 py-3 hover:bg-red-100 text-red-600 font-semibold">
              <span className="flex items-center">
                <span className="material-icons-outlined mr-2"> Quản lý đơn hàng</span>

              </span>
                        </li>
                        <li className="px-6 py-3 hover:bg-gray-100 text-gray-700">
                            Sản phẩm đã xem
                        </li>
                        <li className="px-6 py-3 hover:bg-gray-100 text-gray-700">
                            Đăng xuất
                        </li>
                    </ul>
                </nav>
            </aside>

            {/* Main content */}
            <main className="flex-1 bg-white shadow-md rounded-md p-6">
                <h1 className="text-xl font-bold border-b pb-3">Quản lý đơn hàng</h1>
                {/* Tabs */}
                <div className="flex mt-4 space-x-4 border-b">
                    {["Tất cả", "Mới", "Đang xử lý", "Đang vận chuyển", "Hoàn thành", "Hủy"].map((tab) => (
                        <button
                            key={tab}
                            className="pb-2 text-gray-600 hover:text-black border-b-2 border-transparent hover:border-black"
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                {/* Search and empty state */}
                <div className="mt-6">
                    <input
                        type="text"
                        placeholder="Tìm đơn hàng theo Mã đơn hàng"
                        className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"
                    />
                    <div className="text-right mt-2 text-blue-500 cursor-pointer">
                        Tìm đơn hàng
                    </div>
                    <div className="mt-12 flex flex-col items-center justify-center text-center">
                        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center">
              <span className="material-icons-outlined text-gray-400 text-5xl">
                search_off
              </span>
                        </div>
                        <p className="text-gray-600 mt-4">Quý khách chưa có đơn hàng nào.</p>
                        <button className="mt-6 bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700">
                            Tiếp tục mua hàng
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default OrderManagement;