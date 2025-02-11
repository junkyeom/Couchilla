import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

let prisma = new PrismaClient()

export default async function handler(req:NextApiRequest, res:NextApiResponse) {

    if(req.method === "GET") {
        let data:any[] =[];
        
        console.log(req.body)

        if(req.body == "genre") {
            data = await prisma.card.findMany({
                where : {
                    genre : {
                        contains : "R&B/Soul",
                        mode : "insensitive",
                    }
                }
            })
        } else if(req.body == "artist") {
            data = await prisma.card.findMany({
                where : {
                    artist : {
                        contains : "검정치마",
                        mode : "insensitive",
                    }
                }
            })
        }
        
        const normalizedData = data.map(item=>({
            ...item,
            id: item.id.toString(), // BigInt 필드에 대해서 toString() 사용
        }));
        console.log(normalizedData)
        return res.status(200).json(normalizedData)
    }
}