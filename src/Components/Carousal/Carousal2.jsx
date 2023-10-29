import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Carousal.css';

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

export default function Carousal() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://mothernature.vn/wp-content/uploads/2020/06/banner-matong.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.vectorstock.com/i/preview-1x/14/34/natural-honey-horizontal-web-banner-vector-45811434.jpg" />
        </SwiperSlide>
      
        {/* <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}
