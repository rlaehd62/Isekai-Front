'use client'

import { useState } from 'react'
import './index.css'
import Link from 'next/link'

export default function page()
{
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')

    return (
        <div className="flex flex-col w-screen mx-3 my-auto shadow-lg items-center md:w-1/4 md:mx-auto">
            <div className="flex flex-col p-3 w-full gap-2">
                <button className="login-button bg-blue-700"><Link href='http://localhost:8080/oauth2/authorization/google'>Google</Link></button>
                <button className="login-button bg-slate-800"><Link href='http://localhost:8080/oauth2/authorization/github'>GitHub</Link></button>
            </div>
        </div>
    )    
}