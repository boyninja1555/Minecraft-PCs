import React from "react"
import { usePartSearch, downloadTypes, PartDownloadType } from "../components/usePartSearch"

export default function SearchResults() {
    const { query, filteredParts } = usePartSearch()

    return (
        <section className="p-[25px]">
            <h2>
                Showing results for <span className="text-blue-500">{query}</span>
            </h2>
            <ul>
                {filteredParts.length > 0 ? (
                    filteredParts.map((part, index) => (
                        <li key={index} className="my-[15px] p-[15px] bg-1">
                            <h5>
                                {part.model_owner} {part.model_name} {part.product_type.toUpperCase()}
                            </h5>
                            <ul className="download-options list-disc list-inside text-2">
                                {part.download_types.map((downloadType: PartDownloadType, idx: number) => {
                                    let { tag } = downloadTypes[downloadType.type]

                                    if (downloadType.type === "worldedit") {
                                        tag = React.cloneElement(tag, {
                                            href: tag.props.href.replace(/\{direct_url\}/g, downloadType.direct_url)
                                        })
                                    } else if (downloadType.type === "videotutorial") {
                                        tag = React.cloneElement(tag, {
                                            href: tag.props.href.replace(/\{youtube_id\}/g, downloadType.youtube_id)
                                        })
                                    } else if (downloadType.type === "worlddownload") {
                                        tag = React.cloneElement(tag, {
                                            href: tag.props.href.replace(/\{direct_url\}/g, downloadType.direct_url)
                                        })
                                    }

                                    return (
                                        <li key={idx}>
                                            {tag}
                                        </li>
                                    )
                                })}
                            </ul>
                        </li>
                    ))
                ) : (
                    <li className="p-[15px] bg-1 text-red-500">No results found.</li>
                )}
            </ul>
        </section>
    )
}
