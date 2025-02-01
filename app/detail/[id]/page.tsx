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
        <div className="relative top-32 text-white w-3/4 mx-auto"> 
            <div className="flex w-full justify-between">
                <div className="w-5/12 mr-16 box-border">
                    <div className="relative w-full aspect-square ">
                        {result?.image_url ? <Image src={result?.image_url} alt="커버 이미지" className="rounded-lg" fill/> : <p>이미지가 없습니다</p>}
                    </div>
                </div>
                <div className="w-7/12">
                    <p>{result?.title}</p>
                    <p>{result?.artist}</p>
                    <p>{result?.type}</p>
                    <p>{result?.genre}</p>
                    <p>{result?.condition}</p>
                    <p>{result?.description}</p>
                    <p>{result?.price}</p>
                </div>
            </div>
        </div>
    )
}