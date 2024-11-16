import React from 'react';
import { useNavigate } from 'react-router-dom';

const FeaturedNews = () => {
    const navigate = useNavigate();

    const articles = [
        {
            id: 1,
            title: 'Apple công bố iPhone 16 với nhiều cải tiến',
            image: 'https://i.ytimg.com/vi/enh6Mvce__s/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDwKHmy3syB09E9SYDcxm_5J65pRA',
            summary: 'iPhone 16 được trang bị chip mới và camera nâng cấp, mang lại hiệu suất vượt trội.',
        },
        {
            id: 2,
            title: 'Samsung công bố S24 Ultra với tính năng vượt trội mang tính cách mạng',
            image: 'https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:quality(100)/2023_8_3_638266588013687420_galaxy-s24-ultra.jpg',
            summary: '1h00 sáng ngày 18/1 (giờ Việt Nam), sự kiện Galaxy Unpacked 2024 sẽ chính thức được Samsung tổ chức tại trung tâm SAP, San Jose (Mỹ), giới thiệu bộ ba Galaxy S24 series..',
        },
        {
            id: 3,
            title: 'IOS 18, bản cập nhật iOS mới nhất của Apple có gì mới? iPhone nào được cập nhật',
            image: 'https://tttctt.1cdn.vn/2024/09/18/image(9).png',
            summary: 'Apple đã chính thức ra mắt bản cập nhật iOS mới nhất iOS 18 vào lúc 0h ngày 17/9/2024 (theo giờ Việt Nam). Người dùng iPhone tương thích có thể nâng cấp lên iOS 18 thông qua tính năng Cập nhật phần mềm trong cài đặt.',
        },
        {
            id: 4,
            title: 'Công nghệ thu âm cuộc gọi trên Ios 18',
            image: 'https://images2.thanhnien.vn/zoom/700_438/528068263637045248/2024/7/30/1-17223097158781055619616-32-0-632-960-crop-1722309747398729742345.jpg',
            summary: 'Các ứng dụng AI ngày càng được tích hợp sâu vào đời sống, từ y tế đến giáo dục.',
        },
        {
            id: 5,
            title: 'Bộ xử lý M4 Pro có CPU lên đến 14 nhân với 10 lõi hiệu suất và bốn lõi hiệu quả.',
            image: 'https://cdn-media.sforum.vn/storage/app/media/trannghia/Apple-M4-Pro-M4-Max-cover.jpg',
            summary: 'M4 Pro hỗ trợ bộ nhớ hợp nhất lên đến 64GB với băng thông bộ nhớ 273GB/giây, cao hơn 75% so với M3 Pro và gấp đôi băng thông của "bất kỳ chip PC AI nào". Con chip này cũng hỗ trợ Thunderbolt 5, cung cấp tốc độ dữ liệu lên đến 120Gb/giây, cao hơn gấp đôi thông lượng của Thunderbolt 4.',
        },
        {
            id: 6,
            title: 'Coros Pace Pro trình làng với màn hình AMOLED chất lượng cao, vẫn rẻ hơn Garmin Forerunners',
            image: 'https://cdn-media.sforum.vn/storage/app/media/nhattruong/coros-pace-pro-ra-mat-3.jpg',
            summary: 'Coros Pace Pro được định hình để trở thành một ứng cử viên nặng ký khác cho ngôi vương đồng hồ chạy bộ tốt nhất năm 2024. Coros gần đây đã gây ấn tượng mạnh mẽ đến người dùng với những chiếc đồng hồ chất lượng ra mắt liên tục trong các năm gần đây, và Pace Pro cũng là một trong số đó. Đồng hồ được nâng cấp bộ xử lý cho tốc độ nhanh gấp đôi so với Pace 3',
        },
        {
            id: 7,
            title: '5G "đích thực" sẽ vượt trội như thế nào?',
            image: 'https://photo.znews.vn/w960/Uploaded/yqdlcqrwq/2024_10_24/5G_znews_05.jpg',
            summary: 'Tại Việt Nam, Viettel cho biết đang triển khai đồng thời kiến trúc NSA và SA. Theo số liệu tính đến quý I của GSMA, khoảng 312 nhà mạng trên thế giới áp dụng 5G. Trong đó, 95% triển khai hạ tầng 5G NSA, 5% sử dụng đồng thời NSA và SA.',
        },
        {
            id: 8,
            title: 'Công nghệ AI tiếp tục phát triển mạnh mẽ',
            image: 'https://imagev3.vietnamplus.vn/w1000/Uploaded/2024/xpcwvovt/2024_10_01/tri-tue-nhan-tao-resize-7645.jpg.webp',
            summary: 'Trí thông minh nhân tạo AI là công cụ hỗ trợ đắc lực và dễ tiếp cận trong thời đại công nghệ số hiện nay. Đặc biệt, nhiều nền tảng AI hàng đầu thế giới đã bắt đầu hỗ trợ tiếng Việt, mở ra cơ hội cho người dùng Việt Nam tận dụng sức mạnh của công nghệ này. Bài viết này sẽ giới thiệu Top 5 ứng dụng AI hàng đầu có hỗ trợ Tiếng Việt hoàn toàn miễn phí để bạn khám phá và sử dụng',
        },
    ];
    const handleClick = (id) => {
        navigate(`/news/${id}`);
    };

    return (
        <section className="container mx-auto py-8">
            <h3 className="text-2xl font-bold mb-6">Tin Nổi Bật</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {articles.map((article) => (
                    <div
                        key={article.id}
                        onClick={() => handleClick(article.id)}
                        className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105"
                    >
                        <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h4 className="text-xl font-semibold mb-2">{article.title}</h4>
                            <p className="text-gray-600">{article.summary}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedNews;