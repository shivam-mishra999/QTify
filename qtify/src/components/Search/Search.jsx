import React from 'react'
import {ReactComponent as SearchIcon} from "../../assets/Search_icon.svg";
import styles from "./Search.module.css";

export default function Search({placeholder}) {

    const onSubmit = (e) => {
        e.preventDefault();
    }
  return (
    <div>
      <form className={styles.wrapper} onSubmit={onSubmit}>
        <input className={styles.search} placeholder={placeholder} required />
        <button className={styles.searchButton} type="submit">
            <SearchIcon />
        </button>
      </form>
    </div>
  )
}
