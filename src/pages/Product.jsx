import ProductList from "../components/Product/ProductList.jsx";
import Filter from "../components/Product/Fiilter.jsx";

const Product = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="container mx-auto px-4 py-8">

                {/* Phần Bộ lọc và sắp xếp */}
                <Filter />
                {/* Danh sách sản phẩm */}
                <ProductList />
            </div>
        </div>
    );
}

export default Product;


