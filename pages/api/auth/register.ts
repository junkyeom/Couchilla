import { createClient } from "@supabase/supabase-js";
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from 'bcryptjs'
import { PrismaClient } from "@prisma/client";
import { redirect } from "next/dist/server/api-utils";

let prisma = new PrismaClient();

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    if(req.method==="POST") {
        // console.log(req.body)

        let result = req.body;
        const hash = await bcrypt.hash(result.password, 10)
        result.password = hash;

        await prisma.user.create({
            data : {
                name : result.username,
                email : result.email,
                password : result.password
            }
        })
        res.redirect(302, "/")
    }
    
}