import { Link } from "react-router-dom"

interface NavBarProps {
    onSearchSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

export default function NavBar({ onSearchSubmit }: NavBarProps) {
    return <nav className="flex items-center justify-between px-[50px] bg-1 border-b-[1.5px] border-outline text-1 w-full h-[64px] top-0 left-0 fixed z-50">
        <Link to="/" className="flex items-center gap-[10px] h-[40px]">
            <img src="/android-chrome-512x512.png" alt="Logo" className="h-full" />
            Minecraft PCs
        </Link>

        <ul className="flex items-center gap-[15px] h-[40px]">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li>
                <form id="search-form" onSubmit={onSearchSubmit} className="flex gap-[10px]">
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
}

// import React from 'react'

// interface NavBarProps {
//     onSearchSubmit: (e: React.FormEvent<HTMLFormElement>) => void
// }

// const NavBar: React.FC<NavBarProps> = ({ onSearchSubmit }) => {
//     return (
//         <nav>
//             <form onSubmit={onSearchSubmit}>
//                 <input type="text" name="search-query" />
//                 <button type="submit">Search</button>
//             </form>
//             {/* NavBar content */}
//         </nav>
//     )
// }

// export default NavBar