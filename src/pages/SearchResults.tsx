import { useEffect } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"

export default function SearchResults() {
    const [urlParams] = useSearchParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (!urlParams.has("search-query") || urlParams.get("search-query")?.trim() === "") {
            navigate("/")
        }
    }, [urlParams])

    return (
        <>
            <h3>Now showing results for <span className="text-blue-500">{urlParams.get("search-query")}</span></h3>
        </>
    )
}
