import { PrismaClient } from "@prisma/client"
import Image from "next/image"
import Link from "next/link"

let prisma = new PrismaClient();

export default async function Recommand({tag, currentId}:any) {

    let result = await prisma.card.findMany({
        where : {
            tag : {
                contains : tag,
                mode : "insensitive"
            },
            NOT: {
                id: currentId, // 현재 페이지의 앨범 ID 제외
            },
        }
    })

    return (
        <div className="">
            <div className="text-white text-lg mb-4">
                관련 추천 앨범
            </div>
            <div className="grid grid-cols-4 gap-4">
            {result && result.length > 0 ? result.map((a:any,i:number)=>(
                <Link href={"/detail/"+a.id} key={i}>
                <div className="w-full h-[400px]">
                    <div className="w-full aspect-square relative group overflow-hidden">
                        <Image
                            src={a.image_url || "/thumb/default_image.png"} 
                            alt={a.title || "no image"}
                            fill
                            className="transition-transform rounded-lg duration-100 transform group-hover:scale-110"
                        />
                    </div>
                    <div className="text-center mt-4 font-noto">
                        <p className="text-white text-lg h-14 line-clamp-2">
                            {a.artist.split("(")[0]} - {a.title} {a.edition ? <span>({a.edition})</span> : null}
                        </p>
                        <div className="mt-4">
                            <p className="text-gray-400 text-sm">
                                구매가
                            </p>
                            <p className="text-white">
                                {a.price?.toLocaleString() || " - "}원
                            </p>
                        </div>
                    </div>
                </div>
                </Link>
            )) : <div className="text-white">추천 앨범이 없습니다.</div>}
            </div>
        </div>
    )
}