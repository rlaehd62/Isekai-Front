'use client'
import Link from "next/link"
import { useState } from "react"
import clsx from 'clsx';
import './index.css'

export default function page()
{
    const [username, setUsername] = useState('')
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')

    const reset = () => 
    {
        setUsername('')
        setPassword1('')
        setPassword2('')
    }

    const isValid = () =>
    {
        return password1 == password2
    }

    const confirm = (e: any) =>
    {
        e.preventDefault();

        if (isValid())
        {
            // we don't use zustand or something yet
            // something axios .. ?
            console.log(username)
            console.log(password1)
        }
    }

    return (
        <div className="flex flex-col w-screen mx-3 my-auto shadow-lg items-center md:w-1/4 md:mx-auto">
            
            <div className="flex flex-row p-3 items-center">
                <div className="mx-auto w-8 text-center">
                    ID
                </div>

                <div className="flex-1 ml-3">
                    <input value={username} type='email' placeholder='Type in your Email' onChange={(e) => { setUsername(e.target.value) }} type="text" 
                    className="w-full border-b border-slate-500 p-1" />
                </div>
            </div>

            <div className="flex flex-row p-3 items-center">
                <div className="mx-auto w-8 text-center">
                    PW
                </div>

                <div className="flex-1 ml-3">
                    <input value={password1} placeholder='Type in your password' onChange={(e) => { setPassword1(e.target.value) }}  type="password" 
                    className={clsx(
                        "w-full p-1",
                        {
                            'border-b border-slate-500': password1 == password2,
                            'border-b border-red-500': password1 != password2,
                        },
                    )} />
                </div>
            </div>

            <div className="flex flex-row p-3 items-center">
                <div className="mx-auto w-8 text-center">
                    &nbsp;
                </div>


                <div className="flex-1 ml-3">
                    <input value={password2} placeholder='Confirm your password' onChange={(e) => { setPassword2(e.target.value) }}  type="password" 
                    className={clsx(
                        "w-full p-1",
                        {
                            'border-b border-slate-500': password1 == password2,
                            'border-b border-red-500': password1 != password2,
                        },
                    )} />
                </div>
            </div>

            <div className="flex flex-row p-3 w-full gap-3">
                <button className="login-button" onClick={(e) => {e.preventDefault(); reset(); }}><Link href='/signup'>초기화</Link></button>
                <button className="login-button" onClick={(e) => { confirm(e); }}>확인</button>
            </div>
        </div>
    )    
}