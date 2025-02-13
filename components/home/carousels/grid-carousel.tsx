'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import { Grid, Navigation } from "swiper/modules";
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function GridCarousel({ filter } :any) {

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
      <>
        <Swiper
          modules={[Grid, Navigation]}
          slidesPerView={3}
          grid={{
            rows: 2,
            fill : 'row'
          }}
          spaceBetween={30}
          navigation
          className='mx-auto w-full h-full'
        >
          {
        filterVal && filterVal.length > 0 ? (filterVal.map((result:any)=>(
            <SwiperSlide key={result.id}>
            <Link href={"/detail/"+result.id}>
            <div className='flex'>
                <div className="w-2/5 aspect-[1/1]">
                    <div className="w-full h-full relative group overflow-hidden">
                        <Image
                            src={result.image_url} 
                            alt={result.title}
                            fill
                            className="transition-transform duration-100 transform group-hover:scale-110 rounded-lg"
                        />
                    </div>
                </div>
                <div className="w-3/5 pl-4 mt-4 font-noto">
                    <p className="text-white text-base h-15 line-clamp-2">
                        {result.artist.split("(")[0]} - {result.title} 
                        {result.edition ? <span> ({result.edition})</span> : null}
                    </p>
                    <div className="mt-4">
                        <p className="text-gray-400 text-sm">
                            구매가
                        </p>
                        <p className="text-white text-base">
                            {result.price.toLocaleString()}원
                        </p>
                    </div>
                </div>
            </div>
            </Link>
          </SwiperSlide>
        )) 
    ): (<div className="text-white text-center text-lg">굿즈를 가져오는 중입니다...</div>)}
        </Swiper>
      </>
    );
  }