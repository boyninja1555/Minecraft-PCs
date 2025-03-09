import { useState, useEffect, JSX } from "react"
import { useSearchParams, useNavigate } from "react-router-dom"

export interface Part {
    id: string
    model_name: string
    model_owner: string
    product_type: string
    download_types: PartDownloadType[]
}

export interface DownloadType {
    title: string
    tag: JSX.Element
}

export interface PartDownloadType {
    type: keyof typeof downloadTypes
    [key: string]: any
}

export const downloadTypes = {
    worldedit: {
        title: "WorldEdit",
        tag: <a href="{direct_url}" download>WorldEdit</a>,
    },
    videotutorial: {
        title: "Video Tutorial",
        tag: <a href="https://www.youtube.com/watch?v={youtube_id}" target="_blank">Video Tutorial</a>,
    },
    worlddownload: {
        title: "World Download",
        tag: <a href="{direct_url}" download>World Download</a>,
    },
}

export const parts = async (): Promise<Part[]> => {
    const fetchData = async () => {
        const response = await fetch("/data/parts.json")
        const parts = await response.json()
        return parts
    }
    const data = await fetchData()
    return await data
}

export function usePartSearch() {
    const [searchParams] = useSearchParams()
    const initialQuery = searchParams.get("search-query") || ""
    const [query, setQuery] = useState(initialQuery)
    const [_partsData, setPartsData] = useState<Part[]>([])
    const [filteredParts, setFilteredParts] = useState<Part[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const navigate = useNavigate()

    if (!initialQuery || initialQuery.trim() === "") {
        navigate("/")
    }

    useEffect(() => {
        async function fetchParts() {
            setLoading(true)
            setError(null)

            try {
                const response = await fetch(`/api/parts?search=${encodeURIComponent(initialQuery)}`)

                if (!response.ok) {
                    throw new Error("Error fetching parts from the database.")
                }

                const data: Part[] = await response.json()

                setPartsData(data)
                setFilteredParts(
                    data.filter((part) =>
                        part.model_name.toLowerCase().includes(initialQuery.toLowerCase()) ||
                        part.model_owner.toLowerCase().includes(initialQuery.toLowerCase()) ||
                        part.product_type.toLowerCase().includes(initialQuery.toLowerCase())
                    )
                )
            } catch (err: any) {
                setError(err.message || "Unknown error")

                const partsData = await parts()

                setPartsData(partsData)
                setFilteredParts(
                    partsData.filter((part: Part) =>
                        part.model_name.toLowerCase().includes(initialQuery.toLowerCase()) ||
                        part.model_owner.toLowerCase().includes(initialQuery.toLowerCase()) ||
                        part.product_type.toLowerCase().includes(initialQuery.toLowerCase())
                    )
                )
            } finally {
                setLoading(false)
            }
        }
        fetchParts()
        setQuery(initialQuery)
    }, [initialQuery])

    return { query, filteredParts, loading, error }
}
