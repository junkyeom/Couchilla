'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function SeasonCarousel() {

    let [seasonVal, setSeasonVal] = useState<any>(null);

    useEffect(()=>{
        fetch('/api/home/season',{method : "GET", headers : { 'Cache-Control': 'no-cache'}})
        .then(r=>r.json())
        .then(r=>{
            if(r) {
                setSeasonVal(r);
            }
        })
    },[])
    
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={60}
      slidesPerView={4} 
      navigation 
      loop={true} 
      autoplay={{ delay: 3000, disableOnInteraction: false }}
    >
        {
        seasonVal && seasonVal.length > 0 ? (seasonVal.map((result:any)=>(
            <SwiperSlide key={result.id}>
            <Link href={"/detail/"+result.id}>
            <div className="aspect-[1/1]" >
                <div className="w-full h-full relative group overflow-hidden">
                    <Image
                        src={result.image_url} 
                        alt={result.title}
                        fill
                        className="transition-transform duration-100 transform group-hover:scale-110"
                    />
                </div>
                <div className="text-center mt-4 font-noto">
                    <p className="text-white text-lg line-clamp-2">
                        {result.title}
                    </p>
                    <div className="mt-4">
                        <p className="text-white">
                            구매가
                        </p>
                        <p className="text-white">
                            {result.price.toLocaleString()}원
                        </p>
                    </div>
                </div>
            </div>
            </Link>
          </SwiperSlide>
        )) 
    ): (<p>데이터 없음</p>)}
    </Swiper>



    // <Swiper
    //   modules={[Navigation, Pagination, Autoplay]}
    //   spaceBetween={60}
    //   slidesPerView={4} 
    //   navigation 
    //   loop={true} 
    //   autoplay={{ delay: 3000, disableOnInteraction: false }}
    // >
    //   <SwiperSlide>
    //     <Link href="/detail/2">
    //     <div className="aspect-[1/1]" >
    //         <div className="w-full h-full relative group overflow-hidden">
    //             <Image
    //                 src="/thumb/blonde.png" 
    //                 alt="blonde" 
    //                 fill
    //                 className="transition-transform duration-100 transform group-hover:scale-110"
    //             />
    //         </div>
    //         <div className="text-center mt-4 font-noto">
    //             <p className="text-white text-lg line-clamp-2">
    //                 Frank Ocean - Blonde (2023)
    //             </p>
    //             <div className="mt-4">
    //                 <p className="text-white">
    //                     구매가
    //                 </p>
    //                 <p className="text-white">
    //                     250,000원
    //                 </p>
    //             </div>
    //         </div>
    //     </div>
    //     </Link>
    //   </SwiperSlide>
    //   <SwiperSlide>
    //   <Link href="detail/1">
    //   <div className="aspect-[1/1]" >
    //         <div className="w-full h-full relative group overflow-hidden">
    //             <Image 
    //                 src="/thumb/sos.png" 
    //                 alt="sos" 
    //                 fill
    //                 className="transition-transform duration-100 transform group-hover:scale-110"
    //             />
    //         </div>
    //         <div className="text-center mt-4 font-noto">
    //             <p className="text-white text-lg line-clamp-2">
    //                 SZA - SOS
    //             </p>
    //             <div className="mt-4">
    //                 <p className="text-white">
    //                     구매가
    //                 </p>
    //                 <p className="text-white">
    //                     320,000원
    //                 </p>
    //             </div>
    //         </div>
    //     </div>
    //     </Link>
    //   </SwiperSlide>
    //   <SwiperSlide>
    //   <Link href="detail/7">
    //   <div className="aspect-[1/1]" >
    //         <div className="w-full h-full relative group overflow-hidden">
    //             <Image 
    //                 src="/thumb/freudian.png" 
    //                 alt="fredian" 
    //                 fill
    //                 className="transition-transform duration-100 transform group-hover:scale-110"
    //             />
    //         </div>
    //         <div className="text-center mt-4 font-noto">
    //             <p className="text-white text-lg line-clamp-2">
    //                 Daniel Caesar - Fredian (Blue)
    //             </p>
    //             <div className="mt-4">
    //                 <p className="text-white ">
    //                     구매가
    //                 </p>
    //                 <p className="text-white">
    //                     117,200원
    //                 </p>
    //             </div>
    //         </div>
    //     </div>
    //   </Link>
    //   </SwiperSlide>
    //   <SwiperSlide>
    //   <div className="aspect-[1/1]" >
    //         <div className="w-full h-full relative group overflow-hidden">
    //             <Image 
    //                 src="/thumb/gabriel.png" 
    //                 alt="gabriel" 
    //                 fill
    //                 className="transition-transform duration-100 transform group-hover:scale-110"
    //             />
    //         </div>
    //         <div className="text-center mt-4 font-noto">
    //             <p className="text-white text-lg line-clamp-2">
    //                 Keshi - Gabriel (Red Translucent)
    //             </p>
    //             <div className="mt-4">
    //                 <p className="text-white">
    //                     구매가
    //                 </p>
    //                 <p className="text-white">
    //                     55,000원
    //                 </p>
    //             </div>
    //         </div>
    //     </div>
    //   </SwiperSlide>
    //   <SwiperSlide>
    //   <div className="aspect-[1/1]" >
    //         <div className="w-full h-full relative group overflow-hidden">
    //             <Image 
    //                 src="/thumb/orange.png" 
    //                 alt="the juice vol.2" 
    //                 fill
    //                 className="transition-transform duration-100 transform group-hover:scale-110"
    //             />
    //         </div>
    //         <div className="text-center mt-4 font-noto">
    //             <p className="text-white text-lg line-clamp-2">
    //                 Emotional Oranges - The Juice Vol. 2
    //             </p>
    //             <div className="mt-4">
    //                 <p className="text-white">
    //                     구매가
    //                 </p>
    //                 <p className="text-white">
    //                     60,000원
    //                 </p>
    //             </div>
    //         </div>
    //     </div>
    //   </SwiperSlide>
    // </Swiper>
  );
}