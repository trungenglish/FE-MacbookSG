import React from "react";

const TechnicalSpecs = () => {
    return (
        <div className="max-w-screen-md mx-auto bg-white shadow-md p-6">
            <h1 className="text-2xl font-bold mb-6 text-center">Thông số kĩ thuật</h1>

            {/* Màn hình */}
            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-4">Màn hình</h2>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Công nghệ màn hình: LTPO Super Retina XDR OLED Always On Display</li>
                    <li>Kích thước màn hình (inch): 6.1</li>
                    <li>Độ phân giải: 1179 x 2556 pixels</li>
                    <li>Mặt kính cảm ứng: Ceramic Shield</li>
                </ul>
            </section>

            {/* Camera */}
            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-4">Camera</h2>

                {/* Camera sau */}
                <div className="mb-4">
                    <h3 className="text-lg font-medium">Độ phân giải camera sau (MP)</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>TOF 3D LiDAR scanner (depth): 48 MP, f/1.8, 24mm (góc rộng)</li>
                        <li>1/1.28", 1.22µm, dual pixel PDAF, sensor-shift OIS</li>
                        <li>12 MP, f/2.8, 120mm (ống kính tele), 3x optical zoom</li>
                    </ul>
                </div>

                <ul className="list-disc pl-5 space-y-2">
                    <li>Quay phim: 1080p@25/30/60/120/240fps, 4K@24/25/30/60fps</li>
                    <li>Đèn Flash: Có</li>
                    <li>Tính năng: Zoom quang học, Tự động lấy nét (AF), Nhận diện khuôn mặt</li>
                </ul>

                {/* Camera trước */}
                <div className="mt-6">
                    <h3 className="text-lg font-medium">Độ phân giải camera trước (MP)</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>12 MP, f/1.9, 23mm (góc rộng)</li>
                        <li>Videocall: Có</li>
                        <li>Tính năng: HDR, Quay video 4K</li>
                    </ul>
                </div>
            </section>

            {/* Hệ thống lưu trữ */}
            <section>
                <h2 className="text-xl font-semibold mb-4">Hệ thống lưu trữ</h2>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Ram: 8GB</li>
                    <li>Bộ nhớ trong: 256GB</li>
                    <li>Hỗ trợ thẻ nhớ ngoài (MicroSD): Không</li>
                </ul>
            </section>
        </div>
    );
};

export default TechnicalSpecs;