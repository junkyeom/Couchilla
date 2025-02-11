import { PrismaClient } from "@prisma/client"
import Image from "next/image";
import Link from "next/link";

let prisma = new PrismaClient();

export default async function Artist(props:any) {
    let name = decodeURIComponent(props.params.name)
    let result = await prisma.card.findMany({
        where : {
            artist : {
                contains : name,
                mode : "insensitive"
            }
        }
    })  
    return (
        <>
        <div className="relative top-24 w-3/4 mx-auto">
            <div className="relative w-full bg-white h-72 mb-4">
                <div className="absolute left-5 bottom-5 text-2xl text-custom-dark-pink font-semibold">
                    {result[0]?.artist}
                </div>
            </div>
            <div className="mb-4 text-white">
                전체 <span className="text-custom-pink font-bold">{result.length}</span> 개
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
            )) : <div className="text-white">등록된 아티스트 앨범이 없습니다.</div>}
        </div>
    </div>
    </>
    )
}