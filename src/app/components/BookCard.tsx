import { FaBook } from "react-icons/fa6";
import Image from "next/image"
import { describe } from "node:test";

interface CardInput
{
    title: string,
    description: string,
    rank: number
}

export default function BookCard({title, description, rank}: CardInput)
{
    return (
        <div className="bg-neutral-50 w-screen flex flex-row p-3 shadow-md 
        hover:bg-neutral-200 md:max-w-2xl">
            <div className="my-auto">
                <h1 className="text-lg font-bold">{rank}</h1>
            </div>
            
            <div className="w-full flex flex-col p-4 overflow-hidden">
                <h3 className="text-md truncate md:text-xl">{title}</h3>
                <div className="text-sm truncate md:text-md">{description}</div>
            </div>
        </div>
        
    )
}