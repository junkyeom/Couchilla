'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
    let [scrolled, setScrolled] = useState(true);

    useEffect(() => {   
        const handleScroll = () => {
          if (window.scrollY >= 450) {
            setScrolled(false); 
          } else {
            setScrolled(true);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
        <div className={`flex fixed z-50 ${scrolled ? 'bg-transparent' : 'bg-black'} w-full items-center px-5 py-4`}>
            <div className="w-[160px] h-[64px] relative mr-10">
                <Link href="/"><Image src="/logo.png" alt="couchilla" fill></Image></Link>
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
    )
}