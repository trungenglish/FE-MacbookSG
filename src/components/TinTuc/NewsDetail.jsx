import React from 'react';
import { useParams } from 'react-router-dom';

const NewsDetail = () => {
    const { id } = useParams();

    const articles = [
        {
            id: 1,
            title: 'Tin đồn dòng iPhone 17 Series sẽ có màn hình ProMotion 120hz',
            subtitle: 'iPhone 17 Series màn hình ProMotion 120hz',
            author: 'Lan Hương',
            date: '04/11/2024',
            image: 'https://cdn.tgdd.vn/Files/2021/10/18/1391441/anhdaubai_1280x720-800-resize.jpg',
            content: [
                `Theo thông tin từ ETNews của Hàn Quốc, tất cả bốn mẫu iPhone 17 Series ra mắt vào năm tới sẽ được trang bị màn hình ProMotion với tốc độ làm mới lên đến 120Hz. Mặc dù báo cáo chưa xác nhận điều này một cách chính thức, việc áp dụng công nghệ LTPO có thể cho thấy khả năng tin đồn này sẽ trở thành hiện thực.`,

                `**iPhone 17 dự kiến sẽ trang bị màn hình LTPO và ProMotion**`,

                `Tính năng ProMotion đã được giới hạn ở các mẫu Pro kể từ khi ra mắt trên iPhone 13 Pro và iPhone 13 Pro Max vào năm 2021. Việc mở rộng màn hình ProMotion 120Hz này sang iPhone 17 Series sẽ là một bước tiến đáng chú ý. Theo thông tin, Samsung và LG sẽ cung cấp màn hình LTPO cho tất cả các mẫu iPhone 17.`,

                `Công nghệ LTPO (polycrystalline oxide nhiệt độ thấp) giúp tiết kiệm năng lượng cho màn hình OLED, cho phép điều chỉnh tốc độ làm mới mà không tiêu tốn nhiều điện năng, từ đó đảm bảo tính năng ProMotion không ảnh hưởng tiêu cực đến tuổi thọ pin.`
            ],
            // image: 'https://www.didongmy.com/vnt_upload/news/06_2022/man-hinh-iphone-14-60hz-didongmy.jpg', // Thêm hình ảnh trong content dưới dạng Markdown
            //
            // content: [
            //
            //     `Màn hình với ProMotion mang lại trải nghiệm video và cuộn mượt mà hơn. Tính năng này cũng cho phép iPhone 17 và "iPhone 17 Air" giảm tốc độ làm mới để tiết kiệm điện. Các mẫu iPhone 13 Pro có thể giảm xuống 10Hz, trong khi các mẫu iPhone 14 Pro đến iPhone 16 Pro có thể giảm xuống 1Hz, giúp màn hình luôn bật hiển thị những thành phần của Màn hình khóa ngay cả khi thiết bị đang bị khóa.`,
            //
            //     `Giảm tốc điều hành của Display Supply Chain Consultants, Ross Young, đã chia sẻ với MacRumors rằng iPhone 17 và "iPhone 17 Air" có thể sẽ hỗ trợ ProMotion và việc mở rộng tính năng này sang toàn bộ dòng iPhone 17 đã được bàn luận nhiều lần.`
            // ],

            source: 'macrumors'
        },
        {
            id: 2,
            title: 'Samsung công bố S24 Ultra với tính năng vượt trội mang tính cách mạng',
            image: 'https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:quality(100)/2023_8_3_638266588013687420_galaxy-s24-ultra.jpg',
            content: ['Samsung Galaxy S24 Ultra được giới thiệu với nhiều tính năng mới mẻ...'],
        },
        {
            id: 3,
            title: 'IOS 18, bản cập nhật iOS mới nhất của Apple có gì mới?',
            image: 'https://tttctt.1cdn.vn/2024/09/18/image(9).png',
            content: ['Apple chính thức ra mắt bản cập nhật IOS 18 với các tính năng cải tiến...'],
        },
        // Thêm các bài viết khác tại đây
    ];

    const article = articles.find((item) => item.id === parseInt(id));

    if (!article) return <p>Bài viết không tồn tại.</p>;

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-2">{article.title}</h1>
            <h2 className="text-lg text-gray-500 mb-2">{article.subtitle}</h2>
            <div className="flex items-center text-gray-500 mb-4">
                <p className="mr-4">Bởi {article.author}</p>
                <p>{article.date}</p>
            </div>
            <img src={article.image} alt={article.title} className="w-full h-64 object-cover rounded-lg mb-4" />
            <div className="text-lg text-gray-700 whitespace-pre-line mb-4">
                {article.content.map((paragraph, index) => (
                    <p key={index} className="mb-4">{paragraph}</p>
                ))}
            </div>
            <p className="text-sm text-gray-500 mt-4">Nguồn tin: {article.source}</p>
        </div>
    );
};

export default NewsDetail;