'use client'

import { Dialog, Transition, DialogPanel } from "@headlessui/react";
import { useRouter } from "next/navigation";
import { useState, Fragment } from "react"

export default function SearchBar() {

    let [isOpen, setIsOpen] = useState(false);
    let [formData, setFormData] = useState('')
    let router = useRouter();

    return (
        <>
            <span 
                className="material-symbols-outlined text-custom-pink hover:text-custom-dark-pink cursor-pointer" 
                onClick={() => setIsOpen(true)}> 
                search
            </span>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={() => setIsOpen(false)}>
                    <div className="fixed inset-0 bg-black bg-opacity-50" />
                    <div className="fixed inset-0 flex items-center justify-center">
                        <DialogPanel className="flex justify-center w-full h-full p-6 bg-white">
                            <div className="w-2/5 justify-center">
                                <div className="relative w-full mt-8">
                                    <form onSubmit={(e:React.FormEvent) => {
                                        e.preventDefault(); 
                                        router.push('/search/'+ encodeURIComponent(formData));
                                        setIsOpen(false)
                                    }}>
                                        <button type="submit">
                                            <span 
                                                className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-custom-pink hover:text-custom-dark-pink cursor-pointer"
                                            >
                                                    search
                                            </span>
                                        </button>
                                        <input
                                            type="text"
                                            placeholder="앨범명, 가수명 등"
                                            onChange={(e)=>{setFormData(e.target.value)}}
                                            className="w-full px-10 py-2 text-lg border-2 border-custom-pink rounded-md focus:outline-none focus:ring-1 focus:ring-custom-pink"
                                        />
                                    </form>
                                </div>
                                <span 
                                    className="absolute top-16 right-8 cursor-pointer" onClick={() => setIsOpen(false)}>
                                    닫기
                                </span>
                            </div>
                            
                        </DialogPanel>
                    </div>
                </Dialog>
            </Transition>
        </>
        // <div>
        //     <form onSubmit={handleSubmit} >
        //         <div>
        //             <input
        //                 type="text"
        //                 placeholder="앨범명, 가수명 등"
        //                 onChange={(e)=>{setFormData(e.target.value)}}
        //                 className="w-full px-4 py-1 pr-10 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-custom-pink"
        //             />
        //         </div>
        //         <button
        //             type="submit"
        //             className="absolute right-40 top-1/2 transform -translate-y-2.5 text-gray-500 hover:text-custom-pink"
        //         >
        //             <span className="material-symbols-outlined text-custom-pink hover:text-custom-dark-pink">search</span>
        //         </button>
        //     </form>
        // </div>
       )
}