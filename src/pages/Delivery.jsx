
const DeliveryPage = () => {
    return (
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md mt-10">
            <h1 className="text-2xl font-bold mb-4 text-gray-800">Chính Sách Vận Chuyển</h1>
            <h2 className="text-xl font-semibold mb-2 text-gray-700">Chính Sách Giao Nhận Hàng</h2>
            <ol className="list-decimal list-inside mb-4">
                <li className="mb-4">
                    <strong>Chính sách giao hàng của các đơn hàng mua Online (web/app/chat/call)</strong>
                    <p className="mt-2">
                        Nhằm mang đến sự lựa chọn phù hợp nhất cho khách hàng, iTech Mobile triển khai 2 hình thức giao
                        hàng Online:
                        <ul className="list-disc list-inside ml-4">
                            <li>Giao hàng nhanh: Nhận hàng trong 4 tiếng - 6 tiếng</li>
                            <li>Giao hàng tiêu chuẩn: Nhận hàng trong 2-5 ngày</li>
                        </ul>
                    </p>
                    <p className="mt-2">
                        Tùy vào chính sách hỗ trợ riêng ở mỗi thời điểm, sản phẩm và địa điểm khách nhận hàng,
                        đơn hàng sẽ thể hiện hình thức vận chuyển và mức phí cuối cùng khác nhau.
                    </p>
                    <p className="italic text-gray-600 mt-2">
                        Xin lưu ý thời gian vận chuyển có thể bị chậm trễ phụ thuộc vào đơn vị vận chuyển. iTech Mobile
                        cam kết thời gian tối đa không quá 7 ngày làm việc đối với vận chuyển trong nước và 15 ngày làm
                        việc đối với vận chuyển quốc tế. Rất mong quý khách thấu hiểu và thông cảm.
                    </p>
                </li>
                <li className="mb-4">
                    <strong>Chính sách giao hàng của các đơn hàng ship đi Tỉnh ngoài TP.HCM</strong>
                    <ul className="list-disc list-inside ml-4">
                        <li>
                            Khách thanh toán full 100% giá trị máy: Cửa hàng hỗ trợ 100% phí ship.
                        </li>
                        <li>
                            Khách có nhu cầu thanh toán cod: Cọc trước ít nhất 3 triệu. Số tiền cod không quá 20 triệu.
                            Trường hợp hàng hóa trên 20 triệu thì khách chuyển khoản trước phần chênh lệch vượt quá 20
                            triệu.
                        </li>
                    </ul>
                    <p className="mt-2">{"=> Phí vận chuyển bên cửa hàng chịu 50% => Phí cod khách chịu 100%."}</p>
                    <p className="italic text-gray-600 mt-2">
                        Lưu ý: Trước khi đóng gói hàng chúng tôi luôn quay video về tình trạng sản phẩm và gửi cho
                        khách hàng. Quý khách vui lòng kiểm tra video trước khi lên đơn hoặc yêu cầu cung cấp video về
                        tình trạng sản phẩm. Mọi thắc mắc khiếu nại khi nhận hàng vui lòng liên hệ Hotline 0879.987.789.
                    </p>
                </li>
                <li className="mb-4">
                    <strong>Quy trình giao nhận hàng</strong>
                    <ul className="list-disc list-inside ml-4">
                        <li>Mở gói hàng và đối chiếu hàng hóa với hóa đơn tính tiền.</li>
                        <li>Kiểm tra sản phẩm thực tế có đúng với sản phẩm mà khách hàng đã đặt mua hay không.</li>
                        <li>Kiểm tra bao bì và sản phẩm có bị hư hại do quá trình vận chuyển hay không.</li>
                        <li>Quay video clip quá trình khui kiểm tra hàng.</li>
                    </ul>
                    <p className="italic text-gray-600 mt-2">
                        Nếu không hài lòng với 1 trong 3 điều trên, Khách hàng có thể yêu cầu Nhân viên giao hàng xác nhận và trả lại hàng hoặc liên hệ hotline 0879.987.789 để giải quyết khiếu nại.
                    </p>
                    <p className="italic text-gray-600 mt-2">
                        iTech Mobile sẽ không chịu trách nhiệm giải quyết khiếu nại về việc thiếu hàng hoặc giao sai hàng của Khách hàng sau khi Khách hàng đã ký nhận và thanh toán.
                    </p>
                </li>
            </ol>
        </div>
    );
}

export default DeliveryPage;