import { PrismaClient } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

let prisma = new PrismaClient();

type PageParams = Promise<{tag : string}>

export default async function Search({ params }: { params: PageParams }) {
    // params가 비동기적으로 처리되도록 수정
    const { tag } = await params;

    // URL 인코딩 처리
    let tagDecoded = decodeURIComponent(tag);

    // DB에서 검색 수행
    let result = await prisma.card.findMany({
        where: {
            OR: [
                { title: { contains: tagDecoded, mode: "insensitive" } }, 
                { artist: { contains: tagDecoded, mode: "insensitive" } },
                { type: { contains: tagDecoded, mode: "insensitive" } }, 
                { tag: { contains: tagDecoded, mode: "insensitive" } }
            ]
        }
    });

    return (
        <div className="relative top-32 pb-32 w-4/5 mx-auto">
            <div className="text-white text-center mb-16 text-2xl">
                <span className="text-custom-pink font-bold">{tagDecoded}</span>에 대한 검색결과 입니다.
            </div>
            <div className="mb-4 text-white">
                전체 <span className="text-custom-pink font-bold">{result.length}</span> 개
            </div>
            <div className="grid grid-cols-4 gap-6">
                {result && result.length > 0 ? result.map((a: any, i: number) => (
                    <Link href={"/detail/" + a.id} key={i}>
                        <div className="w-full h-[425px]">
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
                                    <p className="text-gray-400 text-base">
                                        구매가
                                    </p>
                                    <p className="text-white text-lg">
                                        {a.price?.toLocaleString() || " - "}원
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Link>
                )) : <div className="text-white">검색결과가 없습니다</div>}
            </div>
        </div>
    );
}
