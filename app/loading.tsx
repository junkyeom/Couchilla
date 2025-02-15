import Image from "next/image";

export default function Loading() {
    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-b from-black via-gray-900 to-black">
            <div className="relative w-24 h-24 rounded-full animate-spin border-custom-pink">
                <Image src="/loading/logo.png" alt="loading" fill />
            </div>
        </div>
    );
}