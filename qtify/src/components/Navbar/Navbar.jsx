import React from 'react'
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Button from "../Button/Button";
import {Link} from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className={styles.navbar}>
        <Link to="/">
            <Logo />
        </Link>
        <Search placeholder= {"Search a album of your choice"} />
        <Button children="Give Feedback" />
      </nav>
    </div>
  )
}
