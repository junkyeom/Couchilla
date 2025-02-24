'use client'

import { signIn } from 'next-auth/react';
import { useState } from 'react';

export default function SignupForm() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = {
            username,
            email,
            password,
        };

        try {
            const response = await fetch('/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                // 성공 시 처리 (예: 로그인 페이지로 이동)
                console.log('회원가입 성공', data);
                // Redirect to login page or dashboard
            } else {
                // 실패 시 에러 메시지 처리
                setError(data?.message || '회원가입에 실패했습니다.');
            }
        } catch (error) {
            setError('서버 오류');
        }
    };

    return (
        <div className="relative top-32 pb-32 mx-auto">
            <div className="flex justify-center">
                <div className="p-8 bg-black border-custom-pink border-2 rounded-lg">
                    <p className="text-2xl text-custom-pink font-bold mb-4">회원가입</p>
                    {error && <div className="text-red-500 mb-4">{error}</div>}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-custom-pink">이름</label>
                            <input
                                type="text"
                                name="username"
                                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-custom-pink"
                                placeholder="이름을 입력하세요"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-custom-pink">이메일</label>
                            <input
                                type="text"
                                name="email"
                                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-custom-pink"
                                placeholder="이메일을 입력하세요"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-custom-pink">비밀번호</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-custom-pink"
                                placeholder="비밀번호를 입력하세요"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mt-4">
                            <button
                                type="submit"
                                className="w-full px-4 py-2 bg-custom-pink text-white font-bold rounded-md hover:bg-custom-dark-pink focus:outline-none focus:ring-2 focus:ring-custom-pink"
                            >
                                회원가입
                            </button>
                            <button
                                className="text-white bg-custom-pink p-2 mt-4"
                                onClick={() => {
                                    signIn('google');
                                }}
                            >
                                구글
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}