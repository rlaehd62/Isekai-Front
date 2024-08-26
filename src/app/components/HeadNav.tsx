'use client'

import Link from "next/link"
import '@/app/index.css'
import { useState } from "react"
import { CiLogin, CiHeart, CiPen, CiLogout } from "react-icons/ci";

export default function HeadNav()
{
    const [isActive, setActive] = useState(true)

    function showUserMenus()
    {
        return [
            <Link className="nav-item-effect" href='/write'> <CiPen size={35} /></Link>, 
            <Link className="nav-item-effect" href='/favorite'> <CiHeart size={35} /></Link>
        ]
    }

    return (
        <header className="w-screen flex flex-col shadow-md bg-[#365486] text-neutral-50 sticky top-0">

            <div className="flex flex-row p-3 justify-between items-center">
                <div className="flex flex-none font-bold mx-3 items-center">
                    <h1 className="text-xl md:text-2xl">
                        <Link href='/'>Isekai Books</Link>
                    </h1>
                </div>
                <div className="flex flex-row justify-around">
                    <Link className="nav-item" href='/ranking'>
                        Ranking
                    </Link>

                    <Link className="nav-item" href='/search'>
                        Search
                    </Link>
                </div>

                <div className="items-center">
                    <div className="flex flex-row font-bold mx-1">
                        {
                            isActive && showUserMenus()
                        }

                        {
                            isActive
                            ? <Link className="nav-item-effect" href='/logout'><CiLogout size={35} /></Link>
                            : <Link className="nav-item-effect" href='/login'><CiLogin size={35} /></Link>  
                        }

                    </div>
                </div>
            </div>

            <div className="flex flex-row p-3 justify-around md:hidden">
                <Link className="nav-item-moible" href='/ranking'>
                    Ranking
                </Link>

                <Link className="nav-item-moible" href='/search'>
                    Search
                </Link>
            </div>
        </header>
    )
}