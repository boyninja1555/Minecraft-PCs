import { Outlet, Link } from "react-router-dom"

export default function MainLayout() {
    return (
        <main>
            <nav className="flex items-center justify-between px-[50px] bg-1 text-1 w-full h-[64px] top-0 left-0 fixed">
                <Link to="/" className="flex items-center gap-[10px] h-[40px]">
                    <img src="/android-chrome-512x512.png" alt="Logo" className="h-full" />
                    Minecraft PCs
                </Link>

                <ul className="flex items-center gap-[15px] h-[40px]">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/tags/parts">Parts</Link></li>
                    <li><Link to="/tags/prebuilt">Prebuilts</Link></li>
                    <li>
                        <form action="/search" id="search-form" className="flex gap-[10px]">
                            <input type="text" name="search-query" id="search-query" placeholder="Search for a part or prebuilt..." required />
                            <input type="submit" value="Search" />
                        </form>
                    </li>
                </ul>
            </nav>

            <div className="mt-[64px] w-full">
                <Outlet />
            </div>
        </main>
    )
}
