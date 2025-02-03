import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

let prisma = new PrismaClient()

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    if(req.method === "GET") {
        let data = await prisma.card.findMany({
            where : {
                genre : {
                    contains : "R&B/Soul",
                    mode : "insensitive",
                }
            }
        })

        const normalizedData = data.map(item=>({
            ...item,
            id: item.id.toString(), // BigInt 필드에 대해서 toString() 사용
        }));
        return res.status(200).json(normalizedData)
    }
}