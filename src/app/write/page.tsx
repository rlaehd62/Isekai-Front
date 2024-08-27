import './index.css'

export default function page()
{
    return (
        <div className="flex flex-col w-full bg-gray-100 rounded-lg p-5 m-2 gap-2 shadow-lg md:w-2/5 md:mx-auto">
            
            <div className="flex flex-col m-2 text-md font-semibold gap-1">
                <div>New Novel</div>
                <p className='text-sm text-gray-600'>Fill the blanks below to create your novel!</p>
            </div>

            <div className="flex flex-col m-2">
                <div className="text-xl font-semibold">Title</div>
                <input className="write-input" type="text" value='Solo Leveling' />
            </div>

            <div className="flex flex-col m-2">
                <div className="text-xl font-semibold">Description</div>
                <input className="write-input" type="text" value='Something good' />
            </div>

            <div className="flex flex-col m-2">
                <div className="text-xl font-semibold">Tag</div>
                <input className="write-input" type="text" value='Fantasy,History,Politics,Romance' />
            </div>

            <div className="flex flex-col m-2">
                <div className="text-xl font-semibold">Plot</div>
                <input className="write-input h-36" type="text" value='(will be replaced with bigger thing)' />
            </div>

            <div className='flex flex-row m-2 gap-2 items-center justify-around'>
                <button className='w-full mx-1 bg-neutral-700 text-white rounded-md px-3 py-1'>Canel</button>
                <button className='w-full mx-1 bg-neutral-700 text-white rounded-md px-3 py-1 '>Confirm</button>
            </div>
        </div>
    )
}   