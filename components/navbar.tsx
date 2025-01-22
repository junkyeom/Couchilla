import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="flex fixed z-50 bg-transparent w-full items-center px-5 py-4">
            <div className="w-[160px] h-[64px] relative mr-10">
                <Link href="/"><Image src="/logo.png" alt="couchilla" fill></Image></Link>
            </div>
            <div className="text-custom-color font-[Anton] text-xl">
                <Link href="/" className="mr-5">LP/CD</Link>
                <Link href="/" className="mr-5">GOODS</Link>
                <Link href="/" className="mr-5">EVENT</Link>
            </div>
            <div className="text-custom-color font-[Anton] text-xl ml-auto">
                <Link href="/" className="mr-5">LOGIN</Link>
            </div>
        </div>
    )
}