import Link from "next/link"
import '@/app/index.css'

export default function HeadNav()
{
    const links = [        
        {
            'name': 'TODAY BEST',
            'link': '/today-best'
        },

        {
            'name': 'WEEK BEST',
            'link': '/week-best'
        }
    ]
    return (
        <header className="w-screen flex grow-0 flex-col shadow-md bg-sky-400 text-neutral-50 sticky top-0">

            <div className="flex flex-row p-3 justify-between">
                <div className="flex flex-none font-bold mx-3">
                    <h1 className="text-xl md:text-2xl">
                        <Link href='/'>이세계 문고</Link>
                    </h1>
                </div>
                <div className="flex flex-row justify-around">
                    {
                        links.map((info, index) => (
                            <Link className="nav-item" key={index} href={info.link}>
                                {info.name}
                            </Link>
                        ))
                    }
                </div>

                <div className="flex flex-none font-bold mx-3">
                    <h1 className="text-xl md:text-2xl">
                        <Link href='/myinfo'>내 정보</Link>
                    </h1>
                </div>
            </div>

            <div className="flex flex-row p-3 justify-around md:hidden">
                {   
                    links.map((info, index) => (
                        <Link className="nav-item-mobile" key={index} href={info.link}>
                            {info.name}
                        </Link>
                    ))
                }
            </div>
        </header>
    )
}