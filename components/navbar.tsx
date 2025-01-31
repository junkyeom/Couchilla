'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation"; // ✅ 현재 경로 확인

export default function Navbar() {
    const [scrolled, setScrolled] = useState(true);
    const pathname = usePathname(); // ✅ 현재 URL 가져오기
    const isHome = pathname === "/"; // ✅ 홈 화면인지 확인

    useEffect(() => {
        if (!isHome) return; // ✅ detail 페이지에서는 스크롤 이벤트 X

        const handleScroll = () => {
            setScrolled(window.scrollY < 450);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isHome]);

    return (
        <div
            className={`flex z-50 w-full items-center px-5 py-4 transition-all duration-300 fixed

            ${scrolled ? "bg-transparent" : "bg-black"}`}
        >
            <div className="w-[160px] h-[64px] relative mr-10">
                <Link href="/"><Image src="/logo.png" alt="couchilla" fill /></Link>
            </div>
            <div className="text-custom-pink font-anton text-xl">
                <Link href="/" className="mr-5 hover:text-custom-dark-pink transition-colors duration-300 ease-in-out">LP/CD</Link>
                <Link href="/" className="mr-5 hover:text-custom-dark-pink transition-colors duration-300 ease-in-out">GOODS</Link>
                <Link href="/" className="mr-5 hover:text-custom-dark-pink transition-colors duration-300 ease-in-out">EVENT</Link>
            </div>
            <div className="text-custom-pink font-anton text-xl ml-auto">
                <Link href="/" className="mr-5 hover:text-custom-dark-pink transition-colors duration-300 ease-in-out">LOGIN</Link>
            </div>
        </div>
    );
}
