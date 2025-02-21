'use server'

import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { getServerSession } from "next-auth"
import Link from "next/link"

export default async function SessionBar() {
    let session = await getServerSession(authOptions)
    console.log(session)
    return (
        <div>
            <div className="text-custom-pink font-anton text-xl ml-4">
                {session ? (
                    <span>
                        <span className="text-custom-pink">환영합니다</span>
                        <button className="mr-5 hover:text-custom-dark-pink transition-colors duration-300 ease-in-out">LOGOUT</button>
                    </span>
                ):(
                    <span>
                        <Link href="/register" className="mr-5 hover:text-custom-dark-pink transition-colors duration-300 ease-in-out">REGISTER</Link>
                        <button className="mr-5 hover:text-custom-dark-pink transition-colors duration-300 ease-in-out">LOGIN</button>
                    </span>
                )}
                
            </div>
        </div>
    )
}