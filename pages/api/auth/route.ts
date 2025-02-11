import { createClient } from "@supabase/supabase-js";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    
    let supabaseUrl = process.env.SUPABASE_URL;
    let supabaseKey = process.env.SUPABASE_KEY;
    
    if (!supabaseUrl || !supabaseKey) {
        throw new Error("Supabase URL or key is missing. Please check your .env.local file.");
      }
      
    let supabase = createClient(supabaseUrl, supabaseKey);

    if(req.method === "POST") {
        const { email, password } = req.body;

        // 이메일과 비밀번호가 없으면 오류 반환
        if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
        }

        // 회원가입 처리
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
        });

        if (error) {
        return res.status(400).json({ message: error.message, cause: error.cause });
        }

        // 성공적으로 회원가입된 경우
        return res.status(200).json({ message: "User registered successfully", data});
    } else {
        // POST 요청 외의 요청에 대해 405 Method Not Allowed 응답
        return res.status(405).json({ message: "Method Not Allowed" });
        }
        
}