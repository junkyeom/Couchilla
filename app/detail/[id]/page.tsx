import { PrismaClient } from "@prisma/client"

export default async function Detail({ params }: { params: { id: string } }) {

    console.log(params.id)

    return (
        <div>
            안녕하세요
        </div>
    )
}