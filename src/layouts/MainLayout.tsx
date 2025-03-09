import { Outlet, useNavigate } from "react-router-dom"

import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

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
            <NavBar onSearchSubmit={handleSubmit} />

            <div className="mt-[64px] w-full">
                <Outlet />
            </div>

            <Footer />
        </main>
    )
}
