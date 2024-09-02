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
            <HeadNavItem key={1} className='nav-item-effect' to='/write'><CiPen size={35} /></HeadNavItem>,
            <HeadNavItem key={2} className='nav-item-effect' to='/favorite'><CiHeart size={35} /></HeadNavItem>
        ]
    }

    return (
        <header className="w-screen flex flex-col shadow-md bg-[#365486] text-neutral-50 sticky top-0">

            <div className="flex flex-row p-3 justify-between items-center">
                <div className="flex flex-none font-bold mx-3 items-center">
                    <h1 className="text-xl md:text-2xl">
                        <HeadNavItem key={3} to='/'>Isekai Books</HeadNavItem>
                    </h1>
                </div>
                <div className="flex flex-row justify-around">
                    <HeadNavItem className='nav-item' key={4} to='/ranking'>Ranking</HeadNavItem>
                    {/* <HeadNavItem className='nav-item' id={2} to='/search'>Search</HeadNavItem> */}
                </div>

                <div className="items-center">
                    <div className="flex flex-row font-bold mx-1">
                        {
                            isActive && showUserMenus()
                        }

                        {
                            isActive
                            ? <HeadNavItem className='nav-item-effect' key={5} to='/logout'><CiLogout size={35} /></HeadNavItem>
                            : <HeadNavItem className='nav-item-effect' key={6} to='/login'><CiLogin size={35} /></HeadNavItem>
                        }

                    </div>
                </div>
            </div>

            <div className="flex flex-row p-3 justify-around md:hidden">
                <HeadNavItem className='nav-item-moible' key={7} to='/ranking'>Ranking</HeadNavItem>
                {/* <HeadNavItem className='nav-item-moible' id={4} to='/search'>Search</HeadNavItem> */}
            </div>
        </header>
    )
}   