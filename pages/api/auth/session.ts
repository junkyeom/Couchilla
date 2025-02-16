import { createClient } from "@supabase/supabase-js";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "./[...nextauth]";


export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    let session = getServerSession(req, res, authOptions)
    console.log(session)
    return res.status(200).json('세션')
}