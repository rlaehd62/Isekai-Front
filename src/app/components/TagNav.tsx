import '@/app/index.css'

export default function TagNav()
{
    return (
        <div className="w-full bg-[#365486] px-3 py-1 flex flex-row gap-3 justify-between items-center overflow-x-auto overflow-y-hidden">
            <div className="tag-nav-item">
                Fantasy
            </div>

            <div className="tag-nav-item">
                Comic
            </div>

            <div className="tag-nav-item">
                Romance
            </div>

            <div className="tag-nav-item">
                Modern            
            </div>

            <div className="tag-nav-item">
                Fanfic
            </div>
        </div>
    )
}