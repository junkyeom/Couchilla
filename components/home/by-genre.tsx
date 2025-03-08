import Image from "next/image";
import Link from "next/link";

export default function ByGenre() {

    return(
        <div className="grid grid-cols-7 grid-rows-2 gap-6">
  {[
    { href: "/search/인디", src: "/genre/team_baby.jpg", label: "인디" },
    { href: "/search/알앤비", src: "/genre/oohyo.jpg", label: "알앤비" },
    { href: "/search/rnb", src: "/genre/sos_genre.png", label: "R&B/Soul" },
    { href: "/search/팝댄스", src: "/genre/get_up.png", label: "팝/댄스" },
    { href: "/search/pop", src: "/genre/divide.png", label: "POP" },
    { href: "/search/록메탈", src: "/genre/no_pain.png", label: "록/메탈" },
    { href: "/search/rockmetal", src: "/genre/nevermind.png", label: "Rock/Metal" },
    { href: "/search/발라드", src: "/genre/love_yerin.png", label: "발라드" },
    { href: "/search/포크%2F어쿠스틱", src: "/genre/love_lee.png", label: "포크/어쿠스틱" },
    { href: "/search/재즈%2F클래식", src: "/genre/chopin.jpg", label: "재즈/클래식" },
    { href: "/search/힙합", src: "/genre/freethebeast.png", label: "힙합" },
    { href: "/search/hiphop", src: "/genre/mbdtf.jpg", label: "Hip-Hop" },
    { href: "/search/emo", src: "/genre/keung.jpg", label: "EMO" },
    { href: "/search/jp", src: "/genre/szme.png", label: "J-Pop" },
  ].map(({ href, src, label }) => (
    <Link key={href} href={href}>
      <div>
        <Image
          src={src}
          alt={label}
          width={500}
          height={500}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-400"
        />
        <div className="text-sm text-gray-400 text-center mt-2">{label}</div>
      </div>
    </Link>
  ))}
</div>
    )
}

// 1109
// 500*6
// 마진 30*5 