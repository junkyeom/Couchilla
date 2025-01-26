
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
  const res = await prisma.card.update({
    where: {
      id : 1
    },
    data: {
      description : "공홈 미개봉 매물"
    }
  })
  return Response.json('ok!')
}