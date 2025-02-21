import { createClient } from "@supabase/supabase-js";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "./[...nextauth]";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
      try {
        // getServerSession는 비동기 함수이므로 await를 사용해야 합니다.
        const session = await getServerSession(req, res, authOptions);
        
        if (session) {
          console.log(session);
          return res.status(200).json(session); // 세션 정보 반환
        } else {
          return res.status(200).json(null); // 세션이 없을 경우 null 반환
        }
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Server Error" }); // 에러가 발생한 경우 500 응답
      }
    }
  }