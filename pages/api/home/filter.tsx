import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

let prisma = new PrismaClient() 

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    // let session = await getServerSession(req, res, authOptions);
    // if(session) {
    //     console.log(session)
    // } else {
    //     console.log("세션 없음")
    // }

    if(req.method === "POST") {
        let data:any[] =[];
        let type = req.body?.type

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
                    type : "Goods"
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