'use client'

import { signIn } from "next-auth/react";
import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LogIn() {
    
    let router = useRouter();
    let [email, setEmail] = useState<any>('');
    let [password, setPassword] = useState<any>('')
    let [error, setError] = useState<any>('')


    let handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const result = await signIn("credentials", {
            email: email,
            password: password,
            redirect: false,
        });
        console.log("signIn 결과:", result);
        if(result?.error) {
            console.log('에러뜸')
            setError(result.error)
        } else {
            router.replace('/')
            console.log("로그인 성공!")
        }
    }

    return (
        <div className="relative top-32 pb-32 mx-auto">
            <div className='flex justify-center'>
                <div className="p-8 bg-black border-custom-pink border-2 rounded-lg min-w-80">
                    <div className=" text-custom-pink text-xl font-bold mb-8">
                        로그인
                    </div>
                    <div>
                        <form onSubmit={e=>handleSubmit(e)}>
                            <div className="mb-8">
                                <label className="block text-sm font-medium text-custom-pink mb-2">이메일</label>
                                <input 
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-custom-pink" 
                                    id="email"
                                    type="text"
                                    placeholder="이메일을 입력해 주세요"
                                    value={email}
                                    onChange={(e)=>setEmail(e.target.value)}
                                />
                            </div>
                            <div className="mb-8">
                                <label className="block text-sm font-medium text-custom-pink mb-1">비밀번호</label>
                                <input 
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-custom-pink" 
                                    id="password" 
                                    type="password"
                                    placeholder="비밀번호를 입력해 주세요"
                                    value={password}
                                    onChange={(e)=>setPassword(e.target.value)}
                                />
                            </div>
                            {error && (
                                <div className="mb-2 text-base text-center text-custom-pink">
                                    <span className="bi bi-exclamation-triangle mr-1"></span>
                                    {error}
                                </div>
                            )}
                            <div className="mb-4">
                                <button
                                    type="submit"
                                    className="w-full px-4 py-2 bg-custom-pink text-white font-bold rounded-md hover:bg-custom-dark-pink focus:outline-none focus:ring-2 focus:ring-custom-pink"
                                >
                                    로그인
                                </button>
                            </div>
                            <div className="mb-4">
                                <button
                                    className="text-custom-pink text-2xl bi bi-google"
                                    onClick={() => {
                                        signIn('google');
                                    }}
                                >
                                </button>
                            </div>
                            <div className="text-custom-pink text-sm">
                                <Link href='/register'>회원가입</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}