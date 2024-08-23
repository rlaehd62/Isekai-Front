import './index.css'

export default function page()
{
    return (
        <div className="flex flex-col w-screen mx-3 mt-5 shadow-lg md:w-1/4 md:mx-auto">
            
            <div className="flex flex-row p-3 items-center">
                <div className="mx-auto w-8 text-center">
                    ID
                </div>

                <div className="flex-1 ml-3">
                    <input value='root' type="text" 
                    className="w-full border-b-2 border-slate-500 p-1" />
                </div>
            </div>

            <div className="flex flex-row p-3 items-center">
                <div className="mx-auto w-8 text-center">
                    PW
                </div>

                <div className="flex-1 ml-3">
                    <input value='1234' type="password" 
                    className="w-full border-b-2 border-slate-500 p-1" />
                </div>
            </div>

            <div className="flex flex-row p-3 w-full gap-3">
                <button className="login-button">회원가입</button>
                <button className="login-button">로그인</button>
            </div>
        </div>
    )    
}