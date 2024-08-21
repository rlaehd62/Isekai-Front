import Link from "next/link"

export default function HeadNav()
{
    const links = [        
        {
            'name': '랭킹',
            'link': '/ranking'
        },

        {
            'name': '팔로우',
            'link': '/follows'
        }
    ]
    return (
        <header className="w-full flex grow-0 flex-col shadow-md bg-sky-400 text-neutral-50 sticky top-0">

            <div className="flex flex-row p-3 justify-between">
                <div className="flex flex-none font-bold mx-3">
                    <h1 className="text-xl md:text-2xl">
                        <Link href='/'>이세계 문고</Link>
                    </h1>
                </div>
                <div className="flex flex-row justify-around">
                    {
                        links.map(info => (
                            <Link className="mx-4 font-bold text-lg hidden rounded-lg hover:bg-sky-600 md:block md:text-2xl" href={info.link}>
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
                    links.map(info => (
                        <Link className="mx-4 font-bold text-xl rounded-lg hover:bg-sky-600 md:hidden" href={info.link}>
                            {info.name}
                        </Link>
                    ))
                }
            </div>
        </header>
    )
}