import Image from "next/image";
import Link from "next/link";

export default function ByGenre() {

    return(
        <div className="grid grid-cols-7 grid-rows-2 gap-6">
            <div>
                <Image
                    src="/genre/team_baby.jpg"
                    alt="Example"
                    width={500}
                    height={500}
                    className="object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-400"
                />
                <div className="text-sm text-gray-400 text-center mt-2">
                    인디
                </div>
            </div>
            <div>
                <Image
                    src="/genre/oohyo.jpg"
                    alt="Example"
                    width={500}
                    height={500}
                    className="object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-400"
                />
                <div className="text-sm text-gray-400 text-center mt-2">
                    알앤비
                </div>
            </div>
            <div>
                <Image
                    src="/genre/sos_genre.png"
                    alt="Example"
                    width={500}
                    height={500}
                    className="object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-400"
                />
                <div className="text-sm text-gray-400 text-center mt-2">
                    R&B/Soul
                </div>
            </div>
            <div>
                <Image
                    src="/genre/get_up.png"
                    alt="Example"
                    width={500}
                    height={500}
                    className="object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-400"
                />
                <div className="text-sm text-gray-400 text-center mt-2">
                    팝/댄스
                </div>
            </div>
            <div>
                <Image
                    src="/genre/divide.png"
                    alt="Example"
                    width={500}
                    height={500}
                    className="object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-400"
                />
                <div className="text-sm text-gray-400 text-center mt-2">
                    POP
                </div>
            </div>
            <div>
                <Image
                    src="/genre/no_pain.png"
                    alt="Example"
                    width={500}
                    height={500}
                    className="object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-400"
                />
                <div className="text-sm text-gray-400 text-center mt-2">
                    록/메탈
                </div>
            </div>
            <div>
                <Image
                    src="/genre/nevermind.png"
                    alt="Example"
                    width={500}
                    height={500}
                    className="object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-400"
                />
                <div className="text-sm text-gray-400 text-center mt-2">
                    Rock/Metal
                </div>
            </div>
            <div>
                <Image
                    src="/genre/love_yerin.png"
                    alt="Example"
                    width={500}
                    height={500}
                    className="object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-400"
                />
                <div className="text-sm text-gray-400 text-center mt-2">
                    발라드
                </div>
            </div><div>
                <Image
                    src="/genre/love_lee.png"
                    alt="Example"
                    width={500}
                    height={500}
                    className="object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-400"
                />
                <div className="text-sm text-gray-400 text-center mt-2">
                    포크/어쿠스틱
                </div>
            </div><div>
                <Image
                    src="/genre/chopin.jpg"
                    alt="Example"
                    width={500}
                    height={500}
                    className="object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-400"
                />
                <div className="text-sm text-gray-400 text-center mt-2">
                    재즈/클래식
                </div>
            </div>
            <div>
                <Image
                    src="/genre/freethebeast.png"
                    alt="Example"
                    width={500}
                    height={500}
                    className="object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-400"
                />
                <div className="text-sm text-gray-400 text-center mt-2">
                    힙합
                </div>
            </div>
            <div>
                <Image
                    src="/genre/mbdtf.jpg"
                    alt="Example"
                    width={500}
                    height={500}
                    className="object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-400"
                />
                <div className="text-sm text-gray-400 text-center mt-2">
                    Hip-Hop
                </div>
            </div>
            <div>
                <Image
                    src="/genre/keung.jpg"
                    alt="Example"
                    width={500}
                    height={500}
                    className="object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-400"
                />
                <div className="text-sm text-gray-400 text-center mt-2">
                    EMO
                </div>
            </div>
            <div>
                <Image
                    src="/genre/szme.png"
                    alt="Example"
                    width={500}
                    height={500}
                    className="object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-400"
                />
                <div className="text-sm text-gray-400 text-center mt-2">
                    J-Pop
                </div>
            </div>
        </div>
    )
}

// 1109
// 500*6
// 마진 30*5 