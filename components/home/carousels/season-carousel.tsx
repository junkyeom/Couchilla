import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

export default function SeasonCarousel() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={60}
      slidesPerView={4} 
      navigation 
      loop={true} 
      autoplay={{ delay: 3000, disableOnInteraction: false }}
    >
      <SwiperSlide>
        <div className="aspect-[1/1]" >
            <div className="w-full h-full relative group overflow-hidden">
                <Image
                    src="/thumb/blonde.png" 
                    alt="blonde" 
                    fill
                    className="transition-transform duration-100 transform group-hover:scale-110"
                />
            </div>
            <div className="text-center mt-4 font-noto">
                <p className="text-white text-lg line-clamp-2">
                    Frank Ocean - Blonde (2023)
                </p>
                <div className="mt-4">
                    <p className="text-white">
                        구매가
                    </p>
                    <p className="text-white">
                        250,000원
                    </p>
                </div>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="aspect-[1/1]" >
            <div className="w-full h-full relative group overflow-hidden">
                <Image 
                    src="/thumb/sos.png" 
                    alt="blonde" 
                    fill
                    className="transition-transform duration-100 transform group-hover:scale-110"
                />
            </div>
            <div className="text-center mt-4 font-noto">
                <p className="text-white text-lg line-clamp-2">
                    SZA - SOS
                </p>
                <div className="mt-4">
                    <p className="text-white">
                        구매가
                    </p>
                    <p className="text-white">
                        320,000원
                    </p>
                </div>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="aspect-[1/1]" >
            <div className="w-full h-full relative group overflow-hidden">
                <Image 
                    src="/thumb/freudian.png" 
                    alt="blonde" 
                    fill
                    className="transition-transform duration-100 transform group-hover:scale-110"
                />
            </div>
            <div className="text-center mt-4 font-noto">
                <p className="text-white text-lg line-clamp-2">
                    Daniel Caesar - Fredian (Blue)
                </p>
                <div className="mt-4">
                    <p className="text-white ">
                        구매가
                    </p>
                    <p className="text-white">
                        117,200원
                    </p>
                </div>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="aspect-[1/1]" >
            <div className="w-full h-full relative group overflow-hidden">
                <Image 
                    src="/thumb/gabriel.png" 
                    alt="blonde" 
                    fill
                    className="transition-transform duration-100 transform group-hover:scale-110"
                />
            </div>
            <div className="text-center mt-4 font-noto">
                <p className="text-white text-lg line-clamp-2">
                    Keshi - Gabriel (Red Translucent)
                </p>
                <div className="mt-4">
                    <p className="text-white">
                        구매가
                    </p>
                    <p className="text-white">
                        55,000원
                    </p>
                </div>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="aspect-[1/1]" >
            <div className="w-full h-full relative group overflow-hidden">
                <Image 
                    src="/thumb/orange.png" 
                    alt="blonde" 
                    fill
                    className="transition-transform duration-100 transform group-hover:scale-110"
                />
            </div>
            <div className="text-center mt-4 font-noto">
                <p className="text-white text-lg line-clamp-2">
                    Emotional Oranges - The Juice Vol. 2
                </p>
                <div className="mt-4">
                    <p className="text-white">
                        구매가
                    </p>
                    <p className="text-white">
                        60,000원
                    </p>
                </div>
            </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}