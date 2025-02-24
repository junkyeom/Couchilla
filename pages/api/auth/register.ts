import { createClient } from "@supabase/supabase-js";
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from 'bcryptjs'
import { PrismaClient } from "@prisma/client";

let prisma = new PrismaClient();

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    if(req.method==="POST") {
        
        const regEmail = /^[a-z]+[a-z0-9]{5,19}$/g;
        const regPassword = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;

        if(!regEmail.test(req.body.email)) {
            res.status(500).json('잘못된 이메일 형식입니다.')
        }

        if(!regPassword.test(req.body.password)) {
            res.status(500).json('잘못된 패스워드 형식입니다.')
        }

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