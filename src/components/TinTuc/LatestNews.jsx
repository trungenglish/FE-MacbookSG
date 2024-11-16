import React from 'react';

const LatestNews = () => {
    const latestArticles = [
        {
            id: 1,
            title: 'Apple ra mắt M4 Pro và M4 Max với tối đa 16 lõi CPU và 40 lõi GPU, hiệu năng “out trình” chip AI PC',
            image: 'https://9to5mac.com/wp-content/uploads/sites/6/2024/10/M4-MacBook-Pro-production-appears-well-underway.webp',
            description: 'Apple mới đây đã chính thức công bố MacBook Pro mới và được trang bị các chip M4, M4 Pro và M4 Max...',
            author: 'Trần Minh Trí',
            date: '31/10/2024 11:26',
        },
        {
            id: 2,
            title: 'Trên tay Itel P55: Hơn 2 triệu có màn hình 90Hz, 8GB RAM và cụm camera giống iPhone 16 Pro Max!',
            image: 'https://i1-sohoa.vnecdn.net/2024/10/30/thumb-6867-1730255548.jpg?w=680&h=0&q=100&dpr=2&fit=crop&s=qAHQoiZG9kuxrMw2s22__w',
            description: 'Trên tay Itel P55, một mẫu smartphone giá rẻ có 8 GB, mượt mà nhờ tần số quét cao, pin trâu lên đến 5.000 mAh...',
            author: 'Nguyễn Trần Phương Linh',
            date: '31/10/2024 10:35',
        },
        {
            id: 3,
            title: 'Xiaomi TV S Mini LED 2025 ra mắt: Độ phân giải 4K 144Hz, kích thước tới 75 inch, giá từ 16 triệu đồng',
            image: 'https://cdn-media.sforum.vn/storage/app/media/lelong/Screenshot-2024-10-30-093434.jpg',
            description: 'Xiaomi TV S Mini LED 2025 là dòng TV cao cấp, sở hữu thiết kế đẹp mắt, thông số ấn tượng và mức giá hấp dẫn...',
            author: 'Trung code',
            date: '31/10/2024 07:58',
        },
        {
            id: 4,
            title: 'Xiaomi 15 có thêm phiên bản Custom Color có thể cá nhân hóa với 20 màu sắc và 40 sự kết hợp khác nhau',
            image: 'https://cdn.mobilecity.vn/mobilecity-vn/images/2024/10/mo-hop-xiaomi-15-snap8e-13.jpg.webp',
            description: 'Xiaomi mới đây vừa giới thiệu một phiên bản tùy chỉnh Xiaomi 15 Custom Color mới, chỉ có cấu hình RAM 16GB...',
            author: 'Anh Hung',
            date: '31/10/2024 07:52',
        },
    ];

    return (
        <section className="container mx-auto py-8">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
                TIN TỨC MỚI NHẤT
                <span className="w-10 h-1 bg-red-500 ml-2"></span>
            </h3>
            <div className="space-y-6">
                {latestArticles.map((article) => (
                    <div key={article.id} className="flex bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                        <img src={article.image} alt={article.title} className="w-1/3 h-48 object-cover" />
                        <div className="p-4 w-2/3">
                            <h4 className="text-lg font-bold mb-2">{article.title}</h4>
                            <p className="text-gray-700 mb-3">{article.description}</p>
                            <div className="flex items-center text-sm text-gray-500">
                                <span>{article.author}</span>
                                <span className="mx-2">•</span>
                                <span>{article.date}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default LatestNews;