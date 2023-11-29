import { useEffect, useState } from 'react'
import { getArticlesFromLocalStorage } from '../../utils'
import FavouriteItem from './components/FavouriteItem/FavouriteItem'

export default function Favourites() {
    const [favouriteArticles, setFavouriteArticles] = useState(getArticlesFromLocalStorage())

    useEffect(() => {
        localStorage.setItem("articles", JSON.stringify(favouriteArticles))
    }, [favouriteArticles])

    return (
        <main className='container'>
            <h1>Your Favourites</h1>
            { favouriteArticles.length === 0 ? <p>No favourites here, go add some..</p> : null }
            {favouriteArticles.map(article => (
                <FavouriteItem
                    key={article.pageid}
                    pageid={article.pageid}
                    title={article.title}
                    snippet={article.snippet}
                    setFavouriteArticles={setFavouriteArticles}
                />
            ))}
        </main>
    )
}
