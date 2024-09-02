'use client'

import Link from "next/link"
import '@/app/index.css'
import { useState } from "react"
import { CiLogin, CiHeart, CiPen, CiLogout } from "react-icons/ci";
import HeadNavItem from "./HeadNavItem";

export default function HeadNav()
{
    const [isActive, setActive] = useState(true)

    function showUserMenus()
    {
        return [
            <Link key={44} className="nav-item-effect" href='/write'> <CiPen size={35} /></Link>, 
            <Link key={55} className="nav-item-effect" href='/favorite'> <CiHeart size={35} /></Link>
        ]
    }

    return (
        <header className="w-screen flex flex-col shadow-md bg-[#365486] text-neutral-50 sticky top-0">

            <div className="flex flex-row p-3 justify-between items-center">
                <div className="flex flex-none font-bold mx-3 items-center">
                    <h1 className="text-xl md:text-2xl">
                        <HeadNavItem id={0} value='Isekai Books' to='/' />
                    </h1>
                </div>
                <div className="flex flex-row justify-around">
                    <HeadNavItem className='nav-item' id={1} value='Ranking' to='/ranking' />
                    <HeadNavItem className='nav-item' id={2} value='Search' to='/search' />
                </div>

                <div className="items-center">
                    <div className="flex flex-row font-bold mx-1">
                        {
                            isActive && showUserMenus()
                        }

                        {
                            isActive
                            ? <Link key={22} className="nav-item-effect" href='/logout'><CiLogout size={35} /></Link>
                            : <Link key={33} className="nav-item-effect" href='/login'><CiLogin size={35} /></Link>  
                        }

                    </div>
                </div>
            </div>

            <div className="flex flex-row p-3 justify-around md:hidden">
                <HeadNavItem className='nav-item-moible' id={3} value='Ranking' to='/ranking' />
                <HeadNavItem className='nav-item-moible' id={4} value='Search' to='/search' />
            </div>
        </header>
    )
}