import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

let prisma = new PrismaClient()

export default async function handler(req:NextApiRequest, res:NextApiResponse) {

    if(req.method === "POST") {
        let data:any[] =[];
        let type = req.body?.type

        console.log("타입 : "+type)

        if(type == "genre") {
            data = await prisma.card.findMany({
                where : {
                    genre : {
                        contains : "R&B/Soul",
                        mode : "insensitive",
                    }
                }
            }) || []
        } 
        else if(type == "artist") {
            data = await prisma.card.findMany({
                where : {
                    artist : {
                        contains : "검정치마",
                        mode : "insensitive",
                    }
                }
            }) || []
        } else if(type == "type") {
            data = await prisma.card.findMany({
                where : {
                    type : "GOODS"
                }
            }) || []
        }
        
        const normalizedData = data.map(item=>({
            ...item,
            id: item.id.toString(), // BigInt 필드에 대해서 toString() 사용
        }));
        return res.status(200).json(normalizedData)
    }
}