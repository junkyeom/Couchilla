'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';

export default function Carousel() {
    return (
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination
          className="relative w-full h-[400px]"
        >
          <SwiperSlide className="relative">
            <div className='relative w-full h-full'>
                <Image
                src="/crsl/crsl-1.jpg"
                alt="Slide 1"
                fill
                objectFit="cover"
                />
            <div className="absolute bottom-0 left-0 mb-4 ml-8 transform text-white text-xl font-bold">
              <p>슬라이드 1 텍스트</p>
            </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <div className='relative w-full h-full'>
                <Image
                    src="/crsl/crsl-2.jpg"
                    alt="Slide 1"
                    fill
                    objectFit="cover"
                />
            <div className="absolute bottom-0 left-0 mb-4 ml-8 transform text-white text-xl font-bold">
              <p>슬라이드 2 텍스트</p>
            </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <div className='relative w-full h-full'>
                <Image
                    src="/crsl/crsl-2.jpg"
                    alt="Slide 1"
                    fill
                    objectFit="cover"
                />
            <div className="absolute bottom-0 left-0 mb-4 ml-8 transform text-white text-xl font-bold">
              <p>슬라이드 3 텍스트</p>
            </div>
            </div>
          </SwiperSlide>
        </Swiper>
      );
}