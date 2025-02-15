'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function HomeCarousel({ filter } : any) {

    let [filterVal, setfilterVal] = useState<any>(null);

    useEffect(()=>{
        fetch('/api/home/filter',{
            method : "POST", 
            headers : {
                "Content-Type": "application/json",
                "Cache-Control": "no-cache"
            }, 
            body : JSON.stringify({type : filter})
        })
        .then(r=>r.json())
        .then(r=>{
            if(r) {
                setfilterVal(r);
            }
        })
    },[])
    
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={60}
      slidesPerView={4} 
      loop={true}
      autoplay={{ delay: 3000 , disableOnInteraction: false }}
      navigation
    >
        {
        filterVal && filterVal.length > 0 ? (filterVal.map((result:any)=>(
            <SwiperSlide key={result.id}>
            <Link href={"/detail/"+result.id}>
            <div>
                <div className="aspect-[1/1]" >
                    <div className="w-full h-full relative group overflow-hidden">
                        <Image
                            src={result.image_url} 
                            alt={result.title}
                            fill
                            className="transition-transform duration-100 transform group-hover:scale-110 rounded-lg"
                        />
                    </div>
                </div>
                <div className="text-center mt-4 font-noto">
                    <p className="text-white text-lg h-14 line-clamp-2">
                        {result.artist.split("(")[0]} - {result.title} 
                        {result.edition ? <span> ({result.edition})</span> : null}
                    </p>
                    <div className="mt-4">
                        <p className="text-gray-400 text-base">
                            구매가
                        </p>
                        <p className="text-white text-lg">
                            {result.price.toLocaleString()}원
                        </p>
                    </div>
                </div>
            </div>
            </Link>
          </SwiperSlide>
        )) 
    ): (<div className="text-white text-center text-lg">앨범을 가져오는 중입니다...</div>)}
    </Swiper>
  );
}