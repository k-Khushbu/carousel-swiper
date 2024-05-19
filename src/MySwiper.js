// src/components/MySwiper.js

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css';

// Import Swiper styles
import 'swiper/css';

// Import Swiper styles for specific modules (optional)
// import 'swiper/components/navigation/navigation.min.css';
// import 'swiper/components/pagination/pagination.min.css';

// Import Swiper React components
import { Navigation, Pagination } from 'swiper/modules';
import SwiperCore from 'swiper';

// Install Swiper modules
SwiperCore.use([Navigation, Pagination]);

const MySwiper = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <div>Slide 1</div>
      </SwiperSlide>
      <SwiperSlide>
        <div>Slide 2</div>
      </SwiperSlide>
      <SwiperSlide>
        <div>Slide 3</div>
      </SwiperSlide>
      <SwiperSlide>
        <div>Slide 4</div>
      </SwiperSlide>
    </Swiper>
  );
};

export default MySwiper;
