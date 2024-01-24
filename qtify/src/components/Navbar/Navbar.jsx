import React from 'react'
import styles from "Navbar.module.css";
import Logo from "../Logo/Logo";

export default function Navbar() {
  return (
    <div>
      <nav className={styles.Navbar}>
        <a href="/">
            <Logo />

        </a>
      </nav>
    </div>
  )
}
