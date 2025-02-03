import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient()

export default async function handler(req:NextApiRequest, res:NextApiResponse) {

    if(req.method === "GET") {
        let data = await prisma.card.findUnique({
            where: {
              id : 4
            } 
          })

          const formattedData = {
            ...data,
            id: data?.id.toString(),
          };
          return res.status(200).json(formattedData)
    }
}