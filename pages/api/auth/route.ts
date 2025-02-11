import { createClient } from '@supabase/supabase-js'
import { NextApiRequest, NextApiResponse } from "next";

let supabase = createClient('https://urlzhmxlxhdtqzdxreku.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVybHpobXhseGhkdHF6ZHhyZWt1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc5MDMxMzEsImV4cCI6MjA1MzQ3OTEzMX0.b6n0oraUbcTN_XNDRzhirB7eLvjDCMklrbEh48B_yvA')

export default async function handler(req:NextApiRequest, res:NextApiResponse) {

    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method Not Allowed" });
    }

    const { email , password } = req.body;

    const { data, error } = await supabase.auth.signUp({
        email,
        password
    })

    console.log(data)

    if (error) {
        return res.status(400).json({ message: "Sign Up failed", error: error.message });
      }
    
      return res.status(200).json({ message: "User created successfully", data });

}