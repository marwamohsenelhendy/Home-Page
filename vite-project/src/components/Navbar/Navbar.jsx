import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./navbar.module.css"

export default function Navbar() {
    return (
        <header className={styles.navbar}>
            <Link to={"/"}>WikiSearch</Link>
            <nav>
                <Link to={"/favourites"}>Favourites</Link>
            </nav>
        </header>
    )
}
