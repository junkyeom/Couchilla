import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { getServerSession } from "next-auth"
import Image from "next/image"


export default async function Mypage() {
    let session = await getServerSession(authOptions)
    console.log(session)

    return (
        <div className="relative top-32 pb-32 w-4/5 mx-auto">
            <div className="flex w-full">
                <div className="w-52 text-white leading-8">
                    <div className="mb-12 text-3xl text-custom-pink">마이페이지</div>
                    <div className="mb-5 mt-7 text-xl text-custom-pink">쇼핑 정보</div>
                    <div>구매내역</div>
                    <div>구매내역</div>
                    <div>판매내역</div>
                    <div>위시리스트 목록</div>
                    <div className="mb-5 mt-7 text-xl text-custom-pink">내 정보 </div>
                    <div>배송지 관리</div>
                    <div>정산 계좌 관리</div>
                    <div>알림 목록</div>
                    <div className="mb-5 mt-7 text-xl text-custom-pink">설정</div>
                    <div>공지사항</div>
                    <div>FAQ</div>
                    <div>이용안내</div>
                    <div>오픈소스 라이선스</div>
                    <div>로그아웃</div>
                </div>
                <div>
                    <div className="text-white text-xl">
                        {session?.user?.name}
                    </div>
                    <div className="text-gray-300 text-xl">
                        {session?.user?.email}
                    </div>
                    <div className="relative w-12 aspect-square mt-4">
                        <Image src={session?.user?.image || "/loading/logo.png"} alt="profile_image" fill/>
                    </div>
                </div>
            </div>
        </div>
    )
}