'use client'

import { useEffect, useState } from "react"

export default function Test() {

    let [val, setVal] = useState<any>()

    useEffect(()=>{
        fetch("/api/test", {
            method : "GET"
        })
        .then(r=>r.json())
        .then((r)=>{
            console.log(r);
            setVal(r)
        })
    },[])
    
    return (
        <div>
            {val}
        </div>
    )
}