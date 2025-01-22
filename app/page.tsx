import Carousel from "@/components/carousel";

export default function Home() {
  return (
    <div>
      <div>
        <Carousel/>
      </div>
      <div>
        <div className="m-8 mt-32">
          <p className="text-2xl text-white font-anton">
            Winter Vibes: Cozy R&B
          </p>
          <p className="text-3xl text-custom-pink font-bold font-noto mt-2">
            추운 겨울, 따뜻한 R&B
          </p>
        </div>
      </div>
    </div>
  );
}
