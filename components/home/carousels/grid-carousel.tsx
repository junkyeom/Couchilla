'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import { Autoplay, Grid, Navigation } from "swiper/modules";
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function GridCarousel({ filter } :any) {

    let [filterVal, setFilterVal] = useState<any>(null);

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
                setFilterVal(r);
            }
        })
    },[])

    return (
      <>
        { filterVal && filterVal.length > 0 ? (
        <Swiper
          modules={[Grid, Navigation]}
          slidesPerView={3}
          breakpoints={{
            640: { slidesPerView: 1, grid: { rows: 2, fill: 'row' } },
            768: { slidesPerView: 2, grid: { rows: 2, fill: 'row' } },
            1024: { slidesPerView: 3, grid: { rows: 2, fill: 'row' } },
          }}
          spaceBetween={30}
          navigation
          className='mx-auto w-full h-full'
        >
        {
        filterVal.map((result:any, index:number)=>(
            <SwiperSlide key={result.id}>
            <Link href={"/detail/"+result.id}>
            <div className='flex'>
                <div className="w-2/5 aspect-[1/1]">
                    <div className="w-full h-full relative group overflow-hidden">
                        <Image
                            src={result.image_url} 
                            alt={result.title}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="transition-transform duration-100 transform group-hover:scale-110 rounded-lg"
                            priority={index===0}
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
    }
        </Swiper>) : (<div>잠시만요</div>)}
      </>
    );
  }


//   filterVal && filterVal.length > 0 ? 

{/* <div className="text-white text-center text-lg">굿즈를 가져오는 중입니다...</div> */}
