'use client'

import { Dialog, Transition, DialogPanel } from "@headlessui/react";
import { useRouter } from "next/navigation";
import { useState, useEffect,Fragment } from "react"

export default function SearchBar() {

    let [isOpen, setIsOpen] = useState(false);
    let [formData, setFormData] = useState('')
    let [recentSearches, setRecentSearches] = useState<string[]>([]);
    let router = useRouter();

    useEffect(() => {
        let storedSearches = JSON.parse(localStorage.getItem("recentSearches") || "[]");
        setRecentSearches(storedSearches);
    }, []);

    let saveSearchword = (word: string) => {
        let updatedSearches = [word, ...recentSearches.filter(item=>item!==word)];
        if (updatedSearches.length > 5) updatedSearches = updatedSearches.slice(0, 10); // 최근 5개만 저장
        setRecentSearches(updatedSearches);
        localStorage.setItem("recentSearches", JSON.stringify(updatedSearches));
    };

    let handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        if (!formData.trim()) return;
        router.push('/search/'+ encodeURIComponent(formData));
        saveSearchword(formData);
        setIsOpen(false)
    }

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
                                    <form onSubmit={handleSubmit}>
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
                                            className="w-full px-10 py-2 font-noto font-medium text-lg text-custom-dark-pink border-2 border-custom-pink rounded-md focus:outline-none focus:ring-1 focus:ring-custom-dark-pink"
                                        />
                                    </form>
                                </div> 
                                <div className="w-full mt-16">
                                    <div className="flex">
                                        <div className="text-sm">
                                            최근 검색어
                                        </div>
                                        <span 
                                            className="ml-auto text-sm cursor-pointer"
                                            onClick={()=>{
                                                localStorage.setItem("recentSearches", JSON.stringify([]));
                                                setRecentSearches([]);
                                            }}>
                                            전체삭제
                                        </span>
                                    </div>
                                    <div className="w-full">
                                        {recentSearches.length > 0 ? (
                                            <ul className="flex flex-wrap w-full mt-4">
                                                {recentSearches.map((search, index) => (
                                                    <li
                                                        key={index}
                                                        className="px-4 py-2 mr-4 mb-2 border border-custom-pink text-gray-400 rounded-full hover:bg-gray-100 cursor-pointer flex items-center"
                                                        onClick={()=>{
                                                            router.push("/search/"+search);
                                                            saveSearchword(search);
                                                            setIsOpen(false) 
                                                        }}
                                                    >
                                                        {search}
                                                        <span 
                                                            className="ml-2 text-gray-700 text-xs material-symbols-outlined"
                                                            onClick={(e)=>{
                                                                e.stopPropagation();
                                                                let updated = [...recentSearches]
                                                                updated.splice(index, 1)
                                                                setRecentSearches(updated)
                                                            }}>
                                                            close
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : <div className="flex justify-center items-center h-32 text-gray-500">
                                                최근 검색어가 없습니다.
                                            </div>}
                                    </div>
                                </div>
                                <span
                                    className="absolute top-14 right-8 cursor-pointer text-4xl text-custom-pink hover:text-custom-dark-pink bi bi-x-lg" 
                                    onClick={() => setIsOpen(false)}>
                                </span>
                            </div>
                            
                        </DialogPanel>
                    </div>
                </Dialog>
            </Transition>
        </>
       )
}