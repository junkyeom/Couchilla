import { createClient } from '@supabase/supabase-js'
import { NextApiRequest, NextApiResponse } from "next";

let supabase = createClient('https://urlzhmxlxhdtqzdxreku.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVybHpobXhseGhkdHF6ZHhyZWt1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc5MDMxMzEsImV4cCI6MjA1MzQ3OTEzMX0.b6n0oraUbcTN_XNDRzhirB7eLvjDCMklrbEh48B_yvA')

export default async function handler(req:NextApiRequest, res:NextApiResponse) {

    const { data, error } = await supabase.auth.signUp({
        email: 'example@email.com',
        password: 'example-password',
    })
    console.log(data)

    if (error) {
        console.log("Sign Up Error: ", error.message); // 에러 메시지를 콘솔로 출력
        return res.status(400).json({ message: "Sign Up failed", error: error.message });
    }

    return res.status(200).json('합격')

}