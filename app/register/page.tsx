'use client'

import { useState } from 'react';
import { signIn, signOut } from 'next-auth/react';

// export default function SignupForm() {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData(state => ({
//       ...state,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     // 여기에 폼 데이터 제출 처리
//     console.log('회원가입 데이터:', formData);
//     try {
//         const response = await fetch('/api/auth/register', {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json"
//           },
//           body: JSON.stringify(formData)
//         })
//         if (response.ok) {
//           const data = await response.json();
//           console.log('회원가입 성공:', data);
//           // 성공 처리 (예: 로그인 페이지로 리다이렉트)
//         } else {
//           const error = await response.json();
//           console.error('회원가입 실패:', error);
//           // 실패 처리 (예: 오류 메시지 표시)
//         }
//       } catch (error) {
//         console.error('네트워크 오류:', error);
//         // 네트워크 오류 처리 (예: 오류 메시지 표시)
//       }
//   };

//   return (
//     <div className='relative top-32 pb-32 mx-auto'>
//       <div className='flex justify-center'>
//         <div className="p-8 bg-black border-custom-pink border-2 rounded-lg">
//           <p className="text-2xl text-custom-pink font-bold mb-4">회원가입</p>
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <label htmlFor="username" className="block text-sm font-medium text-custom-pink">이름</label>
//               <input
//                 type="text"
//                 name="username"
//                 value={formData.username}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-custom-pink"
//                 placeholder="이름을 입력하세요"
//                 required
//               />
//             </div>
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-custom-pink">이메일</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-custom-pink"
//                 placeholder="이메일을 입력하세요"
//                 required
//               />
//             </div>
//             <div>
//               <label htmlFor="password" className="block text-sm font-medium text-custom-pink">비밀번호</label>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-custom-pink"
//                 placeholder="비밀번호를 입력하세요"
//                 required
//               />
//             </div>
//             <div className="mt-4">
//               <button
//                 type="submit"
//                 className="w-full px-4 py-2 bg-custom-pink text-white font-bold rounded-md hover:bg-custom-dark-pink focus:outline-none focus:ring-2 focus:ring-custom-pink"
//               >
//                 회원가입
//               </button>
//               <button 
//                 className='text-white bg-custom-pink p-2 mt-4'
//                 onClick={()=>{
//                   signIn('google');
//                 }}>
//                 구글
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }
export default function SignupForm() {

  return (
    <div className='relative top-32 pb-32 mx-auto'>
      <div className='flex justify-center'>
        <div className="p-8 bg-black border-custom-pink border-2 rounded-lg">
          <p className="text-2xl text-custom-pink font-bold mb-4">회원가입</p>
          <form method="POST" action="/api/auth/register" className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-custom-pink">이름</label>
              <input
                type="text"
                name="username"
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-custom-pink"
                placeholder="이름을 입력하세요"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-custom-pink">이메일</label>
              <input
                type="email"
                name="email"
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-custom-pink"
                placeholder="이메일을 입력하세요"
                required
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
                className='text-white bg-custom-pink p-2 mt-4'
                onClick={()=>{
                  signIn('google');
                }}>
                구글
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}