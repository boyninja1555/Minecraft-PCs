import { Link } from "react-router-dom"

export default function Footer() {
    return <footer className="py-[25px] bg-1 w-full">
        <p id="copyright-message" className="text-center">&copy; {new Date().getFullYear()} Minecraft-PCs</p>
        <p id="disclaimer" className="text-center"><b>DISCLAIMER:</b> This site does not provide real gaming computers, it provides build downloads for Minecraft Redstone Gaming PCs and their components.</p>

        <div className="flex justify-between mt-[25px] mx-auto px-[15px] max-w-[585px]">
            <div className="flex flex-col">
                <b className="uppercase">Pages</b>

                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </div>
            <div>
                <b className="uppercase">Socials</b>
            </div>
        </div>
    </footer>
}
