'use client'

import Image from "next/image"
import { useEffect, useState } from "react"

export default function Test() {

    let [val, setVal] = useState<string | null>(null)

    useEffect(()=>{
        fetch("/api/test", {
            method : "GET"
        })
        .then((r)=>r.json())
        .then((r)=>{
            console.log(r);
            setVal(r.image_url)
        })
    },[])
    
    return (
        <div className="text-white">
             {val ? <Image src={val} alt="test" width={200} height={200}/> : <p>로딩중...</p>}
        </div>
    )
}