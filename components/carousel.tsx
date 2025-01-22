'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';

export default function Carousel() {
    return (
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          pagination={{ clickable: true}}
          loop={true}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false, 
          }}
          modules={[Navigation, Pagination, Autoplay]}
          className="relative w-full h-[600px] top-4"
        >
          <SwiperSlide className="relative">
            <div className='relative w-full h-full'>
                <Image
                src="/crsl/crsl-1.jpg"
                alt="Slide 1"
                fill
                className='object-cover'
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 mb-4 ml-8 transform text-white text-xl font-bold">
              <p>Free Hukky Shibaseki & the God Sun Symphony Group : Odyssey.1</p>
            </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <div className='relative w-full h-full'>
                <Image
                    src="/crsl/crsl-2.png"
                    alt="Slide 1"
                    fill
                    className='object-cover'
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 mb-4 ml-8 transform text-white text-xl font-bold">
              <p>슬라이드 2 텍스트</p>
            </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <div className='relative w-full h-full'>
                <Image
                    src="/crsl/crsl-3.jpg"
                    alt="Slide 1"
                    fill
                    className='object-cover'
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 mb-4 ml-8 transform text-white text-xl font-bold">
              <p>캐러셀 3</p>
            </div>
            </div>
          </SwiperSlide>
        </Swiper>
      );
}