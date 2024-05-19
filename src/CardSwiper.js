// src/components/CardSwiper.js

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import './CardSwiper.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import Swiper modules
import { Navigation, Pagination } from 'swiper/modules';
import SwiperCore from 'swiper';

// Install Swiper modules
SwiperCore.use([Navigation, Pagination]);

const CardSwiper = () => {
    return (
        <Swiper
            spaceBetween={30}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
        >
            <SwiperSlide>
                <div className="card" style={{ width: '18rem' }}>
                    <img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card 1</h5>
                        <p className="card-text">This is a description for card 1.</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card" style={{ width: '18rem' }}>
                    <img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card 2</h5>
                        <p className="card-text">This is a description for card 2.</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card" style={{ width: '18rem' }}>
                    <img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card 3</h5>
                        <p className="card-text">This is a description for card 3.</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card" style={{ width: '18rem' }}>
                    <img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card 4</h5>
                        <p className="card-text">This is a description for card 4.</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card" style={{ width: '18rem' }}>
                    <img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card 1</h5>
                        <p className="card-text">This is a description for card 1.</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card" style={{ width: '18rem' }}>
                    <img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card 2</h5>
                        <p className="card-text">This is a description for card 2.</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card" style={{ width: '18rem' }}>
                    <img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card 3</h5>
                        <p className="card-text">This is a description for card 3.</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card" style={{ width: '18rem' }}>
                    <img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card 4</h5>
                        <p className="card-text">This is a description for card 4.</p>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default CardSwiper;
