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
    console.log(result)

    return (
        <div className="relative top-24 text-white">
            <div>
                <p>{result?.title}</p>
                <p>{result?.artist}</p>
                <p>{result?.type}</p>
                <p>{result?.genre}</p>
                <p>{result?.condition}</p>
                <p>{result?.description}</p>
                <p>{result?.price}</p>
                {result?.image_url ? <Image src={result?.image_url} alt="커버 이미지" width={500} height={500}/> : <p>이미지가 없습니다</p>}
            </div>
        </div>
    )
}