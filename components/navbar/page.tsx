'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation"; 
import SearchBar from "./searchBar";    
import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(true);
    const pathname = usePathname(); 
    const isHome = pathname === "/"; 
    const [session, setSession] = useState(''); 
    let router = useRouter();


    useEffect(() => {
        if (!isHome) return; 
        const handleScroll = () => {
            setScrolled(window.scrollY < 450);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isHome]);

    useEffect(()=>{
        fetch('/api/auth/session',{
            method : "GET"
        })
        .then(r=>r.json())
        .then(r=>{
            if(r) {
                setSession(r.user.name);
            }
        })
    })

    return (
        <div
            className={`flex z-50 w-full items-center px-5 py-4 transition-all duration-300 fixed
            ${isHome&&scrolled ? "bg-transparent" : "bg-black"} `}
        >
            <div className="w-[160px] h-[64px] relative mr-10">
            <Link href="/">
                <Image
                    src="/logo.png"
                    alt="couchilla"
                    width={160} // 명시적으로 지정
                    height={64} // 명시적으로 지정
                    priority // 로고는 항상 먼저 로딩되도록 설정
                />
            </Link>
            </div>
            <div className="text-custom-pink font-anton text-xl">
                <Link href="/search/lp" className="mr-5 hover:text-custom-dark-pink transition-colors duration-300 ease-in-out">VINYL</Link>
                <Link href="/search/goods" className="mr-5 hover:text-custom-dark-pink transition-colors duration-300 ease-in-out">GOODS</Link>
                <Link href="/" className="mr-5 hover:text-custom-dark-pink transition-colors duration-300 ease-in-out">EVENT</Link>
            </div>
            <div className="ml-auto flex items-center">
                <SearchBar/>
            </div>
            <div className="flex items-center text-custom-pink font-anton text-xl ml-5">
                {session.length>0 ? (
                    <>
                        <Link href="/mypage" className={`text-custom-pink ${ /[가-힣]/.test(session) && "font-noto font-bold mb-[2px]"} mr-4`}>
                            <span><span className="text-2xl bi bi-person mr-1"></span></span>
                        </Link>
                            <button onClick={async()=>{
                                await signOut({ redirect: false });
                                window.location.reload()
                            }} className="mr-5 hover:text-custom-dark-pink transition-colors duration-300 ease-in-out">LOGOUT</button>
                    </>
                ):( 
                    <>
                        <Link href="/login" className="mr-5 hover:text-custom-dark-pink transition-colors duration-300 ease-in-out">LOGIN</Link>
                    </>
                )}
                
            </div>
        </div>
    );
}
