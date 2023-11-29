export default function SearchItem({ pageid, title, snippet, setFavouriteArticles, isFavourite }) {
    const addToFavourite = () => {
        setFavouriteArticles(prev => [...prev, { pageid, title, snippet }])
    }

    const RemoveFromFavourite = () => {
        setFavouriteArticles(prev => prev.filter(item => item.pageid !== pageid))
    }

    return (
        <div>
            <h2>{title}</h2>
            <div dangerouslySetInnerHTML={{ __html: snippet }}></div>
            <div className='btns-row'>
                <a href={`https://en.wikipedia.org/?curid=${pageid}`} target='_blank'>Read More</a>
                {
                    isFavourite ? <button onClick={RemoveFromFavourite}>Remove From Favourites</button>
                    : <button onClick={addToFavourite}>Add To Favourites</button>
                }
            </div>
        </div>
    )
}
