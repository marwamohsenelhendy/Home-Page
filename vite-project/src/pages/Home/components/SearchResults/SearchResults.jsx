import { useEffect, useState } from "react"
import SearchItem from "../SearchItem/SearchItem"
import { getArticlesFromLocalStorage } from "../../../../utils"

export default function SearchResults({ results }) {
    const [favouriteArticles, setFavouriteArticles] = useState(getArticlesFromLocalStorage())
    const favouriteIDs = favouriteArticles.map(article => article.pageid)

    useEffect(() => {
        localStorage.setItem("articles", JSON.stringify(favouriteArticles))
    }, [favouriteArticles])

    if (results.length === 0) {
        return <p>No results here, try searching for something..</p>
    }

    return (
        <div>
            {results.map(result => (
                <SearchItem
                    key={result.pageid}
                    title={result.title}
                    snippet={result.snippet}
                    pageid={result.pageid}
                    setFavouriteArticles={setFavouriteArticles}
                    isFavourite={favouriteIDs.includes(result.pageid)}
                />
            ))}
        </div>
    )
}
