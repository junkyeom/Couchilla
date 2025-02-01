import Image from "next/image";
import Link from "next/link";

export default function ByGenre() {

    return(
        <div className="grid grid-cols-6 gap-7">
            <div>
                <Image
                    src="/genre/keung.jpg"
                    alt="Example"
                    width={160}
                    height={160}
                    className="object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-200"
                />
                <div className="text-sm text-gray-400 text-center mt-2">
                    인디
                </div>
            </div>
            <div>
                <Image
                    src="/genre/keung.jpg"
                    alt="Example"
                    width={160}
                    height={160}
                    className="object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-200"
                />
                <div className="text-sm text-gray-400 text-center mt-2">
                    EMO
                </div>
            </div>
        </div>
    )
}

// 1109
// 160*6
// 마진 30*5 