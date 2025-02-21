'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation"; 
import SearchBar from "./searchBar";    
import { signIn, signOut } from "next-auth/react";
import SessionBar from "./sessionBar";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(true);
    const pathname = usePathname(); 
    const isHome = pathname === "/"; 
    const [session, setSession] = useState('');

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
                console.log(r)
                setSession(r.user.name);
            } else {
                console.log('세션 없음')
            }
        })
    },[])

    return (
        <div
            className={`flex z-50 w-full items-center px-5 py-4 transition-all duration-300 fixed
            ${isHome&&scrolled ? "bg-transparent" : "bg-black"} `}
        >
            <div className="w-[160px] h-[64px] relative mr-10">
                <Link href="/"><Image src="/logo.png" alt="couchilla" fill /></Link>
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
                            <button onClick={()=>{ signOut() }} className="mr-5 hover:text-custom-dark-pink transition-colors duration-300 ease-in-out">LOGOUT</button>
                    </>
                ):( 
                    <>
                        <Link href="/register" className="mr-5 hover:text-custom-dark-pink transition-colors duration-300 ease-in-out">REGISTER</Link>
                        <button onClick={()=>{ signIn()}} className="mr-5 hover:text-custom-dark-pink transition-colors duration-300 ease-in-out">LOGIN</button>
                    </>
                )}
                
            </div>
        </div>
    );
}
