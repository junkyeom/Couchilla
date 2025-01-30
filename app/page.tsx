'use client'

import SeasonCarousel from "@/components/carousels/season-carousel";
import Carousel from "@/components/main-carousel";
import Test from "@/components/test";

export default function Home() {
  return (
    <div>
      <div>
        <Carousel/>
      </div>
      <div className="flex justify-center">
        <div className="w-[85%]">
          <div className="m-8 mt-32">
            <p className="text-2xl text-white font-anton">
              Winter Vibes: Cozy R&B
            </p>
            <p className="text-3xl text-custom-pink font-bold font-noto mt-2">
              추운 겨울, 따뜻한 R&B
            </p>
            <div className="my-8">
              <SeasonCarousel/>
            </div>
          </div>
          <div className="m-8 mt-32">
            <p className="text-2xl text-white font-anton">
              Explore by Genre
            </p>
            <p className="text-3xl text-custom-pink font-bold font-noto mt-2">
              장르별 모아보기
            </p>
            <Test/>
          </div>
        </div>
      </div>
    </div>
  );
}
