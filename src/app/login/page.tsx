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
            
            <div className="flex flex-row p-3 items-center">
                <div className="mx-auto w-8 text-center">
                    ID
                </div>

                <div className="flex-1 ml-3">
                    <input value={username} placeholder='username' onChange={(e) => { setUsername(e.target.value) }} type="text" 
                    className="w-full border-b-2 border-slate-500 p-1" />
                </div>
            </div>

            <div className="flex flex-row p-3 items-center">
                <div className="mx-auto w-8 text-center">
                    PW
                </div>

                <div className="flex-1 ml-3">
                    <input value={password} placeholder='password' onChange={(e) => { setPassword(e.target.value) }}  type="password" 
                    className="w-full border-b-2 border-slate-500 p-1" />
                </div>
            </div>

            <div className="flex flex-row p-3 w-full gap-3">
                <button className="login-button"><Link href='/signup'>회원가입</Link></button>
                <button className="login-button" onClick={(e) => { e.preventDefault(); console.log(username + '/' + password)}}>로그인</button>
            </div>
        </div>
    )    
}