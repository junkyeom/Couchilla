'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { Grid ,Navigation, Autoplay } from "swiper/modules";
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function GridCarousel({ filter } :any) {

    let [filterVal, setfilterVal] = useState<any>(null);

    useEffect(()=>{
        fetch('/api/auth/route',{
            method : "POST", 
            headers : {
                "Content-Type": "application/json",
                // "Cache-Control": "no-cache"
            }, 
            body : JSON.stringify({email : "jaypark1234@naver.com", password : "jaypark1324"})
        })
        .then(r=>r.json())
        .then(r=>{
            // if(r) {
            //     setfilterVal(r);
            // }
            console.log(r)
        })
    },[])

    return (
      <>
        {/* <Swiper
          slidesPerView={3}
          grid={{
            rows: 2,
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Grid, Navigation]}
          className="mySwiper"
        >
          {
        filterVal && filterVal.length > 0 ? (filterVal.map((result:any)=>(
            <SwiperSlide key={result.id}>
            <Link href={"/detail/"+result.id}>
            <div className="aspect-[1/1]" >
                <div className="w-full h-full relative group overflow-hidden">
                    <Image
                        src={result.image_url} 
                        alt={result.title}
                        fill
                        className="transition-transform duration-100 transform group-hover:scale-110 rounded-lg"
                    />
                </div>
                <div className="text-center mt-4 font-noto">
                    <p className="text-white text-lg line-clamp-2">
                        {result.artist.split("(")[0]} - {result.title} 
                        {result.edition ? <span> ({result.edition})</span> : null}
                    </p>
                    <div className="mt-4">
                        <p className="text-gray-400 text-sm">
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
    ): (<div className="text-white text-center text-lg">앨범을 가져오는 중입니다...</div>)}
        </Swiper> */}
      </>
    );
  }