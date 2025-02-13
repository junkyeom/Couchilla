import HomeCarousel from "@/components/home/carousels/home-carousel";
import Carousel from "@/components/home/carousels/main-carousel";
import Link from "next/link";
import ByGenre from "@/components/home/by-genre";
import GridCarousel from "@/components/home/carousels/grid-carousel";

export default function Home() {
  return (
    <div>
      <div>
        <Carousel/>
      </div>
      <div className="flex justify-center">
        <div className="w-4/5 mt-28">
          <div>
            <p className="text-xl text-white font-anton">
              Winter Vibes: Cozy R&B
            </p>
            <p className="text-2xl text-custom-pink font-bold font-noto mt-1">
              추운 겨울, 따뜻한 R&B
            </p>
            <div className="mt-6">
              <HomeCarousel filter="genre"/>
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
          <div className="mt-24">
            <p className="text-xl text-white font-anton">
              Goods
            </p>
            <p className="text-2xl text-custom-pink font-bold font-noto mt-1">
              음악을 담은 굿즈
            </p>
            <div className="mt-6">
              <GridCarousel filter="type"/>
            </div>
          </div>
          <div className="mt-24">
            <p className="text-xl text-white font-anton">
              The Black Skirts
            </p>
            <p className="text-2xl text-custom-pink font-bold font-noto mt-1">
              검정치마
            </p>
            <div className="mt-6">
              <HomeCarousel filter="artist"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
