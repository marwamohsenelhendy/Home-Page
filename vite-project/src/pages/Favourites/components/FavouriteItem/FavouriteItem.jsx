import { useEffect, useState } from "react"
import RemovalAlert from "../RemovalAlert/RemovalAlert"
import { createPortal } from 'react-dom'

export default function FavouriteItem({ pageid, title, snippet, setFavouriteArticles }) {
    const [showAlert, setShowAlert] = useState(false)

    const RemoveFromFavourite = () => {
        setFavouriteArticles(prev => prev.filter(item => item.pageid !== pageid))
    }

    const showRemovalAlert = () => {
        setShowAlert(true)
        document.body.classList.add("hide-overflow--removal-alert")
    }

    const closeAlert = () => {
        setShowAlert(false)
        document.body.classList.remove("hide-overflow--removal-alert")
    }

    useEffect(() => {
        return () => {
            closeAlert()
        }
    }, [])

    return (
        <>
            <div>
                <h2>{title}</h2>
                <div dangerouslySetInnerHTML={{ __html: snippet }}></div>
                <div className='btns-row'>
                    <a href={`https://en.wikipedia.org/?curid=${pageid}`} target='_blank'>Read More</a>
                    <button onClick={showRemovalAlert}>Remove From Favourites</button>
                </div>
            </div>
            {showAlert ? (
                createPortal(
                    <RemovalAlert
                        RemoveFromFavourite={RemoveFromFavourite}
                        closeAlert={closeAlert}
                    />,
                    document.body
                )
            ) : null}
        </>
    )
}
