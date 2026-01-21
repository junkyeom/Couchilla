import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation";

export default async function Mypage() {

    const session = await getServerSession(authOptions);

    if(!session) {
        redirect('/login')
    }

    return (
        <div className="relative top-32 pb-32 w-4/5 mx-auto">
            <div className="flex w-full gap-8">
                <div className="w-52 text-white leading-8">
                    <div className="mb-12 text-3xl text-custom-pink">마이페이지</div>
                    <div className="mb-5 mt-7 text-xl text-custom-pink">쇼핑 정보</div>
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
                <div className="w-full">
                    <div className="w-full p-8 border border-custom-pink rounded-xl">
                        {/* <div className="relative w-12 aspect-square mb-4">
                            <Image src={session?.user?.image || "/loading/logo.png"} alt="profile_image" fill/>
                        </div> */}
                        <div className="text-white text-xl mb-1">
                            {session?.user?.name} 님
                        </div>
                        <div className="text-gray-300 text-xl">
                            {session?.user?.email}
                        </div>
                    </div>
                    <div className="w-full mt-8">
                        <div className="text-custom-pink py-4 text-xl">
                            위시리스트
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}