import { PrismaClient } from "@prisma/client"
import Image from "next/image"

let prisma = new PrismaClient()

export default async function Detail(props:any) {

    let id = props.params.id
    let result = await prisma.card.findUnique({
        where : {
            id : BigInt(id)
        }
    })

    return (
        <>
        <div className="relative top-32 text-custom-white w-3/4 mx-auto"> 
            <div className="flex w-full justify-between">
                <div className="w-[48%] mr-8 box-border">
                    <div className="relative w-full aspect-square">
                        {result?.image_url ? <Image src={result?.image_url} alt="커버 이미지" className="rounded-lg" fill/> : <p>이미지가 없습니다</p>}
                    </div>
                </div>
                <div className="w-[52%] pl-8 border-l border-custom-white/50">
                    <div className="pb-3 border-b border-custom-white/50">
                        <div className="text-2xl font-semibold mb-1">{result?.title}</div>
                        <div className="text-custom-white">{result?.artist}</div>
                    </div>
                    <div className="py-4 border-b border-custom-white/50">
                        <div className="text-xl font-semibold mb-5">Information</div>
                        <ul className="w-full">
                            <li className="flex justify-between w-full mb-3">
                                <div className="text-custom-white font-light">발매일</div>
                                <div className="font-light">{result?.release_date?.toLocaleDateString()}</div>
                            </li>
                        </ul>
                        <ul className="w-full">
                            <li className="flex justify-between w-full mb-3">
                                <div className="text-custom-white font-light">발매사</div>
                                <div className="font-light">{result?.release_company}</div>
                            </li>
                        </ul>
                        <ul className="w-full">
                            <li className="flex justify-between w-full mb-3">
                                <div className="text-custom-white font-light">장르</div>
                                <div className="font-light">{result?.genre}</div>
                            </li>
                        </ul>
                        <ul className="w-full">
                            <li className="flex justify-between w-full mb-3">
                                <div className="text-custom-white font-light">제조국</div>
                                <div className="font-light">{result?.country}</div>
                            </li>
                        </ul>
                        <ul className="w-full">
                            <li className="flex justify-between w-full mb-3">
                                <div className="text-custom-white font-light">타입</div>
                                <div className="font-light">{result?.type}</div>
                            </li>
                        </ul>
                        <ul className="w-full">
                            <li className="flex justify-between w-full mb-3">
                                <div className="text-custom-white font-light">추가정보</div>
                                <div className="font-light">{result?.description}</div>
                            </li>
                        </ul>
                        <ul className="w-full">
                            <li className="flex justify-between w-full mb-3">
                                <div className="text-custom-white font-light">최근거래가</div>
                                <div className="font-light">{result?.price?.toLocaleString()}원</div>
                            </li>
                        </ul>
                    </div>
                    <div className="flex justify-between items-center gap-4 my-4">
                        <button className="border w-full h-12 box-border border-custom-pink box rounded-lg text-custom-pink">
                            판매
                        </button>
                        <button className="border w-full h-12 box-border border-custom-pink box rounded-lg bg-custom-pink text-black">
                            구매
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}