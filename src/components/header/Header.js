import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div>
      <form action="" className={styles.header}>
        <h1>IP Address Location</h1>
        <input type="num"/>
        <button><i className="fas fa-chevron-right"></i></button>
      </form>
    </div>
  )
}

export default Header
