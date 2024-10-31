import React from 'react'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
import 'swiper/css/navigation'; 
import 'swiper/css/pagination'; 
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; 

import banner1 from '../../assets/banner1.jpg';
import banner2 from '../../assets/banner2.jpg';
import banner3 from '../../assets/banner3.jpg';

const Banner = () => { 
  return (
    <div className="w-full h-auto md:h-[400px] lg:h-[500px] xl:h-[600px]"> 
      {/* Responsive chiều cao: 
            - h-auto cho màn hình nhỏ
            - md:h-[400px] cho màn hình trung bình
            - lg:h-[500px] cho màn hình lớn
            - xl:h-[600px] cho màn hình rất lớn 
      */}
      <Swiper
        spaceBetween={30} 
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={banner1} alt="Banner 1" className="w-full h-full object-cover" /> 
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner2} alt="Banner 2" className="w-full h-full object-cover" /> 
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner3} alt="Banner 3" className="w-full h-full object-cover" /> 
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
