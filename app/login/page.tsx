'use client'

import { useState } from "react"

export default function Register() {

    let [id, setId] = useState<String>('');
    let [password, setPassword] = useState<any>('')

    return (
        <div className="relative top-32 w-3/4 mx-auto">
            <div>
                <div className=" text-custom-pink text-xl font-bold">
                    회원가입
                </div>
                <div className="mt-8">
                    <form>
                        <div className="mb-8">
                            <p className="text-white">이메일</p>
                            <input className="bg-white p-2 mt-2" placeholder="이메일을 입력해 주세요" />
                        </div>
                        <div>
                            <p className="text-white">비밀번호</p>
                            <input className="bg-white p-2 mt-2" placeholder="비밀번호를 입력해 주세요"/>
                        </div>
                    </form>
                </div>
                
            </div>
        </div>
    )
}