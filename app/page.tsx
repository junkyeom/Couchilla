'use client'

import SeasonCarousel from "@/components/home/carousels/season-carousel";
import Carousel from "@/components/home/carousels/main-carousel";
import Test from "@/components/test";
import Detail from "./detail/[id]/page";
import Link from "next/link";
import ByGenre from "@/components/home/by-genre";

export default function Home() {
  return (
    <div>
      <div>
        <Carousel/>
      </div>
      <div className="flex justify-center">
        <div className="w-4/5 mt-4">
          <div className="mt-24">
            <p className="text-xl text-white font-anton">
              Winter Vibes: Cozy R&B
            </p>
            <p className="text-2xl text-custom-pink font-bold font-noto mt-1">
              추운 겨울, 따뜻한 R&B
            </p>
            <div className="mt-6">
              <SeasonCarousel/>
            </div>
          </div>
          <div className="mt-24">
            <p className="text-xl text-white font-anton">
              Explore by Genre
            </p>
            <p className="text-2xl text-custom-pink font-bold font-noto mt-2">
              장르별 모아보기
            </p>
            <div className="mt-6">
              <ByGenre/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
