import { Outlet, Link, useNavigate } from "react-router-dom"

export default function MainLayout() {
    const navigate = useNavigate()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        const query = formData.get("search-query") as string
        navigate(`/search?search-query=${encodeURIComponent(query)}`)
    }

    return (
        <main>
            <nav className="flex items-center justify-between px-[50px] bg-1 text-1 w-full h-[64px] top-0 left-0 fixed">
                <Link to="/" className="flex items-center gap-[10px] h-[40px]">
                    <img src="/android-chrome-512x512.png" alt="Logo" className="h-full" />
                    Minecraft PCs
                </Link>

                <ul className="flex items-center gap-[15px] h-[40px]">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li>
                        <form id="search-form" onSubmit={handleSubmit} className="flex gap-[10px]">
                            <input
                                type="text"
                                name="search-query"
                                id="search-query"
                                placeholder="Search for a part or prebuilt..."
                                required
                            />
                            <input type="submit" value="Search" />
                        </form>
                    </li>
                </ul>
            </nav>

            <div className="mt-[64px] w-full">
                <Outlet />
            </div>

            <footer className="py-[25px] bg-1 w-full">
                <p id="copyright-message" className="text-center">&copy; {new Date().getFullYear()} Minecraft-PCs</p>
                <p id="disclaimer" className="text-center">This site does not provide real gaming computers, it provides build downloads for Minecraft Redstone Gaming PCs and their components.</p>

                <div className="flex justify-between mt-[25px] mx-auto px-[15px] max-w-[585px]">
                    <div className="flex flex-col">
                        <b className="uppercase">Pages</b>

                        <Link to="/">Home</Link>
                        <Link to="/search?tags=parts">Parts</Link>
                        <Link to="/search?tags=prebuilts">Prebuilts</Link>
                    </div>
                    <div>
                        <b className="uppercase">Socials</b>
                    </div>
                </div>
            </footer>
        </main>
    )
}
