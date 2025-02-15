import Link from "next/link";


export default function Footer() {
    return (
        <div className="flex justify-center w-full font-noto">
            <div className="flex flex-col w-4/5 justify-center border-t-[0.1px] border-custom-pink">
                <div className="flex py-10">
                    <div className="flex">
                        <div className="space-y-4">
                            <div className="text-custom-pink font-medium">이용안내</div>
                            <ul className="text-gray-300 space-y-3 text-sm">
                                <li>검수기준</li>
                                <li>이용정책</li>
                                <li>FAQ</li>
                                <li>거래 수수료 안내</li>
                            </ul>
                        </div>
                        <div className="space-y-4 ml-20">
                            <div className="text-custom-pink font-medium">고객지원</div>
                            <ul className="text-gray-300 space-y-3 text-sm">
                                <li>공지사항</li>
                                <li>서비스 소개</li>
                                <li>스토어 안내</li>
                                <li>판매자 방문 접수</li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-white ml-auto">
                        <div>
                            <div className="flex items-center text-custom-pink font-medium">
                                <span className="material-symbols-outlined relative top-[2px] mr-2" style={{fontSize : "16px"}}>
                                    call
                                </span> 
                                0507-1324-9772
                            </div>
                            <div className="mt-4">
                                <ul>
                                    <li><p className="text-gray-300 text-xs leading-5">운영시간 평일 10:00 - 19:00 (토,일,공휴일 휴무)</p></li>
                                    <li><p className="text-gray-300 text-xs leading-5">점심시간 평일 13:00 - 14:00</p></li>
                                    <li>
                                        <button className="w-12 h-8 rounded-sm mt-4 border border-custom-pink font-anton text-custom-pink">
                                            FAQ
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex py-5 border-t-[0.1px] border-custom-pink">
                    <div className="flex w-full">
                        <div className="w-[650px]">
                            <ul className="flex mb-5 text-custom-pink space-x-8 text-sm">
                                <li>회사소개</li>
                                <li>제휴제안</li>
                                <li>이용약관</li>
                                <li>개인정보 처리방침</li>
                            </ul>
                            <ul className="flex flex-wrap mb-5 text-gray-300 text-xs leading-5">
                                <li className="mr-4">(주)코칠라</li>
                                <li className="mr-4">대표 : 박준겸</li>
                                <li className="mr-4">사업자등록번호 : 351-09-29865</li>
                                <li className="mr-4">통신판매업 : 제 2025-남양주C-0203 호</li>
                                <li className="mr-4">사업장소재지 : 경기 남양주시 경춘로2248번길 42 1층 101호</li>
                            </ul>
                            <p className="mb-5 text-gray-400 text-xs leading-5">
                                (주)코칠라는 통신판매 중개자로서 통신판매의 당사자가 아니므로 개별 판매자가 등록한 상품정보에 대해서 책임을 지지 않습니다.<br/> 단, 거래과정에서 검수하고 보증하는 내용에 대한 책임은 당사에 있습니다.
                            </p>
                            <div className="mb-1 text-gray-400 text-xs">
                                © COUCHILLA Corp.
                            </div>
                            <div className="mb-1 text-gray-400 text-xs">
                                1.0.0
                            </div>
                        </div>
                        <div className="flex ml-auto space-x-4">
                            <div className="text-3xl text-custom-pink">
                                <a href="https://github.com/junkyeom" target="_blank" rel="noopener noreferrer" className="bi bi-github"></a>
                            </div>
                            <div className="text-3xl text-custom-pink">
                                <a href="https://www.instagram.com/cjadoublem" target="_blank" rel="noopener noreferrer" className="bi bi-instagram"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}