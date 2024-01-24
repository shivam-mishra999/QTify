import React from 'react'
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";

export default function Navbar() {
  return (
    <div>
      <nav className={styles.navbar}>
        <a href="/">
            <Logo />
        </a>
        <Search placeholder= {"Search a album of your choice"} />
      </nav>
    </div>
  )
}
